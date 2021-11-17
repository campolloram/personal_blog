# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

RUN python3 -m venv /opt/venv
WORKDIR /app
ENV PYTHONUNBUFFERED=1

COPY requirements.txt requirements.txt
RUN /opt/venv/bin/pip3 install -r requirements.txt

COPY . .
ENV DJANGO_SECRET_KEY='j#_lxuvo8q@f**nwh%!sw&7nfy+2+9a)o%1s9@s*&h2lk7mg%9'
ENV DEBUG=False

EXPOSE 8000
RUN chmod +x ./start.sh
CMD ["./start.sh"]
