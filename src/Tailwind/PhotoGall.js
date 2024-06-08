import React from 'react'

const PhotoGall = () => {
  return (
    <div>
        <header className='text-2xl italic text-center'>
            <h2>Photo Gallery</h2>
        </header>
        <div className='flex justify-center gap-8 m-6 text-xl'>
            <div className='text-white border-solid border-2 border-grey-500 bg-cyan-500 p-2 rounded-xl'>All</div>
            <div className='border-solid border-2 border-grey-500 bg-cyan-500 p-2 rounded-xl'>Nature</div>
            <div className='border-solid border-2 border-grey-500 bg-cyan-500 p-2 rounded-xl'>Birds</div>
            <div className='border-solid border-2 border-grey-500 bg-cyan-500 p-2 rounded-xl'>Animals</div>
        </div>
        <div className='flex justify-center gap-8 m-6 text-xl'>
            <div className='border-solid border-2 border-grey-500 bg-neutral-500 p-12 rounded-xl shadow-slate-500'>Nature</div>
            <div className='border-solid border-2 border-grey-500 bg-neutral-500 p-12 rounded-xl shadow-slate-500'>Birds</div>
            <div className='border-solid border-2 border-grey-500 bg-neutral-500 p-12 rounded-xl shadow-slate-500'>Animals</div>
        </div>
    </div>
  )
}

export default PhotoGall