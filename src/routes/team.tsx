import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Users, Mail, Phone, MapPin, Calendar } from 'lucide-react'

export const Route = createFileRoute('/team')({
  component: TeamPage,
})

function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Designer',
      email: 'sarah.johnson@company.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      joinDate: '2023-01-15',
      avatar: 'SJ',
      status: 'active',
      projects: 3
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Senior Developer',
      email: 'mike.chen@company.com',
      phone: '+1 (555) 234-5678',
      location: 'New York, NY',
      joinDate: '2022-08-20',
      avatar: 'MC',
      status: 'active',
      projects: 5
    },
    {
      id: 3,
      name: 'Alex Rodriguez',
      role: 'Project Manager',
      email: 'alex.rodriguez@company.com',
      phone: '+1 (555) 345-6789',
      location: 'Austin, TX',
      joinDate: '2023-03-10',
      avatar: 'AR',
      status: 'active',
      projects: 4
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Backend Developer',
      email: 'emma.wilson@company.com',
      phone: '+1 (555) 456-7890',
      location: 'Seattle, WA',
      joinDate: '2022-11-05',
      avatar: 'EW',
      status: 'active',
      projects: 2
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'UX Researcher',
      email: 'david.kim@company.com',
      phone: '+1 (555) 567-8901',
      location: 'Los Angeles, CA',
      joinDate: '2023-06-01',
      avatar: 'DK',
      status: 'active',
      projects: 3
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'Frontend Developer',
      email: 'lisa.thompson@company.com',
      phone: '+1 (555) 678-9012',
      location: 'Chicago, IL',
      joinDate: '2023-02-14',
      avatar: 'LT',
      status: 'away',
      projects: 4
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'away': return 'bg-yellow-500'
      case 'offline': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Active'
      case 'away': return 'Away'
      case 'offline': return 'Offline'
      default: return 'Unknown'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team</h1>
          <p className="text-muted-foreground mt-1">Manage your team members and their information.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Member
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Members</p>
              <p className="text-2xl font-bold text-foreground">{teamMembers.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Users className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active</p>
              <p className="text-2xl font-bold text-foreground">{teamMembers.filter(m => m.status === 'active').length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Users className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Away</p>
              <p className="text-2xl font-bold text-foreground">{teamMembers.filter(m => m.status === 'away').length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Projects</p>
              <p className="text-2xl font-bold text-foreground">{teamMembers.reduce((sum, member) => sum + member.projects, 0)}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {member.avatar}
                </div>
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(member.status)}`}></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <Badge variant="secondary" className="text-xs mt-1">
                  {getStatusLabel(member.status)}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="truncate">{member.email}</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{member.phone}</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{member.location}</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Joined {new Date(member.joinDate).toLocaleDateString()}</span>
              </div>
              
              <div className="pt-2 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Projects</span>
                  <Badge variant="outline" className="text-xs">
                    {member.projects}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                Message
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Profile
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}