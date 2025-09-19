import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import type { QueryClient } from '@tanstack/react-query'
import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { LayoutProvider, useLayout } from '@/contexts/LayoutContext'
import { cn } from '@/lib/utils'

interface MyRouterContext {
  queryClient: QueryClient
}

function RootLayout() {
  const { sidebarCollapsed } = useLayout()
  
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className={cn("pt-14 min-h-screen bg-background transition-all duration-300", sidebarCollapsed ? "ml-16" : "ml-64")}>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
      <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          TanStackQueryDevtools,
        ]}
      />
    </>
  )
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <LayoutProvider>
      <RootLayout />
    </LayoutProvider>
  ),
})
