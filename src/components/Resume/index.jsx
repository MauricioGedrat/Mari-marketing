import Frame2Svg from 'common/svgIcons/Frame2Svg'
import FrameSvg from 'common/svgIcons/FrameSvg'
import Frame3Svg from 'common/svgIcons/FrameSvg3'
import React from 'react'

const AppResume = () => {
    return (
        <div id="Resume" className="">
            <div className="flex justify-center p-24 text-4xl font-bold font-raleway">
                <h1>
                    <span className="border-b-4 border-[#95b89f]">Res</span>
                    umo
                </h1>
            </div>
            <div className="gap-10 xl:flex xl:justify-center">
                <div className="flex items-center justify-center ">
                    <div className="flex ">
                        <FrameSvg className="hidden sm:block" />
                        <div className="ml-8 sm:ml-0">
                            <div className="mt-2 ml-4">
                                <h1 className="text-xl font-bold uppercase font-raleway">
                                    Marina Gedrat
                                </h1>
                            </div>
                            <div className="mt-2 ml-4 sm:w-96">
                                <em>
                                    1 mês afiliando-se e vendendo material de
                                    marketing digital centrado no usuário, desde
                                    o conceito inicial até a entrega final e
                                    polida.
                                </em>
                            </div>
                            <div className="mt-2 ml-4">
                                <ul className="font-semibold">
                                    <li className="mb-5 list-disc">
                                        NH, Rio Grande do Sul, BR
                                    </li>
                                    <li className="mb-5 list-disc">
                                        {'(51)'} 99637-0503
                                    </li>
                                    <li className="list-disc">
                                        marinagedrat.mkt@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="flex mt-10 sm:-ml-10">
                                <Frame2Svg className="hidden sm:block" />
                                <div>
                                    <div className="mt-2 ml-4">
                                        <h1 className="text-xl font-bold uppercase font-raleway">
                                            Principais afiliações
                                        </h1>
                                    </div>
                                    <div className="mt-2 ml-4 sm:w-96">
                                        <em>
                                            O afiliado é o “representante
                                            comercial online”, que divulga um
                                            produto, serviço ou marca para
                                            diversas pessoas, fazendo vendas
                                            para o produtor e, em contrapartida,
                                            sendo remunerado por isso.
                                        </em>
                                    </div>
                                    <div className="mt-2 ml-4">
                                        <ul className="font-semibold">
                                            <li className="mb-5 list-disc">
                                                Curso método milionário
                                            </li>
                                            <li className="mb-5 list-disc">
                                                Curso método primeira venda em 7
                                                dias 2.0
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center mt-0 md:-mt-7 xl:mt-0">
                        <Frame3Svg className="hidden sm:block" />
                        <div className="ml-8 sm:ml-0">
                            <div className="mt-2 ml-4">
                                <h1 className="text-xl font-bold uppercase font-raleway">
                                    Educação e Recursos
                                </h1>
                            </div>
                            <div className="mt-2 ml-4 sm:w-96">
                                <em>
                                    A Educação é um direito fundamental que
                                    ajuda não só no desenvolvimento de um país,
                                    mas também de cada indivíduo. ... Por meio
                                    da educação, se garante o desenvolvimento
                                    social, económico e cultural.
                                </em>
                            </div>
                            <div className="mt-2 ml-4">
                                <ul className="font-semibold">
                                    <li className="mb-5 list-disc">
                                        Curso método milionário
                                    </li>
                                    <li className="mb-5 list-disc">
                                        Curso método primeira venda em 7 dias
                                        2.0
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppResume
