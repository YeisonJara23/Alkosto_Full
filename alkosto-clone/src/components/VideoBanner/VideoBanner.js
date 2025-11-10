import React from "react";
import "./VideoBanner.scss";

/**
 * VideoBanner – banner de video responsivo sin controles,
 * autoplay, loop y silencioso (requisitos para iOS).
 */
export default function VideoBanner({
  src = "/images/banners/gana50.mp4",
  poster = "/images/banners/gana50.webp",
  className = "",
}) {
  return (
    <section className={`video-banner ${className}`} aria-label="Promoción en video">
      <div className="video-banner__container">
        <video
          className="video-banner__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          controls={false}
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        >
          <source src={src} type="video/mp4" />
          {/* Fallback para navegadores sin <video> */}
          Tu navegador no soporta video HTML5.
        </video>
      </div>
    </section>
  );
}
