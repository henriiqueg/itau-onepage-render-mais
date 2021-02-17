/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState } from 'react';

import Page from 'components/Page';
import Button from 'components/Patterns/Button';
import ModalDescription from 'components/Patterns/Modals/ModalDescription';

import tikTok from 'assets/videos/tik-tok-1.mp4';

const Q5 = ({ nextPage = () => {} }) => {
  const [modalAudio, setModalAudio] = useState(true);
  const [modalWatchVideo, setModalWatchVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleNext = () => {
    if (!videoEnded) {
      return setModalWatchVideo(true);
    }

    return nextPage();
  };

  return (
    <Page>
      {modalAudio && (
        <ModalDescription onClick={() => setModalAudio(false)}>
          Esse vídeo possui áudio! É importante que você esteja de fones de
          ouvido ou com a caixa de som do computador ligada!
        </ModalDescription>
      )}
      {modalWatchVideo && (
        <ModalDescription onClick={() => setModalWatchVideo(false)}>
          Você deve assistir o vídeo até o final para prosseguir
        </ModalDescription>
      )}
      <div className="max-w-sm px-3">
        <video
          className="w-full"
          src={tikTok}
          controls
          onEnded={() => setVideoEnded(true)}
        />
      </div>
      <Button onClick={handleNext} type="button">
        CONTINUAR
      </Button>
    </Page>
  );
};

export default Q5;
