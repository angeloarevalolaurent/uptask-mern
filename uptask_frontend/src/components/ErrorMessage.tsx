

export default function ErrorMessage({ children}: {children: React.ReactNode}) {
  return (
    <div
      className="
        flex items-start gap-3
        rounded-2xl border border-red-200
        bg-red-50 px-4 py-3
        text-sm font-medium text-red-700
        shadow-sm
        animate-in fade-in duration-200
      "
    >
      {/* Icon */}
      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
        !
      </div>

      {/* Message */}
      <p className="leading-relaxed">
        {children}
      </p>
    </div>
  )
}