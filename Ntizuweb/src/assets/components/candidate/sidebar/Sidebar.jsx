import React from 'react'

function Sidebar() {
    return (
        <div className=" fixed top-0 min-h-screen w-[400px] hidden lg:block z-10  bg-[url('images/green-plan-web.svg')] bg-cover bg-no-repeat">
            <div className='flex justify-center p-10'>
                <div>
                    <div>
                        <span> <p className='text-sm text-[#006140] font-bold'>REGISTRO / <span className='text-white'>Empresa</span> </p></span>
                    </div>
                    <img className='absolute end-0 w-32 top-[-10px]' src="images/tech-top-left-banner.svg" alt="" />
                    <img className='w-[100px] mt-20 ' src="images/logo-white.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Sidebar
