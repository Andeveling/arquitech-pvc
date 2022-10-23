import { Box, Button, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { addProject } from '@/redux'
import { useAppDispatch } from '@/hooks'

const validationSchema = yup.object({
  title: yup.string().required('Nombre requerido'),
})

const AddProjectForm = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema,
    onSubmit: (value, { resetForm }) => {
      dispatch(addProject(value))
      resetForm()
    },
  })
  return (
    <Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <Grid container gap={1}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='title'
            name='title'
            label='Nombre del proyecto'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item xs={12}>
          <Button disabled={!formik.isValid} type='submit' fullWidth variant='contained' sx={{ mt: 2 }}>
            añadir
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AddProjectForm
