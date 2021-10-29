import React from 'react';
import amisParameterWrap from './AmisGlobalWrap';
import {ToastComponent, AlertComponent} from 'amis';
import {alert, confirm} from 'amis/lib/components/Alert';
import {toast} from 'amis/lib/components/Toast';

class AMISComponent extends React.Component<any, any> {
  render() {
    return amisParameterWrap(
      {
        type: 'page',
        body: {
          type: 'form',
          api: {
            method: 'post',
            url: '/aui/api/form',
            data: {
              userName: '${name}',
              userEmail: '${email}'
            }
          },
          controls: [
            {
              type: 'text',
              name: 'name',
              label: '姓名：'
            },
            {
              name: 'email',
              type: 'email',
              label: '邮箱：'
            }
          ]
        }
      },
      {
        // props...
      }
      //   {
      //     // 下面三个接口必须实现
      //     fetcher: ({
      //       url, // 接口地址
      //       method, // 请求方法 get、post、put、delete
      //       data, // 请求数据
      //       responseType,
      //       config, // 其他配置
      //       headers // 请求头
      //     }: any) => {
      //       config = config || {};
      //       config.withCredentials = true;
      //       responseType && (config.responseType = responseType);

      //       if (config.cancelExecutor) {
      //         config.cancelToken = new (axios as any).CancelToken(
      //           config.cancelExecutor
      //         );
      //       }

      //       config.headers = headers || {};

      //       if (method !== 'post' && method !== 'put' && method !== 'patch') {
      //         if (data) {
      //           config.params = data;
      //         }
      //         return (axios as any)[method](url, config);
      //       } else if (data && data instanceof FormData) {
      //         config.headers = config.headers || {};
      //         config.headers['Content-Type'] = 'multipart/form-data';
      //       } else if (
      //         data &&
      //         typeof data !== 'string' &&
      //         !(data instanceof Blob) &&
      //         !(data instanceof ArrayBuffer)
      //       ) {
      //         data = JSON.stringify(data);
      //         config.headers = config.headers || {};
      //         config.headers['Content-Type'] = 'application/json';
      //       }

      //       return (axios as any)[method](url, data, config);
      //     },
      //     isCancel: (value: any) => (axios as any).isCancel(value),
      //     copy: (content: string) => {
      //       copy(content);
      //       toast.success('内容已复制到粘贴板');
      //     }
      //   }
    );
  }
}

class FormTemplate extends React.Component<any, any> {
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

export default FormTemplate;
