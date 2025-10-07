import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface TaskCardProps {
  date: string
  title: string
  subtitle: string
  progress: number
  progressColor: string
  daysLeft: number
  daysColor: string
  avatars: string[]
}

export function TaskCard({
  date,
  title,
  subtitle,
  progress,
  progressColor,
  daysLeft,
  daysColor,
  avatars,
}: TaskCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="text-xs text-gray-500 mb-3">{date}</div>

      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{subtitle}</p>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold text-gray-900">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className={cn("h-full rounded-full", progressColor)} style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <Avatar key={index} className="w-8 h-8 border-2 border-white">
              <AvatarImage src={avatar || "/placeholder.svg"} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ))}
          <div className="w-8 h-8 rounded-full bg-primary text-white text-xs flex items-center justify-center border-2 border-white font-medium">
            +2
          </div>
        </div>

        <span className={cn("px-3 py-1 rounded-full text-xs font-medium", daysColor)}>{daysLeft} days left</span>
      </div>
    </div>
  )
}
