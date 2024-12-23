import Andrea from "../assets/Andrea.png";
import Marta from "../assets/Marta.png";
import "./AboutPage.css";

function AboutPage({isOn}) {
  return (
    <div  className={isOn ? "aboutpage-on" : "aboutpage-off"}>
      <section className="introduction">
        <h2> More about us</h2>
        <h4>Welcome to our Recipe App!</h4>
        <p className="description">
          {" "}
          This project was created with love and teamwork to bring a simple and
          interactive way to explore, add, and manage your favorite recipes.
          Whether you are looking to discover new culinary inspirations or
          organize your own recipes, our app is here to make it easy and fun.
        </p>
        <p>
          Developed using React, this project is a collaboration between two
          passionate developers who share a love for coding and cooking. We hope
          you enjoy using our app as much as we enjoyed building it!
        </p>
      </section>

      <div className="coworkers">
        <div className="coworker">
          <section className="coworkerTitle">
            <img src={Marta} className="facePicture" alt="Marta's face" />
            <h2>Marta</h2>
          </section>

          <p>
            {" "}
            Originaria de Cádiz, la soleada capital del atún y el vino, Marta es
            una verdadera experta en mariscos. Creció rodeada por las ricas
            tradiciones culinarias de Andalucía, desarrollando un profundo amor
            por los tesoros del mar y por las tortillitas de Camarones.
          </p>
          <p>
            Marta ha perfeccionado su experiencia tras años explorando los
            mejores mercados de pescado locales y perfeccionando recetas
            tradicionales como el atún encebollado. Su pasión por los mariscos
            incluso la llevó a colaborar con chefs locales para promover
            prácticas de pesca sostenible, asegurando que las futuras
            generaciones puedan seguir disfrutando de las maravillas del océano.
          </p>
          <p className="last-p">
            Cuando no está cocinando o maridando un buen Xerez con su última
            creación culinaria, a Marta le encanta compartir sus conocimientos e
            inspirar a otros a abrazar los sabores de Cádiz en sus propias
            cocinas.
          </p>
        </div>

        <div className="coworker">
          <section className="coworkerTitle">
            <img src={Andrea} className="facePicture" alt="Andrea's face" />
            <h2>Andrea</h2>
          </section>
          <p>
            {" "}
            Andrea es un apasionado de la cocina italiana, nacido en el corazón
            de una familia que combina lo mejor del norte y el sur de Italia.
            Con una abuela que le enseñó los secretos de la pasta casera en
            Emilia-Romaña y un abuelo que dominaba las tradiciones mediterráneas
            de Calabria, Andrea creció rodeado de sabores auténticos y recetas
            transmitidas de generación en generación.
          </p>{" "}
          <p>
            Hace un par de años, Andrea decidió mudarse a España, donde encontró
            una nueva fuente de inspiración en la vibrante cultura culinaria del
            país. Ha dedicado su tiempo a fusionar las tradiciones italianas con
            ingredientes y técnicas españolas, creando platos únicos que cuentan
            una historia de raíces y viajes.{" "}
          </p>{" "}
          <p className="last-p">
            Cuando no está en la cocina probando nuevas recetas, Andrea disfruta
            compartir su pasión en talleres y cenas con amigos, siempre
            acompañado de un buen vino que combine con su último experimento
            culinario. Su lema: La cocina es el lugar donde el norte y el sur se
            encuentran, y donde Italia y España se abrazan.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
