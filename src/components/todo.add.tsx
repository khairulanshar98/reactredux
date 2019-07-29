import * as React from "react";
import { Form } from 'react-bootstrap';
import { Todo } from "../store/todo.store";
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import * as todoAction from '../action/todo'
const uuidv4 = require('uuid/v4');
interface OwnProps {
}
interface DispatchProps {
    promiseAddTask: (task: Todo) => void
}
interface StateProps {
    todos: Todo[]
}
type Props = StateProps & OwnProps & DispatchProps
const TodoAdd: React.FC<Props> = (props) => {
    const [task, setTask] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');

    return (
        <div style={{ marginBottom: "40px" }}>
            <Form>
                <Form.Group controlId="NewTask">
                    <Form.Label>New Task</Form.Label>
                    <input
                        type='text'
                        value={task}
                        placeholder="Name"
                        onChange={e => setTask(e.target.value)}
                        required
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group controlId="NewTask">
                    <Form.Label>Description</Form.Label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="form-control"
                        placeholder="Description"
                        rows={3}
                    />
                </Form.Group>
            </Form>
            <button className="btn btn-primary"
                onClick={e => {
                    const newTask: Todo = { task: task, isComplete: false, id: uuidv4(), description: description, createdAt: new Date().getTime(), completedAt: 0 }
                    //dispatch({ type: ActionType.CREATE, data: newTask });
                    props.promiseAddTask(newTask);
                    setTask('');
                    setDescription('');
                }}>Add</button>
        </div >
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        promiseAddTask: async (newTask: Todo) => {
            await dispatch(todoAction.promiseAddTask(newTask))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd)



