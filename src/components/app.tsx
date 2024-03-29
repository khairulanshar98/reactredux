import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index'
import TodoAdd from './todo.add'
import TodoList from './todo.list'
interface AppProps { compiler: string; framework: string; store: string; }

export const App: React.FC<AppProps> = (props) => {
    return (
        <Provider store={store}>
            <div className="container">
                <h1 className="title">Simple Task List with {props.compiler} and {props.framework} with {props.store}! <a className="btn btn-primary" target="_blank" href="https://github.com/khairulanshar98/reactredux">source</a></h1>
                <div className="col-sm-4">
                    <TodoAdd />
                </div>
                <div className="col-sm-8">
                    <TodoList />
                </div>
            </div>
        </Provider>
    )
}