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
                  <CustomProgressBar addedItemsCount={addedItems.length} max={6} />
              </div>
          </div>

      <div className="product-container">
        <ul className="product-list">
  <li>
    <ProductCard
      title="НШД"
      imageSrc="https://www.dropshipping.ua/wp-content/uploads/2023/01/kluch-reduktornyi-nshd.webp"
      addToCart={() => addToCart('Товар 1')}
    />
  </li>
  <li>
    <ProductCard
      title="Sigma 7404011"
      imageSrc="https://www.dropshipping.ua/wp-content/uploads/2023/01/nabir-yaschykiv-sigma-7404011.webp"
      addToCart={() => addToCart('Товар 2')}
    />
  </li>
  <li>
    <ProductCard
      title="Airkraft DPA-2RK"
      imageSrc="https://www.dropshipping.ua/wp-content/uploads/2023/01/pnevmodomkrat-airkraft-dpa-2rk.webp"
      addToCart={() => addToCart('Товар 3')}
    />
  </li>
  <li>
    <ProductCard
      title="Sigma 6713321"
      imageSrc="https://www.dropshipping.ua/wp-content/uploads/2023/01/stepler-pnevmatychnyi-sigma-6713321.webp"
      addToCart={() => addToCart('Товар 4')}
    />
          </li>
          <li>
    <ProductCard
      title="Protester HL-0204"
      imageSrc="https://www.dropshipping.ua/wp-content/uploads/2023/01/lihtar-nalobnyi-protester-hl-0204.webp"
      addToCart={() => addToCart('Товар 5')}
    />
          </li>
          <li>
    <ProductCard
      title="Sigma 6003761"
      imageSrc="https://www.dropshipping.ua/wp-content/uploads/2023/01/nabir-avtoinstrumentu-sigma-6003761.webp"
      addToCart={() => addToCart('Товар 6')}
    />
  </li>
</ul>
      </div>
    </div>
  );
}

export default ProductList;