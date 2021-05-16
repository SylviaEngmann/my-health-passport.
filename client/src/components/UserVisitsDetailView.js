import React from 'react';

function UserVisitsDetailView(props) {
    return (
        <div className="">
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
        </div>
    );
}

export default UserVisitsDetailView;