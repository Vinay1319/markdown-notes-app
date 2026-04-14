import ReactMarkdown from "react-markdown";
import { FaEye } from "react-icons/fa";

export default function Preview({ content }) {
  return (
    <div className="panel right">
      <h3><FaEye /> Preview</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}