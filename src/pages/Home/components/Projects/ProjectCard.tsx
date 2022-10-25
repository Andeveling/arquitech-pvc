import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { PublicRoutes } from '@/routes'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ id, title }: { id: string | number; title: string }) => {
  const navigate = useNavigate()
  return (
    <Card variant='elevation' sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography>{title}</Typography>
        </CardContent>
      </Box>
      <IconButton size='large' color='warning' onClick={() => navigate(`${PublicRoutes.PROJECT}/${id}`)}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>
  )
}

export default ProjectCard
