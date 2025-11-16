import Board from '../../components/board/board'

const tasks = [
	{
		id: 1,
		title: 'Fix styles on homepage',
		description: 'The second block of homepage is not styled for mobile devices. Update text sizes and paddings.',
	},
	{
		id: 2,
		title: 'Fix validation on login page',
		description: 'Fix validation on login page. Update text sizes and paddings.',
	},
  {
		id: 1,
		title: 'Fix styles on homepage',
		description: 'The second block of homepage is not styled for mobile devices. Update text sizes and paddings.',
	},
	{
		id: 2,
		title: 'Fix validation on login page',
		description: 'Fix validation on login page. Update text sizes and paddings.',
	},
  {
		id: 1,
		title: 'Fix styles on homepage',
		description: 'The second block of homepage is not styled for mobile devices. Update text sizes and paddings.',
	},
	{
		id: 2,
		title: 'Fix validation on login page',
		description: 'Fix validation on login page. Update text sizes and paddings.',
	},
  {
		id: 1,
		title: 'Fix styles on homepage',
		description: 'The second block of homepage is not styled for mobile devices. Update text sizes and paddings.',
	},
	{
		id: 2,
		title: 'Fix validation on login page',
		description: 'Fix validation on login page. Update text sizes and paddings.',
	},
  {
		id: 1,
		title: 'Fix styles on homepage',
		description: 'The second block of homepage is not styled for mobile devices. Update text sizes and paddings.',
	},
	{
		id: 2,
		title: 'Fix validation on login page',
		description: 'Fix jwhefwajehfj wejfqwhehfqwjehfjwahejfahsjdhf jashdfjahsdjh jahsdjgjahdjghasdjghajdhgjahdgjhajdghjahdgjha dvalidation on login page. Update text sizes and paddings.',
	},
]

const columns = [
	{
		id: 1,
		title: 'To do',
		tasks: tasks,
		type: 'todo',
	},
	{
		id: 2,
		title: 'In progress',
		tasks: tasks,
		type: 'in-progress',
	},
	{
		id: 3,
		title: 'Done',
		tasks: tasks,
		type: 'done',
	},
]

const Home = () => {
	return (  
    <Board columns={columns} />
	)
}

export default Home
