
function CreateScrollVideos() {

    const numVideos = 3;
    
    const videoContainer = document.getElementById("videoContainer");
    
    for (let i = 0; i < numVideos; i++) {
        // Criar a div do vídeo
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        
        // Criar o elemento de vídeo
        const videoElement = document.createElement("video");
        videoElement.setAttribute("controls", "true");

        // Criar o elemento source para o vídeo
        const sourceElement = document.createElement("source");
        sourceElement.setAttribute("src", `video/video-${i}.mp4`);
        sourceElement.setAttribute("type", "video/mp4");
        
        // Adicionar o source ao vídeo
        videoElement.appendChild(sourceElement);
        
        // Adicionar uma mensagem para navegadores sem suporte a vídeo
        videoElement.innerHTML += "Seu navegador não suporta o elemento de vídeo.";
        
        // Adicionar o vídeo à div
        videoItem.appendChild(videoElement);
        
        // Adicionar a div ao contêiner
        videoContainer.appendChild(videoItem);
    }
}

function CreateScrollImgs() {
    const NUM_IMGS = 3;

    const IMG_CONTAINER = document.getElementById('imgContainer');

    for(i = 0; i < NUM_IMGS; i++) {
        const IMG_ITEM = document.createElement('div');
        IMG_ITEM.classList.add("img-item");

        const IMG = document.createElement('img');
        IMG.classList.add('img')
        IMG.src = `img/img-${i}.jpeg`;

        IMG_ITEM.appendChild(IMG);

        IMG_CONTAINER.appendChild(IMG_ITEM);
    }
}

function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch((error) => {
          console.log('Falha ao registrar o Service Worker:', error);
        });
    });
  }
  