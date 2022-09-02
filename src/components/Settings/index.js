/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import { X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'src/components/Input';
import { toggleSettingsOpen } from '../../actions';
import './style.scss';

function Settings() {
  const open = useSelector((state) => state.settingsOpen);
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
        <p className="settings-message">Connecté</p>
      )}
      {!logged && (
        <form className="settings-form" onSubmit={handleSubmit}>
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
      )}
    </section>
  );
}

export default Settings;
