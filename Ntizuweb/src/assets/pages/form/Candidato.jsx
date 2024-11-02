import React from 'react'
import Sidebar from '../../components/Sidebar'
import Display from '../../components/Display'


function Candidato() {
    return (


        <div>

            <div className="absolute top-[-15px] left-0 w-full hidden sm:block md:h-32 lg:h-full max-h-40 bg-[url('/images/texture-bar-green.svg')]">

            </div>

            <div className="block absolute w-full sm:hidden  top-[-11px] h-[250px] bg-[url('images/white-plan-mobile.svg')] bg-center bg-no-repeat bg-cover">
                <div className='flex justify-center mt-10'>
                    <span> <p className='text-sm text-[#006140] font-bold'>REGISTRO / <span className='text-[#31C866] sm:text-white'>Candidato</span> </p></span>
                </div>
            </div>

            <div className="flex min-h-screen w-full bg-[url('images/plan-opac-web.svg')] bg-cover ">
                <Sidebar />
                <Display />
            </div>
            <div className='bg-white md:absolute bottom-0 h-24 w-full hidden sm:block'>
                <div className='absolute w-full'>

                </div>
                <div className='flex justify-center mt-5 max-w-[1340px]'>
                    <button className='px-16 py-2 bg-custom-linear shadow-custom rounded-full font-bold text-white'>INICIAR SESSÃO</button>
                </div>
            </div>
        </div>
    )
}

export default Candidato