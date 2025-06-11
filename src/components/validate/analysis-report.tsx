"use client";

import type { ValidateStartupIdeaOutput } from '@/ai/flows/validate-startup-idea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, TooltipProps } from 'recharts';
import { TrendingUp, Users, DollarSign, Sparkles, Lightbulb } from 'lucide-react';

interface AnalysisReportProps {
  result: ValidateStartupIdeaOutput;
}

const scoreToColor = (score: number) => {
  if (score >= 8) return "bg-green-500";
  if (score >= 5) return "bg-yellow-500";
  return "bg-red-500";
};

const scoreToTextClass = (score: number) => {
  if (score >= 8) return "text-green-600 dark:text-green-400";
  if (score >= 5) return "text-yellow-600 dark:text-yellow-400";
  return "text-red-600 dark:text-red-400";
};

const categoryIcons: { [key: string]: React.ReactElement } = {
  marketDemand: <TrendingUp className="h-6 w-6 text-primary" />,
  competition: <Users className="h-6 w-6 text-primary" />,
  investorInterest: <DollarSign className="h-6 w-6 text-primary" />,
  uniqueness: <Sparkles className="h-6 w-6 text-primary" />,
};

export function AnalysisReport({ result }: AnalysisReportProps) {
  const analysisItems = [
    { title: 'Market Demand', data: result.marketDemand, icon: categoryIcons.marketDemand, key: 'marketDemand' },
    { title: 'Competition Level', data: result.competition, icon: categoryIcons.competition, key: 'competition' },
    { title: 'Investor Interest', data: result.investorInterest, icon: categoryIcons.investorInterest, key: 'investorInterest' },
    { title: 'Uniqueness & Feasibility', data: result.uniqueness, icon: categoryIcons.uniqueness, key: 'uniqueness' },
  ];

  const chartData = analysisItems.map(item => ({
    name: item.title,
    score: item.data.score,
    fill: `var(--chart-${(analysisItems.indexOf(item) % 5) + 1})`, // Cycle through chart colors
  }));

  const chartConfig = analysisItems.reduce((acc, item) => {
    acc[item.key as keyof typeof acc] = {
      label: item.title,
      color: `hsl(var(--chart-${(analysisItems.indexOf(item) % 5) + 1}))`,
    };
    return acc;
  }, {} as any);
  

  return (
    <div className="space-y-8">
      <Card className="rounded-2xl shadow-lg border-transparent bg-card overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground p-6">
          <div className="flex items-center space-x-3">
            <Lightbulb className="h-8 w-8" />
            <CardTitle className="text-2xl font-orbitron">AI Suggestion</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-lg font-poppins text-foreground">{result.suggestion}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {analysisItems.map((item) => (
          <Card key={item.title} className="rounded-2xl shadow-lg border-transparent bg-card hover-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
              <div className="flex items-center space-x-3">
                {item.icon}
                <CardTitle className="text-xl font-orbitron text-primary">{item.title}</CardTitle>
              </div>
              <span className={`text-2xl font-bold font-orbitron ${scoreToTextClass(item.data.score)}`}>{item.data.score}/10</span>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <Progress value={item.data.score * 10} className={`h-3 ${scoreToColor(item.data.score)}`} indicatorClassName={scoreToColor(item.data.score)} />
              <CardDescription className="mt-4 text-muted-foreground font-poppins">{item.data.reason}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-2xl shadow-lg border-transparent bg-card">
        <CardHeader className="p-6">
          <CardTitle className="text-2xl font-orbitron text-primary">Overall Scores Visualized</CardTitle>
          <CardDescription className="font-poppins">A visual breakdown of your idea's scores across key areas.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px] min-h-[250px]">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="name" />}
              />
              <Pie
                data={chartData}
                dataKey="score"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={50}
                labelLine={false}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-semibold">
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
               <ChartLegend content={<ChartLegendContent nameKey="name" />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
