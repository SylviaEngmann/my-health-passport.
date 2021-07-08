import React from 'react';
import  '../App.css';

function UserVisitsList(props) {
    return (
        <table className="visitsTable">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>HOSPITAL</th>
                    <th>REASON</th>
                </tr>
            </thead>
            <tbody>
            {
                props.visits.map(v => (
                    <tr key={v.visit_id}>
                        <td>
                            {v.visit_date} {' '} 
                        </td>
                        <td>
                            {v.hospital_name} {' '}
                        </td>
                        <td>
                            {v.reason} {' '}
                        </td>
                        <td>
                        <button className="viewButton" onClick={(e) => props.visitDetailsCb(v.visit_id)} type="button">View</button>
                        </td>
                    </tr>
                ))

                }
            </tbody>
        </table>
    );
}

export default UserVisitsList;
