import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Img from './img.jpeg' 
import Img2 from './me.jpg'

function App() {
  return (
      <>
        <h1>Here we are Using Bootsrap</h1>
        <button className='btn btn-success'>Click ME</button>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
              <div class="card" style={{width:"25rem" }} >
                <img src={Img} class="card-img-top" alt="Image"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style={{width:"25rem" }} >
                <img src={Img2} class="card-img-top" alt="Image"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style={{width:"25rem" }} >
                <img src={Img} class="card-img-top" alt="Image"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>
      </>
  );
}

export default App;
