import { SxProps } from '@mui/material'

export const modalStyle: SxProps = {
  position: 'absolute' as 'absolute',
  borderRadius: '12px',
  top: '0',
  left: '50%',
  display: 'grid',
  textAlign: 'center',
  transform: 'translate(-50%, 3%)',
  minWidth: 350,
  minHeight: 400,
  maxWidth: 800,
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  p: '3%',
  bgcolor: 'background.paper',
}

export const buttonStyle: SxProps = {
  position: 'fixed',
  bottom: 30,
  right: 30,
}
