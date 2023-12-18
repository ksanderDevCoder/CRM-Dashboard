import React from 'react'
import Table from '../Table/Table'
import classes from './Main.module.css'
import SearchIcon from '../../assets/Icons/SearchIcon'
import TablePagination from '../Table/TablePagination'

const Main = () => {
    return (
        <section className={classes["main"]}>
            <div className={classes["main__greetings"]}>
                <h2>Hello Evano 👋🏼,</h2>
            </div>
            <div className={classes["main__container"]}>
                <header className={classes["main__header"]}>
                    <div className={classes["main__header-left"]}>
                        <h2>All Customers</h2>
                        <div className={classes["main__status-filter"]}>
                            <button className={classes["main__active-filter"]}>Active Members</button>
                        </div>
                    </div>
                    <div className={classes["main__search-container"]}>
                        <span className={classes["main__search-icon"]}>
                            <SearchIcon />
                        </span>
                        <input type="text" id="search" name="search" placeholder="Search" />
                    </div>
                </header>
                <Table />
                <TablePagination />
            </div>
        </section>
    )
}

export default Main
