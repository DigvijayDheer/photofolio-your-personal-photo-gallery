import React from "react";
import AlbumCover from "../../images/album-cover.png";
import styles from "./albumCard.module.css";
import { Card } from "react-bootstrap";

function AlbumCard() {
  return (
    <>
      <Card className={`text-center ${styles.custom_card_styles}`}>
        <Card.Header className={styles.custom_card_header}>
          <Card.Img
            variant="top"
            src={AlbumCover}
            className={styles.album_cover}
          />
        </Card.Header>
        <Card.Body className={styles.custom_card_body}>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default AlbumCard;
