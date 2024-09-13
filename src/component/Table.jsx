import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import stuff from './Form'

const Table = () => {
    const Location = useLocation();
    const [state, setLocationState] = useState({stuff});

    useEffect(() => {
        let state = Location.state
        setLocationState(state)
    }, [Location.state])
    
    const navigate = useNavigate();
    const handleRowClick = () => {
        navigate('/form');
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Savings</th>
                </tr>
                {state && (
                <tr onClick={handleRowClick}>
                    <td>{state.stuffName}</td>
                    <td>{state.quantity}</td>
                    <td>{state.condition}</td>
                </tr>
                )}
            </table>
        </div>
    );
};

export default Table;