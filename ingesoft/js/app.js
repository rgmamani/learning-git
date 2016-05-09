function showModalLogin(){
	$("#loginButton").click(function(){
		$('#loginModal').modal({
			backdrop: 'static',
            keyboard: false  // to prevent closing with Esc button (if you want this too)
        })
	});
};

function drawChart(){
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
			datasets: [{
				label: '# de pasto',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: "#CDDC39"
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
};

function setEditAndDelteModal() {
    $("#mytable #checkall").click(function () {
        if ($("#mytable #checkall").is(':checked')) {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });
        } else {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("[data-toggle=tooltip]").tooltip();
};
