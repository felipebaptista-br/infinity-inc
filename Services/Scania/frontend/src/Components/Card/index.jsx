import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from '../../Images/scania-product.jpeg';
import $ from 'jquery';

export default function MediaCard() {

    function handle_after() {
        $("#card_Announcement").hide();
    }
    
  return (
    <Card sx={{ maxWidth: 345 }} id="card_Announcement" style={ { marginRight: "4rem", backgroundColor: "#1e1e1e", color: "#ffffff" } } >
      <CardMedia
        component="img"
        height="140"
        image={Image}
        alt="Anuncio de Soluções Scania"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Veja as novidades!
        </Typography>
        <Typography variant="body2" style={ { color: "#f3f3f3" } }>
        Saiba mais sobre como a Scania pode oferecer a solução mais completa e sob medida para o seu negócio. Acesse o Soluções Scania para preencher o formulário de interesse de compra, e um representante entrará em contato com você!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> <a href='https://solucoesscania.com.br/'>Conhecer agora</a></Button>
        <Button size="small" onClick={handle_after}>Depois</Button>
      </CardActions>
    </Card>
  );
}
