# Pickle Rick adventures

This challenge will require:

1. Insecure deserialization exploitation
2. Gaining reverse shell access to a container
3. Decrypting a secret flag

Identify the services running on the hosts, and find the vulnerabilty in the webapp. Use this vulnerability to login to the container The objective is to gain reverse shell access to host1, which contains SSH keys. From this container, use these SSH keys to access container2, which has an SSH server running. 

The final goal is to find and decrypt the encrypted flag from host 1 using decryption key found in host 2. Both the files located in user dir of the containers.