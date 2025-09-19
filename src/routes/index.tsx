import { createFileRoute } from '@tanstack/react-router'
import { Calendar, CheckSquare, FolderKanban, Plus, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your projects today.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Project
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <FolderKanban className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Projects</p>
              <p className="text-2xl font-bold text-foreground">12</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <CheckSquare className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tasks Completed</p>
              <p className="text-2xl font-bold text-foreground">24</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team Members</p>
              <p className="text-2xl font-bold text-foreground">8</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Calendar className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming Events</p>
              <p className="text-2xl font-bold text-foreground">3</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Projects */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Projects</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <h3 className="font-medium text-foreground">Website Redesign</h3>
              <p className="text-sm text-muted-foreground">Due in 3 days</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">In Progress</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <h3 className="font-medium text-foreground">Mobile App Development</h3>
              <p className="text-sm text-muted-foreground">Due in 1 week</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Planning</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <h3 className="font-medium text-foreground">Database Migration</h3>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Completed</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
