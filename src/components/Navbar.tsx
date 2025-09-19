import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"
import { Link } from "@tanstack/react-router"
import { Bell, FileText, FolderKanban, ListChecks, Menu, Plus, Search, Users, X } from "lucide-react"
import { useState } from "react"
import { useLayout } from "@/contexts/LayoutContext"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { user } = useUser()
  const { sidebarCollapsed } = useLayout()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <nav className={cn("fixed top-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border transition-all duration-300", sidebarCollapsed ? "left-16" : "left-64")}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left: brand + nav links (exclude items on left rail) */}
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/" className="flex items-center gap-2 min-w-0">
            <svg 
              fill="#ffffff" 
              width="30px" 
              height="30px" 
              viewBox="0 0 501 501" 
              xmlns="http://www.w3.org/2000/svg" 
              version="1"><g id="mattermost_dark__SVGRepo_bgCarrier" stroke-width="0"/><g id="mattermost_dark__SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="mattermost_dark__SVGRepo_iconCarrier"><path d="M236 .7C137.7 7.5 54 68.2 18.2 158.5c-32 81-19.6 172.8 33 242.5 39.8 53 97.2 87 164.3 97 16.5 2.7 48 3.2 63.5 1.2 48.7-6.3 92.2-24.6 129-54.2 13-10.5 33-31.2 42.2-43.7 26.4-35.5 42.8-75.8 49-120.3 1.6-12.3 1.6-48.7 0-61-4-28.3-12-54.8-24.2-79.5-12.8-26-26.5-45.3-46.8-65.8C417.8 64 400.2 49 398.4 49c-.6 0-.4 10.5.3 26l1.3 26 7 8.7c19 23.7 32.8 53.5 38.2 83 2.5 14 3 43 1 55.8-4.5 27.8-15.2 54-31 76.5-8.6 12.2-28 31.6-40.2 40.2-24 17-50 27.6-80 33-10 1.8-49 1.8-59 0-43-7.7-78.8-26-107.2-54.8-29.3-29.7-46.5-64-52.4-104.4-2-14-1.5-42 1-55C90 121.4 132 72 192 49.7c8-3 18.4-5.8 29.5-8.2 1.7-.4 34.4-38 35.3-40.6.3-1-10.2-1-20.8-.4z"/><path d="M322.2 24.6c-1.3.8-8.4 9.3-16 18.7-7.4 9.5-22.4 28-33.2 41.2-51 62.2-66 81.6-70.6 91-6 12-8.4 21-9 33-1.2 19.8 5 36 19 50C222 268 230 273 243 277.2c9 3 10.4 3.2 24 3.2 13.8 0 15 0 22.6-3 23.2-9 39-28.4 45-55.7 2-8.2 2-28.7.4-79.7l-2-72c-1-36.8-1.4-41.8-3-44-2-3-4.8-3.6-7.8-1.4z"/></g></svg>
              <span className="font-semibold text-white">TeamFlow</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[50vw]">
              {[
                { label: 'Projects', icon: <FolderKanban className="h-4 w-4" /> },
                { label: 'Tasks', icon: <ListChecks className="h-4 w-4" /> },
                { label: 'Reports', icon: <FileText className="h-4 w-4" /> },
                { label: 'Team', icon: <Users className="h-4 w-4" /> }
              ].map((item) => (
                <Link key={item.label} to="/" className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-gray-900 transition-colors whitespace-nowrap">
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: search + quick add + user */}
          <div className="hidden sm:flex items-center gap-2">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-80' : 'w-64'}`}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="search"
                placeholder="Search projects, tasks, people"
                className="w-full pl-9 pr-3 py-2 rounded-md bg-gray-900 border border-gray-800 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
            <button className="inline-flex items-center gap-2 px-2.5 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"><Plus className="h-4 w-4" /> New</button>
            <button className="relative p-2 rounded-md text-gray-300 hover:bg-gray-900">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] bg-red-500 text-white rounded-full flex items-center justify-center">2</span>
            </button>
            <div className="flex items-center pl-3 ml-1 border-l border-gray-800">
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: { avatarBox: "h-8 w-8" }
                  }}
                />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-3 py-1.5 rounded-md bg-white text-gray-900 text-sm">Sign in</button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>

          {/* Mobile: keep user visible + hamburger */}
          <div className="sm:hidden flex items-center gap-2">
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{ elements: { avatarBox: "h-8 w-8" } }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-2.5 py-1.5 rounded-md bg-white text-gray-900 text-sm">Sign in</button>
              </SignInButton>
            </SignedOut>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-200 hover:bg-gray-900">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-850 bg-gray-950">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: "text-white bg-gray-900" }}
            >
              Dashboard
            </Link>
            <Link
              to="/"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: "text-white bg-gray-900" }}
            >
              Projects
            </Link>
            <Link
              to="/"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{ className: "text-white bg-gray-900" }}
            >
              Team
            </Link>
            
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input 
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60"
                />
              </div>
            </div>

            {/* Mobile Notifications */}
            <div className="px-3 py-2 flex justify-center">
              <button className="relative p-3 text-gray-200 hover:text-white hover:bg-gray-900 rounded-lg transition-colors w-full flex items-center justify-center">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
                <span className="absolute top-2 right-4 h-5 w-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center shadow-sm">
                  2
                </span>
              </button>
            </div>

            {/* Mobile Auth */}
            <div className="px-3 py-2 border-t border-gray-850 pt-4">
              <SignedIn>
                <div className="flex items-center gap-3 px-3 py-2">
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "h-10 w-10",
                      }
                    }}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-100">{user?.fullName}</p>
                    <p className="text-xs text-gray-400">{user?.primaryEmailAddress?.emailAddress}</p>
                  </div>
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button 
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-100 transition-all shadow-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}