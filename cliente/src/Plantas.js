import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API_URL from './config';

const Plantas = () => {
  const [plantas, setPlantas] = useState([]);

  // Obtener las plantas del backend
  useEffect(() => {
    fetch(`${API_URL}/plantas`)
      .then((response) => response.json())
      .then((data) => setPlantas(data))
      .catch((error) => console.error('Error al obtener plantas:', error));
  }, []);

  return (
    <Container className="mt-4">
      <div className="row">
        {plantas.map((planta) => (
          <div className="col-md-3" key={planta.id_planta}>
            <Card>
              <Card.Img 
                variant="top" 
                src={planta.imagen_url ? `${API_URL}/plantas/${planta.imagen_url}` : `${API_URL}/plantas/default.jpg`} 
                alt={planta.planta}
                style={{ height: '30vh', objectFit: 'cover', width: '100%' }}
              />
              <Card.Body>
                <Card.Title>{planta.planta}</Card.Title>
                <Card.Text>{planta.nombres}</Card.Text>
                <Link to={`/planta/${planta.id_planta}`}>
                  <Button variant="primary">Ver más</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Plantas;
