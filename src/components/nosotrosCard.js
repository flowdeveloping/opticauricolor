import React from 'react';
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Componente1 from '../assets/img/fotosNosotros/componente1.png';
import Componente2 from '../assets/img/fotosNosotros/componente2.png';
import Componente3 from '../assets/img/fotosNosotros/componente3.png';
import Componente4 from '../assets/img/fotosNosotros/componente4.png';



export default function App() {
  return (
    <div className="d-flex flex-column align-items-center" style={{ height: '180vh' }}>
      <h1 style={{ marginTop: '20px', fontSize: '42px' }}>Nosotros</h1>
      <div className="d-flex justify-content-center">
        <MDBCard style={{ maxWidth: '940px', marginTop: '20px', marginRight: '50px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='8'>
              <MDBCardBody style={{ padding: '20px' }}>
                <MDBCardText style={{ fontSize: '26px', marginTop: '60px' }}>
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
            <MDBCol md='4' className="d-flex flex-column justify-content-center align-items-center text-center">
              <div style={{ marginTop: '20px', marginLeft: '-20px' }}>
                <div className="d-flex justify-content-center" style={{ padding: '20px' }}>
                  <div className="d-none d-md-block">
                    <MDBCardImage src={Componente1} alt='...' style={{ margin: '10px 0', width: '300px', height: '200px' }} />
                    <MDBCardImage src={Componente2} alt='...' style={{ margin: '10px 0', width: '300px', height: '200px' }} />
                    <MDBCardImage src={Componente3} alt='...' style={{ margin: '10px 0', width: '300px', height: '200px' }} />
                    <MDBCardImage src={Componente4} alt='...' style={{ margin: '10px 0', width: '300px', height: '200px' }} />
                 
                  </div>
                  <div className="d-md-none">
                    <MDBCardImage src={Componente1} alt='...' style={{ margin: '10px 0', maxWidth: '100%', height: '200px' }} />
                    <MDBCardImage src={Componente2} alt='...' style={{ margin: '10px 0', maxWidth: '100%', height: '200px' }} />
                    <MDBCardImage src={Componente3} alt='...' style={{ margin: '10px 0', maxWidth: '100%', height: '200px' }} />
                    <MDBCardImage src={Componente4} alt='...' style={{ margin: '10px 0', maxWidth: '100%', height: '200px' }} />
                    
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    </div>
  );
}
