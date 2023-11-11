import './For.css'
const Form = ({ formValue, handleChange }) => {

    return (
        <form className="for"
            style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>

            {/* card-holder */}
            <label className='card-holder'>Cardholder Name
                <input type="text" name="hname" id="" className='cardholder'
                    required
                    onChange={handleChange}
                    // value={formValue.hname}
                    placeholder="e.g. Jane Appleseed"
                    style={{ outline: "none", border: formValue.hname.length >= 3 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }}
                />
            </label>

            {/* Card Number */}
            <label className='card-number'>Card Number
                <input className='atmnumber' type="" name="atmnumber" id=""
                    required
                    maxLength={19}
                    onChange={handleChange}
                    // value={formValue.atmnumber}
                    placeholder="e.g. 1234 5678 9123 0000"
                    style={{ outline: "none", border: formValue.atmnumber.length === 19 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }}
                />
                <p className='errorText' >{!formValue.atmnumber.length === 19 && "Wrong format, numbers only"}</p>
            </label>

            <div className='third'>

                {/* Exp. Date (MM/YY) */}
                <label className="Exp-Date" >Exp. Date (MM/YY)
                    <div>
                        <input className='atmmonth' type="number" name="atmmonth" id=""
                            required
                            maxLength={2}
                            onChange={handleChange}
                            value={formValue.atmmonth}
                            placeholder="mm"
                            style={{ outline: "none", border: formValue.atmmonth.length === 2 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }}
                        />
                        <input className='atmyear' type="number" name="atmyear" id=""
                            required
                            onChange={handleChange}
                            maxLength={2}
                            // value={formValue.atmyear}
                            placeholder="yy"
                            style={{ outline: "none", border: formValue.atmyear.length === 2 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }}
                        />
                    </div>

                    <div className='errorDate'>{formValue.atmyear.length === 2 && formValue.atmmonth.length === 2 ? "" : "Can’t be blank"}</div>
                </label>

                {/* CVV */}
                <label className="cvv-num" >CVV
                    <input className='cvv' type="number" name="cvv" id=""
                        maxLength={3}
                        required
                        onChange={handleChange}
                        // value={formValue.cvv}
                        pattern="^\d{0,4}$"
                        placeholder="e.g.124"
                        style={{ outline: "none", border: formValue.cvv.length === 3 ? "1px solid var(--Gradient, #6348FE)" : "1px solid var(--Gradient, #b60710)" }}
                    />
                    <p className='errorCvv'>
                        {formValue.cvv.length === 0
                            ? "Can’t be blank"
                            : (formValue.cvv.length === 3 ? ''
                                : (formValue.cvv.length <= 3
                                    ? "need 3 dig" : "only 3 dig"))
                        }
                    </p>
                </label>
            </div>
            <button className='confirmbtn'>Confirm</button>
        </form >
    );
}

export default Form;