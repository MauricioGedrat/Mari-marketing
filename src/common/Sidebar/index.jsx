import { XSvg, HamburgerSvg } from 'common/svgIcons'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import Cuca2 from 'assets/images/Cuca2.jpg'
import Instagram from 'common/svgIcons/Instagram'
import HomeSvg from 'common/svgIcons/HomeSvg'
import AboutSvg from 'common/svgIcons/AboutSvg'
import ResumeSvg from 'common/svgIcons/ResumeSvg'
import FolioSvg from 'common/svgIcons/FolioSvg'
import ServicesSvg from 'common/svgIcons/ServicesSvg'

const SideBar = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <main className="fixed z-50 flex h-screen">
                {show ? (
                    <AnimatePresence>
                        <motion.aside
                            className="bg-[#457d58] w-72"
                            initial={{ width: 0 }}
                            animate={{ width: 288 }}
                            exit={{ width: 0 }}
                        >
                            <XSvg
                                onClick={() => setShow(false)}
                                className="m-8 cursor-pointer"
                            />
                            <div className="flex mx-auto items-center justify-center bg-[#6a9e7b] w-[120px] h-[120px] rounded-full">
                                <Image
                                    alt="perfil"
                                    src={Cuca2}
                                    className="rounded-full BordaImg"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <h1 className="mt-2 text-xl font-semibold text-white">
                                    Marina Gedrat
                                </h1>
                            </div>
                            <div className="flex items-center justify-center bg-[#6a9e7b] w-9 h-9 mt-2 hover:opacity-60 duration-300 mx-auto rounded-md p-2">
                                <a
                                    href="https://www.instagram.com/marig_mkt/"
                                    target={'break'}
                                >
                                    <Instagram />
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    <a
                                        className="flex mt-4 font-semibold text-center text-[#8fc4a0] hover:text-[#7ca188] duration-300"
                                        href="#Home"
                                    >
                                        <span className="mr-4">
                                            <HomeSvg className="text-[#8fc4a0]" />
                                        </span>
                                        Início
                                    </a>
                                    <a
                                        className="flex mt-4 font-semibold text-center text-[#8fc4a0] hover:text-[#7ca188] duration-300"
                                        href="#About"
                                    >
                                        <span className="mr-4">
                                            <AboutSvg className="text-[#8fc4a0]" />
                                        </span>
                                        Sobre
                                    </a>
                                    <a
                                        className="flex mt-4 font-semibold text-center text-[#8fc4a0] hover:text-[#7ca188] duration-300"
                                        href="#Resume"
                                    >
                                        <span className="mr-4">
                                            <ResumeSvg className="text-[#8fc4a0]" />
                                        </span>
                                        Resumo
                                    </a>
                                    <a
                                        className="flex mt-4 font-semibold text-center text-[#8fc4a0] hover:text-[#7ca188] duration-300"
                                        href="#Folio"
                                    >
                                        <span className="mr-4">
                                            <FolioSvg className="text-[#8fc4a0]" />
                                        </span>
                                        Portfólio
                                    </a>
                                    <a
                                        className="flex mt-4 font-semibold text-center text-[#8fc4a0] hover:text-[#7ca188] duration-300"
                                        href="#Services"
                                    >
                                        <span className="mr-4">
                                            <ServicesSvg className="text-[#8fc4a0]" />
                                        </span>
                                        Serviços
                                    </a>
                                </div>
                            </div>
                            <footer className="flex items-center justify-center mt-20">
                                <p className="font-semibold text-white">
                                    <div>
                                        Designed by{' '}
                                        <span className="text-[#95b89f]">
                                            SCALAR ERP
                                        </span>
                                    </div>
                                </p>
                            </footer>
                        </motion.aside>
                    </AnimatePresence>
                ) : (
                    <div className="flex items-center justify-center h-[50px] p-4 m-4 text-center duration-300 bg-[#457d58] rounded-lg cursor-pointer hover:opacity-75">
                        <HamburgerSvg onClick={() => setShow(true)} />
                    </div>
                )}
            </main>
        </div>
    )
}

export default SideBar
