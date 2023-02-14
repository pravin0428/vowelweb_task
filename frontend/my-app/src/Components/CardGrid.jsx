import { Box, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import styles from "./CardGrid.module.css";
// import { ModalComponent } from "./ModalComponent";

export default function CardGrid({ proImage, title, dis }) {
  return (
    <div className={styles.main}>
      <div className={styles.child}>
        <img src={proImage} />
        <h2>{title}</h2>
        <p> {dis} </p>
      </div>
    </div>
  );
}
