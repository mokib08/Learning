import { Bell } from "lucide-react"

export function Header() {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Hi, Kim Namjoon</h1>
        <p className="text-sm text-gray-500 mt-1">Let's finish your task today!</p>
      </div>

      <button className="relative p-2 hover:bg-gray-100 rounded-lg">
        <Bell className="w-5 h-5 text-gray-600" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
      </button>
    </div>
  )
}
