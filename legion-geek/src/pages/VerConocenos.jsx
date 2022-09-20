import React from "react";
import styled from "styled-components";


const Container = styled.div`
  padding: 10% 0 10% 0;
`

const Img = styled.img`
  width: 200px;
/*   height: 250px; */
  border-radius: 100%;
  margin-bottom: 10px;
`
const Img2 = styled.img`
  width: 172px;
  height: 200px;
  border-radius: 100%;
  margin-bottom: 10px;
`


const VerConocenos = () => {
  return (
    <Container className="container-md pt-4 bg-white">
      <h2>Equipo de desarrollo</h2>
      <hr />
      <div className="row text-center  mt-5">
        <div className="col-md-4 mt-5 ">
          <Img className='img-fluid' src="https://media-exp3.licdn.com/dms/image/C4E03AQEVAi3CxxMTPQ/profile-displayphoto-shrink_200_200/0/1621398283381?e=1628726400&v=beta&t=FzVEeF_syvx8SEM6k_u4NZg_VfRB5Ft0LqzEUGjvlEw" alt='Yadier foto' />
          <h2>Yadier Caicedo</h2>
          <h5>Desarrollador Front-End</h5>
          <p>Como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto.</p>
          <p><a className="btn btn-warning" href="https://www.linkedin.com/in/yadier-caicedo-150a30180/">Mas Informacion &raquo;</a></p>
        </div>
        <div className="col-md-4 mt-5">
          <Img className='img-fluid' src="https://images-ext-1.discordapp.net/external/LA3EbXtAF-kxm4miQ0vRb4jFM48cLIm-TtKPUChNfs4/https/i.imgur.com/PTYIUzR.png" alt='Jhosep foto' />
          <h2>Jhosep Ropero</h2>
          <h5>Scrum Master</h5>
          <p>Me gusta enfrentar nuevos retos y dar lo mejor de mi para cumplir metas, Mis pasatiempos favoritos son ver peliculas, anime, escuchar musica y el desarrollo web. </p>
          <p><a className="btn btn-warning" href="https://www.linkedin.com/in/jhosep-ropero/">Mas Informacion &raquo;</a></p>
        </div>
        <div className="col-md-4 mt-5">
          <Img2 className='img-fluid' src="https://i.imgur.com/AaQUD5m.jpg" alt='Luis foto' />
          <h2>Luis Chavéz</h2>
          <h5>Product Owner</h5>
          <p>Me gusta encontrar la manera de hacer las cosas lo más practicas posibles, es por ello que amo la tecnología porque no solo facilita nuestra vida, la transforma!
            Me gusta leer, soy fan de Harry Potter y me encanta las frutas!</p>
          <p><a className="btn btn-warning" href="https://www.linkedin.com/in/luischdu/">Mas Informacion &raquo;</a></p>
        </div>
      </div>

    </Container>

  );
};

export default VerConocenos;
