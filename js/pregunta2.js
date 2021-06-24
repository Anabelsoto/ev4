var lista =new Array();

 var persona;

 persona=new Object();
 persona.nombre="Anabel";
 persona.apellido="Soto Loayza";
 persona.edad=28;
 persona.genero="F";
 lista.push(persona);

 persona=new Object();
persona.nombre="Ana Maria";
persona.apellido="Loayza Soto";
persona.edad=40;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Javier";
persona.apellido="Pérez Meza";
persona.edad=40;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Juan";
persona.apellido="Pérez Meza";
persona.edad=40;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Jimena";
persona.apellido="Meza Torres";
persona.edad=28;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Jazmin";
persona.apellido="Meza Torres";
persona.edad=33;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Jacinto";
persona.apellido="Torres Fernández";
persona.edad=18;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Rosa";
persona.apellido="Torres Fernández";
persona.edad=18;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Juana";
persona.apellido="Fernández Huaylla";
persona.edad=18;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Jacinta";
persona.apellido="Huaylla Fernández ";
persona.edad=28;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Edison";
persona.apellido="Tantalean Ramirez ";
persona.edad=38;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Alex";
persona.apellido="Huaylla Ramirez";
persona.edad=28;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Eddy";
persona.apellido="Ramirez Huaylla";
persona.edad=48;
persona.genero="M";
lista.push(persona);
persona=new Object();
persona.nombre="Pilar";
persona.apellido="Huaylla Nava ";
persona.edad=28;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Carmen";
persona.apellido="Nava Huaylla";
persona.edad=38;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Lidia";
persona.apellido="Nava Huaylla";
persona.edad=28;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Mardonio";
persona.apellido="Huaylla Nava";
persona.edad=48;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Martín";
persona.apellido="Huaylla Loayza";
persona.edad=22;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Antonio";
persona.apellido="Huaylla Quispe";
persona.edad=41;
persona.genero="M";
lista.push(persona);



persona=new Object();
persona.nombre="Eddy";
persona.apellido="Ramirez Huaylla";
persona.edad=48;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Alex";
persona.apellido="Ramirez Huaylla";
persona.edad=38;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Alex";
persona.apellido="Ramirez Huaylla";
persona.edad=38;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Rosa";
persona.apellido="Torres Fernández";
persona.edad=18;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Juana";
persona.apellido="Fernández Huaylla";
persona.edad=18;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Jacinta";
persona.apellido="Huaylla Fernández ";
persona.edad=28;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Jacinto";
persona.apellido="Torres Fernández";
persona.edad=18;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Rosa";
persona.apellido="Torres Fernández";
persona.edad=18;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Juana";
persona.apellido="Fernández Huaylla";
persona.edad=18;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Edgar";
persona.apellido="Ramirez Huaylla";
persona.edad=48;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Eduardo";
persona.apellido="Ramirez Tantalean";
persona.edad=48;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Jacinta";
persona.apellido="Huaylla Fernández ";
persona.edad=28;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Pilar";
persona.apellido="Huaylla Nava ";
persona.edad=28;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Carmen";
persona.apellido="Nava Huaylla";
persona.edad=38;
persona.genero="F";
lista.push(persona);

persona=new Object();
persona.nombre="Teodosio";
persona.apellido="Ramirez Nava";
persona.edad=48;
persona.genero="M";
lista.push(persona);

persona=new Object();
persona.nombre="Alex";
persona.apellido="Huaylla Ramirez";
persona.edad=28;
persona.genero="M";
lista.push(persona);


$(document).ready(function(){

    $("#add").click(function(){
        for( var i=0; i<=lista.length;i++){
        $("#tabla>tbody").append(
            '<tr>'+
            '<td>'+i+'</td>'+
            '<td>'+lista[i].nombre+'</td>'+
            '<td>'+lista[i].apellido+'</td>'+
            '<td>'+lista[i].edad+'</td>'+
            '<td>'+lista[i].genero+'</td>'+
            '</tr>'); 
            document.getElementById("color").style.backgroundColor = "grey";
            document.getElementById("color").style.color= "white";
    }
    });  
});