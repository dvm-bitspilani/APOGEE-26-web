import NavButton from "../navButton/NavButton";
import styles from "./Instructions.module.scss";

const Instructions = ({ googleLogin }: { googleLogin: () => void }) => {
  return (
    <div className={styles.content} id="registration-content">
      <h1 className={styles.heading}>INSTRUCTIONS</h1>
      <ul className={styles.instructionList}>
        <li>Sign in with your Google account to securely access the registration page and begin the setup process.</li>
        <li>Provide your college information along with other required details to complete your registration.</li>
        <li>Submit the registration form with all necessary details. You will be able to log in using your registered email ID when required.</li>
        <li>After verification, an approval email will be sent from the Department of Publication and Correspondence.</li>
        <li>Make the required payment as per the given instructions.</li>
        <li>Upon successful payment, a confirmation email will be sent to your registered email ID.</li>
      </ul>

      <NavButton outerClass={styles.googleButton} innerClass={styles.googleButtonContent} onClick={googleLogin}>
        <img
          src="/svg/registrations/sign-in-google.svg"
          alt="Sign in with Google"
        />
        <span>Sign in with Google</span>
      </NavButton>
    </div>
  );
};

export default Instructions;
