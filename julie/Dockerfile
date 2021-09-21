FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Chunkindepadayali/LIZA-MWOL /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN 

CMD ["node", "bot.js"]
