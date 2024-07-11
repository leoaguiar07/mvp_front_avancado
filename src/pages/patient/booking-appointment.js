import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import ScrollTop from "../../components/scrollTop";
import AdminFooter from "../../components/dashboard/adminFooter";

// Supondo que este seja o seu arquivo JSON
const doctorsData = [
  {
    id: 1,
    department: "GY",
    doctor: "CR"
  },
  {
    id: 2,
    department: "PS",
    doctor: "AL"
  }
  // Outros dados...
];

export default function BookingAppointment() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { id } = useParams();
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  useEffect(() => {
    // Busca os dados do doutor baseado no ID
    const doctorInfo = doctorsData.find(doc => doc.id === parseInt(id));
    if (doctorInfo) {
      setSelectedDepartment(doctorInfo.department);
      setSelectedDoctor(doctorInfo.doctor);
    }
  }, [id]);

  return (
    <>
      <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container" />

      
        <section className="bg-half-150 d-table w-100 bg-light">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4">Marque sua consulta</h3>
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

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow rounded overflow-hidden">
                <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                  <li className="nav-item">
                    <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded-0`} onClick={() => setActiveIndex(1)} to="#">
                      <div className="text-center pt-1 pb-1">
                        <h5 className="fw-medium mb-0">Consulta presencial</h5>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded-0`} onClick={() => setActiveIndex(2)} to="#">
                      <div className="text-center pt-1 pb-1">
                        <h5 className="fw-medium mb-0">Consulta Online</h5>
                      </div>
                    </Link>
                  </li>
                </ul>

                <div className="tab-content p-4">
                  {activeIndex === 1 ?
                    <div className="tab-pane fade show active">
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label className="form-label">Nome do paciente <span className="text-danger">*</span></label>
                              <input name="name" id="name" type="text" className="form-control" placeholder="Nome:" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Especialidade</label>
                              <select className="form-select form-control" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                                <option value="EY">Dermatologista</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Médico</label>
                              <select className="form-select form-control" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
                                <option value="CA">Dr. João Silva</option>
                                <option value="CR">Dr. Pedro Paulo</option>
                                <option value="AL">Dra. Aline Silva</option>
                                <option value="TO">Dr. Antonio souza</option>
                                <option value="JE">Dra. Jessica Pereira</option>
                                <option value="EL">Dra. Elisa Sherman</option>
                                <option value="BE">Dra. Betina Pessoa</option>
                                <option value="LO">Dra. Luisa Bastos</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Seu Email <span className="text-danger">*</span></label>
                              <input name="email" id="email" type="email" className="form-control" placeholder="Email :" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Celular<span className="text-danger">*</span></label>
                              <input name="phone" id="phone" type="tel" className="form-control" placeholder="Celular:" />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label className="form-label">Mensagem <span className="text-danger">*</span></label>
                              <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Mensagem:"></textarea>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">Marcar consulta</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div> : ''
                  }
                  {activeIndex === 2 ?
                    <div className="tab-pane fade show active">
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label className="form-label">Nome do paciente <span className="text-danger">*</span></label>
                              <input name="name" id="name2" type="text" className="form-control" placeholder="Nome:" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Especialidade</label>
                              <select className="form-select form-control" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                                <option value="EY">Eye Care</option>
                                <option value="GY">Gynecologist</option>
                                <option value="PS">Psychotherapist</option>
                                <option value="OR">Orthopedic</option>
                                <option value="DE">Dentist</option>
                                <option value="GA">Gastrologist</option>
                                <option value="UR">Urologist</option>
                                <option value="NE">Neurologist</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Médico</label>
                              <select className="form-select form-control" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
                                <option value="CA">Dr. Calvin Carlo</option>
                                <option value="CR">Dr. Cristino Murphy</option>
                                <option value="AL">Dr. Alia Reddy</option>
                                <option value="TO">Dr. Toni Kovar</option>
                                <option value="JE">Dr. Jessica McFarlane</option>
                                <option value="EL">Dr. Elsie Sherman</option>
                                <option value="BE">Dr. Bertha Magers</option>
                                <option value="LO">Dr. Louis Batey</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Email <span className="text-danger">*</span></label>
                              <input name="email" id="email2" type="email" className="form-control" placeholder="Email :" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Celular<span className="text-danger">*</span></label>
                              <input name="phone" id="phone2" type="tel" className="form-control" placeholder="Celular:" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label"> Data: </label>
                              <input name="date" type="text" className="form-control start" placeholder="Data :" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label" for="input-time">Hora: </label>
                              <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM" />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label className="form-label">Mensagem <span className="text-danger">*</span></label>
                              <textarea name="comments" id="comments2" rows="4" className="form-control" placeholder="Mensagem:"></textarea>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">Marcar consulta</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div> : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdminFooter />
      <ScrollTop />
    </>
  );
}
