import Button from "../Button";

const Todos = (props)=>{

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <h1 className="font-bold">All Todos</h1>
                <table className="w-full">
                    <thead className="bg-white border-b">
                        <tr>
                            <th className="text-gray-900 px-6 py-4 text-left">Name</th>
                            <th className="text-gray-900 px-6 py-4 text-left">Todo</th>
                            <th className="text-gray-900 px-6 py-4 text-left">Action</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        { props.todos &&
                            props.todos.map(todo=>
                            <tr key={todo.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td className="text-gray-900 font-light px-6 py-4">{todo.name}</td>
                                <td className="text-gray-900 font-light px-6 py-4">{todo.todo}</td>
                                <td>
                                    <Button type="danger" text="Delete" buttonType="button" onClick={()=>props.delete(todo)}/>
                                    <Button type="primary" text="Update" buttonType="button" onClick={()=>props.update(todo)}/>
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Todos;