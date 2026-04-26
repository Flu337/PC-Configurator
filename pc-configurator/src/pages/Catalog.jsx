import { useState } from "react";
import { Link } from "react-router-dom";
import { BUILDS_DATA } from "../data";

const Catalog = () => {
  const [sortedData, setSortedData] = useState([...BUILDS_DATA]);

  const handleSort = (type) => {
    const sorted = [...sortedData];
    if (type === "cheap") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "expensive") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedData(sorted);
  };

  return (
    <div style={{ padding: "50px", backgroundColor: "#fff" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ color: "#000", margin: 0 }}>КАТАЛОГ</h1>

        {/* Кнопки сортировки */}
        <div style={{ display: "flex", gap: "20px" }}>
          <button onClick={() => handleSort("cheap")} style={btnStyle}>
            СНАЧАЛА ДЕШЕВЫЕ
          </button>
          <button onClick={() => handleSort("expensive")} style={btnStyle}>
            СНАЧАЛА ДОРОГИЕ
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {sortedData.map((pc) => (
          <Link
            to={`/product/${pc.id}`}
            key={pc.id}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #eee",
              padding: "20px",
              transition: "0.2s",
              display: "block",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "#000")}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "#eee")}
          >
            <img
              src={pc.image}
              alt={pc.name}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <h3 style={{ margin: "15px 0 5px 0", fontSize: "18px" }}>
              {pc.name}
            </h3>
            <p style={{ margin: 0, color: "#888", fontWeight: "bold" }}>
              {pc.price.toLocaleString()} ₽
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const btnStyle = {
  background: "none",
  border: "1px solid #000",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "12px",
};

export default Catalog;
