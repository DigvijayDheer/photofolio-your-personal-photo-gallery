import React from "react";
import Button from "../Button/Button";
import Styles from "./AlbumForm.module.css";
import { Row, Col } from "react-bootstrap";

function AlbumForm() {
  return (
    <div className={`mt-5 ${Styles.formContainer}`}>
      <form>
        <h4 className="m-3 text-center">Create an Album</h4>
        <div className={Styles.inputContainer}>
          <Row className="mx-0">
            <Col xs={12} md={8} lg={9} className="mb-3 mb-md-0">
              <input
                type="text"
                id="albumId"
                name="albumName"
                placeholder="Album Name"
                className={Styles.input}
              />
            </Col>
            <Col xs={12} md={4} lg={3} className="m-auto">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-center">
                <Button type="primary_danger">Clear</Button>
                <Button type="primary_success">Create</Button>
              </div>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
}

export default AlbumForm;
