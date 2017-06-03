# HOW TO RUN

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``

## Lets start the project
1. Clone this repo
2. Install dependencies 
```cd app && npm install && cd ../backend && npm install && cd ../```
3. Run all the containers ```docker-compose up -d``` (may take a some time for build stuff)
4. Now we can run frontend application ```cd app && npm start```
5. Application now availaible at [http://localhost:4200/](http://localhost:4200/)
6. Enjoy :)