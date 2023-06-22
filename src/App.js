import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './styles.css';
import Navmenu from './components/navmenu';
import Projectcard from './components/projectcard';
import { projectData } from './components/utils';
import Scrolldownarrow from './components/scrolldownarrow';
import styled from '@emotion/styled';
import Contactcard from './components/contactcard';
import { ToastContainer } from 'react-toastify';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = [
  '#C9ADA7',
  '#9A8C98',
  '#435b71',
  '#F2E9E4',
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
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <>
        <ToastContainer />
        <Navmenu />
        <ReactFullpage
          debug
          pluginWrapper={() => {
          }}
          licenseKey={'YOUR_KEY_HERE'}
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
                        </Projectcontainer>
                      ))}
                    </>
                  ) : index === 2 ? (
                    <Projectcontainer className="slide">
                      <Contactcard />
                    </Projectcontainer>
                  ) : (
                    <div className="slide">
                      <h3>{text}</h3>
                      {description && <h4>{description}</h4>}
                      <Scrolldownarrow />
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
