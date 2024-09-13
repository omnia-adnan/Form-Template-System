import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Table = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [state, setLocationState] = useState(null);

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

    const handleRowClick = () => {
        navigate('/form');
    };

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
                    {state && (
                        <tr onClick={handleRowClick}>
                            <td>{state.stuffName}</td>
                            <td>{state.quantity}</td>
                            <td>{state.condition}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
