import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilePdf } from 'react-icons/fa';
import API_URL from './config';

function PlantDetail() {
  const { id_planta } = useParams();
  const [plantDetail, setPlantDetail] = useState(null);
  const [loading, setLoading] = useState(true);  // Estado de carga
  const [error, setError] = useState(null);      // Estado de error

  useEffect(() => {
    const fetchPlantDetail = async () => {
      try {
        const response = await fetch(`${API_URL}/plantas/${id_planta}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        
        if (data) {
          setPlantDetail(data);
        } else {
          setError("No se encontraron datos");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlantDetail();
  }, [id_planta]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!plantDetail) {
    return <div>Sin información disponible</div>;
  }

  const { imagen_url, metadatos, nombres, determinadores, toponimos, padecimientos, referencias } = plantDetail;

  return (
    <Container>
      <Card className="mb-4">
        <Card.Img 
          variant="top" 
          src={imagen_url ? `${API_URL}/plantas/${imagen_url}` : `${API_URL}/plantas/default.jpg`} 
          alt="[Imagen no disponible]"
          style={{ height: '30vh', objectFit: 'contain', width: '100%' }}
        />
        <Card.Body>
          <Card.Title>{nombres}</Card.Title>
          <Card.Text>Topónimos: {toponimos || 'No disponible'}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><strong>Determinadores:</strong> {determinadores || 'No disponible'}</ListGroup.Item>
          <ListGroup.Item><strong>Padecimientos tratados:</strong> {padecimientos || 'No disponible'}</ListGroup.Item>
          <ListGroup.Item><strong>Referencias:</strong> {referencias || 'No disponible'}</ListGroup.Item>
          {metadatos ? (
            <ListGroup.Item>
              <a
                href={`${API_URL}/metadatos/${encodeURIComponent(metadatos)}`} download className="download-link"
                  target="_blank" rel="noopener noreferrer">
                  <FaFilePdf size={20} style={{ marginRight: '8px' }} />
                    Descargar metadatos
              </a>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item>
              <em>No hay metadatos disponibles</em>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </Container>
  );
}

export default PlantDetail;
