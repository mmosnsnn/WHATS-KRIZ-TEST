FROM quay.io/toxic_kichux/whatskrizai:latest
RUN git clone https://github.com/TOXIC-KICHUX/Ai-test- /root/Kriz/
WORKDIR /root/Kriz/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
