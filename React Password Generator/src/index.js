const App = ({ name }) => {
  return (

<div classname="container">
<div>
    <h1>{name}</h1>
</div>
<div>
<label>Password length</label>
<input type="number" id="password-length" name="password-length" max="26" min="8" />
</div>
<div>
<label for="uppercase-letters">Add Uppercase Letters</label>
<input type="checkbox" id="uppercase-letters" name="uppercase-letters" />
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
