FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXIC-KICHUX/Ai-test-  /TOXIC-KICHUX/Ai-test-

WORKDIR /TOXIC-KICHUX/Ai-test-

ENV TZ=Africa/Harare

RUN npm install

RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]