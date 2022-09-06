/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import { X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'src/components/Input';
import Alert from 'src/components/Alert';
import Whoosh from 'src/assets/audio/Whoosh.mp3';
import useAudio from 'src/hooks/useAudio';
import { toggleSettingsOpen } from '../../actions';
import './style.scss';

function Settings() {
  const open = useSelector((state) => state.settingsOpen);
  const inError = useSelector((state) => state.inError);
  const errorMessage = useSelector((state) => state.errorMessage);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  const handleClick = () => {
    const action = toggleSettingsOpen();
    dispatch(action);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGIN',
    });
  };
  const handleDeco = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  useAudio(Whoosh, [open]);
  return (
    <section className={classNames('settings', { 'settings--closed': !open })}>
      <button
        title={open ? 'Fermer' : 'Ouvrir'}
        className="settings-toggler"
        type="button"
        onClick={handleClick}
      >
        <X />
      </button>
      {logged && (
        <div className="settings-form">
          <p className="settings-input messageco">Connecté</p>
          <button className="settings-action" type="submit" onClick={handleDeco}>Se déconnecter</button>
        </div>
      )}
      {!logged && (
        <form className="settings-form" onSubmit={handleSubmit}>
          {inError && <Alert text={errorMessage} />}
          <Input
            name="email"
            className="settings-input"
            placeholder="Email"
            aria-label="Email"
            type="email"
          />
          <Input
            name="password"
            className="settings-input"
            placeholder="Mot de passe"
            aria-label="Mot de passe"
            type="password"
          />
          <button className="settings-action" type="submit">Se connecter</button>
        </form>
      )};
    </section>
  );
}
export default Settings;
