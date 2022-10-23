import { useAppDispatch } from '@/hooks'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { glasses, bella, discount, waste, herrajes, factory } from './dataBella'

const validationSchema = yup.object({
  width: yup.number().min(600, 'El ancho minimo es 600').max(2000, 'El alto debe ser').required('Ancho requerido'),
  height: yup.number().min(600, 'El alto minimo es 600').max(2000).required('Alto requerido'),
  cant: yup.number().min(1, 'Pedidos minimos').required('cantidad requerida'),
})

const AddPvcWindows = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      width: 0,
      height: 0,
      cant: 1,
      glass: glasses[0].price,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const costes = {
        marco: bella.marco.price * ((values.width / 1000 + values.height / 1000) * 2) * waste,
        hoja: bella.hoja.price * (values.width / 1000 + (values.height / 1000) * 2) * waste,
        divisor: bella.hoja.price * (values.height / 1000) * waste,
        traslapo: bella.traslapo.price * (values.height / 1000) * waste,
        junquillo: bella.junquillo.price * ((values.height / 1000) * 4 + (values.width / 1000) * 4) * waste,
        closing: bella.closing.price * (values.width / 1000 + (values.height / 1000) * 2) * waste,
        riel: bella.riel.price * (values.width / 1000) * waste,
        refuerzo: bella.refuerzo.price * ((values.height * 3) / 1000),
        cierre: herrajes.cierre.price,
        unero: herrajes.uñero.price,
        ruedas: herrajes.ruedas.price * 2,
        vidrios: {
          nave: values.glass * ((values.width / 1000 / 2 - 0.0867) * (values.height / 1000 - 0.1568)) * 1.1,
          fijo: values.glass * ((values.width / 1000 / 2 - 0.0587) * (values.height / 1000 - 0.067)) * 1.1,
        },
        fabricacion: factory * values.cant,
      }
      console.log(costes)
      console.log(
        `Total PVC: ${
          costes.marco +
          costes.hoja +
          costes.divisor +
          costes.traslapo +
          costes.junquillo +
          costes.closing +
          costes.riel
        }`,
      )
      console.log(`Total Refuerzos: ${costes.refuerzo}`)
      console.log(`Total Herrajes: ${costes.ruedas + costes.cierre + costes.unero}`)
      console.log(`Total Vidrio: ${costes.vidrios.nave + costes.vidrios.fijo}`)
      console.log(`Total Fabricacion: ${costes.fabricacion}`)
    },
  })

  return (
    <Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='width'
            name='width'
            label='Ancho Ventana'
            type='number'
            value={formik.values.width}
            onChange={formik.handleChange}
            error={formik.touched.width && Boolean(formik.errors.width)}
            helperText={formik.touched.width && formik.errors.width}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='height'
            name='height'
            label='Alto Ventana'
            type='number'
            value={formik.values.height}
            onChange={formik.handleChange}
            error={formik.touched.height && Boolean(formik.errors.height)}
            helperText={formik.touched.height && formik.errors.height}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='cant'
            name='cant'
            label='cant'
            type='number'
            value={formik.values.cant}
            onChange={formik.handleChange}
            error={formik.touched.cant && Boolean(formik.errors.cant)}
            helperText={formik.touched.cant && formik.errors.cant}
          />
        </Grid>

        <Grid item xs={12}>
          <InputLabel id='glass'>Vidrio</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='glass'
            name='glass'
            label='Vidrio'
            fullWidth
            value={formik.values.glass}
            onChange={formik.handleChange}
            error={formik.touched.glass && Boolean(formik.errors.glass)}>
            {glasses.map((glass) => (
              <MenuItem key={glass.id} value={glass.price}>
                {glass.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='flex-end'>
          <IconButton aria-label='add' size='large' type='submit'>
            <AddBoxIcon fontSize='large' />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
}
export default AddPvcWindows
