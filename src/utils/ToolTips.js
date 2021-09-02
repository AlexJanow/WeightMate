import ReactTooltip from "react-tooltip";
import "./ToolTips.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function ToolTipsSearchExercise() {
  const trainingSearchTip = `Simply type in the exercise you want to train (language depending on browser setting german/english)`;

  return (
    <div>
      <a data-tip={trainingSearchTip} data-event="click focus">
        <AiOutlineInfoCircle className="ToolTips__infoIcon" />
      </a>
      <ReactTooltip
        globalEventOff="click"
        type="dark"
        multiline={true}
        className="ToolTips__toolTip"
        effect="solid"
        place="bottom"
      />
    </div>
  );
}
