import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Settings, User, Bell, Shield, Palette, Globe, Save } from 'lucide-react'

export const Route = createFileRoute('/settings')({
  component: SettingsPage,
})

function SettingsPage() {
  const settings = [
    {
      id: 1,
      title: 'Profile Settings',
      description: 'Manage your personal information and preferences',
      icon: User,
      items: 8
    },
    {
      id: 2,
      title: 'Notifications',
      description: 'Configure email and push notification preferences',
      icon: Bell,
      items: 5
    },
    {
      id: 3,
      title: 'Security & Privacy',
      description: 'Manage your account security and privacy settings',
      icon: Shield,
      items: 6
    },
    {
      id: 4,
      title: 'Appearance',
      description: 'Customize theme, colors, and display preferences',
      icon: Palette,
      items: 4
    },
    {
      id: 5,
      title: 'Language & Region',
      description: 'Set your preferred language and regional settings',
      icon: Globe,
      items: 3
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account settings and preferences.</p>
        </div>
        <Button className="gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Settings className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Settings</p>
              <p className="text-2xl font-bold text-foreground">{settings.reduce((sum, setting) => sum + setting.items, 0)}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <User className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Profile Complete</p>
              <p className="text-2xl font-bold text-foreground">85%</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Bell className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Notifications</p>
              <p className="text-2xl font-bold text-foreground">12</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Shield className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Security Score</p>
              <p className="text-2xl font-bold text-foreground">Excellent</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Settings Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settings.map((setting) => (
          <Card key={setting.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <setting.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">{setting.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{setting.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {setting.items} options
                  </Badge>
                  <Button variant="ghost" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-foreground">Updated profile information</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-foreground">Changed notification preferences</p>
              <p className="text-xs text-muted-foreground">1 day ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-foreground">Updated security settings</p>
              <p className="text-xs text-muted-foreground">3 days ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-foreground">Changed theme to dark mode</p>
              <p className="text-xs text-muted-foreground">1 week ago</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}