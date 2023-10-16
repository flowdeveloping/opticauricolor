import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div style={{ marginTop: "5rem" }}>
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted " >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5" >
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Uricolor</h6>
              <p>Sobre Nosotros</p>
              <p>Condiciones de Uso</p>
              <p>Condiciones de Promociones</p>
              <p>Politica de Privacidad</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
              <p>
                <a href="#!" className="text-reset">
                  Anteojos para sol
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Armazones
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Accesorios
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Lentes de Oftálmicos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tratamientos
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Ayuda</h6>
              <p>
                <a href="#!" className="text-reset">
                  Salud Visual
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Promociones
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Preguntas Frecuentes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Sucursales
                </a>
              </p>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3">
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contáctenos</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Espejo 166, Ciudad, Mendoza. C.P. 5500
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@opticauricolor.com.ar
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="4" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Horario de atención
              </h6>

              <h6 className="text-uppercase fw-bold mb-4">
                1 de marzo a 31 de diciembre
              </h6>
              <p>
                <MDBIcon icon="" className="me-2 " />
                Lunes a viernes 10 a 18 hs
              </p>
              <p>
                <MDBIcon icon="" className="me-2" />
                Sábados 10 a 13:30 hs
              </p>
              <h6 className="text-uppercase fw-bold mb-4">
                1 de enero a 28 de febrero
              </h6>
              <p>
                <MDBIcon icon="" className="me-2" />
                Lunes a viernes 10 a 14 hs y 17 a 20 hs
              </p>
              <p>
                <MDBIcon icon="" className="me-2" />
                Sábados 10 a 13:30 hs.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <MDBContainer className="pt-4">
          <div className="iconosFooter">
            <section className="lg-2">
              <MDBBtn
                rippleColor="dark"
                color="link"
                floating
                size="lg"
                className="iconoFooterG text-dark m-2"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="facebook-f" size="2x" />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color="link"
                floating
                size="lg"
                className="iconoFooterG text-dark m-2"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="whatsapp" size="2x" />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color="link"
                floating
                size="lg"
                className="iconoFooterG text-dark m-2"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="instagram" size="2x" />
              </MDBBtn>
            </section>
          </div>
        </MDBContainer>
      </MDBFooter>
    </MDBFooter>
    </div>
  );
}
