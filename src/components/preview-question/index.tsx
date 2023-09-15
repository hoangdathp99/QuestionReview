import AddWordPreview from "./add-word";
import DragNDropPreivew from "./drag-n-drop-preview";
import MatchingPreview from "./matching-question";
import MultiQuestionPreview from "./multi-question";
import SelectWord from "./select-word-preview";
import TrueFalseQuestionPreview from "./true-false-question";

interface IProp {
  type: string;
  data: any;
}
export enum QUESTION_TYPES {
  TRUE_FALSE = "TRUE_FALSE",
  ONE_CHOICE = "ONE_CHOICE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  MATCHING = "MATCHING",
  SELECT_WORD = "SELECT_WORD",
  FILL_WORD = "FILL_WORD",
  DRAG_DROP = "DRAG_DROP",
  ESSAY = "ESSAY",
}
const QuestTionPreview = ({ type, data }: IProp) => {
  const checkType = (data: any, type: string) => {
    switch (type) {
      case QUESTION_TYPES.TRUE_FALSE:
        return <TrueFalseQuestionPreview data={data} />;
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return <MultiQuestionPreview data={data} />;
      case QUESTION_TYPES.MATCHING:
        return <MatchingPreview data={data} />;
      case QUESTION_TYPES.FILL_WORD:
        return <AddWordPreview data={data} />;
      case QUESTION_TYPES.DRAG_DROP:
        return <DragNDropPreivew data={data} />;
      case QUESTION_TYPES.SELECT_WORD:
        return <SelectWord data={data} />;
    }
  };
  console.log(checkType(data, type), type);
  return <>{checkType(data, type)}</>;
};
export default QuestTionPreview;
