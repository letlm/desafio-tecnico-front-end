import { ContainerTel } from "./styles";

interface ITelephonesModal {
  name: string;
  number: string;
}

function TelephonesMap({ name, number }: ITelephonesModal) {
  return (
    <ContainerTel>
      <span className="name">{name}</span>
      <span className="number">{number}</span>
    </ContainerTel>
  );
}

export default TelephonesMap;
