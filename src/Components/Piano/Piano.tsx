import Styles from './Piano.module.scss';
import {audio} from '../Audio/index';

export const Piano = () => {
  return (
    <div className={Styles.Piano}>
      <div className={Styles.Top}>
        <div className={Styles.Btn}>
          <kbd>A</kbd>
          <span className={Styles.Sound}>clap</span>
        </div>
        <div className={Styles.Btn}>
          <kbd>S</kbd>
          <span className={Styles.Sound}>hihat</span>
        </div>
      </div>
      <div className={Styles.Middle}>
        <div className={Styles.Btn}>
          <kbd>D</kbd>
          <span className={Styles.Sound}>kick</span>
        </div>
        <div className={Styles.Btn}>
          <kbd>F</kbd>
          <span className={Styles.Sound}>openhat</span>
        </div>
        <div className={Styles.Btn}>
          <kbd>G</kbd>
          <span className={Styles.Sound}>boom</span>
        </div>
      </div>
      <div className={Styles.Bottom}>
        <div className={Styles.Btn}>
          <kbd>H</kbd>
          <span className={Styles.Sound}>ride</span>
        </div>
        <div className={Styles.Btn}>
          <kbd>J</kbd>
          <span className={Styles.Sound}>snare</span>
        </div>
        <div className={Styles.Btn}>
          <kbd>K</kbd>
          <span className={Styles.Sound}>tom</span>
        </div>
        <div className={Styles.Btn}>
          <kbd>L</kbd>
          <span className={Styles.Sound}>tink</span>
        </div>
      </div>

      <audio data-key="65" src={audio.clap}></audio>
      <audio data-key="83" src={audio.hihat}></audio>
      <audio data-key="68" src={audio.kick}></audio>
      <audio data-key="70" src={audio.openhat}></audio>
      <audio data-key="71" src={audio.boom}></audio>
      <audio data-key="72" src={audio.ride}></audio>
      <audio data-key="74" src={audio.snare}></audio>
      <audio data-key="75" src={audio.tom}></audio>
      <audio data-key="76" src={audio.tink}></audio>
    </div>
  );
};

export default Piano;
