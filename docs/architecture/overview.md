# Architecture Overview

## System Design
MAGESTADE uses a layered, domain-driven architecture:

```
┌─────────────────────────┐
│   UI Layer (Web/Mobile) │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│   Orchestration Layer   │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│    Domain Layer (DDD)   │
│ - Workforce             │
│ - Academy               │
│ - Billing               │
│ - Incidents             │
│ - Offshore              │
│ - Compliance            │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│     Event Sourcing      │
└─────────────────────────┘
            ↓
┌─────────────────────────┐
│       Data Layer        │
│    PostgreSQL + Redis   │
└─────────────────────────┘
```
