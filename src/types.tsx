//import React from 'react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface ActionTypes {
  [key: string]: string;
}

export type Caption = {
  src: string;
  default?: boolean;
  label?: string;
  srcLang?: string; // https://r12a.github.io/app-subtags/
};

export type MediaSource = string | string[] | HTMLSourceElement[];

export interface RePlaysProps extends Omit<HTMLAudioElement, 'src'> {
  src: MediaSource;
  captions?: Caption[];
  autoPlay?: HTMLMediaElement['autoplay'];
}

export interface RePlaysState {
  isPlaying: boolean;
  isScrubbing: boolean;
  volumeControlIsActive: boolean;
  volumeLevel: number;
  elapsedTime: number;
  loop: boolean;
}
