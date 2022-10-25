import { useAppSelector } from '@/hooks'
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import PvcWindowsCard from './PvcWindowsCard'

const PvcWindowsList = () => {
  const windows = useAppSelector((state) => state.project.projects[0].windows)
  let content
  if (!windows.length) content = <Typography>No hay ventanas, por favor crea una</Typography>
  else
    content = windows.map((win, i) => (
      <Grid key={i} xs={12} sm={5} md={3}>
        <PvcWindowsCard reference={win.reference} location={win.location} width={win.width} height={win.height} />
      </Grid>
    ))

  return (
    <Grid container gap={1} justifyContent='center' sx={{ mb: 6 }}>
      {content}
      {windows.length ? (
        <Grid xs={12}>
          <Button>Ir al resumen</Button>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  )
}
export default PvcWindowsList
