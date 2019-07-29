import { Todo, initialTodos, ActionType, IAction } from '../store/todo.store';
export const todosReducer = (state: Todo[] = initialTodos, action: IAction): Todo[] => {
    const todos: Todo[] = [...state];
    switch (action.type) {
        case ActionType.CREATE:
            todos.push(action.data);
            return todos;
        case ActionType.COMPLETE:
            const index = todos.findIndex(todo => todo.id === action.data.id);
            todos[index].isComplete = true;
            todos[index].completedAt = new Date().getTime();
            return todos;
        default:
            return state
    }
}