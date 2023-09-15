import "./TrueFalseQuestion.scss";
export type IPreviewProp = {
  data: any;
};
const TrueFalseQuestionPreview = ({ data }: IPreviewProp) => {
  return (
    <div className="body-modal">
      <div
        className="questions"
        style={{ borderBottom: "1px solid  white" }}
        dangerouslySetInnerHTML={{ __html: data?.question_content }}
      ></div>
      <div
        className="answer-wrapper"
        style={{
          flexDirection: data?.display_type === "VERTICAL" ? "row" : "column",
        }}
      >
        {data?.answers?.map((e: any, index: number) => (
          <div className="answer" key={index}>
            <div className={`radio-button ${e.is_correct && "checked"}`}></div>
            <div className="desciption">{e.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrueFalseQuestionPreview;
