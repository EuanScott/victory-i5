<div style="max-width: 1024px; margin: auto; background: rgba(128, 128, 128, 0.1); padding: 8px; border-radius: 4px">

# Meridian Victory Cloud Sales

## Table of Contents
1. [Overview](#overview)
2. [Sections](#sections)
3. [Resources](#resources)

<br/>

# Overview

The Victory mPos solution created for The Meridian Group to propel their business into the 21st century.


# Sections

Each section of the project is split up into its own documentation file that gives you details on how the system works. They are as follows: 

1. [Mobile App][md_2]
2. [Web Portal][md_2] _Not in this project_
3. [Backend][md_2] _Not in this project_

# Setup

Install: 
- [Docker][web_1]
- [NodeJs][web_2] 13.0.0 or newer
- [npm][web_3]
- [Angular][web_4]
- [Ionic][web_5]

Create a .env file with the following:
```bash
repo=repo.vectra.cloud        # docker image repository
host=victorycloudsales.com    # docker server
user=username                 # server username
```

DB:
```bash
cd backend/server

# Run migration scripts
$ npm run db:migrate

# Seed database with dummy data
$ npm run db:seed

- - - OR - - -

# Run migration script and seed database
$ npm run db:refresh
```

# Development
Terminal 1: MySQL Database
```bash
$ cd backend/server
$ npm run deploy:local
```

Terminal 2: Node Server
```bash
$ cd backend/server
$ npm run dev
```

Terminal 3: Portal
```bash
$ cd portal
$ npm start
```

Terminal 4: Mobile
```bash
$ cd mobile
$ npm start
```

# Deployment
Available environments are <mark>&nbsp;local&nbsp;</mark>, <mark>&nbsp;staging&nbsp;</mark> and <mark>&nbsp;production&nbsp;</mark>

### Fresh deployment (clean database)
```bash
$ cd backend
$ npm run deploy:{environment}:fresh
```

### Normal deployment (no migrations)
```bash
$ cd backend
$ npm run deploy:{environment}
```

<br/>

# Resources

<small>_Check the actual code file to see the resources._</small>

[comment]: <Links to documentation files that will be in each of the respective folders in the main app file structure (src)>
[md_1]: ./src/app/shared/models/models.md
[md_2]: ./documentation/mobile.md

[web_1]: https://docs.docker.com/get-docker/
[web_2]: https://nodejs.org/en/download/
[web_3]: https://www.npmjs.com/get-npm
[web_4]: https://angular.io/guide/setup-local
[web_5]: https://ionicframework.com/docs/intro/cli

</div>
