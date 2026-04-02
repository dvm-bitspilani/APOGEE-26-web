import styles from "./Brochure.module.scss";
import pdfFile from "/src/assets/apogee 2026 brochure.pdf";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Brochure() {
  return (
    <div className={styles.brochurePageBg}>
      <div className={styles.brochurePage}>
        <div className={styles.header}>
          <div className={styles.title}>Brochure</div>
          <Link to={"/"} className={styles.goBack}>
            <svg
              width="101"
              height="59"
              viewBox="0 0 101 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.000376701 58.1818V1.90735e-05H13.4549V4.45457H5.09129V53.7273H13.4549V58.1818H0.000376701ZM46.1642 48.7273L25.8006 28.3637L46.1642 8.00002L49.6642 11.4546L35.2551 25.8637H72.5733V30.8637H35.2551L49.6642 45.2273L46.1642 48.7273ZM100.021 1.90735e-05V58.1818H86.5667V53.7273H94.9304V4.45457H86.5667V1.90735e-05H100.021Z"
                fill="#FFF100"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.brochureWrapper}>
          <div className={styles.brochureContainer}>
            <iframe
              src={`${pdfFile}#toolbar=0&scrollbar=0`}
              className={styles.brochureIframe}
              title="Oasis 2025 Brochure"
              typeof="application/pdf"
            />
            <a href={pdfFile} download>
              <button
                className={styles.downloadButton}
                title="Download Brochure"
              >
                <FaDownload className={styles.downloadIcon} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
