import React from 'react';
import { styled } from 'linaria/react';
import { Modal } from '@material-ui/core';

import icon from '../../../static/images/icons/white_cross.svg';

interface Props {
  readonly onModalClose: () => void;
  readonly children?: any;
  readonly modalWidth?: string;
}

const ModalComponent = (props: Props) => {
  const onModalClose = React.useCallback(() => {
    props.onModalClose();
  }, []);
  return (
    <Modal open onBackdropClick={onModalClose}>
      <ModalWrapper style={{ width: props.modalWidth || '840px' }}>
        <IconWrapper onClick={onModalClose}>
          <img src={icon} />
        </IconWrapper>
        <BottomWrapper>{props.children}</BottomWrapper>
      </ModalWrapper>
    </Modal>
  );
};

const ModalWrapper = styled.div`
  && {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    height: auto;
    background: #fff;
    border-radius: 2px;
    &:focus {
      outline: none;
    }
  }
`;
const IconWrapper = styled.div`
  && {
    position: absolute;
    width: 3.75rem;
    height: 3.75rem;
    top: 0;
    right: 0;
    cursor: pointer;
    background: #002882;
    transition: opacity 0.1s linear;
    display: flex;
    align-item: center;
    justify-content: center;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const BottomWrapper = styled.div`
  && {
    background: #efefef;
    border-radius: 0 0 2px 2px;
    padding: 32px 48px;
  }
`;

export { ModalComponent };
