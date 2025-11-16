import Box from '@mui/material/Box'

import Column from '../column/column'

interface BoardProps {
  columns: Array<{
    id: number,
    title: string,
    tasks: Array<{
      id: number,
      title: string,
      description: string,
      columnId: number
    }>,
    type: 'todo' | 'in-progress' | 'done',
  }>,
  onAddTask: (type: 'todo' | 'in-progress' | 'done') => void,
  onDeleteTask: (id: number) => void,
}

const Board = ({ columns, onAddTask, onDeleteTask }: BoardProps) => {
  return (
    <Box sx={{
      display: 'flex',
      gap: 2,
    }}>
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          tasks={column.tasks.map((task) => ({
            ...task,
            columnId: column.id,
          }))}
          type={column.type}
          onDrop={(id, columnId) => {
            console.log(id, columnId)
          }}
          onAddTask={(type) => {
            onAddTask(type)
          }}
        />
      ))}
    </Box>
  )
}

export default Board
