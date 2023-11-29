import React from "react";
import styles from "./imageForm.module.css";
import Button from "../Button/Button";
import { Row, Col } from "react-bootstrap";

function ImageForm() {
  return (
    <>
      <div className={styles.formContainer}>
        <form>
          <h4 className="m-3 text-center">Add Image to Album_Name</h4>
          <div className={`text-center ${styles.inputContainer}`}>
            <Row className="mt-2">
              <Col>
                <input
                  type="text"
                  id="imageId"
                  name="albumName"
                  placeholder="Album Name"
                  className={styles.input}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <input
                  type="url"
                  id="linkId"
                  name="imageLink"
                  placeholder="Image URL"
                  className={styles.input}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button type="primary_danger">Clear</Button>
                <Button type="primary_success">Add</Button>
              </Col>
            </Row>
          </div>
        </form>
      </div>
    </>
  );
}

export default ImageForm;
