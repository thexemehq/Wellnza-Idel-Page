'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--emerald-deep)",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image - full width behind everything */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-5%",
          transform: "translateY(-50%)",
          width: "800px",
          height: "600px",
          zIndex: 0,
          opacity: 0.6,
        }}
        className="bg-image"
      >
        <Image
          src="/side-image.png"
          alt=""
          width={800}
          height={600}
          style={{ objectFit: "contain" }}
          unoptimized
        />
      </div>

      {/* Content - in front */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Logo */}
        <div
          style={{
            position: "relative",
            width: "220px",
            height: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            unoptimized
            style={{
              objectFit: "contain",
              backgroundColor: "transparent",
            }}
            onLoad={() => setLogoLoaded(true)}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Placeholder */}
          <div
            id="logo-placeholder"
            style={{
              position: "absolute",
              inset: 0,
              display: logoLoaded ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px dashed var(--border)",
              borderRadius: "var(--radius)",
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-bebas)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            DROP LOGO.PNG<br />IN /PUBLIC
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 500,
            letterSpacing: "0.02em",
            textAlign: "center",
            lineHeight: 1.1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <span style={{ color: "#F4F1E8", display: "block", whiteSpace: "nowrap" }}>
            FUEL BETTER.
          </span>
          <span style={{ color: "#C9A15A", display: "block", whiteSpace: "nowrap" }}>
            LIVE STRONGER.
          </span>
        </p>

        {/* COMING SOON */}
        <div
          style={{
            border: "1px solid rgba(201, 161, 90, 0.4)",
            borderRadius: "var(--radius)",
            padding: "1rem 3rem",
            backgroundColor: "rgba(10, 31, 24, 0.6)",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.25em",
              color: "#FFF8F0",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            COMING SOON
          </h1>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontWeight: 400,
            color: "var(--ivory)",
            textAlign: "center",
            maxWidth: "500px",
            letterSpacing: "0.03em",
          }}
        >
          India's finest sports nutrition — launching soon.
        </p>
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontWeight: 400,
            color: "var(--gold)",
            textAlign: "center",
            maxWidth: "500px",
            letterSpacing: "0.03em",
          }}
        >
          We're taking orders now via WhatsApp!
        </p>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/message/ZPBB7KW7YSO5C1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            padding: "1.1rem 2.5rem",
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            fontFamily: "var(--font-montserrat)",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textDecoration: "none",
            borderRadius: "var(--radius)",
            transition: "all var(--dur-base) var(--ease-expo)",
            boxShadow: "0 4px 24px rgba(37, 211, 102, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#128C7E";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(37, 211, 102, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#25D366";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(37, 211, 102, 0.3)";
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          ORDER ON WHATSAPP
        </a>

        {/* Phone number */}
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "0.9rem",
            fontWeight: 400,
            color: "var(--ivory)",
            textAlign: "center",
            letterSpacing: "0.03em",
          }}
        >
          Or reach us directly at{" "}
          <a
            href="https://wa.me/918788396678"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--gold)",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            +91 8788396678
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bg-image {
            opacity: 0.25 !important;
            width: 350px !important;
            height: 250px !important;
          }
        }
        @media (min-width: 769px) {
          .bg-image {
            opacity: 0.6 !important;
          }
        }
      `}</style>
    </main>
  );
}
