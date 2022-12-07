import React from 'react'

const Error = ({ msg }) => {
  return (
   <div className='bg-red-800 font-blod uppercase text-center text-white p-3 mb-3 rounded-md'>
      <p> {msg} </p>
   </div>
  )
}

export default Error