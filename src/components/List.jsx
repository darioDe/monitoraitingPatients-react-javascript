import React from 'react'
import Patient from './Patient'

const List = ({ infoPatient, setInfo, deletePatient }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll' >
      {infoPatient && infoPatient.length ? (
        <>
        <h2 className='font-black text-3xl text-center'> Listado de pacientes </h2>
        <p className='text-xl mt-5 mb-10 text-center'> Administra tus {" "}
          <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
        </p>

        {infoPatient.map( info => (
          <Patient
            key={info.id}
            info={info} 
            setInfo={setInfo}
            deletePatient={deletePatient}
          />
        
        ))}
        </>
        ) : (
         <>
            <h2 className='font-black text-3xl text-center'> No hay pacientes </h2>
            <p className='text-xl mt-5 mb-10 text-center'> Start adding patients {" "}
              <span className='text-indigo-600 font-bold'>y apareceran aqui</span>
            </p>
         </> 
        )}
      
    </div>
  )
}

export default List