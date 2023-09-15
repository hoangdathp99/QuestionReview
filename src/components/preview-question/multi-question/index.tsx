import React from 'react'
import {IPreviewProp} from '../true-false-question'

const MultiQuestionPreview = ({data}: IPreviewProp) => {
  return (
    <div className='body-modal'>
      <div
        className='questions'
        style={{borderBottom: '1px solid  white'}}
        dangerouslySetInnerHTML={{__html: data?.question_content}}
      />
      <div
        className='answer-wrapper'
        style={{flexDirection: data?.display_type === 'VERTICAL' ? 'row' : 'column'}}
      >
        {data?.answers?.map((e: any, index: number) => (
          <div className='answer' key={index}>
            <div className={`check-button ${e.is_correct && 'checked'}`}></div>
            <div className='desciption'>{e.answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MultiQuestionPreview
