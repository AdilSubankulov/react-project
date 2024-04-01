import {Todo} from './Todo.tsx'


export function List() {
   return (
       <>
            <p>TODO LIST</p>
            <div style={{display: 'flex'}}>
                <button type="button" className="btn btn-success">Add Task</button>
                <select className="form-select" aria-label="Default select example">
                    <option selected>All</option>
                    <option value="Opened">Opened</option>
                    <option value="Completed">Completed</option>    
                </select>       
            </div>
            <Todo />
       </>
   )
}
