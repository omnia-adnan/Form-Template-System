import React from 'react';

const Table = (props) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Savings</th>
                </tr>
                <tr>
                    <td>{props.stuffName}</td>
                    <td>{props.quantity}</td>
                    <td>{props.condition}</td>
                </tr>
            </table>
        </div>
    );
};

export default Table;