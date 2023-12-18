import React from 'react'
import TableItem from './TableItem'
import classes from './Table.module.css'

const Table = () => {
    const headers = ["Customer Name", "Company", "Phone Number", "Email", "Country", "Status"];

    return (
        <table className={classes["data-table"]}>
            <thead className={classes["data-table__header"]}>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <TableItem headers={headers} />
        </table>
    )
}

export default Table
