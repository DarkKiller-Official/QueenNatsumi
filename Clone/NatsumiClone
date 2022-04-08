FROM fusuf/whatsasena:latest

RUN git clone https://github.com/CyberDraxo/QueenNatsumi /root/QueenNatsumi
WORKDIR /root/QueenNatsumi/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "QueenNatsumi.js"]
