import './App.css';
import Component from "./components/component/Component";
import Component2 from "./components/component2/Component2";
import Button from "./components/button/Button";
import Example from "./components/Example";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import User from "./components/user/User";


function App() {

const navbar = ['Главная', 'О нас', 'Контакты']


  return (
    <div>
      <Header navbar={navbar}/>
      <h1>Hello</h1>
      <User name={'Timur'} age={18}/>
      <Component text={'Timur'}/>
      <Component2 age={18}/>
      <Button text={'Delete'}/>
      <Button text={'add'}/>
      <Button text={'update'}/>
      <Example>
        <p style={{
            color:"green",
            fontSize: "20px"

        }}>
            Timur
        </p>

      </Example>
      <Footer link={'online.geeks'}/>
    </div>
  );
}

export default App;
