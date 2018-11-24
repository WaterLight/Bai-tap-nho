document.addEventListener('DOMContentLoaded', function() {

	var arrDapAn = ['d','b','b','b','c','b','c','b','d'];

	var soThuTu = document.querySelector('.so-thu-tu');
		soThuTu = soThuTu.innerHTML;

	var nutCheck = document.querySelector('.nut-check');
	nutCheck.addEventListener('click', function(){
		var dapAnDung = '.' + arrDapAn[soThuTu-1];
		console.log(dapAnDung);

		switch (dapAnDung) {
			case '.a':
				dapAnA.classList.add('dap-an-dung');
				break;

			case '.b':
				dapAnB.classList.add('dap-an-dung');
				break;

			case '.c':
				dapAnC.classList.add('dap-an-dung');
				break;

			case '.d':
				dapAnD.classList.add('dap-an-dung');
				break;
			default:
				break;
		}


	});

	var clock = document.querySelector('.overlay');
	var nutBamGio = document.querySelector('.nut-h');
	nutBamGio.addEventListener('click', function() {
		var x = 9;
        function demNguoc(){
            
            if(x>-1){
            	clock.innerHTML = x--;
            	setTimeout(demNguoc, 1000);
            }
        }
        demNguoc();
		
        clock.classList.add('show');
		

	});


},false)