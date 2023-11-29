import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./imageList.module.css";
import Button from "../../components/Button/Button";
import { Col, Image, Row } from "react-bootstrap";
import BackIcon from "../../images/back.png";
import DummyImage from "../../images/dummy.png";
import ImageForm from "../../components/ImageForm/ImageForm";

function ImageList() {
  const [showImageForm, setShowImageForm] = useState(false);
  const navigate = useNavigate();

  const imageFormToggler = () => {
    setShowImageForm(!showImageForm);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="my-3 text-center pt-3 d-md-flex justify-content-md-between">
        <button className={styles.backButton} onClick={goBack}>
          <Image src={BackIcon} />
        </button>
        <h4 className="mb-3 mb-md-0">
          Oops! It looks like this album is empty.
        </h4>
        <Button
          onClick={imageFormToggler}
          type={showImageForm ? "secondary_danger" : "secondary_success"}
        >
          {showImageForm ? "Cancel" : "Add Image"}
        </Button>
      </div>

      {showImageForm && <ImageForm />}

      <div className={`my-5 ${styles.imageContainer}`}>
        <Row>
          <Col xs={6} md={3}>
            <Image src={DummyImage} fluid rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={DummyImage} fluid rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={DummyImage} fluid rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={DummyImage} fluid rounded />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={6} md={3}>
            <Image src={DummyImage} fluid rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={DummyImage} fluid rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={DummyImage} fluid rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={DummyImage} fluid rounded />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ImageList;
