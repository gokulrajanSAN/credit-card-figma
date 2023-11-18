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
                    placeholder="e.g. Jane Appleseed"
                />
                {! /^[a-zA-Z ]*$/.test(formValue?.hname) && <p className='errorText'>Wrong format</p>}
            </label>

            {/* Card Number */}
            <label className='card-number'>Card Number
                <input className='atmnumber' type="" name="atmnumber" id=""
                    required
                    maxLength={19}
                    onChange={handleChange}
                    placeholder="e.g. 1234 5678 9123 0000"
                />
                {!/^[0-9 ]*$/.test(formValue.atmnumber) && <p className='errorText'>Wrong format, numbers only</p>}
            </label>

            <div className='third'>
                {/* Exp. Date (MM/YY) */}
                <label className="Exp-Date" >Exp. Date (MM/YY)
                    <div>
                        <input className='atmmonth' type="" name="atmmonth" id=""
                            required
                            maxLength={2}
                            placeholder="mm"
                            onChange={handleChange}
                            // onBlur={validateMonth}
                        />
                        <input className='atmyear' type="" name="atmyear" id=""
                            required
                            onChange={handleChange}
                            maxLength={2}
                            placeholder="yy"
                        />
                    </div>
                </label>

                {/* CVV */}
                <label className="cvv-num" >CVV
                    <input className='cvv' type="number" name="cvv" id=""
                        required
                        onChange={handleChange}
                        placeholder="e.g.124"
                    />
                </label>
            </div>
            <button className='confirmbtn'>Confirm</button>
        </form >
    );
}

export default Form;