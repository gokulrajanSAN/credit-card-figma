import "./CcFront.css"
import '../App.css';

const CcFront = ({ formValue }) => {
    return (
        <div className="cc-front">
            <div className="cc-front2" ></div>
            <div className="cc-front4" ></div>
            <div className="cc-front3" ></div>
            <div className="cc-front-B" >
                <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="2.4rem" viewBox="0 0 84 47" fill="none">
                    <ellipse cx="23.4783" cy="23.5" rx="23.4783" ry="23.5" fill="white" />
                    <path d="M83.5 23.5C83.5 29.0647 78.9932 33.575 73.4348 33.575C67.8764 33.575 63.3696 29.0647 63.3696 23.5C63.3696 17.9353 67.8764 13.425 73.4348 13.425C78.9932 13.425 83.5 17.9353 83.5 23.5Z" stroke="white" />
                </svg>
            </div>
            <div className="card-nunber">
                {formValue.atmnumber || "0000 0000 0000 0000"}</div>
            <div className="holder-nane">
                {formValue.hname || "JANE APPLESEED"}</div>
            <div className="date">
                {`${formValue.atmmonth}` || "00"} / {`${formValue.atmyear}` || "00"}</div>
        </div>
    );
}
export default CcFront;
