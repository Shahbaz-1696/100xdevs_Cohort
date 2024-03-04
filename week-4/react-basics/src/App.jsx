
import "./App.css";

function App() {
 
  let globalId = 1;

  function markAsDone(todoId){
    const element = document.getElementById(todoId);
    element.innerHTML = "Done!";
  }
  
  function createChild(title, description, id){
    const outerDiv = document.createElement("div");
    const firstElement = document.createElement("div");
    firstElement.innerHTML = title;
    const secondElement = document.createElement("div");
    secondElement.innerHTML = description;
    const thirdElement = document.createElement("button");
    thirdElement.innerHTML = "Mark as Done!";
    thirdElement.setAttribute("onclick", `markAsDone(${id})`);
    outerDiv.appendChild(firstElement);
    outerDiv.appendChild(secondElement);
    outerDiv.appendChild(thirdElement);
    outerDiv.setAttribute("id", id);
    return outerDiv;
  }

  function addTodo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const parent = document.getElementById("container");
    parent.appendChild(createChild(title, description, globalId++));
  }

  return (
      <div>
        <input id='title' placeholder='Todo Title' type='text' /> <br />
        <input id='description' placeholder='Todo Descripiton' type='text' /> <br />
        <button id='addTodo' onClick={addTodo}>Add Todo</button>
        <div id='container'></div>
      </div>
      
  )
}

export default App
