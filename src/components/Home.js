import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Shopitem from './shopItem';
import products from './products';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

class Home extends Component {
  render() {
    const carousel = (
      <Carousel
        swipeable
        draggable={false}
        showDots
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite
        autoPlay={this.props.deviceType !== 'mobile'}
        autoPlaySpeed={10000}
        keyBoardControl
        customTransition="all 1"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="carouselDiv">
          {' '}
          <Shopitem
            isCarousel
            name={products.Hoodies[0][0]}
            desc={products.Hoodies[0][1]}
            img={products.Hoodies[0][2][0]}
            price={products.Hoodies[0][3]}
            rating={products.Hoodies[0][4]}
            id={products.Hoodies[0][5]}
          />{' '}
        </div>
        <div className="carouselDiv">
          {' '}
          <Shopitem
            isCarousel
            name={products.Shirts[0][0]}
            desc={products.Shirts[0][1]}
            img={products.Shirts[0][2][0]}
            price={products.Shirts[0][3]}
            rating={products.Shirts[0][4]}
            id={products.Shirts[0][5]}
          />{' '}
        </div>
        <div className="carouselDiv">
          {' '}
          <Shopitem
            isCarousel
            name={products.Jeans[0][0]}
            desc={products.Jeans[0][1]}
            img={products.Jeans[0][2][0]}
            price={products.Jeans[0][3]}
            rating={products.Jeans[0][4]}
            id={products.Jeans[0][5]}
          />{' '}
        </div>
        <div className="carouselDiv">
          {' '}
          <Shopitem
            isCarousel
            name={products.Hoodies[1][0]}
            desc={products.Hoodies[1][1]}
            img={products.Hoodies[1][2][0]}
            price={products.Hoodies[1][3]}
            rating={products.Hoodies[1][4]}
            id={products.Hoodies[1][5]}
          />{' '}
        </div>
        <div className="carouselDiv">
          {' '}
          <Shopitem
            isCarousel
            name={products.Jeans[1][0]}
            desc={products.Jeans[1][1]}
            img={products.Jeans[1][2][0]}
            price={products.Jeans[1][3]}
            rating={products.Jeans[1][4]}
            id={products.Jeans[1][5]}
          />{' '}
        </div>
        <div className="carouselDiv">
          {' '}
          <Shopitem
            isCarousel
            name={products.Accessories[0][0]}
            desc={products.Accessories[0][1]}
            img={products.Accessories[0][2][0]}
            price={products.Accessories[0][3]}
            rating={products.Accessories[0][4]}
            id={products.Accessories[0][5]}
          />{' '}
        </div>
      </Carousel>
    );
    return (
      <div className="homeContainer">
        <div className="homeMainImageContainer">
          <Grid container spacing={0} align="center">
            <Grid item xs={12} sm={12} md={6}>
              <img alt="placeholder" src="../img/mensad1.gif" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h2> New Arrivals </h2>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magna cursus, iaculis massa at, aliquam lorem. Nullam non nisi
                ut ex sagittis eleifend. Duis id tempor tortor, nec sagittis
                metus. Duis ut ex eu eros venenatis egestas. Aliquam mattis
                tempus risus, vitae rutrum lectus vulputate eget. Sed cursus
                dolor.
              </p>

              <button> Shop New Arrivals </button>
            </Grid>
          </Grid>
        </div>
        <h2> Best Sellers </h2>
        {carousel}
        <div className="homeSecondaryImageContainer">
          <Grid container spacing={0} align="center">
            <Grid item xs={12} sm={12} md={6}>
              <img alt="placeholder" src="../img/mensad1.jpg" />
              <button> See More </button>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img alt="placeholder" src="../img/mensad2.jpg" />
              <button> See More </button>
            </Grid>
          </Grid>
        </div>
        <div className="homeMainImageContainer">
          <Grid container spacing={0} align="center">
            <Grid item xs={12} sm={12} md={6}>
              <img alt="placeholder" src="../img/mensad3.jpg" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h2> Featured </h2>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magna cursus, iaculis massa at, aliquam lorem. Nullam non nisi
                ut ex sagittis eleifend. Duis id tempor tortor, nec sagittis
                metus. Duis ut ex eu eros venenatis egestas. Aliquam mattis
                tempus risus, vitae rutrum lectus vulputate eget. Sed cursus
                dolor.
              </p>

              <button> Shop Featured </button>
            </Grid>
          </Grid>
        </div>
        <h2> Essentials </h2>
        {carousel}
      </div>
    );
  }
}

export default Home;
