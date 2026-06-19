/**
 * Full-bleed hero media: background image with legibility overlay.
 */
export default function HeroAnimatedBackdrop({ image, video, bgDark: _bgDark = true }) {
  return (
    <div className="ubuntu-hero-backdrop absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center select-none"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={image}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover object-center select-none"
        />
      )}
      <div
        className="ubuntu-hero-backdrop__overlay absolute inset-0 pointer-events-none"
        aria-hidden
      />
    </div>
  );
}
