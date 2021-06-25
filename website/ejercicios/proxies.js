// proxies es6

var empleado = {
    nombre: '', 
    apellido: '', 
    password: '32ioi4o24'
  };
  
  
  // empleado.nombre = 'alejandro';
  
  function valida(prop, value) {
    const keys = Object.keys(empleado);
    const propInvalida = keys.indexOf(prop) === -1;
    
    if (propInvalida) {
      console.error('Propiedad invalida');
      return false;
    }
    
    if ((prop === 'apellido' || prop === 'nombre') && /\d/.test(value)) {
      console.error(`El valor de la propiedad ${prop} es invalido `);
      return false;
    }
    return true;
  }
  
  var handler = {
    set(obj, prop, value) {
      if (valida(prop, value)) {
        obj[prop] = value;      
      }
    },
    get(obj, prop) {
      if (prop === 'password') {
        return '*'.repeat(obj[prop].length)
      }
      
      if (prop === 'nombreCompleto') {
        return `${obj['nombre']} ${obj['apellido']}`;
      }
      return obj[prop];
    }
  };
  var pEmpleado = new Proxy(empleado, handler);
  
  
  pEmpleado.nombre = 'Alejandro';
  pEmpleado.apellido = 'Amador';
  pEmpleado.id = 324234;
  // console.log(empleado);
  console.log(pEmpleado.password);
  console.log(pEmpleado.nombre);
  console.log(pEmpleado.nombreCompleto);
  