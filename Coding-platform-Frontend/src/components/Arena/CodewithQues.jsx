import PropTypes from "prop-types";
import "./CodewithQuestion.css"
import CodeEditor from "../Playground/CodeEditor.jsx"
import OutputDisplay from "../Playground/OutputDisplay.jsx"
import InputArena from "./InputArena.jsx";
const CodewithQues = (props) => {
  return (
    <>
    <div className="Ques-layout">
      <h1>{props.quesname}</h1>
      <p>{props.ques}</p>
      <p><b>INPUT 1</b></p>
      <p>{props.input1}</p>
      <p><b>OUTPUT 1</b></p>
      <p>{props.output1}</p>
      <p><b>INPUT 2</b></p>
      <p>{props.input2}</p>
      <p><b>OUTPUT 2</b></p>
      <p>{props.output2}</p>
      <p><b>CONSTRAINTS</b></p>
      <p>{props.constraints}</p>
    </div>
    <div className="layout-compiler">
        <div className="edit-compiler">
            <CodeEditor/>
            <InputArena input1={props.input1} output1={props.output1} input2={props.input2} output2={props.output2}/>
        </div>
        <div className="output-compiler">
            <OutputDisplay/>
        </div>
    </div>
    </>
  )
}

CodewithQues.propTypes = {
    input1: PropTypes.string,
    output1: PropTypes.string,
    output2: PropTypes.string,
    constraints: PropTypes.string,
    ques:PropTypes.string.isRequired,
    input2:PropTypes.string,
    quesname: PropTypes.string.isRequired,
};


export default CodewithQues