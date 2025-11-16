import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useDrag } from 'react-dnd'
import { Link } from 'react-router'

interface ColumnListItemProps {
	task: {
    id: number,
    title: string,
    description: string,
    columnId: number,
  },
  onDrop: (id: number, columnId: number) => void,
}

const ColumnListItem = (props: ColumnListItemProps) => {
  const { task, onDrop } = props

  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number } | null>(null)

   const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'box',
    item: { id: task.id, columnId: task.columnId },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ id: number, columnId: number }>()
      if (item && dropResult) {
        onDrop(item.id, dropResult.columnId)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

	const handleClose = () => {
		setContextMenu(null)
	}

	return (
    <Link to={`/tasks/${task.id}`}>
      <Box
        sx={{
          padding: 2,
          borderRadius: 4,
          backgroundColor: '#fffefe',
          mb: 2,
          cursor: 'pointer',
          width: '100%',
        }}
        ref={dragRef}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h5' lineHeight={1.25} sx={{ mb: 2 }}>
            {task.title}
          </Typography>

          <Menu
            open={contextMenu !== null}
            onClose={handleClose}
            anchorReference='anchorPosition'
            anchorPosition={
              contextMenu !== null
                ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                : undefined
            }
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </Box>
        <Typography variant='body2' sx={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>{task.description}</Typography>
      </Box>
    </Link>
	)
}

export default ColumnListItem
