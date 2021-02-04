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
      href: "https://samrod777.github.io/Work-Day-Scheduler-HW5/",
      src: "./assets/Day-scheduler.png",
      alt: "Screenshot of the Day Scheduler app",
      stripe: "Workday Scheduler"
     },
     {
      href: "https://fathomless-retreat-85881.herokuapp.com/",
      src: "./assets/Eat-da-burger-screenshot.png",
      alt: "Screenshot of the Eat-da-burger app",
      stripe: "Eat Da Burger!"
     },
     {
      href: "https://samrod777.github.io/employee-directory/",
      src: "./assets/EmpDir.png",
      alt: "Screenshot of Employee Directory app",
      stripe: "Employee Directory"
     },
     {
      href: "https://protected-crag-05436.herokuapp.com",
      src: "./assets/FitnessTracker.png",
      alt: "Screenshot of Fitness Tracker dashboard",
      stripe: "Fitness Tracker"
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
