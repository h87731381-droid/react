
import './App.css';
import axios from 'axios'; //get/post등 실행 도구로 실행시 필요

function App() {

  //데이터 요청
  function get() {
    axios.get('http://localhost:3001/works')
      .then(res => {
        console.log(res.data);
      })
  }

  //데이터 삭제
  function del() {
    axios.delete('http://localhost:3001/works/8542')
      .then(res => {
        console.log(res.data);
      })
  }

  //데이터 추가
  function post() {
    axios.post('http://localhost:3001/works', { "name": "흰둥이" })
      .then(res => {
        console.log(res.data);
      })
  }

  //데이터 수정
  function put() {
    axios.put('http://localhost:3001/works/9ef0', { name: '신짱구' })
      .then(res => {
        console.log(res.data);
      })
  }





  return (
    <div className="App">
      <textarea defaultValue={`
        모듈설치( npm i json-server axios )
        
        CRUD 예제(읽고, 쓰고, 수정, 삭제)

        //데이터 요청
        function get() {
          axios.get('http://localhost:3001/works')
            .then(res => {
              console.log(res.data);
            })
        }

        //데이터 삭제
        function del() {
          axios.delete('http://localhost:3001/works/8542')
            .then(res => {
              console.log(res.data);
            })
        }
      
        //데이터 추가
        function post() {
          axios.post('http://localhost:3001/works', { "name": "흰둥이" })
            .then(res => {
              console.log(res.data);
            })
        }

        //데이터 수정
        function put() {
          axios.put('http://localhost:3001/works/9ef0', { name: '신짱구' })
            .then(res => {
              console.log(res.data);
            })
        }
  
        `} cols="100" rows="100">

      </textarea>
    </div>
  );
}

export default App;
