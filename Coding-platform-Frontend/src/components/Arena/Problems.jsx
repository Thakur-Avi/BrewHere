import "./Problems.css"
import QuestionArray from "../../shared/QuestionArray"
import ShowProblems from "./ShowProblems"
const Problems = () => {
  return (
    <div className="layout-pro">
        <div className="container-pro">
            <table className="table-pro">
                <tr>
                    <th style={{width:"4%"}}></th>
                    <th style={{width:"8%"}}>#</th>
                    <th style={{width:"50%"}}>Problem Name</th>
                </tr>
            </table>
                {QuestionArray.map((item,key)=>{
                        return <ShowProblems key={key} unique={item.questionid} id={key} quesname={item.quesname} />
                })}
        </div>
    </div>
  )
}

export default Problems