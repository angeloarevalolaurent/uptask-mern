import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import AddMemberForm from './AddMemberForm'

export default function AddMemberModal() {

  const location = useLocation()
  const navigate = useNavigate()

  const queryParams = new URLSearchParams(location.search)
  const addMember = queryParams.get('addMember')

  const show = !!addMember

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() =>
          navigate(location.pathname, { replace: true })
        }
      >

        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">

          <div className="flex min-h-full items-center justify-center p-5">

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >

              <Dialog.Panel
                className="
                  relative w-full max-w-4xl
                  overflow-hidden
                  rounded-[36px]
                  border border-white/40
                  bg-white/90
                  shadow-[0_30px_100px_rgba(0,0,0,0.15)]
                  backdrop-blur-2xl
                "
              >

                {/* TOP BORDER */}
                <div
                  className="
                    h-1.5
                    bg-gradient-to-r
                    from-fuchsia-600
                    via-purple-600
                    to-indigo-600
                  "
                />

                {/* Decorative Blur */}
                <div
                  className="
                    absolute -top-20 -right-20
                    h-72 w-72
                    rounded-full
                    bg-fuchsia-400/10
                    blur-3xl
                  "
                />

                <div
                  className="
                    absolute -bottom-20 -left-20
                    h-72 w-72
                    rounded-full
                    bg-indigo-400/10
                    blur-3xl
                  "
                />

               

                <div className="relative z-10 p-10 lg:p-14">

                  {/* Badge */}
                  <div
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-fuchsia-200
                      bg-fuchsia-50
                      px-4 py-2
                      text-sm
                      font-bold
                      text-fuchsia-700
                    "
                  >
                    Invitación de Colaboradores
                  </div>

                  {/* Title */}
                  <Dialog.Title
                    as="h2"
                    className="
                      mt-6
                      text-4xl
                      font-black
                      tracking-tight
                      text-gray-900
                      lg:text-5xl
                    "
                  >
                    Invitar colaborador
                  </Dialog.Title>

                  {/* Subtitle */}
                  <p
                    className="
                      mt-5
                      max-w-2xl
                      text-lg
                      leading-relaxed
                      text-gray-600
                    "
                  >
                    Busca un usuario por correo electrónico para
                    agregarlo al proyecto y permitirle colaborar
                    junto al administrador.
                  </p>

                  {/* Divider */}
                  <div
                    className="
                      my-10
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-gray-200
                      to-transparent
                    "
                  />

                  {/* Form */}
                  <AddMemberForm />

                </div>

              </Dialog.Panel>

            </Transition.Child>

          </div>

        </div>

      </Dialog>
    </Transition>
  )
}