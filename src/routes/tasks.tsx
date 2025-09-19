import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, CheckSquare, Clock, User, Flag } from 'lucide-react'

export const Route = createFileRoute('/tasks')({
  component: TasksPage,
})

function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: 'Design new landing page',
      description: 'Create wireframes and mockups for the new landing page',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Sarah Johnson',
      dueDate: '2024-02-10',
      project: 'Website Redesign'
    },
    {
      id: 2,
      title: 'Setup development environment',
      description: 'Configure local development setup for the mobile app',
      status: 'completed',
      priority: 'medium',
      assignee: 'Mike Chen',
      dueDate: '2024-01-25',
      project: 'Mobile App Development'
    },
    {
      id: 3,
      title: 'Write API documentation',
      description: 'Document all REST API endpoints and examples',
      status: 'todo',
      priority: 'low',
      assignee: 'Alex Rodriguez',
      dueDate: '2024-02-20',
      project: 'API Integration'
    },
    {
      id: 4,
      title: 'Database optimization',
      description: 'Optimize database queries for better performance',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Emma Wilson',
      dueDate: '2024-02-05',
      project: 'Database Migration'
    },
    {
      id: 5,
      title: 'User testing sessions',
      description: 'Conduct usability testing with target users',
      status: 'todo',
      priority: 'medium',
      assignee: 'David Kim',
      dueDate: '2024-02-15',
      project: 'Website Redesign'
    }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'in-progress': return 'bg-blue-500'
      case 'todo': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      case 'todo': return 'To Do'
      default: return 'Unknown'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tasks</h1>
          <p className="text-muted-foreground mt-1">Track and manage all your tasks and assignments.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Task
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <CheckSquare className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Tasks</p>
              <p className="text-2xl font-bold text-foreground">{tasks.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <CheckSquare className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-2xl font-bold text-foreground">{tasks.filter(t => t.status === 'completed').length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <CheckSquare className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-2xl font-bold text-foreground">{tasks.filter(t => t.status === 'in-progress').length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gray-500/10 rounded-lg">
              <CheckSquare className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">To Do</p>
              <p className="text-2xl font-bold text-foreground">{tasks.filter(t => t.status === 'todo').length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-4 h-4 rounded-full mt-1 ${getStatusColor(task.status)}`}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{task.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {getStatusLabel(task.status)}
                    </Badge>
                    <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`}></div>
                    <span className="text-xs text-muted-foreground capitalize">{task.priority} priority</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flag className="w-4 h-4" />
                      <span>{task.project}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}