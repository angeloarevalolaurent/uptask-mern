import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Logo from '@/components/Logo'
import NavMenu from '@/components/NavMenu'

export default function AppLayout() {

  return (

    <div
      className="
        min-h-screen flex flex-col
        bg-gradient-to-br
        from-gray-50
        via-fuchsia-50/30
        to-indigo-50/40
      "
    >


    {/* HEADER */}
    <header
      className="
        sticky top-0 z-50
        border-b border-white/10
        bg-gray-950/90
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
    >

  {/* Gradient Glow */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-fuchsia-500/10
      via-transparent
      to-indigo-500/10
      pointer-events-none
    "
  />

  <div
    className="
      relative max-w-screen-2xl
      mx-auto
      px-5 py-4
      flex items-center justify-between
    "
  >

    {/* LEFT */}
    <div className="flex items-center gap-6">

      {/* Logo */}
      <div
        className="
          w-48 lg:w-56
          transition-transform duration-300
          hover:scale-[1.02]
        "
      >
        <Logo />
      </div>

      {/* Divider */}
      <div className="hidden lg:block h-10 w-px bg-white/10" />

      {/* Mini Text */}
      <div className="hidden lg:flex flex-col">

        <span
          className="
            text-sm font-semibold
            tracking-wide text-white
          "
        >
          Task Management Platform
        </span>

        <span
          className="
            text-xs text-gray-400
          "
        >
          Organiza proyectos de forma inteligente
        </span>

      </div>

    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-4">

      {/* Online Indicator */}
      <div
        className="
          hidden lg:flex items-center gap-2
          rounded-full
          border border-emerald-500/20
          bg-emerald-500/10
          px-4 py-2
          text-sm font-medium text-emerald-400
        "
      >

        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

        Online

      </div>

      {/* Avatar */}
      <div
        className="
          hidden lg:flex h-11 w-11
          items-center justify-center
          rounded-2xl
          bg-gradient-to-br
          from-fuchsia-500
          to-indigo-600
          text-sm font-black text-white
          shadow-lg shadow-fuchsia-500/20
        "
      >
        A
      </div>

      {/* Menu */}
      <NavMenu />

    </div>

  </div>

</header>

      {/* MAIN */}
      <main className="flex-1 max-w-screen-2xl w-full mx-auto px-5 py-10">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer
        className="
          relative overflow-hidden
          border-t border-white/20
          bg-white/70
          backdrop-blur-2xl
        "
      >

        {/* Glow */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-fuchsia-100/20
            via-transparent
            to-indigo-100/20
          "
        />

        <div
          className="
            relative max-w-screen-2xl
            mx-auto
            px-5 py-8
          "
        >

          <div
            className="
              flex flex-col gap-6
              lg:flex-row lg:items-center
              lg:justify-between
            "
          >

            {/* LEFT */}
            <div>

              <h3 className="text-lg font-black text-gray-900">
                Uptask
              </h3>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500">
                Plataforma moderna de gestión de proyectos y tareas
                desarrollada con React, TypeScript, Tailwind y Node.js.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-start gap-4 lg:items-end">

              {/* Social Links */}
              <div className="flex items-center gap-3">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-xl border border-gray-200
                    bg-white px-4 py-2
                    text-sm font-semibold text-gray-700
                    transition-all duration-200
                    hover:border-fuchsia-200
                    hover:bg-fuchsia-50
                    hover:text-fuchsia-700
                  "
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-xl border border-gray-200
                    bg-white px-4 py-2
                    text-sm font-semibold text-gray-700
                    transition-all duration-200
                    hover:border-indigo-200
                    hover:bg-indigo-50
                    hover:text-indigo-700
                  "
                >
                  LinkedIn
                </a>

              </div>

              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Angelo Arevalo — Full Stack Developer
              </p>

            </div>

          </div>

        </div>

      </footer>

      {/* TOAST */}
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />

    </div>
  )
}