
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useEffect, useState } from "react"

function App() {
    const [pacientes,setPacientes]=useState([])
    const [paciente,setPaciente]=useState({})

    useEffect(()=>{
      const obtenerLS= () =>{
      const  pacientesLS =JSON.parse(localStorage.getItem('pacientes')) || [];
      setPacientes(pacientesLS)
      // console.log(localStorage.getItem('pacientes'))
    }
      obtenerLS();
    },[])

    useEffect(()=>{
      localStorage.setItem('pacientes',JSON.stringify(pacientes))
    },[pacientes])

    const eliminarPaciente=(id)=>{
      const pacientesActualizados= pacientes.filter(paciente => paciente.id !=id)
      setPacientes(pacientesActualizados)
    }

  return (
    <div className="container mx-auto pt-10">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} ></Formulario>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}></ListadoPacientes>
      </div>
    </div>
  )
}

export default App
