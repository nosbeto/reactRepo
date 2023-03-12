import LinkedInBadge from './LinkedInBadge';
import ProfileSummary from "./ProfileSummary";
import DeveloperExp from "./DeveloperExperience";
import {useState} from 'react'

const HomeWrapper = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current=>!current)
    }
  return (
    <div className={isActive ? 'd-none' : ''}>
      <LinkedInBadge />
      <ProfileSummary />
      <DeveloperExp />
    </div>
  );
}

export default HomeWrapper