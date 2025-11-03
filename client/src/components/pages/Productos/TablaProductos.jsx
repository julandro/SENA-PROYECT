import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  Stack,
  IconButton,
  Box,
} from '@mui/material';

/* Icons */
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TableCell = styled(MuiTableCell)(() => ({
  textAlign: 'center',
}));

function TablaProductos({ editProducto, dataProductos, deleteProducto }) {
  return (
    <Box sx={{ mt: 5, pb: 5 }}>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 900, mx: 'auto' }}
        elevation={4}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataProductos.length ? (
              dataProductos.map((row) => (
                <TableRow key={row._id}>
                  {console.log(dataProductos)}
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.descripcion}</TableCell>
                  <TableCell>{row.tipo}</TableCell>
                  <TableCell>{row.precio}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                  <TableCell>
                    <Stack
                      direction="row"
                      display="flex"
                      justifyContent="center"
                      spacing={1}
                    >
                      <IconButton onClick={() => editProducto(row)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => deleteProducto(row._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  sx={{ textAlign: 'center', color: 'gray' }}
                >
                  No hay productos disponibles
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TablaProductos;
