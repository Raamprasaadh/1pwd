@echo off
title start 1pwd
echo entering the directory
cd ../
echo nstalling client
cd client 
npm i && npm run build

echo nstalling client
cd ../server
npm i
echo Installation finished!
cd ../
dir
PAUSE
Exit /B 0

dir
