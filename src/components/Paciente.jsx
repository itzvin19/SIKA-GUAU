const Paciente = ({paciente, setPaciente , eliminarPaciente}) => {


    const handleEliminar=()=>{
        const respuesta= confirm('¿Seguro que desea eliminar esta mascota?')

        if (respuesta){
            eliminarPaciente(paciente.id)
        }
    }

    return (
        <div className="m-3 bg-white shadow-lg rounded-lg py-7 md:py-3 px-6">
            <p className="font-bold uppercase mb-3 md:mb-1">Nombre: {''}
                <span className="normal-case font-normal">{paciente.nombreMascota}</span>
            </p>
            <p className="font-bold uppercase mb-3 md:mb-1">Propietario: {''}
                <span className="normal-case font-normal">{paciente.nombre}</span>
            </p>
            <p className="font-bold uppercase mb-3 md:mb-1">EMAIL: {''}
                <span className="normal-case font-normal">{paciente.email}</span>
            </p>
            <p className="font-bold uppercase md:mb-1 mb-3">ALTA: {''}
                <span className="normal-case font-normal">{paciente.fecha}</span>
            </p>
            <p className="font-bold uppercase md:mb-1">Síntomas: {''}
                <span className="normal-case font-normal">{paciente.sintomas}</span>
            </p>
            <div className="flex justify-between md:px-2 md:mt-6">
                <button className="w-28 bg-yellow-500 p-2 text-white font-bold  hover:bg-yellow-600 transition-all rounded-md"
                 onClick={
                    ()=>{
                        setPaciente(paciente)
                    }
                }
                >Editar</button>
                <button className="w-28 bg-red-500 p-2 text-white font-bold  hover:bg-red-600 transition-all rounded-md" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
