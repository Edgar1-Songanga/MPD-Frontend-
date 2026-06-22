# 🏢 MAGESTADE PURA DIGITAL

**Enterprise Workforce & Business Operating System Platform**

Plataforma unificada para gestão de recursos humanos, conformidade regulatória, desenvolvimento académico e operações empresariais.

## ⚠️ IMPORTANTE

Esta é a **PLATAFORMA PRINCIPAL (Magestade Pura Digital)**.

**Payroll OS é um sistema SEPARADO** que se integra com Magestade via API REST.

Não há código de Payroll aqui. Payroll é gerido por um sistema independente.

## 🎯 Propósito

Magestade Pura Digital gerir:
- ✅ Workforce Management (Hiring, Employees, Attendance)
- ✅ Academy (Training, Courses, Certifications)
- ✅ Billing (Invoicing, Payments, Subscriptions)
- ✅ Incidents (Complaints, Resolution)
- ✅ Offshore (Assignments, Check-ins)
- ✅ Compliance (Regulatory, Reporting)

## 🔗 Integração com Payroll OS

Payroll OS se integra automaticamente:

```
Magestade (Employees) 
   ↓
   API REST
   ↓
   Payroll OS (Salary Processing)
   ↓
   API REST / Webhooks
   ↓
   Magestade (Payslips, Reports)
```

## 🚀 Quick Start

```bash
git clone https://github.com/yourusername/magestade-pura-digital.git
cd magestade-pura-digital

bash setup.sh

pnpm dev
```

## 📚 Documentação

- [Architecture](./docs/architecture/overview.md)
- [Setup Guide](./docs/development/setup.md)
- [API Documentation](./docs/api/openapi.yaml)

## 🔐 Security

- Zero-Trust Architecture
- Multi-tenant Isolation
- End-to-end Encryption
- Audit Logging
- OWASP Compliance

## 📝 License

AGPL v3 (Community) | Commercial (Enterprise)
