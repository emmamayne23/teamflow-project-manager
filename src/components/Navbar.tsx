import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"
import { Link } from "@tanstack/react-router"

export function Navbar() {
  const { user } = useUser()

  console.log(user)

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b">
      <div className="flex items-center gap-4">
        <Link 
              to="/" 
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                TeamFlow
              </span>
            </Link>
        <Link to="/dashboard" className="text-sm text-gray-700 hover:underline">
          Dashboard
        </Link>
        <Link to="/projects" className="text-sm text-gray-700 hover:underline">
          Projects
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <SignedIn>
            <UserButton />
        </SignedIn>
        <SignedOut>
            <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </nav>
  )
}
