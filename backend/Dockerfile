FROM python:3.8-slim-buster

WORKDIR /usr/src/hook

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/hook/requirements.txt
RUN pip install -r requirements.txt


COPY . /usr/src/hook/

# CMD [ "python","./app.py" ]
