import React, {useEffect, useState, Component} from 'react';
import Messages from './Messages'

function Admin() {
    const [updateProductData, setUpdateProductData] = useState({});
    const [emptyArr, setEmptyArr] = useState(JSON.stringify(localStorage.getItem('Message')));
    const [showModal, toggleShowModal] = useState(false);


    const handleClick = () => {
        // setEmptyArr(JSON.stringify(localStorage.getItem('Message')));
        alert(emptyArr);
    }
  return (
    <div>
        <button onClick={handleClick}>Refresh</button>
      {/* <Messages 
        emptyArr={emptyArr} 
        setEmptyArr={setEmptyArr} 
        setUpdateProductData={setUpdateProductData} 
        toggleShowModal={toggleShowModal} 
      /> */}
    </div>
  )
}

export default Admin
