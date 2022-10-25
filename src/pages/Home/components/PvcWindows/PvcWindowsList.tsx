import { useAppSelector } from '@/hooks'
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import PvcWindowsCard from './PvcWindowsCard'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useNavigate, useParams } from 'react-router-dom'
import { PublicRoutes } from '@/routes'

const PvcWindowsList = () => {
  const params = useParams()
  const navigate = useNavigate()
  const windows = useAppSelector((state) => state.project.projects[0].windows)
  let content
  if (!windows.length) content = <Typography>No hay ventanas, por favor crea una</Typography>
  else
    content = windows.map((win, i) => (
      <Grid key={i} xs={12} sm={6} md={4} width={360} maxWidth={360}>
        <PvcWindowsCard
          glass={win.glass}
          reference={win.reference}
          location={win.location}
          width={win.width}
          height={win.height}
        />
      </Grid>
    ))

  return (
    <Grid container gap={1} sx={{ mb: 6 }} justifyContent='center'>
      {content}
      {windows.length ? (
        <Grid xs={12} display='flex' justifyContent='flex-end' sx={{ mt: 3 }}>
          <Button
            size='large'
            endIcon={<NavigateNextIcon />}
            onClick={() => navigate(`${PublicRoutes.PROJECT_RENDER}/${params.id}`)}>
            Ir al resumen
          </Button>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  )
}
export default PvcWindowsList
