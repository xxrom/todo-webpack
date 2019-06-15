import * as React from 'react';
import { styled } from 'linaria/react';

interface Props {
  readonly text: string;
}

class Suggestion extends React.Component<Props> {
  public render() {
    const { text = 'Данное поле необходимо для оформления анкеты клиента.' } = this.props;

    return (
      <SuggestionWrapper>
        <Activator>
          <ActivatorItem>?</ActivatorItem>
        </Activator>

        <Popup>
          <PopupText>{text}</PopupText>
        </Popup>
      </SuggestionWrapper>
    );
  }
}

export { Suggestion };

// Styles
const size = '1.125rem';
const backgroundColor = 'white'; // '#ecf0f2'
const backgroundActivatorColor = '#CCCCCC';
const activatorColor = '#232835';
const fontColor = 'black';
const borderColor = 'gray';

const SuggestionWrapper = styled.div`
  position: relative;
  max-height: ${size};
  width: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  /* border: 2px solid green; */
  margin-left: 0.5rem;
  color: ${fontColor};
  font-weight: normal;
`;

const Activator = styled.div`
  position: relative;
  top: 0;
  height: ${size};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
`;

const ActivatorItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${size};
  min-width: ${size};
  border-radius: 50%;
  background: ${backgroundActivatorColor};
  color: ${activatorColor};
  font-weight: normal;
  font-size: 0.688rem;
`;

const Popup = styled.div`
  position: absolute;
  max-height: 0;
  min-width: 35rem;
  overflow: hidden;
  opacity: 0;
  display: flex;
  bottom: ${size};
  left: calc(50% - 3rem);
  padding: 0;
  transition: all 0.3s ease;
  text-align: center;

  &:hover,
  ${/* sc-selector */ Activator as any}:hover + & {
    overflow: visible;
    height: auto;
    max-height: 2000px;
    padding-bottom: 1rem;
    opacity: 1;
    transition: all 0.3s ease;
  }
`;

const PopupText = styled.div`
  padding: 1rem;
  margin: 0 0.25rem;
  border-radius: 1rem;
  background: ${backgroundColor};
  box-shadow: 0.1rem 0.25rem 0.25rem 0.1rem rgba(0, 0, 0, 0.4);
  border-top: 1px solid ${borderColor};
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  font-weight: normal;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    margin-left: 0;
    bottom: -0.8rem;
    left: 2rem;
    box-sizing: border-box;
    border: 0.7rem solid black;
    border-color: transparent transparent ${backgroundColor} ${backgroundColor};
    transform-origin: 0 0;
    transform: rotate(-45deg);
    box-shadow: -0.25rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
  }

  ${/* sc-selector */ Popup as any}:hover &:after,
  ${/* sc-selector */ Activator as any}:hover + ${/* sc-selector */ Popup as any} &:after {
    bottom: -0.2rem;
  }
`;
