import { Container } from '@mui/material'
import { AddProject } from './components/Projects/AddProject'
import { ProjectsList } from './components/Projects'
import { Search } from './components/Search'

const Home = () => {
  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Search />
      <ProjectsList />
      <AddProject />
    </Container>
  )
}
export default Home
