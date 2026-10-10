# Challenge 03 · Listas enlazadas

Aplicación React + TypeScript + Vite con dos vistas:

- **Reproductor de canciones:** usa una lista simplemente enlazada y avanza con la referencia `next`.
- **Historial de navegación:** usa una lista doblemente enlazada y navega con las referencias `prev` y `next`.

## Ejecutar

```bash
npm install
npm run dev
```

## Estructuras

`LinkedList<T>` crea nodos con un valor y una referencia `next`. El último nodo apunta a `null`, por eso el botón de siguiente se deshabilita al llegar al final.

`DoublyLinkedList<T>` crea nodos con referencias `prev` y `next`. Cada nodo puede avanzar al siguiente o regresar al anterior; los botones se deshabilitan cuando la referencia correspondiente es `null`.

La interfaz guarda el nodo actual en el estado de React. Al cambiarlo por `current.next` o `current.prev`, React vuelve a renderizar la canción o página seleccionada.
