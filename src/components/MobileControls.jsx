import Controls from './Controls';

function MobileControls(props) {
  return (
    <section className="mobile-controls-section" aria-label="Навигация по слайдам">
      <Controls {...props} variant="mobile" />
    </section>
  );
}

export default MobileControls;

