import React from 'react'

function List({item}) {

    function contrl(아무거나){
        alert(아무거나)
    }
  return (
    <li onClick={function(){contrl(item.id)}}>
        <img src={item.photo} alt=""/>
        <p>{item.title}</p>
    </li>
  )
}

export default List 