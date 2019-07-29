import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { Todo, ActionType, IAction } from '../store/todo.store';

export const addTask = (data: Todo): IAction => {
    return { type: ActionType.CREATE, data }
}

export const completeTask = (data: Todo): IAction => {
    return { type: ActionType.COMPLETE, data }
}

export const promiseAddTask = (data: Todo): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>(resolve => {
            dispatch(addTask(data));
            setTimeout(() => {
                resolve()
            }, 3000)
        })
    }
}

export const promiseCompleteTask = (data: Todo): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>(resolve => {
            dispatch(completeTask(data));
            setTimeout(() => {
                resolve()
            }, 3000)
        })
    }
}