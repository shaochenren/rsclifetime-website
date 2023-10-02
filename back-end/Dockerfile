# Use an official Python runtime as a parent image
FROM python:3.8

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PYTHONPATH /backend/myproject:$PYTHONPATH

# Set work directory
WORKDIR /backend

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend directory (including the Django project and app)
COPY . /backend/

# CMD will run when the container is launched
CMD ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8000"]


