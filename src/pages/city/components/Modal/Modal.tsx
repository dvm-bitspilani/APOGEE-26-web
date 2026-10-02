import {
	useCurrentSectionStore,
	useModalStore,
} from "../../../../utils/store";
// import ComingSoon from "../../../comingSoon/ComingSoon";
const ContactUs = lazy(() => import("../../../contactUs/ContactUs"));
const AboutUs = lazy(() => import("../../../aboutUs/AboutUs"));
import ModalUI from "./ModalUI";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import NavButton from "../../../registration/components/navButton/NavButton";
import DirectionalUnlock from "./DirectionlUnlock";

export default function Modal() {
	const isModalOpen = useModalStore((s) => s.isModalOpen);
	const currentsection = useCurrentSectionStore((s) => s.currentSection);
	const [isModalActive, setIsModalActive] = useState(true);
	const modalUIRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	
	useEffect(() => {
		setIsModalActive(true); //? So that next time user lands on a modal section, it activates the modal (uhh, I messed up the naming ik)
	}, [currentsection])

	return (
		<>
			<ModalUI
				isModalActive={isModalActive && isModalOpen}
				ref={modalUIRef}>
				{
					currentsection === "about" && isModalOpen && isModalActive ? (
						<Suspense fallback={null}><AboutUs containerRef={containerRef} /></Suspense>
					) : currentsection === "contact" && isModalOpen && isModalActive ? (
						<Suspense fallback={null}><ContactUs containerRef={containerRef} /></Suspense>
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
			<DirectionalUnlock containerRef={containerRef} modalUIRef={modalUIRef} />
		</>
	);
}
