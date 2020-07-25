import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function JobCard({ job }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Text>{job.company}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
