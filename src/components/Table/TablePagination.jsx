import React from 'react'
import classes from './TablePagination.module.css'

const TablePagination = () => {
    return (
        <div className={classes["table-pagination"]}>
            <span className={classes["table-pagination__info"]}>Showing data 1 to 8 of 256K entries</span>
            <div className={classes["table-pagination__controls"]}>
                <button>❮</button>
                <button className={classes["table-pagination__button--active"]}>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>...</button>
                <button>40</button>
                <button>❯</button>
            </div>
        </div>
    )
}

export default TablePagination
