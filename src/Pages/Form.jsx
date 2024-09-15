import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

function Form() {
    const [stuff, setStuff] = useState({
        stuffName: '',
        quantity: '',
        condition: '',
    });

    const change = (e) => {
        const { name, value } = e.target;
        setStuff((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveData = () => {
        localStorage.setItem('stuffs', JSON.stringify(stuff));
    };

    return (
        <div className='contenar'>
            <div className="card">
                <div className="card-image">	
                    <h2 className="card-heading">
                        Get started
                        <small>Let us know your rate for stuff</small>
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
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                            <option value="poor">Poor</option>
                        </select>
                    </div>
                    <div className="action" onClick={handleSaveData}>
                        <Link to="/Table" state={stuff} className='link'>
                            <button className="action-button">Get started</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
