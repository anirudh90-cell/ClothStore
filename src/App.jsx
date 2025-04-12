import React, { useState } from 'react';
import './App.css';
import { ShoppingCart, User, Search } from 'lucide-react';
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa6";
import { BsInstagram } from 'react-icons/bs';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <BrandLogos />
      <CategoryCards />
      <FeaturedProducts />
      <SpecialOffer />
      <ShippingInfo />
      <SaleBanner />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>DNK</h1>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#" className="active">EVERYTHING</a></li>
          <li><a href="#">WOMEN</a></li>
          <li><a href="#">MEN</a></li>
          <li><a href="#">ACCESSORIES</a></li>
        </ul>
      </nav>
      <div className="secondary-nav">
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
        <div className="icons">
          <Search size={20} />
          <div className="cart-icon">
            <ShoppingCart size={20} />
            <span className="cart-count">0</span>
          </div>
          <User size={20} />
        </div>
      </div>
    </header>
  );
}

function MainBanner() {
  // Place a high-quality summer fashion banner image in: public/images/banner/summer-fashion.jpg
  return (
    <section className="main-banner">
      <div className="banner-content">
        <h2>Raining Offers For<br />Hot Summer!</h2>
        <p>25% Off On All Products</p>
        <div className="banner-buttons">
          <button className="btn primary-btn">SHOP NOW</button>
          <button className="btn secondary-btn">FIND MORE</button>
        </div>
      </div>
    </section>
  );
}

function BrandLogos() {
  return (
    <section className="brand-logos">
      <div className="logo-container">
        <div className="brand-logo">Elegant Bloom</div>
        <div className="brand-logo">Summer Shine</div>
        <div className="brand-logo">Urban Chic</div>
        <div className="brand-logo">Floral Dream</div>
        <div className="brand-logo">Classic Curve</div>
      </div>
    </section>
  );
}

function CategoryCards() {
  // Place these category images in: public/images/categories/
  const categories = [
    {
      title: "20% Off On Tank Tops",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tincidunt.",
      button: "SHOP NOW",
      image: "https://assets.ajio.com/medias/sys_master/root/20250122/tieS/6790f48e663dbe1c5ff1b71a/rio_basic_black_women_fitted_square-neck_camisole.jpg"
    },
    {
      title: "Latest Eyewear For You",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tincidunt.",
      button: "SHOP NOW",
      image: "https://i.pinimg.com/736x/13/6d/36/136d36fffa78e03f5a688e15d76bd9c9.jpg"
    },
    {
      title: "Let's Lorem Suit Up!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tincidunt.",
      button: "CHECK OUT",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eTsblss2qAxhngZYYr-uyeb3jRihSBj7fA&s"
    }
  ];

  return (
    <section className="category-cards">
      {categories.map((category, index) => (
        <div className="card" key={index} style={{backgroundImage: `url(${category.image})`}}>
          <div className="card-content">
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <button className="btn outline-btn">{category.button}</button>
          </div>
        </div>
      ))}
    </section>
  );
}

function FeaturedProducts() {
  // Place product images in: public/images/products/
  const products = [
    {
      id: 1,
      name: 'DNK Yellow Shoes',
      price: 120.00,
      discountPrice: 90.00,
      image: 'https://bipsygram.com/wp-content/uploads/2021/03/sports-shoe3-1.jpg.webp',
      colors: ['#000', '#fff'],
      sale: true
    },
    {
      id: 2,
      name: 'DNK Blue Shoes',
      price: 150.00,
      discountPrice: 120.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLb_VKGwHsUnhtaqRjd0eUwFW-jBQJ3Eb6Ig&s',
      colors: ['#0000ff', '#00ff00', '#ff0000']
    },
    {
      id: 3,
      name: 'Dark Brown Jeans',
      price: 110.00,
      image: 'https://images.wrangler.com/is/image/Wrangler/3W055NB-HERO?$KDP-LARGE2$',
      colors: ['#000', '#333']
    },
    {
      id: 4,
      name: 'Blue Denim Jeans',
      price: 110.00,
      image: 'https://m.media-amazon.com/images/I/91rB5JQ7jDL._AC_UY1100_.jpg',
      colors: ['#0000ff']
    },
    {
      id: 5,
      name: 'Basic Gray Jeans',
      price: 110.00,
      image: 'https://media.boohoo.com/i/boohoo/pzz04348_grey_xl/female-grey-petite-basic-high-waist-split-hem-jeans/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      colors: ['#888']
    },
    {
      id: 6,
      name: 'Blue Denim Shorts',
      price: 130.00,
      discountPrice: 110.00,
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/short/m/v/3/28-mnt-3009-montrez-original-image2udjhyhcy4g-bb.jpeg?q=90&crop=false',
      colors: ['#000', '#ff0000', '#ff8800'],
      sale: true
    },
    {
      id: 7,
      name: 'Anchor Bracelet',
      price: 150.00,
      discountPrice: 120.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrGOXKCUTfG-RAUl6PRpUVNCVmRygUzAVjg&s',
      colors: ['#000', '#ff0000', '#ff8800']
    },
    {
      id: 8,
      name: 'Boho Bangle Bracelet',
      price: 170.00,
      discountPrice: 130.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJ9HbDlTU_1x-4SIoBbi0eS5ME8PxGwT5PQ&s',
      colors: ['#00ffff', '#00ff00', '#ff0000']
    },
    {
      id: 9,
      name: 'Light Brown Purse',
      price: 110.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_11UqBKAqE4uH32uxbiZsM8bSaRfEQpm8A&s',
      colors: ['#0000ff']
    },
    {
      id: 10,
      name: 'Bright Red Bag',
      price: 240.00,
      discountPrice: 160.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOxbzPZ8hgj9VjAW3D_h4qjtX7zkG9J9ldg&s',
      colors: ['#0000ff', '#00ff00', '#ff0000', '#ff00ff']
    },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            {product.sale && <div className="sale-badge">SALE</div>}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-price">
                {product.discountPrice ? (
                  <>
                    <span className="original-price">${product.price.toFixed(2)}</span>
                    <span className="discount-price">${product.discountPrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="price">${product.price.toFixed(2)}</span>
                )}
              </div>
              <div className="product-colors">
                {product.colors.map((color, index) => (
                  <span 
                    key={index} 
                    className="color-dot" 
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SpecialOffer() {
  // Place special offer image in: public/images/banner/special-offer.jpg
  return (
    <section className="special-offer">
      <div className="offer-content">
        <p className="limited">Limited Time Offer</p>
        <h2>Special Edition</h2>
        <p className="offer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit tellus, lacus vel ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p className="discount-code">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
        <button className="btn primary-btn">SHOP NOW</button>
      </div>
    </section>
  );
}

function ShippingInfo() {
  return (
    <section className="shipping-info">
      <div className="info-container">
        <div className="info-item">
          <div className="info-icon">🌎</div>
          <h3>Worldwide Shipping</h3>
          <p>Et elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="info-item">
          <div className="info-icon">👍</div>
          <h3>Best Quality</h3>
          <p>Et elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="info-item">
          <div className="info-icon">🎯</div>
          <h3>Best Offers</h3>
          <p>Et elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="info-item">
          <div className="info-icon">🔒</div>
          <h3>Secure Payments</h3>
          <p>Et elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>
    </section>
  );
}

function SaleBanner() {
  return (
    <section className="sale-banner">
      <h2>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h2>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>DNK</h2>
          <p>The best look anytime, anywhere.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>For Her</h3>
            <ul>
              <li><a href="#">Women's Jeans</a></li>
              <li><a href="#">Tops and Shirts</a></li>
              <li><a href="#">Women's Jackets</a></li>
              <li><a href="#">Heels and Flats</a></li>
              <li><a href="#">Women Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>For Him</h3>
            <ul>
              <li><a href="#">Men's Jeans</a></li>
              <li><a href="#">Men Shirts</a></li>
              <li><a href="#">Men Accessories</a></li>
              <li><a href="#">Men Jackets</a></li>
              <li><a href="#">Men T-shirts</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Subscribe</h3>
            <div className="subscribe-form">
              <input type="email" placeholder="Your email address..." />
              <button className="btn primary-btn">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © 2022 Brandstore. Powered by Brandstore.</p>
        <div className="social-icons">
          <a href="#"><span><FaFacebookF /></span></a>
          <a href="#"><span><FaYoutube /></span></a>
          <a href="#"><span><FaTwitter /></span></a>
          <a href="#"><span><FaGoogle /></span></a>
          <a href="#"><span><BsInstagram /></span></a>
        </div>
      </div>
    </footer>
  );
}

export default App;