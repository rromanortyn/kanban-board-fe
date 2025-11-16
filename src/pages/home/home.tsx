import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Link, Outlet } from 'react-router'

import { useGetBoardsQuery } from '../../redux/apis/board/board.api'

const Home = () => {
	const [boards, setBoards] = useState([])

	const { data: boardsFromBe } = useGetBoardsQuery(null)

	useEffect(() => {
		console.log(boardsFromBe)
		setBoards(boardsFromBe)
	}, [boardsFromBe])

	return (
		<Box>
			<Link to='/new-board'>+</Link>
			{boards?.map((board) => (
				<Box key={board.id} sx={{
					padding: 2,
					borderRadius: 2,
					backgroundColor: '#fffefe',
				}}>
					<Link to={`/${board.id}`}>
						{board.title}
					</Link>
				</Box>
			))}
			<Outlet />
		</Box>
	)
}

export default Home