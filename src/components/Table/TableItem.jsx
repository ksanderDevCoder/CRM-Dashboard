import React from 'react'
import userData from '../../data/userData'
import classes from './TableItem.module.css'

const TableItem = ({ headers }) => {
    return (
        <tbody className={classes["table-item__body"]}>
            {userData.map((data) => (
                <>
                    <tr key={data.name}>
                        <td data-label={headers[0]}>{data.name}</td>
                        <td data-label={headers[1]}>{data.company}</td>
                        <td data-label={headers[2]}>{data.phoneNumber}</td>
                        <td data-label={headers[3]}>{data.email}</td>
                        <td data-label={headers[4]}>{data.country}</td>
                        <td data-label={headers[5]}>
                            <span className={`${classes["table-item__status"]} ${data.status === 'Active' ? classes["table-item__status--active"] : classes["table-item__status--inactive"]}`}>
                                {data.status}
                            </span>
                        </td>
                    </tr>
                    <hr />
                </>
            ))}
        </tbody>
    )
}

export default TableItem
