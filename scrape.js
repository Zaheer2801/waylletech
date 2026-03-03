import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

// Map of topics to W3Schools URLs for extraction
const topicUrls = [
    { day: 'Day 1', url: 'https://www.w3schools.com/html/html_intro.asp', topic: 'HTML5 Semantic Structure, Forms, Accessibility' },
    { day: 'Day 2', url: 'https://www.w3schools.com/css/css_intro.asp', topic: 'CSS Fundamentals: Box Model, Selectors, Specificity' },
    { day: 'Day 3', url: 'https://www.w3schools.com/css/css3_flexbox.asp', topic: 'CSS Layout: Flexbox Complete Guide' },
    { day: 'Day 4', url: 'https://www.w3schools.com/css/css_grid.asp', topic: 'CSS Grid Layout System' },
    { day: 'Day 11', url: 'https://www.w3schools.com/js/js_intro.asp', topic: 'JS Basics: Variables, Data Types, Operators' },
    { day: 'Day 14', url: 'https://www.w3schools.com/js/js_arrays.asp', topic: 'Arrays: Methods, Iteration, Manipulation' },
    { day: 'Day 21', url: 'https://www.w3schools.com/react/react_intro.asp', topic: 'React Intro: JSX, Components, Props' },
    { day: 'Day 41', url: 'https://www.w3schools.com/nodejs/nodejs_intro.asp', topic: 'Node.js & Express: Setup, Routing, Middleware' },
];

async function scrapeW3Schools() {
    const scrapedData = {};

    for (const item of topicUrls) {
        try {
            console.log(`Scraping ${item.url}...`);
            const { data } = await axios.get(item.url);
            const $ = cheerio.load(data);

            // W3Schools usually has a main container div with id="main" containing the text
            const mainContent = $('#main').text();

            // Clean up text
            let cleanText = mainContent
                .replace(/\n+/g, ' ') // Replace multiple newlines with single space
                .replace(/\s+/g, ' ') // Replace multiple spaces with single space
                .trim();

            // Extract first 500 characters as a summary for the viewer
            const summary = cleanText.substring(0, 500) + '...';

            scrapedData[item.day] = {
                topic: item.topic,
                content: summary
            };

        } catch (error) {
            console.error(`Error scraping ${item.url}:`, error.message);
        }
    }

    // Write out to a temporary file so we can merge it into syllabusData.js
    fs.writeFileSync('./src/data/scrapedW3Schools.json', JSON.stringify(scrapedData, null, 2));
    console.log('Scraping complete, data saved to src/data/scrapedW3Schools.json!');
}

scrapeW3Schools();
