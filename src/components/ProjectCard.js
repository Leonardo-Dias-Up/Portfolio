import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={link}>
          <img src={imgUrl} onClick={link}/>
        </a>
        <a href = {link}>
        <div className="proj-txtx">
          <font color="white"><h4>{title}</h4></font>
          <font color="white"><span>{description}</span></font>
        </div>
        </a>
      </div>
    </Col>
  )
}
