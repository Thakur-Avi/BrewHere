import "./CodeEditor.css"
import { oneDark } from '@codemirror/theme-one-dark';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from "react";

const CodeEditor = () => {
    const [value1, setValue] = useState(`#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`);
    const onChange=useCallback((val)=>{
        console.log('val ',val);
        setValue(val);

    },[]);
    const resetbutton=()=>{
        setValue(`#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`);
    }
    return (
        <>
            <div className="container-editor">
                <div className="select-editor">
                    <div>
                    <select>
                        <option>C++</option>
                        <option>Java</option>
                        <option>Python</option>
                    </select></div>
                    <div>
                    <button className="editorbutton">Run</button>
                    <button className="editorbutton" onClick={resetbutton}>Reset</button>
                    </div>
                    </div>
                <div  className="editor-layout">
                    <CodeMirror
                        value={value1}
                        height="524px"
                        theme={oneDark}
                        extensions={[javascript({ jsx: true })]}
                        onChange={onChange}
                    />
                </div>
            </div>
        </>
    )
}

export default CodeEditor
