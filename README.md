# 🚀 Proyecto de la Diplomatura de Blockchain - UTN

Este proyecto fue desarrollado como parte de la diplomatura, con el objetivo de explorar la integración de **The Graph** con una aplicación React, utilizando Apollo Client para la gestión de datos.

## ✨ Características

- Conexión con un **subgraph de The Graph** para obtener datos de la blockchain.
- Visualización de la información de los tokens más populares.
- Implementación del hook `useQuery` de Apollo Client.

## ⚠️ Problema y Solución (CSP)

Durante el desarrollo, surgió un desafío relacionado con la **Política de Seguridad de Contenido (CSP)**. El entorno de desarrollo (Vite) bloqueó la ejecución de ciertas funciones de Apollo Client, interpretándolas como inseguras.

A continuación se detalla el análisis y la solución implementada:

1.  **El problema:** El navegador bloqueó la ejecución del código con el error `Content Security Policy of your site blocks the use of 'eval' in JavaScript`, lo que impedía que la aplicación funcionara correctamente.

2.  **La causa:** Este conflicto se debe a la estricta política de seguridad de Vite, que colisiona con la forma en que Apollo Client maneja ciertas operaciones. Las soluciones estándar de reconfiguración de ambas herramientas no fueron efectivas en este entorno específico.

3.  **La solución (temporal):** Para avanzar con los ejercicios y mantener el proyecto funcional, se modificó el archivo `index.html` para incluir la directiva **`script-src 'self' 'unsafe-eval'`**. Esta es una solución temporal que le indica al navegador que permita la ejecución de código en línea, lo que resolvió el error y permitió que la aplicación funcione como se esperaba.

**Nota:** Esta medida es únicamente para el entorno de desarrollo. En un entorno de producción, la solución ideal sería una configuración de servidor (como un proxy) que evite este conflicto de seguridad sin comprometer la integridad del código.

## 🛠️ Tecnologías

- **React**: Biblioteca principal para la interfaz de usuario.
- **Apollo Client**: Para la gestión de consultas GraphQL.
- **The Graph**: Infraestructura para indexar y consultar datos de la blockchain.
- **Vite**: Entorno de desarrollo para la aplicación.
