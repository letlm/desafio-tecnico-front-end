import Products from "./Products";
import { Container } from "./styles";

function DashboardProducts() {
  return (
    <Container>
      <section>
        <div className="some">
          <span>Alguns de nossos produtos</span>
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
            title="SMC1500XLBI-BR"
            description="APC Nobreak SmartUPS 1500VA 1050W (Entrada 115/220V, Saida 115V) USB, Expansível, com 8 tomadas NBR 14136"
            price="Sob consulta"
            img="https://i.imgur.com/mpnBJ9L.png"
            more="Solicitar orçamento"
          />
          <Products
            title="SMC1500XLBI-BR"
            description="APC Nobreak SmartUPS 1500VA 1050W (Entrada 115/220V, Saida 115V) USB, Expansível, com 8 tomadas NBR 14136"
            price="Sob consulta"
            img="https://i.imgur.com/9OcC0ju.png"
            more="Solicitar orçamento"
          />
          <Products
            title="SMC1500XLBI-BR"
            description="APC Nobreak SmartUPS 1500VA 1050W (Entrada 115/220V, Saida 115V) USB, Expansível, com 8 tomadas NBR 14136"
            price="Sob consulta"
            img="https://i.imgur.com/JCGviNx.png"
            more="Solicitar orçamento"
          />
          <Products
            title="SMC1500XLBI-BR"
            description="APC Nobreak SmartUPS 1500VA 1050W (Entrada 115/220V, Saida 115V) USB, Expansível, com 8 tomadas NBR 14136"
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
        <button className="more">Ver mais</button>
      </section>
    </Container>
  );
}

export default DashboardProducts;
