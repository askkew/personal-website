import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './styles.css';
import Navmenu from './components/navmenu';
import Projectcard from './components/projectcard';
import { projectData } from './components/utils';
import styled from '@emotion/styled';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = [
  '#C9ADA7',
  '#9A8C98',
  '#F2E9E4',
  '#435b71',
  'orange',
  'blue',
  'purple',
  'yellow',
];

const Projectcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: 'Lucas Overbey',
          description: 'Full Stack Developer',
        },
        {
          text: 'Experience | Work',
        },
        {
          text: 'Contact me',
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <>
        <Navmenu />
        <ReactFullpage
          debug /* Debug logging */
          // Required when using extensions
          pluginWrapper={() => {
            /*
             * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
             */
          }}
          // fullpage options
          licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={['firstPage', 'secondPage', 'thirdPage']}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text, description }, index) => (
                <div key={text} className={SEL}>
                  {index === 1 ? (
                    <>
                      {projectData.map((project) => (
                        <Projectcontainer className="slide">
                          <Projectcard project={project} />
                          {/* <h3>{text}</h3> */}
                        </Projectcontainer>
                      ))}
                      {/* <div className="slide">
                        <Projectcard />
                        <h3>{text}</h3>
                      </div>
                      <div className="slide">
                        <h3>2{text}</h3>
                      </div>
                      <div className="slide">
                        <h3>3{text}</h3>
                      </div>
                      <div className="slide">
                        <h3>4{text}</h3>
                      </div>
                      <div className="slide">
                        <h3>5{text}</h3>
                      </div> */}
                    </>
                  ) : (
                    <div className="slide">
                      <h3>{text}</h3>
                      {description && <h4>{description}</h4>}
                    </div>
                  )}
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </>
    );
  }
}

export default App;
