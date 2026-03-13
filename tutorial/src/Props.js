import React from 'react'
import List from './List';
import Count from './Count';

function Props() {
    let data = [
        { id: 1, title: '아바타', photo: './imgs/logo192.png' },
        { id: 2, title: '슈퍼맨', photo: './imgs/logo192.png' },
        { id: 3, title: '해안선', photo: './imgs/logo192.png' }
    ];

    let count = [
        {id:1, value:10},
        {id:2, value:100}
    ];

    return (
        <div className='App'>
            <h2>Props</h2>
            <ul>
                {
                    data.map(function (item) {
                        return <List key={item.id} item={item} />
                    })
                }
            </ul>
            <div>
                {
                    count.map(function(con){
                        return <Count key={con.id} num={con}/>
                    })
                }
            </div>
        </div>
  )
}

export default Props