export const AddTask = ({taskList, setTaskList, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();

        if(task.id) {
            const updateTask = taskList.map((todo) => (
                todo.id === task.id ? {id:  task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ))

            setTaskList(updateTask)
            setTask({})
        }else {
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
    
            setTaskList([...taskList, newTask]);
            setTask({})
        }

    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ''} autoComplete="off" placeholder="add task" maxLength="25" onChange={e => setTask({...task, name: e.target.value})} />
                <button type="submit">{ task.id ? 'Update' : 'Add'}</button>
            </form>
        </section>
    )
}
