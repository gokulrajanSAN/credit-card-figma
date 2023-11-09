import './For.css'
const Form = ({ formValue, handleChange }) => {


    return (
        <form className="for"
            style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>

            <pre>{JSON.stringify(formValue, undefined, 2)}</pre>

            <div>
                <div className='card-holder'>Cardholder Name</div>
                <input type="text" name="hname" id="" className='cardholder'
                    // required
                    onChange={handleChange}
                    // value={formValue.hname}
                    placeholder="e.g. Jane Appleseed"
                    style={{ outline: "none", border: formValue.hname.length >= 3 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }} />
            </div>

            <div>
                <div className='card-number'>Card Number</div>
                <input className='atmnumber' type="number" name="atmnumber" id=""
                    // required
                    pattern="[0-9]{4}"
                    onChange={handleChange}
                    // value={formValue.atmnumber}
                    placeholder="e.g. 1234 5678 9123 0000"
                    style={{ outline: "none", border: formValue.atmnumber.length === 16 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }} />
                <div className='errorText' >{formValue.atmnumber.length === 16 ? "" : "Wrong format, numbers only"}</div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "1.6rem" }}>
                <div>
                    <div className="Exp-Date" >Exp. Date (MM/YY)</div>
                    <input className='atmmonth' type="number" name="atmmonth" id=""
                        // required
                        pattern="\d{2,2}"
                        onChange={handleChange}
                        value={formValue.atmmonth}
                        placeholder="mm"
                        style={{ outline: "none", border: formValue.atmmonth.value === 12 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }} />

                    <input className='atmyear' type="number" name="atmyear" id=""
                        // required
                        pattern="\d{2,2}"
                        onChange={handleChange}
                        // value={formValue.atmyear}
                        placeholder="yy"
                        style={{ outline: "none", border: formValue.atmyear.length === 2 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }} />

                    <div className='errorDate'>{formValue.atmyear.length === 2 && formValue.atmmonth.length === 2 ? "" : "Can’t be blank"}</div>
                </div>

                <div>
                    <div className="cvv" >CVV</div>
                    <input className='cvv-num' type="number" name="cvv" id=""
                        // required
                        onChange={handleChange}
                        // value={formValue.cvv}
                        pattern="[0-9]{3}"
                        placeholder="e.g.124"
                        style={{ outline: "none", border: formValue.cvv.length === 3 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }} />

                    <div className='errorCvv'>
                        {formValue.cvv.length === 0
                            ? "Can’t be blank"
                            : (formValue.cvv.length === 3 ? ''
                                : (formValue.cvv.length <= 3
                                    ? "need 3 dig" : "only 3 dig"))
                        }</div>

                </div>
            </div>

            <button className='confirmbtn'>Confirm</button>
        </form >
    );
}

export default Form;