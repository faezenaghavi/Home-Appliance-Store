export default function AccountWaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f5] via-[#f2ede7] to-[#e8e3dc]" />

      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#808080]/10 blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#1a1a1a]/5 blur-3xl" />

      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[42%] min-h-[220px] animate-account-wave-slow opacity-90"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#808080"
          fillOpacity="0.12"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[38%] min-h-[200px] animate-account-wave-medium opacity-95"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#666666"
          fillOpacity="0.14"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[32%] min-h-[160px] animate-account-wave-fast"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#1a1a1a"
          fillOpacity="0.07"
          d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,218.7C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[26%] min-h-[120px] animate-account-wave-slow opacity-80"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ animationDirection: "reverse", animationDuration: "22s" }}
      >
        <path
          fill="#a8a8a8"
          fillOpacity="0.2"
          d="M0,224L60,218.7C120,213,240,203,360,192C480,181,600,171,720,181.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  );
}
