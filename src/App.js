import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './styles.css';
import Navmenu from './components/navmenu';
import Refreshcomponent from './components/navmenu';
import Projectcard from './components/projectcard';
import { projectData, workData } from './components/utils';
import Scrolldownarrow from './components/scrolldownarrow';
import styled from '@emotion/styled';
import Contactcard from './components/contactcard';
import { ToastContainer } from 'react-toastify';
import { Socials } from './components/navmenu';
import { Refreshcontainer } from './components/navmenu/navmenustyles.jsx';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = [
  '#C9ADA7',
  '#9A8C98',
  '#435b71',
  // '#F2E9E4',
  '#B36D68',
  '#B3A869',
  '#677F89',
  '#B38A6D',
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * originalColors.length);
  return originalColors[randomIndex];
};

const Socialscontainer = styled('div')({
  //display content when screen is smaller than 600px
  '@media (min-width: 768px)': {
    display: 'none',
  },
});

const Projectcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

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
          text: 'Projects',
        },
        {
          text: 'Work',
        },
        {
          text: 'Contact me',
        },
      ],
    };
  }

  componentDidMount() {
    this.randomizeColors();
  }
  
  randomizeColors() {
    const { sectionsColor } = this.state;
    const randomizedColors = sectionsColor.map(() => getRandomColor());
    this.setState({ sectionsColor: randomizedColors });
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
          pluginWrapper={() => {}}
          licenseKey={'YOUR_KEY_HERE'}
          navigation
          anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthpage']}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text, description }, index) => (
                <div key={text} className={SEL}>
                  {index === 1 ? (
                    <>
                      {/* <h1>my projects</h1> */}
                      {projectData.map((project) => (
                        <Projectcontainer className="slide">
                          <Projectcard project={project} />
                        </Projectcontainer>
                      ))}
                    </>
                  ) : index === 2 ? (
                    <>
                      {/* <h1>my freelance work</h1> */}
                      {workData.map((work) => (
                        <Projectcontainer className="slide">
                          <Projectcard project={work} />
                        </Projectcontainer>
                      ))}
                    </>
                  ) : index === 3 ? (
                    <Projectcontainer className="slide">
                      <Contactcard />
                    </Projectcontainer>
                  ) : (
                    <div className="slide">
                      <h3>{text}</h3>
                      {description && <h4>{description}</h4>}
                      <Socialscontainer>
                        <Socials />
                      </Socialscontainer>
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
