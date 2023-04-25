FROM python:3.12-rc-slim

# Set working directory
WORKDIR /app

# Copy web application files to container
COPY ./webapp .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Set entrypoint to launch services and web application
ENTRYPOINT ["python", "app.py"]
