// Call the dataTables jQuery plugin
$(document).ready(function() {
	$('#dataTable').DataTable();
});

$(document).ready(function() {
	$('#dtUsuario').DataTable({
		language: {
			decimal: '.',
			emptyTable: 'No hay datos para mostrar',
			info: 'del _START_ al _END_ (_TOTAL_ total)',
			infoEmpty: 'del 0 al 0 (0 total)',
			infoFiltered: '(filtrado de todas las _MAX_ entradas)',
			infoPostFix: '',
			thousands: "'",
			lengthMenu: 'Mostrar _MENU_ entradas',
			loadingRecords: 'Cargando...',
			processing: 'Procesando...',
			search: 'Buscar:',
			zeroRecords: 'No hay resultados',
			paginate: {
				first: 'Primero',
				last: 'Último',
				next: 'Siguiente',
				previous: 'Anterior'
			},
			aria: {
				sortAscending: ': ordenar de manera Ascendente',
				sortDescending: ': ordenar de manera Descendente '
			}
		}
	});
});
