
const Personas_Administracion_Gestion = [
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Amelia Ramirez",
        correo: "aramirez@userena.cl",
        cargo_general: "Directora de Departamento",
        descripcion: "Licenciada en Astronomía por la Pontificia Universidad Católica de Chile. Doctora por la Universidad de Sao Paulo, Brasil. Área de estudio: Astronomía Extragaláctica, Cúmulos de Galaxias, población de Galaxias Elípticas y Astronomía Cultural.",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Julia Arias",
        correo: "",
        cargo_general: "Secretario(a) Académico(a):",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Héctor Cuevas",
        correo: "",
        cargo_general: "Vicerrector de Investigación y Postgrado",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Maritza Tapia",
        correo: "",
        cargo_general: "Secretario(a) Ejecutivo(a):",
        descripcion: "",
        id: ""
    }
];

const Academicos_Departamento = [
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Amelia Ramírez",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Alexandre Román-Lopes",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Julia Arias",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Antonela Monachesi",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Facundo Gómez",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Douglas Geisler",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Valeria Mesa",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Erich Wenderoth",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    }
];

const Academicos_MultidisciplinarioIyP = [
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Marcelo Jaque",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "José Luis Nilo",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Denise Riquelme",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Nicolás Garavito",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
];

const Astronomos_visitantes = [
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Rodrigo Carrasco",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    }
];

const Postdoc = [
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Ciria",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Ariadna",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Cesar Muñoz",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Hugo",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Raquel",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Felipe",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Daniel Ortíz",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
    {
        img: "/images/personas/perfil-temporal.jpg",
        nombre: "Ricardo Moyano",
        correo: "",
        cargo_general: "",
        descripcion: "",
        id: ""
    },
];

//Se creaesta funcion para poder juntar todos los arregos en uno solo
const todosLosUsuarios = Personas_Administracion_Gestion.concat(
    Academicos_Departamento,
    Academicos_MultidisciplinarioIyP,
    Astronomos_visitantes,
    Postdoc
);

//seleccionamos el id vaciar contenido en nuestro html para utilizarlo
const cardHTML = document.querySelector('#vaciar-contenido')
const botonesCategoria = document.querySelectorAll('.boton-categoria')

function createCardUser(userArray) {
    cardHTML.innerHTML = ''
    userArray.forEach(usuario => {
        
        const div = document.createElement("div");
        div.classList.add("contenedor-personas");
        div.innerHTML = `
            <div class="card mb-3 shadow" style="" id="card-container">
                <div class="row">
                    <div class="col-md-4 d-flex justify-content-center">
                    <img src="${usuario.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${usuario.cargo_general}</h5>
                        <h5 class="card-title">${usuario.nombre}</h5>
                        <p class="card-text">${usuario.descripcion}</p>
                        <p class="card-text"><small class="text-body-secondary">${usuario.correo}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        `;
        cardHTML.append(div);
    })
}
createCardUser(todosLosUsuarios)

botonesCategoria.forEach(botones =>{
    botones.addEventListener("click",(e) =>{

        const claseElegido= e.target.id;
        console.log(claseElegido)
        let usuariosFiltrados = [];
        
        // Filtramos los usuarios según el boton elegido
        switch (claseElegido) {
            case "Administracion-Gestion":
                usuariosFiltrados = Personas_Administracion_Gestion;
                break;
            case "Academicos departamento":
                usuariosFiltrados = Academicos_Departamento;
                break;
            case "Academicos-LyP":
                usuariosFiltrados = Academicos_MultidisciplinarioIyP;
                break;
            case "Astronomos-visitantes":
                usuariosFiltrados = Astronomos_visitantes;
                break;
            case "Postdoc":
                usuariosFiltrados = Postdoc;
                break;
            default:
                // Si no se selecciona ninguna categoría válida, mostramos todos los usuarios
                usuariosFiltrados = todosLosUsuarios;
        }
        createCardUser(usuariosFiltrados)
    });
});