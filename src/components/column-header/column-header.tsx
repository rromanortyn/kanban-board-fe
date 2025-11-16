import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

interface ColumnHeaderProps {
	title: string,
  count: number,
}

const ColumnHeader = ({ title, count }: ColumnHeaderProps) => {

  const countText = count === 1 ? `(${count} task)` : `(${count} tasks)`

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      padding: 2,
      backgroundColor: '#fffefe',
      borderRadius: 4,
    }}>
      <Typography variant='h4' lineHeight={1}>{title}</Typography>

      <Chip label={countText} size='small' sx={{
        ml: 2,
        borderRadius: 2,
        backgroundColor: 'primary.light',
        fontSize: 12,
      }} />
    </Box>
  )
}

export default ColumnHeader
