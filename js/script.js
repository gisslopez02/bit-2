"use strict";

const $root = document.getElementById('root');

fetch('file.json')
  .then(res => res.json())
  .then(info => {
    info.forEach(estudiante => {
      // Crear contenedor con clase 'card'
      const studentDiv = document.createElement('div');
      studentDiv.classList.add('card'); // aquí aplicas tu estilo CSS

      // Nombre con etiqueta h5
      const nombre = document.createElement('h5');
      nombre.textContent = estudiante.student;
      studentDiv.appendChild(nombre);

      // Proyectos y calificaciones
      estudiante.projects.forEach(proyecto => {
        const p = document.createElement('p');
        p.textContent = `Proyecto: ${proyecto.name} - Calificaciones: ${proyecto.score.join(', ')}`;
        studentDiv.appendChild(p);
      });

      // Agregar al root
      $root.appendChild(studentDiv);
    });
  })
  .catch(err => {
    console.error('Error al cargar los datos:', err);
  });
    





