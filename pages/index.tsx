// MAIN PAGE
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { ShopLayout } from '../components/layouts';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { initialData } from '../database/products';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <ShopLayout title={'Teslo-Shop Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

        <Grid container spacing={4}>
          {
            initialData.products.map(product => (
              <Grid item xs={6} sm={4} key={product.slug}>
                  <Card>
                    <CardActionArea>
                       <CardMedia 
                          component='img'
                          image={`products/${ product.images[0] }`}
                          alt={ product.title }
                       />
                    </CardActionArea>
                  </Card>
              </Grid>
            ))
          }
        </Grid>


      </ShopLayout>

    </>
  );
}
