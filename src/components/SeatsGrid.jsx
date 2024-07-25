import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookSeat } from "./../redux/rowSeatSlice";

const SeatsGrid = () => {
  const seats = useSelector((state) => state.booking?.seats || []);
  const dispatch = useDispatch();

  const handleSeatClick = (soGhe) => {
    dispatch(bookSeat({ soGhe }));
  };

  const renderSeats = () => {
    const rows = "ABCDEFGHIJ";
    let rowsArray = rows.split("");
    const columns = Array.from({ length: 12 }, (_, index) => index + 1);

    return rowsArray.map((row, rowIndex) => (
      <div key={rowIndex} className="seat-row">
        <span className="row-label">{row}</span>
        {columns.map((column, colIndex) => {
          const seat = seats.find((seat) => seat.soGhe === `${row}${column}`);
          return (
            <div
              key={colIndex}
              className="seatClass"
              onClick={() => handleSeatClick(`${row}${column}`)}
            >
              {column}
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="seats-grid">
      <div className="column-labels">
        <div className="empty-cell"></div>
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="column-label">
            {index + 1}
          </div>
        ))}
      </div>
      {renderSeats()}
    </div>
  );
};

export default SeatsGrid;
