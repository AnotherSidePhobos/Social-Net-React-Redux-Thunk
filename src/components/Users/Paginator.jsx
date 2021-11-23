import React, {useEffect, useState} from "react";
import s from './Users.module.css';

function Paginator(props) {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
 
    let pages = [];

    for (let i = 1; i <= pagesCount ; i++) {
        pages.push(i);
    }
    let portionSize = 10;

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumer = ((portionNumber - 1) * portionSize + 1);
    const rightPortionPageNumer = (portionNumber * portionSize);

    const goPrev = (e) => {
      setPortionNumber(portionNumber - 1)
    }
    const goNext = (e) => {
      setPortionNumber(portionNumber + 1)
    }

    useEffect(() => {
      setPortionNumber(Math.ceil(props.currentPage/portionSize))
    }, [props.currentPage])


    return (
    <div>
      <div className={s.pagination}>
        {portionNumber > 1 && <button onClick={goPrev}>Prev</button>}
        
        {pages
        .filter(p => p >= leftPortionPageNumer && p <= rightPortionPageNumer)
        .map((p) => {
          return (
            <span
              onClick={() => {
                debugger
                setPortionNumber(portionNumber + 1);
                props.onPageClick(p);
                
              }}
              className={props.currentPage === p && s.selected_page}
            >
              {p}
            </span>
          );
        })}
        {portionCount > portionNumber && <button onClick={goNext}>Next</button>}
        
      </div>
    </div>
  );
}

export default Paginator;
