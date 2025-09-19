import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Calendar, Clock, Users, MapPin } from 'lucide-react'

export const Route = createFileRoute('/calendar')({
  component: CalendarPage,
})

function CalendarPage() {
  const events = [
    {
      id: 1,
      title: 'Team Standup',
      description: 'Daily team sync and progress updates',
      date: '2024-02-15',
      time: '09:00 AM',
      duration: '30 min',
      type: 'meeting',
      attendees: 8,
      location: 'Conference Room A'
    },
    {
      id: 2,
      title: 'Client Presentation',
      description: 'Present website redesign progress to client',
      date: '2024-02-16',
      time: '02:00 PM',
      duration: '1 hour',
      type: 'presentation',
      attendees: 5,
      location: 'Zoom Meeting'
    },
    {
      id: 3,
      title: 'Code Review Session',
      description: 'Review mobile app development progress',
      date: '2024-02-17',
      time: '10:30 AM',
      duration: '45 min',
      type: 'review',
      attendees: 4,
      location: 'Development Room'
    },
    {
      id: 4,
      title: 'Project Deadline',
      description: 'Website redesign phase 1 completion',
      date: '2024-02-20',
      time: '05:00 PM',
      duration: 'All day',
      type: 'deadline',
      attendees: 1,
      location: 'N/A'
    },
    {
      id: 5,
      title: 'Sprint Planning',
      description: 'Plan next sprint goals and tasks',
      date: '2024-02-22',
      time: '11:00 AM',
      duration: '2 hours',
      type: 'planning',
      attendees: 6,
      location: 'Conference Room B'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-500'
      case 'presentation': return 'bg-purple-500'
      case 'review': return 'bg-green-500'
      case 'deadline': return 'bg-red-500'
      case 'planning': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'meeting': return 'Meeting'
      case 'presentation': return 'Presentation'
      case 'review': return 'Code Review'
      case 'deadline': return 'Deadline'
      case 'planning': return 'Planning'
      default: return 'Event'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
          <p className="text-muted-foreground mt-1">View and manage your upcoming events and deadlines.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Event
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Events</p>
              <p className="text-2xl font-bold text-foreground">{events.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">This Week</p>
              <p className="text-2xl font-bold text-foreground">{events.filter(e => {
                const eventDate = new Date(e.date)
                const today = new Date()
                const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
                return eventDate >= today && eventDate <= weekFromNow
              }).length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Calendar className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Deadlines</p>
              <p className="text-2xl font-bold text-foreground">{events.filter(e => e.type === 'deadline').length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Calendar className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Meetings</p>
              <p className="text-2xl font-bold text-foreground">{events.filter(e => e.type === 'meeting').length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">Upcoming Events</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
              <div className={`w-3 h-3 rounded-full mt-2 ${getTypeColor(event.type)}`}></div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">{event.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {getTypeLabel(event.type)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time} ({event.duration})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}