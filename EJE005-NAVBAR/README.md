# Challenge 09 · Árbol N-ario y Sidebar dinámico

Aplicación React + TypeScript + Vite que construye un sidebar a partir de un árbol N-ario.

## Ejecutar

```bash
npm install
npm run dev
```

También se puede validar con `npm run build` y `npm run lint`.

## Cómo funciona

- `src/structures/NaryTree.ts` define `NaryNode<T>` y la clase `NaryTree<T>`. Cada nodo guarda un valor y un arreglo de hijos, por lo que soporta cualquier cantidad de descendientes y cualquier profundidad.
- `depthFirstVisit` recorre recursivamente primero el nodo actual y después cada hijo. `findById` usa ese recorrido para localizar la opción seleccionada.
- `src/data/menuData.ts` contiene la jerarquía de navegación. Cada elemento tiene título, enlace, icono, descripción y el componente React que debe mostrarse.
- `SidebarItem` se llama a sí mismo para renderizar los hijos. El estado `expandedIds` controla qué ramas están abiertas y `selectedId` resalta la opción activa.
- `App` busca el nodo seleccionado en el árbol y renderiza dinámicamente su componente en el área principal.

La navegación también incluye un drawer responsive para pantallas pequeñas.
