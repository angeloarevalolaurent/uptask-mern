import { Link } from 'react-router-dom'

type DashboardHeaderProps = {
  projectCount: number
}

export default function DashboardHeader({
  projectCount
}: DashboardHeaderProps) {

  return (

    <div
      className="
        relative overflow-hidden
        rounded-[32px]
        border border-white/40
        bg-white/70
        p-7 lg:p-10
        backdrop-blur-2xl
        shadow-[0_15px_60px_rgba(0,0,0,0.08)]
      "
    >

      {/* Glow */}
      <div
        className="
          absolute -top-20 right-0
          h-72 w-72 rounded-full
          bg-fuchsia-400/10 blur-3xl
        "
      />

      <div
        className="
          absolute -bottom-24 left-0
          h-72 w-72 rounded-full
          bg-indigo-400/10 blur-3xl
        "
      />

      <div className="relative z-10">

        <div
          className="
            flex flex-col gap-8
            xl:flex-row xl:items-center xl:justify-between
          "
        >

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-fuchsia-200
                bg-fuchsia-50/80
                px-4 py-2
                text-sm font-bold
                text-fuchsia-700
                backdrop-blur-xl
              "
            >

              <div className="h-2.5 w-2.5 rounded-full bg-fuchsia-500 animate-pulse" />

              Panel de Proyectos

            </div>

            {/* Title */}
            <h1
              className="
                mt-5
                text-4xl lg:text-5xl
                font-black tracking-tight
                text-gray-900
              "
            >
              Mis Proyectos
            </h1>

            {/* Stats */}
            <div
              className="
                mt-8 flex flex-wrap gap-4
              "
            >

              {/* Projects */}
              <div
                className="
                  rounded-3xl
                  border border-white/50
                  bg-white/70
                  px-6 py-5
                  backdrop-blur-xl
                  shadow-sm
                "
              >

                <p className="text-3xl font-black text-gray-900">
                  {projectCount}
                </p>

                <span className="text-sm text-gray-500">
                  Proyectos
                </span>

              </div>

              {/* Collaborators */}
              <div
                className="
                  rounded-3xl
                  border border-white/50
                  bg-white/70
                  px-6 py-5
                  backdrop-blur-xl
                  shadow-sm
                "
              >

                <p className="text-3xl font-black text-gray-900">
                  12
                </p>

                <span className="text-sm text-gray-500">
                  Colaboradores
                </span>

              </div>

              {/* Effectiveness */}
              <div
                className="
                  rounded-3xl
                  border border-white/50
                  bg-white/70
                  px-6 py-5
                  backdrop-blur-xl
                  shadow-sm
                "
              >

                <p className="text-3xl font-black text-gray-900">
                  98%
                </p>

                <span className="text-sm text-gray-500">
                  Efectividad
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start gap-4 xl:items-end">

            <Link
              to="/projects/create"
              className="
                group relative inline-flex
                items-center justify-center
                overflow-hidden rounded-3xl
                bg-gradient-to-r
                from-fuchsia-600
                via-purple-600
                to-indigo-600
                px-8 py-5
                text-lg font-bold text-white
                shadow-[0_15px_40px_rgba(168,85,247,0.35)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(168,85,247,0.45)]
              "
            >

              {/* Hover Glow */}
              <span
                className="
                  absolute inset-0
                  bg-white/10 opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">
                + Nuevo Proyecto
              </span>

            </Link>

            <div
              className="
                rounded-full
                border border-emerald-200
                bg-emerald-50
                px-4 py-2
                text-sm font-semibold
                text-emerald-700
              "
            >
              Workspace activo
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}