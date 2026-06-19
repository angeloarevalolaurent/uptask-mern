import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import type { Project, Task } from '@/types/index'
import AddTaskModal from '@/components/projects/task/AddTaskModal'
import TaskList from '@/components/projects/task/TaskList'
import EditTaskData from '@/components/projects/task/EditTaskData'
import TaskModalDetails from '@/components/projects/task/TaskModalDetail'

interface ProjectProps {
    _id: Project["_id"]
    projectName: Project["projectName"]
    clientName: Project["clientName"]
    description: Project["description"]
    tasks: Task[]
}



export default function ProjectHeader( { data }: { data: ProjectProps } ) {

    const navigate = useNavigate()

  return (
    <>
        <div
        className="
            relative overflow-hidden
            rounded-[36px]
            border border-white/40
            bg-white/80
            p-8 lg:p-10
            shadow-[0_25px_80px_rgba(0,0,0,0.08)]
            backdrop-blur-2xl
        "
        >

        {/* Glow Effects */}
        <div
            className="
            absolute -top-24 -right-24
            h-72 w-72 rounded-full
            bg-fuchsia-400/10 blur-3xl
            "
        />

        <div
            className="
            absolute -bottom-24 -left-24
            h-72 w-72 rounded-full
            bg-indigo-400/10 blur-3xl
            "
        />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_340px]">

            {/* ================= LEFT ================= */}
            <div>

            {/* TOP ACTIONS */}
            <div className="flex flex-wrap items-center justify-between gap-4">

                <Link
                to="/"
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
                Proyecto Activo
                </div>

            </div>

            {/* TITLE */}
            <h1
                className="
                mt-8
                text-4xl
                lg:text-6xl
                font-black
                tracking-tight
                text-gray-900
                "
            >
                {data.projectName}
            </h1>

            {/* DESCRIPTION */}
            <p
                className="
                mt-6
                text-lg lg:text-xl
                leading-relaxed
                text-gray-600
                max-w-4xl
                "
            >
                {data.description}
            </p>

            {/* INFO GRID */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">

                <div
                className="
                    rounded-3xl
                    border border-gray-200
                    bg-white
                    p-6
                    shadow-sm
                "
                >
                <p className="text-xs uppercase tracking-widest text-gray-400">
                    Cliente
                </p>

                <p className="mt-3 text-xl font-bold text-gray-900">
                    {data.clientName}
                </p>
                </div>

                <div
                className="
                    rounded-3xl
                    border border-gray-200
                    bg-white
                    p-6
                    shadow-sm
                "
                >
                <p className="text-xs uppercase tracking-widest text-gray-400">
                    Estado
                </p>

                <p className="mt-3 text-xl font-bold text-green-600">
                    ● En Progreso
                </p>
                </div>

                <div
                className="
                    rounded-3xl
                    border border-gray-200
                    bg-white
                    p-6
                    shadow-sm
                "
                >
                <p className="text-xs uppercase tracking-widest text-gray-400">
                    Tareas Registradas
                </p>

                <p className="mt-3 text-3xl font-black text-gray-900">
                    0
                </p>
                </div>

                <div
                className="
                    rounded-3xl
                    border border-gray-200
                    bg-white
                    p-6
                    shadow-sm
                "
                >
                <p className="text-xs uppercase tracking-widest text-gray-400">
                    Progreso
                </p>

                <p className="mt-3 text-3xl font-black text-indigo-600">
                    0%
                </p>
                </div>

            </div>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-wrap gap-4">

                <button
                type="button"
                className="
                    group
                    inline-flex items-center gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-fuchsia-600
                    via-purple-600
                    to-indigo-600
                    px-8 py-4
                    text-lg font-bold text-white
                    shadow-[0_15px_40px_rgba(168,85,247,0.35)]
                    transition-all duration-300
                    hover:-translate-y-1
                "
                onClick={() => navigate(location.pathname + '?newTask=true')}
                >
                <span className="text-2xl">+</span>
                Agregar Tarea
                </button>

                <Link
                    to={'team'}
                    className=' group
                    inline-flex items-center gap-3
                    rounded-2xl     
                    bg-fuchsia-600
                    px-8 py-4
                    text-lg font-bold text-white
                    shadow-[0_15px_40px_rgba(168,85,247,0.35)]
                    transition-all duration-300
                    hover:-translate-y-1'
                >Colaboradores  </Link>

            </div>

            </div>

            {/* ================= RIGHT ================= */}
            <aside className="space-y-5">

            {/* SUMMARY */}
            <div
                className="
                rounded-[30px]
                border border-white/50
                bg-white/90
                p-7
                shadow-lg
                "
            >
                <h3 className="font-black text-gray-900 text-xl">
                Resumen General
                </h3>

                <div className="mt-6 space-y-5">

                <div>
                    <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Completado</span>
                    <span className="font-bold">0%</span>
                    </div>

                    <div className="mt-2 h-3 rounded-full bg-gray-100 overflow-hidden">
                    <div
                        className="
                        h-full rounded-full
                        bg-gradient-to-r
                        from-fuchsia-500
                        to-indigo-500
                        "
                        style={{ width: '0%' }}
                    />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs text-gray-500">
                        Pendientes
                    </p>

                    <p className="mt-2 text-2xl font-black">
                        0
                    </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs text-gray-500">
                        Completadas
                    </p>

                    <p className="mt-2 text-2xl font-black">
                        0
                    </p>
                    </div>

                </div>

                </div>
            </div>

            {/* QUICK ACTION */}
            <div
                className="
                overflow-hidden
                rounded-[30px]
                bg-gradient-to-br
                from-fuchsia-600
                via-purple-600
                to-indigo-700
                p-7
                text-white
                shadow-xl
                "
            >
                <h3 className="text-xl font-black">
                ¿Listo para comenzar?
                </h3>

                <p className="mt-3 text-white/80">
                Crea tareas, organiza prioridades y
                monitorea el avance de tu proyecto.
                </p>

                <button
                type="button"
                className="
                    mt-6 w-full
                    rounded-2xl
                    bg-white
                    px-6 py-4
                    font-bold
                    text-indigo-700
                    transition-all
                    hover:-translate-y-1
                "
                onClick={() => navigate('?newTask=true')}
                >
                + Nueva Tarea
                </button>
            </div>

            </aside>

        </div>

        </div>
        <TaskList  tasks={data.tasks}/>
        <AddTaskModal />
        <EditTaskData/>
        <TaskModalDetails/>
    </>
  )
}
