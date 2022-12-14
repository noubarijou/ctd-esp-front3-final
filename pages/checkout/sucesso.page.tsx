import { CardMedia, Container, Paper, Typography } from '@mui/material';
import { CheckoutContext } from '../../context/checkout.context';
import { useContext, useEffect } from 'react';

const Sucesso = () => {
  const { checkout } = useContext(CheckoutContext);

  if (!checkout) {
    return <h3>eesh</h3>;
  }


  const { customer, order } = checkout;
  const { address } = customer;
  return (
    <Container >
        <Typography textAlign="center" fontSize={24} fontWeight="bold">Ótima escolha!</Typography>
        <Paper sx={{ backgroundColor: "#fff" }}>
          <Typography sx={{marginTop: '20px', paddingTop: '10px'}} textAlign="center" fontSize={22} fontWeight="bold">Detalhes da compra</Typography>
          <Container sx={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
            <Container sx={{ width: "auto", marginBottom: "10px" }}>
              <Typography textAlign='center' variant="h4" fontWeight="bold">HQ comprado:</Typography>
              <CardMedia component="img" sx={{ width: "250px", margin: "0 auto" }}  src={order.image} />
              <Typography fontSize={18} textAlign='center'><strong>Nome: </strong>{order.name}</Typography>
              <Typography fontSize={18} textAlign='center'><strong>Preço: </strong>{order.price} Dinheiros</Typography>
            </Container>
            <Container  >
              <Typography variant="h4" fontWeight="bold">Dados do comprador</Typography>
              <Typography fontSize={18} ><strong>Nome: </strong>{customer.name}</Typography>
              <Typography fontSize={18} ><strong>Sobrenome: </strong>{customer.lastname}</Typography>
              <Typography fontSize={18} ><strong>Endereço de entrega: </strong>
                {address.address1},
                {!!address.address2 ? ` ${address.address2}, ${address.city}, ${address.state}` : ` ${address.city},  ${address.state}`}</Typography>
            </Container>
          </Container>
        </Paper>
    </Container>
  )
}

export default Sucesso;