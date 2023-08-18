import React, { useEffect } from "react";
import { BlockTitle, Block, Page } from "framework7-react";

const LoadingPage = (props) => {

    const ingredients = props.ingredients
    const { f7router } = props
    const kwargs = {
        "max_length": 512,
        "min_length": 64,
        "no_repeat_ngram_size": 3,
        "do_sample": true,
        "top_k": 60,
        "top_p": 0.95,
        "options": { "wait_for_model": true}
    }

    useEffect(async () => {
        const api_key = await getApiKey()
        if (api_key) {
            const ingredients_array = Object.values(ingredients).filter((entry) => entry !== '').toString()
            const recipe = await query({ "inputs": [ingredients_array], ...kwargs }, api_key)
            console.log(recipe)
            if (recipe) {
                console.log("Loading completed")
                f7router.navigate('/recipe/', { props: { recipe } })
            }
            else
                f7router.navigate('/error/')
        } else {
            f7router.navigate('/error/')
        }
    }, [])

    async function getApiKey() {
        let api_key;
        try {
            const response = await fetch('../.secret/huggingface.secret.json')
            const data = await response.json()
            api_key = data.API_KEY
        } catch (e) {
            const code = error.code
            const message = error.message
            console.error(code, message)
        }
        return api_key
    }

    async function query(data, api_key) {
        console.log(data)
        const auth = "Bearer " + api_key
        let result = null
        try {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/flax-community/t5-recipe-generation",
                {
                    headers: { Authorization: auth },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );
            result = await response.json();
        } catch (e) {
            const code = error.code
            const message = error.message
            console.error(code, message)
        }
        return result
    }

    return (
        <Page name="loading" className="bg-color-white">
            <BlockTitle>STEP 2</BlockTitle>
            <Block className="center">
                <div className="waviy padding-horizontal mt-70">
                    <div>
                        <span >F</span>
                        <span >i</span>
                        <span >n</span>
                        <span >d</span>
                        <span >i</span>
                        <span >n</span>
                        <span >g</span>
                        <span >&nbsp;a&nbsp;</span>
                    </div>
                    <div>
                        <span >r</span>
                        <span >e</span>
                        <span >c</span>
                        <span >i</span>
                        <span >p</span>
                        <span >e</span>
                        <span >.</span>
                        <span >.</span>
                        <span >.</span>
                    </div>
                </div>
                <img src="../assets/feast.png" width="330px" />
            </Block>
        </Page>
    )
}

export default LoadingPage;