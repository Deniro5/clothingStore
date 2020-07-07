import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from 'react-rating';
import products from './products';
import { CartContext } from './CartContext';

const productDescription = props => {
  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  const [currSize, setCurrSize] = useState('S');
  const [currStyle, setCurrStyle] = useState(0);
  const [item, setItem] = useState([]);
  const [cart, setCart, id, setId] = useContext(CartContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.match.params.id > 45 || props.match.params.id < 1) {
    } else {
      var index = Math.floor((props.match.params.id - 1) / 9);
      var index1 = (props.match.params.id - 1) % 9;
      let item = [];
      if (index === 0) {
        item = products['Accessories'][index1];
      } else if (index === 1) {
        item = products['Hoodies'][index1];
      } else if (index === 2) {
        item = products['Jeans'][index1];
      } else if (index === 3) {
        item = products['Shirts'][index1];
      } else if (index === 4) {
        item = products['Shoes'][index1];
      }
      setItem(item);
      setCurrSize('S');
      setCurrStyle(0);
      setIsLoaded(true);
    }
  }, [props.match.params.id]);

  const notify = () => {
    let newCart = [...cart];
    newCart.push({
      id: id,
      name: item[0],
      price: item[3],
      description: item[1],
      style: item[6][currStyle],
      size: currSize,
      imgsrc: item[2][currStyle]
    });
    setCart(newCart);
    setId(id + 1);
    alert('Item successfully added to cart');
  };

  if (!isLoaded) {
    return <p> </p>;
  }

  const sizeSquares = [];
  for (let count = 0; count < 6; count++) {
    sizeSquares.push(
      <div
        className={
          'sizeSquare' + (sizes[count] === currSize ? ' activeSquare' : '')
        }
        onClick={e => setCurrSize(sizes[count])}
      >
        {sizes[count]}
      </div>
    );
  }
  const styleSquares = [];
  for (let count1 = 0; count1 < 6; count1++) {
    styleSquares.push(
      <img
        alt="style"
        src={item[2][count1]}
        className={
          'styleSquare ' +
          (item[2].length > count1 ? '' : 'hide') +
          (currStyle === count1 ? ' activeStyleSquare' : '')
        }
        onClick={e => setCurrStyle(count1)}
      />
    );
  }

  return (
    <div className="productHome">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6}>
          <img alt="item" className="productImg" src={item[2][currStyle]}></img>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h2 className="productTitle"> {item[0]} </h2>
          <p className="productDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
            magna cursus, iaculis massa at, aliquam lorem. Nullam non nisi ut ex
            sagittis eleifend. Duis id tempor tortor, nec sagittis metus. Duis
            ut ex eu eros venenatis egestas. Aliquam mattis tempus risus, vitae
            rutrum lectus vulputate eget. Sed cursus dolor.
          </p>
          <h2 className="productPrice"> {item[3]} </h2>
          <h2 className="productRating">
            <Rating
              readonly
              initialRating={item[4]}
              emptySymbol={
                <img src="imgs/emptystar.png" className="icon" alt="" />
              }
              fullSymbol={<img src="imgs/star.png" className="icon" alt="*" />}
            />
            <span className="reviewLabel"> 101 Reviews </span>
          </h2>
          <h3> Style: {item[6][currStyle]} </h3>
          {styleSquares}
          <h3> Size: </h3>
          {sizeSquares}
          <button className="productBtn" onClick={notify}>
            Add to Cart
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default productDescription;
