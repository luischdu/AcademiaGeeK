import React from "react";

// estado

const initialState = [
  {
    id: "1",
    todo: "comprar algo",
    done: false,
  },
];

const newToDo = [
  {
    id: "1",
    todo: "comprar cereal",
    done: false,
  },
];

//primer reducer 
// se define es una funcion simple con dos parametros : estado inicial & action

const toDoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payLoad];
  }
  return state;
};
let toDos = toDoReducer();
// imprimiendo toDO
console.log(toDos);

// adding newToDo

const agregarToDoAction = {
  type: "agregar",
  payLoad: newToDo,
};

toDos = toDoReducer(toDos, agregarToDoAction);

console.log(toDos);

const IntroReduce = () => {
  return (
    <div>
      <h1>Intro reduce</h1>
    </div>
  );
};

export default IntroReduce;
