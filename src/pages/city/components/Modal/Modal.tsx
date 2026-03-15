import {
	useCurrentSectionStore,
	useModalStore,
} from "../../../../utils/store";
// import ComingSoon from "../../../comingSoon/ComingSoon";
import ContactUs from "../../../contactUs/ContactUs";
import AboutUs from "../../../aboutUs/AboutUs";
import ModalUI from "./ModalUI";
import { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import NavButton from "../../../registration/components/navButton/NavButton";

export default function Modal() {
	const isModalOpen = useModalStore((s) => s.isModalOpen);
	const currentsection = useCurrentSectionStore((s) => s.currentSection);
	const [isModalActive, setIsModalActive] = useState(true);

	useEffect(() => {
		setIsModalActive(true); //? So that next time user lands on a modal section, it activates the modal (uhh, I messed up the naming ik)
		console.log("Current section changed to", currentsection, "isModalOpen:", isModalOpen);
	}, [currentsection])

	return (
		<>
			<ModalUI isModalActive={isModalActive && isModalOpen} setModalActive={setIsModalActive}>
				{
					currentsection === "about" ? (
						<AboutUs />
					) : currentsection === "contact" ? (
						<ContactUs />
					) : null
				}
			</ModalUI>
			<NavButton 
				outerClass={(!isModalOpen || isModalActive) ? styles.buttonClosed : styles.openModalButtonOuter} 
				innerClass={styles.openModalButtonInner} 
				onClick={() => setIsModalActive(true)}>
				{
					currentsection === "about" ? ("Open About")
						: currentsection === "contact" ? ("Open Contact")
							: "Open Modal"
				}
			</NavButton>
		</>
	);
}
