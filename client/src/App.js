import './App.css';
import RefreshIcon from '@material-ui/icons/Refresh';
import axios from "axios"
import {useState,useEffect,useRef} from "react"
import Countup from "react-countup"

function App() {

  const [speed,setSpeed]=useState(0);

  let startMethod=useRef(null)

  const getInternetSpeed=async ()=>{
   await axios.get('/api/speed-test').then(response=>{
      console.log(response.data.speed);
      setSpeed(response.data.speed)
      startMethod()
    }) 

  } 

  useEffect(()=>{
    getInternetSpeed()
  },[])

  return (
    <div className="App">
      <div className="logo">
          <img src="data:image/png;base64,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" />
      </div>
      <div  className="body">
        <p className="heading"> Your Internet speed is  </p>
        <div className="top__Section">
          <Countup 
            start={speed ? speed+100 : 0}
            end={speed ? speed : 0}
            duration={5}
            onEnd={()=>console.log("end")}
            onStart={()=>console.log("start")}
            decimals={2}
          >
            {({countUpRef,start})=>{
              startMethod=start;
              return (
                <> 
                  <div className="left">
                    <div className="speed__Count" ref={countUpRef} />
                  </div>
                  <div className="right">
                    <div className="speed__measure">Mbps</div>
                    <div
                      className="reload"
                      onClick={() => getInternetSpeed(start)} 
                    >
                      <RefreshIcon color="black" fontSize="large" />
                    </div>
                  </div>
                </>
              );
            }}
          </Countup>
  
        </div>
      </div>

      <div className="footer">
        <button  className="show__more">show more info</button>
        <div className="social__btn">

         <div className="icon__Container">
           <i className="fas fa-question-circle  icon__block"></i>
         </div>

         <div className="icon__Container">
           <i className="fab fa-facebook-f  icon__block"></i> 
         </div>

         <div className="icon__Container">
           <i className="fab fa-twitter  icon__block"></i>
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
