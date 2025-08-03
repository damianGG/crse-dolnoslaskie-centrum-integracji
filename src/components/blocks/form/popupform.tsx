"use client"

import { useState } from "react"
import Image from "next/image"
import ContactForm from "./form"
import { slideInDownAnimate } from "@/utils/animation"

export default function PopupForm() {
    const [showModal, setShowModal] = useState(false)

    const handleShow = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

    return (
        <>
            <span style={slideInDownAnimate('1200ms')}>
                <button
                    onClick={handleShow}
                    className="btn btn-lg btn-primary rounded-pill me-2"
                >
                    Zapisz się
                </button>
            </span>
            <p></p>
            {showModal && (
                <>
                    {/* Backdrop */}
                    <div className="modal-backdrop fade show"></div>

                    {/* Modal */}
                    <div
                        className="modal fade show"
                        style={{ display: 'block' }}
                        tabIndex={-1}
                        aria-labelledby="contactFormModalLabel"
                        aria-hidden="true"
                        role="dialog"
                    >
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="row g-0">
                                    {/* Left side: Image */}
                                    <div className="col-md-6" style={{ height: '650px', position: 'relative' }}>
                                        <Image
                                            src="/img/photos/shutterstock_2350002237.jpg"
                                            alt="Dotacje dla firm"
                                            layout="fill"
                                            objectFit="cover"
                                            quality={100}
                                            priority={true}
                                        />
                                    </div>

                                    {/* Right side: Form */}
                                    <div className="col-md-6 p-4 position-relative">
                                        <button
                                            type="button"
                                            className="btn-close position-absolute top-0 end-0 m-3"
                                            onClick={handleClose}
                                            aria-label="Zamknij"
                                        ></button>
                                        <h3 className="mb-4">Zapraszamy do bezpłatnego udziału w projekcie</h3>
                                        <p>Zostaw kontakt, oddzwonimy!</p>
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}