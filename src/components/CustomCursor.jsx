import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);      
  const followerRef = useRef(null);  
  const containerRef = useRef(null); 
  const rafRef = useRef(null);

  // Track raw mouse and interpolated values
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cursorVal = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const followerVal = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const cursorEl = cursorRef.current;
    const followerEl = followerRef.current;
    const containerEl = containerRef.current;

    if (!cursorEl || !followerEl || !containerEl) return;

    // hide native cursor
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    // --- SETTINGS ---
    // MAIN_LERP: 1 = Instant (no lag), 0.5 = smooth but fast, 0.1 = slow/floaty.
    // We use 0.9 to make it "smooth" (removes jitters) but "fast to follow" (feels instant).
    const MAIN_LERP = 0.9; 
    const FOLLOWER_LERP = 0.14; 
    const MAGNET_POWER = 0.35;   

    const interactiveSelector = [
      "a[href]", "button", "input", "textarea", "select", "[role='button']",
      "[data-cursor='pointer']", "[data-cursor='magnetic']", "[contenteditable='true']"
    ].join(",");

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    let hoveredEl = null;
    let isMouseDown = false;

    // Set initial styles
    cursorEl.style.willChange = "transform";
    followerEl.style.willChange = "transform, opacity, width, height, border-radius";

    // 1. Mouse Move
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const el = e.target.closest ? e.target.closest(interactiveSelector) : null;

      if (el !== hoveredEl) {
        if (hoveredEl) containerEl.classList.remove("is-hover", "is-text", "is-link", "is-magnetic");
        hoveredEl = el;
        
        if (hoveredEl) {
          containerEl.classList.add("is-hover");
          const tag = hoveredEl.tagName?.toLowerCase();
          
          if (tag === "input" || tag === "textarea" || hoveredEl.isContentEditable) {
            containerEl.classList.add("is-text");
          } else {
            containerEl.classList.add("is-link");
          }

          // Check magnetic
          const isMagnetic = (hoveredEl.dataset?.cursor?.includes("magnetic"))
            || (tag === "button" || (hoveredEl.matches && hoveredEl.matches("a[href], [role='button']")));
            
          if (isMagnetic) containerEl.classList.add("is-magnetic");
        } else {
          containerEl.classList.remove("is-hover", "is-text", "is-link", "is-magnetic");
        }
      }
    };

    // 2. Click (Ripple)
    const onDown = (e) => {
      isMouseDown = true;
      containerEl.classList.add("is-down");

      const r = document.createElement("span");
      r.className = "cc-ripple";
      containerEl.appendChild(r);

      const rect = containerEl.getBoundingClientRect();
      r.style.left = `${e.clientX - rect.left}px`;
      r.style.top = `${e.clientY - rect.top}px`;

      r.addEventListener("animationend", () => r.remove(), { once: true });
    };

    const onUp = () => {
      isMouseDown = false;
      containerEl.classList.remove("is-down");
    };

    // 3. Animation Loop
    const loop = () => {
      // Main Cursor: "Fast to follow"
      cursorVal.current.x = lerp(cursorVal.current.x, mouse.current.x, MAIN_LERP);
      cursorVal.current.y = lerp(cursorVal.current.y, mouse.current.y, MAIN_LERP);
      cursorEl.style.transform = `translate3d(${cursorVal.current.x}px, ${cursorVal.current.y}px, 0)`;

      // Follower: Smooth trailing + Magnet
      let magnetX = 0, magnetY = 0;
      if (hoveredEl && containerEl.classList.contains("is-magnetic")) {
        const rect = hoveredEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        magnetX = (cx - mouse.current.x) * MAGNET_POWER;
        magnetY = (cy - mouse.current.y) * MAGNET_POWER;
      }

      followerVal.current.x = lerp(followerVal.current.x, mouse.current.x + magnetX, FOLLOWER_LERP);
      followerVal.current.y = lerp(followerVal.current.y, mouse.current.y + magnetY, FOLLOWER_LERP);

      followerEl.style.transform = `translate3d(${followerVal.current.x}px, ${followerVal.current.y}px, 0) translate(-50%, -50%)`;

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.style.cursor = prevCursor || "auto";
    };
  }, []);

  return (
    <>
      <style>{`
        .cc-container {
          position: fixed; inset: 0; pointer-events: none; z-index: 9999; overflow: visible;
        }

        /* --- FOLLOWER (Circle) --- */
        .cc-follower {
          position: fixed; top: 0; left: 0;
          width: 40px; height: 40px;
          border-radius: 50%;
          transform: translate3d(-50%, -50%, 0);
          background: rgba(0,0,0,0.03); /* subtle grey fill */
          border: 1px solid rgba(0,0,0,0.1);
          transition: width 0.2s, height 0.2s, background 0.2s, opacity 0.2s;
        }

        /* --- MAIN CURSOR (SVG Wrapper) --- */
        .cc-cursor {
          position: fixed; top: 0; left: 0;
          width: 32px; height: 32px;
          pointer-events: none; z-index: 10000;
          will-change: transform;
          /* We don't center this one with -50% because the tip is specific */
          filter: drop-shadow(1px 2px 3px rgba(0,0,0,0.15));
        }

        /* Correctly position the tip of the SVG arrow */
        .cc-cursor svg {
          display: block; width: 100%; height: 100%;
          /* Move the tip (7.4, 5.6) to (0,0) relative to mouse */
          transform: translate(-7.4px, -5.6px); 
          transition: transform 0.15s ease;
        }

        /* --- RIPPLE --- */
        .cc-ripple {
          position: absolute; width: 8px; height: 8px;
          border-radius: 50%; transform: translate(-50%, -50%);
          background: rgba(255,255,255,0.5);
          animation: cc-ripple 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @keyframes cc-ripple {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(9); opacity: 0; }
        }

        /* --- STATES --- */
        /* Hovering Links */
        .cc-container.is-hover .cc-cursor svg {
          transform: translate(-7.4px, -5.6px) scale(1.1);
        }
        .cc-container.is-hover .cc-follower {
          width: 55px; height: 55px;
          background: rgba(0,0,0,0.06);
        }

        /* Text Input */
        .cc-container.is-text .cc-cursor svg {
          transform: translate(-7.4px, -5.6px) scale(0.8);
          opacity: 0.7;
        }
        .cc-container.is-text .cc-follower {
          width: 30px; height: 30px; opacity: 0.5;
        }

        /* Click/Down */
        .cc-container.is-down .cc-cursor svg {
          transform: translate(-7.4px, -5.6px) scale(0.9);
        }
        .cc-container.is-down .cc-follower {
          transform: translate3d(-50%, -50%, 0) scale(0.9);
        }

        @media (pointer: coarse) { .cc-container { display: none; } }
      `}</style>

      <div ref={containerRef} className="cc-container">
        <div ref={followerRef} className="cc-follower" />
        
        <div ref={cursorRef} className="cc-cursor">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M7.4 5.6L9.6 22.8C9.7 23.5 10.5 23.8 11 23.2L14.5 19.5L20.8 25.8C21.2 26.2 21.8 26.2 22.2 25.8L24.2 23.8C24.6 23.4 24.6 22.8 24.2 22.4L18 16L22.5 13C23.1 12.6 22.9 11.7 22.2 11.6L7.4 5.6Z" 
              fill="white" 
              stroke="black" 
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;