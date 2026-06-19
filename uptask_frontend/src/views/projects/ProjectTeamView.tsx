import AddMemberModal from "@/components/team/AddMemberModal";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProjectTeamView() {

  const navigate = useNavigate()
  const params = useParams()
  const projectId = params.projectId!

  return (
    <>
 
        <div className="relative isolate">

            {/* Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div
                className="
                    absolute left-[-120px] top-0
                    h-80 w-80 rounded-full
                    bg-fuchsia-300/20 blur-3xl
                "
                />

                <div
                className="
                    absolute right-[-120px] bottom-0
                    h-96 w-96 rounded-full
                    bg-indigo-300/20 blur-3xl
                "
                />

            </div>

            <div
                className="
                relative overflow-hidden
                rounded-[40px]
                border border-white/40
                bg-white/80
                p-8 lg:p-12
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                backdrop-blur-2xl
                "
            >

                {/* Decorative */}
                <div
                className="
                    absolute -top-32 right-0
                    h-72 w-72 rounded-full
                    bg-fuchsia-400/10 blur-3xl
                "
                />

                <div
                className="
                    absolute -bottom-32 left-0
                    h-72 w-72 rounded-full
                    bg-indigo-400/10 blur-3xl
                "
                />

                <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_380px]">

                {/* LEFT */}
                <div>

                    {/* Top */}
                    <div className="flex flex-wrap items-center gap-4">

                    <Link
                        to={`/projects/${projectId}`}
                        className="
                        inline-flex items-center gap-3
                        rounded-2xl
                        border border-gray-200
                        bg-white
                        px-5 py-3
                        font-semibold text-gray-700
                        shadow-sm
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                        "
                    >
                        ← Volver
                    </Link>

                    <div
                        className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-fuchsia-200
                        bg-fuchsia-50
                        px-4 py-2
                        text-sm font-bold
                        text-fuchsia-700
                        "
                    >
                        Equipo del Proyecto
                    </div>

                    </div>

                    {/* Title */}
                    <h1
                    className="
                        mt-10
                        text-5xl lg:text-6xl
                        font-black
                        tracking-tight
                        text-gray-900
                    "
                    >
                    Invitar
                    <span
                        className="
                        block
                        bg-gradient-to-r
                        from-fuchsia-600
                        via-purple-600
                        to-indigo-600
                        bg-clip-text
                        text-transparent
                        "
                    >
                        Colaboradores
                    </span>
                    </h1>

                    <p
                    className="
                        mt-6
                        max-w-2xl
                        text-xl
                        leading-relaxed
                        text-gray-600
                    "
                    >
                    Agrega miembros mediante correo electrónico para que
                    participen y colaboren dentro del proyecto.
                    </p>

                    {/* Main Action */}
                    <div className="mt-10">

                    <button
                        type="button"
                        onClick={() =>
                        navigate(location.pathname + "?addMember=true")
                        }
                        className="
                        group
                        inline-flex items-center gap-4
                        rounded-3xl
                        bg-gradient-to-r
                        from-fuchsia-600
                        via-purple-600
                        to-indigo-600
                        px-10 py-5
                        text-xl font-bold
                        text-white
                        shadow-[0_20px_50px_rgba(168,85,247,0.35)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_25px_60px_rgba(168,85,247,0.45)]
                        "
                    >

                        <span
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-xl bg-white/20
                            text-2xl
                        "
                        >
                        +
                        </span>

                        Invitar Colaborador

                    </button>

                    </div>

                </div>

                {/* RIGHT */}
                <aside>

                    <div
                    className="
                        relative overflow-hidden
                        rounded-[32px]
                        border border-white/50
                        bg-white/90
                        p-8
                        shadow-xl
                    "
                    >

                    <div
                        className="
                        absolute top-0 left-0 h-1.5 w-full
                        bg-gradient-to-r
                        from-fuchsia-600
                        via-purple-600
                        to-indigo-600
                        "
                    />

                    {/* Fake Team Illustration */}
                    <div className="mt-4 flex justify-center">

                        <div className="relative h-40 w-40">

                        <div
                            className="
                            absolute left-1/2 top-0
                            flex h-16 w-16
                            -translate-x-1/2
                            items-center justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-fuchsia-500
                            to-purple-600
                            text-2xl text-white
                            shadow-lg
                            "
                        >
                            👑
                        </div>

                        <div
                            className="
                            absolute bottom-0 left-0
                            flex h-14 w-14
                            items-center justify-center
                            rounded-xl
                            bg-indigo-100
                            text-xl
                            "
                        >
                            👤
                        </div>

                        <div
                            className="
                            absolute bottom-0 right-0
                            flex h-14 w-14
                            items-center justify-center
                            rounded-xl
                            bg-fuchsia-100
                            text-xl
                            "
                        >
                            👤
                        </div>

                        <div
                            className="
                            absolute bottom-6 left-1/2
                            flex h-14 w-14
                            -translate-x-1/2
                            items-center justify-center
                            rounded-xl
                            bg-purple-100
                            text-xl
                            "
                        >
                            👤
                        </div>

                        </div>

                    </div>

                    <div className="mt-8 text-center">

                        <h3
                        className="
                            text-2xl
                            font-black
                            text-gray-900
                        "
                        >
                        Gestiona tu equipo
                        </h3>

                        <p
                        className="
                            mt-3
                            leading-relaxed
                            text-gray-600
                        "
                        >
                        Invita nuevos colaboradores para trabajar
                        conjuntamente en el proyecto.
                        </p>

                    </div>

                    <div
                        className="
                        mt-8
                        rounded-2xl
                        border border-gray-100
                        bg-gray-50
                        p-4
                        "
                    >

                        <div className="flex items-center gap-3">

                        <div
                            className="
                            h-10 w-10 rounded-xl
                            bg-gradient-to-r
                            from-fuchsia-500
                            to-purple-600
                            "
                        />

                        <div>

                            <p className="font-bold text-gray-900">
                            Administrador
                            </p>

                            <p className="text-sm text-gray-500">
                            Control total del proyecto
                            </p>

                        </div>

                        </div>

                    </div>

                    </div>

                </aside>

                </div>

            </div>

        </div>

        <AddMemberModal/>
      </> 
  )
}