import React from "react";
import Category from "./Category.jsx";
import { Card, Row, Col, Button } from "react-bootstrap";

function Dashboard() {
  return (
    <Col className="d-flex w-100">
      <Category />
    </Col>
  );
}

export default Dashboard;
