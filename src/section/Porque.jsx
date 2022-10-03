import React,{Fragment} from 'react'

function Porque() {
  return (
    <Fragment>
        <div className="fondo__diuitn height__media h__100">
            <div className="my__container d-column justify-content-center align-items-center" style={{height: "100%"}}>
            
                <br />
                <h1 className="text-center font__nunito personalizado mb-5__personalizado mt-5__personalizado">¿Por qué diutin es tu aliado?</h1>
                <div className="d-flex justify-content-between flex-wrap botom__reset">

                    <div className="col-3 card__diutin full__media mb-query mt-query border__radius" style={{marginTopop: "0px"}} data-aos="fade-up" data-aos-duration="2000">
                        <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                                <img src="img/icono-porque-1.png" alt="img-1" className="img-fluid icono__sombra" />
                        </div>
                        <div className="card__body mt-1">
                            <h2 className="text-center font__nunito">Innovación en Nutrición</h2>
                            <p className="p-3 text__justifys font__nunito">
                                Diutin, tiene líneas de suplementos nutricionales con altos stándares de calidad y tecnología,
                                cuentan con aprobación de los principales organismos e instituciones de nutrición y salud
                            </p>
                        </div>
                    </div>
                    <div className="col-3 card__diutin full__media mb-query border__radius" data-aos="fade-up" data-aos-duration="2000">
                        <div className="d-flex justify-content-evenly align-items-center">
                            <img src="img/icono-porque-3.png" alt="img-2" className="img-fluid icono__sombra" />
                        
                        </div>
                        <div className="card__body mt-3">
                            <h2 className="text-center font__nunito">Variedad de Productos</h2>
                            <p className="p-3 text__justifys font__nunito">
                                Diutin, cuenta con una línea de suplementos nutricionales 
                                tanto para cada etapa de vida como para cubrir necesidades 
                                nutricionales de cada persona y/o paciente.
                            </p>
                        </div>
                    </div>
                    <div className="col-3 card__diutin full__media mb-query border__radius" data-aos="fade-up" data-aos-duration="2000">
                        <div className="d-flex justify-content-evenly align-items-center">
                            <img src="img/icono-porque-2.png" alt="img-3" className="img-fluid icono__sombra" />
                        </div>
                        <div className="card__body mt-3">
                            <h2 className="text-center font__nunito">Hecho en USA</h2>
                            <p className="p-3 text__justifys font__nunito">
                                Diutin, es elaborado bajo los lineamientos y 
                                supervisión de la FDA, además cuenta con el status GRAS (Generally recognized as safe).
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Porque