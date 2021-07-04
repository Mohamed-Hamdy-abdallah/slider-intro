import React, { useState, useEffect } from 'react';
import data from './data';
import People from './People';
function App() {
  const [people,setPeople]=useState(data);
  const [index,setIndex]=React.useState(0);

  const clickright=()=>{
    setIndex(index +1)
  }
  const clickleft=()=>{
    setIndex(index - 1)
  }

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  

  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
     <People people={people} index={index}  clickright={clickright} clickleft={clickleft}/>
     
    </section>
  )
}

export default App;