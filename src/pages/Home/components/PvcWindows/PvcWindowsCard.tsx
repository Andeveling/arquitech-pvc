import { CardContent, CardHeader, CardMedia } from '@mui/material'
import Card from '@mui/material/Card'
import { WindowI } from '@/models/Window.model'
import DrawWindow from '../Window/DrawWindow'

const PvcWindowsCard = ({
  reference,
  location,
  width,
  height,
}: Pick<WindowI, 'reference' | 'location' | 'height' | 'width'>) => {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader title={reference} subheader={location} />
      <DrawWindow width={width} height={height} />
      <CardContent></CardContent>
    </Card>
  )
}
export default PvcWindowsCard
