import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Paper } from "@material-ui/core";

const CustomChart = (props) => {
  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          {/* <p className="label">{`${
            payload[0].dataKey[0].toUpperCase() + payload[0].dataKey.slice(1)
          } : ${payload[0].value}`}</p> */}
          <p className="label">{` Peso : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <Paper style={{ width: "80vw", marginTop: "20px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={props.data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#eee" /* stroke="rgba(81, 81, 81, 1)" */ />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin-1", "dataMax+1"]} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};
export default CustomChart;
