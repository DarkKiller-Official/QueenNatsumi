FROM fusuf/whatsasena:latest

RUN git clone https://CyberDraxo/QueenNatsumi /root/QueenNatsumi
WORKDIR /root/QueenNatsumi/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN npm install
RUN git clone https://QN-PRO/QueenNatsumi-VIP

CMD ["node", "QueenNatsumi.js"]
