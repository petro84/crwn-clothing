import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySelections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...dirProps }) => (
      <MenuItem key={id} {...dirProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections,
});

export default connect(mapStateToProps)(Directory);
