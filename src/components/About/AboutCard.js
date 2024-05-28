import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sreeram A M </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently a <strong>Student</strong> at St Joseph's College Of Engineering.
            <br />
            My Interests are Deep-Learning and implementation using <strong>TensorFlow</strong>, 
            Problem solving in <strong>
            <a
            href="https://leetcode.com/u/Ignis13/"
            style={{ color: "white" }}
            target="_blank" 
            rel="noopener noreferrer"
            >
            LeetCode
            </a>
            </strong>,
            Development of <strong>MERN</strong> stack Websites,
            and Learning new <strong>Stuffs</strong> .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing PUBG
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling with friends / family
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only constant thing in our life is <strong>Change</strong>"{" "}
          </p>
          <footer className="blockquote-footer">Sreeram A M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
