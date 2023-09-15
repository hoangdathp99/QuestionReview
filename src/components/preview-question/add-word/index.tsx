import React from 'react'
import {IPreviewProp} from '../true-false-question'
import "./AddWordPreview.scss"

const AddWordPreview = ({data}: IPreviewProp) => {
    const str = data?.question_content
    let newStr = str.replace(/\[[^\]]*\]/g, '<span> </span><input type="text" class="input-preview" disabled/><span> </span>');
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
export default AddWordPreview
