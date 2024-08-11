import CodeEditor from "./CodeEditor"
import { useState } from "react"
import "./Compiler.css"
import EditorInput from "./EditorInput"
import OutputDisplay from "./OutputDisplay"

const Compiler = () => {
  const [input, setinput] = useState();
  return (
    <>
    <div className="layout-compiler">
        <div className="edit-compiler">
            <CodeEditor input={input}/>
            <EditorInput Setinput={setinput}/>
        </div>
        <div className="output-compiler">
            <OutputDisplay/>
        </div>
    </div>

    </>
  )
}

export default Compiler
