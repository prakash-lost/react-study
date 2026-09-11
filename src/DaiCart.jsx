import React from 'react'

const Daicart = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex justify-center items-center h-screen'>
            <div className='p-1 flex justify-safe-center'><img src='' alt='photo'  width='150' className='h-40 rounded-xl '/></div>
            <div className='font-semibold text-center '>heading</div>
            <div className='text-sm line-clamp-3 '>describe describe 
                describe describe describe 
                describe describe describe
                 describedescribe describe 
                 describe describe</div>
            <button className='mt-4 mb-2 bg-pink-600 px-2 py-1 rounded-b-xl text-white shadow-2xl hover:bg-green-300 cursor-pointer flex justify-self-center '>learn more</button>

        </div>
    </div>
  )
}

export default Daicart