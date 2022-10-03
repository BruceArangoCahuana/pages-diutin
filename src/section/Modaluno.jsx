import React,{Fragment} from 'react'

function Modaluno(props) {
   // boton descargar  <li><button className="btn  btn-success btn-lg full">Descargar  <i className="fa-solid fa-download"></i></button></li>
    const {id,img,nombre,sabor,presentacion,categoria} = props
  return (
    <Fragment>
          <div className="modal fade"  id={`product-${id}`} tabindex="-1" aria-labelledby="Modal-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal__content__producto">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div className="modal-body d-flex justify-content-center flex-wrap">
                                <div className="col-4 full__media">
                                    <img src={img} alt="" className="img-fluid border__radius__20"/>
                                    <div>
                                        <h2 className="text-center color__blue  font__nunito" style={{fontWeight:'bolder'}}>{nombre}</h2>
                                        <div className='d-flex justify-content-evenly aligns-items-center'>
                                            <p className="text-center  font__nunito box__line" style={{fontWeight:'400'}}>{sabor}</p>
                                            <p className="text-center  font__nunito box__line" style={{fontWeight:'400'}}>{presentacion}</p>
                                            <p className="text-center  font__nunito box__line" style={{fontWeight:'400'}}>{categoria}</p>
                                        </div>
                                    </div>
                                    <button className='btn btn-warning w-100 border__radius'>Descargar PDF</button>
                                </div>
                                <div className="col-6 full__media">
                                <ul style={{listStyle: 'none'}}>
                                        <li>
                                            <h5 className="color__blue font__nunito">Descripcion</h5>
                                            <p className="font__nunito text__justify">Es un módulo de fibra soluble derivada del maíz, 
                                            con acción prebiótica y resistente a la digestión; 
                                            libre de gluten, azúcar y grasas. De fácil manejo y preparación instantánea. 
                                            La fibra ayudar a regular el estreñimiento, controlar la ansiedad, disminuir 
                                            los niveles de colesterol</p>
                                        </li>
                                        <li>
                                            <h5 className="color__blue font__nunito">Advertencias:</h5> 
                                            <p className="font__nunito text__justify">
                                                No superar la dosis diaria expresamente recomendada para 
                                                productos dietéticos. El producto debe ser almacenado fuera del alcance 
                                                y vista de los niños. No usar si el sello de seguridad está roto. 
                                            </p>
                                        </li>
                                        <li>
                                            <h5 className="color__blue font__nunito">Precauciones:</h5> 
                                            <p className="font__nunito text__justify">Hipersensibilidad a algunos de sus componentes.</p>
                                        </li>
                                        <li>
                                            <h5 className="color__blue font__nunito">Contraindicaciones:</h5> 
                                            <p className="font__nunito text__justify">Hipersensibilidad a algunos de los componentes.</p>
                                        </li>
                                       
                                </ul>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default Modaluno