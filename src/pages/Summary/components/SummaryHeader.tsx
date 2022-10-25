import { Typography, SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'

const SummaryHeader = () => {
  return (
    <>
      <Grid container maxHeight={150} spacing={2} my={2}>
        <Grid item xs={6}>
          <img src='https://arqustik.com/wp-content/uploads/2021/10/Logo-en-PNG.png' width={160} alt='' />
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='flex-end'>
          <Box sx={styleOne}>
            <Typography variant='h6'>Cotización No 34431212</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ px: 4 }}>
        <Typography gutterBottom>
          De acuerdo a sus indicaciones, le presentamos la oferta de productos que solicitó; suministro e instalación de
          ventanas en PVC europeas en color blanco, con vidrio según especificación.
        </Typography>
        <Typography gutterBottom>
          Agradecemos la confianza depositada en nuestra compañia y le invitamos a leer el contenido de esta propuesta.
          Quedamos a su disposición para aclarar cualquier inquietud y a la espera de una propuesta positiva que nos
          convierta en su aliado en este proceso.
        </Typography>
      </Grid>
      <Divider />
    </>
  )
}
export default SummaryHeader

const styleOne: SxProps = {
  border: '2px gray solid',
  width: 300,
  height: '80%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
}
