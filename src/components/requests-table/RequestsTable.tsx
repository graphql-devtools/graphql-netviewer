import * as React from "react";
import { AutoSizer } from "react-virtualized/dist/es/AutoSizer";
import { Column, Table } from "react-virtualized/dist/es/Table";
import css from "./RequestsTable.module.css";

export interface RequestRow {
  id: string;
  name: string;
  variables: string[];
  size: number;
  time: number;
  timeStart: number;
}

export interface Props {
  rows: RequestRow[];
}

interface State {}

export class RequestsTable extends React.Component<Props, State> {
  rowGetter = ({ index }: { index: number }): RequestRow => {
    return this.props.rows[index];
  };

  render(): React.ReactNode {
    return (
      <div className={css.container}>
        <AutoSizer>
          {({ width, height }) => (
            <Table
              ref="Table"
              disableHeader={false}
              headerClassName={css.headerColumn}
              headerHeight={20}
              height={height}
              rowHeight={20}
              rowGetter={this.rowGetter}
              rowCount={this.props.rows.length}
              width={width}
            >
              <Column
                dataKey="name"
                width={90}
              />
              <Column
                dataKey="variables"
                width={150}
              />
              <Column
                dataKey="size"
                width={150}
              />
              <Column
                dataKey="time"
                width={150}
              />
              <Column
                dataKey="timeStart"
                width={150}
              />
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }
}
