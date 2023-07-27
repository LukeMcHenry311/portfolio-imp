import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import Button from '../components/Button';
import AboutImg from '../assets/images/about-image-two.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Resume from '../assets/images/_Resume.png';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .button {
    font-size: 1.5rem;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .resume {
    font-size: 1.5rem;
    background-color: var(--deep-dark);
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
  }
  .resume:hover {
    background-color: var(--white);
    color: var(--deep-dark);
    transform: scale(1.3) rotate(5deg);
    transition: 0.4s;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I'm <span>Luke McHenry</span>
            </p>
            <h2 className="about__heading">A Web Developer</h2>
            <div className="about__info">
              <PText>
                I am from Lehi, Utah. A fast growing state in America. I've
                always enjoyed art and design, I feel that incorporating modern
                and unique style idea's to a website can make all the difference
                of an application.
                <br /> <br />I started coding 6 months ago. I believe that
                Coding is an art. I love impressing both peers and
                non-programmers with what i write.
                <br /> <br />
                My vision is to become very proficient in react, in the long
                term I want to get an entry-level job programming. In 5 years I
                see myself starting my own website.
              </PText>
            </div>
            <a className="resume" href={Resume} download>
              Download Resume Here
            </a>
            {/* <a href={Resume} download>
              <img src={Resume} alt="" width="100" height="142" />
            </a> */}
          </div>
          <div className="right">
            <img src={AboutImg} alt="Luke McHenry" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Lehi High High School, Utah.']}
            />
            <AboutInfoItem
              title="College"
              items={['University of Utah coding bootcamp']}
            />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Skills</h1>
            <AboutInfoItem
              title="Frontend"
              items={['HTML', 'CSS', 'Javascript', 'React']}
            />
            <AboutInfoItem
              title="Backend"
              items={['Node', 'Express', 'Queries']}
            />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Other Interests</h1>
            <AboutInfoItem
              title="Movies"
              items={['Lord of the Rings', 'John Wick', 'Blackfish']}
            />
            <AboutInfoItem
              title="Gaming"
              items={['World of Warcraft', 'Diablo 3', 'Starcraft']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
