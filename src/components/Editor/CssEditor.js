import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/ext-language_tools';

import { EditorContext } from '../../context/context';
import { useContext } from 'react';

const CssEditor = () => {
  const { css, setCss } = useContext(EditorContext);

  return (
    <>
      <AceEditor
        placeholder='Write your CSS code here!'
        mode='css'
        theme='monokai'
        name='editor_css'
        fontSize='16'
        height={'100%'}
        width={'100%'}
        value={css}
        onChange={(value) => setCss(value)}
        showPrintMargin={true}
        showGutter={false}
        highlightActiveLine={true}
        setOptions={{
          useWorker: false,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          tabSize: 2,
        }}
      />
    </>
  );
};

export default CssEditor;
