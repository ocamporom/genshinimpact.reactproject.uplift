import React from 'react';
import styles from './GenshinPagination.module.css';

const GenshinPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <a
          key={i}
          className={`${styles.page} ${currentPage === i ? styles.active : ''}`}
          onClick={() => handlePageClick(i)}
          href="#"
        >
          {i}
        </a>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={styles.pagination}>
      <a
        href="#"
        className={`${styles.prev} ${currentPage === 1 ? styles.disabled : ''}`}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        &lsaquo;
      </a>
      {renderPageNumbers()}
      <a
        href="#"
        className={`${styles.next} ${currentPage === totalPages ? styles.disabled : ''}`}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        &rsaquo;
      </a>
    </div>
  );
};

export default GenshinPagination;


// import React, { useState } from 'react';
// import styles from './GenshinPagination.module.css';

// const GenshinPagination = ({ currentPage, totalPages, onPageChange }) => {
//   // Function to handle page click
//   const handlePageClick = (page) => {
//     onPageChange(page);
//   };

//   // Generate page numbers based on totalPages
//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <a
//           key={i}
//           className={`${styles.page} ${currentPage === i ? styles.active : ''}`}
//           onClick={() => handlePageClick(i)}
//           href="#"
//         >
//           {i}
//         </a>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div className={styles.pagination}>
//       <a
//         href="#"
//         className={`${styles.prev} ${currentPage === 1 ? styles.disabled : ''}`}
//         onClick={() => handlePageClick(currentPage - 1)}
//       >
//         &lsaquo;
//       </a>
//       {renderPageNumbers()}
//       <a
//         href="#"
//         className={`${styles.next} ${currentPage === totalPages ? styles.disabled : ''}`}
//         onClick={() => handlePageClick(currentPage + 1)}
//       >
//         &rsaquo;
//       </a>
//     </div>
//   );
// };

// export default GenshinPagination;



// import React from 'react';
// import styles from './GenshinPagination.module.css';

// const GenshinPagination = ({ currentPage, totalPages, onPageChange }) => {
//   // Function to handle page click
//   const handlePageClick = (page) => {
//     if (typeof onPageChange === 'function') {
//       onPageChange(page);
//     } else {
//       console.error('onPageChange is not a function');
//     }
//   };

//   // Generate page numbers based on totalPages
//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <a
//           key={i}
//           className={`${styles.page} ${currentPage === i ? styles.active : ''}`}
//           onClick={() => handlePageClick(i)}
//           href="#"
//         >
//           {i}
//         </a>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div className={styles.pagination}>
//       <a
//         href="#"
//         className={`${styles.prev} ${currentPage === 1 ? styles.disabled : ''}`}
//         onClick={() => handlePageClick(currentPage - 1)}
//       >
//         &lsaquo;
//       </a>
//       {renderPageNumbers()}
//       <a
//         href="#"
//         className={`${styles.next} ${currentPage === totalPages ? styles.disabled : ''}`}
//         onClick={() => handlePageClick(currentPage + 1)}
//       >
//         &rsaquo;
//       </a>
//     </div>
//   );
// };

// export default GenshinPagination;