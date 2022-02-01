import Image from 'next/image'
import React from 'react'
import Img1 from 'assets/images/Cuca3.jpg'

const About = () => {
    return (
        <div id="About" className="pb-10 bg-gray-200">
            <div className="flex justify-center p-10 pb-10 mx-6 text-4xl font-black md:pb-24 md:p-20 font-raleway">
                <h1>
                    <span className="border-b-4 border-[#95b89f]">Sobre</span>{' '}
                    Mim
                </h1>
            </div>
            <section className="Resusivo">
                <div className="Imesumo">
                    <Image
                        alt="perfil"
                        src={Img1}
                        className="p-5 rounded-sm lg:rounded-lg lg:p-0"
                        objectFit="cover"
                    />
                </div>
                <div className="flex justify-center ">
                    <div>
                        <div className="flex justify-center max-w-2xl mt-10 md:max-w-none lg:mt-0 lg:block">
                            <h1 className="text-lg font-black md:text-2xl font-raleway text-[#457d58]">
                                Especializada em vendas no ambiente digital
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="md:grid md:grid-cols-2 ">
                                <div>
                                    <p className="mt-4 xl:text-lg des ">
                                        <span className="font-bold">
                                            Instagram:
                                        </span>{' '}
                                        mari_mkt
                                    </p>
                                    <p className="mt-4 xl:text-lg des ">
                                        <span className="font-bold">
                                            Whatsapp:
                                        </span>{' '}
                                        51 99637-0503
                                    </p>
                                    <p className="mt-4 xl:text-lg des ">
                                        <span className="font-bold">
                                            Cidade:
                                        </span>{' '}
                                        Novo Hamburgo, RS
                                    </p>
                                </div>
                                <div>
                                    <p className="mt-4 xl:text-lg des ">
                                        <span className="font-bold">
                                            Especialidade:
                                        </span>{' '}
                                        Pleno
                                    </p>
                                    <p className="mt-4 xl:text-lg des ">
                                        <span className="font-bold">
                                            Email:
                                        </span>{' '}
                                        marinagedrat.mkt@gmail.com
                                    </p>
                                    <p className="mt-4 xl:text-lg des ">
                                        <span className="font-bold">
                                            Freelance:
                                        </span>{' '}
                                        Disponível
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
