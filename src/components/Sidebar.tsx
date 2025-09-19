import {
  Calendar,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  LayoutDashboard,
  Plus,
  Settings,
  Users,
} from "lucide-react"
import { Link, useLocation } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useLayout } from "@/contexts/LayoutContext"

export function Sidebar() {
  const { sidebarCollapsed: collapsed, setSidebarCollapsed: setCollapsed } = useLayout()
  const location = useLocation()

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: null, path: "/" },
    { id: "projects", label: "Projects", icon: FolderKanban, badge: "12", path: "/projects" },
    { id: "tasks", label: "Tasks", icon: CheckSquare, badge: "24", path: "/tasks" },
    { id: "team", label: "Team", icon: Users, badge: null, path: "/team" },
    { id: "calendar", label: "Calendar", icon: Calendar, badge: "3", path: "/calendar" },
    { id: "settings", label: "Settings", icon: Settings, badge: null, path: "/settings" },
  ]

  return (
    <Card
      className={cn("fixed left-0 top-0 h-screen border-r border-border bg-card transition-all duration-300 z-40", collapsed ? "w-16" : "w-64")}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FolderKanban className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">ProjectFlow</span>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 p-0">
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link key={item.id} to={item.path}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn("w-full justify-start gap-3 h-10", collapsed && "justify-center px-0")}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* Create Project Button */}
        <div className="p-4 border-t border-border">
          <Button className="w-full gap-2" size={collapsed ? "sm" : "default"}>
            <Plus className="w-4 h-4" />
            {!collapsed && "New Project"}
          </Button>
        </div>
      </div>
    </Card>
  )
}
