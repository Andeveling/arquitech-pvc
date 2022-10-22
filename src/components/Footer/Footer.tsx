import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Copyright } from '@/components'

const Footer = () => {
  return (
    <Box sx={{ borderTop: 1 }} component='footer'>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default Footer
