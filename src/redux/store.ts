import { configureStore } from '@reduxjs/toolkit'

import boardApi from './apis/board/board.api'
import taskApi from './apis/task/task.api'

const store = configureStore({
  reducer: {
    [boardApi.reducerPath]: boardApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      boardApi.middleware,
      taskApi.middleware,
    ),
})

export default store
