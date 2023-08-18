import React from 'react';
import { Page, BlockTitle, Link, Block, Icon } from 'framework7-react';

const NotFoundPage = () => (
  <Page className='bg-color-white'>
    <Block>
      <Link back><Icon icon='icon-back'></Icon>&nbsp;Back</Link>
      <BlockTitle className='error'>SORRY...</BlockTitle>
      <BlockTitle className='error'>SOMETHING WENT WRONG</BlockTitle>
    </Block>
  </Page>
);

export default NotFoundPage;
