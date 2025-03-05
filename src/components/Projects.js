import React from 'react';

const Projects = () => {
  return (
    <section className='projects'>
      <h2>Projects</h2>
      <p>Here are some of my projects:</p>

      <h3>AI & Data Science Projects</h3>
      <ul>
        <li><strong>AI Travel Planner:</strong> An AI-powered travel planner that provides recommendations, multi-mode travel options, and cost estimates.</li>
        <li><strong>AI Code Reviewer:</strong> A tool that analyzes and reviews code, providing suggestions for improvements.</li>
        <li><strong>Regex Matcher:</strong> A web-based tool to test and visualize regular expressions.</li>
        <li><strong>EDA on Electric Vehicles:</strong> Exploratory Data Analysis on electric vehicle trends and adoption.</li>
      </ul>

      <h3>Full-Stack Development Projects</h3>
      <ul>
        <li><strong>Personal Budget Tracker:</strong> A web app to track expenses and manage budgets efficiently.</li>
        <li><strong>Memory Match Game:</strong> A fun and interactive memory card matching game built with JavaScript.</li>
        <li><strong>Clone of Innomatics Website:</strong> A fully responsive replica of the Innomatics Research Labs website.</li>
      </ul>
    </section>
  );
};

export default Projects;
