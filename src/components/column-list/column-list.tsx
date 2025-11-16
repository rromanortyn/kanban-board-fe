import Box from '@mui/material/Box'
import ColumnListItem from '../column-list-item/column-list-item'

const ColumnList = (props: { tasks: Array<{ id: number, title: string, description: string, columnId: number }>, onDrop: (id: number, columnId: number) => void }) => {
	const listContentJsx = props.tasks.map((task) => (
    <ColumnListItem key={task.id} task={task} onDrop={props.onDrop} />
  ))

	return (
		<Box>
      {listContentJsx}
    </Box>
  )
}

export default ColumnList