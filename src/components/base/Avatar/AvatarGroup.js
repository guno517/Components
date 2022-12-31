import React from 'react';

const AvatarGroup = ({
  children,
  shape = 'circle',
  size = 70,
  ...props
}) => {
  const avatars = React.Children.toArray(children)
    .filter((element) => {
      if (
        React.isValidElement(element) &&
        element.props.__TYPE === 'Avatar' // Avatar 컴포넌트만 들어오고 다른 컴포넌트는 무시하게 하는 코드
      ) {
        return true;
      }
      return false;
    })
    .map((avatar, index, avatars) => {
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
          zIndex: avatars.length - index,
        },
      });
    });

  return <div style={{ paddingLeft: size / 5 }}>{avatars}</div>;
};

export default AvatarGroup;
