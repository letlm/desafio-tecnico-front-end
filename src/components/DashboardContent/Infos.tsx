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
        <button>
          <span className="btnText">{more}</span>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </ContextInfos>
  );
}

export default Infos;
