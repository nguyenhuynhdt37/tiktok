import React from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const SideBar = () => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('content')}>
        <h1>side bar</h1>
      </div>
    </div>
  );
};

export default SideBar;
