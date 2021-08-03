
import './App.css';
import { store } from "./store/store.js";
import {  addTodo,statusTodo,updateTodo } from "./store/action.js";
import React,{ useState } from 'react';


function App() {

  const [v, setValue] = useState(0);
  var countVal = store.getState();
  const [inp, setInp] = useState("");
  const [update, setUpdate] = useState("");


  
  return (
    <div className="App">
      <div className="todo">
        <label htmlFor="title">Title</label>
        <input type="text" onChange={(e) => {
          setInp(e.target.value);
        }
        } placeholder="Enter title " value={ inp}/>
        <button onClick={() =>
        {
          store.dispatch(addTodo(inp));
          setValue((p) => p + 1);
          setInp("");

        }}>ADD TODO</button>
      </div>
      <div>
        {
          countVal.map((e, i) => {
            
            return (<><div><p key={i}><b>Title : </b>{e.payload} Status:{String(e.status)}</p>
              <textarea style={{ display: 'block', width: '70%', margin: 'auto' }} onChange={(e) => { setUpdate(e.target.value) }} rows="4" cols="50">
                {e.payload}
</textarea>
              <button onClick={() => {
                store.dispatch(updateTodo({ id:i, payload:update}));
                setValue((p) => p + 1);
              }}>Edit</button><button onClick={() => {
              store.dispatch(statusTodo(i));
              setValue((p) => p + 1);
            }}>Status</button>
            </div>
            </>
            );
          })
        }
      </div>
     
      
    </div>
  );
}

export default App;
