FROM nodesource/node:4.0

ADD package.json package.json  
RUN npm install  
ADD . .

ENV PORT=8081

EXPOSE $PORT

CMD ["npm", "start"]
