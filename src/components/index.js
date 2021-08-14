import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import { Popover, Input } from 'antd';

const CLASS_NAME = 'react-ant-baidu-pan-input';

export default class ReactAntBaiduPanInput extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    const { value, defaultValue } = this.props;
    this.state = {
      value: this.getValue(value || defaultValue)
    };
  }

  getValue(inValue) {
    if (!inValue) return {};
    const values = inValue.match(/链接:(.*?)\s+提取码:(.*)?/);
    return { url: values[1].trim(), key: values[2].trim() };
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
    const target = { value: this.getValue(value) };
    this.setState(target, () => {
      onChange({ target });
    });
  };

  render() {
    const { className, onChange, ...props } = this.props;

    return (
      <Popover content={this.tableView}>
        <Input
          data-component={CLASS_NAME}
          className={classNames(CLASS_NAME, className)}
          onChange={this.handleChange}
          {...props}
        />
      </Popover>
    );
  }
}
