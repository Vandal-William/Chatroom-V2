// == Composant
import Message from 'src/components/Message';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import messageAudio from 'src/assets/audio/messageAudio.mp3';
import useAudio from 'src/hooks/useAudio';
import './style.scss';

function Messages() {
  const messages = useSelector((state) => state.messages);
  const messagesElement = useRef(null);
  // 3........................................................................
  useEffect(() => {
    messagesElement.current.scrollTo(0, messagesElement.current.scrollHeight);
  }, [messages]);
  // ..........................................................................
  useAudio(messageAudio, [messages]);

  return ( // ......................4. Mettre la ref
    <section className="messages" ref={messagesElement}>
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
        />
      ))}
    </section>
  );
}
// == Export
export default Messages;
