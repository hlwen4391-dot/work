@echo off
echo 正在关闭占用端口3000和3001的服务器进程...
taskkill /PID 50692 /F
if %errorlevel% == 0 (
    echo 成功关闭服务器进程！
    echo.
    echo 现在可以重新启动服务器：node server.js
) else (
    echo 关闭进程失败，可能进程已经不存在了
    echo.
    echo 请检查进程是否还在运行：
    echo netstat -ano ^| findstr :3000
)
pause
