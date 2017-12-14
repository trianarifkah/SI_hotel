<?php
if(@$_GET['halaman']=="home") {

include'./modul/home/home.php';
}
else if (@$_GET['halaman']=="fasilitas") {
	include'./modul/fasilitas/fasilitas.php';
} 
else if (@$_GET['halaman']=="booking") {
	include'./modul/booking/booking.php';
}  
else if (@$_GET['halaman']=="carihotel") {
	include'./modul/carihotel/carihotel.php';
}  
else if (@$_GET['halaman']=="layanancostumer") {
	include'./modul/layanan/layanan.php';
}
else {
	include'./modul/home/home.php';
}