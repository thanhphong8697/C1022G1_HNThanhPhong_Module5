import Swal from "sweetalert2"

export function deleteModal(msg, onAgree){
    Swal.fire({
        title: 'Are you sure?',
        text: msg,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            await onAgree();
          Swal.fire(
            'Deleted!',
            'Your product has been deleted.',
            'success'
          )
        }
      })
}