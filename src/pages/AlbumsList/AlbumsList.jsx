import React, { useState } from "react";
import styles from "./albumsList.module.css";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import { Col, Row } from "react-bootstrap";
import Button from "../../components/Button/Button";
import AlbumForm from "../../components/AlbumForm/AlbumForm";

function AlbumsList() {
  const [showAlbumForm, setShowAlbumForm] = useState(false);

  const albumFormToggler = () => {
    setShowAlbumForm(!showAlbumForm);
  };

  return (
    <>
      <div className={styles.custom_row}>
        <h4>Your Albums</h4>
        <Button
          onClick={albumFormToggler}
          type={showAlbumForm ? "secondary_danger" : "secondary_success"}
        >
          {showAlbumForm ? "Cancel" : "Add Album"}
        </Button>
      </div>
      {showAlbumForm && <AlbumForm />}
      <div>
        <Row xs={1} sm={2} md={4} lg={5} className="g-3">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col key={idx}>
              <AlbumCard />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default AlbumsList;
