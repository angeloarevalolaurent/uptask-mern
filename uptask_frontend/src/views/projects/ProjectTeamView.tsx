import { Fragment } from "react";
import {Menu, Transition} from "@headlessui/react"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import AddMemberModal from "@/components/team/AddMemberModal";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import { getProjectTeam, removeUserFromProject } from "@/api/TeamAPI";
import { toast } from "react-toastify";


export default function ProjectTeamView() {

  const navigate = useNavigate()
  const params = useParams()
  const projectId = params.projectId!

  const {data, isLoading, isError} = useQuery({
    queryKey: ['projectTeam', projectId],
    queryFn: () => getProjectTeam(projectId),
    retry: false
  })


  const {mutate} = useMutation({
    mutationFn: removeUserFromProject,
    onError:(error)=> {
        toast.error(error.message)
    },
    onSuccess:(data =>{
        toast.success(data)
    })
  })

  if (isLoading) return 'Cargando...'
  if (isError) return <Navigate to={'/404'}/>
  if(data) return (
    <>
        {data.length ? (
            <div className="space-y-8">

                {/* HEADER */}
                <div
                className="
                    rounded-[32px]
                    border border-white/50
                    bg-white/80
                    p-8
                    shadow-xl
                    backdrop-blur-xl
                "
                >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                    <div className="flex items-center gap-3">

                        <Link
                        to={`/projects/${projectId}`}
                        className="
                            inline-flex items-center gap-2
                            rounded-xl
                            border border-gray-200
                            bg-white
                            px-4 py-2
                            font-semibold
                            text-gray-700
                            shadow-sm
                            transition-all
                            hover:-translate-y-0.5
                            hover:shadow-md
                        "
                        >
                        ← Volver
                        </Link>

                        <span
                        className="
                            rounded-full
                            bg-fuchsia-100
                            px-4 py-2
                            text-sm font-bold
                            text-fuchsia-700
                        "
                        >
                        Equipo del Proyecto
                        </span>

                    </div>

                    <h2
                        className="
                        mt-5
                        text-4xl
                        font-black
                        text-gray-900
                        "
                    >
                        Colaboradores
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Gestiona los miembros que participan en este proyecto.
                    </p>

                    </div>

                    <button
                    type="button"
                    onClick={() =>
                        navigate(location.pathname + "?addMember=true")
                    }
                    className="
                        inline-flex items-center gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-fuchsia-600
                        via-purple-600
                        to-indigo-600
                        px-7 py-4
                        font-bold
                        text-white
                        shadow-[0_15px_40px_rgba(168,85,247,0.35)]
                        transition-all duration-300
                        hover:-translate-y-1
                    "
                    >
                    <span className="text-xl">+</span>
                    Invitar Colaborador
                    </button>

                </div>

                {/* STATS */}
                <div className="mt-8">

                    <div
                    className="
                        inline-flex items-center gap-3
                        rounded-2xl
                        border border-fuchsia-100
                        bg-fuchsia-50
                        px-5 py-3
                    "
                    >
                    <span className="text-xl">👥</span>

                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                        Miembros Actuales
                        </p>

                        <p className="font-black text-gray-900">
                        {data.length} Colaborador{data.length > 1 ? "es" : ""}
                        </p>
                    </div>
                    </div>

                </div>

                </div>

                {/* GRID COLABORADORES */}
                <div className="grid gap-6 md:grid-cols-2">

                {data.map((member) => (

                    <div
                    key={member._id}
                    className="
                        group
                        relative
                        overflow-visible
                        rounded-[28px]
                        border border-gray-200
                        bg-white
                        p-6
                        shadow-sm
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                    "
                    >

                    {/* Glow */}
                    <div
                        className="
                        absolute inset-0
                        rounded-[28px]
                        bg-gradient-to-r
                        from-fuchsia-500/0
                        via-purple-500/0
                        to-indigo-500/0
                        opacity-0
                        transition-all duration-300
                        group-hover:opacity-100
                        group-hover:from-fuchsia-500/5
                        group-hover:via-purple-500/5
                        group-hover:to-indigo-500/5
                        "
                    />

                    <div className="relative z-10 flex items-start justify-between">

                        <div className="flex items-center gap-4">

                        <div
                            className="
                            flex h-16 w-16
                            items-center justify-center
                            rounded-2xl
                            bg-gradient-to-r
                            from-fuchsia-500
                            to-indigo-500
                            text-xl
                            font-black
                            text-white
                            shadow-lg
                            "
                        >
                            {member.name.charAt(0).toUpperCase()}
                        </div>

                        <div>

                            <h3
                            className="
                                text-lg
                                font-black
                                text-gray-900
                            "
                            >
                            {member.name}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                            {member.email}
                            </p>

                            <span
                            className="
                                mt-3 inline-flex
                                rounded-full
                                border border-green-200
                                bg-green-50
                                px-3 py-1
                                text-xs font-bold
                                text-green-700
                            "
                            >
                            Colaborador
                            </span>

                        </div>

                        </div>

                        <Menu as="div" className="relative">

                        <Menu.Button
                            className="
                            rounded-xl
                            p-2
                            text-gray-400
                            transition-colors
                            hover:bg-gray-100
                            hover:text-gray-700
                            "
                        >
                            <EllipsisVerticalIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                            />
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-in"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items
                            className="
                                absolute
                                right-0
                                top-12
                                z-50
                                w-56
                                overflow-hidden
                                rounded-2xl
                                border border-gray-200
                                bg-white
                                shadow-2xl
                                focus:outline-none
                            "
                            >
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    type="button"
                                    className={`
                                    w-full px-5 py-4 text-left font-medium
                                    ${
                                        active
                                        ? "bg-red-50 text-red-600"
                                        : "text-red-500"
                                    }
                                    `}
                                    onClick={() => mutate({projectId, userId:member._id})}
                                >
                                    Eliminar del Proyecto
                                </button>
                                )}
                            </Menu.Item>
                            </Menu.Items>
                        </Transition>

                        </Menu>

                    </div>

                    </div>

                ))}

                </div>

            </div>
        ) : (

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
                
        )}



        <AddMemberModal/>
      </> 
  )
}