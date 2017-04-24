
  var header = document.createElement("header");
  var divHeader = document.createElement("div");
  var divByN = document.createElement("div");
  var byn = document.createElement("img");
  var divCoder = document.createElement("div");
  var coder = document. createElement("img");
  var music = document.createElement("span");
  var star = document.createElement("span");
  var divImagenFoto = document.createElement("div");
  var imgImagenFoto = document.createElement("img");

  header.setAttribute("id", "encabezado");
  divHeader.setAttribute("id", "divHeader");
  divByN.setAttribute("id", "divByN");
  byn.setAttribute("src", "assets/img/medium.png")
  byn.setAttribute("id", "byn")
  divCoder.setAttribute("id", "divCoder");
  coder.setAttribute("src", "assets/img/coder.png")
  coder.setAttribute("id", "coder")
  music.setAttribute("class", "icon-music");
  star.setAttribute("class", "icon-star");
  divImagenFoto.setAttribute("id", "divImagenFoto");
  imgImagenFoto.setAttribute("src", "assets/img/naomi.jpg");
  imgImagenFoto.setAttribute("id", "imgImagenFoto");

  document.body.appendChild(header);
  header.appendChild(divHeader);
  divHeader.appendChild(divByN);
  divByN.appendChild(byn);
  divCoder.appendChild(coder);
  divHeader.appendChild(divCoder);
  divHeader.appendChild(music);
  divHeader.appendChild(star);
  divImagenFoto.appendChild(imgImagenFoto);
  divHeader.appendChild(divImagenFoto);

  var seccionNombre = document.createElement("section");
  var divContenedorSeccion = document.createElement("div");
  var divImagen2 = document.createElement("div");
  var foto2 = document.createElement("img");
  var contenedorNombre = document.createElement("div");
  var nombre = document.createElement("span");
  var descripcion = document.createElement("span");
  var heart = document.createElement("span");

  document.body.appendChild(seccionNombre);
  seccionNombre.appendChild(divContenedorSeccion);
  divContenedorSeccion.appendChild(divImagen2);
  divImagen2.appendChild(foto2);
  divContenedorSeccion.appendChild(contenedorNombre);
  contenedorNombre.appendChild(nombre);
  contenedorNombre.appendChild(descripcion);
  divContenedorSeccion.appendChild(heart);

  seccionNombre.setAttribute("id", "seccionNombre");
  divContenedorSeccion.setAttribute("id", "divContenedorSeccion");
  divImagen2.setAttribute("id", "divImagen2");
  foto2.setAttribute("id", "foto2");
  foto2.setAttribute("src", "assets/img/naomi.jpg");
  contenedorNombre.setAttribute("id", "contenedorNombre");
  nombre.setAttribute("id", "nombre");
  descripcion.setAttribute("id", "descripcion");
  heart.setAttribute("class", "icon-heart");

  nombre.innerHTML = "Naomi Villanueva <br>";
  descripcion.innerText = "Teaching Assistant at Laboratoria. Trabajando para ver a más mujeres en el mundo de la programación.";


  var seccion2 = document.createElement("section");
  var articuloSeccion2 = document.createElement("article");
  var titulo1 = document.createElement("h2");
  var contenido1 = document.createElement("p");

  document.body.appendChild(seccion2);
  seccion2.appendChild(articuloSeccion2);
  articuloSeccion2.appendChild(titulo1);
  articuloSeccion2.appendChild(contenido1);

  seccion2.setAttribute("id", "seccion2");
  articuloSeccion2.setAttribute("id", "articuloSeccion2");
  titulo1.setAttribute("id", "titulo1");
  contenido1.setAttribute("id", "contenido1");

  titulo1.innerText = "Hazlo con estilo : Tipografías, iconos y sprite";
  contenido1.innerHTML = "Te imaginas el mundo sin tipos de letra, tamaños o colores, o sin íconos, nada sería igual!!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollo web, pero la pregunta que nos hacemos es <i>¿Existen reglas, hay mejor forma de hacerlo, no sé qué tipografía utilizar?</i> Tengo muchas preguntas y pocas respuestas!!";
