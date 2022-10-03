import React,{Fragment} from 'react'

function Subtitulo(props) {
  return (
    <Fragment>
         <div className="fondo__gray">
            <div className="my__container d-flex justify-content-center align-items-center" style={{height:"100px"}}>
                <h1 className="text-center font__nunito title font__sub titulo__" style={{fontWeight: 300}}>{
                    props.titulo
                }</h1>
            </div>
        </div>
    </Fragment>
  )
}

export default Subtitulo