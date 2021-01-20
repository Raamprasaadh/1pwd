@echo off
title start 1pwd
echo entering the directory
cd ../
echo starting client & server
cd client && npm run production
Exit /B 0

dir
