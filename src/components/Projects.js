import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import dashplotly from "../assets/img/dash-plotly.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const dataAnalisys = [
    {
      title: "Plotly Dashboard",
      description: "Data Analisys & Development",
      imgUrl: dashplotly,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
  ];

  const webdev = [
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },

  ];

  const mobile = [
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
    {
      title: "Business Startup",
      description: "Data Analisys & Development",
      imgUrl: projImg2,
      link:'https://dash.up.railway.app/',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here we have some projects ranging from web development to mobile development including data analysis in both.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Data Analisys</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          dataAnalisys.map((dataAnalisys, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...dataAnalisys}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          webdev.map((webdev, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...webdev}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          mobile.map((mobile, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...mobile}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
