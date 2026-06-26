import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-black text-center text-5xl text-white">
        404 - Página No Encontrada
      </h1>

      <p className="mt-6 text-center text-white">
        La ruta que intentas acceder no existe
      </p>

      <Link
        to="/"
        className="mt-6 text-fuchsia-500 font-bold"
      >
        Volver a Proyectos
      </Link>
    </div>
  )
}