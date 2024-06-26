FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD ["yarn", "run", "start-prod"]