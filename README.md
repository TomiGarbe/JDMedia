# JD Media - Sitio Web

Sitio multi-page para JD Media, construido con React + TypeScript, Vite, TailwindCSS y React Router.

## Requisitos

- Node.js 18+
- npm 9+

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Variables de entorno

Crear un archivo `.env` en la raiz:

```bash
VITE_WHATSAPP_NUMBER=5491112345678
VITE_SITE_URL=https://tudominio.com
```

- `VITE_WHATSAPP_NUMBER` se usa para generar los links de WhatsApp.
- `VITE_SITE_URL` se usa para completar el `og:url` del SEO.

## Donde editar contenido

- Servicios: `src/data/services.ts`
- Clientes: `src/data/clients.ts`
- Sociales: `src/data/socials.ts`
- Paginas: `src/pages`
- Componentes reutilizables: `src/components`
- Mensaje de WhatsApp: `src/utils/whatsapp.ts`

## Tipografia

La fuente principal es **Microgramma Extd D**. Para activarla:

1. Coloca los archivos en `public/fonts/`
2. Nombres esperados:
   - `microgramma-extd-d.woff2`
   - `microgramma-extd-d.woff`
   - `microgramma-extd-d-bold.woff2`
   - `microgramma-extd-d-bold.woff`

Si no estan, el sitio usa fallback (`Eurostile Extended`, `Montserrat`, `system-ui`).

## Rutas SPA (evitar 404 al refrescar)

- `public/.htaccess`: rewrite a `/index.html` para hosting con Apache.
- `public/_redirects`: fallback para Netlify/Vercel si se necesita.

## Notas

- El modal de WhatsApp guarda nombre y empresa en `localStorage`.
- El tracking de eventos se registra en consola desde `src/utils/tracking.ts`.
