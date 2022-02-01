import Modal from 'common/Modal'
import { imagesModal } from 'common/Modal/Images'
import React, { useState } from 'react'
import Image from 'next/image'

const Results = () => {
    // const [show, setShow] = useState(false)
    const [imageToModal, setImageToModal] = useState()

    console.log(imageToModal)
    return (
        <div id="Results">
            <div className="flex justify-center p-24 text-4xl font-bold font-raleway">
                <h1>
                    <span className="border-b-4 border-[#95b89f]">Resul</span>
                    tados
                </h1>
            </div>
            <div>
                <div className="flex justify-center">
                    <div className="gap-8 columns-1 sm:columns-2 lg:columns-3">
                        {imagesModal.map((imageSrc, index) => {
                            console.log(imageSrc)
                            return (
                                <div key={index}>
                                    <div
                                        type="submit"
                                        onClick={() => {
                                            //  setShow(true)
                                            setImageToModal(imageSrc.img)
                                        }}
                                        className="z-50"
                                    >
                                        <Image
                                            alt="modal"
                                            className="duration-300 hover:opacity-60 hover:scale-110"
                                            src={imageSrc.img.src}
                                            width={imageSrc.img.width}
                                            height={imageSrc.img.height}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <Modal
                    show={imageToModal}
                    onHide={() => setImageToModal(undefined)}
                >
                    {imageToModal && (
                        <Image
                            alt="modal"
                            src={imageToModal.src}
                            className="relative"
                            width={imageToModal.width}
                            height={imageToModal.height}
                        />
                    )}
                </Modal>
            </div>
        </div>
    )
}

export default Results
