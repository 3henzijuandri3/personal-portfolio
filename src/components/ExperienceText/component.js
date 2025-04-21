import React from 'react';
import clsx from 'clsx';
import styles from './styles';

const ExperienceText = ({ experienceData, isLast }) => {
    return (
        <section className={clsx(isLast ? 'mb-0' : 'mb-[14px]')}>
            <div className={styles.header}>
                <p className={styles.company}>{experienceData.company ?? experienceData.organization}</p>
                <p className={styles.period}>{experienceData.period}</p>
            </div>
            <p className={styles.title}>{experienceData.title}</p>
            <ul
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: experienceData.description }}
            ></ul>
            <div className={styles.badgeWrapper}>
                <div className={styles.badge}>
                    <p className={styles.badgeText}>{experienceData.badge}</p>
                </div>
                <div className={styles.badge}>
                    <p className={styles.badgeText}>{experienceData.location}</p>
                </div>
            </div>
        </section>
    )
}

export default ExperienceText;