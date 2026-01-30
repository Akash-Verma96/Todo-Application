import React, { useEffect, useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
    const [todo,setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e)=>{
        e.preventDefault();

        if(!todo) return;

        addTodo({todo, completed:false})
        setTodo("")
    }
          

  return (
    <form onSubmit={add} class="flex rounded-lg shadow-xl shadow-orange-500/50 ...">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-orange-400 hover:bg-orange-600 text-white shrink-0 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
