import React,{Fragment} from 'react'

function Categoria() {
  return (
    <Fragment>
        <div className="hero__diutin__">
                <div className="my__container flex-column justify-content-center align-items-center" style={{height:"100%"}}>
                    <br />
                    <h1 className="text-center font__nunito personalizado mb-5__personalizado mt-5__personalizado">Nuestras Categorías</h1>
                    
                    <div className="d-flex justify-content-evenly flex-wrap  m-auto">
                        <div className="col-3 full__media" data-aos="fade-up" data-aos-duration="2000">
                            <p className="font__nunito color__blue text-center" 
                                style={{
                                    fontSize: "20px",
                                    fontWeightht: "900",
                                }}>PROTEÍNA</p>
                                <img src="img/icono-xs-2.png" alt="ctag-1" className="img-fluid sombra" />
                            
                        </div>
                        <div className="col-3 full__media" data-aos="fade-up" data-aos-duration="2000">
                            <p className="font__nunito color__blue text-center" 
                            style={{
                                    fontSize: "20px",
                                    fontWeightht: "900",
                                }}>CARBOHIDRATOS</p>
                                <img src="img/icono-xs.png" alt="ctag-2" className="img-fluid sombra position-relative" />
                            
                        </div>
                        <div className="col-3 full__media" data-aos="fade-up" data-aos-duration="2000">
                        <p className="font__nunito color__blue text-center" 
                            style={{
                                fontSize: "20px",
                                fontWeightht: "900",
                               }}>FIBRA</p>
                            <img src="img/icono-xs-3.png" alt="ctag-3" className="img-fluid sombra position-relative" />
                           
                        </div>
                        
                        
                    </div>

                    <div className="d-flex justify-content-evenly flex-wrap  mt-5 m-auto">
                        <div className="col-3 full__media botom__reset" data-aos="fade-up" data-aos-duration="2000">
                        <p className="font__nunito color__blue text-center" 
                            style={{
                                fontSize: "20px",
                                fontWeightht: "900",
                               }}>GRASAS</p>
                            <img src="img/icono-xs-4.png" alt="ctag-4" className="img-fluid sombra position-relative" />
                            
                        </div>
                        <div className="col-3 full__media botom__reset" data-aos="fade-up" data-aos-duration="2000">
                        <p className="font__nunito color__blue text-center" 
                            style={{
                                fontSize: "20px",
                                fontWeightht: "900",
                               }}>VITAMINAS</p>
                            <img src="img/icon-xs-5.png" alt="ctag-5" className="img-fluid sombra position-relative" />
                           
                        </div>
                        <div className="col-3 full__media botom__reset" data-aos="fade-up" data-aos-duration="2000">
                        <p className="font__nunito color__blue text-center" 
                            style={{
                                fontSize: "20px",
                                fontWeightht: "900",
                               }}>MINERALES</p>
                            <img src="img/icono-xs-6.png" alt="ctag-6" className="img-fluid sombra position-relative" />
                            
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>

    </Fragment>
  )
}

export default Categoria