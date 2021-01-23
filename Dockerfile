FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./

RUN useradd wildfly && \
     chown -R wildfly:wildfly /opt/app-root && \ chmod -R 700 /opt/app-root && \
    npm install

COPY . .

EXPOSE 401

CMD [ "npm", "test" ]
