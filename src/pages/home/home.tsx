import Box from '@mui/material/Box'
import { Link, Outlet } from 'react-router'

const Home = () => {
	return (
		<Box>
			<Link to='/new-board'>+</Link>
			<Outlet />
		</Box>
	)
}

export default Home