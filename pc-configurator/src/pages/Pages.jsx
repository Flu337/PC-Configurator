const Support = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        ТЕХНИЧЕСКАЯ ПОДДЕРЖКА
      </h1>
      <p style={{ color: "#888", maxWidth: "500px", marginBottom: "40px" }}>
        Есть вопросы по работе системы или нужна консультация по апгрейду? Наши
        мастера на связи 24/7.
      </p>
      <a
        href="https://t.me/твой_ник"
        target="_blank"
        style={{
          padding: "20px 60px",
          border: "1px solid white",
          color: "white",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "bold",
          transition: "0.3s",
        }}
        onMouseOver={(e) => {
          e.target.style.background = "white";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "white";
        }}
      >
        НАПИСАТЬ В TELEGRAM
      </a>
    </div>
  );
};

export default Support;
