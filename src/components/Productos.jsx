import React,{Fragment,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Subtitulo from '../layouts/Subtitulo';
import Axios from "../config/axios"
import Modaluno from '../section/Modaluno';
function Productos(){
const[product,setProduct] = useState([])

const leerQuery = async() =>{
    const producto = await  Axios.get("api/productos")
    setProduct(producto.data.data)
    //console.log(producto.data.data)
}


    
// <pre>{JSON.stringify(data.attributes,undefined,2)}</pre>

useEffect(() =>{
    leerQuery();
 
},[])

    return(
        <Fragment>
            <Header />
                <Subtitulo titulo="Nuestros Productos"/>
                <div className="fondo__body__product">
                        <div className="my__container d-flex flex-column">
                        <h1 className="font__nunito  mt__100 font__title__ text_center__media text-capitalize text-center">Nuestra Variedad de producto</h1>
                            <div className="d-flex  justify-content-between align-items-center flex-wrap mt__35">
                                
                                {
                                    product.map(data =>(
                                        <div className="card__products  cursor__pointer full__media mt-4" data-aos="flip-left" data-aos-duration="2000" key={data.id}>
                                        <Link to="#" data-bs-toggle="modal" data-bs-target={`#product-${data.id}`}>
                                        <img src={`${data.attributes.urlimg}`} alt="product-1" className="img-fluid full__media sombra__baner border__radius img__hover"/>
                                        
                                        </Link>
                                        <div className="content__ mt__35">
                                            <ul className="none__line text-center">
                                                <li className="title__product font__nunito" style={{fontSize:"25px",fontWeight:500}}>{data.attributes.nombre}</li>
                                                <li className="font__nunito color__blue" style={{fontSize:"25px",fontWeight:300}}>Sabor {data.attributes.sabor}</li>
                                                <li className="font__nunito color__blue" style={{fontSize:"25px",fontWeight:300}}>{data.attributes.presentacion}</li>
                                                <li><span className={data.attributes.categoria == "proteina"?"badge bg-success":"badge bg-warning"}>{data.attributes.categoria}</span></li>
                                            </ul>
                                            
                                        </div>
                                        <Modaluno 
                                            id={data.id}
                                            img={data.attributes.urlimg}
                                            nombre={data.attributes.nombre}
                                            sabor={data.attributes.sabor}
                                            presentacion={data.attributes.presentacion}
                                            categoria={data.attributes.categoria}
                                        />
                                      </div>
                                      
                                    ))
                                }
                                
                                

                                
                                
                            </div>

                       
                   
                        </div>
                    
                </div>
                
            <Footer />
        </Fragment>
    )
}

export default Productos