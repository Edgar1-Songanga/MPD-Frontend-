#!/bin/bash

# MAGESTADE PURA DIGITAL - Project Structure Creator
# Esta é apenas a plataforma principal (SEM Payroll OS)

set -e

PROJECT_NAME="magestade-pura-digital"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  MAGESTADE PURA DIGITAL - Project Structure Creator           ║"
echo "║  Criando estrutura da plataforma principal...                  ║"
echo "║                                                                ║"
echo "║  Nota: Payroll OS é um sistema SEPARADO                       ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Função: Criar pasta
create_dir() {
    local dir="$1"
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        echo "✓ Criada pasta: $dir"
    fi
}

# 📁 RAIZ (Root Directories)
echo "📁 Criando estrutura ROOT..."

create_dir ".github/workflows"
create_dir ".github/ISSUE_TEMPLATE"
create_dir ".github/PULL_REQUEST_TEMPLATE"

create_dir "docker"
create_dir "terraform/kubernetes"
create_dir "terraform/database"
create_dir "terraform/monitoring"

create_dir "tools/cli/commands"
create_dir "tools/cli/templates/domain"
create_dir "tools/scripts"
create_dir "tools/benchmarks"
create_dir "tools/monitoring"

create_dir "docs/architecture"
create_dir "docs/api/endpoints"
create_dir "docs/development"
create_dir "docs/deployment"
create_dir "docs/operations"
create_dir "docs/security"

create_dir "monitoring/prometheus"
create_dir "monitoring/grafana/dashboards"
create_dir "monitoring/loki"
create_dir "monitoring/alerts"

# 📦 PACKAGES
echo "📦 Criando PACKAGES..."

# Core
create_dir "packages/core/src/auth"
create_dir "packages/core/src/rbac"
create_dir "packages/core/src/audit"
create_dir "packages/core/src/security"
create_dir "packages/core/src/events"
create_dir "packages/core/src/orchestrators"
create_dir "packages/core/src/types"
create_dir "packages/core/src/errors"
create_dir "packages/core/src/utils"
create_dir "packages/core/__tests__"

# Database
create_dir "packages/db/prisma/migrations"
create_dir "packages/db/src/repositories"

# Types
create_dir "packages/types/src/entities"
create_dir "packages/types/src/dto"

# Utils
create_dir "packages/utils/src"

# UI
create_dir "packages/ui/src/components"
create_dir "packages/ui/src/hooks"
create_dir "packages/ui/src/styles"
create_dir "packages/ui/src/theme"

# Integrations
create_dir "packages/integrations/src/payroll-api"
create_dir "packages/integrations/src/government-api"
create_dir "packages/integrations/src/banking-api"
create_dir "packages/integrations/src/universal-integration"
create_dir "packages/integrations/__tests__"

# 🏢 DOMAINS (APENAS Magestade, SEM Payroll)
echo "🏢 Criando DOMAINS (Magestade)..."

DOMAINS=("workforce" "academy" "billing" "incidents" "offshore" "compliance")

for domain in "${DOMAINS[@]}"; do
    create_dir "packages/domains/$domain/src/domain/entities"
    create_dir "packages/domains/$domain/src/domain/services"
    create_dir "packages/domains/$domain/src/domain/events"
    create_dir "packages/domains/$domain/src/domain/validators"
    
    create_dir "packages/domains/$domain/src/application/usecases"
    create_dir "packages/domains/$domain/src/application/dto"
    
    create_dir "packages/domains/$domain/src/infrastructure/repositories"
    create_dir "packages/domains/$domain/src/infrastructure/adapters/http"
    create_dir "packages/domains/$domain/src/infrastructure/external"
    
    create_dir "packages/domains/$domain/__tests__/unit"
    create_dir "packages/domains/$domain/__tests__/integration"
done

# 🚀 APPS
echo "🚀 Criando APPS..."

# Web App
create_dir "apps/web/src/app/(auth)/login"
create_dir "apps/web/src/app/(auth)/signup"
create_dir "apps/web/src/app/(auth)/forgot-password"

create_dir "apps/web/src/app/(dashboard)/workspace/[id]"
create_dir "apps/web/src/app/(dashboard)/workspace/[id]/overview"
create_dir "apps/web/src/app/(dashboard)/workspace/[id]/workforce"
create_dir "apps/web/src/app/(dashboard)/workspace/[id]/academy"
create_dir "apps/web/src/app/(dashboard)/workspace/[id]/billing"
create_dir "apps/web/src/app/(dashboard)/workspace/[id]/incidents"
create_dir "apps/web/src/app/(dashboard)/workspace/[id]/offshore"
create_dir "apps/web/src/app/(dashboard)/workspace/[id]/compliance"
create_dir "apps/web/src/app/(dashboard)/workspace/[id]/settings"

create_dir "apps/web/src/app/api/health"
create_dir "apps/web/src/app/api/auth"
create_dir "apps/web/src/app/api/workforce"
create_dir "apps/web/src/app/api/academy"
create_dir "apps/web/src/app/api/billing"
create_dir "apps/web/src/app/api/events"
create_dir "apps/web/src/app/api/admin"

create_dir "apps/web/src/components/common"
create_dir "apps/web/src/components/dashboard"
create_dir "apps/web/src/components/workspace"
create_dir "apps/web/src/components/layout"

create_dir "apps/web/src/hooks"
create_dir "apps/web/src/lib/api"
create_dir "apps/web/src/lib/services"
create_dir "apps/web/src/lib/utils"
create_dir "apps/web/src/lib/store"

create_dir "apps/web/public/images"
create_dir "apps/web/public/fonts"
create_dir "apps/web/public/icons"

create_dir "apps/web/__tests__/e2e"
create_dir "apps/web/__tests__/unit"

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  ✅ Estrutura criada com sucesso!                             ║"
echo "║                                                                ║"
echo "║  MAGESTADE PURA DIGITAL - Plataforma Principal                ║"
echo "║  (Payroll OS é um sistema separado)                           ║"
echo "║                                                                ║"
echo "║  Próximo passo:                                                ║"
echo "║  1. Cria os ficheiros de código (PARTE 2 + 3)                 ║"
echo "║  2. Executa: pnpm install                                     ║"
echo "║  3. Executa: docker-compose up -d                             ║"
echo "║  4. Executa: pnpm dev                                         ║"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
