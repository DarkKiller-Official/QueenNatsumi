FROM darkkiller1/queennatsumi:mafia

RUN git clone https://github.com/DarkKiller-Official/QueenNatsumi /root/QueenNatsumi
WORKDIR /root/QueenNatsumi/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN npm install

CMD ["node", "QueenNatsumi.js"]
