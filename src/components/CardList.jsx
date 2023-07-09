import React, { useState } from 'react';
import ProductCard from '../components/Card';
import CustomProgressBar from '../components/ProgressBar';

function ProductList() {
  const [addedItems, setAddedItems] = useState([]);

  const addToCart = (item) => {
    setAddedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
          <div className="product-info">
              <div className="product-text">
                  <h1>Список товаров</h1>
                  {addedItems.length > 0 && (
                      <p>Вы добавили {addedItems.length} {addedItems.length === 1 ? 'товар' : 'товара'} в файл импорта
                      </p>
                  )}
              </div>
              
          <div className="progress-bar">
                  <CustomProgressBar addedItemsCount={addedItems.length} max={3} />
              </div>
          </div>

      <div className="product-list">
        <ProductCard
          title="НШД"
          imageSrc="https://www.dropshipping.ua/wp-content/uploads/2023/01/kluch-reduktornyi-nshd.webp"
          addToCart={() => addToCart('Товар 1')}
        />
        <ProductCard
          title="Sigma 7404011"
          imageSrc="https://www.dropshipping.ua/wp-content/uploads/2023/01/nabir-yaschykiv-sigma-7404011.webp"
          addToCart={() => addToCart('Товар 2')}
        />
        <ProductCard
          title="Airkraft DPA-2RK"
          imageSrc="https://www.dropshipping.ua/wp-content/uploads/2023/01/pnevmodomkrat-airkraft-dpa-2rk.webp"
          addToCart={() => addToCart('Товар 3')}
        />              
      </div>
    </div>
  );
}

export default ProductList;