import './App.css';
import { useState } from 'react';
import TalkWithAi from './pages/chat/TalkWichAi';
import ImageGenerator from './pages/image/ImageGenerator';
import RecipeGenerator from './pages/recipes/RecipeGenerator';

function App() {
  const [activetab, setActiveTab] = useState('ai-ask');

  const handleTabChance = (tab) => {
    setActiveTab(tab);
  };
  
  return (    
    <div className="App">
      <button className={activetab === 'ask-ai' ? 'active' : ''} onClick={() => handleTabChance('ask-ai')}>Talk with AI</button>
      <button className={activetab === 'recipe-generator' ? 'active' : ''} onClick={() => handleTabChance('recipe-generator')}>Generate Recipes</button>
      <button className={activetab === 'image-generator' ? 'active' : ''} onClick={() => handleTabChance('image-generator')}>Generate Images</button>
      <div>
        {activetab === 'ask-ai' && <TalkWithAi />}
        {activetab === 'recipe-generator' && <RecipeGenerator /> }
        {activetab === 'image-generator' && <ImageGenerator />}
      </div>
    </div>    
  );
}

export default App;
