import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Table = () => {
    const location = useLocation();
    const [state, setLocationState] = useState(null); 
    const [editRowId, setEditRowId] = useState(null); 
    const [editedValues, setEditedValues] = useState({}); 

    const handleEditClick = () => {
        setEditRowId(true); 
        setEditedValues({
            stuffName: state.stuffName,
            quantity: state.quantity,
            condition: state.condition
        });
    };

    const handleSaveClick = () => {
        setLocationState((prevState) => ({
            ...prevState,
            ...editedValues
        }));
        setEditRowId(false);
    };

    const handleCancelClick = () => {
        setEditRowId(false);
        setEditedValues({}); 
    };

    const handleInputChange = (field, value) => {
        setEditedValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    useEffect(() => {
        if (location.state) {
            setLocationState(location.state);
        } else {
            const storedData = localStorage.getItem('stuffs');
            if (storedData) {
                setLocationState(JSON.parse(storedData));
            }
        }
    }, [location.state]);

    if (!state) return <div>Loading...</div>;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Stuff Name</th>
                        <th>Quantity</th>
                        <th>Condition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {editRowId ? (
                                <input
                                    type="text"
                                    value={editedValues.stuffName}
                                    onChange={(e) => handleInputChange('stuffName', e.target.value)}
                                />
                            ) : (
                                state.stuffName
                            )}
                        </td>
                        <td>
                            {editRowId ? (
                                <input
                                    type="text"
                                    value={editedValues.quantity}
                                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                                />
                            ) : (
                                state.quantity
                            )}
                        </td>
                        <td>
                            {editRowId ? (
                                <select
                                    value={editedValues.condition}
                                    onChange={(e) => handleInputChange('condition', e.target.value)}
                                >
                                    <option value="">Condition</option>
                                    <option value="excellent">excellent</option>
                                    <option value="good">good</option>
                                    <option value="fair">fair</option>
                                    <option value="poor">poor</option>
                                </select>
                            ) : (
                                state.condition
                            )}
                        </td>
                        <td>
                            {editRowId ? (
                                <>
                                    <button onClick={handleSaveClick}>Save</button>
                                    <button onClick={handleCancelClick}>Cancel</button>
                                </>
                            ) : (
                                <button onClick={handleEditClick}>Edit</button>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
