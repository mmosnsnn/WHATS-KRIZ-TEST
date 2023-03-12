FROM quay.io/toxic_kichux/whatskrizai:latest
RUN git clone https://github.com/WHATS-KRIZ/WHATS-KRIZ-TEST /root/Kriz/
WORKDIR /root/Kriz/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
