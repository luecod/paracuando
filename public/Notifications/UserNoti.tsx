import Swal from "sweetalert2";



export function showVoteNotification(mensaje: string): void {
    Swal.fire({
        icon: 'success',
        title: mensaje,
        position: 'top-end',
        toast: true,
        timer: 3000,
        showConfirmButton: false,
        width: 'auto',
        backdrop: false,
        allowOutsideClick: false,
        customClass: {
            container: 'sm'
        }
    });
}

export function newPostNotification(mensaje: string): void {
    Swal.fire({
        icon: 'success',
        title: mensaje,
        position: 'top-end',
        toast: true,
        timer: 3000,
        showConfirmButton: false,
        width: 'auto',
        backdrop: false,
        allowOutsideClick: false,
        customClass: {
            container: 'sm'
        }
    });
}


