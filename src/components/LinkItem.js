import React from 'react';

const LinkItem = ({ link }) => {
  const { text, url, image } = link;

  return (
    <a href={url} className="link-item" target="_blank" rel="noopener noreferrer">
      {image && (
        <img
          src={image}
          alt={`${text} Image`}
          style={{ width: "22px", height: 'auto', marginRight: '5px' }}
        />
      )}
      <h3 className="link-title" style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontSize: '1.2rem' }}>{text}</h3>
    </a>
  );
};

export default LinkItem;
