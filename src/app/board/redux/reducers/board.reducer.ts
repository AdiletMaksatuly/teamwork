import { createReducer, on } from '@ngrx/store';
import { IBoardState } from '../board.model';
import * as BoardActions from '../actions/board.actions';

export const initialState: IBoardState = {
  board: {
    _id: '',
    title: '',
    owner: '',
    users: [],
  },
  columns: [],
  tasks: [],
};

export const boardReducer = createReducer(
  initialState,
  on(BoardActions.fetchBoardSuccess, (state, { board }): IBoardState => ({
    ...state,
    board: board,
  })),
  on(BoardActions.fetchColumnsSuccess, (state, { columns }): IBoardState => ({
    ...state,
    columns,
  })),
  on(BoardActions.fetchTasksSuccess, (state, { tasks }): IBoardState => {
    return {
      ...state,
      tasks,
    };
  }),
  on(BoardActions.createColumnSuccess, (state, { createdColumn }): IBoardState => {
    return {
      ...state,
      columns: [...state.columns, createdColumn],
    };
  }),
  on(BoardActions.createTaskSuccess, (state, { createdTask }): IBoardState => {

    return {
      ...state,
      tasks: [...state.tasks, createdTask],
    };
  }),
  on(BoardActions.deleteColumnSuccess, (state, { columnId }): IBoardState => {
    const newColumns = [...state.columns].filter(column => column._id !== columnId);

    return {
      ...state,
      columns: newColumns,
    };
  }),
  on(BoardActions.deleteTaskSuccess, (state, { taskId }): IBoardState => {
    const newTasks = [...state.tasks].filter(task => task._id !== taskId);

    return {
      ...state,
      tasks: newTasks,
    };
  }),
  on(BoardActions.deleteTasksAfterColumnDelete, (state, { columnId }): IBoardState => {
    const newTasks = [...state.tasks].filter(task => task.columnId !== columnId);

    return {
      ...state,
      tasks: newTasks,
    };
  }),
  on(BoardActions.updateColumnTitleSuccess, (state, { updatedColumn }): IBoardState => {
    const newColumns = [...state.columns].map(column => {
      if (column._id === updatedColumn._id) {
        column = updatedColumn;
      }

      return column;
    });

    return {
      ...state,
      columns: newColumns,
    };
  }),
  on(BoardActions.updateTaskSuccess, (state, { updatedTask }): IBoardState => {
    const newTasks = [...state.tasks].map(task => {
      if (task._id === updatedTask._id) {
        task = updatedTask;
      }

      return task;
    });
    return {
      ...state,
      tasks: newTasks,
    };
  }),
);
