import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Fragment>
        <footer className="footer-distributed">

            <div className="container-fluid">
                <div className="footer-right">

                    <Link to={{pathname:'https://www.facebook.com/DiutinGlobal'}} target="_blank" className='me-3'><i className="fa fa-facebook"></i></Link>
                    <Link to={{pathname:"https://instagram.com/diutinglobal?igshid=YmMyMTA2M2Y="}} target="_blank"><i className="fa fa-instagram"></i></Link>
                    
                </div>

                <div className="footer-left">

                    <div className="footer-links d-flex justify-content-evenly col-8 align-items-center">
                        <Link className="link-1" to="#">
                            <img src="img/logo-diutin-blanco.png" alt="logo-1" className="img-fluid" style={{objectFit: "cover"}} />
                        </Link>
                    
            

                            <Link to="dondecomprar.html"className=" text-center text-decoration text-white reset__footer">Dónde comprar?</Link>

                            <Link to="preguntas.html"className="text-center text-decoration text-white reset__footer">Preguntas frecuentes</Link>

                            <Link to="contacto.html" className="text-center text-decoration text-white reset__footer">Contáctanos</Link>
                    
                    
                            

                    </div>
                </div>
            </div>
            
        </footer>
    </Fragment>
  )
}

export default Footer