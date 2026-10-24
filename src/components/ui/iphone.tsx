import type { ReactNode } from "react";

// iPhone 15 Pro–style device frame: titanium band, side buttons, black bezel, Dynamic Island and home indicator.
// The screen is a flex column; children fill it top to bottom.
export function IPhone({ children, homeIndicator = "dark" }: { children: ReactNode; homeIndicator?: "dark" | "light" }) {
  return (
    <div className="iphone">
      <span aria-hidden="true" className="iphone-key" style={{ left: -3, top: "15%", height: "4%" }} />
      <span aria-hidden="true" className="iphone-key" style={{ left: -3, top: "22%", height: "7.5%" }} />
      <span aria-hidden="true" className="iphone-key" style={{ left: -3, top: "31%", height: "7.5%" }} />
      <span aria-hidden="true" className="iphone-key" style={{ right: -3, top: "25%", height: "11%" }} />
      <div className="iphone-bezel">
        <div className="iphone-screen">
          <span aria-hidden="true" className="iphone-island"><i /></span>
          {children}
          <span aria-hidden="true" className="iphone-home" style={{ background: homeIndicator === "dark" ? "#111" : "rgba(255,255,255,.85)" }} />
          <span aria-hidden="true" className="iphone-glare" />
        </div>
      </div>
    </div>
  );
}

export function StatusBar({ time = "9:41", tone = "light" }: { time?: string; tone?: "light" | "dark" }) {
  const c = tone === "light" ? "#fff" : "#111";
  return (
    <div aria-hidden="true" className="iphone-status" style={{ color: c }}>
      <span>{time}</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        <svg width="18" height="12" viewBox="0 0 18 12" fill={c}>
          <rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill={c}>
          <path d="M8 2.4c2.3 0 4.4.9 6 2.4l1.2-1.3A10.4 10.4 0 0 0 8 .6 10.4 10.4 0 0 0 .8 3.5L2 4.8a8.6 8.6 0 0 1 6-2.4Z" />
          <path d="M8 5.9c1.4 0 2.6.5 3.6 1.4l1.2-1.3A7 7 0 0 0 8 4.1 7 7 0 0 0 3.2 6l1.2 1.3c1-.9 2.2-1.4 3.6-1.4Z" />
          <path d="M8 9.3c.5 0 1 .2 1.3.5L8 11.4 6.7 9.8c.3-.3.8-.5 1.3-.5Z" />
        </svg>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
          <rect x=".5" y=".5" width="22" height="11" rx="3.5" stroke={c} strokeOpacity=".4" />
          <rect x="2" y="2" width="16" height="8" rx="2" fill={c} />
          <path d="M24 4v4c.8-.3 1.3-1.1 1.3-2S24.8 4.3 24 4Z" fill={c} fillOpacity=".4" />
        </svg>
      </span>
    </div>
  );
}
