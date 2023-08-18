import React, { useState } from 'react';
import {
  f7,
  Page,
  List,
  ListInput,
  BlockTitle,
  Button,
  Block
} from 'framework7-react';

const IngredientsPage = (props) => {

  const {f7router} = props
  const [ingredients, setIngredients] = useState({i1: "", i2: "", i3: "", i4: "", i5: "", i6: "", i7: "", i8: ""})

  function handleChange(event){
    const {name, value} = event.target
    setIngredients({...ingredients, [name]: value})
  }

  function findMeRecipe(){
    if (ingredients.i1 === "")
      f7.dialog.alert("Make sure you provide at least the first ingredient!")
    else
      f7router.navigate('/loading/', { props: {ingredients} })
  }

  return (
    <Page name="form" className="bg-color-white">

      <BlockTitle>STEP 1</BlockTitle>
      <Block className='margin-vertical'>
        <BlockTitle className="subtitle">Add up to 8 ingredients:</BlockTitle>
        <List noHairlinesMd>
          <ListInput
            name="i1"
            label="Ingredient 1"
            type="text"
            placeholder="e.g.Tomato"
            required
            validate
            pattern="[a-zA-Z ]+"
            value={ingredients.i1}
            onChange={handleChange} 
          ></ListInput>

          <ListInput
            name="i2"
            label="Ingredient 2"
            type="text"
            placeholder="e.g.Potato"
            validate
            pattern="[a-zA-Z ]*"
            value = {ingredients.i2}
            onChange={handleChange} 
          ></ListInput>

          <ListInput
            name="i3"
            label="Ingredient 3"
            type="text"
            placeholder="e.g.Garlic"
            validate
            pattern="[a-zA-Z ]*"
            value = {ingredients.i3}
            onChange={handleChange} 
          ></ListInput>

          <ListInput
            name="i4"
            label="Ingredient 4"
            type="text"
            placeholder="e.g.Minced meat"
            validate
            pattern="[a-zA-Z ]*"
            value = {ingredients.i4}
            onChange={handleChange} 
          ></ListInput>

          <ListInput
            name="i5"
            label="Ingredient 5"
            type="text"
            placeholder="e.g.Soy sauce"
            validate
            pattern="[a-zA-Z ]*"
            value = {ingredients.i5}
            onChange={handleChange} 
          ></ListInput>

          <ListInput
            name="i6"
            label="Ingredient 6"
            type="text"
            placeholder="e.g.Salt"
            validate
            pattern="[a-zA-Z ]*"
            value = {ingredients.i6}
            onChange={handleChange} 
          ></ListInput>

          <ListInput
            name="i7"
            label="Ingredient 7"
            type="text"
            placeholder="e.g.Butter"
            validate
            pattern="[a-zA-Z ]*"
            value = {ingredients.i7}
            onChange={handleChange} 
          ></ListInput>

          <ListInput
            name="i8"
            label="Ingredient 8"
            type="text"
            placeholder="e.g.Corn"
            validate
            pattern="[a-zA-Z ]*"
            value = {ingredients.i8}
            onChange={handleChange} 
          ></ListInput>
        </List>
      </Block>
      <Block className="center">
        <Button large raised fill round color="orange" className="w-250" onClick={() => findMeRecipe()}>Find Me A Recipe!</Button>
      </Block>

    </Page>
  )
};

export default IngredientsPage;
