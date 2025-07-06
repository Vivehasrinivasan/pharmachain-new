@echo off
echo 🚀 Starting PharmaChain Backend...
start cmd /k "cd /d D:\workspace\pharmachain_pro\pharmachain\pharmachain && python -m app.backend.run"

echo 🧪 Starting PharmaChain Frontend...
start cmd /k "cd /d D:\workspace\pharmachain_pro\pharmachain\pharmachain && npm run dev"
 