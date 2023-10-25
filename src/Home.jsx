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
        chatflowid="233012fc-31f3-4452-b3a0-7e83ec692e6e"
        apiHost="https://itau-2-tf.onrender.com"
        bubbleColor="#0078d4" // Cambiar el color de los bocadillos de chat
        avatarSize={50} />
    </section>
  </>
);

export default Home;

