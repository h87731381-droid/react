import React from 'react'

function List({ d }) {
    return (
        <div>
            {
                d.map(function (item) {
                    return <figure key={item.id}>
                        <a href={item.url} target="_blank"> {/* target:어디서? _blank:새창 */}
                            <p>image</p>
                            <figcaption>{item.title}</figcaption>
                        </a>
                    </figure>
                })
            }

        </div>
    )
}

export default List