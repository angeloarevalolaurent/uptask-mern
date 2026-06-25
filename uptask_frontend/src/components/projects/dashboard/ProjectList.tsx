import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { Project, User } from '@/types/index'
import { isManager } from '@/utils/policies'


interface ProjectListProps {
    data: Project[]
    mutate: (id: Project["_id"]) => void
    user:User
}


export default function ProjectList({ data, mutate, user }: ProjectListProps) {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

          {data.map((project) => (

            <div
              key={project._id}
              className="
                group relative overflow-hidden rounded-[32px]
                border border-white/40 bg-white/80
                backdrop-blur-xl
                p-7
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(168,85,247,0.18)]
              "
            >

              {/* Gradient Glow */}
              <div
                className="
                  absolute inset-0 opacity-0 transition-opacity duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-fuchsia-100/40
                  via-purple-100/10
                  to-indigo-100/40
                "
              />

              {/* Top Glow Border */}
              <div
                className="
                  absolute inset-x-0 top-0 h-[3px]
                  bg-gradient-to-r
                  from-fuchsia-500
                  via-purple-500
                  to-indigo-500
                "
              />

              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-start justify-between gap-5">

                  <div className="flex items-center gap-5">

                    {/* Avatar */}
                    <div
                      className="
                        flex h-16 w-16 items-center justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-fuchsia-500
                        to-purple-600
                        text-2xl font-black text-white
                        shadow-lg shadow-fuchsia-500/30
                      "
                    >
                      {project.projectName.charAt(0)}
                    </div>

                    {/* Info */}
                    <div>

                      <div
                        className={`
                          mb-2 inline-flex items-center rounded-full
                          px-3 py-1 text-xs font-bold uppercase tracking-wider
                          ${isManager(project.manager,user._id) 
                              ? 'border border-indigo-500 bg-indigo-50 text-indigo-500'
                              : 'border border-emerald-500 bg-emerald-50 text-emerald-700'
                          }
                        `}
                      >
                        {isManager(project.manager, user._id) ? '👑 Manager' : '👥 Colaborador'}
                      </div>



                      {/* Title */}
                      <Link
                        to={`/projects/${project._id}`}
                        className="
                          block text-2xl font-black tracking-tight
                          text-gray-900 transition-colors
                          hover:text-purple-600
                        "
                      >
                        {project.projectName}
                      </Link>

                      {/* Client */}
                      <p className="mt-1 text-sm text-gray-500">
                        Cliente:
                        <span className="ml-2 font-semibold text-gray-700">
                          {project.clientName}
                        </span>
                      </p>

                    </div>

                  </div>

                  {/* Menu */}
                  <Menu as="div" className="relative">

                    <Menu.Button
                      className="
                        rounded-2xl border border-gray-200 bg-white/70
                        p-2.5 text-gray-500
                        shadow-sm backdrop-blur-md
                        transition-all duration-200
                        hover:border-purple-200
                        hover:bg-purple-50
                        hover:text-purple-600
                      "
                    >
                      <EllipsisVerticalIcon className="h-6 w-6" />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition duration-200 ease-out"
                      enterFrom="opacity-0 scale-95 translate-y-1"
                      enterTo="opacity-100 scale-100 translate-y-0"
                      leave="transition duration-100 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >

                      <Menu.Items
                        className="
                          absolute right-0 top-14 z-50
                          w-60 overflow-hidden
                          rounded-2xl border border-white/50
                          bg-white/95 backdrop-blur-xl
                          p-2
                          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                          focus:outline-none
                        "
                      >

                        <div className="space-y-1">

                          <Menu.Item>
                            <Link
                              to={`/projects/${project._id}`}
                              className="
                                flex items-center rounded-xl px-4 py-3
                                text-sm font-semibold text-gray-700
                                transition-all duration-200
                                hover:bg-gray-100
                              "
                            >
                              Ver Proyecto
                            </Link>
                          </Menu.Item>

                        {isManager(project.manager, user._id ) && (

                          <>
                          <Menu.Item>
                            <Link
                              to={`/projects/${project._id}/edit`}
                              className="
                                flex items-center rounded-xl px-4 py-3
                                text-sm font-semibold text-gray-700
                                transition-all duration-200
                                hover:bg-gray-100
                              "
                            >
                              Editar Proyecto
                            </Link>
                          </Menu.Item>

                          <Menu.Item>
                            <button
                              type="button"
                              className="
                                flex w-full items-center rounded-xl
                                px-4 py-3 text-left text-sm font-semibold
                                text-red-600 transition-all duration-200
                                hover:bg-red-50
                              "
                              onClick={() => navigate(location.pathname + `?deleteProject=${project._id}`)}
                            >
                              Eliminar Proyecto
                            </button>
                          </Menu.Item>
                          
                          </>
                        )}

                        </div>

                      </Menu.Items>

                    </Transition>

                  </Menu>

                </div>

                {/* Description */}
                <p
                  className="
                    mt-8 line-clamp-3
                    leading-relaxed text-gray-600
                  "
                >
                  {project.description}
                </p>

                {/* Footer */}
                <div
                  className="
                    mt-8 flex items-center justify-between
                    border-t border-gray-100 pt-6
                  "
                >

                  <div className="flex items-center gap-3">

                    <div className="flex -space-x-3">
                      <div className="h-9 w-9 rounded-full border-2 border-white bg-purple-300" />
                      <div className="h-9 w-9 rounded-full border-2 border-white bg-fuchsia-300" />
                      <div className="h-9 w-9 rounded-full border-2 border-white bg-indigo-300" />
                    </div>

                    <span className="text-sm text-gray-500">
                      3 miembros
                    </span>

                  </div>

                  <div
                    className="
                      rounded-full bg-gray-100
                      px-4 py-2 text-xs font-bold
                      uppercase tracking-wide text-gray-600
                    "
                  >
                    Actualizado hoy
                  </div>

                </div>

              </div>

            </div>

          ))}

      </div>

    </>
  )
}
