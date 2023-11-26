import React from "react";
import AlbumCover from "../../images/album-cover.png";
import Styles from "./Album.module.css";
import { Card } from "react-bootstrap";

function Album() {
  return (
    <>
      <Card className={`text-center ${Styles.custom_card_styles}`}>
        <Card.Header className={Styles.custom_card_header}>
          <Card.Img
            variant="top"
            src={AlbumCover}
            className={Styles.album_cover}
          />
        </Card.Header>
        <Card.Body className={Styles.custom_card_body}>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default Album;
