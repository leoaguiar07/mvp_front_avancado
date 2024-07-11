import React, { useState } from "react";
import bg1 from '../../assets/images/bg/02.jpg'
import Navbar from "../../components/navbar";
import ScrollTop from "../../components/scrollTop";
import DoctorTeamThree from "../doctor/doctor-team-three";
import AdminFooter from "../../components/dashboard/adminFooter";
import {RiMapPin2Line, RiUser2Line} from '../../assets/icons/vander'


export default function IndexThree(){
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode definir a lógica para enviar os dados ou redirecionar para a rota correta
        // No exemplo, vamos apenas atualizar o estado com os valores do formulário
    };

    return(
        <>
        <Navbar manuClass="navigation-menu nav-left nav-light" containerClass="container"/>

        <section className="bg-half-150 d-table w-100" id="home" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-10">
                        <div className="heading-title text-center">
                            {/* <img src={logoIcon} height="50" alt=""/> */}
                            <h4 className="heading fw-bold text-white title-dark mt-3 mb-4">Marque sua consulta</h4>
                            <p className="para-desc mx-auto text-white-50 mb-0">Busque pelos melhores especialistas</p>
                            
                            <div className="mt-4 pt-2">
                                <form className="rounded text-start shadow p-4 bg-white-50" onSubmit={handleSubmit}>
                                    <div className="row align-items-center">
                                        <div className="col-md">
                                            <div className="input-group bg-white border rounded" style={{opacity:'0.7'}}>
                                                <span className="input-group-text border-0"><RiMapPin2Line className="text-primary h5 fw-normal mb-0"/></span>
                                                <input
                                                    name="location"
                                                    id="location"
                                                    type="text"
                                                    className="form-control border-0"
                                                    placeholder="Localidade:"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md mt-4 mt-sm-0">
                                            <div className="input-group bg-white border rounded" style={{opacity:'0.7'}}>
                                                <span className="input-group-text border-0"><RiUser2Line className="text-primary h5 fw-normal mb-0"/></span>
                                                <input
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    className="form-control border-0"
                                                    placeholder="Nome do Médico:"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-auto mt-4 mt-sm-0">
                                            <div className="d-grid d-md-block">
                                                <button type="submit" className="btn btn-primary">Buscar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section py-5 bg-light">
            <div className="container">
                <div className="row">
                    <DoctorTeamThree name={name} location={location} />
                </div>
            </div>
        </section>

        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}
