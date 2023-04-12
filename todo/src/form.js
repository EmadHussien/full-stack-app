
import { useState ,useRef, useEffect} from 'react';

function Form({setValue , value}) {

  const [currTodo,setCurrTodo] = useState("");
  const idRef = useRef(0);
  const formRef = useRef("");

  useEffect(()=>{
    formRef.current.focus();
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    idRef.current = value.length + 1;


    // Make a POST request to the server
    fetch('http://localhost:4000/postRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:idRef.current , desc:currTodo})
    })
    .then(response => response.text())
    .then(message => console.log(message))
    .catch(error => console.error(error));

    setValue([...value , {id:idRef.current , desc:currTodo}]);
    setCurrTodo("");
    formRef.current.focus();

  }


  function handleChange (event) 
  {
    setCurrTodo(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className='up'>
      <label>
        Enter your message:
      </label>
      <textarea 
            value={currTodo} 
            onChange={handleChange} 
            ref={formRef}
        />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
