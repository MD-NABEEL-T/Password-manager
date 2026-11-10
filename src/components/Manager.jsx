import React from 'react'

const Manager = () => {
  return (
    <>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div className=" mx-auto bg-slate-50 ">
        <h1>PassOP</h1>
        <p>your own password manager</p>
    <div className='text-white flex flex-col p-4 mycontainer'>
        <input className='rounded-full' type="text" name="" id=""/>
        <div className='flex'>
            <input type="text" />
        <input type="text" />
        </div>

    </div>
    </div>
    </>
  )
}

export default Manager