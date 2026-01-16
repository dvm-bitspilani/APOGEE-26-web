import styles from "./Registration.module.scss";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useState } from "react";

function Registration() {
    const [_cookies, setCookies] = useCookies([
        "Authorization",
        "user-auth",
        "Access_token",
    ]);
    
    function redirectWithPost(url: string, data: { [key: string]: string }) {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
      }
    }

    document.body.appendChild(form);
    form.submit();
  }

    const [userEmail, setUserEmail] = useState("");
    const googleLogin = useGoogleLogin({
        onSuccess: (response) => {
            axios
                .post("https://merge.bits-apogee.org/2025/main/registrations/google-reg/", {
                    access_token: response.access_token,
                })
                .then((res) => {
                    setCookies("Access_token", response.access_token);
                    if (res.data.exists) {
                        setCookies("user-auth", res.data);
                        setCookies("Authorization", res.data.tokens.access);
                        // window.location.href = `https://bits-oasis.org/2025/main/registrations?token=${res.data.tokens.access}`;
                        redirectWithPost(
                            "https://merge.bits-apogee.org/2025/main/registrations/google-reg/",
                            {
                                token: res.data.tokens.access,
                            }
                        );
                        setUserEmail(res.data.email);
                    } else {
                        setCookies("user-auth", res.data);
                        setUserEmail(res.data.email);
                        // if (res.data.email) toRegPage(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        // onFailure: () => {
        //   console.error("Login failed");
        // },
    });
    return (
        <h1 className={styles.heading}>
            
        </h1>
    )
}

export default Registration;
