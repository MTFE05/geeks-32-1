import './App.css';
import Modal from "./compotents/modal/Modal";
import User from "./compotents/user/User";
import {useState} from "react";
import Input from "./compotents/input/Input";
import CountPage from "./compotents/CountPage/CountPage";

function App() {
  const [ show, setShow ] = useState(false)
  const [ input, setInput ] =useState('')
  console.log(input, 'input')
  const handleShow = () => setShow(!show)



  const onChangeInput = (event) => {
      setInput(event.target.value)
  }

  return (
   <div>
     <CountPage/>
     {/*<User name={'Timur'} age={18}/>*/}
       <h1>{input}</h1>
     <Input placeholder={'name'} type={'text'} onChangeInput={onChangeInput}/>
       {
           show && <Modal handleShow={handleShow}>
             <h1>Content</h1>
           </Modal>
       }
       <button onClick={handleShow}>открыть</button>
   </div>
  );
}

export default App;
