const contenedor = document.getElementById("contenedor");

const checkearRespuestas = (comentario) => {
  let respuestas = comentario.replies;
  let texto = "";
  console.log(respuestas);
  respuestas.map((respuesta) => {
    texto += `<div class="reply-estatica comentario my-4 ms-4">
    <div class="info-comentario p-3 rounded d-md-flex flex-row-reverse">
    <div class="contenedor-info">
      <div class="persona d-flex align-items-center mb-3">
        <div class="img-persona">
          <img src="${respuesta.user.image.webp}" alt="" />
        </div>
        <p class="nombre-persona mx-3">${respuesta.user.username}</p>
        <p class="fecha-post">${respuesta.createdAt}</p>
        <p class="reply-desk reply d-none d-md-block text-capitalize ms-auto">
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            />
          </svg>
          reply
        </p>
      </div>
      <div class="comentario mb-3">
        <p>
        <span class="remitente">
        @${respuesta.replyingTo}
        </span>
          ${respuesta.content}
        </p>
      </div>
      </div>
      <div
      class="contenedor-votos d-flex align-items-center justify-content-between pe-md-3 align-items-md-start">
        <div class="votos p-2 px-3 px-md-2 py-md-3 d-md-flex flex-md-column justify-content-between align-items-center">
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
          <span class="px-3 py-md-3 px-md-0">${respuesta.score}</span>
    
          <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            />
          </svg>
        </div>
        <p class="reply-movil reply text-capitalize d-md-none">
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            />
          </svg>
          <span class="ps-1">reply</span>
        </p>
      </div>
    </div>
    <div class="reply-activa d-flex flex-wrap p-3 rounded mt-2 d-none">
      <input type="text" class="input-reply mb-3 order-md-2 mx-md-3">
      </input>
      <div class="img-reply me-auto order-md-1">
        <img src="./images/avatars/image-juliusomo.png" alt="" />
      </div>
      <button class="btn boton-reply px-4 order-md-3 d-flex justify-content-center align-items-center text-uppercase">send</button>
    </div>
    </div>`;
  });
  return texto;
};
const setearComentarios = (comentarios, usuarioActual) => {
  comentarios.map((comentario) => {
    contenedor.innerHTML += `<div class="items comentario col-12 mb-4">
    <div class="main-comentario">
    <div class="info-comentario p-3 rounded d-md-flex flex-row-reverse">
      <div class="contenedor-info">
        <div class="persona d-flex align-items-center mb-3">
          <div class="img-persona">
            <img src="${comentario.user.image.webp}" alt="" />
          </div>
          <p class="nombre-persona mx-3">${comentario.user.username}</p>
          <p class="fecha-post">${comentario.createdAt}</p>
          <p class="reply-desk reply d-none d-md-block text-capitalize ms-auto">
            <svg
              width="14"
              height="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                fill="#5357B6"
              />
            </svg>
            reply
          </p>
        </div>
        <div class="comentario mb-3">
          <p>
            ${comentario.content}
          </p>
        </div>
      </div>
      <div
        class="contenedor-votos d-flex align-items-center justify-content-between pe-md-3 align-items-md-start"
      >
        <div
          class="votos p-2 px-3 px-md-2 py-md-3 d-md-flex flex-md-column justify-content-between align-items-center"
        >
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
          <span class="px-3 py-md-3 px-md-0">${comentario.score}</span>

          <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            />
          </svg>
        </div>
        <p class="reply-movil reply text-capitalize d-md-none">
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            />
          </svg>
          <span class="ps-1">reply</span>
        </p>
      </div>
    </div>
  </div>
  ${comentario.replies[0] ? checkearRespuestas(comentario) : ""}
  <div class="reply-activa d-flex flex-wrap p-3 rounded mt-2 d-none">
    <input type="text" class="input-reply mb-3 order-md-2 mx-md-3">
    </input>
    <div class="img-reply me-auto order-md-1">
      <img src="${usuarioActual.image.webp}" alt="" />
    </div>
    <button class="btn boton-reply px-4 order-md-3 d-flex justify-content-center align-items-center text-uppercase">send</button>
  </div>
  </div>
  
  `;
  });
};

const mostrarReply = (boton) => {
  const padreBoton = boton.closest(".comentario");
  const replyActual = padreBoton.lastElementChild;
  replyActual.classList.toggle("d-none");
  replyActual.firstElementChild.focus();
};

const obtenerBotones = () => {
  const botonesReply = document.querySelectorAll(".reply");
  botonesReply.forEach((boton) => {
    boton.addEventListener("click", () => {
      mostrarReply(boton);
    });
  });
};

const manipularData = (data) => {
  const { currentUser, comments } = data;
  setearComentarios(comments, currentUser);
  obtenerBotones();
};

const obtenerData = () => {
  fetch("http://localhost:3000")
    .then((response) => response.json())
    .then((json) => manipularData(json));
};

obtenerData();
