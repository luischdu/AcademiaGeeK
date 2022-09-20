import React, { memo } from "react";

export const Small = memo(({value}) => {
  console.log("Me volvi a ejecutar");

  return (
    <div>
      <small>Contador: {value}</small>
    </div>
  );
});

export default Small;
