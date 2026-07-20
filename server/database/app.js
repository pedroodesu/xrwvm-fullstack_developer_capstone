const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express()
const port = 3030;
app.use(cors())
app.use(require('body-parser').urlencoded({ extended: false }));

const reviews_data = JSON.parse(fs.readFileSync("data/reviews.json", 'utf8'));
const dealerships_data = JSON.parse(fs.readFileSync("data/dealerships.json", 'utf8'));

let reviews = reviews_data['reviews'];
let dealerships = dealerships_data['dealerships'];

// Express route to home
app.get('/', async (req, res) => {
  res.send("Welcome to the Dealership API")
});

// Express route to fetch all reviews
app.get('/fetchReviews', async (req, res) => {
  try {
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch reviews by a particular dealer
app.get('/fetchReviews/dealer/:id', async (req, res) => {
  try {
    const filtered = reviews.filter(r => String(r.dealership) === String(req.params.id));
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch all dealerships
app.get('/fetchDealers', async (req, res) => {
  try {
    res.json(dealerships);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch Dealers by a particular state
app.get('/fetchDealers/:state', async (req, res) => {
  try {
    const filtered = dealerships.filter(d => d.state === req.params.state);
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch dealer by a particular id
app.get('/fetchDealer/:id', async (req, res) => {
  try {
    const filtered = dealerships.filter(d => String(d.id) === String(req.params.id));
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching document' });
  }
});

// Express route to insert review
app.post('/insert_review', express.raw({ type: '*/*' }), async (req, res) => {
  try {
    const data = JSON.parse(req.body);
    const sorted = [...reviews].sort((a, b) => b.id - a.id);
    const new_id = sorted.length > 0 ? sorted[0].id + 1 : 1;
    const review = {
      "id": new_id,
      "name": data['name'],
      "dealership": data['dealership'],
      "review": data['review'],
      "purchase": data['purchase'],
      "purchase_date": data['purchase_date'],
      "car_make": data['car_make'],
      "car_model": data['car_model'],
      "car_year": data['car_year'],
    };
    reviews.push(review);
    res.json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error inserting review' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});