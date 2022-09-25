
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


document.getElementById("btnAceptarCompra").onclick = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Libro descargado :)',
        showConfirmButton: false,
        timer: 1500
    })
}