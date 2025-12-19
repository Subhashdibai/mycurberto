const interests = [
  "Site from scratch",
  "UX/UI design",
  "Product design",

  "Webflow site",
  "Motion design",
  "Branding",
  "Mobile development",
];

const InterestChips = () => {
  return (
    <div className="chips-wrapper">
      {interests.map((item, index) => (
        <button key={index} className="chip">
          {item}
        </button>
      ))}
    </div>
  );
};

export default InterestChips;
