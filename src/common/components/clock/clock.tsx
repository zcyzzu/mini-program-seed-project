/*
 * @Author: derek.chia
 * @Date: 2022-05-07 18:39:10
 * @LastEditTime: 2022-05-07 18:43:24
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/common/components/clock.tsx
 */
import React from 'react';
import { View } from '@tarojs/components';

export interface ClockProps {}

export interface ClockState {
  date: Date;
}

export default class Clock extends React.Component<ClockProps, ClockState> {
  private timerID: number;

  constructor(props: ClockProps) {
    super(props);
    this.timerID = 0;
    this.state = { date: new Date() };
  }

  componentDidMount(): void {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  private tick(): void {
    this.setState({
      date: new Date(),
    });
  }

  render(): JSX.Element {
    const { date } = this.state;
    return <View>It is {date.toLocaleTimeString()} now.</View>;
  }
}
