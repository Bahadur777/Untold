import React from 'react'
import Image from 'next/image'
const teamCard = ({id,img, name, registration}) => {
  return (
    <div className='p-5 bg-white m-max-w-sm rounded overflow-hidden shadow-lg' >
        <div>
           <img src={img} alt="img" className='w-full' />
        </div>
        <div className='px-6 py-2'>
            <h1>{name}</h1>
        </div>
        <div className='px-6 py-2'>
            {registration}
        </div>
    </div>
  )
}

export default teamCard