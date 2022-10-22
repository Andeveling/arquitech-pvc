import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'

const Search = () => {
  return (
    <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mt: 2 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Buscar proyecto'
        inputProps={{ 'aria-label': 'Buscar proyecto' }}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search
