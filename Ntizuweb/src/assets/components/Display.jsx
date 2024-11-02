import React from 'react'

function Display() {
    return (
        <div className='flex flex-col w-full lg:ml-96 mt-56 md:mt-0 p-4 min-h-screen justify-center items-center '>
            <div className='flex justify-center '>
                <div className=' '>

                    <div className='bg-black lg:w-[62%] mx-4 py-2 rounded-full mb-4'>
                        <p className='text-white text-center'>pkjdshf</p>
                    </div>

                    <div className='bg-black lg:w-[62%] mx-4 py-2 rounded-full mb-4'>
                        <p className='text-white text-center'>pkjdshf</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
                        <div>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label htmlFor="">Primeiro nome</label>
                                <input className="bg-white rounded-full px-10 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label htmlFor="">Primeiro nome</label>
                                <input className="bg-white rounded-full px-14 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />
                            </div>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label htmlFor="">Primeiro nome</label>
                                <input className="bg-white rounded-full px-10 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>

                        </div>

                        <div>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label htmlFor="">Primeiro nome</label>
                                <input className="bg-white rounded-full px-5 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>
                            <div className='px-2 pb-4 w-full flex flex-col'>
                                <label htmlFor="">Primeiro nome</label>
                                <input className="bg-white rounded-full px-10 py-1.5 w-full border-2 border-transparent focus:border-primaryOpacity outline-none" type="text" name="" id="" />

                            </div>


                        </div>
                    </div>

                    <div className='border-b border-2 lg:w-[64%] mx-2 mt-10'>
                    </div>

                    <div className='flex items-center mt-10 lg:w-[60%]'>
                        <div>
                            <div className='mb-4 flex items-center'>
                                <input type="checkbox" name="" id="" className="h-6 w-10 mx-2 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <p className='text-sm font-bold text-white'>Envie-me e-mails úteis para encontrar trabalhos gratificantes e oportunidades de emprego. e oportunidades de trabalho.</p>
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" name="" id="" className="h-6 w-10 mx-2 text-[#]  border-gray-300 rounded" />
                                <p className='text-sm font-bold text-white'>Sim, eu compreendo e concordo com os <span className='text-[#31C866]'>Termos de Serviço da Ntizu</span> , incluindo os <span className='text-[#31C866]'>Acordo do Utilizador</span>  e Política de Privacidade.</p>
                            </div>

                            <div className='mt-5 flex items-center justify-between sm:hidden'>
                                <button className='sm:px-16 px-2 py-2 bg-custom-linear shadow-custom rounded-full font-bold text-white'>INICIAR SESSÃO</button>
                                <img className='w-36' src="images/black-man-reverse-standup-web.svg" alt="" />

                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Display
