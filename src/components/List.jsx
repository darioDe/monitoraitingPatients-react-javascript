import React from 'react'
import Patient from './Patient'

const List = ({ infoPatient, setInfo, deletePatient }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll' >
      {infoPatient && infoPatient.length ? (
        <>
        <h2 className='font-black text-3xl text-center'> Patients List </h2>
        <p className='text-xl mt-5 mb-10 text-center'> Manage {" "}
          <span className='text-emerald-700 font-bold'>Patients and Appointments</span>
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
            <h2 className='font-black text-3xl text-center'> No patients </h2>
            <p className='text-xl mt-5 mb-10 text-center'> Add Patients {" "}
              <span className='text-emerald-700 font-bold'>They Will be Here</span>
            </p>
         </> 
        )}
      
    </div>
  )
}

export default List