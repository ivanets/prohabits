# HOW TO RUN

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) - Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) - Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) - other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``

## Lets start the project
1. Clone this repository
2. Install dependencies
```cd app && npm install && cd ../backend && npm install && cd ../```
3. Run all the containers ```docker-compose up -d``` (may take a some time for build stuff)
4. Deploy ```pro_habits.mwb``` via MySQL Workbench, or import ```pro_habits.sql``` in [myadmin](http://0.0.0.0:4022/)
5. Deploy ```pro_habits_data.sql``` in [myadmin](http://0.0.0.0:4022/)
6. Run frontend application ```cd app && npm start```
7. Application now availaible at [http://localhost:4200/](http://localhost:4200/)

## DB Architecture
<img src="https://github.com/ivanets/prohabits/pro_habits_mysql_arch.png?raw=true">