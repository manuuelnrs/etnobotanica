import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import API_URL from './config';

export default function BaseDeDatos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const columns = [
    { field: 'id_planta', headerName: 'ID Planta', width: 100, filterable: true },
    { field: 'nombres', headerName: 'Nombres', width: 250, filterable: true },
    { field: 'toponimos', headerName: 'Toponimos', width: 250, filterable: true },
    { field: 'padecimientos', headerName: 'Padecimientos', width: 250, filterable: true },
    { field: 'cualidades', headerName: 'Cualidades', width: 250, filterable: true },
    { field: 'habitats', headerName: 'Habitats', width: 350, filterable: true },
    { field: 'olores', headerName: 'Olores', width: 250, filterable: true },
    { field: 'organos_o_sistemas', headerName: 'Cura organos', width: 250, filterable: true },
    { field: 'preparaciones_y_efectos', headerName: 'Preparaciones', width: 350, filterable: true },
    { field: 'partes_utilizadas', headerName: 'Partes utilizadas', width: 350, filterable: true },
    { field: 'usos', headerName: 'Usos', width: 250, filterable: true },
    { field: 'sabores', headerName: 'Sabores', width: 250, filterable: true },
    { field: 'texturas', headerName: 'Texturas', width: 250, filterable: true },
    { field: 'textos', headerName: 'Textos', width: 800, filterable: true },
    { field: 'determinadores', headerName: 'Determinadores', width: 800, filterable: true },
    // Agrega más columnas según tu vista <here>
  ];

  useEffect(() => {
    // Llamada al backend para obtener los datos
    axios
      .get(`${API_URL}/base-de-datos`) // Ajusta la URL según la configuración de tu backend
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ height: '70vh', width:'100%'}}>
      <DataGrid
        rows={data}
        columns={columns}
        loading={loading}
        getRowId={(row) => `${row.id_planta}_${row.nombre}`}
        //disableColumnFilter //disableColumnSelector //disableDensitySelector
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
                debounceMs: 250, // Retraso en milisegundos para el filtro rápido
              },
          },
        }}
        />
    </Box>
  );
}
