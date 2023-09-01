import React, { useEffect, useState } from "react";
import { BlockTitle, Page, Block, Button, Card } from "framework7-react";
import Dom7 from "dom7";

const RecipePage = (props) => {

    const recipe = props.recipe
    const { f7router } = props
    const $$ = Dom7
    let [ingredientsList, setIngredientsList] = useState();
    let [instructionsList, setInstructionsList] = useState();

    useEffect(() => {
        const text = recipe[0].generated_text
        //Extract title, ingredients and instructions from string
        const sections = extractSections(text)
        //Set the title of the recipe
        $$("#recipe-title").html(sections.title)
        //Split the ingredients by numbers and keep them
        const ingredients_arr = sections.ingredients.split(/\s(?=\d)/)
        setIngredientsList(ingredients_arr.map((ingredient, index) => {
            return (
                <p key={index}>{(index+1) + ". " + ingredient}</p>
            )
        }));
        //Split the instructions by '. '
        const instructions_arr = sections.directions.split(/(?<=\. )/)
        setInstructionsList(instructions_arr.map((instruction, index) => {
            return (
                <p key={index}>
                    {(index+1) + ". " + instruction.charAt(0).toUpperCase() + instruction.slice(1)}
                </p>
            )
        }))
    }, [])

    function extractSections(text) {
      const titleMatch = text.match(/title:\s*(.*?)(?=ingredients|$)/);
      const ingredientsMatch = text.match(/ingredients:\s*(.*?)(?=directions|$)/);
      const directionsMatch = text.match(/directions:\s*(.*?)(?=\s*$)/);
    
      if (!titleMatch || !ingredientsMatch || !directionsMatch) {
        throw new Error("One or more sections could not be found in the text");
      }
    
      const title = titleMatch[1].trim();
      const ingredients = ingredientsMatch[1].trim();
      const directions = directionsMatch[1].trim();
    
      return { title, ingredients, directions };
    }

    return (
        <Page name="recipe" className="bg-color-white">
            <BlockTitle>STEP 3</BlockTitle>
            <BlockTitle id="recipe-title" className="subtitle center margin-bottom"></BlockTitle>
            <Block strong inset id="recipe-block">
                <BlockTitle>&#x1F34D;&nbsp;Ingredients:</BlockTitle>
                <Card className="p-10">
                    {ingredientsList}
                </Card>
                <BlockTitle className="ml-0">&#x1F374;&nbsp;Instructions:</BlockTitle>
                <Card className="p-10">
                    {instructionsList}
                </Card>
            </Block>
            <Block className="center">
                <Button large raised fill round color="orange" className="w-250 margin-bottom" onClick={() => {
                    f7router.clearPreviousHistory()
                    f7router.navigate('/')
                }}>Find another recipe</Button>
            </Block>
        </Page>
    )
}

export default RecipePage;

