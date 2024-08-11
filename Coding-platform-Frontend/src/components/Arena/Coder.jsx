/* eslint-disable react/jsx-key */
import { useLocation } from "react-router-dom"
import QuestionArray from "../../shared/QuestionArray";
import CodewithQues from "./CodewithQues";

const Coder = () => {
    const location = useLocation();
    const uniqueid =location.state?.name1.unique;
    const filter = uniqueid ? QuestionArray.filter(ques=>ques.questionid === uniqueid) : undefined;
  return (
    <div>
        {filter.map((Detail)=>{
          return (
            <CodewithQues {...Detail}/>
          )})} 
    </div>
  )
}

export default Coder