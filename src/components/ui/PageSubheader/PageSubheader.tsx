import React from 'react';
import { styled } from 'linaria/react';
import { css } from 'linaria';
import { Button } from '@material-ui/core';

interface OwnProps {
  readonly caption?: string;
  readonly number?: string;
  readonly date?: string;
  readonly rightItem?: string;
  readonly leftBottomText?: string | React.ReactNode;
  readonly leftButtonText?: string;
  readonly rightButtonText?: string;
  leftButtonHandle?(): void;
  rightButtonHandle?(): void;
}

// @ts-ignore
const PageSubheader: React.FC<OwnProps> = (props) => {
  return (
    <HeaderWrapper>
      <TopBlock>
        <Caption>{props.caption}</Caption>
        <RightBlock>{props.rightItem}</RightBlock>
      </TopBlock>
      <BottomBlock>
        <Info>#{props.number}</Info>
        <Info>{props.date}</Info>
        <LeftBottomText>{props.leftBottomText}</LeftBottomText>
        {props.leftButtonText && (
          <Button variant="outlined" color="primary" onClick={props.leftButtonHandle}>
            {props.leftButtonText}
          </Button>
        )}
        {props.rightButtonText && (
          <Button
            className={rightButton}
            variant="outlined"
            color="primary"
            onClick={props.rightButtonHandle}
          >
            {props.rightButtonText}
          </Button>
        )}
      </BottomBlock>
    </HeaderWrapper>
  );
};

export { PageSubheader };

const HeaderWrapper = styled.div`
  min-height: 8.25rem;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;
const TopBlock = styled.div`
  height: 4.188rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding: 0 1.188rem 0 1.938rem;
`;
const Info = styled.div`
  color: rgba(0, 0, 0, 0.5);
  padding: 0 0.75rem 0 0;
`;
const Caption = styled.div`
  font-size: 1.25rem;
`;
const RightBlock = styled.div`
  margin-left: auto;
  font-size: 0.875rem;
  font-weight: 500;
`;
const BottomBlock = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 1.188rem 0 1.938rem;
`;
const LeftBottomText = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #808080;
  height: 2rem;
  border-left: 1px solid #c4c4c4;
  padding: 0 0 0 1.375rem;
  margin: 0 auto 0 0;
`;
const rightButton = css`
  && {
    margin-left: 1.25rem;
  }
`;
