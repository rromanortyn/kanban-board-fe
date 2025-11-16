import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button'

const SearchBar = () => {
	return (
		<Box sx={{
      mt: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      m: 2,
    }}>
      <Box
        component='form'
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '60%',
          borderRadius: 4,
          p: 1,
          backgroundColor: '#f7f7f7',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Enter board id'
        />
      </Box>
      <Button variant='contained'>Open</Button>
    </Box>
	)
}

export default SearchBar
