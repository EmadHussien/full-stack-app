import React, { useEffect } from 'react';

function Table({setValue, value}) {


  useEffect(()=> {
    
    const url = "http://localhost:4000/getRequest";
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();

      
      setValue(jsonData);
    };
    fetchData();

  },[])

  console.log(value);
  const data = value;

  return (
    <>
    {
        
        data.length !== 0 ?  <table>
     
        <tbody>
          {data.map((row,i,data) => (
            <tr key={row.id}>
              {            
                  i + 1 === data.length ?  
                  <>
                      <td className='id' style={{borderBottom:"none"}}>{row.id}</td>
                      <td className='desc' style={{borderBottom:"none"}}>{row.desc}</td> 
                  </>
                  :
                  <>
                      <td className='id'>{row.id}</td>
                      <td className='desc'>{row.desc}</td>
                  </>
              }
            </tr>
          ))}
        </tbody>
      </table>

      :
      ""
    }
          </>

     );
}

export default Table;
