import { createAction, props } from '@ngrx/store';
import { IBoard } from '../../../main/models/board.model';
import { IColumn } from '../../models/column.model';
import { ITask } from '../../models/task.model';

export const boardPageOpened = createAction(
  '[Board] Page Opened',
  props<{ boardId: string }>(),
);

export const fetchBoard = createAction(
  '[Board] Fetch',
  props<{ boardId: string }>(),
);

export const fetchBoardSuccess = createAction(
  '[Board] Fetch Success',
  props<{ board: IBoard }>(),
);

export const fetchBoardFailed = createAction(
  '[Board] Fetch Failed',
);

export const createColumn = createAction(
  '[Board] Create Column',
  props<{ boardId: string, columnTitle: string }>(),
);

export const createColumnSuccess = createAction(
  '[Board] Create Column Success',
  props<{ boardId: string }>(),
);

export const createColumnFailed = createAction(
  '[Board] Create Column Failed',
);

export const fetchColumns = createAction(
  '[Board] Fetch Columns',
  props<{ boardId: string }>(),
);

export const fetchColumnsSuccess = createAction(
  '[Board] Fetch Columns Success',
  props<{ columns: IColumn[] }>(),
);

export const fetchColumnsFailed = createAction(
  '[Board] Fetch Columns Failed',
);

// export const fetchTasks = createAction(
//   '[Board] Fetch Tasks',
//   props<{ boardId: string, columnId: string }>(),
// );

export const fetchTasks = createAction(
  '[Board] Fetch Tasks',
  props<{ boardId: string, columnIds: string[] }>(),
);

// export const fetchTasksSuccess = createAction(
//   '[Board] Fetch Tasks Success',
//   props<{ columnId: string, tasks: ITask[] }>(),
// );
export const fetchTasksSuccess = createAction(
  '[Board] Fetch Tasks Success',
  props<{ tasks: ITask[] }>(),
);

export const fetchTasksFailed = createAction(
  '[Board] Fetch Tasks Failed',
);

export const deleteTask = createAction(
  '[Board] Delete Task',
  props<{ boardId: string, columnId: string, taskId: string }>(),
);

export const deleteTaskSuccess = createAction(
  '[Board] Delete Task Success',
  props<{ boardId: string, columnId: string }>(),
);

export const deleteTaskFailed = createAction(
  '[Board] Delete Task Failed',
);

export const createTask = createAction(
  '[Board] Create Task',
  props<{
    boardId: string,
    columnId: string,
    taskTitle: string,
    taskDescription: string,
    userId: string
  }>(),
);

export const createTaskSuccess = createAction(
  '[Board] Create Task Success',
  props<{
    boardId: string,
    columnId: string,
    taskTitle: string,
    taskDescription: string,
  }>(),
);

export const createTaskFailed = createAction(
  '[Board] Create Task Failed',
);