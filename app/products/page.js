'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './products.module.css';

const allProducts = [
  { id: 1, name: 'Linen Ease Top',       category: 'Tops',      price: '$68',  badge: 'New',        img: '/images/products/1.png', colors: ['#F2D9D0','#C9D5C6','#E8D5CC'] },
  { id: 2, name: 'Meadow Wrap Skirt',    category: 'Bottoms',   price: '$84',  badge: 'Bestseller', img: '/images/products/2.png', colors: ['#5A7A60','#F2D9D0','#E8C4B8'] },
  { id: 3, name: 'Cloud Knit Cardigan',  category: 'Outerwear', price: '$112', badge: 'New',        img: '/images/products/3.jpg', colors: ['#FAF7F2','#E8D5CC','#B5C4B1'] },
  { id: 4, name: 'Ripple Wide Trousers', category: 'Bottoms',   price: '$96',  badge: null,         img: '/images/products/4.png', colors: ['#3A3530','#8C7B72','#B5C4B1'] },
  { id: 5, name: 'Soft Collar Blouse',   category: 'Tops',      price: '$74',  badge: 'New',        img: '/images/products/5.jpg', colors: ['#FAF7F2','#F2D9D0'] },
  { id: 6, name: 'Petal Midi Dress',     category: 'Dresses',   price: '$128', badge: null,         img: '/images/products/6.png', colors: ['#E8C4B8','#C9D5C6','#B5C4B1'] },
  { id: 7, name: 'River Linen Shirt',    category: 'Tops',      price: '$82',  badge: null,         img: '/images/products/7.jpg', colors: ['#5A7A60','#FAF7F2'] },
  { id: 8, name: 'Morning Trench',       category: 'Outerwear', price: '$164', badge: 'Bestseller', img: '/images/products/8.jpg', colors: ['#8C7B72','#3A3530'] },
  { id: 9, name: 'Haze Slip Dress',      category: 'Dresses',   price: '$108', badge: 'Sale',       img: '/images/products/9.jpg', colors: ['#F2D9D0','#E8C4B8'] },
];

const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear'];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeFilter);

  return (
    <div className="page-enter">
      {/* PAGE HERO */}
      <div className={styles.pageHero}>
        <div className="container">
          <p className={`section-label ${styles.sectionLabel}`} style={{justifyContent:'center', marginBottom:'16px'}}>
            Spring Collection
          </p>
          <h1>The full <em>collection</em></h1>
          <p className={styles.sub}>Soft, considered pieces for every day. Discover your favourites.</p>
        </div>
      </div>

      <div className="container">
        {/* FILTERS */}
        <div className={styles.filtersBar}>
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className={styles.resultsCount}>{filtered.length} pieces</span>
        </div>

        {/* PRODUCT GRID */}
        <section className={styles.shopSection}>
          <div className={styles.productGrid}>
            {filtered.map(product => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imgWrap}>
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  {product.badge && (
                    <span className={`${styles.badge} ${product.badge === 'Sale' ? styles.sale : styles.new}`}>
                      {product.badge}
                    </span>
                  )}
                  <button className={styles.wishlistBtn} aria-label="Wishlist">♡</button>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <h3 className={styles.cardName}>{product.name}</h3>
                    <span className={styles.cardPrice}>{product.price}</span>
                  </div>
                  <p className={styles.cardCategory}>{product.category}</p>
                  <div className={styles.colorDots}>
                    {product.colors.map((c, i) => (
                      <div key={i} className={styles.dot} style={{background: c}} title={c} />
                    ))}
                  </div>
                  <button className={styles.addToCart}>Add to Bag</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
