import React, {useState} from 'react'

function TodoForm({addTodo}) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();    
        if(inputValue.trim() !== ""){
            addTodo(inputValue.trim());
            setInputValue("");
        }     
    }

    return (
        <form onSubmit={handleSubmit} className='mb-4'>
            <input type="text"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            placeholder='Enter a new task'
            className="w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" className='mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 tansition'>
                Add Task
            </button>
    
        </form>
        
    );
}

export default TodoForm