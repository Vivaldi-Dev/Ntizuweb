import React from 'react'
import Sidebarempesa from '../../../components/empresa/Sidebarempesa'
import DIsplayempresa from '../../../components/empresa/DIsplayempresa'

function Empresa() {
    return (

        <div>

            <div className="absolute top-[-15px] left-0 w-full hidden sm:block md:h-32 lg:h-full max-h-40 bg-[url('/images/texture-bar.svg')]"></div>

            <div className="block absolute w-full sm:hidden  top-[-11px] h-[250px] bg-[url('images/green-plan-mobile.svg')]  bg-no-repeat bg-cover">
                <div className='flex justify-around mt-10'>

                    <img className='w-[80px] absolute start-8 ' src="images/logo-white.svg" alt="" />
                    <img className='w-[180px]  absolute end-0 bottom-5' src="images/black-man-money.svg" alt="" />
                </div>
            </div>

            <div className="sm:flex min-h-screen w-full ">
                <Sidebarempesa />
                <DIsplayempresa />
            </div>

            <div className='bg-[#006140] md:absolute bottom-0 h-32 w-full hidden sm:block'>
                <div className='absolute w-full'>

                </div>
                <div className='flex justify-center mt-5 max-w-[1340px]'>
                    <button className='px-16 py-2 bg-custom-linear shadow-custom rounded-full font-bold text-white'>INICIAR SESSÃO</button>
                </div>
            </div>
        </div>


    )
}

export default Empresa