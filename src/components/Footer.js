import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Styles = styled.div`
  text-align: center;
  padding: 10px;
  position: relative;
  width: 50%;
  margin: 20px auto auto auto;
  font-size: 10px;
  border-top: white solid 2px;
  .link {
    color: white;
  }
`;

export default function Footer() {
  return (
    <Styles>
      <FontAwesomeIcon icon={faDatabase} /> source information -{" "}
      <a
        href="https://hpb.health.gov.lk/en"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        Health Promotion Bureau
      </a>
    </Styles>
  );
}
