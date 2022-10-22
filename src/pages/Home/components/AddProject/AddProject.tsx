import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import AddProjectForm from './AddProjectForm'
import { modalStyle, buttonStyle } from './modalStyle'

const AddProject = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Box>
      <Fab color='warning' aria-label='add' sx={buttonStyle} onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        closeAfterTransition
        sx={{ overflow: 'scroll' }}
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Paper variant='outlined'>
          <Box sx={modalStyle}>
            <Grid display={'flex'} justifyContent={'end'} maxWidth={800} container>
              <Button variant='text' endIcon={<CloseIcon />} color='error' onClick={handleClose} size='medium'>
                close
              </Button>
            </Grid>
            <Grid>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Añadir Proyecto
              </Typography>

              <Grid>
                <AddProjectForm />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Modal>
    </Box>
  )
}
export default AddProject
