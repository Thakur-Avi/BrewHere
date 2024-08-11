import CodeEditor from "./CodeEditor"
import "./Compiler.css"
import EditorInput from "./EditorInput"
import OutputDisplay from "./OutputDisplay"

const Compiler = () => {
  return (
    <>
    <div className="layout-compiler">
        <div className="edit-compiler">
            <CodeEditor/>
            <EditorInput/>
        </div>
        <div className="output-compiler">
            <OutputDisplay/>
        </div>
    </div>

    </>
  )
}

export default Compiler