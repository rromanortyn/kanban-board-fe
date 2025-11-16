import Box from '@mui/material/Box'
import { useDrop } from 'react-dnd'

import ColumnHeader from '../column-header/column-header'
import ColumnList from '../column-list/column-list'

interface ColumnProps {
	title: string,
	tasks: Array<{ id: number, title: string, description: string }>,	
  type: 'todo' | 'in-progress' | 'done',
  id: number,
  onDrop: (id: number, columnId: number) => void,
}

const Column = (props: ColumnProps) => {
const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: 'box',
    canDrop: (item, monitor) => item.columnId !== props.id,
    drop: () => ({ columnId: props.id, type: props.type }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

	return (
		<Box ref={dropRef} sx={{
      padding: 4,
      borderRadius: 4,
      backgroundColor: '#f7f7f7',
      width: '33%',
      maxWidth: '33%',
      overflowY: 'scroll',
      height: 'calc(100vh - 100px)',
      ...(isOver && canDrop && {
        backgroundColor: 'primary.light',
      }),
    }}>
      <Box sx={{
        mb: 2,
      }}>
        <ColumnHeader title={props.title} count={props.tasks.length} />
      </Box>
      <ColumnList tasks={props.tasks} onDrop={props.onDrop} />
    </Box>
	)
}

export default Column