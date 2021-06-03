import s from "./Navbar.module.scss"
import cx from 'classnames'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cx(s.appWrapper__nav, s.nav)}>
            <NavLink activeClassName={s.active} className={s.nav__item} to='/profile'>
                <img src="https://image.flaticon.com/icons/png/128/892/892781.png" alt=""
                     className={s.nav__img}/>
                <span className={s.nav__href}>Profile</span>
            </NavLink>
            <NavLink activeClassName={s.active} to="/dialogs" className={s.nav__item}>
                <svg className={s.nav__img} viewBox="0 0 512 512.0002" xmlns="http://www.w3.org/2000/svg"
                     id="fi_1370907">
                    <path
                        d="m256 0c-141.484375 0-256 114.496094-256 256 0 44.902344 11.710938 88.757812 33.949219 127.4375l-32.984375 102.429688c-2.300782 7.140624-.410156 14.96875 4.894531 20.273437 5.253906 5.253906 13.0625 7.214844 20.273437 4.894531l102.429688-32.984375c38.679688 22.238281 82.535156 33.949219 127.4375 33.949219 141.484375 0 256-114.496094 256-256 0-141.484375-114.496094-256-256-256zm0 472c-40.558594 0-80.09375-11.316406-114.332031-32.726562-4.925781-3.078126-11.042969-3.910157-16.734375-2.078126l-73.941406 23.8125 23.8125-73.941406c1.804687-5.609375 1.042968-11.734375-2.082032-16.734375-21.40625-34.238281-32.722656-73.773437-32.722656-114.332031 0-119.101562 96.898438-216 216-216s216 96.898438 216 216-96.898438 216-216 216zm25-216c0 13.804688-11.191406 25-25 25s-25-11.195312-25-25c0-13.808594 11.191406-25 25-25s25 11.191406 25 25zm100 0c0 13.804688-11.191406 25-25 25s-25-11.195312-25-25c0-13.808594 11.191406-25 25-25s25 11.191406 25 25zm-200 0c0 13.804688-11.191406 25-25 25-13.804688 0-25-11.195312-25-25 0-13.808594 11.195312-25 25-25 13.808594 0 25 11.191406 25 25zm0 0"></path>
                </svg>
                <span className={s.nav__href}>Messages</span>
            </NavLink>
            <NavLink activeClassName={s.active} to="/users" className={s.nav__item}>
                <img className={s.nav__img} src="https://image.flaticon.com/icons/png/128/615/615075.png" alt=""/>
                <span className={s.nav__href}>Users</span>
            </NavLink>
        </nav>
    );
}

export default Navbar;


