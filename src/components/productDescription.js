import React, { useContext, useState , useEffect , useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from 'react-rating';
import products from './products';
import {CartContext} from './CartContext'

var item1 = [
  'Twice Sweater',
  '100% Real Cotton',
  [
    'imgs/product1.jpg',
    'imgs/hoodie1.jpg',
    'imgs/product3.jpg',
    'imgs/product4.jpg',
    'imgs/product5.jpg'
  ],
  29.99,
  4,
  1,
  ['Black', 'Red', 'Pink', 'White', 'Grey']
];

const productDescription = props => {

  const [currSize, setCurrSize] = useState("S")
  const [currStyle, setCurrStyle] = useState(0)
  const [item, setItem] = useState(item1)
  const square1 = useRef(null);
  const square2 = useRef(null);
  const square3 = useRef(null);
  const square4 = useRef(null);
  const square5 = useRef(null);
  const square6 = useRef(null);
  const stylesquare1 = useRef(null);
  const stylesquare2 = useRef(null);
  const stylesquare3 = useRef(null);
  const stylesquare4 = useRef(null);
  const stylesquare5 = useRef(null);
  const [cart, setCart, id, setId] = useContext(CartContext)

  useEffect (() => {
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
      setItem(item)
    }
  }, [props.match.params.id])

  const notify = () => {
    let newCart = [...cart]
    newCart.push({id: id, name: item[0] , price: item[3] , description: item[1] , style: item[6][currStyle], size: currSize, imgsrc: item[2][currStyle] })
    setCart(newCart)
    setId(id + 1)
    alert(
      'Item successfully added to cart'
    );
  };

  const sizeSelect = (e, size) => {
    square1.current.className = square1.current.className.replace(
      ' activeSquare',
      ''
    );
    square2.current.className = square2.current.className.replace(
      ' activeSquare',
      ''
    );
    square3.current.className = square3.current.className.replace(
      ' activeSquare',
      ''
    );
    square4.current.className = square4.current.className.replace(
      ' activeSquare',
      ''
    );
    square5.current.className = square5.current.className.replace(
      ' activeSquare',
      ''
    );
    square6.current.className = square6.current.className.replace(
      ' activeSquare',
      ''
    );
    e.target.className += ' activeSquare';
    setCurrSize(size)
  };

  const styleSelect = (e, style) => {
    stylesquare1.current.className = stylesquare1.current.className.replace(
      ' activeStyleSquare',
      ''
    );
    stylesquare2.current.className = stylesquare2.current.className.replace(
      ' activeStyleSquare',
      ''
    );
    stylesquare3.current.className = stylesquare3.current.className.replace(
      ' activeStyleSquare',
      ''
    );
    stylesquare4.current.className = stylesquare4.current.className.replace(
      ' activeStyleSquare',
      ''
    );
    stylesquare5.current.className = stylesquare5.current.className.replace(
      ' activeStyleSquare',
      ''
    );
    e.target.className += ' activeStyleSquare';
    setCurrStyle(style)
  };

    //Check if the user gave a non existant link or not
    return (
      <div className="productHome">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={6}>
            <img
              alt="item"
              className="productImg"
              src={item[2][currStyle]}
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h2 className="productTitle"> {item[0]} </h2>
            <p className="productDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
              magna cursus, iaculis massa at, aliquam lorem. Nullam non nisi ut
              ex sagittis eleifend. Duis id tempor tortor, nec sagittis metus.
              Duis ut ex eu eros venenatis egestas. Aliquam mattis tempus risus,
              vitae rutrum lectus vulputate eget. Sed cursus dolor.{' '}
            </p>
            <h2 className="productPrice"> {item[3]} </h2>
            <h2 className="productRating">
              <Rating
                readonly
                initialRating={item[4]}
                emptySymbol={
                  <img src="imgs/emptystar.png" className="icon" alt="" />
                }
                fullSymbol={
                  <img src="imgs/star.png" className="icon" alt="*" />
                }
              />{' '}
              <span className="reviewLabel"> 101 Reviews </span>{' '}
            </h2>

            <h3> Style: {item[6][currStyle]} </h3>
            <img
              ref={stylesquare1}
              alt="style1"
              src={item[2][0]}
              className="styleSquare activeStyleSquare"
              onClick={e => styleSelect(e, 0)}
            />
            <img
              ref={stylesquare2}
              alt="style2"
              src={item[2][1]}
              className={
                'styleSquare ' +
                (item[2].length >= 2 ? '' : 'hide')
              }
              onClick={e => styleSelect(e, 1)}
            />
            <img
              ref={stylesquare3}
              alt="style3"
              src={item[2][2]}
              className={
                'styleSquare ' +
                (item[2].length >= 3 ? '' : 'hide')
              }
              onClick={e => styleSelect(e, 2)}
            />
            <img
              ref={stylesquare4}
              alt="style4"
              src={item[2][3]}
              className={
                'styleSquare ' +
                (item[2].length >= 4 ? '' : 'hide')
              }
              onClick={e => styleSelect(e, 3)}
            />
            <img
              ref={stylesquare5}
              alt="style5"
              src={item[2][4]}
              className={
                'styleSquare ' +
                (item[2].length >= 5 ? '' : 'hide')
              }
              onClick={e => styleSelect(e, 4)}
            />

            <h3> Size: </h3>
            <div
              ref={square1}
              className="sizeSquare activeSquare"
              onClick={e => sizeSelect(e, 'S')}
            >
              {' '}
              S{' '}
            </div>
            <div
               ref={square2}
              className="sizeSquare"
              onClick={e => sizeSelect(e, 'M')}
            >
              {' '}
              M{' '}
            </div>
            <div
              ref={square3}
              className="sizeSquare"
              onClick={e => sizeSelect(e, 'L')}
            >
              {' '}
              L{' '}
            </div>
            <div
              ref={square4}
              className="sizeSquare"
              onClick={e => sizeSelect(e, 'XL')}
            >
              {' '}
              XL{' '}
            </div>
            <div
              ref={square5}
              className="sizeSquare"
              onClick={e => sizeSelect(e, '2XL')}
            >
              {' '}
              2XL{' '}
            </div>
            <div
              ref={square6}
              className="sizeSquare"
              onClick={e => sizeSelect(e, '3XL')}
            >
              {' '}
              3XL{' '}
            </div>
            <button className="productBtn" onClick={notify}>
              {' '}
              Add to Cart{' '}
            </button>
          </Grid>
        </Grid>
      </div>
    );
}

export default productDescription;
