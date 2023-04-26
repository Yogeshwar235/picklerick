FROM python:3.12-rc-slim

RUN apt update && apt -y install openssh-server
RUN service ssh start

RUN useradd -ms /bin/bash rick

WORKDIR /home/rick

COPY container_key /home/rick/.ssh/id_rsa
COPY encrypted_flag.txt /home/rick/encrypted_flag.txt

RUN chown -R rick:rick /home/rick/.ssh
RUN chmod 600 /home/rick/.ssh/id_rsa

# Set working directory
WORKDIR /app

# Copy web application files to container
COPY ./webapp .

COPY secret.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Set entrypoint to launch services and web application
ENTRYPOINT ["python", "app.py"]
