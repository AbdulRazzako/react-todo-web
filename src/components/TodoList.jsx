import React from "react"

function TodoList({todos, deleteTodo}){
    return(
        <ul className="list-disc list-inside"
        >
            {
            todos.length === 0? (
                <p className="text-gray-500 text-center">No task available</p>
            )
             :
            todos.map((todo,index)=>(
                <li key= {index}
                className="flex justify-between items-center mb-2 border-b border-grey-200 pb-2"
                >
                    <span>{todo}</span>                  
                     <button onClick={()=> deleteTodo(index)} className="bg-red-500 text-white p-1 rounded hover:bg-red-600 pr-2 pl-2">
                        Delete
                    </button>

                </li>
            ))

         } </ul>
    )
}

export default TodoList