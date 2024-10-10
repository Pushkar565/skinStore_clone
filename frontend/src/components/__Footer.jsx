import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftSection}>
        <div style={styles.logo}>THG</div>
        <div style={styles.copyright}>2024 © The Hut.com Ltd.</div>
      </div>
      <div style={styles.rightSection}>
        <span style={styles.payLabel}>Pay securely with</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          alt="Visa"
          style={styles.paymentIcon}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          alt="Mastercard"
          style={styles.paymentIcon}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/30/Amex_logo.svg"
          alt="AMEX"
          style={styles.paymentIcon}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/16/Diners_Club_Logo.png"
          alt="Diners Club"
          style={styles.paymentIcon}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Discover_Card_logo.svg"
          alt="Discover"
          style={styles.paymentIcon}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/57/PayPal_2014_logo.png"
          alt="Paypal"
          style={styles.paymentIcon}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Alipay_logo.png"
          alt="Alipay"
          style={styles.paymentIcon}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/37/WeChat_logo.svg"
          alt="WeChat Pay"
          style={styles.paymentIcon}
        />
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderTop: '1px solid #ccc',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#777',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  payLabel: {
    fontSize: '1rem',
    marginRight: '10px',
  },
  paymentIcon: {
    width: '50px',
    height: 'auto',
    marginLeft: '5px',
    backgroundColor: '#f0f0f0',
    padding: '5px',
    borderRadius: '5px',
  },
};

export default Footer;
