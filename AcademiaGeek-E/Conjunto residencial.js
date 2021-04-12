
for (let index = 1; index <= 20; index++) {
    let totalconjunto;
    var t, edad, mt, admin, aseo, gym, total, genero;
    index % 2 == 0 ? t = 50000 : t = 100000;
    index % 2 == 0 ? genero = "Masculino" : genero = "Femenino";
    edad = index * 4;
    mt = 30 + index;
    admin = mt * 1500 + t;
    aseo = 0.1 * admin + mt * 1000;
    total = admin + aseo + gym;
    totalconjunto += total;

    if (edad < 10 && genero == "Masculino") {
        gym = 0;
    } else if (edad >= 10 && edad < 20 && genero == "Masculino") {
        gym = 20000;
    } else if (edad >= 20 && edad < 40 && genero == "Masculino") {
        gym = 15000;
    } else if (edad >= 40 && edad < 60 && genero == "Masculino") {
        gym = 10000;
    } else if (edad < 10) {
        gym = 0;
    } else if (edad >= 10 && edad < 18 && genero == "Femenino") {
        gym = 15000;
    } else if (edad >= 18 && edad < 35 && genero == "Femenino") {
        gym = 12000;
    } else if (edad >= 35 && edad < 55 && genero == "Femenino") {
        gym = 8000;
    } else {
        gym = 0;
    }

    console.log('************************************');
    console.log('RECIBO DE COBRO MENSUAL');
    console.log();
    console.log('Señores Apartamento No.' + index);
    console.log();
    console.log('Su genero es: ' + genero + ' y su edad es: ' + edad + ' años');
    console.log();
    console.log('Cuota mes de Abril');
    console.log('Valor Administración: $' + admin);
    console.log('Valor Cuota de aseo: $' + aseo);
    console.log('Derechos de Gimnasio: $' + gym);
    console.log('Total a pagar: $' + total);
    console.log('************************************');
    console.log();

    switch (index) {
        case 20:
            console.log('El total a pagar por los ' + index + ' predios es: ' + totalconjunto);
            break;
    }


}


