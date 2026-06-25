export default function VideoStripSection() {
  return (
    <section className="video-strip-container" aria-label="Video institucional Meteora">
      <div className="video-strip-overlay" />

      <video className="video-strip-content" autoPlay muted loop playsInline>
        <source src="/assets/videos/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>
    </section>
  );
}