
const CcFront = () => {
    return (
        <div className="cc-front" style={{
            position: "relative",
            overflow: "hidden",
            width: "27.9375rem",
            height: "15.3125rem",
            borderRadius: "0.625rem",
            background: "linear-gradient(164deg, #6348FE 4.74%, #610595 88.83%)",
        }}>
            <div className="2" style={{
                position: "absolute",
                width: "8rem",
                height: "23rem",
                transform: "rotate(45deg)",
                borderRadius: "23rem",
                opacity: "0.8474",
                background: "#D53AFF",
                filter: "blur(40px)",
                top: "-7rem",
                left: "22rem",
                transformOrigin: "0 0"
            }}
            ></div>
            <div className="4" style={{
                position: "absolute",
                width: "8rem",
                height: "23rem",
                transform: "rotate(45deg)",
                borderRadius: "23rem",
                opacity: "0.8474",
                background: "#FF834A",
                filter: "blur(40px)",
                top: "-7.4rem",
                left: "28rem",
                transformOrigin: "0 0"
            }}></div>
            <div className="3" style={{
                position: "absolute",
                width: "8rem",
                height: "23rem",
                transform: "rotate(45deg)",
                borderRadius: "23rem",
                opacity: "0.8474",
                background: "#47A2FF",
                filter: "blur(40px)",
                top: "2.4rem",
                left: "20rem",
                transformOrigin: "0 0"
            }}></div>
            <div className="B" style={{
                position: "absolute",
                width: "5.25rem",
                height: "2.9375rem",
                flexShrink: "0",
                top: "1.75rem",
                left: "2rem"
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="47" viewBox="0 0 84 47" fill="none">
                    <ellipse cx="23.4783" cy="23.5" rx="23.4783" ry="23.5" fill="white" />
                    <path d="M83.5 23.5C83.5 29.0647 78.9932 33.575 73.4348 33.575C67.8764 33.575 63.3696 29.0647 63.3696 23.5C63.3696 17.9353 67.8764 13.425 73.4348 13.425C78.9932 13.425 83.5 17.9353 83.5 23.5Z" stroke="white" />
                </svg>
            </div>
            <div className="card-nunber"
                // value={formValue.atmnumber}
                style={{
                    position: "absolute",
                    color: "var(--White, #FFF)",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: "Space Grotesk",
                    fontSize: "1.75rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "0.21388rem",
                    top: "8.7rem",
                    left: "2rem"
                }}>0000 0000 0000 0000</div>
            <div className="holder-nane"
                // value={formValue.hname}
                style={{
                    position: "absolute",
                    color: "var(--White, #FFF)",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    /* Body (L) */
                    fontFamily: "Space Grotesk",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "0.125rem",
                    textTransform: "uppercase",
                    top: "13rem",
                    left: "2rem"
                }}>JANE APPLESEED</div>
            <div className="date"
                // value={formValue.atmyear}
                style={{
                    position: "absolute",
                    color: "var(--White, #FFF)",
                    textAlign: "right",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: "Space Grotesk",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "0.125rem",
                    textTransform: "uppercase",
                    top: "13rem",
                    left: "23rem"
                }}>00/00</div>
        </div>
    );
}
export default CcFront;
