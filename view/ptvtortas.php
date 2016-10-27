<section>
	 <article id="panel_botonera">
		 <div id="botonera">
		 	<ul>
		 		<li data-tip="Nuevo Ticket"><a href="" class="nuevo" ng-click="getNoOrden()"> </a></li>

		 		<li data-tip="Cancelar Ticket"> <a href="" class="cancelar"></a></li>
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
					<option value="0">Seleccione Tipo Venta</option>
					<option value="1">Venta Mostrador</option>
					<option value="2">Venta Telefoníca</option>
					<option value="3">Venta WhatsApp</option>
				</select>
			</p>
		</div>
		<div class="panel_pago">
	
			<span>$ {{subtotal}}</span>
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
				<tr ng-repeat="torta in datosTortas">
					<td> {{torta.producto}} </td>
					<td>
						<div ng-if="torta.complementos==1">
							<select>
								<option>Chipotle</option>							
								<option>Rajas</option>							
								<option>Ambos</option>
								<option>Sin Picante</option>
							</select>
						</div>
					</td>
					<td >
					<div ng-if="torta.complementos==1">
						<table border=0 class="tabla_complemento">
							<tr><td><input type="checkbox" name="" checked></td><td><input type="checkbox" name="" checked></td><td><input type="checkbox" name="" checked></td><td><input type="checkbox" name="" checked></td><td><input type="checkbox" name="" checked ></td></tr>							
						</table>
					</div>
					</td>
					<td data-tip="Agregar Extras">
						<div ng-if="torta.complementos==1">
							<a href="" ><img  class="icono" src="../img/add.png"  alt="Agregar Extra"></a>
						</div>
					</td>
					<td>$ {{torta.precio}}</td>
					<td data-tip="Quitar"><a ><img class="icono" src="../img/del.png" ng-click="removeRow(torta.id,torta.precio)" alt="Eliminar"></a></td>
				</tr>
				
			</table>
		</div>
	
	</article>
	
	<article id="izquierda">
		<h2>Menu</h2>			  
		   		<ul >
		   			<li ng-repeat="elem in ElementoVenta" class="boton2">
		   				<a href="" class="hvr-shutter-in-horizontal" ng-click="addRow(elem.id,elem.Nombre,elem.precio,elem.complementos)">{{elem.Nombre}}</a>		   				
		   			</li>		   			
		   		</ul>

		   </table>
	</article>

</section>