import { useParams } from 'react-router'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router'
import Chip from '@mui/material/Chip'

import { useDeleteTaskMutation, useGetTaskByIdQuery } from '../../redux/apis/task/task.api'
import reversedColumnTypes from '../../consts/reversed-column-types'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const Task = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: task } = useGetTaskByIdQuery(id)
  const [deleteTask] = useDeleteTaskMutation()

	return (
    <Dialog open={true} onClose={() => navigate(-1)}>
      <Box sx={{ p: 2 }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 2,
          alignItems: 'center',
        }}>
          <Typography variant='h4'>Task {id}</Typography>

          <Box sx={{
            display: 'flex',
            gap: 4,
          }}>
            <EditIcon sx={{ cursor: 'pointer' }} />
            <DeleteIcon
              sx={{ color: 'error.main', cursor: 'pointer' }}
              onClick={async () => {
                await deleteTask(id)
                navigate(-1)
              }}
            />
          </Box>
        </Box>

        <Box sx={{
          width: '80%',
          wordWrap: 'break-word',
        }}>
          <Typography variant='body1'>{task?.title}</Typography>
          <Typography variant='body1' sx={{
            display: 'block',
            mb: 2,
          }}>{task?.description}</Typography>
        </Box>
        <Chip
          label={reversedColumnTypes[task?.columnType as keyof typeof reversedColumnTypes]}
          color='primary'
        />
      </Box>
    </Dialog>
	)
}

export default Task
