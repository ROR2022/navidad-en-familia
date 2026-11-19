# Plan de implementación: Navidad en Familia como serie de streaming

## 1. Objetivo

Transformar la invitación actual **Navidad en Familia** en una experiencia web que simule el descubrimiento y consumo de una serie original en una plataforma de streaming:

- Pantalla inicial tipo búsqueda de catálogo.
- Página principal oscura y cinematográfica.
- Hero visual a pantalla completa.
- Metadatos de serie, temporadas, episodios y calidad.
- Filas horizontales de contenido.
- Interacciones de reproducción, detalles, hover y modales.
- Cierre tipo créditos finales.
- Experiencia responsive y accesible.

La referencia funcional será la estructura ya implementada en:

```text
D:\rorProjects\invitaciones\love\te-amo-sandy
```

La implementación debe conservar una identidad propia de Navidad en Familia. Se utilizará una estética de plataforma de streaming inspirada en el patrón visual general, pero no se copiarán logos, textos legales ni elementos propietarios exactos de Netflix.

---

## 2. Estado actual del proyecto

### Stack

- Next.js `16.4.6`
- React `19`
- TypeScript `5.7.3`
- Tailwind CSS `4`
- Framer Motion
- Lucide React
- Sonner
- Vercel Analytics en producción
- Gestor de paquetes: `pnpm`

### Estructura actual

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  CuentaRegresiva.tsx
  MusicaNavidena.tsx
  NavidadIntro.tsx
  christmas/
    FamilyCast.tsx
    FamilyHero.tsx
    FamilyMessages.tsx
    FinalLetter.tsx
    Footer.tsx
    MemoryEpisodes.tsx
    MemoryModal.tsx

data/
  navidad.ts

public/
  family01.jpg ... family13.jpg
  family/
    hero.svg
    member-*.svg
    memory-*.svg
    message-*.svg
    tree.svg
```

### Comportamiento actual

1. Se muestra una pantalla introductoria navideña.
2. El usuario pulsa “Comenzar especial”.
3. Se muestra una página larga con:
   - Barra superior.
   - Hero familiar.
   - Cuenta regresiva.
   - Elenco.
   - Capítulos de recuerdos.
   - Mensajes familiares.
   - Carta final.
4. Los capítulos se abren en un modal.
5. Se puede compartir la URL.
6. La música está preparada, pero desactivada.

### Observación importante

Las imágenes JPG reales existentes aún no están conectadas al contenido principal. La interfaz actual utiliza principalmente SVG de placeholder en `public/family/`.

---

## 3. Resultado visual esperado

La experiencia final debe sentirse como un catálogo privado de una serie familiar:

- Fondo general negro/gris oscuro, no verde predominante.
- Rojo cálido como acento de streaming.
- Dorado y rojo navideño como detalles de identidad.
- Tipografía condensada o display para el título.
- Tipografía sans-serif para metadata y navegación.
- Grandes degradados negros sobre las fotografías.
- Contenido organizado en filas horizontales.
- Cards con hover, zoom sutil y controles superpuestos.
- Separación visual clara entre hero y catálogo.
- Animaciones suaves, sin sobrecargar la página.

### Paleta propuesta

```css
--background: #141414;
--surface: #181818;
--surface-raised: #242424;
--foreground: #ffffff;
--muted: #b3b3b3;
--subtle: #808080;
--streaming-red: #d71920;
--christmas-red: #9f2f2c;
--gold: #e7b969;
--success: #46d369;
```

El rojo no debe utilizarse como una copia exacta de marca. Su función será actuar como acento visual y conectar el lenguaje de streaming con la identidad navideña.

---

## 4. Arquitectura de la nueva experiencia

## 4.1 Flujo de usuario

```text
Pantalla de búsqueda
        ↓
Resultado “Navidad en Familia”
        ↓
Página de la serie
        ↓
Hero + catálogo
        ↓
Selección de episodio
        ↓
Modal de detalles
        ↓
Mensaje de reproducción
        ↓
Créditos finales
```

## 4.2 Estado principal de la página

`app/page.tsx` debe manejar:

- `phase`: pantalla de búsqueda o catálogo.
- `episode`: episodio seleccionado para el modal.
- `muted`: estado de sonido del hero, si se incorpora video o audio ambiental.
- `share`: compartir por Web Share API o copiar al portapapeles.
- `restart`: regresar a la pantalla inicial y desplazar al inicio.

No se requiere backend ni base de datos. Toda la experiencia seguirá siendo estática y client-side.

---

## 5. Modelo de datos

Actualizar `data/navidad.ts` para que el contenido represente explícitamente una serie.

## 5.1 Estructura propuesta

```ts
export type Episode = {
  season: number
  number: number
  title: string
  duration: string
  description: string
  details: string
  image: string
  date?: string
}

export type CastMember = {
  name: string
  role: string
  description?: string
  photo: string
}

export type Recommendation = {
  title: string
  description: string
  image: string
  match?: string
}

export const navidad = {
  title: 'NAVIDAD EN FAMILIA',
  title1: 'NAVIDAD EN',
  title2: 'FAMILIA',
  tagline: 'La historia más bonita se celebra juntos.',
  synopsis: '...',
  badges: ['Original', '100% para nuestra familia', '1 temporada', 'HD'],
  heroImage: '/family01.jpg',
  cast: [],
  episodes: [],
  recommendations: [],
  messages: [],
  finalMessage: '...',
  signature: 'Con todo nuestro cariño',
  countdownDate: '2026-12-25T00:00:00-06:00',
  music: {
    src: '/music/navidad.mp3',
    enabled: false,
    volume: 0.3,
  },
} as const
```

## 5.2 Mapeo inicial de imágenes

Usar las fotografías reales existentes:

| Recurso | Uso inicial |
|---|---|
| `/family01.jpg` | Hero principal |
| `/family02.jpg` - `/family05.jpg` | Reparto |
| `/family06.jpg` - `/family10.jpg` | Episodios |
| `/family11.jpg` - `/family13.jpg` | Mensajes o recomendaciones |

Antes de cerrar la implementación se debe revisar visualmente la orientación, composición y calidad de cada fotografía para decidir el mejor recorte y `object-position`.

---

## 6. Componentes a crear o adaptar

La estructura puede reutilizar el patrón del proyecto anterior, adaptándolo al dominio navideño.

## 6.1 Pantalla inicial

### `components/streaming/SearchIntro.tsx`

Crear una pantalla inicial que:

- Muestre el título de la serie.
- Simule un campo de búsqueda con `navidad en familia`.
- Revele un resultado único con imagen, metadata y botón de entrada.
- Use `AnimatePresence` y `motion`.
- Sea completamente navegable con teclado.
- Tenga un texto contextual como:
  - “Una historia hecha para volver a encontrarnos.”
  - “1 resultado encontrado”.

Puede reemplazar o absorber la funcionalidad de `NavidadIntro.tsx`.

## 6.2 Navegación

### `components/streaming/StreamingNavbar.tsx`

Adaptar `components/christmas/Footer.tsx` y la navegación actual para incluir:

- Nombre de la serie.
- Inicio.
- Episodios.
- Reparto.
- Mi lista o Recuerdos.
- Botón de búsqueda visual.
- Botón de notificaciones decorativo.
- Perfil familiar.

Los enlaces deben desplazarse suavemente a secciones existentes. Los controles que no tengan una funcionalidad real deben ser botones decorativos claramente no críticos, no falsos flujos complejos.

## 6.3 Hero

### `components/streaming/SeriesHero.tsx`

Reemplazar `FamilyHero.tsx` por un hero que incluya:

- Fotografía real de fondo.
- Overlay oscuro lateral e inferior.
- Indicador “Serie original familiar”.
- Título grande dividido en dos líneas.
- Tagline.
- Metadata:
  - porcentaje de coincidencia;
  - temporada;
  - número de episodios;
  - calidad;
  - contenido original.
- Sinopsis.
- Botón “Reproducir”.
- Botón “Más información”.
- Botón de sonido, si existe música o video asociado.
- Indicador inferior para continuar explorando.

El botón “Reproducir” debe llevar a episodios o abrir el primer episodio. La decisión preferida es desplazarse a la fila de episodios y seleccionar el primer capítulo de forma natural.

## 6.4 Fila de reparto

### `components/streaming/CastRow.tsx`

Adaptar `FamilyCast.tsx` para:

- Presentar personas o conceptos familiares como reparto.
- Mostrar foto circular.
- Mostrar nombre y rol.
- Mantener scroll horizontal en móvil.
- Usar animación de entrada al entrar en viewport.

## 6.5 Fila de episodios

### `components/streaming/EpisodeRow.tsx`

Adaptar `MemoryEpisodes.tsx` para:

- Cards horizontales de proporción `16 / 9`.
- Identificador `T1:E1`.
- Título, duración y descripción.
- Overlay al hover con:
  - reproducir;
  - agregar;
  - información.
- Scroll horizontal con `scroll-snap` en móvil.
- Primer episodio destacado solo si no perjudica la consistencia visual.
- Apertura de `EpisodeModal`.

## 6.6 Modal de episodio

### `components/streaming/EpisodeModal.tsx`

Adaptar `MemoryModal.tsx` para incluir:

- Imagen grande.
- Número de temporada y episodio.
- Título.
- Match familiar.
- Duración.
- Descripción extendida.
- Botón “Reproducir”.
- Identificador de serie original.
- Cierre con botón, Escape y click en el backdrop.
- Retorno del foco al elemento que abrió el modal.
- Focus trap para navegación con Tab.

La reproducción será una simulación narrativa: el botón puede mostrar un toast como “Este episodio lo vivimos juntos” si no se incorpora video real.

## 6.7 Recomendaciones

### `components/streaming/RecommendationRow.tsx`

Crear una sección “Más como esto” con contenido navideño relacionado:

- Las tradiciones.
- Las sobremesas.
- Las risas.
- Los abrazos.
- El próximo reencuentro.

Cada tarjeta debe incluir imagen, match y descripción breve. En una primera versión pueden ser tarjetas no interactivas o abrir el episodio relacionado si existe una relación clara.

## 6.8 Mensajes familiares

### `components/streaming/MessageRow.tsx`

Adaptar `FamilyMessages.tsx` a una fila o grid compacto que mantenga los mensajes, pero visualmente integrado al catálogo:

- Card oscura.
- Fotografía pequeña.
- Texto breve.
- Etiqueta del destinatario.
- Acento rojo o dorado.

Esta sección debe quedar después de episodios o recomendaciones, según el resultado visual de la primera revisión.

## 6.9 Créditos finales

### `components/streaming/PostCredits.tsx`

Reemplazar `FinalLetter.tsx` por una sección tipo créditos:

- Línea vertical o separador de entrada.
- Etiqueta “Después de los créditos”.
- Mensaje final.
- Firma.
- Botón “Volver a empezar”.
- Botón “Compartir”.
- Símbolo de corazón o estrella como cierre.

## 6.10 Footer

### `components/streaming/Footer.tsx`

Crear un footer sencillo y propio:

- Nombre de la serie.
- “Hecho con amor para nuestra familia”.
- Enlaces internos.
- Año.
- No incluir textos legales de Netflix ni imitaciones de su estructura legal.

---

## 7. Estilos y layout

## 7.1 `app/globals.css`

Reorganizar la hoja global alrededor de estas áreas:

1. Variables de color y tipografía.
2. Reset y accesibilidad.
3. Pantalla de búsqueda.
4. Navbar.
5. Hero.
6. Botones.
7. Filas de contenido.
8. Cards y overlays.
9. Modal.
10. Créditos y footer.
11. Responsive.
12. Reduced motion.

Evitar mezclar estilos antiguos de `.christmas-shell`, `.special-page` y las tarjetas actuales con el nuevo sistema cuando ya no tengan consumidores.

## 7.2 Tipografía

Evaluar una combinación similar a la del proyecto anterior:

- `Bebas Neue` o una tipografía condensada equivalente para el título.
- `Inter` para navegación y metadata.

La tipografía navideña Cormorant Garamond puede conservarse únicamente para la carta o mensaje final si ayuda a mantener calidez. No debe dominar el catálogo si se busca una apariencia de streaming.

## 7.3 Hero responsive

### Escritorio

- Altura entre `75vh` y `85vh`.
- Contenido alineado a la izquierda.
- Imagen dominante.
- Gradiente lateral para legibilidad.

### Móvil

- Contenido alineado en la parte inferior.
- Overlay vertical más fuerte.
- Ocultar navegación secundaria.
- Mantener únicamente título, metadata esencial, sinopsis corta y acciones.
- Hero con altura aproximada de `76svh`.

## 7.4 Filas responsive

### Escritorio

- Carruseles horizontales con 4 a 6 cards visibles.
- Controles visibles al hover.
- Separación consistente entre secciones.

### Móvil

- Una card grande visible parcialmente junto a la siguiente.
- Scroll horizontal natural.
- Overlay de reproducción siempre visible o accesible por focus.
- No depender exclusivamente del hover.

---

## 8. Animaciones

Reutilizar Framer Motion con una configuración breve y consistente:

- Fade-in de la pantalla inicial.
- Revelado del resultado de búsqueda.
- Transición entre intro y catálogo.
- Aparición del hero.
- Entrada de filas al viewport.
- Elevación y zoom sutil de cards.
- Apertura y cierre del modal.

Todas las animaciones deben respetar:

```css
@media (prefers-reduced-motion: reduce)
```

No se deben introducir animaciones continuas costosas en todas las cards ni efectos que afecten el rendimiento en móviles.

---

## 9. Audio y reproducción simulada

## 9.1 Música

Conservar `MusicaNavidena.tsx` como control global opcional.

- Mantener `enabled: false` mientras no exista una pista autorizada.
- Si se agrega música, colocarla en:

```text
public/music/navidad.mp3
```

- Respetar las restricciones de autoplay del navegador.
- Iniciar únicamente después de interacción del usuario.
- Mostrar error de reproducción explícito.

## 9.2 Botón Reproducir

La primera versión no necesita video. El botón debe:

1. Cerrar el modal.
2. Mostrar un toast contextual.
3. Opcionalmente desplazar a la sección de episodios.

Si más adelante se agregan videos reales, se puede sustituir esta simulación sin cambiar el modelo de navegación.

---

## 10. Accesibilidad

Verificar explícitamente:

- `alt` descriptivo para imágenes de contenido.
- `alt=""` para imágenes puramente decorativas.
- `aria-label` en botones de iconos.
- Foco visible con `:focus-visible`.
- Navegación completa por teclado.
- Modal con `role="dialog"` y `aria-modal="true"`.
- `aria-labelledby` apuntando al título del episodio.
- Focus trap y retorno de foco.
- `aria-live="polite"` para contador y mensajes relevantes.
- No depender solamente de hover.
- Contraste suficiente en texto sobre imágenes.
- Soporte para `prefers-reduced-motion`.

---

## 11. Plan de ejecución por fases

## Fase 1: Preparación

1. Revisar visualmente las 13 fotografías JPG.
2. Definir qué imagen será hero, reparto, episodios y mensajes.
3. Crear el nuevo modelo de serie en `data/navidad.ts`.
4. Confirmar textos finales:
   - título;
   - sinopsis;
   - nombres del reparto;
   - nombres de episodios;
   - mensaje final.
5. Mantener una copia conceptual de la estructura actual hasta validar la nueva interfaz.

## Fase 2: Flujo de entrada

1. Crear `SearchIntro.tsx`.
2. Actualizar `app/page.tsx` para manejar fases.
3. Añadir transición entre intro y catálogo.
4. Confirmar que el botón de entrada funciona con mouse, teclado y móvil.

## Fase 3: Shell de streaming

1. Crear `StreamingNavbar.tsx`.
2. Implementar variables visuales nuevas.
3. Reemplazar el shell verde/dorado por fondo oscuro.
4. Integrar navegación interna.
5. Adaptar metadata de `layout.tsx`, favicon y `themeColor`.

## Fase 4: Hero y contenido principal

1. Crear `SeriesHero.tsx`.
2. Conectar fotografía real.
3. Implementar overlays y acciones.
4. Adaptar `CastRow.tsx`.
5. Adaptar `EpisodeRow.tsx`.
6. Verificar el comportamiento responsive.

## Fase 5: Detalles e interacción

1. Adaptar `EpisodeModal.tsx`.
2. Implementar toast de reproducción.
3. Mantener compartir mediante Web Share API y clipboard fallback.
4. Crear `RecommendationRow.tsx`.
5. Adaptar `MessageRow.tsx`.

## Fase 6: Cierre

1. Crear `PostCredits.tsx`.
2. Adaptar `Footer.tsx`.
3. Integrar música opcional.
4. Eliminar componentes y estilos antiguos que ya no se utilicen.

## Fase 7: Refinamiento visual

1. Ajustar recortes de imágenes.
2. Ajustar degradados del hero.
3. Ajustar tamaños de cards y espacios.
4. Revisar hover, focus y estados móviles.
5. Revisar la jerarquía visual en pantallas pequeñas.

## Fase 8: Validación

1. Ejecutar el type-check incluido en el build.
2. Ejecutar:

```bash
pnpm build
```

3. Ejecutar la versión de producción:

```bash
pnpm start
```

4. Probar manualmente:
   - intro;
   - navegación;
   - botones del hero;
   - scroll horizontal;
   - modal;
   - Escape;
   - focus trap;
   - compartir;
   - reinicio;
   - música desactivada;
   - móvil;
   - reduced motion.
5. Confirmar que no existan referencias rotas a SVG, audio o imágenes.

---

## 12. Archivos que probablemente cambiarán

### Cambios principales

```text
app/page.tsx
app/globals.css
app/layout.tsx
data/navidad.ts
```

### Componentes nuevos o adaptados

```text
components/streaming/SearchIntro.tsx
components/streaming/StreamingNavbar.tsx
components/streaming/SeriesHero.tsx
components/streaming/CastRow.tsx
components/streaming/EpisodeRow.tsx
components/streaming/EpisodeModal.tsx
components/streaming/RecommendationRow.tsx
components/streaming/MessageRow.tsx
components/streaming/PostCredits.tsx
components/streaming/Footer.tsx
```

### Componentes que pueden conservarse

```text
components/CuentaRegresiva.tsx
components/MusicaNavidena.tsx
```

### Componentes que probablemente dejarán de ser necesarios

```text
components/NavidadIntro.tsx
components/christmas/FamilyHero.tsx
components/christmas/FamilyCast.tsx
components/christmas/FamilyMessages.tsx
components/christmas/FinalLetter.tsx
components/christmas/MemoryEpisodes.tsx
components/christmas/MemoryModal.tsx
components/christmas/Footer.tsx
```

No eliminar estos archivos hasta que la nueva implementación esté funcionando y se haya confirmado que no existen referencias restantes.

---

## 13. Riesgos y decisiones

### Imágenes

Las fotografías reales pueden tener distintas orientaciones y puntos focales. Se debe ajustar individualmente `object-position` y no asumir que un único recorte sirve para todas.

### Identidad visual

Una copia demasiado literal de Netflix puede hacer que la invitación pierda personalidad. La solución debe utilizar el lenguaje de catálogo de streaming, pero conservar:

- Navidad.
- Familia.
- Calidez.
- Recuerdos.
- Detalles dorados y navideños.

### Densidad de contenido

El catálogo debe parecer completo sin sentirse saturado. Es preferible tener menos filas bien diseñadas que muchas secciones repetitivas.

### Música

No activar música si no existe un archivo propio o con licencia. El componente actual ya contempla esta restricción.

### Acciones simuladas

Los controles de reproducción, notificaciones o “Mi lista” deben comunicar claramente una experiencia narrativa o decorativa. No se debe fingir una plataforma funcional completa si no existe persistencia detrás.

---

## 14. Criterios de aceptación

La implementación se considerará terminada cuando:

- La entrada parezca una búsqueda de una serie privada.
- El catálogo tenga una estética oscura, cinematográfica y consistente.
- El hero use fotografías reales y tenga buena legibilidad.
- Los episodios se presenten en una fila horizontal con interacción.
- Cada episodio pueda abrirse en un modal accesible.
- La página funcione correctamente en escritorio y móvil.
- El usuario pueda compartir y reiniciar la experiencia.
- La cuenta regresiva y la música sigan funcionando sin romper el nuevo diseño.
- No haya imágenes o rutas rotas.
- `pnpm build` termine correctamente.
- Se respete `prefers-reduced-motion`.
- La interfaz mantenga identidad propia de Navidad en Familia en lugar de ser una copia literal de Netflix.

