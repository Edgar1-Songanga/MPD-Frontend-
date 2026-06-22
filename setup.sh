#!/bin/bash

echo "🚀 MAGESTADE PURA DIGITAL - Setup"
echo ""
echo "Nota: Payroll OS é instalado SEPARADAMENTE"
echo ""

# 1. Check prerequisites
echo "📋 Verificando requisitos..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado"
    exit 1
fi

if ! command -v docker &> /dev/null; then
    echo "❌ Docker não está instalado"
    exit 1
fi

# 2. Install dependencies
echo "📦 Instalando dependências..."
pnpm install

# 3. Setup environment
echo "⚙️ Configurando ambiente..."
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "✓ Criado .env.local (edita com teus valores)"
fi

# 4. Start services
echo "🐳 Iniciando serviços..."
docker-compose up -d

# 5. Wait for services
echo "⏳ Aguardando serviços..."
sleep 10

# 6. Setup database
echo "🗄️ Configurando database..."
pnpm db:push
pnpm db:seed

echo ""
echo "✅ Setup completo!"
echo ""
echo "Próximos passos:"
echo "  1. Edita .env.local com teus valores"
echo "  2. Roda: pnpm dev"
echo "  3. Acede: http://localhost:3000"
echo ""
echo "ℹ️ Payroll OS:"
echo "  - É um sistema SEPARADO"
echo "  - Integra via API REST"
echo "  - Configura a variável PAYROLL_API_URL no .env.local"
