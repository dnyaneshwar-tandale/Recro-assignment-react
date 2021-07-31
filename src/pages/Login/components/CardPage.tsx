import React, { useEffect, useState } from "react";
import styles from "./CardPage.module.scss";
import { dataAPIs } from "../../../configs/constants/constant";
import ProductCard from "../../../components/ProductCard/ProductCard";
import axios from "axios";

const CardPage = () => {
  const [pageoffsetBottom, setPageoffsetBottom] = useState(1);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetAPI = async () => {
      await fetchInitialData();
    };
    fetAPI();
  }, []);

  const fetchInitialData = async () => {
    const response: any = await axios.get(
      `${dataAPIs.pagination}${pageoffsetBottom}&${dataAPIs.limit}=${10}`
    );
    setData([...data, ...response.data]);
    setPageoffsetBottom(pageoffsetBottom + 1);
  };

  /**
   * Checking scroll is reached Bottom or not
   */
  const isBottom = (event) => {
    return (
      event.target.scrollHeight - event.target.clientHeight ===
      event.target.scrollTop
    );
  };

  const displayScrollData = async (event) => {
    if (isBottom(event)) {
      //onscroll loading data
      const response: any = await axios.get(
        `${dataAPIs.pagination}${pageoffsetBottom}&${dataAPIs.limit}=${10}`
      );

      setData([...data, ...response.data]);
      setPageoffsetBottom(pageoffsetBottom + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.page_title}>Product cards</div>
      <div onScroll={(e) => displayScrollData(e)} className={styles.wrapper}>
        {(data || []).map((card) => {
          return <ProductCard card={card} />;
        })}
      </div>
    </div>
  );
};

export default CardPage;
