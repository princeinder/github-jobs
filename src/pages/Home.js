import React, { useState } from "react";
import { useGetJobs } from "../action/job";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import JobCard from "../components/JobCard";
import JobSearch from "../components/JobSearch";
import JobPagination from "../components/JobPagination";
import Navbar from "react-bootstrap/Navbar";
import "./Home.css";

function Home() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading } = useGetJobs(params, page);
  function prevPage(page) {
    setPage(page - 1);
  }
  function nextPage() {
    setPage(page + 1);
  }
  function onChangeParams(e) {
    const param = e.target.id;
    const value = e.target.value;
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Container>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">Github Jobs</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <JobSearch onChangeParams={onChangeParams} params={params} />
        </Navbar.Collapse>
      </Navbar>
      <div className="job-pagination" style={{ marginTop: 20 }}>
        <JobPagination
          page={page}
          setPage={setPage}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
      <div className="job-listing">
        {loading ? (
          <div className="loader" style={{ textAlign: "center" }}>
            <Spinner
              animation="border"
              variant="dark"
              style={{ textAlign: "center" }}
            />
          </div>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
      <div className="job-pagination">
        <JobPagination
          page={page}
          setPage={setPage}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </Container>
  );
}

export default Home;
