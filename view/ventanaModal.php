<div class="overlay"/><div class="modal">

<h1> <?php echo $_GET['torta']; echo $_GET['precio']; echo $_GET['id']?></h1> 

<select  class="text">
	 <option value="0" selected >Selecciona Extra</option>
	  <option value="1">Quesillo</option>
	  <option value="2">Jamón</option>
	   <option value="3"> Queso de Puerco</option>
	   <option value="4">Otros</option>
</select> 

<label>extras</label>
<input type="number" min="1" max="15" value="0" />
<label>Descuentos</label>
<input type="number" min="0" max="10" value="0" />

<input type="number" name="" value="<?php echo $_GET['precio']; ?>">
<button ng-click="cerrarModal()">Aceptar</button>

</div>