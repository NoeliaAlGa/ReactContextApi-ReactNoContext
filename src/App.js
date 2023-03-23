import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import "./index.css"

function App() {
  return (
    <div>
     <h1>React Context API</h1>
     <a href="https://es.reactjs.org/docs/context.html"
     target="_blank"
     rel="noreferrer">Documentación</a>
     <hr />
     <MyPage />
     <hr />
     <MyPageContext />
    </div>
  );
}

export default App;
