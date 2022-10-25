import { Box, Button, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { addProject } from '@/redux'
import { useAppDispatch } from '@/hooks'

const validationSchema = yup.object({
  title: yup.string().required('Nombre requerido'),
  address: yup.string().required('La direccion es requerida'),
  client: yup.string().required('El nombre del cliente es requerido'),
})

const AddProjectForm = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      id: 1,
      title: '',
      address: '',
      client: '',
      email: '',
      cellphone: '',
      windows: [],
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
          <TextField
            fullWidth
            id='address'
            name='address'
            label='Direccion'
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='client'
            name='client'
            label='Nombre del cliente'
            value={formik.values.client}
            onChange={formik.handleChange}
            error={formik.touched.client && Boolean(formik.errors.client)}
            helperText={formik.touched.client && formik.errors.client}
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
