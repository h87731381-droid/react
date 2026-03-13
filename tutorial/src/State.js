import React, { useState } from 'react'
import Name from './Name';

function State() {
    let [num, 바뀌는것] = useState(10);
    let [data, 바뀌는data] = useState([  ]); // [ '이현주', '이현주' ]

    function number() {
        바뀌는것(num + 1);
    }
    function nameList(e){
        e.preventDefault();
        let value = e.target.name.value;
        바뀌는data([...data, value]);
    }
    console.log(data);
    return (
        <div className="App">
            <h2>State</h2>
            <button onClick={number}> {num} </button>
            
            <article>
                <h3>502호 강의실 수강생</h3>
                <div>
                    <form onSubmit={ (a) => {nameList(a)} }>
                        <input type="text" name='name' />
                    
                        <button>추가</button>
                    </form>
                </div>
                <ul>
                    {
                        data.map(function(io,i){
                            console.log(io);
                            
                            return <Name key={i} namename={io}/>
                        })
                    }
                </ul>
            </article>
        </div>
    )
}

export default State