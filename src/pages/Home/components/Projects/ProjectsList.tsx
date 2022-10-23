import Grid from '@mui/material/Grid'
import ProjectCard from './ProjectCard'
import { useAppSelector } from '@/hooks'

const ProjectsList = () => {
  const { projects } = useAppSelector((state) => state.project)
  return (
    <Grid container spacing={2} sx={{ my: 1 }}>
      {projects?.map((project: any) => (
        <Grid item xs={12} key={project.title}>
          <ProjectCard title={project.title} />
        </Grid>
      ))}
    </Grid>
  )
}
export default ProjectsList
