import LinkedInBadge from './LinkedInBadge';
import ProfileSummary from "./ProfileSummary";
import DeveloperExp from "./DeveloperExperience";
import {useState} from 'react'

const HomeWrapper = ({isActive}) => {
  return (
    // <div className={isActive ? 'd-none' : ''}>
    <div className={isActive}>
      <LinkedInBadge />
      <ProfileSummary />
      <DeveloperExp />
    </div>
  );
}

export default HomeWrapper