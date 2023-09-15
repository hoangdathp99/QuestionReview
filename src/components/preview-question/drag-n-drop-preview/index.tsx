import React from 'react'
import {IPreviewProp} from '../true-false-question'
// import "./AddWordPreview.scss"
import "./DragDropPreview.scss"
const DragNDropPreivew = ({data}: IPreviewProp) => {
    const str = data?.question_content
    const cutBlank = (str:string) => {
        const regex = /\[[^\]]*\]/g
        const matches = [...str.matchAll(regex)]
       return matches
        
    }
    const listBlank = cutBlank(str)
    console.log(listBlank);
    
    let newStr = str
    for(let e in listBlank){
        newStr = newStr.replace(listBlank?.[e]?.[0], `<span> </span><input type="text" class="input-underline-preview" disabled placeholder="(${+e+1})"/><span> </span>`);
    }

  return (
    <div className='body-modal-white'>
      <div
        className='questions'
        // style={{borderBottom: '1px solid  white'}}
        dangerouslySetInnerHTML={{__html: newStr}}
      />
      <div className='answer-area'>
            {data?.answers?.map((e:any)=>{
                return (
                    <div className='answer-box'>{e.answer}</div>
                )
            })}
      </div>
    </div>
  )
}
export default DragNDropPreivew
