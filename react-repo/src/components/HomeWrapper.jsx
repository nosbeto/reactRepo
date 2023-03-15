import LinkedInBadge from './LinkedInBadge';
import ProfileSummary from "./ProfileSummary";
import DeveloperExp from "./DeveloperExperience";
import {useState} from 'react'
import Container from "react-bootstrap/Container";

const HomeWrapper = () => {
  return (
    <Container>
      <ProfileSummary />
      <DeveloperExp />
    </Container>
  );
}

export default HomeWrapper