export interface Todo {
  id: string
  task: string
  description: string
  isComplete: boolean
  createdAt: number
  completedAt: number
}

export enum ActionType {
  CREATE = 'ADD_TASK',
  COMPLETE = 'COMPLETE_TASK',
}

export interface IAction {
  type: ActionType
  data: Todo
}

export const initialTodos: Todo[] = [];
