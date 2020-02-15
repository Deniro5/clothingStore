import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from 'react-rating';
import products from './products';

var item1 = [
  'Twice Sweater',
  '100% Real Cotton',
  [
    '../img/product1.jpg',
    '../img/hoodie1.jpg',
    '../img/product3.jpg',
    '../img/product4.jpg',
    '../img/product5.jpg'
  ],
  29.99,
  4,
  1,
  ['Black', 'Red', 'Pink', 'White', 'Grey']
];

class productDescription extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { currSize: 'S', currStyle: 0, currentItem: item1 };
  }

  componentWillMount = () => {
    window.scrollTo(0, 0);
    if (this.props.match.params.id > 45 || this.props.match.params.id < 1) {
    } else {
      var index = Math.floor((this.props.match.params.id - 1) / 9);
      var index1 = (this.props.match.params.id - 1) % 9;
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
      this.setState({
        currentItem: item
      });
    }
  };

  componentWillReceiveProps = () => {
    window.location.reload();
  };

  notify = () => {
    alert(
      'Item was added to cart. Size is ' +
        this.state.currSize +
        '. Style is ' +
        this.state.currentItem[6][this.state.currStyle]
    );
  };

  sizeSelect = (e, size) => {
    this.refs.square1.className = this.refs.square1.className.replace(
      ' activeSquare',
      ''
    );
    this.refs.square2.className = this.refs.square2.className.replace(
      ' activeSquare',
      ''
    );
    this.refs.square3.className = this.refs.square3.className.replace(
      ' activeSquare',
      ''
    );
    this.refs.square4.className = this.refs.square4.className.replace(
      ' activeSquare',
      ''
    );
    this.refs.square5.className = this.refs.square5.className.replace(
      ' activeSquare',
      ''
    );
    this.refs.square6.className = this.refs.square6.className.replace(
      ' activeSquare',
      ''
    );
    e.target.className += ' activeSquare';
    this.setState({
      currSize: size
    });
  };

  styleSelect = (e, size) => {
    this.refs.stylesquare1.className = this.refs.stylesquare1.className.replace(
      ' activeStyleSquare',
      ''
    );
    this.refs.stylesquare2.className = this.refs.stylesquare2.className.replace(
      ' activeStyleSquare',
      ''
    );
    this.refs.stylesquare3.className = this.refs.stylesquare3.className.replace(
      ' activeStyleSquare',
      ''
    );
    this.refs.stylesquare4.className = this.refs.stylesquare4.className.replace(
      ' activeStyleSquare',
      ''
    );
    this.refs.stylesquare5.className = this.refs.stylesquare5.className.replace(
      ' activeStyleSquare',
      ''
    );
    e.target.className += ' activeStyleSquare';
    this.setState({
      currStyle: size
    });
  };

  render() {
    //Check if the user gave a non existant link or not
    return (
      <div className="productHome">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={6}>
            <img
              alt="item"
              className="productImg"
              src={this.state.currentItem[2][this.state.currStyle]}
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h2 className="productTitle"> {this.state.currentItem[0]} </h2>
            <p className="productDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
              magna cursus, iaculis massa at, aliquam lorem. Nullam non nisi ut
              ex sagittis eleifend. Duis id tempor tortor, nec sagittis metus.
              Duis ut ex eu eros venenatis egestas. Aliquam mattis tempus risus,
              vitae rutrum lectus vulputate eget. Sed cursus dolor.{' '}
            </p>
            <h2 className="productPrice"> {this.state.currentItem[3]} </h2>
            <h2 className="productRating">
              <Rating
                readonly
                initialRating={this.state.currentItem[4]}
                emptySymbol={
                  <img src="../img/emptystar.png" className="icon" alt="" />
                }
                fullSymbol={
                  <img src="../img/star.png" className="icon" alt="*" />
                }
              />{' '}
              <span className="reviewLabel"> 101 Reviews </span>{' '}
            </h2>

            <h3> Style: {this.state.currentItem[6][this.state.currStyle]} </h3>
            <img
              ref="stylesquare1"
              alt="style1"
              src={this.state.currentItem[2][0]}
              className="styleSquare activeStyleSquare"
              onClick={e => this.styleSelect(e, 0)}
            />
            <img
              ref="stylesquare2"
              alt="style2"
              src={this.state.currentItem[2][1]}
              className={
                'styleSquare ' +
                (this.state.currentItem[2].length >= 2 ? '' : 'hide')
              }
              onClick={e => this.styleSelect(e, 1)}
            />
            <img
              ref="stylesquare3"
              alt="style3"
              src={this.state.currentItem[2][2]}
              className={
                'styleSquare ' +
                (this.state.currentItem[2].length >= 3 ? '' : 'hide')
              }
              onClick={e => this.styleSelect(e, 2)}
            />
            <img
              ref="stylesquare4"
              alt="style4"
              src={this.state.currentItem[2][3]}
              className={
                'styleSquare ' +
                (this.state.currentItem[2].length >= 4 ? '' : 'hide')
              }
              onClick={e => this.styleSelect(e, 3)}
            />
            <img
              ref="stylesquare5"
              alt="style5"
              src={this.state.currentItem[2][4]}
              className={
                'styleSquare ' +
                (this.state.currentItem[2].length >= 5 ? '' : 'hide')
              }
              onClick={e => this.styleSelect(e, 4)}
            />

            <h3> Size: </h3>
            <div
              ref="square1"
              className="sizeSquare activeSquare"
              onClick={e => this.sizeSelect(e, 'S')}
            >
              {' '}
              S{' '}
            </div>
            <div
              ref="square2"
              className="sizeSquare"
              onClick={e => this.sizeSelect(e, 'M')}
            >
              {' '}
              M{' '}
            </div>
            <div
              ref="square3"
              className="sizeSquare"
              onClick={e => this.sizeSelect(e, 'L')}
            >
              {' '}
              L{' '}
            </div>
            <div
              ref="square4"
              className="sizeSquare"
              onClick={e => this.sizeSelect(e, 'XL')}
            >
              {' '}
              XL{' '}
            </div>
            <div
              ref="square5"
              className="sizeSquare"
              onClick={e => this.sizeSelect(e, '2XL')}
            >
              {' '}
              2XL{' '}
            </div>
            <div
              ref="square6"
              className="sizeSquare"
              onClick={e => this.sizeSelect(e, '3XL')}
            >
              {' '}
              3XL{' '}
            </div>
            <button className="productBtn" onClick={this.notify}>
              {' '}
              Add to Cart{' '}
            </button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default productDescription;
