import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import DOMPurify from 'dompurify'

const Main = () => {
    const {
		onSent,
		recentPrompt,
		showResult,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context)

    const handleKeyDown = (e) => {
     if (e.key === "Enter") {
         onSent(); 
     }
    };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult ? 
       <>
           <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I Help You today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcomming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Brifely summerize this concept: urban planing</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Imporove the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
       </> 
       : <div className="result">
            <div className="result-title">
               <img src={assets.user_icon} alt="" />
               <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? <div className="loader">
                  <hr />
                  <hr />
                  <hr />
              </div> : (<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(resultData) }}></p>)}
             
            </div>
         </div>
       }

       
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
             value={input} type="text"
             placeholder="Enter the prompt here" />
            <div className="item-img">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()}  src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display iaccurate info, including about people, so
            double-check its responses, Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
