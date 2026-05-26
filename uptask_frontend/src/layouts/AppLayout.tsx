import { Outlet } from 'react-router-dom'
import Logo from '@/components/Logo'
import NavMenu from '@/components/NavMenu'

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Header */}
      <header className="bg-gray-900 shadow-md">
        <div className="max-w-screen-2xl mx-auto px-5 py-5 flex flex-col lg:flex-row items-center justify-between">
          
          <div className="w-52 lg:w-64">
            <Logo />
          </div>

          <NavMenu />
          
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-screen-2xl w-full mx-auto px-5 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-screen-2xl mx-auto px-5">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Uptask. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  )
}