'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Monat 1', alt: 1.2, neu: 1.5 },
  { month: 'Monat 2', alt: 1.1, neu: 2.8 },
  { month: 'Monat 3', alt: 1.3, neu: 4.2 },
  { month: 'Monat 4', alt: 1.0, neu: 5.9 },
  { month: 'Monat 5', alt: 1.2, neu: 8.1 },
  { month: 'Monat 6', alt: 1.1, neu: 10.5 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
        <p className="font-bold text-slate-900 mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-sm font-medium" style={{ color: payload[1].color }}>
            Neue Webseite: {payload[1].value}% Conversion
          </p>
          <p className="text-sm font-medium" style={{ color: payload[0].color }}>
            Alte Webseite: {payload[0].value}% Conversion
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function ConversionChart() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorNeu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorAlt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
            tickFormatter={(value) => `${value}%`}
            dx={-10}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="alt" 
            stroke="#94a3b8" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorAlt)" 
            name="Alte Webseite"
          />
          <Area 
            type="monotone" 
            dataKey="neu" 
            stroke="url(#brand-gradient)" 
            strokeWidth={4}
            fillOpacity={1} 
            fill="url(#colorNeu)" 
            name="Neue Webseite"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
