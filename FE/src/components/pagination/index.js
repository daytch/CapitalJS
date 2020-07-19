import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Pagination(props){
  const {totalPage} = props;
  const [currentPage, setCurrentPage] = React.useState(1);
  const onPageChange = (nextPage) => {
    if(currentPage === nextPage) return;
    setCurrentPage(nextPage);
  }
  
  let items = []
  for(let i = 1; i <= totalPage; i++){
    items.push(<li key={i} className={"pagination-item " + (i===currentPage && "active")} onClick={() => onPageChange(i)}>{i}</li>)
  }
  return(
    <div className="pagination-container">
      <ul className="pagination">
        {
          currentPage>1 &&
          <li className="pagination-item prev" onClick={() => onPageChange(currentPage-1)}>
            <FontAwesomeIcon icon="arrow-left" />
          </li>
        }
        {items}
        {
          currentPage<totalPage &&
          <li className="pagination-item next" onClick={() => onPageChange(currentPage+1)}>
            <FontAwesomeIcon icon="arrow-right" />
          </li>
        }
      </ul>
    </div>
  )
}

export default Pagination;