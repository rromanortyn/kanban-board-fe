import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import { useNavigate } from 'react-router'

const AddBoard = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <Dialog
        open={true}
        onClose={() => navigate('/')}
        sx={{
          '& .MuiDialog-paper': {
            width: '400px',
            p: 2,
          }
        }}>
        <TextField
          label='Board name'
          variant='outlined'
          sx={{
            mb: 2,
          }}
        />
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/')}
        >
          Create
        </Button>
      </Dialog>
    </Box>
  )
}

export default AddBoard
