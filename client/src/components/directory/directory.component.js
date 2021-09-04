import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySelections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryContainer } from './directory.styles';

const Directory = () => {
  const sections = useSelector(selectDirectorySelections);
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...dirProps }) => (
        <MenuItem key={id} {...dirProps} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
