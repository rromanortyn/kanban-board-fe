import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import AddIcon from '@mui/icons-material/Add'

interface ColumnHeaderProps {
	title: string,
  count: number,
  type: 'todo' | 'in-progress' | 'done',
  onAddTask: (type: 'todo' | 'in-progress' | 'done') => void,
}

const ColumnHeader = ({ type, title, count, onAddTask }: ColumnHeaderProps) => {

  const countText = count === 1 ? `(${count} task)` : `(${count} tasks)`

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 2,
      backgroundColor: '#fffefe',
      borderRadius: 4,
    }}>
      <Box>
        <Typography variant='h4' lineHeight={1}>{title}</Typography>

        <Chip label={countText} size='small' sx={{
          ml: 2,
          borderRadius: 2,
          backgroundColor: 'primary.light',
          fontSize: 12,
        }} />
      </Box>

      <AddIcon
        sx={{
          cursor: 'pointer',
        }}
        onClick={() => onAddTask(type)}
      />
    </Box>
  )
}

export default ColumnHeader
