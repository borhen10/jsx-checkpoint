import logo from './logo.svg';
import './style.css';
import imageInSrc from "./imageInSrc.jpg"

function App() {
  return (

    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">BORHEN ISSAOUI</h1>
      <br />
      <img src={imageInSrc} alt="imageInSrc" style={{width:"320px",height:"240px"}} />
      <br />
      <img src="./imageInPublic.jpg" alt="publicphoto" style={{width:"320px",height:"240px"}} />
    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
  )}
export default App;
