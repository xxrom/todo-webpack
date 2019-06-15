import React from 'react';
import { styled } from 'linaria/react';

const H1: React.FC<{}> = (props) => <H1Text>{props.children}</H1Text>;

const H2: React.FC<{}> = (props) => <H2Text>{props.children}</H2Text>;

const H3: React.FC<{}> = (props) => <H3Text>{props.children}</H3Text>;

const H4: React.FC<{}> = (props) => <H4Text>{props.children}</H4Text>;

const H5: React.FC<{}> = (props) => <H5Text>{props.children}</H5Text>;

const Subtitle: React.FC<{}> = (props) => <SubtitleText>{props.children}</SubtitleText>;

const Subheader1: React.FC<{}> = (props) => <Subheader1Text>{props.children}</Subheader1Text>;

const Subheader2: React.FC<{}> = (props) => <Subheader2Text>{props.children}</Subheader2Text>;

const Body: React.FC<{}> = (props) => <BodyText>{props.children}</BodyText>;

const SmallBodyText: React.FC<{}> = (props) => <SmallBody>{props.children}</SmallBody>;

const ButtonText: React.FC<{}> = (props) => <Button>{props.children}</Button>;

const SmallButtonText: React.FC<{}> = (props) => <SmallButton>{props.children}</SmallButton>;

const Caption: React.FC<{}> = (props) => <CaptionText>{props.children}</CaptionText>;

const Label: React.FC<{}> = (props) => <LabelText>{props.children}</LabelText>;

const Tag: React.FC<{}> = (props) => <TagText>{props.children}</TagText>;

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  Subtitle,
  Subheader1,
  Subheader2,
  Body,
  SmallBodyText,
  ButtonText,
  SmallButtonText,
  Caption,
  Label,
  Tag,
};

const H1Text = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 500;
  margin: 0;
`;
const H2Text = styled.h2`
  font-size: 1.75rem;
  line-height: 2.25rem;
  font-weight: 500;
  margin: 0;
`;
const H3Text = styled.h3`
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 500;
  margin: 0;
`;
const H4Text = styled.h4`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  margin: 0;
`;
const H5Text = styled.h5`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
`;
const SubtitleText = styled.div`
  font-size: 1.625rem;
  line-height: 2.25rem;
`;
const Subheader1Text = styled.div`
  font-size: 1.375rem;
  line-height: 1.75rem;
`;
const Subheader2Text = styled.div`
  font-size: 1.125rem;
  line-height: 1.5rem;
`;
const BodyText = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;
const SmallBody = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
const Button = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;
const SmallButton = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
const CaptionText = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
const LabelText = styled.label`
  font-size: 0.875rem;
  line-height: 1rem;
`;
const TagText = styled.div`
  font-size: 0.8125rem;
  line-height: 1rem;
`;
