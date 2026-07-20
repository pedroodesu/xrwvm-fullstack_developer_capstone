FROM python:3.9.18-slim-bookworm
WORKDIR /python-docker
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
RUN apt-get update && apt-get install -y unzip && rm -rf /var/lib/apt/lists/*
COPY . .
RUN mkdir -p /root/nltk_data/sentiment && \
    cd sentiment && \
    unzip -o vader_lexicon.zip -d /root/nltk_data/sentiment && \
    cd ..
ENV FLASK_APP=app.py
RUN ls
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]