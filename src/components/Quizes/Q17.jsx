import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import CreditCard from 'components/Patterns/CreditCard';
import Button from 'components/Patterns/Button';

import card from 'assets/img/visa-infinite.webp';

const Q17 = ({ nextPage = () => {} }) => (
  <Page>
    <CreditCard src={card} />
    <Title>VISA INFINITE</Title>
    <CreditCard.Description>
      - 2 acessos gratuitos por cartão, por ano a mais de 850 Salas VIPs
      LoungeKey™️ em aeroportos no mundo. <br />
      - Serviço de Concierge exclusivo da bandeira Visa e cobertura de USD
      200.000 em despesas médicas. <br />
      - Programa de pontos Sempre Presente – 2 pontos/dólar para compras
      nacionais e 3 em compras internacionais. <br />- Benefícios exclusivos na
      Experiência Personnalité -
      <a
        href="www.itau.com.br/personnalite/experiencia/"
        className="text-blue underline"
        target="_blank"
      >
        www.itau.com.br/personnalite/experiencia/
      </a>
      <br />- Promoções e Descontos –{' '}
      <a
        href="www.itau.com.br/semprepresente"
        className="text-blue underline"
        target="_blank"
      >
        itau.com.br/semprepresente
      </a>
      <br />- 50% de desconto em diversão –{' '}
      <a
        href="www.itau.com.br/semprepresente"
        className="text-blue underline"
        target="_blank"
      >
        itau.com.br/semprepresente
      </a>
      <br /> - Benefícios da Bandeira-{' '}
      <a
        href="www.visa-infinite.com/br/benefícios"
        className="text-blue underline"
        target="_blank"
      >
        www.visa-infinite.com/br/benefícios
      </a>{' '}
      <br />E muito mais!
    </CreditCard.Description>
    <div className="flex flex-wrap justify-end ml-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        PRÓXIMO
      </Button>
    </div>
  </Page>
);

export default Q17;
