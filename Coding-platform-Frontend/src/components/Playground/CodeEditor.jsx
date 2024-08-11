import "./CodeEditor.css"
import { oneDark } from '@codemirror/theme-one-dark';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor = () => {
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
                    <button className="editorbutton">Reset</button>
                    </div>
                    </div>
                <div className="editor-layout">
                    <CodeMirror
                        value="#include <iostream>
using namespace std;
int main() {
    cout << &quot;Hello, World!&quot;;
    return 0;
}"
                        height="524px"
                        theme={oneDark}
                        extensions={[javascript({ jsx: true })]}
                    />
                </div>
            </div>
        </>
    )
}

export default CodeEditor