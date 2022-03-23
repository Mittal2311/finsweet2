import React,{useState} from "react";
import faqstyle from "../styles/Faq.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Questions = (props) => {
    const [isActive, setActive] = useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };
    return(
        <>
      <div className={faqstyle.questionborder}>
          <div className={faqstyle.question} id={props.id}>
          <h6 className={faqstyle.number}>{props.number}</h6>
                <h6 className={faqstyle.faq_question}>{props.question}</h6>
                <button onClick={() => handleClick(props.id)} className="angle">
               
               {isActive ?(<span className={isActive ? "active" : ""}>-</span>):(<span className={isActive ? "active" : ""}>+</span> )}
                  {/* <svg
                    className={isActive ? "active" : ""}
                    viewBox="0 0 320 512"
                    width="100"
                    title="angle-down"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg> */}
                </button>
              </div>              
              <div className={isActive ? "answer active" : "answer"}>                        
                {props.answer}       
              </div>
             
              </div>
        </>
    )

}
export default Questions

