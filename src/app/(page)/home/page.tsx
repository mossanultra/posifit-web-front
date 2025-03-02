import React from "react";
import styles from "./home.module.css";
import LeftBar from "@/feature/leftbar/compornent/left-bar";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      {/* 左サイドバー */}
      <aside className={`${styles.sidebar} ${styles.leftSidebar}`}>
        <LeftBar/>
      </aside>

      {/* センターメインコンテンツ */}
      <main className={styles.mainContent}>
        {/* 投稿入力エリア */}
        <div className={styles.postInput}>
          <textarea
            placeholder="今何してる？"
            className={styles.textarea}
          ></textarea>
          <button className={styles.button}>投稿</button>
        </div>
        {/* 投稿一覧 */}
        <div className={styles.posts}>
          <div className={styles.post}>
            <h3>ユーザー1</h3>
            <p>これはサンプルの投稿です。</p>
          </div>
          <div className={styles.post}>
            <h3>ユーザー2</h3>
            <p>こちらもサンプル投稿です。</p>
          </div>
          {/* 必要に応じてさらに投稿を追加 */}
        </div>
      </main>

      {/* 右サイドバー */}
      <aside className={`${styles.sidebar} ${styles.rightSidebar}`}>
        <div className={styles.sidebarContent}>
          <h2>トレンド</h2>
          <ul>
            <li>#React</li>
            <li>#TypeScript</li>
            <li>#Web開発</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default App;
