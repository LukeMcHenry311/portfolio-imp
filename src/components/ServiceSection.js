import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What can i do for you?" />
        <div className="services__allItems">
          <ServicesSectionItems
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I can design (or redesign) a website with a modern and unique look, while not sacrificing any vibrant ideas or colors"
          />
          <ServicesSectionItems
            icon={<MdCode />}
            title="Interface Design"
            desc="I can develop a concise codebase with big ideas and a lightning-fast loading speed"
          />
          <ServicesSectionItems
            icon={<MdPhonelinkSetup />}
            title="App Functionality"
            desc="I can make website's responsive and dynamic to all screen resolution's (computer, laptop, tablet, phone, etc...)"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
