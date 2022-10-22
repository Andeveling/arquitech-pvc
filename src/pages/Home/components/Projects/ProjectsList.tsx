import Grid from '@mui/material/Grid'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
  return (
    <Grid container spacing={2} sx={{ my: 1 }}>
      <Grid item xs={12}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12}>
        <ProjectCard />
      </Grid>
    </Grid>
  )
}
export default ProjectsList
