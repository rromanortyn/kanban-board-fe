import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Board from './pages/board/board'
import { theme } from './mui-theme/mui-theme'
import SearchBar from './components/search-bar/search-bar'
import Home from './pages/home/home'
import AddBoard from './pages/add-board/add-board'
import store from './redux/store'
import Task from './pages/task/task'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
    children: [
      {
        path: 'new-board',
        element: <AddBoard />
      },
    ],
	},
	{
		path: '/:id',
		element: <Board />,
    children: [
      {
        path: 'tasks/:id',
        element: <Task />
      },
    ],
	},
])

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DndProvider backend={HTML5Backend}>
          <SearchBar />

          <RouterProvider router={router} />
        </DndProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
