# Defining nginx image to be used
FROM nginx:latest AS server
VOLUME /var/cache/nginx
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY . /usr/share/nginx/html
                                                
COPY /config/nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 5500