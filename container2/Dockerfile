FROM ubuntu:lunar

RUN useradd -ms /bin/bash rick

WORKDIR /home/rick

COPY container_key.pub /home/rick/.ssh/authorized_keys
COPY decryption_key.txt /home/rick/decryption_key.txt

RUN chown -R rick:rick /home/rick/.ssh
RUN chmod 600 /home/rick/.ssh/authorized_keys
