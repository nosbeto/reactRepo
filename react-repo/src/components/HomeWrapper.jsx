import LinkedInBadge from './LinkedInBadge';
import ProfileSummary from "./ProfileSummary";
import DeveloperExp from "./DeveloperExperience";
import {useState} from 'react'

const HomeWrapper = () => {
  return (
    <div>
      <LinkedInBadge />
      <ProfileSummary />
      <DeveloperExp />
    </div>
  );
}

export default HomeWrapper