import useFetch from "react-hook-usefetch";

const Getdata = () => {
  const {data}= useFetch('http://localhost:3000/guajolotas/1')
  const {imageUrl, name, imageAlt, price} = !!data && data

  return (
    data
    )
  };

export default Getdata