import { useAppDispatch } from '@/hooks'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import { addWindow } from '@/redux'
import * as yup from 'yup'
import { bella, Protection, factoryMaterial, glasses, herrajes, waste, series, CIF, MOD } from './dataBella'

const validationSchema = yup.object({
  width: yup.number().min(600, 'El ancho minimo es 600').max(2200, 'El alto debe ser').required('Ancho requerido'),
  height: yup.number().min(600, 'El alto minimo es 600').max(2400).required('Alto requerido'),
  cant: yup.number().min(1, 'Pedidos minimos').required('cantidad requerida'),
})

const AddPvcWindowsForm = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      reference: '',
      location: '',
      series: series[0],
      width: 0,
      height: 0,
      cant: 1,
      glass: glasses[0].name,
      price: 0,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const vidrio = glasses.find((glass) => glass.name === values.glass)
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
          nave: vidrio
            ? vidrio.price * ((values.width / 1000 / 2 - 0.0867) * (values.height / 1000 - 0.1568)) * 1.1
            : 0,
          fijo: vidrio ? vidrio.price * ((values.width / 1000 / 2 - 0.0587) * (values.height / 1000 - 0.067)) * 1.1 : 0,
        },
        fabricacionMaterial: factoryMaterial * values.cant,
      }
      const TotalPVC =
        costes.marco + costes.hoja + costes.divisor + costes.traslapo + costes.junquillo + costes.closing + costes.riel
      console.log('PVC: ' + TotalPVC)
      const TotalRefuerzos = costes.refuerzo
      console.log(`Refuerzos: ${TotalRefuerzos}`)
      const Herrajes = costes.ruedas + costes.cierre + costes.unero
      console.log(`Herrajes: ${Herrajes}`)
      const Vidrio = costes.vidrios.nave + costes.vidrios.fijo
      console.log(`Vidrio: ${Vidrio}`)
      const FabricacionMaterial = costes.fabricacionMaterial
      console.log(`Fabricacion: ${FabricacionMaterial}`)
      const TotalMateriales = TotalPVC + TotalRefuerzos + Herrajes + Vidrio + FabricacionMaterial
      const MODLocal = (MOD + CIF) * bella.timeProduction
      const Protect = (values.width / 1000) * (values.height / 1000) * Protection
      console.log('Proteccion ' + Protect)
      console.log('Mano de obra y cifs ' + MODLocal)
      console.log({ ...values, price: TotalMateriales + MODLocal + Protect })
      dispatch(addWindow({ ...values, price: TotalMateriales + MODLocal + Protect }))
    },
  })

  return (
    <Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
          <Select
            labelId='demo-simple-select-label'
            id='glass'
            name='glass'
            label='Vidrio'
            fullWidth
            value={formik.values.series}
            onChange={formik.handleChange}
            error={formik.touched.series && Boolean(formik.errors.series)}>
            <MenuItem value={formik.values.series}>{series[0]}</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            id='reference'
            name='reference'
            label='Nombre/Referencia'
            type='text'
            placeholder='Ejem: V1, PV1'
            value={formik.values.reference}
            onChange={formik.handleChange}
            error={formik.touched.reference && Boolean(formik.errors.reference)}
            helperText={formik.touched.reference && formik.errors.reference}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            id='location'
            name='location'
            label='Ubicacion'
            type='text'
            placeholder='Ejem: Alcoba ppal'
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            fullWidth
            id='width'
            name='width'
            label='Ancho Ventana'
            type='number'
            InputProps={{ inputProps: { min: 0, max: 2200 } }}
            value={formik.values.width}
            onChange={formik.handleChange}
            error={formik.touched.width && Boolean(formik.errors.width)}
            helperText={formik.touched.width && formik.errors.width}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            fullWidth
            id='height'
            name='height'
            label='Alto Ventana'
            type='number'
            InputProps={{ inputProps: { min: 0, max: 2400 } }}
            value={formik.values.height}
            onChange={formik.handleChange}
            error={formik.touched.height && Boolean(formik.errors.height)}
            helperText={formik.touched.height && formik.errors.height}
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
              <MenuItem key={glass.id} value={glass.name}>
                {glass.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='flex-end'>
          <Button variant='outlined' aria-label='add' size='large' type='submit'>
            crear
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
export default AddPvcWindowsForm
