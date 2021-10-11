import React from "react";
import s from './Users.module.css';
import logo from './../../img/user.png'
import { NavLink } from "react-router-dom";

function Users(props) {


  debugger
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    if (pagesCount > 20) {
        pagesCount = 20;
    }
    let pages = [];

    for (let i = 1; i <= pagesCount ; i++) {
        pages.push(i);
    }



    return (
    <div>
      <div className={s.pagination}>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.onPageClick(p);
                
              }}
              className={props.currentPage === p && s.selected_page}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <>
          <div className={s.user} key={user.id}>
            <div className={s.picAndBtn}>
              <div className={s.pic}>
                <NavLink to={'/profile/' + user.id}>
                  <img
                    src={user.photos.small ? user.photos.small : logo}
                    alt=""
                  />
                </NavLink>
              </div>
              <div className={s.btn}>
                {user.followed ? (
                  <button
                  onClick={ () =>{props.unFollow(user.id);}} className="btn btn-success">UNFOLLOW</button>
                ) : (
                  <button onClick={() => { props.follow(user.id); }} className="btn btn-success">FOLLOW</button>
                )}
              </div>
            </div>
            <div className={s.userInfo}>
              <div className={s.nameAndSta}>
                <div className={s.name}>{user.name}</div>
                <div>{user.status}</div>
              </div>
            </div>
          </div>
        </>
      ))}
      <button className="btn btn-success showmore">SHOW MORE</button>
    </div>
  );
}

export default Users;
