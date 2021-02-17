import Page from 'components/Page';
import Title from 'components/Patterns/Title';
import CreditCard from 'components/Patterns/CreditCard';
import Button from 'components/Patterns/Button';

import card from 'assets/img/mastercard-black.webp';

const Q18 = ({ nextPage = () => {} }) => (
  <Page>
    <CreditCard src={card} />
    <Title>MASTERCARD BLACK</Title>
    <CreditCard.Description>
      - Acesso a mais de 850 áreas VIP LoungeKeyem 120 países, independente de
      companhia aérea, associação à programa de milhagem ou classe de passagem.
      <br />
      - Acesso à exclusiva rede de salas VIP MasterCard em aeroportos, com mais
      de 30 salas adicionais no Brasil, México e Costa Rica. <br />
      - Benefícios exclusivos em estabelecimentos de luxo de varejo,
      restaurantes e SPAs próximos aos aeroportos. <br />
      - Ofertas Premium de parceiros nos aeroportos <br />
    </CreditCard.Description>
    <div className="flex flex-wrap justify-end ml-auto items-center gap-8">
      <Button onClick={nextPage} type="button">
        PRÓXIMO
      </Button>
    </div>
  </Page>
);

export default Q18;
