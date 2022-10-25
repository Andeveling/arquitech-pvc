import Container from '@mui/material/Container'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return <Container maxWidth='xl'>{children}</Container>
}
export default Layout
