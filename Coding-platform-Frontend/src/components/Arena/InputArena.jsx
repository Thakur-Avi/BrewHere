import "./InputArena.css"
import PropTypes from "prop-types";
const InputArena = (props) => {
  return (
    <>
    <div className="inputarena-layout ">
    <div>
        <h3>Input 1</h3>
        <div className="showinput">{props.input1}</div>
        <h3>Output 1</h3>
        <div className="showinput">{props.output1}</div>

    </div>
    <div>
        <h3>Input 2</h3>
        <div className="showinput">{props.input2}</div>
        <h3>Output 2</h3>
        <div className="showinput">{props.output2}</div>
    </div>
    </div>
        </>

  )
}

InputArena.propTypes = {
    input1: PropTypes.string,
    input2: PropTypes.string,
    output1: PropTypes.string,
    output2: PropTypes.string,
};
export default InputArena