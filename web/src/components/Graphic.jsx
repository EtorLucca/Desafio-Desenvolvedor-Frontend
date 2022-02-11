import React from 'react';

function Graphic({ prop }){
  console.log(prop);
  let dashboardData = prop[0] ? prop[0] : {};

  return(
    <h3 className="dashboardH3">Projeção de Valores</h3>

  );
}

export default Graphic;