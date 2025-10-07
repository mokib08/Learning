import { Checkbox } from "@/components/ui/checkbox"

export function AssignmentsSection() {
  const assignments = [
    { title: "Colour Theory", score: "84/100", total: "Out 100", date: "15 Mar 2024", completed: false },
    { title: "Design system", score: "90/100", total: "To Do", date: "", completed: false },
    { title: "User persona", score: "0/100", total: "To Do", date: "13 Mar 2024", completed: false },
    { title: "Prototyping", score: "0/100", total: "To Do", date: "01 Mar 2024", completed: false },
  ]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">
          Assignments <span className="text-gray-400 font-normal">(12)</span>
        </h3>
        <button className="text-sm text-primary font-medium hover:underline">See all completed</button>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
            <Checkbox className="mt-1" />

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 text-sm">{assignment.title}</h4>
              {assignment.date && <p className="text-xs text-gray-500 mt-0.5">{assignment.date}</p>}
            </div>

            <div className="text-right">
              <div className="text-sm font-semibold text-gray-900">{assignment.score}</div>
              <div className="text-xs text-gray-500">{assignment.total}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
