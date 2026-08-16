import { MdArrowOutward } from "react-icons/md";
import "./styles/WorkImage.css";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
  title?: string;
  lang?: string;
  color?: string;
}

const WorkImage = (props: Props) => {
  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        target="_blank"
        rel="noreferrer"
        data-cursor="disable"
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        {/* Styled project card — no broken images */}
        <div className="work-card-preview" data-color={props.color ?? "teal"}>
          <div className="work-card-dots">
            <span /><span /><span />
          </div>
          <div className="work-card-body">
            <div className="work-card-lang">{props.lang ?? "Code"}</div>
            <div className="work-card-lines">
              <span className="wc-line wc-line--comment">// {props.alt}</span>
              <span className="wc-line wc-line--fn">async function <em>init</em>() {"{"}</span>
              <span className="wc-line wc-line--indent">const engine = await <em>load</em>();</span>
              <span className="wc-line wc-line--indent">engine.<em>run</em>();</span>
              <span className="wc-line">{"}"}</span>
            </div>
            <div className="work-card-title">{props.alt}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WorkImage;
