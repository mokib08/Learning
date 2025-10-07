import { LayoutDashboard, TrendingUp, FolderKanban, FileText, HelpCircle, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Taskify</span>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-white bg-primary rounded-lg"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <TrendingUp className="w-5 h-5" />
            Track
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <FolderKanban className="w-5 h-5" />
            Projects
            <span className="ml-auto w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
              3
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <FileText className="w-5 h-5" />
            Reports
          </a>
        </div>
      </nav>

      <div className="p-4 space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          <HelpCircle className="w-5 h-5" />
          Support
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          <Settings className="w-5 h-5" />
          Settings
        </a>
      </div>
    </aside>
  )
}
