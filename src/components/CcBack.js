const CcBack = ({ formValue }) => {
    return (
        <div className="ccBack" style={{
            position: "relative",
            width: "27.9375rem",
            height: "15.3125rem",
            flexShrink: "0",
            borderRadius: "0.625rem",
            background: "linear-gradient(169deg, #FFF 5%, #D2D3D9 91.69%)",
        }}>
            <div className="rect" style={{
                position: "absolute",
                width: "27.9375rem",
                height: "3.375rem",
                flexShrink: "0",
                background: "#2F2F2F",
                top: "1.44rem",
                left: "0rem"
            }} />
            <div className="cvv-rect" style={{
                position: "absolute",
                width: "22.5625rem",
                height: "2.375rem",
                flexShrink: "0",
                borderRadius: "0.25rem",
                background: "#ADB5BE",
                top: "6.3rem",
                left: "2.7rem"
            }} />

            <div
                // value={formValue.cvv}
                style={{
                    position: "absolute",
                    color: "var(--White, #FFF)",
                    textAlign: "right",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    /* Body (L) */
                    fontFamily: "Space Grotesk",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "0.125rem",
                    textTransform: "uppercase",
                    top: "6.94rem",
                    left: "22.4rem"
                }}>{formValue.cvv || "000"}</div>
            <div className="" style={{
                position: "absolute",
                width: "11.625rem",
                height: "1.625rem",
                flexShrink: "0",
                top: "10.75rem",
                left: "8.25rem"
            }}><svg xmlns="http://www.w3.org/2000/svg" width="11.625rem"
                height="1.825rem" viewBox="0 0 186 26" fill="none">
                    <rect width="115" height="4" rx="2" fill="#ADB5BE" />
                    <rect x="121" width="22" height="4" rx="2" fill="#ADB5BE" />
                    <rect x="149" width="22" height="4" rx="2" fill="#ADB5BE" />
                    <rect x="177" width="9" height="4" rx="2" fill="#ADB5BE" />
                    <rect width="115" height="4" rx="2" transform="matrix(-1 0 0 1 186 22)" fill="#ADB5BE" />
                    <rect width="22" height="4" rx="2" transform="matrix(-1 0 0 1 65 22)" fill="#ADB5BE" />
                    <rect width="22" height="4" rx="2" transform="matrix(-1 0 0 1 37 22)" fill="#ADB5BE" />
                    <rect width="9" height="4" rx="2" transform="matrix(-1 0 0 1 9 22)" fill="#ADB5BE" />
                    <rect x="42" y="11" width="60" height="4" rx="2" fill="#ADB5BE" />
                    <rect x="14" y="11" width="22" height="4" rx="2" fill="#ADB5BE" />
                    <rect x="108" y="11" width="46" height="4" rx="2" fill="#ADB5BE" />
                    <rect x="160" y="11" width="9" height="4" rx="2" fill="#ADB5BE" />
                </svg></div>
        </div>
    );
}
export default CcBack;
