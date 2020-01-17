import * as React from 'react';
import {
  Button, Row, Col, List
} from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const uploadConfig = {
  maxFileSize: 10 * 1024 * 1024 * 1024, // 文件最大值
  acceptFileTypes: ['zip', 'rvt', 'dwg'], // 接收的文件类型
  BYTES_PER_CHUNK: 3 * 1024 * 1024 // 切片大小3M
};

class UploadFile extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      fileBlob: null, // 选择的文件
      size: null,
      fileName: null, // 文件名称
      md5: null, // 文件MD5
      fileCountTotal: null, // 切块总数量
      taskId: null // 创建上传任务获取到的任务id
    };
  }

  // https://juejin.im/post/5dff8a26e51d4558105420ed?utm_source=gold_browser_extension
  handleFileChange = e => {
    e.stopPropagation();
    const [file] = e.target.files;
    if (!file) return;

    const { name, size } = file;

    this.setState(() => ({
      fileBlob: file,
      fileName: name,
      size
    }));

    console.log(file);
  }

  // createQueueArr = () => {
  //   let start = 0;
  //   let end = uploadConfig.BYTES_PER_CHUNK;
  //   let fileSize = uploadModelArgs.fileBlob.size;
  //   let fileIndex = 0;
  //   let queueArr = []; // 上传任务队列

  //   while (start < fileSize) {
  //     var fd = new FormData();
  //     var chunk = _this.uploadModelArgs.fileBlob.slice(start, end); // 切割chunk
  //     console.log(chunk);
  //     fd.append('taskid', taskId);
  //     fd.append('fileIndex', fileIndex);
  //     fd.append('fileItemSplit', chunk);
  //     queueArr.push(_this.fileUpload.bind(_this, fd, fileIndex, _this.uploadModelArgs.fileCountTotal));
  //     fileIndex++;
  //     start = end;
  //     end = start + _this.uploadConfig.BYTES_PER_CHUNK;
  //   };
  //   return queueArr;
  // }

  render() {
    // const { getFieldDecorator } = this.props.form;

    return (
      <div style={{
        width: '600px', margin: '30px auto 0', padding: '10px'
      }}
      >
        <List
          header={(
            <div>
              <Row align="center">
                <Col span={12}>
                  <input type="file" onChange={e => this.handleFileChange(e)} />
                </Col>
                <Col span={4}>
                  <Button type="primary">确定上传</Button>
                </Col>
              </Row>
            </div>
          )}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default UploadFile;
