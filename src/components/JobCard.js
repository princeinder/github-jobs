import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ReactMarkdown from "react-markdown";

function JobCard({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <Col xs={12} md={12}>
      <Card style={{ marginTop: 20 }}>
        <Card.Body>
          <div
            className="job-pre"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="company-logo col-md-2">
              <Image
                src={job.company_logo}
                roundedCircle
                alt={job.company}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="company-title col-md-4">
              <Card.Title>{job.title}</Card.Title>
              <p>
                <Image src="/location.jpg" alt="location" height="20" />
                {job.location}
              </p>
            </div>
            <div className="company-type col-md-3">
              <Card.Subtitle className="mb-2 text-muted">
                {job.company}
              </Card.Subtitle>
              <Badge variant="secondary" className="mr-2">
                {job.type}
              </Badge>
            </div>
            <div className="company-view col-md-3">
              <Button
                variant="dark"
                className="mr-2 "
                onClick={() => setOpen((prevOpen) => !prevOpen)}
              >
                {!open ? "View Details" : "Hide details"}
              </Button>
              <a
                className="btn btn-dark"
                _target="blank"
                href={job.how_to_apply}
              >
                Apply Now
              </a>
            </div>
          </div>

          <Collapse in={open}>
            <div className="mt-4">
              <ReactMarkdown source={job.description} />
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default JobCard;
