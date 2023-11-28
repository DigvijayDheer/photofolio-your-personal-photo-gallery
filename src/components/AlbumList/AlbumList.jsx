import React from "react";
import Styles from "./AlbumList.module.css";
import Album from "../Album/Album";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../Button/Button";
import AlbumForm from "../AlbumForm/AlbumForm";

function AlbumList() {
  return (
    <Container>
      <AlbumForm />
      <div className={Styles.custom_row}>
        <h4>Your Albums</h4>
        <Button type="secondary_success">Add Album</Button>
      </div>
      <div>
        <Row xs={1} sm={2} md={4} lg={5} className="g-3">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col key={idx}>
              <Album />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default AlbumList;
