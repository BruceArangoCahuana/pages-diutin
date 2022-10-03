import React,{
    Fragment
} from 'react';
import { Link } from 'react-router-dom';

function Banner(){
    return(
        <Fragment>
            <section className="glider-contain">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="5" aria-label="Slide 6"></button>
                
                </div>
                <div className="carousel-inner">

                <div className="carousel-item active" data-bs-interval="10000" id="banner-1">
                        <img src="img/banner-1.jpg" className="d-block w-100 img__ position-relative delete__" alt="banner-1" />
                        <div className="content__banner 
                        full__media
                        col-3 d-flex justify-content-start align-items-center position-absolute postion__banner__ flex-column" style={{left:"18%"}}>
                                <h2
                                className="font__nunito text-center text__media color__blue none__line__banner mt-2 font__banner"
                                style={{textAlign: 'center'}}
                                >Fibra soluble a base de maíz, 100%almidón resistente.</h2>
                                <Link to="#" className="btn  btn-info  col-6 redius full__media m-auto">Ver más</Link>
                        </div>
                        
                </div>

                <div className="carousel-item"  data-bs-interval="2000" id="banner-2">
                    <img src="img/banner-7.jpg" className="d-block w-100 position-relative delete__" alt="banner-3" />
                    <div className="content__banner col-3 d-flex justify-content-start position-absolute postion__banner__dos
                    postion__banner__dos__media
                    full__media flex-column
                    " style={{left:"15%"}}>
                        <h2
                        className="font__nunito  text__media color__blue none__line__banner mt-1 font__banner"
                        style={{textAlign: "center"}}
                        >Proteína líquida hidrolizada ,de gran digestibilidad, absorción y alto valor biológico.</h2>
                        
                        <Link to="/#" className="btn  btn-info  col-6 redius full__media m-auto">Ver más</Link>
                    
                    </div>

                </div>

                <div className="carousel-item"  data-bs-interval="2000" id="banner-3">
                    <img src="img/banner-3.jpg" className="d-block w-100 position-relative delete__" alt="banner-3" id="banner-3" />
                    <div className="content__banner col-3 d-flex justify-content-start position-absolute postion__banner__
                    postion__banner__dos__media
                    full__media flex-column
                    "  style={{left:"15%"}}>
                        <h2
                        className="font__nunito  text__media color__blue none__line__banner font__banner mt-2"
                        style={{textAlign: "center"}}
                        >Proteína líquida completa hidrolizada de gran digestibilidad, absorción y alto valor biológico.</h2>
                        <Link to="/#" className="btn  btn-info  col-6 redius full__media m-auto">Ver más</Link>
                    </div>
                
                </div>


                <div className="carousel-item"  data-bs-interval="2000" id="banner-4">
                    <img src="img/banner-4.jpg" className="d-block w-100 position-relative delete__" alt="banner-3" id="banner-4" />
                    <div className="content__banner col-3 d-flex justify-content-start position-absolute postion__banner__
                    postion__banner__dos__media
                    full__media flex-column
                    " style={{left:"16%"}}>

                        <h2
                        className="font__nunito text-center text__media color__blue none__line__banner font__banner"
                        style={{textAlign: "center"}}
                        >Proteína en polvo de alto valor biológico, a base de proteína de suero de leche.</h2>
                        <Link to="#" className="btn  btn-info  col-6 redius full__media m-auto">Ver más</Link>
                    </div>
                    
                </div>


                <div className="carousel-item"  data-bs-interval="2000">
                    <img src="img/banner-8.jpg" className="d-block w-100 position-relative" alt="banner-3" id="banner-4" />
                    <div className="content__banner col-3 d-flex justify-content-start position-absolute postion__banner__
                    postion__banner__dos__media
                    full__media flex-column
                    " style={{left:"17%"}}>

                        <h2
                        className="font__nunito text-center text__media color__blue none__line__banner font__banner mt-3"
                        style={{textAlign: "center"}}
                        >Módulo de carbohidratos en polvo a base de maltodextrina.</h2>
                        <Link to="#" className="btn  btn-info  col-6 redius full__media m-auto">Ver más</Link>
                    </div>
                
                </div>


                <div className="carousel-item"  data-bs-interval="2000">
                    <img src="img/banner-9.jpg" className="d-block w-100 position-relative" alt="banner-3" id="banner-4" />
                    <div className="content__banner col-3 d-flex justify-content-start position-absolute postion__banner__
                    postion__banner__dos__media
                    full__media flex-column
                    " style={{left:"17%"}}>

                        <h2
                        className="font__nunito text__media color__blue none__line__banner font__banner mt-2"
                        style={{textAlign: "center"}}
                        >Módulo de glutamina en polvo.</h2>
                        <Link to="#" className="btn  btn-info  col-6 redius full__media m-auto">Ver más</Link>
                    </div>
                    
                </div>
                

         


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <i className="fa-solid fa-chevron-left icon__banner"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <i className="fa-solid fa-chevron-right icon__banner"></i>
                </button>
            </div>
   
        </section>
        </Fragment>
    )
}

export default Banner