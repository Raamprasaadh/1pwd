@echo off
title start 1pwd


cd %~dp0

echo entering the directory

xcopy "types.json" "C:\Program Files\MongoDB\Server\4.0\bin"

cd C:\Program Files\MongoDB\Server\4.0\bin\ 

mongoimport --db 1pwd --collection types --file "types.json"

del types.json

echo Initialisation finished!

pause

