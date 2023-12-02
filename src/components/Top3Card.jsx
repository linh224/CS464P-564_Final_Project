import React from 'react';

export function Top3Card(props) {
  return (
    <div className='top3-card'>
      <h2>{props.counts}</h2>
      <p style={{ fontSize: '25px' }}>{props.cardTitle}</p>
    </div>
  );
}
