import { useState } from 'react';
import styles from './CodeBar.module.css';
import HtmlEditor from '../Editor/HtmlEditor';
import CssEditor from '../Editor/CssEditor';
import JsEditor from '../Editor/JsEditor';

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
      <div className={styles.editor}>
        {activeTab === 'html' ? (
          <HtmlEditor />
        ) : activeTab === 'css' ? (
          <CssEditor />
        ) : (
          <JsEditor />
        )}
      </div>
    </div>
  );
};

export default CodeBar;
