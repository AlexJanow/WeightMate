/* eslint-disable jsx-a11y/anchor-is-valid */
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

export function ToolTipsRepetitionCalculation() {
  const trainingSearchTip = `With your first weight and repetition input this table calculates the practicable weight for your repetition goals`;

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
