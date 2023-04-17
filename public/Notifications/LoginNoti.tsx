import { useEffect } from "react";
import Swal from "sweetalert2";


export function showLoginNotification(mesagge: string, time: number = 2250): void {
    Swal.fire({
        title: 'Muy bien!',
        text: mesagge,
        icon: 'success',
        showConfirmButton: false,
        timer: time,
    });
}


export function showDenyNotification(mesagge: string, time: number = 3000): void {
    Swal.fire({
        title: 'Algo salio mal!',
        text: mesagge,
        icon: 'warning',
        showConfirmButton: false,
        timer: time,
    });
}


// PASSWORD CHANGE NOTIFICATION IN CASE OF NEEDED

// export function showPasswordChangeNotification(mesagge: string, time: number = 2500): void {
//     Swal.fire({
//         title: 'Exito!',
//         text: mesagge,
//         icon: 'success',
//         showConfirmButton: false, // Deshabilita los botones
//         timer: time, // Establece el tiempo de duración de la alerta en milisegundos
//     });
// }


