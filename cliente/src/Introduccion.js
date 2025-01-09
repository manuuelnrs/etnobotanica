// Introduccion.js
import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import './Introduccion.css'; // Si prefieres estilos adicionales en un archivo externo.

function Introduccion() {
  return (
    <div>
      <h4>Etnobotánica de las plantas de la Nueva España</h4>
      <p>
        Durante el siglo XVI, existió un interés especial por conocer y describir los recursos naturales de los territorios recién conquistados por la corona española. Estos intentos se pueden encontrar en diversas fuentes que van desde las crónicas religiosas o de conquistadores, hasta textos propiamente científicos que intentaban la clasificación sistemática del mundo natural o la teorización de sus efectos sobre el cuerpo humano con fines médicos.  El presente proyecto tiene por finalidad el presentar una base de datos y un catálogo de la flora útil de esa época. Se ha construido mediante la extracción de datos de tres fuentes que consideramos ser las más importantes con respecto al territorio de la Nueva España: el Códice Florentino, elaborado bajo la dirección del fraile franciscano Bernardino de Sahagún; las obras de Francisco Hernández, nombrado protomédico de Felipe II; y el Libellus de medicinalibus indorum herbis, mejor conocido como Códice de la Cruz-Badiano, que fuera realizado en el Imperial Colegio de Tlatelolco.
        </p>
        <p> 
	La base de datos se ha construido de manera que se puedan vincular, siempre que sea posible, las plantas descritas en las fuentes con plantas en la actualidad. Para ello ha sido necesario incluir tanto las distintas propuestas de determinación botánica que han realizado diversos estudiosos del tema, como una propuesta propia en los casos en los que las evidencias resultan más obvias. Por otra parte, dado el énfasis en los usos medicinales, se han consignado datos con respecto a las enfermedades que cura una plana, las partes de la planta utilizadas, los órganos o sistemas sobre los que actúa y el modo de preparación del medicamento. También, se han incluido datos con respecto a la ubicación espacial de las plantas: los topónimos asociados a ellas, su posible localización geográfica, y algunos datos con respecto a clima y características geográficas de los lugares donde crecen, según las fuentes.  Por último, se han incluido otros datos correspondientes a características organolépticas de las especies: sabor, olor, textura y cualidad. Esto último, de acuerdo a la manera de clasificar dichas propiedades por el pensamiento de la época.
   </p> 
   <p> 
	Sirva pues, el presente sitio, de contribución para todos aquellos estudiosos tanto de la historia de la medicina, los estudios etnobotánicos de carácter histórico, los estudios de carácter ambiental o simplemente para cualquier persona con interés en el conocimiento de la flora de lo que hoy es el centro y sur de México y de sus múltiples usos.
      </p>

      <p>
          <a href="./propuesta.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          <FaFilePdf size={20} style={{ marginRight: '8px' }} />
            Avances de investigación
          </a>
        </p>

      <hr /> {/* Línea horizontal para separar las secciones */}

      <h5>Créditos</h5>

      <div className="creditos-box p-4 mb-4 shadow-lg">
        <p>
          <strong>Proyecto y Dirección:</strong><br />
          El presente proyecto forma parte de las actividades del Dr. José Antonio Soto Luna durante su estancia
          postdoctoral en el Centro de Investigaciones y Estudios Superiores en Antropología Social - CDMX,
          bajo la dirección académica de la Dra. Mariana Favila Vázquez, y financiado por el Consejo Nacional de
          Humanidades, Ciencias y Tecnologías.
        </p>

        <p>
          <strong>Investigación y diseño de la base de datos: </strong> 
          <span className="nombre-toñito">
            José Antonio Soto Luna <a href="mailto:etnobotanica2015@gmail.com" className="correo">etnobotanica2015@gmail.com</a>
          </span>
        </p>

        <p>
          <strong>Desarrollo Sitio Web: </strong> 
          <span className="nombre-toñito">
          Juan Manuel Nava Rosales <a href="mailto:ucme_500@hotmail.com" className="correo">ucme_500@hotmail.com</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Introduccion;