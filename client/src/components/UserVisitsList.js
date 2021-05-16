import React from 'react';

function UserVisitsList(props) {
    return (
        <table className="">
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
                            {/* <button onClick={(e) => props.deleteCb(d.id)} type="button">x</button> */}
                        </td>
                        <td>
                            {v.hospital_name} {' '}
                            {/* <button onClick={(e) => props.add500Cb(d.id)} type="button">^</button> */}
                        </td>
                        <td>
                            {v.reason} {' '}
                            <button onClick={(e) => props.visitDetails(v.visit_id)} type="button">View</button>
                        </td>
                    </tr>
                ))

                }
            </tbody>
        </table>
    );
}

export default UserVisitsList;