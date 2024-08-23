import React from "react";
import "./FirstBody.css";
import Logo from "/dbsz-logo.png";
import US_Title from "/John-Cena-US-Title-Run.jpg";

export default function FirstBody() {
  return (
    <div className="firstBody_Container">
      {/* Title and Info - Top Part */}
      <section className="firstBody_First">
        <div className="firstBody_Flex">
          <img src={Logo} alt="Logo Of John Cena" />
          <div className="FirstBody_InfoBody">
            <div>
              <h2>And his name is</h2>
              <h1>John Cena</h1>
            </div>
            <div className="FirstBody_InfoFlex">
              <p>Birthplace: West Newbury, Massachusetts</p>
              <p>Born: April 23, 1977</p>
              <p>Debuted: 2002 (Smackdown)</p>
            </div>
          </div>
        </div>
      </section>
      {/* - Bottom Part */}
      <section className="FirstBody_Second">
        <div className="FirstBody_FirstSide">
          <h2>Hustle, Loyalty, Respect</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            commodi aut veniam, repudiandae possimus, sequi, modi consectetur
            similique eaque soluta illum ex unde quod. Debitis eum impedit,
            aliquam soluta quas placeat ipsam. Alias repudiandae asperiores
            nobis, quasi natus consequatur perferendis, maxime odio, vero veniam
            delectus blanditiis voluptas nisi quod voluptates.
          </p>
          {/* <p>Put title Won images or another paragraph</p> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            aspernatur fuga nisi eveniet voluptatum illo neque iure, saepe,
            officiis placeat rem deserunt doloremque quibusdam! Eius nulla, aut
            ipsam at, autem non a architecto, impedit ducimus ipsa recusandae
            totam laudantium quos modi natus vero nobis dolorum dolor ab neque
            officiis? Reprehenderit at nesciunt exercitationem eaque provident
            impedit qui, similique non nam debitis corrupti voluptas ut
            explicabo neque natus odio molestiae dicta repellat architecto animi
            quia quisquam.
          </p>
        </div>
        <div className="Image">
          <img
            src={US_Title}
            alt="John Cena Holding Up US Title"
            width={1200}
            className="johnCenaPic"
          />
          <p>During 2015 Run With U.S Title</p>
        </div>
      </section>
    </div>
  );
}
