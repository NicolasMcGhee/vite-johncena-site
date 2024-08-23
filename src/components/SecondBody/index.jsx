import React from "react";
import "./SecondBody.css";
import TestImage from "/John-Cena-US-Title-Run.jpg";

export default function SecondBody() {
  return (
    <div className="container">
      <h1 className="SecondBody_Title"> 5 Phases Of Cena</h1>
      {/* Phases Of Cena */}
      <section className="SecondBody_Phases">
        <h2>DEbut: The Prototype</h2>
        <div className="Phases_Flex">
          <img src={TestImage} alt="" width={800} className="CenaPhase" />
          <div className="Phases_Info">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              dicta! Corporis neque sit illum cumque quos voluptatibus unde
              quasi accusamus.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, vitae? Eaque aut culpa neque! Dolores amet eius nam
              harum adipisci ducimus iusto doloremque, mollitia molestias iure
              tempora, incidunt sequi hic reprehenderit nesciunt vero facilis    
              esse! Maiores, libero velit. Aut sequi dolorum explicabo sed
              incidunt quae nobis esse corrupti quam fuga.
            </p>
          </div>
        </div>
        <h2>2002-2005: The Doctor of Thuganomics</h2>
        <div className="Phases_Flex">
          <div className="Phases_Info">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              dicta! Corporis neque sit illum cumque quos voluptatibus unde
              quasi accusamus.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, vitae? Eaque aut culpa neque! Dolores amet eius nam
              harum adipisci ducimus iusto doloremque, mollitia molestias iure
              tempora, incidunt sequi hic reprehenderit nesciunt vero facilis
              esse! Maiores, libero velit. Aut sequi dolorum explicabo sed
              incidunt quae nobis esse corrupti quam fuga.
            </p>
          </div>
          <img src={TestImage} alt="" width={800} className="CenaPhase"/>
        </div>
        <h2>2005-2007: Chain Gang/WWE Champion</h2>
        <div className="Phases_Flex">
          <img src={TestImage} alt="" width={800} className="CenaPhase" />
          <div className="Phases_Info">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              dicta! Corporis neque sit illum cumque quos voluptatibus unde
              quasi accusamus.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, vitae? Eaque aut culpa neque! Dolores amet eius nam
              harum adipisci ducimus iusto doloremque, mollitia molestias iure
              tempora, incidunt sequi hic reprehenderit nesciunt vero facilis
              esse! Maiores, libero velit. Aut sequi dolorum explicabo sed
              incidunt quae nobis esse corrupti quam fuga.
            </p>
          </div>
        </div>
        <h2>2002-2005: The Doctor of Thuganomics</h2>
        <div className="Phases_Flex">
          <div className="Phases_Info">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              dicta! Corporis neque sit illum cumque quos voluptatibus unde
              quasi accusamus.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, vitae? Eaque aut culpa neque! Dolores amet eius nam
              harum adipisci ducimus iusto doloremque, mollitia molestias iure
              tempora, incidunt sequi hic reprehenderit nesciunt vero facilis
              esse! Maiores, libero velit. Aut sequi dolorum explicabo sed
              incidunt quae nobis esse corrupti quam fuga.
            </p>
          </div>
          <img src={TestImage} alt="" width={800} className="CenaPhase"/>
        </div>
        <h2>2002-2005: The Doctor of Thuganomics</h2>
        <div className="Phases_Flex">
          <img src={TestImage} alt="" width={800} className="CenaPhase" />
          <div className="Phases_Info">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              dicta! Corporis neque sit illum cumque quos voluptatibus unde
              quasi accusamus.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, vitae? Eaque aut culpa neque! Dolores amet eius nam
              harum adipisci ducimus iusto doloremque, mollitia molestias iure
              tempora, incidunt sequi hic reprehenderit nesciunt vero facilis
              esse! Maiores, libero velit. Aut sequi dolorum explicabo sed
              incidunt quae nobis esse corrupti quam fuga.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
