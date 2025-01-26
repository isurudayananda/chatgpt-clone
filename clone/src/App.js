import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';

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
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque pariatur architecto dolorum eum dicta, quae alias voluptatum recusandae corporis consequatur.</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint quam pariatur suscipit laudantium rerum alias impedit qui, totam ut. Quod possimus ipsam ad accusamus, hic neque placeat illum dolorum. Quaerat eaque odit reiciendis facilis doloremque. Quidem corrupti cupiditate adipisci eius maiores maxime exercitationem blanditiis laboriosam ad in quisquam incidunt doloribus eum fugiat veritatis, placeat beatae rem perspiciatis. Optio, nisi consequatur, delectus nihil dolore et praesentium eveniet doloremque sunt dolores provident. Veritatis culpa deleniti sint reprehenderit pariatur obcaecati aspernatur iusto ex velit quia, corrupti rerum labore ipsa quibusdam quidem aperiam et ab officiis assumenda non iure totam. Pariatur, consectetur aspernatur.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' /><button className="send"><img src={sendBtn} alt="send" /></button>
          </div>
          <p>ChatGPt may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version. </p>
        </div>
      </div>
    </div>
  );
}

export default App;
