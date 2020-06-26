import React, { Component, Fragment } from 'react';
import Rating from 'react-rating';
import Modal from '@material-ui/core/modal';
import Product from './modalProductDescription';
import { withRouter } from 'react-router-dom';

class Shop extends Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleOpen = e => {
    e.stopPropagation();
    this.setState({
      open: true
    });
  };

  toProductPage = id => {
    this.props.history.push('/product/' + id);
  };

  render() {
    return (
      <Fragment>
        <div className="shopItemContainer">
          <div className="shopItemImageContainer">
            <img
              className="shopItemImage"
              src={this.props.img}
              alt="productimage"
              onClick={this.toProductPage.bind(this, this.props.id)}
            />
            <div
              class="middle"
              onClick={this.toProductPage.bind(this, this.props.id)}
            >
              <button onClick={this.handleOpen.bind(this)}> Quick View </button>
            </div>
          </div>
          <Rating
            readonly
            initialRating={this.props.rating}
            emptySymbol={
              <img src="imgs/emptystar.png" className="icon" alt="" />
            }
            fullSymbol={<img src="imgs/star.png" className="icon" alt="*" />}
          />
          <p
            className="shopItemName"
            onClick={this.toProductPage.bind(this, this.props.id)}
          >
            {this.props.name}
          </p>
          <p
            className="shopItemDescription"
            onClick={this.toProductPage.bind(this, this.props.id)}
          >
            {this.props.desc}
          </p>
          <p
            className={'shopItemPrice ' + (this.props.isCarousel ? 'hide' : '')}
          >
            {this.props.price}
          </p>
          <button
            onClick={this.toProductPage.bind(this, this.props.id)}
            className={'shopItemBtn ' + (this.props.isCarousel ? 'hide' : '')}
          >
            Add To Cart
          </button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div className="shopItemModal">
              <img
                alt="placeholder"
                onClick={this.handleClose}
                src="imgs/close.png"
                className="shopItemModalClose"
              />
              <Product id={this.props.id} />
            </div>
          </Modal>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Shop);
