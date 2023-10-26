import { BubbleChat } from "flowise-embed-react";
import FormBot from "./components/form"

const Home = () => (
  <>
    <section className='Home'>
      <h1>HOLA</h1>
      <FormBot />
    </section>
    <section>
    <BubbleChat
        chatflowid="f3e89a7f-e41d-43d4-9d76-0a0cdd4daa33"
        apiHost="https://itau-2-tf.onrender.com"
        theme={{
          button: {
            backgroundColor: "#EC7000",
            right: 20,
            bottom: 20,
            size: "medium",
            iconColor: "#ffffff",
            customIconSrc: "src/assets/boticon.png",
          },
          chatWindow: {
            welcomeMessage: "¡Hola! Estoy para asistirte a completar tu solicitud. ¿Me podrías indicar cuál es tu gerencia?",
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
              avatarSrc: "src/assets/profile.logo.png",
            },
            textInput: {
              placeholder: "Type your question",
              backgroundColor: "#ffffff",
              textColor: "#303235",
              sendButtonColor: "#3B81F6",
            }
          }
        }}
      />
    </section>
  </>
);

export default Home;

