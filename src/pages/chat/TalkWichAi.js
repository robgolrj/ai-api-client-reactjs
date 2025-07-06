import React, { useState } from "react";
import api from "../../services/api";
import { wait } from "@testing-library/user-event/dist/utils";

function TalkWithAi() {
  const [prompt, setPrompt] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [descricaoErro, setDescricaoErro] = useState('');  

  const askAI = async () => {
    try {      
      const response = await api.get(`/ask-ai-options`,{
        params: { prompt }
      });
      const data = await response.data;
      console.log(data);
      setChatResponse(data);
      setDescricaoErro('');

    } catch (error) {
      console.error("Error communicating with AI:", error);
      setDescricaoErro("Sorry, I couldn't process your request at the moment.");
    }\ q
  };


  return (
    <div>
          <h2>Talk with AI</h2>
          <input type="text" value={prompt}
          onChange={(e) => setPrompt(e.target.value)} 
          placeholder="Type your message here"
          />
          <button onClick={askAI}>Ask AI</button>
          {descricaoErro && (
            <p className="error-msg">{descricaoErro}</p>
          )}
          <div className="output">
            <p>{chatResponse}</p>
          </div>
    </div>
  );
}
export default TalkWithAi;