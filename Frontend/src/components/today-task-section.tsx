import { Button } from "@/components/ui/button"
import { TaskCard } from "@/components/task-card"

export function TodayTaskSection() {
  const tasks = [
    {
      date: "Mar 2, 2024",
      title: "Web Dashboard",
      subtitle: "Redesign",
      progress: 90,
      progressColor: "bg-primary",
      daysLeft: 3,
      daysColor: "bg-purple-100 text-primary",
      avatars: ["/diverse-person-portrait.png", "/diverse-group-conversation.png"],
    },
    {
      date: "Mar 6, 2024",
      title: "Mobile App",
      subtitle: "Shopping",
      progress: 30,
      progressColor: "bg-blue-500",
      daysLeft: 35,
      daysColor: "bg-blue-100 text-blue-600",
      avatars: ["/diverse-group-meeting.png", "/diverse-group-meeting.png"],
    },
    {
      date: "Mar 8, 2024",
      title: "Animation",
      subtitle: "Prototyping",
      progress: 75,
      progressColor: "bg-orange-500",
      daysLeft: 7,
      daysColor: "bg-orange-100 text-orange-600",
      avatars: ["/diverse-group-five.png", "/diverse-group-meeting.png"],
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Today Task</h2>
          <p className="text-sm text-gray-500 mt-1">Check your daily tasks and schedules</p>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white">Today's schedule</Button>

          <img src="/person-working-on-laptop-illustration.jpg" alt="Illustration" className="w-32 h-32" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  )
}
