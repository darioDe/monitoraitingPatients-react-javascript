import React from 'react'

const Patient = ({ info, setInfo, deletePatient }) => {

   const {name, doctor, email, discharge, surgery, id} = info;

   const handleDelete = () => {
      const answer = confirm('Are you sure delete this patient?')

      if (answer){
         deletePatient(id)
      }
   }

  return (
   <div className='mx-5 my-10 bg-gray-200 shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold text-gray-700 mb-3 uppercase'> Name: {" "}
      <span className='font-normal normal-case'> {name} </span>
      </p>

      <p className='font-bold text-gray-700 mb-3 uppercase'> Doctor: {" "}
      <span className='font-normal normal-case'>{doctor}</span>
      </p>

      <p className='font-bold text-gray-700 mb-3 uppercase'> Email: {" "}
      <span className='font-normal normal-case'>{email}</span>
      </p>

      <p className='font-bold text-gray-700 mb-3 uppercase'> Discharge Date: {" "}
      <span className='font-normal normal-case'>{discharge}</span>
      </p>

      <p className='font-bold text-gray-700 mb-3 uppercase'> Surgery & Details: {" "}
      <span className='font-normal normal-case'>{surgery}</span>
      </p>

      <div className='flex justify-between mt-10'>
         <button 
            type='button' 
            className='py-2 px-10 bg-emerald-700 hover:bg-emerald-900 text-white font-bold uppercase rounded-lg'
            onClick={()=> setInfo(info)}
         > Edit </button>

         <button 
            type='button' 
            className='py-2 px-10 bg-red-800 hover:bg-red-900 text-white font-bold uppercase rounded-lg'
            onClick={handleDelete}
         >Delete</button>
      </div>


   </div>
  )
}

export default Patient