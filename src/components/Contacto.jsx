import React,{Fragment} from 'react'
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Subtitulo from '../layouts/Subtitulo'
function contacto() {
  return (
    <Fragment>
        <Header />
            <Subtitulo titulo="Contacto"/>
            <div className="fondo__body__product">
                        <div className="my__container">
                            <br />
                            <h2 className="font__nunito color__blue font__subtitle text-center">Contactate con nosotros</h2>
                            <div className="full bg__info__contacto p-3" style={{border: '1px solid #f2f2f2'}}>
                                
                                <div className="d-flex justify-content-evenly card__contacto h-auto flex__wrap__media">
                                
                                    <div className="col-6 img__atributtes d-flex flex-column justify-content-evenly full__media reverse__">
                                        <h2 className="font__nunito color__blue text-capitalize text-center">Nos ubicamos en:</h2>
                                    
                                        <div id="mapa" style={{height: '100%'}} className="full__media mapa">
                                        </div>
                                    
                                    <ul className="d-flex justify-content-evenly align-items-center mt-3 full__media" style={{listStyle: 'none'}}>
                                            <li>
                                                <i className="fa-brands fa-facebook fs-2 color__blue"></i>
                                            </li>
                                            <li>
                                                <i className="fa-brands fa-instagram fs-2 color__blue"></i>
                                            </li>
                                            <li>
                                                <i className="fa-brands fa-linkedin fs-2 color__blue"></i>
                                            </li>
                                    </ul>
                                    </div>
                                    <div className="col-6   full__media">
                                        <h2 className="font__nunito color__blue text-capitalize text-center">Envianos tus dudas</h2>
                                        <form className="bg-white p-2">
                                            <div className="form-group mt-3">
                                                <label for="#nombre" className="font__nunito color__blue">Nombre:</label>
                                                <input type="text" className="form-control  font__nunito" id="nombre"
                                                placeholder="Ingresa tu nombre"
                                                required
                                                />
                                            </div>
                                        
                                            <div class="form-group mt-3">
                                                <label for="#apellido" className="font__nunito color__blue">Correo:</label>
                                                <input type="email" className="form-control  font__nunito" id="correo"
                                                placeholder="Ingresa tu correo"
                                                required
                                                />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label className="font__nunito color__blue">Consulta</label>
                                                <textarea  
                                                style={{minHeight: 'calc(8em + 0.75rem + 2px);max-height: calc(12em + 0.75rem + 2px)'}}
                                                className="form-control  font__nunito"></textarea>
                                            </div>
                                            <div className="form-group mt-3 d-flex justify-content-end">
                                                <button className="btn btn-info btn-lg full__media">Enviar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                </div>
        <Footer />
    </Fragment>
  )
}

export default contacto