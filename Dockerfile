FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXIC-KICHUX/Ai-test-  /Kriz/WHATSKRIZ

WORKDIR /Kriz/WHATSKRIZ

ENV TZ=Asia/Kolkata

RUN npm install

RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
