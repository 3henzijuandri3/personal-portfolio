import React from "react";
import clsx from "clsx";
import styles from "./styles";

const CertificationCard = ({ certificationData, isLast }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <p className={styles.name}>{certificationData.name}</p>
          <p className={styles.organizer}>{certificationData.organizer}</p>
        </div>
        <p className={styles.period}>{certificationData.period}</p>
      </div>
      <p className={styles.description}>{certificationData.description}</p>
    </div>
  );
};

export default CertificationCard;
