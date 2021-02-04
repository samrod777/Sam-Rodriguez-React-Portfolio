import './App.css';
import PortfolioCard from './components/PortfolioCard';
import { Component } from 'react';


function App() {
  let portfolioData = [
    {
      href: "https://samrod777.github.io/Recipe-List-Platform",
      src: "./assets/Project1.png",
      alt: "Screenshot of project #1, it shows a martini with ingredients and instructions on how to make it",
      stripe: "Food & Drinks Recipes"
    },
    {
      href: "https://samrod777.github.io/Weather-Dashboard-HW6",
      src: "./assets/weather-dashboard.png",
      alt: "Screenshot of Weather dashboard app",
      stripe: "Wheather dashboard"
     },
    {
      href: "https://samrod777.github.io/Weather-Dashboard-HW6",
      src: "./assets/weather-dashboard.png",
      alt: "Screenshot of Weather dashboard app",
      stripe: "Wheather dashboard"
     },
     {
      href: "https://samrod777.github.io/Weather-Dashboard-HW6",
      src: "./assets/weather-dashboard.png",
      alt: "Screenshot of Weather dashboard app",
      stripe: "Wheather dashboard"
     },
     {
      href: "https://samrod777.github.io/Weather-Dashboard-HW6",
      src: "./assets/weather-dashboard.png",
      alt: "Screenshot of Weather dashboard app",
      stripe: "Wheather dashboard"
     },
     {
      href: "https://samrod777.github.io/Weather-Dashboard-HW6",
      src: "./assets/weather-dashboard.png",
      alt: "Screenshot of Weather dashboard app",
      stripe: "Wheather dashboard"
     }
  ]
  return (
    <div className="App">
      {portfolioData.map((item) => {
        return <PortfolioCard data={item}/>
      } )}
    </div>
  );
}

export default App;
