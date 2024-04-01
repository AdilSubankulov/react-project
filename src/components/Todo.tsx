export function Todo() {
    return (
        <div style={{display: 'flex'}}>
            <input className="form-check-input" type="checkbox" value="" />
            <p>TODO LIST</p>
            <button type="button" className="btn btn-danger">Delete</button>
            <button type="button" className="btn btn-secondary">Edit</button>
        </div>
    )
 }
 