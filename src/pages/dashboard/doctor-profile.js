import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/navbar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";

import { doctorData,experienceData, patientsData} from "../../data/data";

import {FiArrowRight, RiTimeFill,FiPhone,FiMail} from '../../assets/icons/vander'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function DoctorProfile(){

    let [activeIndex, setActiveIndex] = useState(1)

    let settings = {
        container: '.slider-range-four',
        items: 4,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 24,
        responsive: {
            992: {
                items: 4
            },

            767: {
                items: 2
            },
            

            320: {
                items: 1
            },
        },
      };
    
    let settings2 ={
        container: '.client-review-slider',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
    }  

    
    const { id } = useParams();
    const doctor = doctorData.find(item => item.id === parseInt(id));
    // const experienceData = experienceData.find(item => item.doctor_id === parseInt(id));


    if (!doctor) {
      return <div>Médico não encontrado!</div>;
    }


    // Filtra os dados de experiência para o doutor específico
    const filteredExperienceData = experienceData.filter(item => item.doctor_id === parseInt(id));


    if (filteredExperienceData.length === 0) {
        return <div>No experience data found for this doctor.</div>;
    }


    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>
        <section className="bg-dashboard my-lg-5">
            <div className="container mt-xl-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-5 position-relative">
                                    <img src={doctor.image} className="img-fluid dr-profile-img" alt=""/>
                                </div>

                                <div className="col-xl-8 col-lg-8 col-md-7">
                                    <div className="p-lg-5 p-4">
                                        {/* <small className="text-muted">25th December, 2020 - 5:00PM</small> */}

                                        <h4 className="my-3"><span className="text-primary h2">{doctor.name}</span></h4>
                                        <p className="para-desc text-muted">{doctor.description}</p>
                                        {/* <div class="mt-4"><a class="btn btn-soft-primary" href="/booking-appointment">Marcar consulta</a></div>
                                        <Link to={`/booking-appointment/${id}`} className="title text-dark h5 d-block mb-0">{item.name}</Link> */}
                                        <div className="mt-4">
      <Link className="btn btn-soft-primary" to={`/booking-appointment/${id}`}>
        Marcar consulta
      </Link>
    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="card border-0 shadow rounded p-4">
                            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light">
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(1)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Descrição</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(2)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Experiência</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 3 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(3)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Comentários</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 4 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(4)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Localização</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 5 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(5)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Horários</h5>
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                            <div className="tab-content mt-4" >
                                {activeIndex === 1 ? 
                                    <div className="tab-pane fade show active">
                                        <h5 className="mb-1">{doctor.name}</h5>
                                        <Link to="#" className="text-primary">{doctor.speciality}</Link>
                                        
                                        <p className="text-muted mt-4">{doctor.overview}</p>
                                    
                                        <h6>Especialidades: </h6>

                                        <ul className="list-unstyled mt-4">
                                            <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> {doctor.specialties_1}</li>
                                            <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> {doctor.specialties_2}</li>
                                            <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> {doctor.specialties_3}</li>
                                        </ul>

                                        
                                    </div> : ''
                                }
                                {activeIndex === 2 ?
                                    <div className="tab-pane fade show active">
                                        <h5 className="mb-1">Experiência:</h5>

                                        <p className="text-muted mt-4">{doctor.experience}</p>
                                    
                                        <h6>Experiência profissional:</h6>

                                        <div className="row">
                                            <div className="col-12 mt-4">
                                                <div className="col-md-12">
                                                    <div className="slider-range-four tiny-timeline">
                                                        <TinySlider settings={settings}>
                                                            {filteredExperienceData.map((item,index) =>{
                                                                return(
                                                                    <div className="tiny-slide text-center" key={index}>
                                                                        <div className="card border-0 p-4 item-box mb-2 shadow rounded">
                                                                            <p className="text-muted mb-0">{item.time}</p>
                                                                            <h6 className="mt-1">{item.title}</h6>
                                                                            <p className="text-muted mb-0">{item.name}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </TinySlider>    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''
                                }
                                {activeIndex === 3 ? 
                                    <div className="tab-pane fade show active">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mt-4 pt-2 text-center">
                                                <div className="client-review-slider">
                                                    <TinySlider settings={settings2}>
                                                        {patientsData.map((item, index) =>{
                                                            return(
                                                                <div className="tiny-slide text-center" key={index}>
                                                                    <p className="text-muted fw-normal fst-italic">{item.desc}</p>
                                                                    <img src={item.image} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt=""/>
                                                                    <ul className="list-unstyled mb-0">
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                    </ul>
                                                                    <h6 className="text-primary">{item.name} <small className="text-muted">{item.title}</small></h6>
                                                                </div>
                                                            )
                                                        })}
                                                </TinySlider>    
                                                </div>
                                            </div>
                                        </div>

                                    </div> : ''
                                }
                                {activeIndex === 4 ? 
                                    <div className="tab-pane fade show active">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card map border-0">
                                                    <div className="card-body p-0">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7087287198615!2d-43.3590859!3d-22.9977359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda47c287004f%3A0xea4948288ce5a99c!2sCentro%20M%C3%A9dico%20Barra%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1720587801695!5m2!1spt-BR!2sbr" style={{border:"0"}} title="doctris" className="rounded" allowFullScreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''
                                }
                                {activeIndex === 5 ? 
                                    <div className="tab-pane fade show active">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-12">
                                                <div className="card border-0 p-3 rounded shadow">
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="d-flex justify-content-between ms-1">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Segunda</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Horário:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Terça</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Horário:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Quarta</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Horário:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Quinta</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Horário:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Sexta</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Horário:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Sábado</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Horário:</span> 8.00 - 18.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Domingo</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Horário:</span> 8.00 - 14.00</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                                <div className="card border-0 text-center features feature-primary">
                                                    <div className="icon text-center mx-auto rounded-md">
                                                        <span className="mb-0"><FiPhone className="h3"/></span>
                                                    </div>
                        
                                                    <div className="card-body p-0 mt-4">
                                                        <h5 className="title fw-bold">Telefone</h5>
                                                        
                                                        <Link to="tel:+55 55 55555-55555" className="link">+55 55 55555-55555</Link>
                                                    </div>
                                                </div>
                                            </div>
                        
                                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                                <div className="card border-0 text-center features feature-primary">
                                                    <div className="icon text-center mx-auto rounded-md">
                                                        <span className="mb-0"><FiMail className="h3"/></span>
                                                    </div>
                        
                                                    <div className="card-body p-0 mt-4">
                                                        <h5 className="title fw-bold">Email</h5>
                                                        <Link to="mailto:contact@example.com" className="link">contato@contato.com.br</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''
                                }
                            </div>
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