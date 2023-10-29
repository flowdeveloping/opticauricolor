import React from "react";
import Card from "react-bootstrap/Card";
import portadaSaludVisual from "../assets/img/fotosaludvisual/portadasaludvisual.png";
import '../styles/SaludVisual.css'

const saludvisualcomponente = () => {
  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };

  const cardStyle = {
    width: "60rem",
    margin: "0 auto",
  };

  const textStyle = {
    fontSize: "18px",
    textAlign: "left",
  };

    const highlightStyle1 = {
    fontWeight: "bold"
  };

  const highlightStyle = {
    color: "#FFA51F",
    fontWeight: "bold"
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={containerStyle}>
      <h1 className="saludvisual-title custom-title">
  <span>Salud Visual</span>
</h1>

        <div style={contentStyle}>
          <Card style={cardStyle}>
            <Card.Text style={textStyle}>
              La salud visual es crucial para la calidad de vida, la seguridad y el bienestar emocional. Exámenes regulares de la vista y hábitos saludables son clave para mantener una visión óptima.
            </Card.Text>
            <Card.Img variant="top" src={portadaSaludVisual} style={imageStyle} />
            <Card.Body>
              <Card.Text style={textStyle}>
                <span style={highlightStyle}>¿Sabés cuales son los problemas más frecuentes?</span>
                <br />
                <br />
                <span style={highlightStyle1}>MIOPÍA</span>
                
                La miopía implica mala visión a distancia debido a que los rayos de luz se enfocan delante de la retina, y se corrige con lentes divergentes en gafas o lentillas. El grado de miopía puede aumentar si la longitud ocular del ojo crece, y no se puede compensar sin corrección óptica.
                <br />
                <br />
                <span style={highlightStyle1}>HIPERMETROPÍA</span>
                
                La hipermetropía se debe a que los rayos de luz se cruzan detrás de la retina, y puede ser parcialmente compensada por el cristalino. No aumenta con el crecimiento y se corrige con lentes convergentes en gafas o lentillas.
                <br />
                <br />
                <span style={highlightStyle1}>ASTIGMATISMO</span>
                
                El astigmatismo se produce cuando las superficies dióptricas del ojo tienen diferentes curvaturas en sus ejes, causando una visión desenfocada en todas las distancias. No suele cambiar con el crecimiento, pero puede estar asociado con miopía o hipermetropía. En casos de progresión, se debe descartar enfermedades como el queratocono mediante exámenes específicos.
                <br />
                <br />
                <span style={highlightStyle}>¿Cómo cuidar tu salud visual?</span>
                <br />
                <br />
                - Revisar la vista anualmente.
                <br />
               
                - Proteger los ojos de los rayos UV con gafas de sol.
                <br />
                - Mantener una buena iluminación y distancia adecuada con los objetos observados.
                <br />
                - Evitar frotarse los ojos.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default saludvisualcomponente;
