import cx from 'classnames';
import React, { Component, HTMLAttributes } from 'react';
import { Popover, Input } from 'antd';
import nxBaiduPanUrlKey from '@jswork/next-baidu-pan-url-key';

const CLASS_NAME = 'react-ant-baidu-pan-input';

export type ReturnValue = { url: string; key: string };

export type ReactAntBaiduPanInputProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * The value of input.
   * @default ''
   */
  value?: string;
  /**
   * The default value of input.
   */
  onChange?: (value: any) => void;
} & HTMLAttributes<HTMLDivElement>;

export type ReactAntBaiduPanInputState = {
  value: any;
};

export default class ReactAntBaiduPanInput extends Component<
  ReactAntBaiduPanInputProps,
  ReactAntBaiduPanInputState
> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  constructor(inProps) {
    super(inProps);
    const { value } = this.props;
    this.state = {
      value: this.getValue(value),
    };
  }

  getValue(inValue?: string): ReturnValue {
    return inValue ? nxBaiduPanUrlKey(inValue) : { url: '', key: '' };
  }

  get tableView() {
    const { value } = this.state;
    return (
      <table className={`${CLASS_NAME}__table`}>
        <thead>
          <tr>
            <th>链接</th>
            <th>密码</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{value.url}</td>
            <td>{value.key}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  handleChange = (inEvent) => {
    const { value } = inEvent.target;
    const { onChange } = this.props;
    const _value = this.getValue(value);
    const target = { value: _value };
    this.setState(target, () => {
      onChange?.(_value);
    });
  };

  render() {
    const { className, onChange, ...rest } = this.props;

    return (
      <Popover content={this.tableView}>
        <Input
          data-component={CLASS_NAME}
          className={cx(CLASS_NAME, className)}
          onChange={this.handleChange}
          {...rest}
        />
      </Popover>
    );
  }
}
