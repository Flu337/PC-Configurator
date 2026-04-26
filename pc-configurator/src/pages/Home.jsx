const Home = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000" }}>
      <section
        style={{ padding: "100px 50px", borderBottom: "1px solid #eee" }}
      >
        <h1
          style={{
            fontSize: "80px",
            fontWeight: "900",
            margin: "0 0 40px 0",
            textTransform: "uppercase",
            lineHeight: "0.9",
          }}
        >
          Инженерная
          <br />
          точность
        </h1>
        <p
          style={{
            maxWidth: "600px",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          Мы создаем системы, в которых нет ничего лишнего. Каждый компонент
          проходит селективный отбор.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div
          style={{
            padding: "60px 40px",
            borderRight: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "800" }}>MOBILISE</h2>
          <p style={{ fontSize: "11px", color: "#888", marginTop: "10px" }}>
            ВАШ РАБОЧИЙ ПРОЦЕСС / БЫСТРАЯ ДОСТАВКА
          </p>
        </div>
        <div
          style={{
            padding: "60px 40px",
            borderRight: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "800" }}>REPORT</h2>
          <p style={{ fontSize: "11px", color: "#888", marginTop: "10px" }}>
            БЫСТРО И ТОЧНО / БЕНЧМАРКИ И ТЕСТЫ
          </p>
        </div>
        <div style={{ padding: "60px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800" }}>CONSOLIDATE</h2>
          <p style={{ fontSize: "11px", color: "#888", marginTop: "10px" }}>
            ВАШИ СИСТЕМЫ / СТАБИЛЬНОСТЬ И ГАРАНТИЯ
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
