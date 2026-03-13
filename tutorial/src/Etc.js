import React, { useState } from 'react'
let 변수명 = [
    { id: Date.now(), name: '나미리' }
]

function Etc() {
    let [data, setData] = useState(변수명);

    function saveFun(e) {
        e.preventDefault();
        let v = e.target.n.value;
        setData([...data, { id: Date.now(), name: v }]);
        // Date.now() 현재시간을 기준, 이유는 정렬 등 생각하면 그게 편해서.
        // console.log(data);
    }

    function deleteFun(d) {
        setData(
            data.filter((item) => item.id != d)
        );
        console.log(d);
    }

    let [imgData, setImgData] = useState([]);

    let g = {
        save: function (e) {
            e.preventDefault();
            setImgData([...imgData, e.target.img.value]);
        },
        del: function () {}
    };

    return (
        <div className='App'>
            <h2>Etc</h2>
            <div>
                <form onSubmit={(e) => saveFun(e)}>
                    <input type='text' name='n' />
                    <button>저장</button>
                </form>

                <ul>
                    {
                        data.map(function (t) {
                            return <li key={t.id}>
                                <span>{t.name}</span>
                                <button onClick={() => { deleteFun(t.id) }}>삭제</button>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div>
                <form onSubmit={(e) => g.save(e)}>
                    <input type='text' name='img' />
                    <button>저장</button>
                </form>
            </div>

            <ul>
                {
                    imgData.map((주소,j) => <li><Image key={j} url={주소} /></li>)
                }
            </ul>
        </div>
    )
}


// 이미지 주소 컴포넌트 만들기
function Image({ url }) {
    let [like, setLike] = useState(0);

    return (
        <>
            <img src={url} width="100" />
            <button onClick={() => setLike(like + 1)}>
                {like}
            </button>
        </>
    )
}

export default Etc
