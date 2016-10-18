<section>
	 <article id="panel_botonera">
		 <div id="botonera">
		 	<ul>
		 		<li><a href="" class="nuevo" ng-click="getNoOrden()"> </a></li>
		 		<li><a href="">x Cancelar</a></li>
		 	</ul>
		 </div>
		 <div id="noOrden">
		 	<p>No Orden <span>{{NoOrden}}</span></p>

		 </div>
	 </article>
	 <article id="derecha">
		<div class="panel_venta">
			<label>Cliente</label>
			<select class="text">
				<option value="0">Cliente General</option>
			</select>
			<p>
				<label> T.Venta</label>
				<select class="text">
					<option value="0">Venta Mostrador</option>
				</select>
			</p>
		</div>
		<div class="panel_pago">
	
			<span>$ 0.00</span>
			<a href="#">Generar Ticket</a>
		</div>
		<div id="canasto">
			<table border =0 class="gridCanasto">
				<th>Producto</th><th>Picante</th><th>Complementos</th><th>Extras</th><th>Importe</th><th></th>
				<tr><td></td><td></td>
					<td>
						<table border=0 class="tabla_complemento">
								<th>Jitomate</th><th>Cebolla</th><th>Frijoles</th><th>Aderezo</th><th>Quesillo</th>
						</table>
					</td>
				</tr>
				<tr>
					<td> descripcion prod</td>
					<td>
						<select>
							<option>Chipotle</option>							
							<option>Rajas</option>							
							<option>Ambos</option>
							<option>Sin Picante</option>
						</select>
					</td>
					<td>
						<table border=0 class="tabla_complemento">
							<tr><td><input type="checkbox" name="" checked></td><td><input type="checkbox" name="" checked></td><td><input type="checkbox" name="" checked></td><td><input type="checkbox" name="" checked></td><td><input type="checkbox" name="" checked ></td></tr>							
						</table>
					</td>
					<td>
						<a href="">Agregar</a>
					</td>
					<td>$ 0.00</td>
					<td><a href="">X</a></td>
				</tr>
				
			</table>
		</div>
	
	</article>
	
	<article id="izquierda">
		<h2>Menu</h2>
	</article>

</section>