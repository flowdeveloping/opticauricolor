import React from "react";
import Card from "react-bootstrap/Card";
import portadaSaludVisual from "../assets/img/fotosaludvisual/portadasaludvisual.png";
import '../styles/SaludVisual.css'

const saludvisualcomponente = () => {

  return (
    <div className="promocionescomp-container">
      <h1 className="saludvisual-title custom-title">
        <span>Salud Visual</span>
      </h1>

      <div className="container">
        <div className="content">
          <Card className="card">
          <Card.Text className="textStyle">
              La salud visual es crucial para la calidad de vida, la seguridad y el bienestar emocional. Exámenes regulares de la vista y hábitos saludables son clave para mantener una visión óptima.
            </Card.Text>
            <Card.Img variant="top" src={portadaSaludVisual}/>
            <Card.Body>
            <Card.Text className="textStyle">
                <span className="preguntasColor">¿Sabés cuáles son los problemas más frecuentes?</span>
                <br />
                <br />
                <span>MIOPÍA</span>
                <br />
                La miopía implica mala visión a distancia debido a que los rayos de luz se enfocan delante de la retina, y se corrige con lentes divergentes en gafas o lentillas. El grado de miopía puede aumentar si la longitud ocular del ojo crece, y no se puede compensar sin corrección óptica.
                <br />
                <br />
                <span>HIPERMETROPÍA</span>
                <br />
                La hipermetropía se debe a que los rayos de luz se cruzan detrás de la retina, y puede ser parcialmente compensada por el cristalino. No aumenta con el crecimiento y se corrige con lentes convergentes en gafas o lentillas.
                <br />
                <br />
                <span>ASTIGMATISMO</span>
                <br />
                El astigmatismo se produce cuando las superficies dióptricas del ojo tienen diferentes curvaturas en sus ejes, causando una visión desenfocada en todas las distancias. No suele cambiar con el crecimiento, pero puede estar asociado con miopía o hipermetropía. En casos de progresión, se debe descartar enfermedades como el queratocono mediante exámenes específicos.
                <br />
                <br />
                <span className="preguntasColor">¿Cómo cuidar tu salud visual?</span>
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

