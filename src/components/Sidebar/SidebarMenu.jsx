import React, { useState } from "react";
import classes from "./SidebarMenu.module.css";
import KeyIcon from "../../assets/Icons/KeyIcon";
import BoxIcon from "../../assets/Icons/BoxIcon";
import CustomerIcon from "../../assets/Icons/CustomerIcon";
import IncomeIcon from "../../assets/Icons/IncomeIcon";
import PromoteIcon from "../../assets/Icons/PromoteIcon";
import QuestionCloudIcon from "../../assets/Icons/QuestionCloudIcon";
import ChevronIcon from "../../assets/Icons/ChevronIcon";
import BurgerMenuIcon from "../../assets/Icons/BurgerMenuIcon";
import CloseIcon from "../../assets/Icons/CloseIcon";

const menuItems = [
    {
        icon: <KeyIcon />,
        text: "Dashboard",
        chevron: false,
    },
    {
        icon: <BoxIcon />,
        text: "Product",
        chevron: true,
    },
    {
        icon: <CustomerIcon />,
        text: "Customers",
        chevron: true,
    },
    {
        icon: <IncomeIcon />,
        text: "Income",
        chevron: true,
    },
    {
        icon: <PromoteIcon />,
        text: "Promote",
        chevron: true,
    },
    {
        icon: <QuestionCloudIcon />,
        text: "Help",
        chevron: true,
    },
];

const SidebarMenu = () => {
    const activePage = "Customers";
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <button
                className={classes["sidebar-menu__toggle"]}
                onClick={toggleMenuHandler}
            >
                {isOpen ? <CloseIcon /> : <BurgerMenuIcon />}
            </button>
            <ul
                className={`${classes["sidebar-menu__list"]} ${isOpen ? classes["open"] : ""}`}
            >
                {menuItems.map((item) => (
                    <li
                        className={`${classes["sidebar-menu__item"]} ${item.text === activePage
                            ? classes["sidebar-menu__item--active"]
                            : ""
                            }`}
                        key={item.text}
                    >
                        <div className={classes["sidebar-menu__item-content"]}>
                            <div className={classes["sidebar-menu__item--left"]}>
                                <span className={classes["sidebar-menu__icon"]}>
                                    {item.icon}
                                </span>
                                <span className={classes["sidebar-menu__text"]}>
                                    {item.text}
                                </span>
                            </div>
                            <div className={classes["sidebar-menu__item--right"]}>
                                {item.chevron && (
                                    <button className={classes["sidebar-menu__chevron"]}>
                                        <ChevronIcon />
                                    </button>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SidebarMenu;
