let arrayProductos = [];

fetch('json/data.json')
.then((res) => res.json())
.then (data => {
    console.log(data);
    arrayProductos= [...data]
    renderizarHtml(arrayProductos)
})

    const nombreProducto = document.querySelector('#nombre-producto');

    nombreProducto.addEventListener('input', () => {
        const encontrados = arrayProductos.filter( ( { nombre } ) => {
            return nombre.toUpperCase().includes(nombreProducto.value.toUpperCase());
        });
        renderizarHtml(encontrados);
    });

    const generoProducto = document.querySelector('#genero-producto');

    generoProducto.addEventListener('input', () => {
        const encontrados = arrayProductos.filter( ( { genero } ) => {
            return genero.toUpperCase().includes(generoProducto.value.toUpperCase());
        });
        renderizarHtml(encontrados);
    });

    const autorProducto = document.querySelector('#autor-producto');

    autorProducto.addEventListener('input', () => {
        const encontrados = arrayProductos.filter( ( { autor } ) => {
            return autor.toUpperCase().includes(autorProducto.value.toUpperCase());
        });
        renderizarHtml(encontrados);
    });

    const editorialProducto = document.querySelector('#editorial-producto');

    editorialProducto.addEventListener('input', () => {
        const encontrados = arrayProductos.filter( ( { editorial } ) => {
            return editorial.toUpperCase().includes(editorialProducto.value.toUpperCase());
        });
        renderizarHtml(encontrados);
    });

    const filtrar = document.querySelector('#filtrar');

    filtrar.addEventListener('click', () => {
        const desde = document.querySelector('#desde').value;
        const hasta = document.querySelector('#hasta').value;

        const encontrados = arrayProductos.filter( ( { precio } ) => {
            return  Number(precio) >= desde && Number(precio) <= hasta;
        });
        renderizarHtml(encontrados);
    })





function renderizarHtml(array){
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    if(array.length === 0){
        tbody.innerHTML = "<h1 class='mt-5'>No se encontraron resultados</h1>"
    }


            array.forEach( ( { imagen, nombre, genero, autor, editorial, precio } ) => {
            const tr = document.createElement('tr');  
            tr.innerHTML = `<td><img src="${imagen}"></td>
                        <td>${nombre}</td>
                        <td>${genero}</td>
                        <td>${autor}</td>
                        <td>${editorial}</td>
                        <td>$${precio}</td>
                        <button class="boton-comprar" id="btnCancelarCompra" ><a class="texto-descargar" href="descarga.html">Descargar</a></button>`

        
            tbody.appendChild(tr);
    });
}


document.getElementById("btnCancelarCompra").onclick = () => {
    Swal.fire({
        title: '¿No encuentras un libro? ¡Dinos cual es!',
        input: 'text',
        inputAttributes: {
        autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: '¡Listo!',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            title: `¡Gracias por avisarnos! Pronto estara disponible :)`,
        })
        }
    })
}
