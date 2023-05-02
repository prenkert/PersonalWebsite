---
project_title: Personal Website
featured_project: true
completed: false
project_post_date: 2021-06-24
project_category: Personal
path: /personal_website/index
project_preview_thumbnail: gatsby_logo.png
tools: ["Gatsby", "Netlify", "Visual Studio Code"]
project_links: [
    {"url": "https://philiprenkert.netlify.app/", "label": "Home Page"},
    {"url": "https://github.com/prenkert/PRPortfolio", "label": "GitHub"}
]
description: A personal website for documenting my various projects across academic, professional, and personal domains. 
---
For too long, I kept projects hidden away in a folder on my PC. This website is an attempt to bring them out into the open; to document what I've done and what I learned along the way. It's also a visual resume that paints a much clearer picture of who I am and what I've done than a single-page document. 

When I determined that I wanted to put together a website, the logical thing to do would be to hop onto Squarespace and "create a website in minutes." But what fun would that be? Coding a website is a right-of-passage for the software developer, and it offers more flexibility than off-the-shelf alternatives. Because my projects range from software development to mechanical design to arts and crafts, I needed a versatile framework that sits somewhere between a portfolio and a blog. I wanted something that was simple and media-focused (pictures are worth a thousand words, and I'm a slow writer) but provides space for text to document the details of a project. My primary inspiration was Garret Vercoe's [personal website](https://garrettvercoe.com/); its project-focused horiontal scroll design neatly fit my requirements. 

The site is built with Gatsby.js, a React-based static site generator, chosen for its simplicity, speed and quality docs. Gatsby also provides plenty of flexibility for sourcing content. Project pages are written as markdown files and loaded into Gatsby using the `gatsby-transformer-remark` plugin. While I could implement a content management system, It's just as easy for me to edit the content directly in the source repository. I'm using Netlify to build and deploy the site; I love it's git-friendly workflow. 

The website is very much a work in progress. I hope to add a "Photography" page with a standard grid layout. Also, to keep from bloating the Git repository too much, I'd like to move more of my media content to a hosting service like Cloudinary. I have some work to do on the formatting the Markdown content that's directly inserted into the project pages. And eventually, I'd like to put together a timeline scrollbar. 