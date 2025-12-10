@echo off

set PROTO_DIR=./protos
set OUT_DIR=../assets/script/libProto

echo ===== start compile proto =====

if not exist "%OUT_DIR%" (
    mkdir "%OUT_DIR%"
)

pushd "%PROTO_DIR%"

for %%f in (*.proto) do (
    npx pbjs -t static-module -w commonjs -o "../%OUT_DIR%/%%~nf.js" "%%f"
)

popd

echo ===== finish =====
pause
