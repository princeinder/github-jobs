import React from "react";
import Pagination from "react-bootstrap/Pagination";

function JobPagination({ page, setPage }) {
  function prevPage(page) {
    setPage(page - 1);
  }
  function nextPage() {
    setPage(page + 1);
  }

  return (
    <Pagination>
      {page !== 1 ? <Pagination.Prev onClick={() => prevPage(page)} /> : ""}
      <Pagination.Item active>{page}</Pagination.Item>
      <Pagination.Next onClick={() => nextPage(page)} />
    </Pagination>
  );
}
export default JobPagination;
