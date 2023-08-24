import 'bootstrap.min.css';
import 'styles.css';

const App = ({ name }) => {
  return (

<div className="container">
<div>
    <h1>{name}</h1>
</div>
<div>
<label>Password length</label>
<input type="number" id="password-length" name="password-length" max="26" min="8" />
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div>
<label>Add Lowercase Letters</label>
<input type="checkbox" id="lowercase-letters" name="lowercase-letters" />
</div>
<div>
<label>Include Numbers</label>
<input type="checkbox" id="include-numbers" name="include-numbers" />
</div>
<div>
<label>Include Symbols</label>
<input type="checkbox" id="include-symbols" name="include-symbols" />
</div>
<div>
<button>Generate Password</button>
</div>
         

 </div>
  );
};

ReactDOM.render(
  <App name="Password Generator " />,
  document.getElementById("root")
);
