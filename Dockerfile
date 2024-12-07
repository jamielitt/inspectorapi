FROM node:10-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY *.* ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 4040
CMD [ "node", "index.js" ]