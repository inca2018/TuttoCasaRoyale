<?php

	  //echo $txtnombre;
	  //echo $txtmail;
	  //echo $txtciudad;
	  //echo $textarea;
	  if(!empty($_POST['txtnombres']) or !empty($_POST['txtmail']) or !empty($_POST['txtasunto']) or !empty($_POST['txtmensaje'])){
			  $txtnombre=$_POST['txtnombres'];

			  $txtmail=$_POST['txtmail'];
			  $asunto="Mensaje desde Grupo Vicente".$_POST['txtasunto'];
			  $distrito=$_POST['txtasunto'];
			  $txtmensaje=$_POST['txtmensaje'];
				$para ="vincenzomuroll@hotmail.ch";


				$headers = "Content-Type: text/html; charset=iso-8859-1\n";
				$headers .= "From:".$txtmail."\r\n";
				$mensaje="
				<table border='0' cellspacing='2' cellpadding='2'>
				  <tr>
					<td width='20%' align='center' style='color: #FFF;background: #005696;'><strong>Nombre:</strong></td>
					<td width='80%' align='left'>$txtnombre</td>
				  </tr>
				  <tr>
					<td width='20%' align='center' style='color: #FFF;background: #005696;'><strong>Distrito:</strong></td>
					<td width='80%' align='left'>$distrito</td>
				  </tr>
				  <tr>
					<td align='center' style='color: #FFF;background: #005696;'><strong>E-mail:</strong></td>
					<td align='left'>$txtmail</td>
				  </tr>
				  <tr>
					<td align='center' style='color: #FFF;background: #005696;'><strong>Comentario:</strong></td>
					<td align='left'>$txtmensaje</td>
				  </tr>
				</table>

				";
				mail($para,$asunto,$mensaje,$headers);
	  }
?>
