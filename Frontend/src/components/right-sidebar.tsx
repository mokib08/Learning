import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/calendar"
import { MoreVertical } from "lucide-react"

export function RightSidebar() {
  const schedules = [
    { time: "09:00", title: "UI Motion", duration: "09:00am - 10:00pm", color: "bg-primary" },
    { time: "10:00", title: "", duration: "", color: "" },
    { time: "11:00", title: "", duration: "", color: "" },
    { time: "12:00", title: "UI Design", duration: "12:00pm - 01:00pm", color: "bg-pink-500" },
    { time: "01:00", title: "", duration: "", color: "" },
  ]

  const batchmates = [
    { name: "Rosen Jay", role: "UI/UX Designer", avatar: "/diverse-person-portrait.png" },
    { name: "Kim Jeeyong", role: "UI/UX Designer", avatar: "/diverse-group-conversation.png" },
    { name: "Kim Jeeyong", role: "UI/UX Designer", avatar: "/diverse-group-meeting.png" },
  ]

  return (
    <aside className="w-80 bg-white border-l border-gray-200 overflow-auto">
      <div className="p-6">
        <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/kim-namjoon.jpg" />
              <AvatarFallback>KN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-gray-900">Kim Namjoon</h3>
              <p className="text-sm text-gray-600">UI/UX Designer</p>
            </div>
          </div>

          <Calendar />

          <div className="mt-6 space-y-3">
            {schedules.map((schedule, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-xs text-gray-500 w-12 pt-1">{schedule.time}</span>
                {schedule.title ? (
                  <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        <div className={`w-1 h-12 rounded-full ${schedule.color}`} />
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900">{schedule.title}</h4>
                          <p className="text-xs text-gray-500 mt-0.5">{schedule.duration}</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Batchmates</h3>

          <div className="space-y-3">
            {batchmates.map((mate, index) => (
              <div key={index} className="bg-white rounded-lg p-3 flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={mate.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{mate.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-gray-900">{mate.name}</h4>
                  <p className="text-xs text-gray-500">{mate.role}</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-4 bg-transparent">
            See all
          </Button>
        </div>
      </div>
    </aside>
  )
}
