/**
 * Full-bleed hero media: background video or image with standard object-contain/cover.
 */
export default function HeroAnimatedBackdrop({ image, video, bgDark: _bgDark = true }) {
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#F0F4F8]" aria-hidden>
        {video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-bottom select-none"
          />
        )}
        {/* Dark overlay to ensure text legibility over video background */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{ 
            background: "linear-gradient(to right, rgba(11,27,61,0.6) 0%, rgba(11,27,61,0.2) 50%, rgba(11,27,61,0) 100%)" 
          }} 
        />
      </div>
    </>
  );
}
