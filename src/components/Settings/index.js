/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import { X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'src/components/Input';
import { toggleSettingsOpen } from '../../actions';
import './style.scss';

function Settings() {
  const open = useSelector((state) => state.settingsOpen);
  const dispatch = useDispatch();
  const handleClick = () => {
    const action = toggleSettingsOpen();
    dispatch(action);
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
      <form className="settings-form">
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
        <button className="settings-action" type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Settings;
