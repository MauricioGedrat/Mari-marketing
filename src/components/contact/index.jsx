import React from 'react'

const Contact = () => {
    return (
        <section className="relative text-gray-600 body-font">
            <div className="flex justify-center pt-24 text-4xl font-bold font-raleway">
                <h1>
                    <span className="border-b-4 border-[#95b89f]">Con</span>
                    tato
                </h1>
            </div>
            <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
                <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27726.640328363548!2d-51.134568303995266!3d-29.695706828354226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1643744232744!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                    ></iframe>
                    <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
                        <div className="px-6 lg:w-1/2">
                            <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                                ENDEREÇO
                            </h2>
                            <p className="mt-1">Novo Hamburgo, RS</p>
                        </div>
                        <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                            <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                                EMAIL
                            </h2>
                            <a className="mr-10 leading-relaxed text-indigo-500">
                                marinagedrat.mkt@gmail.com
                            </a>
                            <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">
                                TELEFONE
                            </h2>
                            <p className="leading-relaxed">51 99637-0503</p>
                        </div>
                    </div>
                </div>
                <form
                    action="https://formsubmit.co/marinagedrat.mkt@gmail.com"
                    method="POST"
                    className="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"
                >
                    <div className="relative mb-4">
                        <label
                            htmlFor="name"
                            className="text-sm leading-7 text-gray-600"
                        >
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-[#95b89f] focus:ring-2 "
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="email"
                            className="text-sm leading-7 text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-[#95b89f] focus:ring-2 "
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="text-sm leading-7 text-gray-600"
                        >
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-[#95b89f] focus:ring-2 "
                        ></textarea>
                        <input
                            type="hidden"
                            name="_next"
                            value="http://localhost:3000/#Home"
                        ></input>
                    </div>
                    <button className="px-6 py-2 text-lg text-white bg-[#95b89f] border-0 rounded focus:outline-none hover:bg-[#768f7d]">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
