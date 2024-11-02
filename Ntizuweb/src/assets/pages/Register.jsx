import React, { useState } from 'react';

function Register() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="min-h-screen bg-[url('images/background-green-web.svg')]">
            <div className='container justify-center sm:min-h-screen flex items-center'>
                <div className='grid sm:grid-cols-2'>
                    <img className='w-[250px] md:w-[400px] lg:w-[600px]' src="images/black-man-money.svg" alt="" />
                </div>

                <div className="fixed sm:right-0 right-auto mx-auto sm:mx-0 bottom-0 sm:h-full py-10 sm:py-40 w-full md:w-[400px] lg:w-[550px] bg-[url('images/vertical-plan-mobile.svg')] md:bg-[url('images/vertical-plan-web.svg')] bg-cover bg-no-repeat">
                    <div className='flex justify-center items-center sm:pl-24'>
                        <div>
                            <div className='flex justify-center'>
                                <img className='w-[150px] sm:w-[250px]' src="images/logo-ntizu.svg" alt="" />
                            </div>

                            <div className='flex justify-center items-center'>
                                <div>
                                    <div className='flex items-center cursor-pointer' onClick={() => handleSelect('empresa')}>
                                        <div className="w-8 mr-1">
                                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 84">
                                                <defs>
                                                    <clipPath id="clip-path"><rect fill="none" x="16" y="9" width="55.83" height="67"></rect></clipPath>
                                                </defs>
                                                <g className="cls-2" clipPath="url(#clip-path)">
                                                    <path fill="#062C1B" d="M63.29,10.67H48a1.7,1.7,0,0,0-1.7,1.69V41H34.45V29.28a1.7,1.7,0,0,0-1.7-1.69H17.48a1.69,1.69,0,0,0-1.69,1.69V55.54H2.21A1.69,1.69,0,0,0,.52,57.23V73.44a1.69,1.69,0,0,0,1.69,1.69H63.29A1.69,1.69,0,0,0,65,73.44V12.36a1.69,1.69,0,0,0-1.69-1.69M15.79,71.74H3.91V58.93H15.79Zm15.26,0H19.18V31H31.05Zm15.27,0H34.45V44.41H46.32Zm15.27,0H49.71V14.06H61.59Z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className={`w-72 mb-5 px-7 flex items-center justify-between py-2 rounded-full border-2 border-[#003E24] ${selectedOption === 'empresa' ? 'bg-[#003E24]' : 'bg-[#fff]'}`}>

                                            <p className={`text-${selectedOption === 'empresa' ? 'white' : '[#003E24]'}`}>Empresa</p>
                                            <input className='radio-custom' type="radio" name="option" checked={selectedOption === 'empresa'} readOnly />
                                        </div>
                                    </div>

                                    <div className='flex items-center cursor-pointer' onClick={() => handleSelect('individuo')}>
                                        <div className="w-8 mr-1"><svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 84"><path fill="#062C1B" d="M47.59,43.7A20.75,20.75,0,0,0,57,26.83c0-9.12-7.5-19.31-17.55-19.31S21.86,17.71,21.86,26.83A20.75,20.75,0,0,0,31.23,43.7,31.65,31.65,0,0,0,7.82,74.22,1.76,1.76,0,0,0,9.57,76H69.25A1.76,1.76,0,0,0,71,74.22,31.65,31.65,0,0,0,47.59,43.7M25.37,26.83c0-9,7.41-15.8,14-15.8s14,6.76,14,15.8-7.42,15.8-14,15.8-14-6.76-14-15.8m-14,45.63a28.08,28.08,0,0,1,56.06,0Z"></path></svg></div>
                                        <div className={`w-72 mb-5 px-7 flex items-center justify-between py-2 rounded-full border-2 border-[#003E24] ${selectedOption === 'individuo' ? 'bg-[#003E24] text-white' : 'bg-[#fff]'}`}>
                                            <p className={`text-${selectedOption === 'individuo' ? 'white' : '[#003E24]'}`}>Candidato</p>
                                            <input className='radio-custom' type="radio" name="option" checked={selectedOption === 'individuo'} readOnly />
                                        </div>
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='py-2'>
                                            <div className='mb-4 flex justify-center'>
                                                <button className='bg-red-400 px-10 py-3 text-white font-semibold rounded-full custom-gradient custom-shadow'>Aceder</button>
                                            </div>
                                            <div className='text-center'>
                                                <span>Não tem uma conta ainda? <a className='text-[#006140] font-bold' href="">Inscrever-se</a></span>
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

export default Register;
