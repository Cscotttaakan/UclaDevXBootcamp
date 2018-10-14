# Setup git

## Linux

### Install from repositories

- Debian/Ubuntu: `$ apt install git`
- Arch: `$ pacman -S git`

### Configure git

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email "johndoe@example.com"
```

### On completion

- `$ git --version` should print out the version of git that is installed

## MacOS

### Install a package manager

- Install the [brew package manager](https://brew.sh/)

### Install git

- `$ brew install git`

### Configure git

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email "johndoe@example.com"
```

### On completion

- `$ git --version` should print out the version of git that is installed

## Windows

### Install git

- Install Linux Subsystem
- **OR** Install [Git for Windows](https://gitforwindows.org/)
  (required for the bash like shell and linux utilities)

### Configure git

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email "johndoe@example.com"
```

### On completion

- `$ git --version` should print out the version of git that is installed

# Clone this repo

## All OS's

- Run the following in a directory where you would like your project to be:
- `git clone https://github.com/ucladevx/devxbootcamp-2018fall`

# Setup Docker and Docker-Compose

## Linux

### Install from repositories

- Debian: [Docker Debian documentation](
  https://docs.docker.com/install/linux/docker-ce/debian/#install-using-the-convenience-script)
  [Docker Compose Install](https://docs.docker.com/compose/install/)
- Ubuntu: [Docker Ubuntu documentation](
  https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script)
  [Docker Compose Install](https://docs.docker.com/compose/install/)
- Arch: `$ pacman -S docker docker-compose`

### Add your user to the docker group

- `$ usermod -aG docker <user>`
- `$ groups <user>` should include docker

### Enable and start the service

- `$ systemctl enable docker`: Enables the docker service to run when the
  machine is booted
- `$ systemctl start docker`: Starts the docker service. Only needs to be run
  after enabling the service because systemd will only start enabled services
  on boot. Afterwards, if the docker service is enabled, it will be
  automatically started by systemd on boot.
- `$ systemctl status docker`: For debugging purposes. Should show the docker
  service `active and running`. If it is `failed`, run `$ systemctl restart
  docker`. If it is `inactive`, refer to `systemctl enable docker` and
  `systemctl start docker`.

### On completion

Navigate to the directory of your cloned repository

Running `$ make devup` will run the postgres database and `$ docker ps` should
show the database running. If any of those commands fail due to *permissions
errors*, refer back to `Add your user to the docker group`. If those errors
persist, try rebooting your machine.

Running `$ make devdown` will stop and remove the database container, which
you can verify with `$ docker ps`.

## MacOS

### Install Docker for Mac

- `$ brew cask install docker`
- Optional - command line auto completion:
    - `$ brew install bash-completion`
    - `$ brew install docker-completion`
    - `$ brew install docker-compose-completion`
    - `$ brew install docker-machine-completion`
- Run the `Docker` app from the spotlight bar
- A whale icon should appear in your toolbar

### On completion

Navigate to the directory of your cloned repository

Running `$ make devup` will run the postgres database and `$ docker ps` should
show the database running.

Running `$ make devdown` will stop and remove the database container, which you
can verify with `$ docker ps`.

## Windows

- Install [Docker Toolbox for Windows](
  https://docs.docker.com/toolbox/toolbox_install_windows/)

### On completion

Navigate to the directory of your cloned repository

Running `$ make devup` will run the postgres database and `$ docker ps` should
show the database running.

Running `$ make devdown` will stop and remove the database container, which you
can verify with `$ docker ps`.

# Setup Nodejs + npm

## Linux

### Install from repositories

- Debian: `$ apt install nodejs npm`
- Arch: `$ pacman -S nodejs npm`

### On completion

- `$ node --version` should print out the nodejs version
- `$ npm --version` should print out the npm version

## MacOS

### Install from repositories

- `$ brew install node`

### On completion

- `$ node --version` should print out the nodejs version
- `$ npm --version` should print out the npm version

## Windows

### Install Nodejs

- Install [Nodejs](https://nodejs.org/en/download/current/)

### On completion

- `$ node --version` should print out the nodejs version
- `$ npm --version` should print out the npm version
