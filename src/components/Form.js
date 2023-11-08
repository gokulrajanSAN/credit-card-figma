import './For.css'
const Form = ({ formValue, handleChange }) => {   


    return (
        <form className="for"
            style={{
                display: "flex", flexDirection: "column", gap: "1.6rem"
            }}>
            <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
            <div>
                <div style={{
                    color: "var(--Deep-Violet, #21092F)",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: "Space Grotesk",
                    fontSize: "0.75rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "0.125rem",
                    textTransform: "uppercase",
                }}>Cardholder Name</div>

                <input type="text" name="hname" id="" className='for-inbut'
                    onChange={handleChange}
                    value={formValue.hname}
                    placeholder="e.g. Jane Appleseed"
                     />
            </div>

            <div>
                <div style={{
                    color: "var(--Deep-Violet, #21092F)",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: "Space Grotesk",
                    fontSize: "0.75rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "0.125rem",
                    textTransform: "uppercase",
                }}>Card Number</div>

                <input type="number" name="atmnumber" id=""
                    onChange={handleChange}
                    // value={formValue.atmnumber}
                    placeholder="e.g. 1234 5678 9123 0000"
                    style={{
                        padding: "0.6rem",
                        margin: "0.6rem 0",
                        width: "23.8125rem",
                        height: "2.8125rem",
                        flexShrink: "0",
                        borderRadius: "0.5rem",
                        border: "1px solid var(--Light-Grey, #DFDEE0)",
                        background: "var(--White, #FFF)",
                    }} /></div>



            <div style={{
                display: "flex", flexDirection: "row", gap: "1.6rem"
            }}>
                <div>
                    <div className="G1-2-T" style={{
                        color: "var(--Deep-Violet, #21092F)",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontFamily: "Space Grotesk",
                        fontSize: "0.75rem",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                        letterSpacing: "0.125rem",
                        textTransform: "uppercase",
                    }}>Exp. Date (MM/YY)</div>

                    <input type="number" name="atmmonth" id=""
                        onChange={handleChange}
                        placeholder="mm"
                        // value={formValue.atmmonth}
                        style={{
                            padding: "0.6rem",
                            margin: "0.6rem 0",
                            width: "5rem",
                            height: "2.8125rem",
                            flexShrink: "0",
                            borderRadius: "0.5rem",
                            border: "1px solid var(--Light-Grey, #DFDEE0)",
                            background: "var(--White, #FFF)",
                        }} />

                    <input type="number" name="atmyear" id=""
                        onChange={handleChange}
                        // value={formValue.atmyear}
                        placeholder="yy"
                        style={{
                            padding: "0.6rem",
                            margin: "0.6rem",
                            width: "5rem",
                            height: "2.8125rem",
                            flexShrink: "0",
                            borderRadius: "0.5rem",
                            border: "1px solid var(--Light-Grey, #DFDEE0)",
                            background: "var(--White, #FFF)",
                        }} />
                </div>

                <div>
                    <div className="G17-9-t" style={{
                        color: "var(--Deep-Violet, #21092F)",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontFamily: "Space Grotesk",
                        fontSize: "0.75rem",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                        letterSpacing: "0.125rem",
                        textTransform: "uppercase",
                    }}>CVV</div>

                    <input type="number" name="cvv" id=""
                        onChange={handleChange}
                        // value={formValue.cvv}
                        placeholder="e.g.124"
                        style={{
                            padding: "0.6rem",
                            margin: "0.6rem 0",
                            width: "8rem",
                            height: "2.8125rem",
                            flexShrink: "0",
                            borderRadius: "0.5rem",
                            border: "1px solid var(--Light-Grey, #DFDEE0)",
                            background: "var(--White, #FFF)",
                        }}
                    />
                </div>
            </div>

            <button
                style={{
                    // width: "23.8125rem",
                    height: "3.3125rem",
                    flexShrink: "0",
                    borderRadius: "0.5rem",
                    background: "var(--Deep-Violet, #21092F)",
                    color: "var(--White, #FFF)",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: "Space Grotesk",
                    fontSize: "1.125rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                }}>Confirm</button>


        </form >
    );
}

export default Form;