import Classes from "../classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";
import TodoList from "./todo/todo-list"
import  TodoItem from "./todo/todo-item"

function Assignment6() {
    return (
        <div>
            <h1>Assignment 6</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
            <TodoItem/>
        </div>
    );
}


export default Assignment6;

