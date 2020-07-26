import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function JobSearch({ onChangeParams, params }) {
  return (
    <Form inline>
      <FormControl
        id="description"
        placeholder="description"
        aria-label="description"
        onChange={onChangeParams}
        value={params.description}
        aria-describedby="basic-addon1"
        className="mr-sm-2"
      />
      <FormControl
        id="location"
        placeholder="Location"
        aria-label="Location"
        onChange={onChangeParams}
        value={params.location}
        aria-describedby="basic-addon1"
        className="mr-sm-2"
      />
      <Navbar.Text className="mr-sm-2">Full Time</Navbar.Text>

      <FormControl
        type="checkbox"
        label="Full Time"
        id="full_time"
        onChange={onChangeParams}
      />
    </Form>
  );
}
export default JobSearch;
