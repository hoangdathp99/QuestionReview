import React from 'react'

type IProp = {
  value: string
}
const QuestionCard = ({value}: IProp) => {
  return <div className='arrowed-container'>{value}</div>
}
export default QuestionCard
