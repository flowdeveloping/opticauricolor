import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div style={{ marginTop: "3rem" }}>
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow>
            <MDBCol xs="6" md="2" className="mb-4">
                <h6 className="text-uppercase fw-bold underline-text mb-4">Uricolor</h6>
                <p><a href="/nosotros" className="text-reset">
                  Sobre Nosotros
                </a></p>
                <p><a href="/promociones" className="text-reset">
                  Condiciones de Uso
                </a></p>
                <p><a href="/promociones" className="text-reset">
                  Condiciones de Promociones
                </a></p>
                <p><a href="/promociones" className="text-reset">
                  Politica de Privacidad
                </a></p>
              </MDBCol>

              <MDBCol xs="6" md="2" className="mb-4">
                <h6 className="text-uppercase fw-bold underline-text mb-4">Productos</h6>
                <p>
                  <a href="/productos" className="text-reset">
                    Anteojos para sol
                  </a>
                </p>
                <p>
                  <a href="/productos" className="text-reset">
                    Armazones
                  </a>
                </p>
                <p>
                  <a href="/productos" className="text-reset">
                    Accesorios
                  </a>
                </p>
                <p>
                  <a href="/productos" className="text-reset">
                    Lentes de Oftálmicos
                  </a>
                </p>
                <p>
                  <a href="/productos" className="text-reset">
                    Tratamientos
                  </a>
                </p>
              </MDBCol>

              <MDBCol xs="6" md="2" className="mb-4">
                <h6 className="text-uppercase fw-bold underline-text mb-4">Ayuda</h6>
                <p>
                  <a href="/saludvisual" className="text-reset">
                    Salud Visual
                  </a>
                </p>
                <p>
                  <a href="/promociones" className="text-reset">
                    Promociones
                  </a>
                </p>
                <p>
                  <a href="saludvisual" className="text-reset">
                    Preguntas Frecuentes
                  </a>
                </p>
                <p>
                  <a href="/contacto" className="text-reset">
                    Sucursales
                  </a>
                </p>
              </MDBCol>

              <MDBCol xs="6" md="3" className="mb-4">
                <h6 className="text-uppercase fw-bold underline-text mb-4">Contáctenos</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Espejo 166, Ciudad, Mendoza. C.P. 5500
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@opticauricolor.com.ar
                </p>
              </MDBCol>
              
              <MDBCol xs="6" md="3" className="mb-4">
                <h6 className="text-uppercase fw-bold underline-text mb-4">Horario de atención</h6>
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
                  Lunes a viernes 10 a 14hs - 17 a 20hs
                </p>
                <p>
                  <MDBIcon icon="" className="me-2" />
                  Sábados 10 a 13:30 hs
                </p>
              </MDBCol>
            </MDBRow>

            <MDBRow>
            <MDBCol className="text-center mb-4">
                
                <MDBBtn
                  rippleColor="dark"
                  color="link"
                  floating
                  size="lg"
                  className="iconoFooterG text-dark m-2"
                  href="https://www.facebook.com/uricolor"
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
                  href="https://wa.me/5492612071115"
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
                  href="https://www.instagram.com/opticauricolor/"
                  role="button"
                >
                  <MDBIcon fab icon="instagram" size="2x" />
                </MDBBtn>
                </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}
