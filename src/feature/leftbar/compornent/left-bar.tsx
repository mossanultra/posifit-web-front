import React from "react";
import { FaHome, FaBell, FaEnvelope, FaUser } from "react-icons/fa";
import styles from "./left-bar.module.css";

const LeftBar: React.FC = () => {
  return (
    <div className={styles.sidebarContent}>
      <h2 className={styles.menuTitle}>メニュー</h2>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <FaHome className={styles.icon} />
          ホーム
        </li>
        <li className={styles.menuItem}>
          <FaBell className={styles.icon} />
          通知
        </li>
        <li className={styles.menuItem}>
          <FaEnvelope className={styles.icon} />
          メッセージ
        </li>
        <li className={styles.menuItem}>
          <FaUser className={styles.icon} />
          プロフィール
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
