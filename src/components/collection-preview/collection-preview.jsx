import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss'

const ColletionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items.filter((_, idx) => idx < 4).map(({ id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))
      }
    </div>
  </div>
)

export default ColletionPreview