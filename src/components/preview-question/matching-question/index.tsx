import { IPreviewProp } from '../true-false-question'
import AnswerCard from './answer-card'
import QuestionCard from './question-card'

const MatchingPreview = ({data}: IPreviewProp) => {
  return (
    <div className='body-modal-white'>
      <div
        className='questions'
        style={{borderBottom: '1px solid  white'}}
        dangerouslySetInnerHTML={{__html: data?.question_content}}
      />
      <div className='match-question-content'>
        {data?.question_matchings.map((e: any) => {
          return (
            <div className='row-question-container'>
              <QuestionCard value={e?.content} />
              <AnswerCard value={e?.answer?.answer} />
              {/* <div style={{width:'46%', height:'auto', border: '1px solid'}}></div> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default MatchingPreview
