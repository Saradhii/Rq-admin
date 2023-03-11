import React from 'react'

const Pagination2 = ({ postsPerPage2, totalPosts2, paginate2 }) => {
  const pageNumbers2 = [];
  for (let i = 1; i <= Math.ceil(totalPosts2 / postsPerPage2); i++) {
    pageNumbers2.push(i);
  }
  return (
    <>
     <div className='page-line'>
     {pageNumbers2.map(number => (
          <div key={number} className='page-item'>
            <a onClick={() => paginate2(number)} className='link'>
              {number}
            </a>
          </div>
        ))}
     </div>

    {/* <div className='page-line'>
    <div className="py-2">
  <nav className="block">
    <ul className="flex pl-0 rounded list-none flex-wrap">
      <li>
        <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
          <i className="fas fa-chevron-left -ml-px"></i>
        </a>
      </li>
      {pageNumbers.map(number => (
          <li>
          <a onClick={() => paginate(number)} className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 text-white bg-pink-500">
          {number}
          </a>
          </li>
        ))}
      <li>
        <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
          <i className="fas fa-chevron-right -mr-px"></i>
        </a>
      </li>
    </ul>
  </nav>
</div>
    </div> */}
    </>
  )
}

export default Pagination2