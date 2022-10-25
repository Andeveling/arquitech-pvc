import AddBoxIcon from '@mui/icons-material/AddBox'
import CloseIcon from '@mui/icons-material/Close'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import AddWindowsForm from './AddPvcWindowsForm'
import { modalStyle } from './modalStyle'

const AddProject = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} display='flex' justifyContent='end'>
          <Button sx={{ my: 2 }} size='large' onClick={handleOpen} startIcon={<AddBoxIcon fontSize='large' />}>
            crear ventana
          </Button>
        </Grid>
      </Grid>
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
                Añadir Ventana
              </Typography>

              <Grid>
                <AddWindowsForm />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Modal>
    </Box>
  )
}
export default AddProject
