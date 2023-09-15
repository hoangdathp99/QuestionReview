import React from 'react'

type IProp = {
  value: string
}
const AnswerCard = ({value}: IProp) => {
  return <div className='notched-container'>{value}</div>
}
export default AnswerCard
