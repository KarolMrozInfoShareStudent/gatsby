import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Umiejętności</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand CaptureOne" />
            <em>Capture One</em>
          </li>
          <li>
            <span className="bar-expand Git" />
            <em>Git</em>
          </li>
          <li>
            <span className="bar-expand JavaScript" />
            <em>Java Script</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Nodejs</em>
          </li>
          <li>
            <span className="bar-expand React" />
            <em>React</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
