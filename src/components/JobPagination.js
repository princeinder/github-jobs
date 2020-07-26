import React from "react";
import Pagination from "react-bootstrap/Pagination";

function JobPagination({ page, prevPage, nextPage, setPage }) {
  return (
    <Pagination>
      {page !== 1 ? <Pagination.Prev onClick={() => prevPage(page)} /> : ""}
      {/* <Pagination.Item active>{page}</Pagination.Item> */}
      {page > 2 && (
        <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
      )}
      {page > 2 && <Pagination.Ellipsis />}
      <Pagination.Item active variant="dark">
        {page}
      </Pagination.Item>
      <Pagination.Item onClick={() => nextPage(page)}>
        {page + 1}
      </Pagination.Item>
      <Pagination.Next onClick={() => nextPage(page)} />
    </Pagination>
  );
}
export default JobPagination;
