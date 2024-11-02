import React from 'react'

function Login() {
    return (
        <div className="min-h-screen bg-[url('images/background-green-web.svg')] ">

            <div className='container justify-center sm:min-h-screen flex items-center '>
                <div className='grid sm:grid-cols-2 '>
                    <img className='w-[250px] md:w-[400px] lg:w-[600px]' src="images/black-man-money.svg" alt="" />
                </div>


                <div className="fixed sm:right-0 right-auto mx-auto sm:mx-0 bottom-0 sm:h-full py-10 sm:py-40 w-full md:w-[400px] lg:w-[550px] bg-[url('images/vertical-plan-mobile.svg')]  md:bg-[url('images/vertical-plan-web.svg')] bg-cover bg-no-repeat ">

                    <div className='flex justify-center items-center sm:pl-24'>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='w-[150px] sm:w-[250px] ' src="images/logo-ntizu.svg" alt="" />
                            </div>

                            <div className='flex justify-center items-center '>
                                <div className=''>
                                    <div className='mb-4'>
                                        <input className='bg-gray-300 rounded-full px-5 py-2.5 w-full 
                                    border-2 border-transparent focus:border-primaryOpacity outline-1 outline-[#006140]' type="text" name="" id="" placeholder='Email' />
                                    </div>


                                    <div className='mb-4'>
                                        <input className='bg-gray-300 rounded-full px-5 py-2.5 w-full 
                                    border-2 border-transparent focus:border-primaryOpacity outline-1 outline-[#006140]' type="text" name="" id="" placeholder='Senha' />
                                    </div>

                                    <div className='flex justify-center '>
                                        <div className='py-2'>
                                            <div className='mb-4 flex justify-center '>
                                                <button className=' bg-red-400 px-10 py-3 text-white font-semibold rounded-full custom-gradient custom-shadow'>Aceder</button>
                                            </div>
                                            <div className='text-center'>
                                                <span>Não tem uma conta ainda? <a className='text-[#006140] font-bold' href="">Inscrever-se </a> </span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>



        </div>
    );
}

export default Login;
