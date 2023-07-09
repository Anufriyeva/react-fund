import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function CustomProgressBar({ addedItemsCount, max }) {
  const completed = Math.min(addedItemsCount, max);

  return (
    <div>
      <ProgressBar now={(completed / max) * 100} label={`${completed}/${max}`} />
    </div>
  );
}

export default CustomProgressBar;