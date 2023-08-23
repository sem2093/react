const App = ({ name }) => {
  return (

    <div>
<h1>{name}</h1>
<form>
<label className="todo-label"> New name for</label>
    <input type="text">
    <button type="button">Cancel<span className="visually-hidden">renaming {props.name}</span></button> <button type="submit">
          Save <span className="visually-hidden">new name for </span>
        </button>
</form>

<input type="checkbox">
  <label className="todo-label">
   </label>
  <button type="button">
            Edit <span className="visually-hidden"></span>
          </button>
   <button
            type="button">
            Delete <span className="visually-hidden"></span>
          </button>
  
  







    </div>
    );
};

ReactDOM.render(
  <App name="To Do List" />,
  document.getElementById("root")
);
