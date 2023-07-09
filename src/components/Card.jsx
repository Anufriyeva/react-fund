import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductCard({ title, imageSrc, addToCart }) {
  return (
    <div className="product-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button onClick={addToCart}>Add to import</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;