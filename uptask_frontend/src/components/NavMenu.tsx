import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, UserCircleIcon,FolderIcon,ArrowLeftStartOnRectangleIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import type { User } from '../types'
import { useQueryClient } from '@tanstack/react-query'

type NavMenuProps = {
  name: User['name']
}




export default function NavMenu({name} : NavMenuProps) {

  const queryClient = useQueryClient()
  const logout = () => {
    localStorage.removeItem('AUTH_TOKEN')
    queryClient.invalidateQueries({queryKey:['user']})
  }


  return (

    <Popover className="relative">

      {/* BUTTON */}
      <Popover.Button
        className="
          group relative inline-flex
          items-center justify-center
          rounded-2xl
          border border-white/10
          bg-white/5
          p-3
          backdrop-blur-xl
          transition-all duration-300
          hover:border-fuchsia-500/30
          hover:bg-fuchsia-500/10
          hover:shadow-[0_10px_30px_rgba(168,85,247,0.18)]
        "
      >

        {/* Glow */}
        <div
          className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-br
            from-fuchsia-500/0
            to-indigo-500/0
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
            group-hover:from-fuchsia-500/10
            group-hover:to-indigo-500/10
          "
        />

        <Bars3Icon
          className="
            relative z-10 h-7 w-7
            text-white transition-transform duration-300
            group-hover:scale-110
          "
        />

      </Popover.Button>

      {/* PANEL */}
      <Transition
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95 translate-y-2"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >

        <Popover.Panel
          className="
            absolute right-0 z-50 mt-5
            w-80 overflow-hidden
            rounded-[28px]
            border border-white/10
            bg-[#09090B]
            backdrop-blur-2xl
            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          "
        >

          {/* Top Glow */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-fuchsia-500/10
              via-transparent
              to-indigo-500/10
              pointer-events-none
            "
          />

          <div className="relative z-10 p-6">

            {/* USER */}
            <div
              className="
                flex items-center gap-4
                rounded-2xl
                border border-white/10
                bg-white/5
                p-4
              "
            >

              {/* Avatar */}
              <div
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-fuchsia-500
                  to-indigo-600
                  text-lg font-black text-white
                  shadow-lg shadow-fuchsia-500/20
                "
              >
                A
              </div>

              {/* Info */}
              <div>

                <p className="text-sm text-gray-400">
                  Bienvenido
                </p>

                <h3
                  className="
                    text-lg font-bold
                    tracking-tight text-white
                  "
                >
                  {name}
                </h3>

              </div>

            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-white/10" />

            {/* LINKS */}
            <div className="space-y-2">

              <Link
                to="/profile"
                className="
                  group flex items-center gap-4
                  rounded-2xl
                  px-4 py-4
                  text-gray-300
                  transition-all duration-200
                  hover:bg-white/5
                  hover:text-white
                "
              >

                <div
                  className="
                    rounded-xl bg-fuchsia-500/10
                    p-2 text-fuchsia-400
                    transition-all duration-200
                    group-hover:scale-110
                  "
                >
                  <UserCircleIcon className="h-5 w-5" />
                </div>

                <div>

                  <p className="font-semibold">
                    Mi Perfil
                  </p>

                  <span className="text-xs text-gray-500">
                    Gestiona tu información
                  </span>

                </div>

              </Link>

              <Link
                to="/"
                className="
                  group flex items-center gap-4
                  rounded-2xl
                  px-4 py-4
                  text-gray-300
                  transition-all duration-200
                  hover:bg-white/5
                  hover:text-white
                "
              >

                <div
                  className="
                    rounded-xl bg-indigo-500/10
                    p-2 text-indigo-400
                    transition-all duration-200
                    group-hover:scale-110
                  "
                >
                  <FolderIcon className="h-5 w-5" />
                </div>

                <div>

                  <p className="font-semibold">
                    Mis Proyectos
                  </p>

                  <span className="text-xs text-gray-500">
                    Administra tus proyectos
                  </span>

                </div>

              </Link>

            </div>

            {/* Logout */}
            <div className="mt-5">

              <button
                type="button"
                onClick={logout}
                className="
                  group flex w-full items-center gap-4
                  rounded-2xl
                  border border-red-500/10
                  bg-red-500/5
                  px-4 py-4
                  text-red-400
                  transition-all duration-200
                  hover:border-red-500/20
                  hover:bg-red-500/10
                "
              >

                <div
                  className="
                    rounded-xl bg-red-500/10
                    p-2
                    transition-transform duration-200
                    group-hover:scale-110
                  "
                >
                  <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
                </div>

                <div className="text-left">

                  <p className="font-semibold">
                    Cerrar Sesión
                  </p>

                  <span className="text-xs text-red-300/70">
                    Salir de la plataforma
                  </span>

                </div>

              </button>

            </div>

          </div>

        </Popover.Panel>

      </Transition>

    </Popover>
  )
}