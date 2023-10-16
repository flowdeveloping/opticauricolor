import React from 'react';
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import ComponenteFull from '../assets/img/fotosNosotros/componentefull.png';
import '../styles/Nosotros.css';

export default function nosotrosCard() {
  return (
    <div className="nosotros-container d-flex flex-column align-items-center">
      <h1 className="nosotros-title">Nosotros</h1>
      <div className="d-flex justify-content-center card-container">
        <MDBCard className="card">
          <MDBRow className='g-0'>
            <MDBCol md='8' className="col-12 mr-md-5">
              <MDBCardBody className="card-body">
                <MDBCardText className="card-text">
                  En Óptica Uricolor, llevamos <span style={{ color: 'orange' }}>más de dos décadas siendo tu elección confiable para cuidar de tu salud visual.</span>

                  <br /><br />
                  Trabajamos para proporcionarte la mejor atención oftalmológica y una amplia gama de productos ópticos de alta calidad.

                  <br /><br />
                  Con la tecnología más avanzada y una atención personalizada, te garantizamos que encontrarás las soluciones visuales ideales para ti y tu familia.

                  <br /><br />
                  Visítanos hoy mismo y experimenta la diferencia de elegir a Óptica Uricolor.
                  <br /><br />
                  Tu salud visual es nuestra prioridad, y estamos aquí para cuidarla desde 1997 y mucho más allá.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md='4' className="d-block">
              <div className="image-scroll">
                <div className="image-container">
                  <img src={ComponenteFull} alt='Componente Full' className="component-full" />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    </div>
  );
}
