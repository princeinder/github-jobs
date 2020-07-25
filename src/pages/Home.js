import React, { useState, useEffect } from "react";
import { useGetJobs } from "../action/job";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import JobCard from "../components/JobCard";
import JobPagination from "../components/JobPagination";

function Home() {
  const [params] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading } = useGetJobs(params, page);
  useEffect(() => {});

  if (loading)
    return (
      <Container>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  return (
    <Container>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <JobPagination page={page} setPage={setPage} />
    </Container>
  );
}

export default Home;
