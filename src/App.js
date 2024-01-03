import CodeBar from './components/CodeBar/CodeBar';
import { EditorProvider } from './context/context';
import styles from './App.module.css';
import Header from './components/Header/Header';

function App() {
  return (
    <EditorProvider>
      <CodeBar />
      <div className={styles.main}>
        <Header />
      </div>
    </EditorProvider>
  );
}

export default App;
