import { useState, useEffect, useContext, useRef, SyntheticEvent } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { Theme } from 'emoji-picker-react';
import { ThemeContext } from '../../context/themeContext';
import style from './style.module.scss';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  //   const { theme } = useContext(ThemeContext);
  const endRef = useRef<HTMLDivElement | null>(null);

  const handleEmoji = (e: any) => {
    setText((prev) => prev + e.emoji);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className={style.chat}>
      <div className="top">Chat</div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setOpen(!open)}>Open</button>
      <div className="emoji">
        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
      </div>
      <div className="messages">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore sapiente
              sequi? Neque asperiores debitis in quidem doloremque aspernatur expedita laboriosam
              iure placeat pariatur minus, delectus impedit cumque inventore quos.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={style.message}>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus itaque quas
              autem alias quasi odit nulla id. Quae id dolore similique quaerat repudiandae eligendi
              cupiditate dolores distinctio saepe tempora!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={style.message}>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus itaque quas
              autem alias quasi odit nulla id. Quae id dolore similique quaerat repudiandae eligendi
              cupiditate dolores distinctio saepe tempora!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={style.message}>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus itaque quas
              autem alias quasi odit nulla id. Quae id dolore similique quaerat repudiandae eligendi
              cupiditate dolores distinctio saepe tempora!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messages end" ref={endRef}></div>
      </div>
    </div>
  );
};

export default Chat;
