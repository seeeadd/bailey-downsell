import React from 'react';

/**
 * DOWNSELL EXIT-INTENT MODAL
 *
 * CREATIVE CONCEPT: "The Warm Hand on Your Shoulder"
 * This feels like Bailey personally stopping you at the door - gentle, caring, urgent.
 *
 * PSYCHOLOGY:
 * - Pattern interrupt without aggression (warm colors + friendly copy)
 * - Acknowledges their "no" first (validation = trust)
 * - GIANT $17 price makes decision instant (vs tiny $27 strikethrough)
 * - Everything visible at once (no scrolling = no overwhelm)
 * - Short = honest, not sales-y
 *
 * KEY DESIGN DECISIONS:
 * - Modal (not full page) = more dramatic, creates focus
 * - Hand-drawn elements = personal, not automated
 * - 3 sections only = scannable in 3 seconds
 * - Mobile-first = most will see this on phones
 * - Generous spacing = premium feel, not cramped
 */

interface DownsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function DownsellModal({ isOpen, onClose, onAccept }: DownsellModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-6">

          {/* Modal Card */}
          <div
            className="relative w-full max-w-2xl bg-[#FAF7F4] rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Paper texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-all duration-200 group z-10"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-[#5D4037] group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="relative px-6 py-8 sm:px-12 sm:py-12">

              {/* ========== SECTION A: MODAL HERO ========== */}
              <div className="text-center mb-8 sm:mb-10">

                {/* CREATIVE CHOICE: "WAIT" uses large scale + warm pink background
                    to create pattern interrupt without being annoying.
                    Hand-drawn bracket adds personality. */}
                <div className="inline-block mb-4 sm:mb-6">
                  <div className="relative inline-block px-6 py-2 bg-gradient-to-r from-[#F4C7C3] to-[#E85C7B] rounded-full">
                    {/* Hand-drawn bracket decoration */}
                    <svg className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-12 text-[#E85C7B] opacity-40" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 2C12 2 8 8 8 16V32C8 40 12 46 20 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                    <svg className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 text-[#E85C7B] opacity-40 rotate-180" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 2C12 2 8 8 8 16V32C8 40 12 46 20 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                    <p className="text-sm sm:text-base font-bold text-white tracking-wide uppercase">
                      Wait – Before You Leave
                    </p>
                  </div>
                </div>

                {/* Headline - acknowledges their "no" first (validation) */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5D4037] leading-tight mb-4 sm:mb-6">
                  OK, I Get It — Maybe VIP Isn't For You Right Now…<br />
                  <span className="text-[#E85C7B]">But Don't Miss The Recordings Too.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-[#5D4037]/80 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
                  Grab 7-Day Access To All 3 Challenge Replays + Bailey's Quick-Start Bundle For{' '}
                  <span className="relative inline-block">
                    <span className="font-bold text-[#E85C7B]">Just $17</span>
                    {/* Wavy underline */}
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 6" preserveAspectRatio="none">
                      <path d="M0 3 Q 25 0, 50 3 T 100 3" stroke="#E85C7B" strokeWidth="2" fill="none" opacity="0.4"/>
                    </svg>
                  </span>
                  {' '}<span className="line-through text-[#5D4037]/40">(normally $27)</span>.
                </p>

                {/* PSYCHOLOGY: $17 displayed MASSIVE (3x larger than $27 strikethrough)
                    makes the gap feel huge despite only being $10 difference.
                    Gradient + scale create perceived value. */}
                <div className="mb-6 sm:mb-8">
                  <p className="relative inline-block text-[8rem] sm:text-[12rem] font-black leading-none tracking-tighter bg-gradient-to-br from-[#F4C7C3] via-[#E85C7B] to-[#F4C7C3] bg-clip-text text-transparent drop-shadow-lg">
                    $17
                  </p>
                </div>

                {/* Price details */}
                <p className="text-sm sm:text-base text-[#5D4037]/70 mb-6 sm:mb-8 font-medium">
                  One-time payment · No upsells inside · Offer only on this page
                </p>

                {/* Primary CTA */}
                <button
                  onClick={onAccept}
                  className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#E85C7B] to-[#F4C7C3] text-white text-base sm:text-lg font-bold rounded-full shadow-[0_6px_0_0_rgba(93,64,55,0.15)] hover:shadow-[0_8px_0_0_rgba(93,64,55,0.15)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_rgba(93,64,55,0.15)] transition-all duration-150 mb-3"
                >
                  YES, GIVE ME 7-DAY ACCESS FOR $17
                </button>

                {/* PSYCHOLOGY: "No thanks" uses guilt-inducing copy
                    to create emotional friction without being manipulative.
                    Small + grey = de-emphasized but honest. */}
                <button
                  onClick={onClose}
                  className="block w-full text-sm text-[#5D4037]/50 hover:text-[#5D4037]/70 transition-colors duration-200"
                >
                  No thanks, I'll risk missing parts of the challenge.
                </button>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#5D4037]/10 to-transparent mb-8 sm:mb-10" />

              {/* ========== SECTION B: WHAT YOU GET ========== */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-[#5D4037] mb-4 sm:mb-6 text-center">
                  Here's what you get for $17:
                </h2>

                {/* CREATIVE CHOICE: Not boring bullets - each item gets illustrated
                    background shape with alternating colors. Makes it scannable
                    and visually interesting without cluttering. */}
                <div className="space-y-3 sm:space-y-4 max-w-xl mx-auto">

                  {/* Bullet 1 - Pink background */}
                  <div className="relative bg-gradient-to-br from-[#F4C7C3]/20 to-[#F4C7C3]/10 rounded-2xl p-4 sm:p-5 border border-[#F4C7C3]/30">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E85C7B] flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#5D4037] text-base sm:text-lg mb-1">7-Day Replay Pass</h3>
                        <p className="text-sm sm:text-base text-[#5D4037]/70 leading-relaxed">
                          All 3 days of the challenge, HD replays, watch/re-watch for a full week, plus downloadable slides.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bullet 2 - Teal background */}
                  <div className="relative bg-gradient-to-br from-[#9DB4A8]/20 to-[#9DB4A8]/10 rounded-2xl p-4 sm:p-5 border border-[#9DB4A8]/30">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#9DB4A8] flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#5D4037] text-base sm:text-lg mb-1">Delete Decision Matrix</h3>
                        <p className="text-sm sm:text-base text-[#5D4037]/70 leading-relaxed">
                          Simple flowchart: fix, rework or delete a listing so you stop overthinking what to do with "duds".
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bullet 3 - Pink background */}
                  <div className="relative bg-gradient-to-br from-[#F4C7C3]/20 to-[#F4C7C3]/10 rounded-2xl p-4 sm:p-5 border border-[#F4C7C3]/30">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E85C7B] flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#5D4037] text-base sm:text-lg mb-1">10 Launch-Ready AI Prompts</h3>
                        <p className="text-sm sm:text-base text-[#5D4037]/70 leading-relaxed">
                          Copy/paste prompts Bailey would use herself to spin up beginner-friendly products fast.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bullet 4 - Teal background */}
                  <div className="relative bg-gradient-to-br from-[#9DB4A8]/20 to-[#9DB4A8]/10 rounded-2xl p-4 sm:p-5 border border-[#9DB4A8]/30">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#9DB4A8] flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#5D4037] text-base sm:text-lg mb-1">January 2025 Trend Snapshot</h3>
                        <p className="text-sm sm:text-base text-[#5D4037]/70 leading-relaxed">
                          What Bailey's currently watching on Etsy so you aren't building on stale trends.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important disclaimer */}
                <div className="mt-4 sm:mt-6 max-w-xl mx-auto">
                  <p className="text-xs sm:text-sm text-[#5D4037]/60 italic leading-relaxed">
                    <strong>Important:</strong> This downsell does not include the VIP WhatsApp group, live Q&A access, or extra support.
                    It's just the replays + quick-start tools so you don't miss the content.
                  </p>
                </div>

                {/* Repeat CTA */}
                <div className="mt-6 sm:mt-8 text-center">
                  <button
                    onClick={onAccept}
                    className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#E85C7B] to-[#F4C7C3] text-white text-base sm:text-lg font-bold rounded-full shadow-[0_6px_0_0_rgba(93,64,55,0.15)] hover:shadow-[0_8px_0_0_rgba(93,64,55,0.15)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_rgba(93,64,55,0.15)] transition-all duration-150"
                  >
                    YES, I WANT THE REPLAY PASS FOR $17
                  </button>
                </div>
              </div>

              {/* ========== SECTION C: TINY REASSURANCE ========== */}
              <div className="text-center">
                {/* PSYCHOLOGY: Final reframe - positions this as "cheapest way"
                    to solve their problem (can't attend live). Logical justification
                    for emotional decision. */}
                <p className="text-sm sm:text-base text-[#5D4037]/70 leading-relaxed mb-4">
                  If you can't make all 3 days live, this is the cheapest way to still get every training without upgrading to full VIP.
                </p>

                {/* Final "no thanks" */}
                <button
                  onClick={onClose}
                  className="text-sm text-[#5D4037]/50 hover:text-[#5D4037]/70 transition-colors duration-200"
                >
                  No thanks, I'll risk missing parts of the challenge.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * USAGE EXAMPLE:
 *
 * import { useState, useEffect } from 'react';
 * import DownsellModal from './downsell-page';
 *
 * function App() {
 *   const [showDownsell, setShowDownsell] = useState(false);
 *
 *   // Trigger on exit intent
 *   useEffect(() => {
 *     const handleMouseLeave = (e: MouseEvent) => {
 *       if (e.clientY <= 0) {
 *         setShowDownsell(true);
 *       }
 *     };
 *     document.addEventListener('mouseleave', handleMouseLeave);
 *     return () => document.removeEventListener('mouseleave', handleMouseLeave);
 *   }, []);
 *
 *   return (
 *     <div>
 *       <DownsellModal
 *         isOpen={showDownsell}
 *         onClose={() => setShowDownsell(false)}
 *         onAccept={() => {
 *           // Handle purchase
 *           window.location.href = 'https://your-checkout-url.com';
 *         }}
 *       />
 *     </div>
 *   );
 * }
 */

/**
 * WHY THIS SHORT PAGE CONVERTS:
 *
 * 1. PATTERN INTERRUPT: Giant "WAIT" + warm colors stop them without annoyance
 * 2. VALIDATION FIRST: "OK, I get it" acknowledges their no = trust
 * 3. INSTANT DECISION: Everything visible at once, no scrolling/thinking
 * 4. MASSIVE PRICE: $17 is 3x bigger than $27 strikethrough = looks like huge savings
 * 5. VISUAL VALUE: Colored bullet cards make $17 feel worth more
 * 6. AUTHENTIC URGENCY: "7-Day" + "Offer only on this page" without fake timers
 * 7. GUILT WITHOUT MANIPULATION: "I'll risk missing" creates friction honestly
 * 8. LOGICAL REFRAME: "Cheapest way to still get training" = justification
 * 9. SHORT = HONEST: No 10-section sales page = feels genuine
 * 10. BAILEY'S SOUL: Warm colors, hand-drawn elements, conversational copy
 */
