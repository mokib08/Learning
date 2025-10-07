"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { day: "M", value: 2.5 },
  { day: "T", value: 3.5 },
  { day: "W", value: 2.8 },
  { day: "T", value: 3.2 },
  { day: "F", value: 4.2 },
  { day: "S", value: 3.8 },
  { day: "S", value: 4.0 },
]

export function TasksProgressChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Tasks Progress</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 12 }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            ticks={[0, 1, 2, 3, 4, 5]}
            domain={[0, 5]}
          />
          <Bar dataKey="value" fill="#8B5CF6" radius={[8, 8, 0, 0]} maxBarSize={40} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 flex items-center justify-between text-sm">
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">Weekly</button>
      </div>
    </div>
  )
}
