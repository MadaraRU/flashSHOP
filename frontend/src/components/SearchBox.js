import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex" inline>
      <Form.Control
        type="test"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Proudct"
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-secondary" className="py-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
