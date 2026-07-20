FROM python:3.9.18-slim-bookworm

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

RUN python3 manage.py collectstatic --noinput
RUN python3 manage.py migrate

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "djangoproj.wsgi:application"]