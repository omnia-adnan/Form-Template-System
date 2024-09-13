import { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
    const [stuff, setStuff] = useState({
        stuffName: '',
        quantity: '',
        condition: '',
    });

    const change = (e) => {
        setStuff({ ...stuff, [e.target.name]: e.target.value });
        localStorage.setItem('stuffs', stuff.stuffName)
    };

    return (
        <>
            <div className="card">
                <div className="card-image">	
                    <h2 className="card-heading">
                        Get started
                        <small>Let us your Rate for stuff</small>
                    </h2>
                </div>
                <form className="card-form">
                    <div className="input">
                        <input 
                            type="text" 
                            name="stuffName"
                            value={stuff.stuffName} 
                            onChange={change}
                            className="input-field" 
                            required
                        />
                        <label className="input-label">Stuff name</label>
                    </div>
                    <div className="input">
                        <input 
                            type="number" 
                            name="quantity" 
                            value={stuff.quantity} 
                            onChange={change}
                            className="input-field" 
                            required
                        />
                        <label className="input-label">Quantity</label>
                    </div>
                    <div className="input">
                        <select 
                            name="condition"
                            value={stuff.condition} 
                            onChange={change} 
                            className="input-field" 
                            required
                        >
                            <option value="">Condition</option> 
                            <option value="excellent">excellent</option>
                            <option value="good">good</option>
                            <option value="fair">fair</option>
                            <option value="poor">poor</option>
                        </select>
                    </div>
                    <div className="action">
                        <Link to="/Table" state={stuff} className='link'>
                            <button className="action-button">Get started</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;
