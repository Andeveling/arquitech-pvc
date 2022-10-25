import Box from '@mui/material/Box'
import { PvcWindowsList } from '../PvcWindows'
import AddPvcWindows from '../PvcWindows/AddPvcWindows'

const ProjectDetails = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AddPvcWindows />
      <PvcWindowsList />
    </Box>
  )
}
export default ProjectDetails
