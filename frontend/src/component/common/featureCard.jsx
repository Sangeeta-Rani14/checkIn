function FeatureCard({ title, description }) {
  return (
    <div className="p-6 rounded-lg border">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-[var(--color-secondry-text)]">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard