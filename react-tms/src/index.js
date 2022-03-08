import React from "react";
import ReactDom from "react-dom";
//import CSS
import "./index.css"
function AppComponent() {
  return (
    <heading>
      <Hero />
      <Des />
    </heading>
  );
}
const Hero = () => <h1>TMS</h1>;

const Des = () => {
  return (
    <section>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi aut
        exercitationem non, ut quisquam quia fuga illum dolorum, enim alias qui
        repellat libero! Nostrum accusamus quas optio quasi adipisci eum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in porro
        sint, voluptatem cumque aut dolorum vitae deleniti non natus incidunt,
        aperiam dolor quos! Voluptas ex dolorem itaque, sunt dicta molestiae
        numquam deleniti praesentium nemo rem asperiores enim illo iure dolores?
        Saepe, eaque aspernatur quasi, voluptas harum quidem nam corporis nemo
        odit blanditiis fuga eos accusantium voluptates ipsa hic obcaecati!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        accusantium reiciendis velit, eum quibusdam est voluptatem molestias
        alias officia voluptate laborum quae corporis consequuntur maiores
        labore ad beatae ipsa consectetur sint! Quae et beatae ipsum asperiores
        ullam harum reiciendis sint quidem, odit soluta consequatur sunt
        nesciunt quod pariatur est repellendus laborum assumenda architecto
        voluptatem! Consectetur, id. Quidem in consectetur fugiat, similique
        voluptates consequatur alias aliquid delectus veniam? Excepturi, quo
        voluptatem? In quia, blanditiis laudantium totam maiores, repellat
        officia inventore vero temporibus molestiae eius ullam iste vitae, quo
        voluptates sint praesentium voluptate ipsam! Maiores cum, pariatur
        voluptatum dignissimos dolorem ratione quaerat sapiente saepe aperiam
        nisi nesciunt in! Ratione, deserunt sit reiciendis iste incidunt
        asperiores. Esse eligendi, architecto excepturi iure non omnis!
      </p>
    </section>
  );
};

ReactDom.render(<AppComponent />, document.getElementById("root"));
