import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/ext-language_tools';

const JsEditor = () => {
  return (
    <>
    <AceEditor
      placeholder='Write your JavaScript code here!'
      mode='javascript'
      theme='monokai'
      name='editor_javascript'
      fontSize='16'
      height={'100%'}
      width={'100%'}
      showPrintMargin={false}
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
  )
}

export default JsEditor