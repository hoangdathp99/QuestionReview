import { IPreviewProp } from "../true-false-question"
import "./SelectWordPreview.scss"
const SelectWord = ({data}: IPreviewProp) => {
    const str = data?.question_content
    const cutBlank = (str:string) => {
        const regex = /\[[^\]]*\]/g
        const matches = [...str.matchAll(regex)]
       return matches
        
    }
    const formatAnswer = (data:any) => {
        let objAnswer:any = {}
        for (let e of data?.answers){
            if(!objAnswer[e.answer_position]){
                objAnswer[e.answer_position]=[]
            }
            objAnswer[e.answer_position].push({
                label: e.answer,
                value: e.answer,
                result: e.is_correct
            })
        }
        return objAnswer
    }
    const listBlank = cutBlank(str)
    const answerObj = formatAnswer(data)
    console.log(listBlank, answerObj);
    let newStr = str;
    for(let e in listBlank){
        newStr = newStr.replace(listBlank?.[e]?.[0], 
        `<span> </span>
        <select class="select--selectword-preview">
        <option value="">Choose...</options>
        ${answerObj[+e+1].map((e:any)=>{
            return `<option value=${e.value}>${e.label}</option>`
        })}
        </select>
        <span> </span>`);
    }
    console.log(newStr);
    
    return (
        <div className='body-modal-blue'>
      <div
        className='questions'
        // style={{borderBottom: '1px solid  white'}}
        dangerouslySetInnerHTML={{__html: newStr}}
      />
    </div>
    )
}
export default SelectWord