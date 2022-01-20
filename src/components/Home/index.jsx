import Image from 'next/image'
import React from 'react'
import Fundo from 'assets/images/Cuca1.jpg'

const AppHome = () => {
    return (
        <div className="bg-[#0000006e]" id="Home">
            <div className="flex items-center justify-center text-2xl font-medium text-white sm:text-5xl md:text-6xl">
                <div className="absolute lg:mt-96 md:mt-72 sm:mt-52 mt-40 font-raleway sm:bg-[#0000008a] sm:p-10 rounded-lg">
                    <h1>Marina Gedrat</h1>
                    <h2 className="text-2xl text-[#95b89f] font-semibold border-b-4 w-48 border-[#95b89f] ">
                        Marketing Digital
                    </h2>
                </div>
            </div>
            <Image
                alt="fundo"
                src={Fundo}
                objectFit="cover"
                layout="responsive"
                className="-z-50 filter saturate-[0.5]"
            />
        </div>
    )
}

export default AppHome
