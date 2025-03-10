---
layout: page
title: Airport Identification
description: Identification of airports based on plane density, with image recognition capacity
img: assets/img/adsb_app.png
importance: 1
category: IEX
related_publications: false
---

This is a data science/visualization project that focuses on using pulled ADS-B data to identify airports in Florida, and to track the flight paths of specific flights using the h3 python library. The code can be adapted to anywhere in the world where ADS-B data is available. The main goal of this project was to build a template for an app that can take geospatial data, output a visual display of that data, then use an API to get a satellite image to visually check the results that are implied by the data, and finally to use image processing and computer vision to analyze the satellite image. If I had access to better quality satellite imagery, more computing power to run a more powerful image processing model, and more data, this project would become much more useful.

At this point however, this app consists of three parts:
1. A sqlite3 database that contains ADSB data collected within a 500 mile radius of Tampa, Florida.
2. A Fastapi backend that recieves user inputs for map radius, h3 cell resolution, and signifcance (measured by number of airplanes in a specific cell)
3. A Streamlit frontend  that displays information about the goals of the project, the data used in the project, and allows users to input the map radius, h3 cell resolution, and signifcance (measured by number of airplanes in a specific cell). From this input an image of how many planes are in each hex (out of all grounded planes) is returned, which allows users to see where an airport is likely to be. Then a satellite image is generated using the Sentinal satellite imagery API (more on that below), and I use ChatGPT's API to prompt it to analyze the satellite image.

This app depends on having an API key from the Sentinal satellite imagery API. You'll need to create an account with them, but they have a free 30 day trial which is what I used to make this app. (https://www.sentinel-hub.com/develop/api/).

This app also depends on having an openAI API key, which you can review here: https://platform.openai.com/docs/overview. 