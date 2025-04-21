import React from 'react';
import clsx from 'clsx';
import styles from './style';

const Container = ({ children, isResume = false }) => {
  return (
    <div className={clsx(isResume ? styles.resumeContainer : 'container-ori')}>
        {children}
    </div>
  )
}

export default Container