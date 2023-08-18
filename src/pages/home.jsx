import React from 'react';
import {
  Page,
  Block,
  BlockTitle,
  Button
} from 'framework7-react';

const HomePage = (props) => {

  const { f7router } = props

  return (
    <Page name="home" className="bg-color-white">
      <Block className="margin-horizontal mt-70">
        <BlockTitle id="title" className="cherry-bomb text-align-center" large>Are you ready to find your next meal?</BlockTitle>
        <Block className="text-align-center">
          <img src="../assets/cooking.svg" width="330px"/>
          <div className="center">
            <Button large raised fill round color="orange" className="w-250"
              onClick={() => f7router.navigate('/ingredients/')}>START HERE</Button>
          </div>
        </Block>
      </Block>
    </Page>
  )
};
export default HomePage;