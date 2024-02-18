# DiscoverYYC

This is the Repository for Calgary Hacks 2024.

## Table of Contents

1. [TODO](#todo)
2. [How To Run](#how-to-run)
    1. [Web Server](#web-server)
    2. [Mobile App](#mobile-app)
3. [Introduction](#introduction)
    1. [What is this app?](#what-is-this-app)
    2. [Who is this made for?](#who-is-this-made-for)
4. [Inspiration](#inspiration)
5. [Accomplishments](#accomplishments-that-were-proud-of)
6. [What We Learned](#what-we-learned)
7. [How We Built It](#how-we-built-it)
8. [Challenges](#challenges-we-ran-into)
9. [What's Next](#whats-next-for-discoveryyc)

## TODO:

- [x] Database
    - [x] MongoDB
- [x] Web-Server
    - [x] AWS
    - [x] Rust
- [x] Web Page
    - [x] Data Visualization
    - [x] Web-Design
        - [x] Figma
    - [x] Map API
    - [x] User Accounts

## How to run

### Web Server
To run the web server, run one of the following commands depending on your environment:
    DEV: ROCKET_ENV=debug cargo run
    PROD: ROCKET_ENV=release cargo run

### Mobile App

- Clone this github repo to your local device
- Download the Expo app on your mobile deivce
- Run 'npm install -g expo-cli'
- Run 'npm install'
- Run 'npm start' or 'expo start'
- Scan the QR code on camera app for iPhone, or on expo app for Android
- Enjoy!

## Introduction

### What is this app?

This app features all of the historical sites around the city, encouraging users to explore the city by featuring a 'Site of the Day' to visit, a list view of all the sites, and a map view. Clicking into the site will give you the historical background of the location.

A future version of this app would be partenered with official sites in Calgary such as Heritage Park and Calgary Zoo, and each real life visit to a free historic site would allow the user to earn towards free or discounted passes to these sites.

### Who this is made for?

Anyone who wants to explore Calgary through a historical lens and learn more about what this beautiful city has to offer!

## Inspiration

The City of Calgary is rich with historical landmarks that most Calgarians cluelessly walk past every day. Cultural history is not necessarily at the top of mind when most think of Calgary, and it's a shame. Many Calgarians do not feel connected to the city as there is a lack of a sense of community, and new Calgarians often struggle with the lack of community. We were inspired to build this app to not only help tourists enjoy the city with ease, but also to help all Calgarians to better understand and feel more connected to our heritage. This will develop loving and long-lasting communities all over Calgary and improve physical and mental health through fun exploration and adventure.

## Accomplishments that we're proud of

We are very proud of the fact we built a server and integrated a database with a mobile app, as well as integrating google maps with the app.

## What we learned

We learned how to use mongoDB and how to integrate a webserver with a mobile app. We also learned how react native differs from react, and how react native's components are designed to help mobile development, while react is mostly for traditional websites.

## How we built it

We built our app in react native to take advantage cross-platform deployment. This allows us to reach as many Calgarians as possible regardless of their platform. We used data from the City of Calgary's open data sets, and put them on a mongoDB database. We built a restful API in Rust using the rocket framework which allowed our app to seamlessly query mongo. The web server runs on a Google cloud instance and has a full domain name and SSL certification. That allows us to query mongo through HTTPS efficiently and safely.

Tech Stack: Rust, MongoDB, React Native, Google Maps, Google Cloud, Rocket, Expo

## Challenges we ran into

We realized half-way through that react did not have good capabilities to develop mobile applications. So we had to change up our approach to react native, which was more familiar with our team.

## What's next for DiscoverYYC

A future version of this app would be partenered with official sites in Calgary such as Heritage Park and Calgary Zoo, and each real life visit to a free historic site would allow the user to earn towards free or discounted passes to these sites.
