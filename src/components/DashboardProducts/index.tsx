import Products from "./Products";
import { Container } from "./styles";

function DashboardProducts() {
  return (
    <Container>
      <section>
        <div className="btnMore">
          <button className="more">Ver todos os produtos</button>
        </div>
        <div className="products">
          <Products
            title="Backup em Nuvem"
            description="Altatech Cloud Backup | Teste grátis"
            price="R$ 100,00"
            img="https://i.imgur.com/8dO2WhJ.png"
            more="Ver mais"
          />
          <Products
            title="T5D-03487"
            description="Office home & business 2021 ESD T5D-03487"
            price="Sob consulta"
            img="https://i.imgur.com/mpnBJ9L.png"
            more="Solicitar orçamento"
          />
          <Products
            title="82ME0000BR"
            description="Notebook Lenovo V15 I5-1135G7 8GB 256 SSD W10P - 82ME0000BR"
            price="Sob consulta"
            img="https://i.imgur.com/9OcC0ju.png"
            more="Solicitar orçamento"
          />
          <Products
            title="82NQ0007BR"
            description="Notebook Lenovo V15 I3-10110U 4GB 500GB FreeDOS 82NQ0007BR"
            price="Sob consulta"
            img="https://i.imgur.com/JCGviNx.png"
            more="Solicitar orçamento"
          />
          <Products
            title="SMC3000XLI-BR"
            description="APC Smart-UPS BR 3000VA, 220V, Brazil"
            price="Sob consulta"
            img="https://i.imgur.com/OIIz50z.png"
            more="Solicitar orçamento"
          />
          <Products
            title="SMC1500XLBI-BR"
            description="APC Nobreak SmartUPS 1500VA 1050W (Entrada 115/220V, Saida 115V) USB, Expansível, com 8 tomadas NBR 14136"
            price="Sob consulta"
            img="https://i.imgur.com/ILlqzqL.png"
            more="Solicitar orçamento"
          />
        </div>
      </section>
    </Container>
  );
}

export default DashboardProducts;
