import SummaryWindowCard from './SummaryWindowCard'
import { useAppSelector } from '@/hooks'
import Box from '@mui/material/Box'

const SummaryMain = () => {
  const windows = useAppSelector((state) => state.project.projects[0].windows)
  let content = null
  if (windows.length)
    content = windows.map((window) => (
      <Box key={window.id}>
        <SummaryWindowCard {...window} />
      </Box>
    ))

  return <Box>{content ?? ''}</Box>
}
export default SummaryMain
