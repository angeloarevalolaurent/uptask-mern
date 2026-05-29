import { Link } from "react-router-dom"
import type { ReactNode } from "react"

type ProjectFormLayoutProps = {
  children: ReactNode
  title: string
  subtitle: string
  tag: string
}

export default function ProjectFormLayout({
  children,
  title,
  subtitle,
  tag
}: ProjectFormLayoutProps) {
  return (
    <div className="relative isolate">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="space-y-12">

        {/* HEADER */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/80 p-8 shadow-lg backdrop-blur-2xl lg:p-12">

          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100/40 via-white to-indigo-100/40" />

          <div className="relative z-10 flex items-center justify-between gap-8">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white/80 px-5 py-2 text-sm font-bold text-fuchsia-700">
                {tag}
              </div>

              <h1 className="mt-6 text-5xl font-black text-gray-900">
                {title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-gray-600">
                {subtitle}
              </p>
            </div>

            <Link
              to="/"
              className="rounded-2xl border bg-white/90 px-7 py-4 font-semibold text-gray-700 shadow hover:-translate-y-1 transition"
            >
              ← Volver
            </Link>

          </div>
        </div>

        {/* CONTENT */}
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[40px] border bg-white/85 shadow-xl backdrop-blur-2xl">

            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600" />

            <div className="relative z-10 p-8 lg:p-14">
              {children}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}