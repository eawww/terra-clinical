import React from 'react';

import Header from '../../../Header';

const content = (
  <div
    id="headerTest--content"
    style={{
      backgroundColor: 'black', height: '30px', width: '300px', margin: '0 10px 0 0',
    }}
  />
);

export default () => (
  <Header
    startContent={content}
    title="Header with content on the left"
  />
);
