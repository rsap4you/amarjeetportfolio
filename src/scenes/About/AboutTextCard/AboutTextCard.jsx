import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Amarjeet Kumar </span>
        from <span className={s.purple}>Nalanda,Bihar(India)</span> Software engineer with expertise in cross-platform development
        using Nodejs and Reactjs
        <br />
        <br />
        I have a Bachelor's degree in Computer Science from  Nalanda College,Biharsharif Affilated with Magadh University(Bodh,Gaya).
        <br />
        Master's degree in Computer Science from Government Mca College,maninagar (Ahmedabad) affilated with Gujarat Technological University.
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
      <li className={s.aboutActivity}>
          <ImPointRight /> Coding
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Listening Song
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
