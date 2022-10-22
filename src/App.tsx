import { theme } from '@/Theme'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Navbar, Footer } from '@/components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PublicRoutes } from '@/routes'
import { Home } from '@/pages/'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Container>
          <Navbar />
          <Routes>
            <Route path={PublicRoutes.HOME} element={<Home />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
