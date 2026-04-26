import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BUILDS_DATA } from "../data";

const Product = () => {
  const { id } = useParams();
  const build = BUILDS_DATA.find((item) => item.id === id);

  const [currentPrice, setCurrentPrice] = useState(build ? build.price : 0);

  if (!build)
    return (
      <h1 style={{ padding: "50px", textAlign: "center" }}>
        Сборка не найдена
      </h1>
    );

  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "50px",
      }}
    >
      <div
        style={{
          border: "1px solid #eee",
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <img
          src={build.image}
          alt={build.name}
          style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "contain" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            margin: "0 0 10px 0",
            textTransform: "uppercase",
          }}
        >
          {build.name}
        </h1>
        <p style={{ color: "#888", marginBottom: "30px" }}>
          МАСТЕР: PRO_BUILDER_VL
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #eee",
            width: "100%",
            marginBottom: "30px",
          }}
        />

        <h3
          style={{
            fontSize: "14px",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          СПЕЦИФИКАЦИИ
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            lineHeight: "2",
            fontSize: "16px",
          }}
        >
          <li>• Видеокарта: {build.gpu || "NVIDIA RTX 4090"}</li>
          <li>• Процессор: {build.cpu || "AMD Ryzen 9"}</li>
          <li>• Оперативная память: {build.ram || "32 GB DDR5"}</li>
          <li>• SSD: {build.ssd || "2 TB NVMe"}</li>
        </ul>
        {build.benchmarks && (
          <div style={{ marginTop: "40px" }}>
            <h3
              style={{
                fontSize: "14px",
                letterSpacing: "2px",
                marginBottom: "20px",
                color: "#888",
              }}
            >
              РЕЗУЛЬТАТЫ ТЕСТИРОВАНИЯ
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {build.benchmarks.map((test, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {test.label}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "900" }}>
                    {test.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div
          style={{
            marginTop: "40px",
            padding: "30px",
            border: "1px solid #000",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: "900",
              marginBottom: "20px",
            }}
          >
            {currentPrice.toLocaleString()} ₽
          </div>
          <a
            href="https://t.me/HXG55HXG"
            style={{
              display: "block",
              backgroundColor: "#000",
              color: "#fff",
              padding: "15px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            СВЯЗАТЬСЯ С МАСТЕРОМ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
