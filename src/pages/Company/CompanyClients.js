// src/components/Company/CompanyClients.jsx
import "./CompanyClients.css";

const clients = [
  { name: "Raiffeisen Bank", logo: "/clients/raiffeisen.svg" },
  { name: "Mapbox", logo: "/clients/mapbox.svg" },
  { name: "Cisco", logo: "/clients/cisco.svg" },

  { name: "Spark NZ", logo: "/clients/spark.svg" },
  { name: "TradingView", logo: "/clients/tradingview.svg" },
  { name: "Tinkoff Bank", logo: "/clients/tinkoff.svg" },

  { name: "Yandex", logo: "/clients/yandex.svg" },
  { name: "Bank al Etihad", logo: "/clients/etihad.svg" },
  { name: "Euro Auto", logo: "/clients/euroauto.svg" }, 
];

export default function CompanyClients() {
  return (
    <section className="company-clients">
      <h2>
        We work with <br />
        people from all <br />
        over the world
      </h2>

      <div className="clients-grid">
        {clients.map((item, index) => (
          <div className="client-card" key={index}>
            <img src={item.logo} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
