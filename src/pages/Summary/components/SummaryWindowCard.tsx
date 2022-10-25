import { WindowI } from '@/models/Window.model'
import DrawWindow from '@/pages/Home/components/Window/DrawWindow'
import { currencyFormatter } from '@/utilities'
import { Table, TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TableRow from '@mui/material/TableRow'

const SummaryWindowCard = (window: Partial<WindowI>) => {
  return (
    <Container sx={{ my: 10 }}>
      <Grid container>
        <Grid xs={12} sm={4}>
          <DrawWindow width={window.width as number} height={window.height as number} />
        </Grid>
        <Grid xs={12} sm={8}>
          <Grid>
            <Typography component='div' variant='h6'>
              {window.reference}
            </Typography>
            <Typography component='div' variant='subtitle1'>
              Ubicación: {window.location}
            </Typography>
            <Typography component='div' variant='subtitle1'>
              Sistema: {window.series}
            </Typography>
            <Typography component='div' variant='subtitle1'>
              Color: Blanco
            </Typography>
            <Typography component='div' variant='subtitle1'>
              Vidrio: {window.glass}
            </Typography>
          </Grid>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Ancho</TableCell>
                  <TableCell align='center'>Alto</TableCell>
                  <TableCell align='center'>Precio Und</TableCell>
                  <TableCell align='center'>Cantidad</TableCell>
                  <TableCell align='center'>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell align='center'>{window.width} mm</TableCell>
                <TableCell align='center'>{window.height} mm</TableCell>
                <TableCell align='right'>{currencyFormatter(window.price ?? 0)}</TableCell>
                <TableCell align='center'>{window.cant}</TableCell>
                <TableCell align='right'>
                  {window.cant && window.price ? currencyFormatter(window.cant * window.price) : 0}
                </TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  )
}
export default SummaryWindowCard
