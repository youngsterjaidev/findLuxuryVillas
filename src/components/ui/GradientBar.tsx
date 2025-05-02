// GradientBar Component
const GradientBar = ({
  height = 16,
  width = 16,
  startColor = "#f7d77e",
  endColor = "#6b6b6b",
  className = "",
}) => {
  return (
    <div
      className={`w-full ${className}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        background: `linear-gradient(to right, ${startColor}, ${endColor})`,
      }}
      aria-hidden="true"
    />
  );
};

export default GradientBar;
