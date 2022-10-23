import { theme } from '@/Theme'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Navbar, Footer } from '@/components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PublicRoutes } from '@/routes'
import { Home } from '@/pages/'
import { store } from '@/redux'
import { Provider } from 'react-redux'
import ProjectDetails from './pages/Home/components/Projects/ProjectDetails'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <Container>
            <Navbar />
            <Routes>
              <Route path={PublicRoutes.HOME} element={<Home />} />
              <Route path={PublicRoutes.PROJECT + '/:name'} element={<ProjectDetails />} />
              <Route path='*' element={<h1>404</h1>} />
            </Routes>
            <Footer />
          </Container>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
