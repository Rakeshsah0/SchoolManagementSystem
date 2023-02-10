import React from "react";
import "../css/Home.css";
import principle from "../../assets/Principle.jpg";

const Home = () => {
  return (
    <div className="Home-Cointainer">
      <div className="Advertise-Desc"></div>

      <div className="Advertise-Box">
        <div className="Box1"></div>
        <div className="Box2"></div>
        <div className="Box3"></div>

      </div>

      <div className="Principle-Notes">
        <div>
        <h1>MESSAGE FROM PRINCIPAL</h1>
        <p className="Aphostrophe">“</p>
        <p className="Message"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid velit natus veniam delectus, inventore accusantium aliquam a harum perspiciatis autem odit suscipit debitis quia corrupti sapiente, et aperiam! Facilis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et soluta dolor nihil corporis praesentium temporibus omnis, quibusdam dolorem laudantium natus odit molestiae velit debitis porro, similique necessitatibus quae deleniti. Magni.</p>
        </div>
        <div className="Photo">
          <img src={principle} alt="Principle" />
        </div>
      </div>
    </div>
  );
};

export default Home;
