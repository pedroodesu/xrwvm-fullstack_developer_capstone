# Cars Dealership - Full Stack Capstone Project

A responsive full-stack web application for **Cars Dealership**, a national car retailer in the U.S. Users can browse dealership branches across different states, view customer reviews with AI-powered sentiment analysis, and submit their own reviews after purchasing a vehicle.

## Features
- Dealer listing with filtering by state
- Dealer detail pages with customer reviews
- Sentiment analysis on reviews (positive, negative, neutral) via a Flask microservice
- User registration, login, and logout
- Post-purchase review submission (for logged-in users)
- Django admin panel for managing car makes and models
- CI/CD pipeline with GitHub Actions
- Containerized microservices deployed with Docker, Kubernetes, and IBM Cloud Code Engine

## Architecture
- **Frontend**: React (served through Django)
- **Backend**: Django (main app), Node.js + Express (dealers/reviews API)
- **Database**: MongoDB (dealers/reviews), SQLite (Django admin/users)
- **Sentiment Analysis Microservice**: Flask + NLTK (VADER), deployed on IBM Cloud Code Engine and Kubernetes

## Project Structure

server/
├── djangoapp/ # Django app: views, models, REST API integration
├── djangoproj/ # Django project settings
├── frontend/ # React frontend
├── database/ # Node.js/Express API + MongoDB (Docker Compose)
└── manage.py


## Installation

```bash
git clone https://github.com/pedroodesu/xrwvm-fullstack_developer_capstone.git
cd xrwvm-fullstack_developer_capstone/server
pip install -r requirements.txt
```

## Running the application

**Backend (MongoDB + Node.js API):**
```bash
cd database
docker-compose up -d
```

**Sentiment Analyzer microservice:**
```bash
cd djangoapp/microservices
docker build . -t sentiment-analyzer
docker run -d -p 5000:5000 sentiment-analyzer
```

**Django server:**
```bash
python manage.py migrate
python manage.py runserver
```

**React frontend:**
```bash
cd frontend
npm install
npm start
```

## CI/CD
This project uses GitHub Actions for continuous integration, running linting and tests on every push.

## Deployment
The sentiment analyzer microservice is deployed on IBM Cloud Code Engine and Kubernetes. The Django application is deployed to IBM Cloud Code Engine.

## Technologies
- Python, Django, Flask
- JavaScript, React, Node.js, Express
- MongoDB, SQLite
- Docker, Kubernetes, IBM Cloud Code Engine
- GitHub Actions
- NLTK (VADER Sentiment Analysis)

## Author
Pedro