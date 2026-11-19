# Navidad en Familia

Experiencia web navideña familiar, interactiva y cinematográfica.

## Personalización

El contenido principal se encuentra en `data/navidad.ts`. Ahí se pueden cambiar:

- Título y textos principales.
- Fecha de la cuenta regresiva.
- Integrantes de la familia.
- Capítulos y recuerdos.
- Mensajes individuales.
- Carta final.
- Imágenes y pista musical.

Los archivos SVG de `public/family/` son placeholders locales. Reemplázalos por fotografías familiares autorizadas conservando las rutas o actualizando `data/navidad.ts`.

## Desarrollo

```bash
pnpm install
pnpm dev
```

Para validar producción:

```bash
pnpm build
pnpm start
```

La música es opcional. Para activarla, coloca una pista propia o con licencia en `public/music/navidad.mp3` y cambia `music.enabled` en `data/navidad.ts`.
