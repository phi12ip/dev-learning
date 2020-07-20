# Nginx Reverse Proxy
How to build a reverse proxy server with nginx web server on Ubuntu linux

---
## 1 | Install
First step is to install nginx if you do not already have it installed 

``` sh
sudo apt-get update
sudo apt-get install nginx -y 
```

## 2 | Create config
Duplicate default config to add need reverse proxy route
```sh
cd /etc/nginx/sites-available
````