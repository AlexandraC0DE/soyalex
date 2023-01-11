let language = 'es';
let languageBtn = document.querySelector('.language-btn');
let data={};

// Función para cambiar el idioma
let changeLanguage = function (lng) {
    if(data[lng]){
        updateContent(data[lng]);
    }else{
        fetch(`/local/${lng}.json`)
        .then(response => response.json())
        .then(responseData => {
            data[lng]=responseData;
            updateContent(responseData);
        })
        .catch(error => console.error('Error al obtener los datos:', error));
    }
};

// Función para actualizar el contenido
let updateContent = function (data) {
    let elements = document.querySelectorAll('.translate');
    for (let i = 0; i < elements.length; i++) {
        let key = elements[i].getAttribute('data-translate');
        if(data[key]){
            elements[i].innerHTML = data[key];
        }else{
            console.error(`La clave ${key} no esta disponible en el archivo json`)
        }
    }
};

//Evento al hacer clic en el botón de idioma
languageBtn.addEventListener('click', function () {
    if (language === 'es') {
        language = 'en';
        changeLanguage('en');
    } else {
        language = 'es';
        changeLanguage('es');
    }
});
