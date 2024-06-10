import React from 'react'

const PricingTable = () => {
  return (
    <div className='flex justify-center max-h-screen gap-24 m-24 '>
        <div className='flex flex-col gap-2'>
            <div className='text-sm border-solid border-2 border-black-950 p-2 w-36'>1 month free</div>
             <h1 className='text-xl'>Basic Plan</h1>
             <h3>$9.90/mo</h3>
             <hr/>
             <p>Ad-free music listening</p>
             <p>Download 10K songs/device</p>
             <p>Login from 3 devices</p>
             <button className='bg-slate-700 px-5 py-1 rounded text-white w-40'>Sign Up</button>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='text-sm border-solid border-2 border-black-950 p-2 w-36'>1 month free</div>
            <h1>Pro Plan</h1>
            <h3>$19.99/mo</h3>
            <hr/>
            <p>Ad-free music listening </p>
            <p>Download 20K songs/devices</p>
            <p>Login from 5 devices </p>
            <button className='bg-slate-700 px-5 py-1 rounded text-white w-40'>Sign Up</button>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='text-sm border-solid border-2 border-black-950 p-2 w-36'>1 month free</div>
        <h1>Enterprise Plan</h1>
            <h3>$59.99/mo</h3>
            <hr/>
            <p>Ad-free music listening </p>
            <p>Download 40K songs/devices</p>
            <p>Login from unlimited devices </p>
            <button className='bg-slate-700 px-5 py-1 rounded text-white w-40'>Sign Up</button>
        </div>
    </div>
  )
}

export default PricingTable