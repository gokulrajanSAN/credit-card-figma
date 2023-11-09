import './For.css'
const Form = ({ formValue, handleChange }) => {


    return (
        <form className="for"
            style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>

            <pre>{JSON.stringify(formValue, undefined, 2)}</pre>

            <div>
                <div className='cardholder'>Cardholder Name</div>

                <input type="text" name="hname" id="" className='for-inbut'
                    onChange={handleChange}
                    value={formValue.hname}
                    placeholder="e.g. Jane Appleseed" />
            </div>

            <div>
                <div className='card-number'>Card Number</div>

                <input className='atmnumber' type="number" name="atmnumber" id=""
                    onChange={handleChange}
                    // value={formValue.atmnumber}
                    placeholder="e.g. 1234 5678 9123 0000" />
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "1.6rem" }}>
                <div>
                    <div className="Exp-Date" >Exp. Date (MM/YY)</div>

                    <input className='atmmonth' type="number" name="atmmonth" id=""
                        onChange={handleChange}
                        placeholder="mm"
                    // value={formValue.atmmonth}
                    />

                    <input className='atmyear' type="number" name="atmyear" id=""
                        onChange={handleChange}
                        // value={formValue.atmyear}
                        placeholder="yy" />
                </div>

                <div>
                    <div className="cvv" >CVV</div>

                    <input className='cvv-num' type="number" name="cvv" id=""
                        onChange={handleChange}
                        // value={formValue.cvv}
                        placeholder="e.g.124" />
                </div>
            </div>

            <button className='confirmbtn'>Confirm</button>
        </form >
    );
}

export default Form;