import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWarpper } from '../../Popper';
const cx = classNames.bind(styles);
console.log(cx);
const Header = () => {
  return (
    <header className={cx('wrap')}>
      <div className={cx('container', 'd-flex')}>
        <div className={cx('box-logo')}>
          <div className={cx('logo')}>
            <img src={images.logo.default} alt="logo" />
          </div>
        </div>
        <Tippy
          interactive
          render={(attrs) => (
            <div className={cx('box-show-search')} tabIndex="-1" {...attrs}>
              <PopperWarpper>
                <h2>Popper</h2>
              </PopperWarpper>
            </div>
          )}
        >
          <div className={cx('box-search')}>
            <div className={cx('search')}>
              <input className={cx('input-search')} type="text" placeholder="Search for you" />
              <button className={cx('btn-remove')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <span className={cx('loadding')}>
                <FontAwesomeIcon icon={faSpinner} />
              </span>
              <Tippy content="Tìm kiếm" theme="light">
                <button className={cx('btn-search')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </Tippy>
            </div>
          </div>
        </Tippy>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
};

export default Header;
