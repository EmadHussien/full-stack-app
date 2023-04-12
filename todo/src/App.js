import Form from "./form";
import Table from "./lists";
import { useState } from 'react';

function App() {
  const [value, setValue] = useState([]);

  return (
    <div className="App">
      <div className="first">
        <Form setValue = {setValue} value = {value} />
      </div>
      <div className="second">
        <Table setValue = {setValue} value = {value} />
      </div>
    </div>
  );
}

export default App;
