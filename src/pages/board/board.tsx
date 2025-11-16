import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import Board from '../../components/board/board'
import { useGetBoardByIdQuery } from '../../redux/apis/board/board.api'
import { useAddTaskMutation } from '../../redux/apis/task/task.api'
import columnTypes from '../../consts/column-types'

const BoardPage = () => {
	const { id = '' } = useParams()

	const [allTasks, setAllTasks] = useState({
		[columnTypes.todo]: [],
		[columnTypes['in-progress']]: [],
		[columnTypes.done]: [],
	})
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [columnType, setColumnType] = useState<'todo' | 'in-progress' | 'done' | null>(null)
	const { data: boardFromBe } = useGetBoardByIdQuery(id)
	const [addTask] = useAddTaskMutation({})

	useEffect(() => {
		setAllTasks({
			[columnTypes.todo]: boardFromBe?.todoTasks ?? [],
			[columnTypes['in-progress']]: boardFromBe?.inProgressTasks ?? [],
			[columnTypes.done]: boardFromBe?.doneTasks ?? [],
		})
	}, [boardFromBe])

	const todo = allTasks?.[columnTypes.todo] ?? []
	const inProgress = allTasks?.[columnTypes['in-progress']] ?? []
	const done = allTasks?.[columnTypes.done] ?? []
	const columns = [
		{
			id: 1,
			title: 'To do',
			tasks: todo,
			type: 'todo',
		},
		{
			id: 2,
			title: 'In progress',
			tasks: inProgress,
			type: 'in-progress',
		},
		{
			id: 3,
			title: 'Done',
			tasks: done,
			type: 'done',
		},
	]

	const onNewTaskSubmitted = async (task: { title: string, description: string, columnType: 'todo' | 'in-progress' | 'done' }) => {
		const { data: newTask} = await addTask({
			title: task.title,
			description: task.description,
			boardId: id,
			columnType: columnTypes[columnType!],
		})

		setTitle('')
		setDescription('')
		setColumnType(null)
		setIsDialogOpen(false)

		setAllTasks({
			...allTasks,
			[columnTypes[task.columnType]]: [...allTasks[columnTypes[task.columnType]], newTask],
		})
	}

	return ( 
		<>
    	<Board
				columns={columns}
				onAddTask={(type) => {
					setColumnType(type)
					setIsDialogOpen(true)
				}}
				onDeleteTask={(id) => {
					console.log(id)
				}}
			/>

			<Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} sx={{
        '& .MuiDialog-paper': {
          width: '400px',
          p: 2,
        }
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
          <TextField
            label='Task title'
            variant='outlined'
            sx={{
              mb: 2,
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            multiline
            label='Task description'
            variant='outlined'
            sx={{
              mb: 2,
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
						variant='contained'
						color='primary'
						onClick={() => {
							onNewTaskSubmitted({
								title,
								description,
								columnType: columnType!,
							})
							setIsDialogOpen(false)
						}}
					>
						Create
					</Button>
        </Box>
      </Dialog>
		</>
	)
}

export default BoardPage
