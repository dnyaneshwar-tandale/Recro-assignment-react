import React from "react";
import styles from "./CardPage.module.scss";
import { dummyData, ROUTE } from "../../../configs/constants/constant";
import { useHistory } from "react-router";
import ProductCard from "../../../components/ProductCard/ProductCard";
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
        {(dummyData || []).map((card) => {
          return <ProductCard card={card} />;
        })}
      </div>
    </div>
  );
};

export default CardPage;
