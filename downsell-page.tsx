import React from 'react';

/**
 * DOWNSELL PAGE - EXIT-INTENT OFFER (Full Page, Not Modal)
 *
 * CREATIVE CONCEPT: "The Warm Hand on Your Shoulder"
 * A complete standalone page that catches people after they decline VIP.
 *
 * CONTEXT:
 * - User just declined $497 VIP offer
 * - This page is the FINAL offer before they leave
 * - $17 for 7-day replay access (down from $27)
 * - 3 sections only - SHORT and scannable
 *
 * PSYCHOLOGY:
 * - Acknowledges their "no" first (validation = trust)
 * - GIANT $17 price makes decision instant
 * - Everything visible at once (minimal scrolling)
 * - Short = honest, not sales-y
 * - Last chance framing without fake urgency
 *
 * KEY DESIGN DECISIONS:
 * - Full page (not modal) - they land here after declining VIP
 * - Hand-drawn elements = personal, not automated
 * - Mobile-first = most will see this on phones
 * - Generous spacing = premium feel, not cramped
 * - Single-column layout = easy to scan
 */

export default function DownsellPage() {
  const handleAccept = () => {
    // Replace with your actual checkout URL
    window.location.href = 'https://your-checkout-url.com/downsell-17';
  };

  const handleDecline = () => {
    // Replace with your thank you/exit page
    window.location.href = '/thank-you';
  };

  return (
    <div className="min-h-screen bg-[#FAF7F4] relative overflow-hidden">

      {/* Paper texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-12 sm:py-20">

        {/* ========== SECTION A: PAGE HERO ========== */}
        <div className="text-center mb-12 sm:mb-16">

          {/* CREATIVE CHOICE: "WAIT" uses large scale + warm pink background
              to create pattern interrupt. This is the page headline. */}
          <div className="inline-block mb-6 sm:mb-8">
            <div className="relative inline-block px-8 py-3 bg-gradient-to-r from-[#F4C7C3] to-[#E85C7B] rounded-full">
              {/* Hand-drawn bracket decoration */}
              <svg className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-16 text-[#E85C7B] opacity-40" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2C12 2 8 8 8 16V32C8 40 12 46 20 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <svg className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-16 text-[#E85C7B] opacity-40 rotate-180" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2C12 2 8 8 8 16V32C8 40 12 46 20 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <p className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                Wait – Before You Leave
              </p>
            </div>
          </div>

          {/* Headline - acknowledges their "no" first (validation) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D4037] leading-tight mb-6 sm:mb-8 px-4">
            OK, I Get It — Maybe VIP Isn't For You Right Now…<br />
            <span className="text-[#E85C7B]">But Don't Miss The Recordings Too.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#5D4037]/80 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
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

          {/* PSYCHOLOGY: $17 displayed MASSIVE (4x larger than $27 strikethrough)
              makes the gap feel huge despite only being $10 difference.
              Gradient + scale create perceived value. */}
          <div className="mb-10 sm:mb-12">
            <p className="relative inline-block text-[10rem] sm:text-[14rem] lg:text-[16rem] font-black leading-none tracking-tighter bg-gradient-to-br from-[#F4C7C3] via-[#E85C7B] to-[#F4C7C3] bg-clip-text text-transparent drop-shadow-lg">
              $17
            </p>
          </div>

          {/* Price details */}
          <p className="text-base sm:text-lg text-[#5D4037]/70 mb-10 sm:mb-12 font-medium px-4">
            One-time payment · No upsells inside · Offer only on this page
          </p>

          {/* Primary CTA */}
          <div className="max-w-md mx-auto px-4">
            <button
              onClick={handleAccept}
              className="w-full px-10 sm:px-14 py-5 sm:py-6 bg-gradient-to-r from-[#E85C7B] to-[#F4C7C3] text-white text-lg sm:text-xl font-bold rounded-full shadow-[0_8px_0_0_rgba(93,64,55,0.15)] hover:shadow-[0_10px_0_0_rgba(93,64,55,0.15)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_4px_0_0_rgba(93,64,55,0.15)] transition-all duration-150 mb-4"
            >
              YES, GIVE ME 7-DAY ACCESS FOR $17
            </button>

            {/* PSYCHOLOGY: "No thanks" uses guilt-inducing copy
                to create emotional friction without being manipulative.
                Small + grey = de-emphasized but honest. */}
            <button
              onClick={handleDecline}
              className="block w-full text-sm sm:text-base text-[#5D4037]/50 hover:text-[#5D4037]/70 transition-colors duration-200"
            >
              No thanks, I'll risk missing parts of the challenge.
            </button>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-[#5D4037]/10 to-transparent" />
        </div>

        {/* ========== SECTION B: WHAT YOU GET ========== */}
        <div className="mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#5D4037] mb-8 sm:mb-10 text-center px-4">
            Here's what you get for $17:
          </h2>

          {/* CREATIVE CHOICE: Not boring bullets - each item gets illustrated
              background shape with alternating colors. Makes it scannable
              and visually interesting without cluttering. */}
          {/* CREATIVE CHOICE: Custom illustrated graphics for each item
              instead of boring checkmarks. Each icon is a visual metaphor
              for what they're actually getting. */}
          <div className="space-y-4 sm:space-y-5 px-4">

            {/* Bullet 1 - 7-Day Replay Pass with VINTAGE TICKET graphic */}
            <div className="relative bg-gradient-to-br from-[#F4C7C3]/20 to-[#F4C7C3]/10 rounded-2xl p-5 sm:p-6 border-2 border-dashed border-[#E85C7B]/30 overflow-hidden">
              {/* Decorative corner stars */}
              <div className="absolute top-2 right-2 text-[#E85C7B]/20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z"/>
                </svg>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                {/* CUSTOM GRAPHIC: Vintage ticket stub with perforated edge */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 mt-1">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Ticket body */}
                    <rect x="4" y="12" width="56" height="40" rx="4" fill="#E85C7B" opacity="0.9"/>
                    {/* Perforated edge (left side) */}
                    <line x1="22" y1="12" x2="22" y2="52" stroke="#FAF7F4" strokeWidth="2" strokeDasharray="3 3"/>
                    {/* "7 DAYS" text */}
                    <text x="32" y="28" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">7</text>
                    <text x="32" y="38" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">DAYS</text>
                    <text x="32" y="46" fill="white" fontSize="5" textAnchor="middle">PASS</text>
                    {/* Play button icon */}
                    <circle cx="12" cy="32" r="6" fill="white" opacity="0.8"/>
                    <path d="M10 28l6 4-6 4z" fill="#E85C7B"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#5D4037] text-lg sm:text-xl mb-2">7-Day Replay Pass</h3>
                  <p className="text-base sm:text-lg text-[#5D4037]/70 leading-relaxed">
                    All 3 days of the challenge, HD replays, watch/re-watch for a full week, plus downloadable slides.
                  </p>
                </div>
              </div>
            </div>

            {/* Bullet 2 - Delete Decision Matrix with FLOWCHART graphic */}
            <div className="relative bg-gradient-to-br from-[#9DB4A8]/20 to-[#9DB4A8]/10 rounded-2xl p-5 sm:p-6 border-2 border-[#9DB4A8]/40 overflow-hidden">
              {/* Decorative corner arrow */}
              <div className="absolute top-2 right-2 text-[#9DB4A8]/20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H9M17 7v8"/>
                </svg>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                {/* CUSTOM GRAPHIC: Hand-drawn flowchart with decision boxes */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 mt-1">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Top box (Start) */}
                    <rect x="22" y="4" width="20" height="12" rx="2" fill="#9DB4A8" opacity="0.8" stroke="#5D4037" strokeWidth="1.5"/>
                    {/* Arrow down */}
                    <path d="M32 16 L32 22" stroke="#5D4037" strokeWidth="2"/>
                    <path d="M32 22 L29 19 M32 22 L35 19" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
                    {/* Diamond (Decision) */}
                    <path d="M32 24 L44 34 L32 44 L20 34 Z" fill="#9DB4A8" opacity="0.9" stroke="#5D4037" strokeWidth="1.5"/>
                    <text x="32" y="36" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">?</text>
                    {/* Left arrow (Delete) */}
                    <path d="M20 34 L12 34" stroke="#5D4037" strokeWidth="2"/>
                    <rect x="4" y="30" width="8" height="8" rx="1" fill="#E85C7B" opacity="0.8"/>
                    <text x="8" y="36" fill="white" fontSize="8" textAnchor="middle">✕</text>
                    {/* Right arrow (Keep) */}
                    <path d="M44 34 L52 34" stroke="#5D4037" strokeWidth="2"/>
                    <rect x="52" y="30" width="8" height="8" rx="1" fill="#9DB4A8" opacity="0.8"/>
                    <text x="56" y="36" fill="white" fontSize="8" textAnchor="middle">✓</text>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#5D4037] text-lg sm:text-xl mb-2">Delete Decision Matrix</h3>
                  <p className="text-base sm:text-lg text-[#5D4037]/70 leading-relaxed">
                    Simple flowchart: fix, rework or delete a listing so you stop overthinking what to do with "duds".
                  </p>
                </div>
              </div>
            </div>

            {/* Bullet 3 - AI Prompts with MAGIC STACK graphic */}
            <div className="relative bg-gradient-to-br from-[#F4C7C3]/20 to-[#F4C7C3]/10 rounded-2xl p-5 sm:p-6 border-2 border-[#E85C7B]/30 overflow-hidden" style={{borderStyle: 'solid'}}>
              {/* Decorative sparkles */}
              <div className="absolute top-3 right-3 text-[#E85C7B]/30">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l1.5 7.5L21 9l-7.5 1.5L12 18l-1.5-7.5L3 9l7.5-1.5z"/>
                </svg>
              </div>
              <div className="absolute bottom-3 right-6 text-[#E85C7B]/20">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l1.5 7.5L21 9l-7.5 1.5L12 18l-1.5-7.5L3 9l7.5-1.5z"/>
                </svg>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                {/* CUSTOM GRAPHIC: Stack of prompt cards with AI sparkle */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 mt-1">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Back cards (stacked effect) */}
                    <rect x="14" y="14" width="36" height="28" rx="3" fill="#E85C7B" opacity="0.3" transform="rotate(-3 32 28)"/>
                    <rect x="12" y="16" width="36" height="28" rx="3" fill="#E85C7B" opacity="0.5" transform="rotate(-1.5 30 30)"/>
                    {/* Front card */}
                    <rect x="10" y="18" width="36" height="28" rx="3" fill="#E85C7B" opacity="0.9" stroke="#5D4037" strokeWidth="1.5"/>
                    {/* AI symbol (circuit/brain) */}
                    <circle cx="28" cy="28" r="3" fill="white" opacity="0.9"/>
                    <circle cx="28" cy="36" r="3" fill="white" opacity="0.9"/>
                    <line x1="28" y1="31" x2="28" y2="33" stroke="white" strokeWidth="2"/>
                    {/* "10" badge */}
                    <circle cx="40" cy="26" r="8" fill="white"/>
                    <text x="40" y="30" fill="#E85C7B" fontSize="10" fontWeight="bold" textAnchor="middle">10</text>
                    {/* Magic sparkle */}
                    <path d="M20 10 L21 14 L25 15 L21 16 L20 20 L19 16 L15 15 L19 14 Z" fill="#F4C7C3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#5D4037] text-lg sm:text-xl mb-2">10 Launch-Ready AI Prompts</h3>
                  <p className="text-base sm:text-lg text-[#5D4037]/70 leading-relaxed">
                    Copy/paste prompts Bailey would use herself to spin up beginner-friendly products fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Bullet 4 - Trend Snapshot with UPWARD GRAPH graphic */}
            <div className="relative bg-gradient-to-br from-[#9DB4A8]/20 to-[#9DB4A8]/10 rounded-2xl p-5 sm:p-6 border-2 border-[#9DB4A8]/40 overflow-hidden">
              {/* Decorative "2025" badge in corner */}
              <div className="absolute top-2 right-2 bg-[#9DB4A8] rounded-full px-2 py-0.5">
                <span className="text-white text-xs font-bold">2025</span>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                {/* CUSTOM GRAPHIC: Upward trending graph */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 mt-1">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Graph background */}
                    <rect x="8" y="8" width="48" height="48" rx="4" fill="#9DB4A8" opacity="0.2" stroke="#9DB4A8" strokeWidth="2"/>
                    {/* Grid lines */}
                    <line x1="8" y1="20" x2="56" y2="20" stroke="#9DB4A8" strokeWidth="0.5" opacity="0.3"/>
                    <line x1="8" y1="32" x2="56" y2="32" stroke="#9DB4A8" strokeWidth="0.5" opacity="0.3"/>
                    <line x1="8" y1="44" x2="56" y2="44" stroke="#9DB4A8" strokeWidth="0.5" opacity="0.3"/>
                    {/* Upward trend line */}
                    <path d="M12 48 L24 38 L36 32 L48 16" stroke="#9DB4A8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* Data points */}
                    <circle cx="12" cy="48" r="3" fill="white" stroke="#9DB4A8" strokeWidth="2"/>
                    <circle cx="24" cy="38" r="3" fill="white" stroke="#9DB4A8" strokeWidth="2"/>
                    <circle cx="36" cy="32" r="3" fill="white" stroke="#9DB4A8" strokeWidth="2"/>
                    <circle cx="48" cy="16" r="3" fill="#9DB4A8"/>
                    {/* Arrow pointing up */}
                    <path d="M48 16 L48 8 M48 8 L44 12 M48 8 L52 12" stroke="#9DB4A8" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#5D4037] text-lg sm:text-xl mb-2">January 2025 Trend Snapshot</h3>
                  <p className="text-base sm:text-lg text-[#5D4037]/70 leading-relaxed">
                    What Bailey's currently watching on Etsy so you aren't building on stale trends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important disclaimer */}
          <div className="mt-6 sm:mt-8 px-4">
            <p className="text-sm sm:text-base text-[#5D4037]/60 italic leading-relaxed text-center">
              <strong>Important:</strong> This downsell does not include the VIP WhatsApp group, live Q&A access, or extra support.
              It's just the replays + quick-start tools so you don't miss the content.
            </p>
          </div>

          {/* Repeat CTA */}
          <div className="mt-10 sm:mt-12 max-w-md mx-auto px-4">
            <button
              onClick={handleAccept}
              className="w-full px-10 sm:px-14 py-5 sm:py-6 bg-gradient-to-r from-[#E85C7B] to-[#F4C7C3] text-white text-lg sm:text-xl font-bold rounded-full shadow-[0_8px_0_0_rgba(93,64,55,0.15)] hover:shadow-[0_10px_0_0_rgba(93,64,55,0.15)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_4px_0_0_rgba(93,64,55,0.15)] transition-all duration-150"
            >
              YES, I WANT THE REPLAY PASS FOR $17
            </button>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-[#5D4037]/10 to-transparent" />
        </div>

        {/* ========== SECTION C: TINY REASSURANCE ========== */}
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* PSYCHOLOGY: Final reframe - positions this as "cheapest way"
              to solve their problem (can't attend live). Logical justification
              for emotional decision. */}
          <p className="text-base sm:text-lg text-[#5D4037]/70 leading-relaxed mb-6">
            If you can't make all 3 days live, this is the cheapest way to still get every training without upgrading to full VIP.
          </p>

          {/* Final "no thanks" */}
          <button
            onClick={handleDecline}
            className="text-sm sm:text-base text-[#5D4037]/50 hover:text-[#5D4037]/70 transition-colors duration-200"
          >
            No thanks, I'll risk missing parts of the challenge.
          </button>
        </div>

        {/* Bottom spacing */}
        <div className="h-12 sm:h-20" />
      </div>
    </div>
  );
}

/**
 * WHY THIS SHORT PAGE CONVERTS:
 *
 * 1. PATTERN INTERRUPT: Giant "WAIT" badge stops them from leaving
 * 2. VALIDATION FIRST: "OK, I get it" acknowledges their no = trust
 * 3. INSTANT DECISION: Everything visible with minimal scrolling
 * 4. MASSIVE PRICE: $17 is 4x bigger than $27 strikethrough = huge perceived value
 * 5. VISUAL VALUE: Colored bullet cards make $17 feel worth more
 * 6. AUTHENTIC URGENCY: "7-Day" + "Offer only on this page" without fake timers
 * 7. GUILT WITHOUT MANIPULATION: "I'll risk missing" creates friction honestly
 * 8. LOGICAL REFRAME: "Cheapest way to still get training" = justification
 * 9. SHORT = HONEST: 3 sections only = feels genuine, not sales-y
 * 10. BAILEY'S SOUL: Warm colors, hand-drawn elements, conversational copy
 *
 * MOBILE-FIRST DESIGN:
 * - Single column layout
 * - Large touch targets (buttons 56px min)
 * - Scannable in 5 seconds
 * - Generous spacing prevents overwhelm
 * - Everything readable on small screens
 */
