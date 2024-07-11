import React from "react";

import bg1 from '../assets/images/bg/03.jpg'
import about from '../assets/images/about/about-2.png'
import Navbar from "../components/navbar";
import ScrollTop from "../components/scrollTop";
import AdminFooter from "../components/dashboard/adminFooter";


export default function Contact(){
    return(
        <>
        <Navbar manuClass="navigation-menu nav-left nav-light" containerClass="container"/>
        <section className="bg-half-150 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4 text-white title-dark">Fale Conosco</h3>
                            {/* <p className="para-desc mx-auto text-white-50">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-color-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="mt-100 mt-60">
            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="me-lg-5">
                            <img src={about} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="custom-form rounded shadow p-4">
                            {/* <h5 className="mb-4">Get in touch!</h5> */}
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Nome <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control border rounded" placeholder="Nome :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control border rounded" placeholder="Email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Assunto</label>
                                            <input name="subject" id="subject" className="form-control border rounded" placeholder="Assunto :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control border rounded" placeholder="Mensagem :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <button type="submit" id="submit" name="send" className="btn btn-primary">Enviar Mensagem</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}