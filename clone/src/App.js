import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
                <div  className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo"/><span className="brand">ChatGPT</span></div>
                <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
                <div className="upperSideBottom">
                  <button className="query"><img src={msgIcon} alt="Query" className="" />What is Programming ?</button><br></br>
                  <button className="query"><img src={msgIcon} alt="Query" className="" />How to use an API ?</button>
                </div>
        </div>
        <div className="lowerside">
          <div className="listItems"><img src={home} alt="" className="listitemsImg" />Home</div>
          <div className="listItems"><img src={saved}alt="" className="listitemsImg" />Saved</div>
          <div className="listItems"><img src={rocket}alt="" className="listitemsImg" />Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
        
      </div>
    </div>
  );
}

export default App;
