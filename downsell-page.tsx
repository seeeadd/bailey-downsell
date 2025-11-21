import React from 'react';

/**
 * BAILEY DOWNSELL PAGE - Creative AI Etsy Conversion Vault
 *
 * PSYCHOLOGY OVERVIEW:
 * This page appears immediately after someone declines the $497 VIP upsell.
 * They just said NO to premium coaching, so now we're offering practical assets.
 *
 * KEY PSYCHOLOGICAL SHIFTS:
 * - From "transformation" to "tools"
 * - From "elevated" to "practical"
 * - From "consider this" to "last chance"
 * - From "investment" to "no-brainer"
 *
 * CREATIVE CONCEPT:
 * "Opening Bailey's filing cabinet" - you're getting access to organized,
 * tested resources that usually live inside paid programs. Presented like
 * a designer's resource library: visual, tangible, professional.
 *
 * CONVERSION STRATEGY:
 * 1. Frame as completion ("Step 2 of 2") not selling
 * 2. Show actual assets (layered template previews) to prove value
 * 3. Create structural urgency (page shows once) not fake timers
 * 4. Address specific pain (blank page paralysis, dead listings)
 * 5. Make $27 feel like stealing through visual abundance
 */

export default function DownsellPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F4] font-sans">

      {/* ============================================
          SECTION 0: STICKY BAR
          PSYCHOLOGY: Frames this as "final step" not "surprise upsell"
          Creates compliance desire (finish what you started)
          Uses warm colors (cream/pink) not aggressive red
          ============================================ */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#F4C7C3] border-b-2 border-[#E8B5B0] shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-wider text-[#5D4037] uppercase mb-1">
              Final Step to Confirm Your Spot
            </p>
            <p className="text-[10px] text-[#8D6E63]">
              If you leave this page, you won't see this offer again
            </p>
          </div>

          {/* Progress indicator - 90% complete implies almost done */}
          <div className="mt-2 h-1.5 bg-white/40 rounded-full overflow-hidden">
            <div className="h-full bg-[#9DB4A8] rounded-full w-[90%] transition-all duration-500"></div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed sticky bar */}
      <div className="h-20"></div>

      {/* ============================================
          SECTION 1: HERO - SIGNATURE ARTISTIC MOMENT
          CREATIVE CONCEPT: "Last Chance Card" - feels like Bailey sliding you a handwritten note
          TEXTURE: Subtle paper grain + soft gradient creates warmth
          PATTERN: Tiny dollar signs at 3% opacity = subtle "this makes you money" motif
          HAND-DRAWN: Decorative elements add personality without childishness
          PSYCHOLOGY: Removed video to make price the HERO - instant visual impact
          ============================================ */}
      <section className="relative max-w-5xl mx-auto px-4 py-16 overflow-hidden">

        {/* ARTISTIC LAYER: Subtle background pattern - dollar signs at ultra-low opacity */}
        {/* Creates subconscious "money/value" association without being obvious */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='20' y='40' font-size='24' fill='%23E85C7B' opacity='0.3'%3E$%3C/text%3E%3C/svg%3E")`}}></svg>
        </div>

        {/* TEXTURE: Soft paper grain overlay on entire hero */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=')]"></div>

        {/* SIGNATURE MOMENT 1: Hand-drawn "One-Time" stamp badge */}
        {/* ARTISTIC: Rotated badge with rough edges feels urgent but playful */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            {/* Hand-drawn circle background */}
            <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] -rotate-3" viewBox="0 0 200 100" fill="none">
              <ellipse cx="100" cy="50" rx="95" ry="45" stroke="#E85C7B" strokeWidth="3" strokeDasharray="2,3" fill="#F4C7C3" fillOpacity="0.2"/>
            </svg>
            <div className="relative bg-gradient-to-r from-[#F4C7C3] to-[#E85C7B] px-8 py-4 rounded-lg shadow-lg transform -rotate-1">
              <p className="text-xs font-black tracking-[0.2em] uppercase text-white mb-1">⚡ One-Time $27 Offer</p>
              <p className="text-sm font-semibold text-white/90">Step 2 of 2 • Only Shows Once</p>
            </div>
          </div>
        </div>

        {/* Main headline with artistic treatment */}
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-[#9DB4A8] uppercase tracking-widest mb-4">Before You Start the Challenge...</p>

          <h1 className="text-4xl md:text-6xl font-black text-[#2D2D2D] leading-tight mb-6">
            Want My Best-Converting<br />
            <span className="relative inline-block">
              <span className="relative z-10">Etsy Words, Thumbnails & Tags</span>
              {/* ARTISTIC: Rough hand-drawn highlight background */}
              <svg className="absolute inset-0 w-full h-full -z-0" viewBox="0 0 500 80" preserveAspectRatio="none">
                <path d="M5,40 Q250,20 495,45 Q250,70 5,40 Z" fill="#F4C7C3" opacity="0.3"/>
              </svg>
            </span>
            <br />
            <span className="text-[#9DB4A8]">Done For You?</span>
          </h1>
        </div>

        {/* CREATIVE HERO: Giant $27 price as visual centerpiece (NO VIDEO) */}
        {/* PSYCHOLOGY: Price shock creates "wait WHAT?!" reaction immediately */}
        {/* ARTISTIC: Gradient, glow, decorative elements make it celebratory not cheap */}
        <div className="relative max-w-3xl mx-auto mb-12">

          {/* Decorative bracket flourishes around price */}
          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 text-[#F4C7C3] opacity-40">
            <svg width="40" height="120" viewBox="0 0 40 120" fill="none">
              <path d="M35,0 Q5,0 5,30 L5,90 Q5,120 35,120" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 text-[#F4C7C3] opacity-40">
            <svg width="40" height="120" viewBox="0 0 40 120" fill="none">
              <path d="M5,0 Q35,0 35,30 L35,90 Q35,120 5,120" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
          </div>

          {/* Price comparison with dramatic contrast */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-[#F4C7C3]/30 relative overflow-hidden">

            {/* Subtle radial gradient behind price */}
            <div className="absolute inset-0 bg-gradient-radial from-[#F4C7C3]/10 via-transparent to-transparent"></div>

            <div className="relative z-10 text-center">
              {/* Old price - tiny and insignificant */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Full Program Value</p>
                <p className="text-3xl font-bold text-gray-400 line-through opacity-50">$497</p>
              </div>

              {/* Arrow pointing down */}
              <svg className="w-8 h-8 mx-auto mb-4 text-[#9DB4A8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>

              {/* GIANT $27 - THE HERO */}
              <div className="mb-6">
                <p className="text-base font-bold text-[#E85C7B] uppercase tracking-wider mb-3">Just The Vault Today</p>
                <div className="relative inline-block">
                  {/* Glow effect behind price */}
                  <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#F4C7C3] to-[#E85C7B] opacity-30"></div>

                  {/* The price itself with gradient */}
                  <p className="relative text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter bg-gradient-to-br from-[#F4C7C3] via-[#E85C7B] to-[#F4C7C3] bg-clip-text text-transparent drop-shadow-lg">
                    $27
                  </p>

                  {/* Hand-drawn wavy underline */}
                  <svg className="absolute -bottom-4 left-0 w-full h-8" viewBox="0 0 400 30" preserveAspectRatio="none">
                    <path d="M0,15 Q100,5 200,15 T400,15" stroke="#F4C7C3" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* "You save" badge with hand-drawn style */}
              <div className="inline-block relative mb-4">
                {/* Rough circle background */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
                  <ellipse cx="100" cy="30" rx="98" ry="28" fill="#9DB4A8" opacity="0.15"/>
                </svg>
                <p className="relative px-6 py-2 font-bold text-[#4A7C72] text-lg">
                  YOU SAVE $470+
                </p>
              </div>

              {/* Subtext with personality */}
              <p className="text-lg text-[#5D4037] font-medium">
                One-time payment • <span className="text-[#9DB4A8]">Less than lunch</span>
              </p>

              {/* ARTISTIC: Hand-drawn arrow pointing to CTA below */}
              <svg className="w-12 h-16 mx-auto mt-6 text-[#F4C7C3] animate-bounce" viewBox="0 0 40 60" fill="none">
                <path d="M20,5 Q22,25 20,45 M20,45 L15,38 M20,45 L25,38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Benefit bullets with icons */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">📝</div>
              <p className="text-sm font-semibold text-[#2D2D2D]">30+ Swipe Files</p>
              <p className="text-xs text-gray-600">Plug-and-play copy</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎨</div>
              <p className="text-sm font-semibold text-[#2D2D2D]">5 Visual Frameworks</p>
              <p className="text-xs text-gray-600">Thumbnail templates</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏷️</div>
              <p className="text-sm font-semibold text-[#2D2D2D]">Tag Patterns</p>
              <p className="text-xs text-gray-600">Tested keywords</p>
            </div>
          </div>
        </div>

        {/* Primary CTA with artistic treatment */}
        {/* ARTISTIC: Layered shadows and hover effects make it tactile */}
        <div className="text-center">
          <button className="group relative w-full md:w-auto md:min-w-[500px] mx-auto block bg-gradient-to-r from-[#F4C7C3] to-[#E85C7B] hover:from-[#E85C7B] hover:to-[#F4C7C3] text-white font-black text-xl py-6 px-10 rounded-full shadow-[0_8px_0px_0px_rgba(232,92,123,0.3),0_13px_24px_rgba(232,92,123,0.2)] hover:shadow-[0_4px_0px_0px_rgba(232,92,123,0.3),0_8px_16px_rgba(232,92,123,0.3)] transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1 active:shadow-none mb-4">
            <span className="relative z-10">YES! ADD THE VAULT FOR $27</span>
            {/* Shine effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </button>

          {/* Security badges */}
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure checkout
            </span>
            <span>•</span>
            <span>Instant access</span>
            <span>•</span>
            <span>7-day guarantee</span>
          </div>

          {/* No-thanks link - subtle */}
          <p className="text-center">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline">
              No thanks, join challenge without Vault
            </a>
          </p>
        </div>

      </section>

      {/* ============================================
          SECTION 2: CONTEXT / CHALLENGE vs VAULT
          PSYCHOLOGY: Addresses the "why do I need this?" objection
          Shows the implementation gap: knowing what to do ≠ doing it
          Timeline visual makes the problem concrete and relatable
          ARTISTIC: Canvas texture softens harsh black, adds sophistication
          ============================================ */}
      <section className="relative bg-[#2D2D2D] py-16 px-4 overflow-hidden">
        {/* TEXTURE: Subtle canvas weave on dark background prevents harsh digital feel */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2FudmFzIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NhbnZhcykiLz48L3N2Zz4=')]"></div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D2D2D] to-transparent opacity-50 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto">

          {/* Section label */}
          <p className="text-xs font-semibold tracking-wider text-[#F4C7C3] uppercase text-center mb-4">
            Before You Start the Challenge…
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 leading-tight">
            The Challenge Shows You <em className="text-[#9DB4A8] not-italic">What To Do</em> —<br />
            The Vault Gives You The Words, Thumbnails & Tags To Do It <em className="text-[#F4C7C3] not-italic">Fast</em>
          </h2>

          {/* CHANGE #3: Timeline comparison with VAULT COLUMN HIGHLIGHTED */}
          {/* PSYCHOLOGY: Future pacing - shows two possible futures
              Makes the problem (blank page paralysis) visceral
              Makes the solution (templates) obvious
              CREATIVE CHOICE: Vault column gets warm pink glow + badge to pull attention
              On mobile, Vault shows first so they see what they're buying */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">

            {/* WITHOUT VAULT timeline - shows the pain (second on desktop, second on mobile) */}
            <div className="bg-gray-800/30 border-2 border-gray-700 rounded-xl p-6 order-2 md:order-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                <p className="font-bold text-gray-400 text-sm tracking-wide uppercase">Without the Vault</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 bg-gray-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-300 font-medium">Day 1: Learn the strategy</p>
                    <p className="text-gray-500 text-sm">Feel motivated and clear</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 bg-gray-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-300 font-medium">Day 2: Stare at blank page</p>
                    <p className="text-gray-500 text-sm">"Um...what words do I actually use?"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 bg-gray-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-300 font-medium">Day 3: Still guessing</p>
                    <p className="text-gray-500 text-sm">Publish something...hope it works?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WITH VAULT timeline - SIGNATURE MOMENT 2: Glowing, warm, recommended */}
            <div className="bg-gradient-to-br from-[#F4C7C3]/20 to-[#9DB4A8]/20 border-2 border-[#F4C7C3] rounded-xl p-6 shadow-lg shadow-[#F4C7C3]/20 order-1 md:order-2 relative">
              {/* RECOMMENDED badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F4C7C3] text-[#5D4037] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                Recommended Add-On
              </div>

              <div className="flex items-center gap-2 mb-4 mt-2">
                <div className="h-3 w-3 bg-[#9DB4A8] rounded-full"></div>
                <p className="font-bold text-[#9DB4A8] text-sm tracking-wide uppercase">With the Vault</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 bg-[#9DB4A8] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Day 1: Learn the strategy</p>
                    <p className="text-gray-400 text-sm">Bailey teaches you what actually works</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 bg-[#9DB4A8] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Day 2: Use the templates</p>
                    <p className="text-gray-400 text-sm">Open the Vault, fill in your blanks</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 bg-[#9DB4A8] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Day 3: Published!</p>
                    <p className="text-gray-400 text-sm">Listings live, confident it'll convert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain callout bullets - relatable, specific */}
          <div className="bg-gradient-to-r from-[#5D4037]/20 to-transparent border-l-4 border-[#F4C7C3] rounded-r-lg p-6">
            <p className="text-white font-semibold mb-4">Sound familiar?</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#F4C7C3] mt-1">•</span>
                <span>Staring at the title box not knowing what to type</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4C7C3] mt-1">•</span>
                <span>"Views but no sales" on your best ideas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4C7C3] mt-1">•</span>
                <span>Thumbnails that look cute… but don't convert</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ============================================
          SECTION 3: BAILEY PROOF & INCENTIVE ALIGNMENT
          PSYCHOLOGY: Builds trust through transparency
          "I succeed when you succeed" alignment reduces skepticism
          Visual proof (stats, testimonials) makes it tangible
          ============================================ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Copy */}
            <div>
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">
                Why I Built This<br />
                <span className="text-[#9DB4A8]">(And Why I'm Practically Giving It Away)</span>
              </h2>

              <div className="space-y-4 text-[#5D4037]">
                <p>
                  I've spent <strong>years</strong> testing products, thumbnails, titles, descriptions
                  and tags — both in my own shop and with thousands of students.
                </p>

                <p>
                  Every time I review an Etsy shop, it's the same patterns that kill conversions:
                  weak titles, confusing thumbnails, and "pretty but unclear" listings.
                </p>

                <p className="bg-[#FAF7F4] border-l-4 border-[#F4C7C3] pl-4 py-3 rounded-r font-medium">
                  <strong>Here's the truth:</strong> When your listings convert, you stick with Etsy longer,
                  you make more sales, and you're way more likely to join my deeper programs.
                  So I'd rather hand you my best-performing assets than watch you guess alone.
                </p>
              </div>
            </div>

            {/* Right: Proof visuals */}
            {/* PSYCHOLOGY: Social proof + authority proof
                Shows Bailey has real results, not just theory */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#9DB4A8] to-[#4A7C72] rounded-xl p-6 text-white">
                <p className="text-sm font-semibold mb-2 opacity-90">BAILEY'S ETSY RESULTS</p>
                <p className="text-4xl font-bold mb-1">$127K+</p>
                <p className="text-sm opacity-90">in digital product sales using these exact frameworks</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FAF7F4] rounded-lg p-4 border-2 border-[#F4C7C3]">
                  <p className="text-2xl font-bold text-[#2D2D2D] mb-1">8,400+</p>
                  <p className="text-xs text-[#5D4037]">students taught</p>
                </div>
                <div className="bg-[#FAF7F4] rounded-lg p-4 border-2 border-[#F4C7C3]">
                  <p className="text-2xl font-bold text-[#2D2D2D] mb-1">4.9★</p>
                  <p className="text-xs text-[#5D4037]">average rating</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 italic text-center">
                Real results from the strategies and structures inside this Vault
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================
          SECTION 4: VAULT CONTENTS (SIGNATURE VISUAL MOMENT)
          PSYCHOLOGY: This is the value proof
          Layered preview design shows you EXACTLY what you get
          Reduces risk, increases perceived value
          "Peek inside" makes it tangible vs abstract promises
          ============================================ */}
      <section className="bg-[#FAF7F4] py-20 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Section intro */}
          <p className="text-xs font-semibold tracking-wider text-[#F4C7C3] uppercase text-center mb-4">
            What's Inside
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] text-center mb-4">
            Creative AI Etsy<br />
            <span className="relative inline-block">
              Conversion Vault
              {/* Decorative underline */}
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 250 10" fill="none">
                <path d="M2 6C60 3 120 2 180 5C210 6 235 7 248 7" stroke="#9DB4A8" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          <p className="text-center text-[#5D4037] mb-12 max-w-2xl mx-auto">
            The exact templates, swipe files, and frameworks I use to publish
            listings that convert — organized for you to plug in and use.
          </p>

          {/* Vault items with layered preview aesthetic */}
          {/* PSYCHOLOGY: Each item shows WHAT you get, not just describes it
              Visual thumbnails reduce perceived risk */}
          <div className="space-y-8">

            {/* ITEM 1: Listing Copy Swipe Bank */}
            {/* ARTISTIC: Cards with layered shadows, slight tilt, texture overlay */}
            <div className="group relative bg-white rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_0_0_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              {/* Subtle linen texture overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjEuMiIgbnVtT2N0YXZlcz0iMyIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIi8+PC9zdmc+')]"></div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                <svg viewBox="0 0 100 100" className="text-[#F4C7C3]">
                  <circle cx="100" cy="0" r="80" fill="currentColor"/>
                </svg>
              </div>

              <div className="relative grid md:grid-cols-3 gap-6 p-8">

                {/* Left: Icon + headline */}
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#F4C7C3] rounded-xl p-3 flex-shrink-0">
                      <svg className="w-6 h-6 text-[#5D4037]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                        Listing Copy Swipe Bank
                      </h3>
                      <p className="text-[#9DB4A8] font-semibold">
                        Done-For-You Titles, Descriptions & Tag Patterns
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-[#5D4037]">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>30+ fill-in-the-blank title templates</strong> sorted by product type (planners, wall art, checklists, business templates, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Proven description frameworks</strong> so you're never staring at an empty text box</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Tag patterns</strong> you can plug in and tweak using what you learn in the challenge</span>
                    </li>
                  </ul>
                </div>

                {/* Right: Layered preview visual */}
                {/* PSYCHOLOGY: Seeing actual template screenshots
                    makes this feel real and valuable */}
                <div className="relative h-64 md:h-auto">
                  {/* Simulated stacked documents with tilt */}
                  <div className="absolute top-0 right-0 w-48 h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md transform rotate-3 p-3">
                    <div className="space-y-2">
                      <div className="h-3 bg-[#F4C7C3] rounded w-3/4"></div>
                      <div className="h-2 bg-gray-300 rounded w-full"></div>
                      <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-48 h-56 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg transform -rotate-2 p-3 border border-gray-200">
                    <div className="space-y-2">
                      <div className="h-3 bg-[#9DB4A8] rounded w-2/3"></div>
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ITEM 2: Thumbnail & Shop Visual Frameworks */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6 p-8">

                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#9DB4A8] rounded-xl p-3 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                        Thumbnail & Shop Visual Frameworks
                      </h3>
                      <p className="text-[#9DB4A8] font-semibold">
                        Canva Layouts That Look Cute *And* Convert
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-[#5D4037]">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>5 thumbnail frameworks</strong> with exact text placement, font sizing, and composition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Banner layout examples</strong> you can adapt to your brand in minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Annotated examples</strong> so you understand <em>why</em> each layout works (not just "make it pretty")</span>
                    </li>
                  </ul>
                </div>

                <div className="relative h-64 md:h-auto">
                  <div className="absolute top-0 right-0 w-48 h-56 bg-gradient-to-br from-[#F4C7C3]/20 to-[#F4C7C3]/40 rounded-lg shadow-md transform rotate-2 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto bg-white rounded-lg mb-2 shadow"></div>
                      <div className="h-2 bg-white/60 rounded w-3/4 mx-auto mb-1"></div>
                      <div className="h-2 bg-white/60 rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-48 h-56 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg transform -rotate-1 border border-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-20 h-20 mx-auto bg-[#9DB4A8] rounded-lg mb-3 shadow-md"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5 mx-auto mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3 mx-auto"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ITEM 3: Keyword & Tag Starter Sheets */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6 p-8">

                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#F4C7C3] rounded-xl p-3 flex-shrink-0">
                      <svg className="w-6 h-6 text-[#5D4037]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                        Keyword & Tag Starter Sheets
                      </h3>
                      <p className="text-[#9DB4A8] font-semibold">
                        Starter Banks For The Most Beginner-Friendly Niches
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-[#5D4037]">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Pre-built starter keyword/tag ideas</strong> for the top beginner product lanes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Simple instructions</strong> for how to customize them so you're not copying blindly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>So you can <strong>publish faster</strong> instead of spiraling on Etsy SEO for weeks</span>
                    </li>
                  </ul>
                </div>

                <div className="relative h-64 md:h-auto">
                  <div className="absolute top-0 right-0 w-48 h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md transform rotate-6 p-4">
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-[#9DB4A8] text-white text-xs px-2 py-1 rounded">keyword</div>
                      <div className="bg-[#9DB4A8] text-white text-xs px-2 py-1 rounded">tag</div>
                      <div className="bg-[#9DB4A8] text-white text-xs px-2 py-1 rounded">phrase</div>
                      <div className="bg-[#9DB4A8] text-white text-xs px-2 py-1 rounded">search</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-48 h-56 bg-white rounded-lg shadow-lg transform -rotate-3 p-4 border border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-[#F4C7C3] text-[#5D4037] text-xs px-2 py-1 rounded">planner</div>
                      <div className="bg-[#F4C7C3] text-[#5D4037] text-xs px-2 py-1 rounded">printable</div>
                      <div className="bg-[#F4C7C3] text-[#5D4037] text-xs px-2 py-1 rounded">template</div>
                      <div className="bg-[#F4C7C3] text-[#5D4037] text-xs px-2 py-1 rounded">digital</div>
                      <div className="bg-[#F4C7C3] text-[#5D4037] text-xs px-2 py-1 rounded">instant</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ITEM 4: Pricing & Offer Cheatsheet */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6 p-8">

                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#9DB4A8] rounded-xl p-3 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                        Pricing & Offer Cheatsheet
                      </h3>
                      <p className="text-[#9DB4A8] font-semibold">
                        Stop Second-Guessing Your Prices
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-[#5D4037]">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Suggested price ranges</strong> for the most common digital products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>When to discount vs when to hold your price</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>What to watch</strong> instead of obsessing over every single view</span>
                    </li>
                  </ul>
                </div>

                <div className="relative h-64 md:h-auto">
                  <div className="absolute top-0 right-0 w-48 h-56 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md transform rotate-2 p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-700 mb-2">$19</div>
                      <div className="text-xs text-green-600">Sweet spot pricing</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-48 h-56 bg-white rounded-lg shadow-lg transform -rotate-2 border border-gray-200 p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-xs text-gray-600">Planner</span>
                        <span className="text-sm font-bold text-[#2D2D2D]">$12-27</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-xs text-gray-600">Template</span>
                        <span className="text-sm font-bold text-[#2D2D2D]">$8-19</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-xs text-gray-600">Wall Art</span>
                        <span className="text-sm font-bold text-[#2D2D2D]">$5-12</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Closer text under items */}
          <p className="text-center text-[#5D4037] text-lg mt-12 max-w-2xl mx-auto font-medium bg-white rounded-lg p-6 shadow-md">
            You'll walk into the 3-day challenge already armed with my best-performing
            words, visuals and structures — so everything you learn there is <strong className="text-[#9DB4A8]">10x easier to implement</strong>.
          </p>

          {/* CTA */}
          <div className="text-center mt-8">
            <button className="w-full md:w-auto md:min-w-[450px] bg-[#F4C7C3] hover:bg-[#E8B5B0] text-[#5D4037] font-bold text-lg py-5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 mb-4">
              YES, ADD THE CONVERSION VAULT FOR $27
            </button>
            <p className="text-sm text-gray-500">Instant access • Use it alongside the challenge</p>
          </div>

        </div>
      </section>

      {/* ============================================
          SPECIAL SECTION: "FIX YOUR DEAD LISTING" CALLOUT
          PSYCHOLOGY: This is the hook for frustrated sellers
          Speaks to people who already tried and failed
          Different colored card makes it stand out as important
          Screenshot-worthy because it names a SPECIFIC pain
          ============================================ */}
      <section className="bg-gradient-to-r from-[#4A7C72] to-[#9DB4A8] py-16 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12">

            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#F4C7C3] rounded-full p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-[#5D4037]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#2D2D2D] mb-3">
                  Already Have Listings That Aren't Selling?
                </h2>
                <p className="text-lg text-[#5D4037] mb-4">
                  The <strong>worst feeling</strong> is getting views but no sales.
                  Your product might be fine — your listing just isn't converting.
                </p>
                {/* CHANGE #4: Bold one sentence to make benefit immediately scannable */}
                <p className="text-xl font-bold text-[#2D2D2D] mb-4 bg-[#FAF7F4] p-4 rounded-lg border-l-4 border-[#9DB4A8]">
                  If you already have listings but they're not getting sales, this is where you start.
                </p>
              </div>
            </div>

            {/* Before/After visual */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">

              {/* Before */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <p className="text-sm font-bold text-red-600 mb-3 uppercase">Before</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Views:</span>
                    <span className="font-bold text-[#2D2D2D]">847</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Favorites:</span>
                    <span className="font-bold text-[#2D2D2D]">23</span>
                  </div>
                  <div className="flex justify-between text-sm border-t-2 border-red-200 pt-2">
                    <span className="text-gray-600">Sales:</span>
                    <span className="font-bold text-red-600 text-lg">2</span>
                  </div>
                </div>
                <p className="text-xs text-red-600 italic">Conversion rate: 0.2% 😞</p>
              </div>

              {/* After */}
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                <p className="text-sm font-bold text-green-700 mb-3 uppercase">After Using Framework</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Views:</span>
                    <span className="font-bold text-[#2D2D2D]">912</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Favorites:</span>
                    <span className="font-bold text-[#2D2D2D]">64</span>
                  </div>
                  <div className="flex justify-between text-sm border-t-2 border-green-300 pt-2">
                    <span className="text-gray-600">Sales:</span>
                    <span className="font-bold text-green-700 text-lg">38</span>
                  </div>
                </div>
                <p className="text-xs text-green-700 italic">Conversion rate: 4.2% 🎉</p>
              </div>

            </div>

            {/* Relief copy */}
            <div className="bg-[#FAF7F4] rounded-xl p-6 border-l-4 border-[#9DB4A8]">
              <p className="text-[#5D4037] mb-3">
                The <strong>"Fix Your Dead Listing" framework</strong> inside the Vault walks you through
                <em> exactly</em> what to change — <strong>before you delete something that could actually work</strong>.
              </p>
              <ul className="space-y-2 text-sm text-[#5D4037]">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Step-by-step checklist for what to tweak if you get no views or "views but no sales"</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Before-you-delete-it questions to keep you from nuking good ideas too early</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Simple decision tree so you always know your next move</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================
          SECTION 5: VALUE ANCHOR & PRICE CONTRAST
          PSYCHOLOGY: Makes $27 feel like stealing
          Shows this normally lives in paid programs
          Reframes value: "if it helps one listing, it pays for itself"
          ============================================ */}
      <section className="bg-[#2D2D2D] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Normally Locked Inside My Programs<br />
            <span className="text-[#F4C7C3]">Today It's $27</span>
          </h2>

          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-300 mb-4">
              Pieces of this Vault live inside <strong className="text-white">higher-ticket programs</strong> where
              people pay <strong className="text-white">hundreds of dollars</strong> to get access to my systems.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              You're getting the tight, beginner-friendly version packaged specifically to use
              with this challenge — <strong className="text-[#9DB4A8]">without needing to join anything else</strong>.
            </p>

            {/* CHANGE #5: Visual price comparison - PUMPED UP */}
            {/* PSYCHOLOGY: Massive visual contrast makes $27 feel tiny
                CREATIVE CHOICE: Giant $27 (120px equivalent) vs tiny $497 creates visceral "pocket change" feeling
                Size difference = perceived value difference */}
            <div className="flex items-center justify-center gap-12 flex-wrap mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-2">Full Program Access</p>
                <p className="text-4xl font-bold text-gray-500 line-through opacity-60">$497</p>
              </div>

              <div className="text-5xl text-[#9DB4A8] font-bold">→</div>

              <div className="text-center">
                <p className="text-base text-[#F4C7C3] mb-3 font-bold uppercase tracking-wide">Just The Vault Today</p>
                <p className="text-9xl font-black text-[#F4C7C3] leading-none tracking-tight drop-shadow-lg">$27</p>
                <p className="text-sm text-gray-400 mt-3 font-medium">One-time payment • Less than dinner out</p>
              </div>
            </div>

            {/* You save callout */}
            <div className="text-center mb-6">
              <p className="inline-block bg-[#9DB4A8]/20 border-2 border-[#9DB4A8] text-[#9DB4A8] px-6 py-2 rounded-full font-bold text-lg">
                YOU SAVE $470+
              </p>
            </div>
          </div>

          {/* Value reframe - makes decision obvious */}
          <div className="bg-[#9DB4A8]/10 border-2 border-[#9DB4A8] rounded-xl p-6 mb-8">
            <p className="text-xl text-white font-medium">
              If this Vault helps you fix <strong className="text-[#9DB4A8]">even one listing</strong> and make
              a handful of extra sales, <strong className="text-[#F4C7C3]">it more than pays for itself</strong>.
            </p>
          </div>

          {/* CTA */}
          <button className="w-full md:w-auto md:min-w-[450px] bg-[#F4C7C3] hover:bg-[#E8B5B0] text-[#5D4037] font-bold text-lg py-5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 mb-4">
            YES, I WANT THE CONVERSION VAULT FOR $27
          </button>

        </div>
      </section>

      {/* ============================================
          SECTION 6: GUARANTEE
          PSYCHOLOGY: Risk reversal - removes final objection
          "No forms, no arguing" makes refund sound EASY
          Soft green = safety, trust, relief
          ============================================ */}
      <section className="bg-[#E8F4ED] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">

          {/* Trust icon */}
          <div className="inline-block bg-white rounded-full p-6 shadow-lg mb-6">
            <svg className="w-16 h-16 text-[#9DB4A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">
            Try The Conversion Vault<br />
            <span className="text-[#9DB4A8]">100% Risk-Free</span>
          </h2>

          {/* CHANGE #6: Guarantee tightened to scannable bullets */}
          {/* PSYCHOLOGY: Bullets make the guarantee easy to scan, increasing trust
              CREATIVE CHOICE: Making refund process crystal clear removes final objection */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <p className="text-lg text-[#5D4037] mb-6 font-medium">
              Here's how this works:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-[#5D4037]"><strong>Use the templates during the challenge.</strong> Fill in the blanks, customize the frameworks, apply what Bailey teaches.</span>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-[#5D4037]"><strong>Publish better listings with more confidence.</strong> Feel the difference between guessing and having a proven framework.</span>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#9DB4A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-[#5D4037]"><strong>If it didn't help, email us within 7 days for a full refund.</strong> No forms to fill out. No arguing. No weird guilt trip.</span>
              </li>
            </ul>

            <div className="bg-[#FAF7F4] border-l-4 border-[#9DB4A8] rounded-r-lg p-6">
              <p className="text-xl font-bold text-[#2D2D2D]">
                You either feel clearer publishing listings — <span className="text-[#9DB4A8]">or you don't pay</span>.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <button className="w-full md:w-auto md:min-w-[450px] bg-[#F4C7C3] hover:bg-[#E8B5B0] text-[#5D4037] font-bold text-lg py-5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 mb-2">
            YES, I WANT THE CONVERSION VAULT FOR $27
          </button>

          <p className="text-sm text-gray-600">
            <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure checkout • 7-day money-back guarantee
          </p>

        </div>
      </section>

      {/* ============================================
          SECTION 7: FAQ (OPTIONAL BUT SMART)
          PSYCHOLOGY: Addresses objections before they become reasons not to buy
          Clarifies challenge vs Vault relationship
          ============================================ */}
      <section className="bg-[#FAF7F4] py-16 px-4">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-12">
            Quick Questions
          </h2>

          <div className="space-y-4">

            {/* FAQ 1 */}
            <details className="bg-white rounded-xl shadow-md overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[#2D2D2D] hover:bg-gray-50 transition-colors flex justify-between items-center">
                <span>Is this the same content you'll cover in the 3-day challenge?</span>
                <svg className="w-5 h-5 text-[#9DB4A8] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[#5D4037]">
                <p>
                  <strong>No.</strong> The challenge teaches you <em>strategy</em> — what to sell, how to think about your listings,
                  how to use AI for income. The Vault gives you <em>plug-and-play assets</em> — the actual titles,
                  descriptions, thumbnails, and frameworks to implement what you learn faster.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-xl shadow-md overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[#2D2D2D] hover:bg-gray-50 transition-colors flex justify-between items-center">
                <span>Do I need an Etsy shop already?</span>
                <svg className="w-5 h-5 text-[#9DB4A8] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[#5D4037]">
                <p>
                  <strong>Nope.</strong> The Vault works whether you're brand new or you already have listings.
                  If you're new, you'll use the templates to publish your first products with confidence.
                  If you have existing listings, you'll use the "Fix Your Dead Listing" framework to improve what's not converting.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-xl shadow-md overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[#2D2D2D] hover:bg-gray-50 transition-colors flex justify-between items-center">
                <span>What if I can't attend every day of the challenge live?</span>
                <svg className="w-5 h-5 text-[#9DB4A8] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[#5D4037]">
                <p>
                  <strong>The Vault is still useful.</strong> You'll get replays of the challenge, and you can use
                  the Vault templates alongside those replays to implement what Bailey teaches. The templates
                  don't expire — use them whenever you're ready.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-xl shadow-md overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[#2D2D2D] hover:bg-gray-50 transition-colors flex justify-between items-center">
                <span>How do I access the Vault?</span>
                <svg className="w-5 h-5 text-[#9DB4A8] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[#5D4037]">
                <p>
                  <strong>Instantly.</strong> As soon as you complete your purchase, you'll get an email with
                  login details and download links. You can start using the templates right away — even before
                  the challenge starts.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-xl shadow-md overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[#2D2D2D] hover:bg-gray-50 transition-colors flex justify-between items-center">
                <span>Will I see this offer again?</span>
                <svg className="w-5 h-5 text-[#9DB4A8] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[#5D4037]">
                <p>
                  <strong>No.</strong> This page is designed specifically for challenge participants and only
                  shows once during registration. If you leave without purchasing, you won't see this $27 offer again.
                </p>
              </div>
            </details>

          </div>

        </div>
      </section>

      {/* ============================================
          SECTION 8: FINAL CTA + FOOTER
          PSYCHOLOGY: Last chance to convert before they exit
          Repeats main benefit (ease + confidence)
          Footer builds trust (privacy, legitimacy)
          ============================================ */}
      <section className="bg-gradient-to-b from-[#2D2D2D] to-black py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to publish listings with <span className="text-[#F4C7C3]">confidence</span> instead of <span className="text-gray-400">guessing</span>?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Grab the Conversion Vault for $27 and walk into the challenge with
            the exact words, thumbnails, and frameworks I use.
          </p>

          <button className="w-full md:w-auto md:min-w-[500px] bg-[#F4C7C3] hover:bg-[#E8B5B0] text-[#5D4037] font-bold text-xl py-6 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 mb-4">
            YES, ADD THE VAULT FOR JUST $27
          </button>

          <p className="text-sm text-gray-400 mb-12">
            <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure payment • Instant access • 7-day money-back guarantee
          </p>

          <div className="border-t border-gray-700 pt-8">
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-sm block mb-4">
              No thanks, I'll join the challenge without the Vault →
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
          <p className="text-xs text-gray-600">
            Etsy is a trademark of Etsy, Inc. This product is not endorsed by or affiliated with Etsy.
          </p>
        </div>
      </footer>

      {/* CHANGE #7: Mobile-only sticky CTA bar */}
      {/* PSYCHOLOGY: On mobile, people scroll long and forget the button
          Sticky CTA recaptures attention without being intrusive
          Only shows after first CTA scroll to avoid immediate pressure
          CREATIVE CHOICE: Compact design with price emphasis keeps urgency visible */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#F4C7C3] to-[#E8B5B0] border-t-2 border-[#5D4037]/10 shadow-2xl px-4 py-3 animate-slide-up">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-shrink-0">
            <p className="text-xs text-[#5D4037] font-semibold uppercase tracking-wide">One-Time Offer</p>
            <p className="text-2xl font-black text-[#5D4037]">$27</p>
          </div>
          <button className="flex-1 bg-[#5D4037] hover:bg-[#4A332B] text-white font-bold text-sm py-4 px-4 rounded-full shadow-lg transition-all duration-200">
            Get the Conversion Vault →
          </button>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden by sticky bar on mobile */}
      <div className="md:hidden h-20"></div>

    </div>
  );
}
