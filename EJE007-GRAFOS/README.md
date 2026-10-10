# Challenge 10 · Grafos de personas y ciudades

Aplicación React + TypeScript + Vite que representa personas, ciudades, amistades y residencias con un grafo manual. La visualización se realiza con `react-d3-graph`.

## Ejecutar

```bash
pnpm install
pnpm dev
```

Validación:

```bash
pnpm build
pnpm lint
```

## Funcionamiento

`Graph` mantiene un `Map` de nodos y otro `Map` de listas de adyacencia. Cada entrada de la lista contiene el nodo conectado y el tipo de relación (`friendship` o `residence`). Las conexiones se guardan en ambos sentidos para poder consultar los vecinos de cualquiera de los nodos.

La clase valida que no existan IDs repetidos, conexiones duplicadas ni relaciones inválidas. Una persona solo puede conectarse como residente a la ciudad indicada en su propiedad `cityId`, y cada amistad conecta únicamente dos personas.

`toGraphData()` transforma los nodos a objetos con `id`, `label` y `color`, y las conexiones a objetos `source`, `target`, `label` y `color`. Ese resultado es el formato que recibe el componente `Graph` de `react-d3-graph`.

La librería declara una peer dependency antigua de React (`^16.4.1`), por lo que pnpm muestra una advertencia con React 19. La compatibilidad se comprobó ejecutando el build y el lint del proyecto, ambos exitosos.
