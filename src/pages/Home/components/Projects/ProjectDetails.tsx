import Box from '@mui/material/Box'

import { PvcWindowsList } from '../PvcWindows'

import AddPvcWindows from '../PvcWindows/AddPvcWindows'

const ProjectDetails = () => {
  return (
    <Box>
      <AddPvcWindows />
      <PvcWindowsList />
    </Box>
  )
}
export default ProjectDetails
