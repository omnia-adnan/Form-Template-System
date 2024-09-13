import { useState } from 'react';
import Table from './Table';

function Form() {
    const [stuffName, setStuffName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [condition, setCondition] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(stuffName);
        console.log(quantity);
        console.log(condition);
        setStuffName(prev => [...prev, stuffName])   
        setQuantity(prev => [...prev, quantity])   
        setCondition(prev => [...prev, condition])   
    }

    return (
        <>
            <div className="card">
                <div className="card-image">	
                <h2 className="card-heading">
                    Get started
                    <small>Let us your Rate for stuff</small>
                </h2>
                </div>
            <form className="card-form" onSubmit={handleSubmit}>
                <div className="input">
                    <input type="text" value={stuffName} 
                    onChange={(e) => setStuffName(e.target.value)} 
                    className="input-field" required/>
                    <label className="input-label">Stuff name</label>
                </div>
                <div className="input">
                    <input type="number" value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    className="input-field" required/>
                    <label className="input-label">Quantity</label>
                </div>
                <div className="input">
                    <select className="input-field" value={condition}
                    onChange={(e) => setCondition(e.target.value)} required>
                    <option value="/">Condition</option>
                    <option value="excellent">excellent</option>
                    <option value="good">good</option>
                    <option value="fair">fair</option>
                    <option value="poor">poor</option>
                    </select>
                </div>
                <div className="action">
                    <button className="action-button">Get started</button>
                </div>
            </form>
            </div>
            <Table/>
        </>
    );
}

export default Form;