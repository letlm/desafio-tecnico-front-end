import { ContextInfos } from "./styles";

interface IInfos {
  title: string;
  subtitle: string;
  img: string;
  more: string;
}

function Infos({ title, subtitle, img, more }: IInfos) {
  return (
    <ContextInfos imgUrl={img}>
      <div className="sob">
        <div className="text">
          <span className="title">{title}</span>

          <span className="subtitle">{subtitle}</span>
        </div>
        <button>{more}</button>
      </div>
    </ContextInfos>
  );
}

export default Infos;
