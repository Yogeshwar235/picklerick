FROM python:3.12-rc-slim

RUN apt update && apt -y install openssh-server && systemctl ssh start && systemctl ssh enable

RUN useradd -ms /bin/bash rick

WORKDIR /home/rick

COPY container_key /home/rick/.ssh/id_rsa
COPY encrypted_flag.txt /home/rick/encrypted_flag.txt

RUN chown -R rick:rick /home/rick/.ssh && chmod 600 /home/rick/.ssh/id_rsa

# Set working directory
WORKDIR /app

# Copy web application files to container
COPY ./webapp .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Set entrypoint to launch services and web application
ENTRYPOINT ["python", "app.py"]
