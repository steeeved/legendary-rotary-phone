import {Howl} from 'howler';

import boom from './boom.wav';
import clap from './clap.wav'
import hihat from './hihat.wav'
import kick from './kick.wav'
import openhat from './openhat.wav'
import ride from './ride.wav'
import snare from './snare.wav'
import tink from './tink.wav'
import tom from './tom.wav'

export const audio = {
    boom: boom,
    clap: clap,
    hihat: hihat,
    kick: kick,
    openhat: openhat,
    ride: ride,
    snare: snare,
    tink: tink,
    tom: tom
}

//play sound using Howler
export const playSound = (sound: any) => {
    const soundPlay = new Howl({
        src: [sound]
    })
    soundPlay.play()
}

//call playSound function when key is pressed
export const useKeyPress = (targetKey: string, sound: string) => {
    const keyPress = (e: any) => {
        if (e.key === targetKey) {
            playSound(sound)
        }
    }
    window.addEventListener('keydown', keyPress)
    return keyPress
}
