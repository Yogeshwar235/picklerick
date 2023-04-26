FROM ubuntu:lunar

RUN apt update && apt -y install openssh-server && service ssh start

RUN sed -i 's/^#\s*PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config && \
    sed -i 's/^#\s*#AuthorizedKeysFile .ssh\/authorized_keys .ssh\/authorized_keys2/AuthorizedKeysFile .ssh\/authorized_keys/' /etc/ssh/sshd_config

EXPOSE 22

RUN useradd -ms /bin/bash rick && echo "rick:jgvduy67@#" | chpasswd

WORKDIR /home/rick

COPY container_key.pub /home/rick/.ssh/authorized_keys
COPY decryption_key.txt /home/rick/decryption_key.txt

RUN chown -R rick:rick /home/rick/.ssh && chmod 600 /home/rick/.ssh/authorized_keys
