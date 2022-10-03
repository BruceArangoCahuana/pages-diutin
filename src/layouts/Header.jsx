import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';

function Header(){
    const rutas ={
        inicio:"/",
        nosotros:"/nosotros",
        productos:"/productos",
        contacto:'/contacto'
    } 
    return(
        <Fragment>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                            <div className="my__container d-flex flex-column">
                                    <div className="full d-flex flex-wrap justify-content-between mb-4 menu__banderas">
                                        <div className="col-3  full__media">
                                            <a className="navbar-brand logo__diutin" href="#">
                                                <img src="img/logodiutin.png" alt="" className="img-fluid logo__diutin" width="100px" />
                                            </a>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                        </div>
                                        
                                        <div className="col-3 full__media">
                                            <ul className="d-flex flex-wrap justify-content-evenly list__estilos align-items-center mt-2">
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa-solid fa-globe color__blue"></i></Link>
                                                    <div className="dropdown-menu">
                                                    <Link className="dropdown-item font__nunito" to="#">Ingles</Link>
                                                    <Link className="dropdown-item font__nunito" to="#">Español</Link>
                                                    <Link className="dropdown-item font__nunito" to="#">Portugues</Link>
                                                    </div>
                                                </li>
                                                <li className="col-1 bandera">
                                                    <img src="img/peru.png" alt="" className="img-fluid bandera__size" />
                                                </li>
                                                <li className="col-1  bandera">
                                                    <img src="img/chile.png" alt="" className="img-fluid bandera__size" />
                                                </li>
                                                <li className="col-1  bandera">
                                                    <img src="img/colombia.png" alt="" className="img-fluid bandera__size" />
                                                </li> 
                                                <li className="col-1 bandera">
                                                    <img src="img/ecuador.png" alt="" className="img-fluid bandera__size" />
                                                </li>
                                                <li className="col-1 bandera">
                                                    <img src="img/bolivia.png" alt="" className="img-fluid bandera__size" />
                                                </li>
                                                <li className="col-1 bandera">
                                                    <img src="img/panama.png" alt="" className="img-fluid bandera__size" />
                                                </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                                    
                                
                                    <div className="collapse navbar-collapse col-11" id="navbarColor03">
                                        <ul className="navbar-nav m-auto d-flex justify-content-evenly align-items-center">
                                        <li className="nav-item separados full__media">
                                            {
                                                rutas.inicio == window.location.pathname? <Link className="nav-link  nav__medida 
                                                d-flex justify-content-center 
                                                align-items-center
                                                text-center active font__oscuro stilos__menu text-white full__media fs-6" to="/"
                                                
                                                >Inicio
                                                <span className="visually-hidden">(current)</span>
                                                </Link>:
                                                <Link className="nav-link font__oscuro stilos__menu fs-15 nav__medida
                                                d-flex justify-content-center  text-center align-items-center full__media fs-6" to="/"
                                                
                                                >Inicio
                                                <span className="visually-hidden">(current)</span>
                                                </Link>
                                            }
                                        
                                        </li>
                                        <li className="nav-item separados full__media">
                                            {
                                                rutas.nosotros == window.location.pathname?
                                                <Link className="nav-link font__oscuro stilos__menu nav__medida fs-15
                                                d-flex justify-content-center  active text-center align-items-center full__media fs-6
                                                " to="/nosotros">Nosotros</Link>
                                                :
                                                <Link className="nav-link  font__oscuro stilos__menu nav__medida fs-15
                                                d-flex justify-content-center  text-center align-items-center full__media fs-6
                                                " to="/nosotros">Nosotros</Link>
                                            }
                                            
                                        </li>
                                        
                                        <li className="nav-item separados  full__media">
                                          {
                                            rutas.productos == window.location.pathname?
                                            <Link className="nav-link font__oscuro stilos__menu fs-15 nav__medida
                                            d-flex justify-content-center  active text-center align-items-center full__media fs-6
                                            " to="/productos">Productos</Link>
                                            :
                                            <Link className="nav-link font__oscuro stilos__menu fs-15 nav__medida
                                            d-flex justify-content-center   text-center align-items-center full__media fs-6
                                            " to="/productos">Productos</Link>
                                          }
                                        </li>

                                        <li className="nav-item separado  full__media">
                                            {
                                               rutas.contacto == window.location.pathname?<Link className="nav-link font__oscuro stilos__menu fs-15 nav__medida
                                                d-flex justify-content-center  text-center align-items-center active full__media fs-6
                                                " to="/contacto">Contáctanos</Link>:
                                                <Link className="nav-link font__oscuro stilos__menu fs-15 nav__medida
                                                d-flex justify-content-center  text-center align-items-center full__media fs-6
                                                " to="/contacto">Contáctanos</Link>
                                            }
                                        </li>
                                        
                                        <li className="nav-item separados full__media">
                                            <Link className="nav-link font__oscuro stilos__menu  nav__medida fs-15
                                            d-flex justify-content-center  text-center align-items-center full__media fs-6
                                            " to="/#">Preguntas frecuentes</Link>
                                        </li>
                                        
                                        
                                        
                                        
                                        <li className="nav-item separado  full__media">
                                            <Link className="nav-link font__oscuro stilos__menu fs-15 nav__medida
                                            d-flex justify-content-center  text-center align-items-center full__media fs-6
                                            " to="/#">Blog</Link>
                                        </li>
                                    
                                    

                                        </ul>
                                        
                                    </div>
                            </div>
                    </nav>
            </header>
        </Fragment>
    )
}

export default Header