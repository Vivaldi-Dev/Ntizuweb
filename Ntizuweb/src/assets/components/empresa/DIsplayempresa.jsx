import React from 'react'

function DIsplayempresa() {
    return (
        <div className='flex flex-col lg:ml-96 p-4 min-h-screen justify-center items-center mt-44 sm:mt-0 '>
            <div className='flex justify-center '>
                <div>
                    <div className=' grid md:grid-cols-1 lg:grid-cols-1 w-full sm:w-full lg:w-[60%] md:mb-16 '>
                            <p className='mx-3 text-2xl font-azonix text-[#003E24] mb-3'>SOBRE A EMPRESA DIZ</p>

                        <div className='flex flex-wrap md:flex-nowrap sm:flex-row items-center sm:items-start '>
                           
                            <div className='px-2 pb-4 w-full flex flex-col'>

                                <label className='mx-2 mb-2' htmlFor="">Primeiro nome</label>
                                <input className="bg-gray-300 rounded-full px-5 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label className='mx-2 mb-2' htmlFor="">Primeiro nome</label>
                                <input className="bg-gray-300 rounded-full px-5 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label className='mx-2 mb-2' htmlFor="">Primeiro nome</label>
                                <input className="bg-gray-300 rounded-full px-5 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>

                        </div>

                        <div className='border-b-2 py-10 mx-4 w-full'></div>

                    </div>

                   

                    <div className=' grid md:grid-cols-1 lg:grid-cols-1 w-full lg:w-[80%]  '>
                    <p className='mx-3 text-2xl font-azonix text-[#003E24] mb-3'>SOBRE A Pessoa DIZ</p>
                        <div className='flex flex-wrap md:flex-nowrap   sm:flex-row items-center sm:items-start '>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label className='mx-2 mb-2' htmlFor="">Primeiro nome</label>
                                <input className="bg-gray-300  rounded-full px-5 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />
                            </div>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label className='mx-2 mb-2' htmlFor="">Primeiro nome</label>
                                <input className="bg-gray-300 rounded-full px-5 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label className='mx-2 mb-2' htmlFor="">Primeiro nome</label>
                                <input className="bg-gray-300 rounded-full px-5 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>

                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label className='mx-2 mb-2' htmlFor="">Primeiro nome</label>
                                <input className="bg-gray-300 rounded-full px-5 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default DIsplayempresa