export const Task = (props) => {
    return (<div className="row"
        style={{ backgroundColor: props.completed ? "green" : "white" }}>

        <h1>{props.taskName}</h1>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <buttton onClick={() => props.deleteTask(props.id)} className="delete">X</buttton>
    </div>
    );
};