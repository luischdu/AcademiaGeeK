export const obtenerSate = () => {
  const citaStore = localStorage.getItem("citas");

  if (citaStore === null) {
    return undefined;
  }
  return JSON.parse(citaStore);
};

export const guardarStore = (state) => {
  const citaStore = JSON.stringify(state);
  localStorage.setItem("citas", citaStore);
};
