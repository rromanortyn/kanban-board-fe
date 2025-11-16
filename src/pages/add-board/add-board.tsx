import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import { useNavigate } from 'react-router'

import { useAddBoardMutation } from '../../redux/apis/board/board.api'

const AddBoard = () => {
  const navigate = useNavigate()
  const [addBoard] = useAddBoardMutation({})

  const [boardName, setBoardName] = useState('')
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
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          label='Board name'
          variant='outlined'
          sx={{
            mb: 2,
          }}
        />
        <Button
          variant='contained'
          color='primary'
          onClick={async () => {
            await addBoard({ name: boardName })
            navigate('/')
          }}
        >
          Create
        </Button>
      </Dialog>
    </Box>
  )
}

export default AddBoard
