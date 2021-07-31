import React from "react";
import styles from "./CardPage.module.scss";
import { ROUTE } from "../../../configs/constants/constant";
import { useHistory } from "react-router";
const CardPage = () => {
  const history = useHistory();
  const onSubmit = () => {
    history.push({
      pathname: ROUTE.landingPage,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.card}>Product Cards</div>
      </div>
    </div>
  );
};

export default CardPage;
