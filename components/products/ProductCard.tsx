// Página que muestra las imagenes de los productos con sus titulos
import { IProduct } from "@/interfaces";
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link } from '@mui/material';
import { FC, useMemo, useState } from "react";
import NextLink from 'next/link';

// Tipado de los productos
interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false);

  /* ¿Qué hace useMemo en React?
El hook useMemo nos sirve para memorizar valores. Recibe una función que retorna el valor a memorizar y 
como segundo parámetro opcional, un array de dependencias. Si no pasamos el array de dependencias, se ejecutará en cada renderizado.*/
  // useMemo evita la carga de datos repetitiva, renderiza un código especifico.
  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;

    // renderiza solamente las dependencias de abajo
    // si el valor de las dependencias de abajo cambian, entonces useMemo se ejecuta.
  }, [isHovered, product.images]);

  return (
    <Grid item
      xs={6}
      sm={4}
      // onMouseEnter = hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href="/product/slug" passHref prefetch={false} legacyBehavior>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                className="fadeIn"
                image={productImage}
                alt={product.title}
              // onLoad={ () => console.log('cargo') }
              />
            </CardActionArea>
          </Link>
        </NextLink>

      </Card>

      <Box sx={{ mt: 1 }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};
