import React from 'react'
import { FaArrowUp, FaArrowAltCircleDown, FaDollarSign, FaGraduationCap } from "react-icons/fa"
import './CardText.scss';
import { SlScreenDesktop } from "react-icons/sl";
import { SiWebtrees } from "react-icons/si";

const CardTest = ({ title, percentage, progressVal, type }) => {
    const typeHandler = () => {
        switch (type) {
            case 1:
                return < SlScreenDesktop />
            case 2:
                return <SiWebtrees />
            case 3:
                return <FaDollarSign />
            case 4:
                return <FaGraduationCap />
            default: return;
        }
    }
    const classNameHandler = () => {
        switch (type) {
            case 1:
                return "profits"
            case 2:
                return "loss"
            case 3:
                return "money"
            case 4:
                return "bounus"
            default: return;
        }
    }
    return (
       
        <div className={`card-test ${classNameHandler()}`} >
          <div className='upsection'>
           {/* <div className='icon'>{typeHandler()}</div> */}
            <h3 className='title'>{title}</h3>
            </div>
            <div className='content'>
                    <h4 className='percentage'>{percentage}</h4>
                
                {/* <div className='circular-progress-bar'>{progressVal}</div> */}
            </div>
       
        </div>
    )
}

export default CardTest
