import React, { useState } from 'react';
import details from './json/details.json'
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import { saveAs } from 'file-saver';

function Editjson(){
    const [jsonContent, setJsonContent] = useState(JSON.stringify({details}, null, 2));

  const handleEditorChange = (newValue) => {
    setJsonContent(newValue);
  };

  const handleSave = () => {
    try {
      const parsedJson = JSON.parse(jsonContent);
      const jsonString = JSON.stringify(parsedJson, null, 2);

      // Create a Blob with the JSON content
      const blob = new Blob([jsonString], { type: 'application/json' });

      // Trigger a file download
      saveAs(blob, 'details.json');
    } catch (error) {
      console.error('Error saving JSON:', error);
    }
  };

  return (
    <div>
      <AceEditor
        mode="json"
        theme="monokai"
        value={jsonContent}
        onChange={handleEditorChange}
        name="json-editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="500px"
      />
      <button onClick={handleSave}>Save JSON</button>
    </div>
  );
};

export default Editjson;