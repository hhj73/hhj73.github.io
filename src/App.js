import { useState } from 'react';


function App(){
    const [toDo,setTodo] = useState("");
    const [toDos,setTodos] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === ""){
            return
        }
        setTodos((currentArray) =>[toDo, ...currentArray])
        setTodo("")
    } 
    const onChange = (e) => {
        setTodo(e.target.value)
    }

	return (
    <div>
        <h1 style={{
            color: "yellow",
            backgroundColor:"black",
            opacity: 0.5,
            textAlign: "center",
        
        }}>ToDoList</h1>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="입력하세요"  onChange={onChange} value={toDo}/>
            <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
            등록하기</button>
            
            
        </form>
        <ul>
        {toDos.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
    </div>
    )
}

export default App;