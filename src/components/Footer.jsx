function Footer() {
  const styles = {
    footer: {
      background: "#080d18",
      borderTop: "1px solid #25334a",
      padding: "30px 0",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    brand: {
      color: "#f1f5f9",
      fontSize: "1.2rem",
      margin: "0 0 6px 0",
    },

    accent: {
      color: "#22d3ee",
    },

    credit: {
      color: "#64748b",
      fontSize: "0.85rem",
      margin: 0,
    },

    copyright: {
      color: "#64748b",
      fontSize: "0.85rem",
      margin: 0,
    },
  }

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h3 style={styles.brand}>
            Ritesh<span style={styles.accent}>.dev</span>
          </h3>

          <p style={styles.credit}>
            Designed & Developed by Ritesh Chormale
          </p>
        </div>

        <p style={styles.copyright}>
          © 2026 Ritesh Chormale. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer