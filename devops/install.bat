@echo off
title start 1pwd
echo entering the directory
cd ../
echo Installing client and server ...
npm i 
echo ...
npm run install

echo Building client ...

npm run build

echo Installation finished!

PAUSE

