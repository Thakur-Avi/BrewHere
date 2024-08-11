import "./EditorInput.css"
import propTypes from "prop-types";
import { useRef } from "react"

const EditorInput = ({Setinput}) => {
      const Input= useRef();
  return (
    <>
    <div className="input-layout">
    <div>
        <h3>Input 1</h3>
        <textarea ref={Input} onChange={()=>{Setinput(Input.current.value);}}></textarea>
    </div>
    <div>
        <h3>Input 2</h3>
        <textarea></textarea>
    </div>
    <div>
        <h3>Input 3</h3>
        <textarea></textarea>
    </div>
    </div>
        </>
  )
}
EditorInput.propTypes = {
    Setinput: propTypes.string
};

export default EditorInput
