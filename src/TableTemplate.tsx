import React from 'react';
import {ToastComponent, AlertComponent} from 'amis';
import amisParameterWrap from './AmisGlobalWrap';

class AMISComponent extends React.Component<any, any> {
  render() {
    return amisParameterWrap({
      type: 'page',
      body: {
        type: 'service',
        api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/sample?perPage=5',
        body: [
          {
            type: 'table',
            title: '表格1',

            source: '$rows',
            columns: [
              {
                name: 'engine',
                label: 'Engine'
              },
              {
                name: 'version',
                label: 'Version'
              }
            ]
          },
          {
            type: 'divider',
            lineStyle: 'solid'
          }
        ]
      }
    });
  }
}

class TableTemplate extends React.Component<any, any> {
  render() {
    return (
      <>
        <ToastComponent key="toast" position={'top-right'} />
        <AlertComponent key="alert" />
        <AMISComponent />
      </>
    );
  }
}

export default TableTemplate;
