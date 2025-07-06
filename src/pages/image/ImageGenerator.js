import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";
import React, { useState } from "react";
import api from "../../services/api";

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');  
  const [imagensUrls, setImagensUrls] = useState([]);
  const [descricaoErro, setDescricaoErro] = useState('');  

  const generateImages = async () => {
    try {
      const response = await api.get(`/generate-image`, {
        params: { prompt }
      });
      const data = await response.data;
      console.log(data);
      setImagensUrls(data);
      setDescricaoErro('');
    } catch (error) {
      console.error("Error communicating with AI:", error);
      setDescricaoErro("Sorry, I couldn't process your request at the moment.");
    }
  };

  return (
    <div>
      <h2>Generate Images</h2>      
      <input type="text" value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="enter a prompt for generate an image"
      />
      <button onClick={generateImages}>Generate Image</button>
      {descricaoErro && (
        <p className="error-msg">{descricaoErro}</p>
      )}
      <div className="image-grid">
        {imagensUrls.map((url, index) =>(
          <img key={index} src={url} alt={`Generated ${index}`} />
        ))}        
        {[...Array(4 - imagensUrls.length)].map((_, index) => (
          <div key={index + imagensUrls.length} className="empty-image-slot">
            </div>            
        ))
        }        
      </div>      
    </div>
  );
}
export default ImageGenerator;