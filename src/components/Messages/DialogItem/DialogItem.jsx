import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';
import u from './../../../img/user.png';

const DialogItem = ({id, name}) =>{

    let path = "/dialogs/" + id;
    return(
        <>

            <NavLink to={path} className={s.dialogNavLink}>
                <div className={s.user}>
                    <div className={s.dialogItem} >{name}</div>
                    <div>
                        <img className={s.dialogItemPic} src={u} alt=''/>
                    </div>
                </div>

            </NavLink>
        </>
    )
}

export default DialogItem;
