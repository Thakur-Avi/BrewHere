import PropTypes from "prop-types";
import "./ShowProblems.css"
import { useNavigate } from 'react-router-dom';

const ShowProblems = ({ key,unique, id, quesname }) => {
  let navigate= useNavigate();
  const update = (unique) => {
    navigate('/code', { state: { name1: unique } });
  }
    return (
        <table key={key}>
            {/* <tbody> */}
                <tr >
                    <td style={{width:"4%"}}></td>
                    <td style={{width:"8%"}}>{id+1}</td>
                    <td style={{width:"50%"}} onClick={()=>update({unique})}>{quesname}</td>
                </tr>
            {/* </tbody> */}
        </table>
    );
}

ShowProblems.propTypes = {
    id: PropTypes.number,
    key:PropTypes.string,
    unique:PropTypes.string,
    quesname: PropTypes.string.isRequired,
};

export default ShowProblems;
