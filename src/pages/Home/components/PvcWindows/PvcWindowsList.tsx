import { Typography } from '@mui/material'
import { useState } from 'react'

const PvcWindowsList = () => {
  const [windows, setWindows] = useState([])

  let content
  if (!windows.length) content = <Typography>No hay ventanas, por favor crea una</Typography>
  return <div>{content}</div>
}
export default PvcWindowsList
