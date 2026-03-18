Hola Arturo, adjunto mi solución para el Beacon Dev Challenge. Me enfoqué en completar los 5 requerimientos Core asegurando buenas prácticas de Next.js 15.

Decisiones Arquitectónicas:

Server Components por defecto: Utilicé Server Components tanto en /products como en la ruta dinámica /products/[slug] para optimizar el SEO y el First Contentful Paint.

Filtros por URL: Para la búsqueda y categorías, implementé un <form method="GET"> nativo. Esto actualiza los searchParams en la URL directamente, permitiendo compartir los links filtrados sin necesidad de usar "use client" ni estados de React innecesarios.

Modelado de Datos: Creé una interfaz estricta en TypeScript (IProduct) junto al Schema de Mongoose para evitar que se guarden categorías inválidas.

Uso de IA (Disclosure):

Utilicé IA (Gemini) como un "Pair Programmer" para agilizar el andamiaje (scaffolding) de los archivos de TypeScript.

Me apoyé en la IA para resolver un problema de ruteo de archivos y configuración del entorno de MongoDB (.env) al iniciar el proyecto.

¡Quedo atento a la revisión del código!
