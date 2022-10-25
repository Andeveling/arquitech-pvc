import { useAppSelector } from '@/hooks'
import { currencyFormatter } from '@/utilities'
import { Divider, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const SummaryFooter = () => {
  const project = useAppSelector((state) => state.project.projects[0])
  return (
    <>
      <Divider />
      <Box sx={{ my: 4 }}>
        <Grid container>
          <Grid xs={6}></Grid>
          <Grid xs={6}>
            <Box display='flex' sx={{ justifyContent: 'space-between' }}>
              <Typography component='div'>Subtotal:</Typography>
              <Typography component='div'>{currencyFormatter(project.total)}</Typography>
            </Box>
            <Box display='flex' sx={{ justifyContent: 'space-between' }}>
              <Typography>IVA 19%:</Typography>
              <Typography> {currencyFormatter(project.total * 0.19)}</Typography>
            </Box>
            <Box display='flex' sx={{ justifyContent: 'space-between' }}>
              <Typography>Total:</Typography>
              <Typography>{currencyFormatter(project.total * 1.19)}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default SummaryFooter
