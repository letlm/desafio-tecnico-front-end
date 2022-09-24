import Infos from "./Infos";
import { Container } from "./styles";

function DashboardContent() {
  return (
    <Container>
      <section>
        <Infos
          title="Backup em nuvem: Segurança avançada"
          subtitle="Com a Criptografia de ponta a ponta os dados de sua empresa estarão seguros"
          img="https://i.imgur.com/CuwrR9L.png"
          more="Saiba mais"
        />
        <Infos
          title="Server VPS: Tenha seu servidor virtual"
          subtitle="Nossos Server Cloud dispõe de escalabilidade, segurança para sua
          aplicação e performance"
          img="https://i.imgur.com/wnoqAyP.jpg"
          more="Confira aqui"
        />
        <Infos
          title="Privacidade | LGPD"
          subtitle="Entenda como a Altatech trabalha em conformidade com a Lei Geral
          de Proteção de Dados"
          img="https://i.imgur.com/doT9fZz.png"
          more="Saiba mais"
        />
      </section>
    </Container>
  );
}

export default DashboardContent;
