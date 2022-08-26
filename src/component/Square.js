import React from 'react';

function Square() {
    const Square = (props) => <div className="squre_color"></div>


   return (
     <div className="grid">
         {[...Array(9)].map((_,i) => <Square key={i} />)}
     </div>
   );
}

export default Square;