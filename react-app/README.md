# React Docker App

This is a minimal Vite + React app configured to build in Docker and be served by Nginx.

Local build & run (with Docker):

```bash
# from c:\docker\react-app
docker build -t react-docker-app:latest .
docker run --rm -p 80:80 react-docker-app:latest
```

Using docker-compose:

```bash
docker-compose up --build
```

Deploy to Ubuntu VM (options):

Option A — Build on the VM (recommended):
1. Clone this repo on the Ubuntu VM.
2. Run `docker-compose up --build` or `docker build` + `docker run` there.

Option B — Build locally and transfer image to VM:

```bash
# on Windows (build image locally)
docker build -t react-docker-app:latest .
# save image to tar
docker save react-docker-app:latest | gzip > react-docker-app.tar.gz
# copy to VM (replace user@vm_ip and /home/user/)
scp react-docker-app.tar.gz user@VM_IP:/home/user/
# on Ubuntu VM
gunzip react-docker-app.tar.gz
docker load < react-docker-app.tar
docker run -d -p 80:80 react-docker-app:latest
```

Notes:
- Ensure the Ubuntu VM has Docker installed and ports open/forwarded from your Windows host if you want to access it via host browser.
- Building on the VM avoids transferring large images.
