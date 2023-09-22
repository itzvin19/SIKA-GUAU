import Paciente from "./Paciente"
import '../css/ListadoPacientes.css'

const ListadoPacientes = ({ pacientes, setPaciente , eliminarPaciente}) => {
  return (
    <div className="mt-10 md:mt-0 md:w-1/2 lg:w-3/5">
      {
        pacientes && pacientes.length ? (
          <>
            <h2 className="text-2xl font-black text-center">Listado de Pacientes</h2>
            <p className="font-normal text-lg mt-3 text-center">
              Administra tus <span>pacientes y citas</span>
            </p>
            <div className="overflow-auto paciente-container">
              {pacientes.map((paciente) => {
                return <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>;
              })}
            </div>
          </>
        ):(
          <>
            <h2 className="text-2xl font-black text-center">Listado de Pacientes</h2>
            <p className="font-normal text-lg mt-3 text-center">
             Todavía no tiene pacientes
            </p>
          </>
        )
      }
    </div>
  );
};

export default ListadoPacientes
