"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

export function Calendar() {
  const [currentDate] = useState(new Date(2024, 2, 6)) // March 6, 2024

  const daysInMonth = new Date(2024, 3, 0).getDate()
  const firstDayOfMonth = new Date(2024, 2, 1).getDay()

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900">March</h3>
        <button className="text-primary text-sm font-medium flex items-center gap-1">
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="text-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div key={index} className="aspect-square flex items-center justify-center">
            {day && (
              <button
                className={`w-8 h-8 rounded-lg text-sm font-medium ${
                  day === 6 ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {day}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
