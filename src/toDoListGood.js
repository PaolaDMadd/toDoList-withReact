import React, { useState } from 'react';

function ToDoList (){
  const [ textInput, updateValue ] = useState('');
  // const [ strike, updateStrike ] = useState(false);
  const [list,updateList] = useState([

    // removed items to start with a clear list { value: 'item 1', checked: true },
    // { value: 'item 2', checked: false },
    
]);

return (
  <div>
  <h3> Daily to Do List </h3>
  <p> Add an item or activity filling the form. </p>
  <p> When finished, you can either tick the done or remove box.</p>
  <form>
      <input type="text"  className='text-box' value={textInput} onChange={(event) => updateValue(event.target.value)} />
      <button onClick={(e) => {
        e.preventDefault()
        updateList([...list, { value: textInput, checked: false }])

        updateValue('')
      }
      }> add </button>
    </form>
  <ul>
  {list.map(
    (item, index) => (
      <li>
        <span className={item.checked && "lineThrough"}>{item.value}</span> 
        <input type="checkbox" className="box1" checked={item.checked} onClick={() => {updateList(list.map((currentItem, position) => {
          if(index === position) {
            return {value: currentItem.value, checked: !currentItem.checked }
          }
          return currentItem
        }))}}   />
      {/* NB the underscore is a convention used to "declare" an argument that won't be used */}
        {/* <input type="checkbox" className="box2" onClick={() => updateList(list.filter((_, i)=>index !== i))}/> */}

        <button className="box2" onClick={() => updateList(list.filter((_, i)=>index !== i))}>Remove</button>
      </li>)
  )}
</ul>
</div>
)
}
export default ToDoList

  {/* <li> <span className={strike && "lineThrough"}> Item 1</span> <input type="checkbox" className="box1" checked={strike} onClick={() => {updateStrike(!strike)}}   /> <input type="checkbox" className="box2"/> </li>
  <li>ITEM 2 <input type="checkbox" className="box1"/> <input type="checkbox" className="box2"/></li> */}
  
// test


