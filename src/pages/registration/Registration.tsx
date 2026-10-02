import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistrationClosed } from "../../hooks/registrationContext";
import LandingArtwork from "../city/LandingArtwork";

export default function Registration() {
  const openRegistration = useRegistrationClosed();
  const navigate = useNavigate();
  useEffect(() => { openRegistration(() => navigate("/", { replace: true })); }, [openRegistration, navigate]);
  return <LandingArtwork />;
}
