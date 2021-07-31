import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
interface cardType {
  card: any;
}
const ProductCard = (props: cardType) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreLess = () => {
    setShowMore(!showMore);
  };

  const { card } = props;
  return (
    <div className={styles.card}>
      <div className={styles.id}>{card.id}</div>
      <div className={styles.title}>{card.title}</div>
      <div className={styles.description}>
        <span>
          <span>{!showMore ? card.body.substring(1, 100) : card.body}</span>
          {!showMore && (
            <span
              className={styles.show_text}
              onClick={(e) => handleShowMoreLess()}
            >
              {" ...Show more"}
            </span>
          )}
          {showMore && (
            <span
              className={styles.show_text}
              onClick={(e) => handleShowMoreLess()}
            >
              {" ...Show less"}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
