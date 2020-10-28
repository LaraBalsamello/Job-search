# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by clicking the **Run** button or use the simulator by clicking **Tap to Play**. When you're done, click **Save** and share the link!

# Desafio React Native

Para este desafío se solicita consumir una API de trabajos hecha en graphql. Se deberá mostrar el listado de empresas (companies) que tengan trabajos postulados, y al presionar en una, mostrar el listado de trabajos para esa empresa.

# Requerimientos mínimos

- Usar un cliente de graphql para consumir el listado de empresas desde la API https://api.graphql.jobs/ y mostrarlas en una lista de elementos.

- Cada elemento debe mostrar el nombre de la empresa, el logo, y url del sitio web de la misma.

- Al presionar en una empresa, deberemos navegar a otra pantalla donde se listarán los trabajos (jobs) disponibles para esa empresa. En cada trabajo, se mostrará el titulo, los lugares de trabajo (o si es remoto), y la información extra, como si es full-time o no.

- Crear componentes reutilizables. Deben ser componentes funcionales y se apreciará el uso de hooks.

- Que funcione en al menos una plataforma (ios | android)

## Requerimientos Deseables

- Implementar al menos un test unitario.

- Interfaz estetica

- Guardar trabajos favoritos (usando AsyncStorage).

- Simular un flujo de postulación, donde a través de un formulario se puedan enviar datos a la empresa.

- Se tendrán en cuenta buenas prácticas

- Se valorará cualquier funcionalidad extra que se quiera agregar.

## Sugerencias

Usar typescript, styled-componentes, formik y yup.
