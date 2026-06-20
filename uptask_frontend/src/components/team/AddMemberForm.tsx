import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import ErrorMessage from "../ErrorMessage";
import type { TeamMemberForm } from "@/types/index";
import { findUserByEmail } from "@/api/TeamAPI";
import SearchResult from "./SearchResult";

export default function AddMemberForm() {

    const initialValues: TeamMemberForm = {
        email: ''
    }

    const params = useParams()
    const projectId = params.projectId!

    const { register, handleSubmit, reset, formState: { errors }} = useForm({ defaultValues: initialValues})

    const mutation = useMutation({
        mutationFn: findUserByEmail
    })

    const handleSearchUser = async (formData: TeamMemberForm) => {
        const data = {projectId, formData}
        mutation.mutate(data)
    }


     const resetData = () => {
        reset(),
        mutation.reset()
    }

    return (
        <>
    
        <form
            onSubmit={handleSubmit(handleSearchUser)}
            noValidate
            className="space-y-8"
        >

            {/* INPUT CARD */}
            <div className="group relative">

                {/* Glow */}
                <div
                    className="
                        absolute -inset-1
                        rounded-[32px]
                        bg-gradient-to-r
                        from-fuchsia-500/0
                        via-purple-500/0
                        to-indigo-500/0
                        opacity-0 blur-2xl
                        transition-all duration-500
                        group-focus-within:opacity-100
                        group-focus-within:from-fuchsia-500/20
                        group-focus-within:via-purple-500/20
                        group-focus-within:to-indigo-500/20
                    "
                />

                <div
                    className="
                        relative
                        rounded-[28px]
                        border border-gray-200/80
                        bg-white/80
                        p-6
                        shadow-sm
                        backdrop-blur-xl
                        transition-all duration-300
                        group-focus-within:border-fuchsia-300
                        group-focus-within:shadow-xl
                        group-focus-within:shadow-fuchsia-100/50
                    "
                >

                    {/* Label */}
                    <div className="mb-5">

                        <label
                            htmlFor="email"
                            className="
                                block
                                text-sm
                                font-black
                                uppercase
                                tracking-[0.18em]
                                text-gray-500
                            "
                        >
                            Correo Electrónico
                        </label>

                        <p className="mt-2 text-sm text-gray-400">
                            Busca un colaborador mediante su correo registrado.
                        </p>

                    </div>

                    {/* Input */}
                    <div className="relative">

                        <span
                            className="
                                absolute left-5 top-1/2
                                -translate-y-1/2
                                text-xl
                            "
                        >
                            ✉️
                        </span>

                        <input
                            id="email"
                            type="email"
                            placeholder="usuario@correo.com"
                            className={`
                                w-full
                                rounded-2xl
                                border
                                bg-gray-50/80
                                py-5 pl-14 pr-5
                                text-lg
                                font-medium
                                text-gray-900
                                placeholder:text-gray-400
                                outline-none
                                transition-all duration-300
                                focus:bg-white
                                focus:ring-4
                                ${
                                    errors.email
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                                        : 'border-gray-200 focus:border-fuchsia-500 focus:ring-fuchsia-100'
                                }
                            `}
                            {...register('email', {
                                required: 'El Email es obligatorio',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'E-mail no válido'
                                }
                            })}
                        />

                    </div>

                    {errors.email && (
                        <div className="mt-4">
                            <ErrorMessage>
                                {errors.email.message}
                            </ErrorMessage>
                        </div>
                    )}

                </div>

            </div>

            {/* BUTTON */}
            <button
                type="submit"
                disabled={mutation.isPending}
                className="
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-2xl
                    bg-gradient-to-r
                    from-fuchsia-600
                    via-purple-600
                    to-indigo-600
                    px-8 py-5
                    text-lg
                    font-black
                    text-white
                    shadow-[0_15px_40px_rgba(168,85,247,0.35)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(168,85,247,0.45)]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                "
            >

                <span
                    className="
                        absolute inset-0
                        bg-white/10
                        opacity-0
                        transition-opacity duration-300
                        group-hover:opacity-100
                    "
                />

                <span className="relative z-10 flex items-center justify-center gap-3">

                    {mutation.isPending ? (
                        <>
                            <div
                                className="
                                    h-5 w-5
                                    animate-spin
                                    rounded-full
                                    border-2 border-white/30
                                    border-t-white
                                "
                            />
                            Buscando...
                        </>
                    ) : (
                        <>
                            🔍 Buscar Colaborador
                        </>
                    )}

                </span>

            </button>

        </form> 
        
        <div className="m-10">
            {mutation.isPending && <p className="text-center">Cargando....</p>}
            {mutation.error && <p className="text-center">{mutation.error.message}</p>}
            {mutation.data && <SearchResult user={mutation.data} reset={resetData}/>}
        </div>
        
        </>
    )
}