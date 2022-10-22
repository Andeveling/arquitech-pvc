import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const ProjectCard = () => {
  return (
    <Card variant='elevation' sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            Almedros casa 14
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default ProjectCard
