import { useEffect, useState } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente,setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [nombreMascota, setNombreMascota] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length) {
      setNombre(paciente.nombre)
      setNombreMascota(paciente.nombreMascota)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const reiniciarForm = () => {
    document.querySelector("#propietario").value = ''
    document.querySelector("#mascota").value = ''
    document.querySelector("#email").value = ''
    document.querySelector("#alta").value = ''
    document.querySelector("#sintomas").value = ''
  }
  const generarID = () => {
    const nombre = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return nombre + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([nombre, nombreMascota, email, alta, sintomas, fecha].includes('')) {
      setError(true)
      return
    }
    setError(false)
    const nuevoPaciente = {
      nombre,
      nombreMascota,
      email,
      fecha,
      sintomas
    }

    if (paciente.id) {
      nuevoPaciente.id=paciente.id
      const pacientesActualizados= pacientes.map(pacientesState=>
        paciente.id===pacientesState.id ? nuevoPaciente : pacientesState
      )
    setPacientes(pacientesActualizados)
    setPaciente({})
    } else {
      nuevoPaciente.id=generarID()
      setPacientes([...pacientes, nuevoPaciente])
    }  
    setNombre('')
    setNombreMascota('')
    setEmail('')
    setFecha('')
    setSintomas('')
    reiniciarForm()
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-2xl font-black text-center">Seguimiento de Pacientes</h2>
      <p className="mt-4 text-center">Añadelos y Administralos</p>
      <form className="bg-yellow-400 flex items-center shadow-md flex-col py-5 rounded-md px-6 mt-5" onSubmit={handleSubmit}>
        {error && <Error mensaje={'Debe de llenar todos los campos'} />}
        <div className="w-full mb-5">
          <label htmlFor="mascota" className="font-bold text-lg">Nombre de la mascota</label>
          <input id="mascota" type="text" placeholder="Nombre de la Mascota" className="mt-1 w-full  py-2 px-3 rounded-md outline-red-500" value={nombreMascota}
            onChange={
              (e) => {
                setNombreMascota(e.target.value)
              }
            }
          />
        </div>
        <div className="w-full mb-5">
          <label htmlFor="propietario" className="font-bold text-lg">Nombre del Propietario</label>
          <input id="propietario" type="text" placeholder="Nombre del Propietario" className="mt-1 w-full  py-2 px-3 rounded-md outline-red-500" value={nombre}
            onChange={(e) => {
              setNombre(e.target.value)
            }}
          />
        </div>
        <div className="w-full mb-5">
          <label htmlFor="email" className="font-bold text-lg">EMAIL</label>
          <input id="email" type="text" placeholder="Email Contacto Propietario" className="mt-1 w-full  py-2 px-3 rounded-md outline-red-500" value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />
        </div>
        <div className="w-full mb-5">
          <label htmlFor="alta" className="font-bold text-lg">Alta</label>
          <input id="alta" type="date" className="mt-1 w-full  py-2 px-3 rounded-md outline-red-500" value={fecha} onChange={(e) => { setFecha(e.target.value) }} />
        </div>
        <div className="w-full mb-5">
          <label htmlFor="sintomas" className="font-bold text-lg">Síntomas</label>
          <textarea id="sintomas" className="mt-1 w-full  py-2 px-3 rounded-md outline-red-500" value={sintomas} placeholder="Describe los síntomas"
            onChange={(e) => {
              setSintomas(e.target.value)
            }}
          />
        </div>

        <input type="submit" className="rounded-lg bg-red-500 text-white uppercase p-3 w-full hover:bg-red-900 cursor-pointer transition-all" value={
          paciente.id ? 'Editar paciente' : 'Agregar nuevo paciente'
        } />
      </form>
    </div>
  )
}

export default Formulario
