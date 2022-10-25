import { WindowI } from '@/models/Window.model'
import Box from '@mui/material/Box'
import styles from './DrawWindow.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CloseIcon from '@mui/icons-material/Close'

const DrawWindow = ({ width, height }: Pick<WindowI, 'width' | 'height'>) => {
  const widthRender = (width / 2200) * 100
  const heightRender = (height / 2200) * 100
  return (
    <Box className={styles.primary_container}>
      <Box className={styles.container}>
        <Box width={`${widthRender}%`} height={`${heightRender}%`}>
          <Box className={styles.container2}>
            <Box className={styles.window_sash}>
              <ArrowForwardIcon fontSize='large' />
            </Box>
            <Box className={styles.window_static}>
              <CloseIcon fontSize='large' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default DrawWindow
