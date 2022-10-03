import React,{Fragment} from "react";
//import Banner from "../layouts/Banner";
import Headers from "../layouts/Header"
import Footer from "../layouts/Footer"
import Subtitulo from "../layouts/Subtitulo";
function Nosotros(){
    
    return(
        <Fragment>
            <Headers />
                <Subtitulo titulo="Nosotros"/>
                <div className="fondo__personalizado">
                    <div>
                        <div className="my__container d-flex justify-content-between  align-items-center flex__wrap__reverse">
                        
                            <div className="card__nosotros__per mr__pers mt__100 full__media">
                                <h2 className="color__blue font__subtitle text-center" style={{fontFamily: 'Nunito, sans-serif!important'}}>MISIÓN</h2>
                                <p className="font__subtitle__body full__media">
                                    Somos una línea de nutrición clínica especializada, comprometidos en brindar productos de calidad, 
                                    garantizando confianza y beneficios a nuestros consumidores.
                                </p>
                            </div>
                            <div className="img__card mt__100 d__flex-center">
                                    <img src="img/icono-nosotros.png" alt="icono-nosotros-1" className="img-fluid sombra__general" />
                            </div>
                        </div>
                        <div className="my__container  d-flex justify-content-between mb__100 mt__100 align-items-center flex__wrap">
                            <div className="img__card">
                                <img src="img/icono-nosotros-2.png" alt="icono-nosotros-1" className="img-fluid sombra__general" />
                            </div>
                            <div className="card__nosotros__per me__pers full__media">
                                <h2 className="color__blue font__subtitle text-center">VISIÓN</h2>
                                <p className="font__subtitle__body">
                                    Ser la línea líder en nutrición clínica especializada, con un equipo calificado 
                                    logrando ofrecer productos y servicios innovadores a nivel internacional, comprometidos a mejorar la calidad de vida de las personas.
                                </p>
                            </div>
                            
                        </div>
                        <div className="my__container d-flex justify-content-between align-items-center flex__wrap__reverse">
                            <div className="card__nosotros__per mr__pers full__media mb__100">
                                <h2 className="color__blue font__subtitle text-center">VALORES</h2>

                                    <ul className="font__subtitle__body text-center" style={{listStyle: 'none'}}>
                                        <li>Puntualidad</li>
                                        <li>Compromiso</li>
                                        <li>Transparencia</li>
                                        <li>Responsabilidad</li>
                                        <li>Resiloiencia</li>
                                        <li>Calidad</li>
                                        <li>Lealtad</li>
                                    </ul>
                                
                            </div>
                            <div className="img__card mb__100">
                                    <img src="img/icono-nosotros-3.png" alt="icono-nosotros-1" className="img-fluid sombra__general" />
                            </div>
                        </div>
                    </div>
            
                </div>
            <Footer />
        </Fragment>
    )
}

export default Nosotros