import React from 'react';

export function Card(props) {
  return (
    <div className='count-card'>
      <h2>{props.count}</h2>
      <p style={{ fontSize: '25px' }}>{props.cardTitle}</p>
    </div>
  );
}
