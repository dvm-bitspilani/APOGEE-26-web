// import { useNavigate } from "react-router-dom";
import styles from "./Instructions.module.scss";

const Instructions = () => {
  // const navigate = useNavigate();

  return (
    <div className={styles.content} id="registration-content">
      <h1 className={styles.heading}>INSTRUCTIONS</h1>
      <ul className={styles.instructionList}>
        <li>Complete the registration form with all required details.</li>
        <li>
          You'll be able to login through your registered email id when
          required.
        </li>
        <li>All team members are required to register separately.</li>
        <li>
          A College Representative (CR) will be appointed for each college
          who'll be responsible for allotting heads for all the societies the
          college will be participating for.
        </li>
        <li>All prof shows are free.</li>
        <li>
          For further details contact, Parimal: 8638304074, Ishita: 7804051996
        </li>
        <li>
          For detailed instructions, <a href="#">click here</a>
        </li>
      </ul>

      <button className={styles.googleButton}>
        <img
          src="/svg/registrations/sign-in-google.svg"
          alt="Sign in with Google"
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Instructions;
