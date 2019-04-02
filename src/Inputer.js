import React from 'react';


const Inputer = ({ changeTextFn, hideFn, addFn, titleFn, ...props }) => (
  <div disabled={props.off ? true : false} className="App">
    <input placeholder='Wpisz nazwę sprzetu' onChange={titleFn} />
    <input placeholder='Wklej numery seryjne' type="text" onChange={changeTextFn} value={props.text} />
    <button onClick={addFn}>Dodaj</button>
    <button onClick={hideFn}>Ukryj</button>
  </div>
)

export default Inputer;