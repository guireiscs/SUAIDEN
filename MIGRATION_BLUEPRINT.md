# Blueprint de Migração: Sistema de Vagas Suaiden

Este documento contém todas as informações técnicas necessárias para replicar o sistema de vagas no repositório oficial `Suaiden-ai/SUAIDEN`.

---

## 1. Banco de Dados (Supabase)
Execute o seguinte SQL no Editor de Consultas do Supabase para criar a infraestrutura necessária:

```sql
-- Criar a tabela de candidaturas
CREATE TABLE IF NOT EXISTS public.job_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL, full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    linkedin_url TEXT NOT NULL,
    resume_link TEXT, -- Opcional para agora
    job_id TEXT NOT NULL,
    job_title TEXT NOT NULL,
    status TEXT DEFAULT 'pending' NOT NULL
);

-- Ativar RLS
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Política para Inserção Pública
CREATE POLICY "Enable insert for everyone" ON public.job_applications
    FOR INSERT WITH CHECK (true);

-- Política para Seleção (Apenas autenticados)
CREATE POLICY "Enable select for authenticated users only" ON public.job_applications
    FOR SELECT USING (auth.role() = 'authenticated');
```

---

## 2. Dependências (package.json)
Adicione estas dependências ao projeto oficial e execute `npm install`:

```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-aspect-ratio": "^1.1.2",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.3",
    "@radix-ui/react-context-menu": "^2.2.6",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-navigation-menu": "^1.2.5",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "@tanstack/react-query": "^5.66.9",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.5.2",
    "input-otp": "^1.4.2",
    "react-day-picker": "^9.5.1",
    "react-hook-form": "^7.54.2",
    "react-router-dom": "^7.2.0",
    "recharts": "^2.15.1",
    "sonner": "^2.0.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "zod": "^3.24.2"
  }
}
```

---

## 3. Estrutura de Arquivos para Copiar
Transfira as seguintes pastas/arquivos da origem para o destino:

- `src/pages/jobs/` (Todo o conteúdo)
- `src/components/jobs/` (Todo o conteúdo)
- `src/hooks/jobs/` (Todo o conteúdo)
- `src/data/jobs.ts` (Base de dados das vagas)
- `src/services/supabase.ts` (Cliente Supabase)
- `src/lib/utils.ts` (Função `cn`)
- `src/components/ui/ScrollToTop.tsx` (Controle de navegação)

---

## 4. Configurações do Sistema

### Vite (`vite.config.ts`)
Adicione o alias `@/`:
```typescript
import path from "path";
// ... dentro de defineconfig
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
```

### TypeScript (`tsconfig.app.json`)
Adicione o mapeamento de caminhos:
```json
"compilerOptions": {
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Tailwind (`tailwind.config.js`)
Garanta que as cores de `extend` contenham as variáveis do Shadcn e as animações `pulse-glow`.

### Routing (`App.tsx`)
Configure o `Router` e o `ScrollToTop`:
```tsx
<Router>
  <ScrollToTop />
  <Routes>
    <Route path="/vagas" element={<JobPostingPage />} />
    <Route path="/vaga/:slug" element={<JobDetailView />} />
    <Route path="/entrevista" element={<QuestionnairePage />} />
    <Route path="/vagas-detalhes" element={<JobDetailsPage />} />
  </Routes>
</Router>
```

---

## 5. Resumo da Situação Especial
O projeto foi inicialmente desenvolvido em um repositório fork desatualizado (`guireiscs/SUAIDEN`). Este blueprint serviu para portar todas as melhorias para o repositório oficial da organização.
