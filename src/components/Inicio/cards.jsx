import React from 'react'
import {MDBCard, MDBCardImage, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import foto1Home from '../../assets/img/fotosHome/aynotdead1.png';
import foto2Home from '../../assets/img/fotosHome/dolcegabanna2.png';
import foto3Home from '../../assets/img/fotosHome/palosanto3.png';
import foto4Home from '../../assets/img/fotosHome/rayban4.png';
;
const cards = () => {
  return (
    <MDBRow  className='row-cols-1 row-cols-md-2 g-4' style={{ margin: '5rem 5rem' }}>
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src={foto1Home}
          alt='...'
          position='top'
        />
        
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src={foto2Home}
          alt='...'
          position='top'
        />
        
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src={foto3Home}
          alt='...'
          position='top'
        />
        
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src={foto4Home}
          alt='...'
          position='top'
        />
        
      </MDBCard>
    </MDBCol>
  </MDBRow>
);
}

export default cards