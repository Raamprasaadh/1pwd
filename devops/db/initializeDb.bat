@echo off
title start 1pwd

echo %~dp0

cd %~dp0

echo entering the directory

xcopy "types.json" "C:\Program Files\MongoDB\Server\4.0\bin"

cd C:\Program Files\MongoDB\Server\4.0\bin\ 

mongoimport --db 1pws --collection types --file "types.json"

del types.json

echo Initialisation finished!

pause

