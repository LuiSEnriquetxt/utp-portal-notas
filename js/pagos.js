const contenedor=document.getElementById("contenedorPagos");

pagos.forEach(pago=>{

let clase="";

if(pago[3]=="PAGADO"){

clase="pagado";

}

else if(pago[3]=="EN PROCESO"){

clase="proceso";

}

else{

clase="pendiente";

}

contenedor.innerHTML+=`

<div class="tarjetaPago">

<h3>${pago[0]}</h3>

<p><strong>Fecha:</strong> ${pago[1]}</p>

<p><strong>Monto:</strong> ${pago[2]}</p>

<span class="estado ${clase}">

${pago[3]}

</span>

</div>

`;

});