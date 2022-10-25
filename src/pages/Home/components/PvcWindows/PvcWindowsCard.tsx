import { WindowI } from '@/models/Window.model'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Collapse from '@mui/material/Collapse'
import Grid from '@mui/material/Grid'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import DrawWindow from '../Window/DrawWindow'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const PvcWindowsCard = ({
  reference,
  location,
  width,
  height,
  glass,
}: Pick<WindowI, 'reference' | 'location' | 'height' | 'width' | 'glass'>) => {
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader title={`${reference} - ${width} * ${height}`} subheader={location} />
      <DrawWindow width={width} height={height} />
      <CardActions>
        {expanded ? (
          <></>
        ) : (
          <Typography variant='h6' sx={{ ml: 4 }}>
            Más detalles
          </Typography>
        )}
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
          <ExpandMoreIcon fontSize='large' />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Grid container rowGap={2}>
            <Grid xs={12}>
              <Typography gutterBottom variant='h5'>
                Puerta Ventana Bella Sliding
              </Typography>
            </Grid>
            <Grid xs={6} textAlign='center'>
              <Typography>Ancho: {width}</Typography>
            </Grid>
            <Grid xs={6} textAlign='center'>
              <Typography>Alto: {height}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ fontWeight: 900, fontSize: 20 }}>Dimensiones</Divider>
            </Grid>

            <Grid xs={12} textAlign='center'>
              <Typography> {glass}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ fontWeight: 900, fontSize: 20 }}>Vidrio</Divider>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  )
}
export default PvcWindowsCard
