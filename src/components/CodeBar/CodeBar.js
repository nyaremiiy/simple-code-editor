import { useState } from 'react';
import styles from './CodeBar.module.css';

const CodeBar = () => {
  const [activeTab, setActiveTab] = useState('html');

  return (
    <div className={styles.codebar}>
      <nav className={styles.tab}>
        <button
          className={`${styles.item} ${
            activeTab === 'html' ? styles.activeTab : ''
          }`}
          onClick={() => setActiveTab('html')}
        >
          html
        </button>
        <button
          className={`${styles.item} ${
            activeTab === 'css' ? styles.activeTab : ''
          }`}
          onClick={() => setActiveTab('css')}
        >
          css
        </button>
        <button
          className={`${styles.item} ${
            activeTab === 'js' ? styles.activeTab : ''
          }`}
          onClick={() => setActiveTab('js')}
        >
          js
        </button>
      </nav>
    </div>
  );
};

export default CodeBar;
