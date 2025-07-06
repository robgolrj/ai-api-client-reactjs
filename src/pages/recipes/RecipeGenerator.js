import React, { useState } from "react";
import api from "../../services/api";
import ReactMarkdown from 'react-markdown';

function RecipeGenerator() {

  const [ingredients, setIntegredients] = useState('');
  const [cuisine, setCuisine] = useState('Any');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [descricaoErro, setDescricaoErro] = useState('');  

  const [recipe, setRecipe] = useState('');

  const createRecipe = async () => {
    try {
      const response = await api.get(`/recipe-creator`, {
        params: { ingredients,
          cuisine,
          dietaryRestrictions }
      });
      const data = await response.data;
      console.log(data);
      setRecipe(data);
      setDescricaoErro('');

    } catch (error) {
      console.error("Error communicating with AI:", error);
      setDescricaoErro("Sorry, I couldn't process your request at the moment.");
    }
  }

  return (
    <div>
      <h2>Generate Recipes</h2>      
      <input type="text" value={ingredients}
        onChange={(e) => setIntegredients(e.target.value)}
        placeholder="Enter ingredients (comma separated)"
      />
      <input type="text" value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Enter cuisine type"
      />
      <input type="text" value={dietaryRestrictions}
        onChange={(e) => setDietaryRestrictions(e.target.value)}
        placeholder="Enter dietary restrictions"
      />
      <button onClick={createRecipe}>Ask AI</button>
      {descricaoErro && (
        <p className="error-msg">{descricaoErro}</p>
      )}
      <div className="output">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </div>
  );
}
export default RecipeGenerator;