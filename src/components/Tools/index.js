import Picker from 'emoji-picker-react';
import { Smile, X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

function Tools() {
  const open = useSelector((state) => state.emojiOpen);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_EMOJI_OP',
    });
  };
  const handleEmoji = (event, emojiObject) => {
    dispatch({
      type: 'PICK_EMOJI',
      emoji: emojiObject.emoji,
    });
  };
  return (
    <section className="tools">
      <button
        onClick={handleClick}
        title="Insérer un emoji"
        type="button"
        className="tools-btn"
      >
        {!open && <Smile />}
        {open && <X />}
      </button>
      {open && <Picker onEmojiClick={handleEmoji} />}
    </section>
  );
}

export default Tools;
