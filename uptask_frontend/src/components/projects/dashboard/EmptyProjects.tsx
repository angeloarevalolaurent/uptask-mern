import { Link } from "react-router-dom"

export default function EmptyProjects() {

  return (
    <>

 {/* Background Gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-fuchsia-100/50
          via-white
          to-indigo-100/40
        "
      />

      {/* Glow Effects */}
      <div
        className="
          absolute -top-20 -right-20
          h-64 w-64 rounded-full
          bg-fuchsia-400/20 blur-3xl
        "
      />

      <div
        className="
          absolute -bottom-24 -left-20
          h-64 w-64 rounded-full
          bg-indigo-400/20 blur-3xl
        "
      />

      <div
        className="
          relative z-10
          flex flex-col gap-10
          lg:flex-row lg:items-center lg:justify-between
        "
      >

        {/* Left Content */}
        <div className="max-w-3xl">

          {/* Badge */}
          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full border border-fuchsia-200
              bg-fuchsia-50 px-4 py-2
              text-sm font-bold
              tracking-wide text-fuchsia-700
            "
          >

            <div className="h-2 w-2 rounded-full bg-fuchsia-500" />

            Workspace Activo

          </div>

          {/* Title */}
          <h1
            className="
              text-5xl lg:text-6xl
              font-black tracking-tight
              text-gray-900
            "
          >
            Comienza creando tu primer proyecto
          </h1>

          {/* Description */}
          <p
            className="
              mt-5 max-w-2xl
              text-lg lg:text-xl
              leading-relaxed
              text-gray-600
            "
          >
            Administra tareas, clientes y objetivos dentro
            de una experiencia moderna, visual y totalmente
            optimizada para productividad.
          </p>

          {/* Stats */}
          <div
            className="
              mt-8 flex flex-wrap items-center gap-4
            "
          >

            <div
              className="
                rounded-2xl border border-white/50
                bg-white/70 px-5 py-4
                backdrop-blur-xl
                shadow-sm
              "
            >
              <p className="text-2xl font-black text-gray-900">
                +100
              </p>

              <span className="text-sm text-gray-500">
                Proyectos Creados
              </span>
            </div>

            <div
              className="
                rounded-2xl border border-white/50
                bg-white/70 px-5 py-4
                backdrop-blur-xl
                shadow-sm
              "
            >
              <p className="text-2xl font-black text-gray-900">
                98%
              </p>

              <span className="text-sm text-gray-500">
                Productividad
              </span>
            </div>

          </div>

        </div>

        {/* Right CTA */}
        <div className="flex flex-col items-start gap-4 lg:items-end">

          <Link
            to="/projects/create"
            className="
              group relative inline-flex
              items-center justify-center
              overflow-hidden rounded-2xl
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

          <p className="text-sm text-gray-500">
            Organiza tu flujo de trabajo fácilmente
          </p>

        </div>

      </div>

      
      {/* Background Glow */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-fuchsia-100/40
          via-white
          to-indigo-100/40
        "
      />

      {/* Floating Glow */}
      <div
        className="
          absolute -top-24 -left-24
          h-72 w-72 rounded-full
          bg-fuchsia-400/20 blur-3xl
        "
      />

      <div
        className="
          absolute -bottom-24 -right-24
          h-72 w-72 rounded-full
          bg-indigo-400/20 blur-3xl
        "
      />

      <div className="relative z-10">

        <div className="flex flex-col items-center text-center">

          {/* Icon */}
          <div
            className="
              relative flex h-28 w-28 items-center
              justify-center rounded-[30px]
              bg-gradient-to-br
              from-fuchsia-500
              via-purple-500
              to-indigo-600
              shadow-[0_20px_50px_rgba(168,85,247,0.35)]
            "
          >

            {/* Glow Ring */}
            <Link to="/projects/create">
                <div
                className="absolute inset-0 rounded-[30px] border border-white/30 " />
            
                <span  className="text-5xl font-black text-white">
                +
                </span>
            </Link>
          </div>

          {/* Title */}
          <h2
            className="
              mt-10 text-4xl
              font-black tracking-tight
              text-gray-900
            "
          >
            Aún no tienes proyectos
          </h2>

          {/* Description */}
          <p
            className="
              mt-5 max-w-2xl
              text-lg leading-relaxed
              text-gray-500
            "
          >
            Comienza creando tu primer proyecto y organiza tareas,
            clientes y objetivos dentro de una experiencia moderna,
            visual y productiva.
          </p>

          {/* Features */}
          <div
            className="
              mt-10 flex flex-wrap
              items-center justify-center
              gap-4
            "
          >

            <div
              className="
                rounded-full border border-fuchsia-200
                bg-fuchsia-50 px-5 py-2
                text-sm font-semibold
                text-fuchsia-700
              "
            >
              Gestión Inteligente
            </div>

            <div
              className="
                rounded-full border border-indigo-200
                bg-indigo-50 px-5 py-2
                text-sm font-semibold
                text-indigo-700
              "
            >
              Organización Visual
            </div>

            <div
              className="
                rounded-full border border-emerald-200
                bg-emerald-50 px-5 py-2
                text-sm font-semibold
                text-emerald-700
              "
            >
              Productividad
            </div>

          </div>

          {/* CTA */}
          <Link
            to="/projects/create"
            className="
              group relative mt-12
              inline-flex items-center
              justify-center overflow-hidden
              rounded-2xl
              bg-gradient-to-r
              from-fuchsia-600
              via-purple-600
              to-indigo-600
              px-10 py-5
              text-lg font-bold
              text-white
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
              + Crear Primer Proyecto
            </span>

          </Link>

        </div>

      </div>
    </>
    
  )
}