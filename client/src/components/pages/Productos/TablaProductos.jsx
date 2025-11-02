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
} from '@mui/material';

/* Icons */
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TableCell = styled(MuiTableCell)(() => ({
  textAlign: 'center',
}));

function TablaProductos({ editProducto, dataProductos, deleteProducto }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ mx: 'auto', mt: 10, maxWidth: 900 }}
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
              <TableRow key={row.id}>
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
                    <IconButton onClick={() => deleteProducto(row.id)}>
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
  );
}

export default TablaProductos;
