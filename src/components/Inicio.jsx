import React,{Fragment} from 'react';
import Header from '../layouts/Header';
import Banner from '../layouts/Banner';
import Porque from "../section/Porque";
import Categoria from '../section/Categoria';
import Footer from '../layouts/Footer';
function Inicio(){
    
    return(
        <Fragment>
            <Header />
            <Banner />
            <Porque />
            <Categoria />
            <div className ="hero__diutin__2 alto__auto">
                        <br />
                        <h1 className="text-center font__nunito mb-5__personalizado mt-5__personalizado" style={{fontWeight: "bold"}}>Blog Diutin</h1>
                        <div className="my__container mb-5__personalizado__ full__media">
                            <div id="bannerdos" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    
                                </div>
                                <div className="carousel-inner redius-xs-20 sombra__baner banner__query">
                                <div className="carousel-item height__media active"data-bs-interval="10000">
                                    <img src="img/blog-1.png" className="full banner__query position-relative" alt="BLOG-1" />
                                    <div className="content__banner col-5 d-flex justify-content-start position-absolute" style={{top: "20%",left:"6.5%"}}>
                                        <h2
                                        className="font__nunito color__blue"
                                        style={{fontSize: "54.5px"}}
                                        >Ejercicios que puedes realizar en casa</h2>
                                    </div>
                                </div>
                                <div className="carousel-item height__media" data-bs-interval="1000">
                                    <img src="img/blog-2.png" className="full banner__query" alt="BLOG-2" />
                                    <div className="content__banner col-5 d-flex justify-content-start position-absolute" style={{top: "20%",left:"6.5%"}}>
                                        <h2
                                        className="font__nunito color__blue"
                                        style={{fontSize: "54.5px"}}
                                        >Tips para mantener una Alimentación Balanceada</h2>
                                    </div>
                                </div>
                                
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#bannerdos" data-bs-slide="prev">
                                    <i className="fa-solid fa-chevron-left icon__banner"></i>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#bannerdos" data-bs-slide="next">
                                    <i className="fa-solid fa-chevron-right icon__banner"></i>
                                </button>
                            </div>
                        </div>   
                        <br />     
                </div>
            <Footer />
        </Fragment>
    )
}


export default Inicio