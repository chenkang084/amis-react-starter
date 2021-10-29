import React from 'react';
import TableTemplate from './TableTemplate';
import FormTemplate from './FormTemplate';
import 'amis/lib/themes/default.css';
// 或 import 'amis/lib/themes/cxd.css';
// 或 import 'amis/lib/themes/dark.css';

import 'font-awesome/css/font-awesome.css';
class APP extends React.Component<any, any> {
  render() {
    return (
      <>
        <TableTemplate />
        <FormTemplate />
      </>
    );
  }
}

export default APP;
