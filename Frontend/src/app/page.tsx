import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { TodayTaskSection } from "@/components/today-task-section"
import { TasksProgressChart } from "@/components/tasks-progress-chart"
import { AssignmentsSection } from "@/components/assignments-section"
import { RightSidebar } from "@/components/right-sidebar"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#F8F9FC]">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Header />
          <TodayTaskSection />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TasksProgressChart />
            <AssignmentsSection />
          </div>
        </div>
      </main>

      <RightSidebar />
    </div>
  )
}
