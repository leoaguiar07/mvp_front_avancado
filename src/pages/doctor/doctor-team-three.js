import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { doctorData } from "../../data/data";
import { FiHeart, RiMapPinLine, RiTimeLine, RiMoneyDollarCircleLine, } from '../../assets/icons/vander';

export default function DoctorTeamThree({ name, location }) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (name || location) {
            // Filtrar os dados somente se name ou location não estiverem vazios
            const result = doctorData.filter(item =>
                item.name?.toLowerCase().includes(name?.toLowerCase() || '') &&
                item.location?.toLowerCase().includes(location?.toLowerCase() || '')
            );
            setFilteredData(result);
        } else {
            // Carregar todos os dados iniciais
            setFilteredData(doctorData);
        }
    }, [name, location]);

    return (
        <>
            <section className="section">
                <div className="container">
                    {filteredData.length > 0 ? (
                        <div className="row align-items-center">
                            {filteredData.map((item, index) => {
                                return (
                                    <div className="col-lg-6 col-md-12 mt-4 pt-2" key={index}>
                                        <div className="card team border-0 rounded shadow overflow-hidden">
                                            <div className="row align-items-center">
                                                <div className="col-md-6">
                                                    <div className="team-person position-relative overflow-hidden">
                                                        <img src={item.image} className="img-fluid" alt="" />
                                                        <ul className="list-unstyled team-like">
                                                            <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <Link to={`/doctor-profile/${item.id}`} className="title text-dark h5 d-block mb-0">{item.name}</Link>
                                                        <small className="text-muted speciality">{item.speciality}</small>
                                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                                            <ul className="list-unstyled mb-0">
                                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                            </ul>
                                                            <p className="text-muted mb-0">5 Star</p>
                                                        </div>
                                                        <ul className="list-unstyled mt-2 mb-0">
                                                            <li className="d-flex ms-0">
                                                                <RiMapPinLine className="text-primary align-middle" />
                                                                <small className="text-muted ms-2">{item.location}</small>
                                                            </li>
                                                            <li className="d-flex ms-0 mt-2">
                                                                <RiTimeLine className="text-primary align-middle" />
                                                                <small className="text-muted ms-2">{item.time}</small>
                                                            </li>
                                                            <li className="d-flex ms-0 mt-2">
                                                                <RiMoneyDollarCircleLine className="text-primary align-middle" />
                                                                <small className="text-muted ms-2">{item.charges}</small>
                                                            </li>
                                                        </ul>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col text-center">
                            <p className="text-muted">Não há doutores cadastrados com os dados informados.</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* <Footer />
            <ScrollTop /> */}
        </>
    )
}
