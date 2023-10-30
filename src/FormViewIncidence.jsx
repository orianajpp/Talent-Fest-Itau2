import { BubbleChat } from "flowise-embed-react";
import FormBotIncidence from './components/formIncidence';
import FormCSS from './components/form.module.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Instructive from "./components/Instructive";

function FormIncidence() {
    return (
        <>        
        <Header isHomeView={true}/>
        <div className={FormCSS.backView}>
            <div className={FormCSS.leftColumn}>
                <h3 className={FormCSS.tittle}>Completa el siguiente formulario para mandar tu solicitud</h3>
                <FormBotIncidence />
            </div>
            <div className={FormCSS.rightColumn}>
                <Instructive />
        </div>
    </div>
        <section>
        <BubbleChat
                chatflowid="f3e89a7f-e41d-43d4-9d76-0a0cdd4daa33"
                apiHost="https://itau-2-tf.onrender.com"
                theme={{
                    button: {
                        backgroundColor: "#003399",
                        right: 20,
                        bottom: 20,
                        size: "medium",
                        iconColor: "#ffffff",
                        customIconSrc: "../src/assets/boticon.png",
                        },
                    chatWindow: {
                        welcomeMessage: "¡Hola! Estoy para asistirte a completar tu indidencia. ¿Me podrías indicar cuál es tu gerencia?",
                        backgroundColor: "#ffffff",
                        height: 700,
                        width: 500,
                        fontSize: 24,
                        poweredByTextColor: "#252220",
                    botMessage: {
                        backgroundColor: "#ECECEC",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://w7.pngwing.com/pngs/529/418/png-transparent-computer-icons-internet-bot-eyes-miscellaneous-people-sticker-thumbnail.png",
                    },
                    userMessage: {
                        backgroundColor: "#FEF3E1",
                        textColor: "#252220",
                        showAvatar: true,
                        avatarSrc: "../src/assets/profile.logo.png",
                    },
                    textInput: {
                        placeholder: "Escribe tu pregunta",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#3B81F6",
                    }
                }
                    }} />
            </section><Footer /></>
    );
}

export default FormIncidence;