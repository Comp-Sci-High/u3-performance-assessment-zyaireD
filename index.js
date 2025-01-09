const express = require('express');
const app = express()

let western_teams = [
  {
    "team_name": "Los Angeles Lakers",
    "city": "Los Angeles",
    "abbreviation": "LAL",
    "championships": 17,
    "conference_titles": 32,
    "arena": "Crypto.com Arena",
    "year_founded": 1947,
    "team_colors": ["Purple", "Gold"],
    "team_owner": "Jeanie Buss",
    "coach": "Darvin Ham"
  },
  {
    "team_name": "Golden State Warriors",
    "city": "San Francisco",
    "abbreviation": "GSW",
    "championships": 7,
    "conference_titles": 6,
    "arena": "Chase Center",
    "year_founded": 1946,
    "team_colors": ["Royal Blue", "Gold"],
    "team_owner": "Joe Lacob",
    "coach": "Steve Kerr"
  },
  {
    "team_name": "Denver Nuggets",
    "city": "Denver",
    "abbreviation": "DEN",
    "championships": 0,
    "conference_titles": 1,
    "arena": "Ball Arena",
    "year_founded": 1967,
    "team_colors": ["Nugget Gold", "Blue", "White"],
    "team_owner": "Stan Kroenke",
    "coach": "Michael Malone"
  },
  {
    "team_name": "Phoenix Suns",
    "city": "Phoenix",
    "abbreviation": "PHX",
    "championships": 0,
    "conference_titles": 2,
    "arena": "Footprint Center",
    "year_founded": 1968,
    "team_colors": ["Purple", "Orange", "White"],
    "team_owner": "Mat Ishbia",
    "coach": "Monty Williams"
  },
  {
    "team_name": "Dallas Mavericks",
    "city": "Dallas",
    "abbreviation": "DAL",
    "championships": 1,
    "conference_titles": 2,
    "arena": "American Airlines Center",
    "year_founded": 1980,
    "team_colors": ["Navy Blue", "Royal Blue", "Silver"],
    "team_owner": "Mark Cuban",
    "coach": "Jason Kidd"
  },
  {
    "team_name": "Minnesota Timberwolves",
    "city": "Minneapolis",
    "abbreviation": "MIN",
    "championships": 0,
    "conference_titles": 1,
    "arena": "Target Center",
    "year_founded": 1989,
    "team_colors": ["Navy Blue", "Timberwolf Grey", "North Star Gold"],
    "team_owner": "Glen Taylor",
    "coach": "Chris Finch"
  },
  {
    "team_name": "Portland Trail Blazers",
    "city": "Portland",
    "abbreviation": "POR",
    "championships": 1,
    "conference_titles": 3,
    "arena": "Moda Center",
    "year_founded": 1970,
    "team_colors": ["Red", "Black", "White"],
    "team_owner": "Paul Allen Estate",
    "coach": "Chauncey Billups"
  },
  {
    "team_name": "Sacramento Kings",
    "city": "Sacramento",
    "abbreviation": "SAC",
    "championships": 1,
    "conference_titles": 3,
    "arena": "Golden 1 Center",
    "year_founded": 1923,
    "team_colors": ["Purple", "Black", "Silver"],
    "team_owner": "Vivek Ranadivé",
    "coach": "Mike Brown"
  },
  {
    "team_name": "Los Angeles Clippers",
    "city": "Los Angeles",
    "abbreviation": "LAC",
    "championships": 0,
    "conference_titles": 0,
    "arena": "Crypto.com Arena",
    "year_founded": 1970,
    "team_colors": ["Red", "White", "Blue"],
    "team_owner": "Steve Ballmer",
    "coach": "Tyronn Lue"
  },
  {
    "team_name": "Utah Jazz",
    "city": "Salt Lake City",
    "abbreviation": "UTA",
    "championships": 0,
    "conference_titles": 2,
    "arena": "Vivint Arena",
    "year_founded": 1974,
    "team_colors": ["Purple", "Gold", "Green"],
    "team_owner": "Ryan Smith",
    "coach": "Will Hardy"
  }]

app.use((request, response, next) => {
  console.log(request.method + "/" + request.url)
  next()
})
app.get("/", (reqeust, response) => {
  response.status(200)
  response.send("<h2>western conference teams</h2>")
})
app.get("/docs", (request, response) => {
  response.status(200)
  response.send("<h1>Enter /Los Angeles Lakers and /Golden state warriors </h1>")
})

app.get("/Los%20Angeles%20Lakers",(request, response)=>{
  response.status(200)
  response.json(western_teams[0])
})
app.get("/Golden%20state%20warriors",(request, response)=>{
  response.status(200)
  response.json(western_teams[1])
})
app.use((request, response, next) => {
  response.send("not found, Not a western team")
})
app.listen(3000, () => {
  console.log("Server running")
})
