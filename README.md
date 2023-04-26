# Pickle Rick adventures

This challenge will require:

1. Insecure deserialization exploitation
2. Gaining reverse shell access to a container
3. Decrypting a secret flag

The first task is to identify the services that are currently running on the hosts, and then proceed to locate any vulnerabilities in the web application. The next step is to use this vulnerability to gain access to the container and establish a reverse shell connection to host1, which contains valuable SSH keys. With these SSH keys, you can then access container2, which has an active SSH server running.

The ultimate objective is to locate and decrypt the encrypted flag that is present on host1. To achieve this, you will need to find the decryption key that is located on host2. Both the encrypted flag and decryption key are located in the user directory of their respective containers.