#!/bin/bash

# First migrate always runs to a database error for some reason
/opt/venv/bin/python ./manage.py migrate
sleep 10
/opt/venv/bin/python ./manage.py migrate
/opt/venv/bin/python ./manage.py runserver 0.0.0.0:8000


