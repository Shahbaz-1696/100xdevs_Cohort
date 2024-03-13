import { useRecoilState, useRecoilValue } from "recoil"
import { descriptionAtom, filterAtom, filteredSelector, titleAtom, todoAtom } from "./store/atoms/todos"


function App() {
  

  return (
   <div>
    <Inputs />
    <AllTodos />
    <FilteredTodos />
   </div>
  )
}

function AllTodos(){
  const todos = useRecoilValue(todoAtom);
  return(
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h2>{todo.title}</h2>
          <h4>{todo.description}</h4>
        </div>
      ))}
    </div>
  )
}

function Inputs() {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  const [todos, setTodos] = useRecoilState(todoAtom);
  return(
    <div>
      <label htmlFor="title" style={{margin: 5, padding: 5}}>Title:</label>
      <input 
      id="title" 
      type="text" 
      placeholder="Title" 
      onChange={(e) => setTitle(e.target.value)} 
      style={{margin: 10, padding: 10}} />
      <br />
      <label htmlFor="descripiton" style={{margin: 5, padding: 5}}>Descripiton</label>
      <input 
      id="description" 
      type="text" 
      placeholder="Descrition" 
      onChange={(e) => setDescription(e.target.value)} 
      style={{margin: 10, padding: 10}} />
      <br />
      <button style={{margin: 10, padding: 10}} 
      onClick={() => {
        setTodos([...todos,
        {
          title,
          description,
        }
       ]);
      }}>Add Todo</button>
    </div>
  )
}

function FilteredTodos() {
  const [filter, setFilter] = useRecoilState(filterAtom);
  const filteredTodos = useRecoilValue(filteredSelector);

  return(
    <div style={{margin: 5, padding: 5}}>
      <label htmlFor="filter">Filter By: </label>
      <input 
      id="filter" 
      type="text" 
      placeholder="Filter By" 
      style={{margin: 10, padding: 10}} 
      onChange={(e) => setFilter(e.target.value)} />
      {filter && filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <div key={index}>
            <h2>{todo.title}</h2>
            <h4>{todo.description}</h4>
          </div>
        ))
      ) : null}
    </div>
  )
}

export default App
