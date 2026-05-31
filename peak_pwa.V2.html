<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="PEAK">
<meta name="theme-color" content="#06060e">
<link rel="apple-touch-icon" href="icon.png">
<title>PEAK</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&family=Syne:wght@400;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
:root{
  --bg:#06060e;--bg2:#0c0c18;--bg3:#12121e;--bg4:#181828;
  --card:#0f0f1c;--line:#1e1e2e;--line2:#282838;
  --ink:#eeeef5;--ink2:#9898b0;--ink3:#55556a;
  --red:#ff3b3b;--orange:#ff6b35;--teal:#00e5aa;
  --blue:#3d9eff;--gold:#ffd166;--green:#06d6a0;--purple:#a78bfa;
  --safe-t:env(safe-area-inset-top,44px);
  --safe-b:env(safe-area-inset-bottom,34px);
  --nav:calc(60px + var(--safe-b));
}
html,body{height:100%;background:var(--bg);color:var(--ink);overflow:hidden}
body{font-family:'Syne',sans-serif;position:fixed;width:100%;height:100%}
#app{height:100%;display:flex;flex-direction:column}
.screen{display:none;flex:1;overflow-y:auto;overflow-x:hidden;padding-bottom:calc(var(--nav) + 10px);-webkit-overflow-scrolling:touch}
.screen.active{display:block}

/* Header */
.hdr{padding:calc(var(--safe-t) + 4px) 20px 12px;background:var(--bg);border-bottom:1px solid var(--line);flex-shrink:0;display:flex;align-items:center;justify-content:space-between;position:relative}
.hdr::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,var(--red),var(--orange),transparent)}
.logo{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:5px;background:linear-gradient(110deg,var(--red),var(--orange));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hdr-r{text-align:right}
.hdr-date{font-family:'DM Mono',monospace;font-size:11px;color:var(--ink3)}
.hdr-wt{font-family:'Bebas Neue',sans-serif;font-size:18px;color:var(--teal);letter-spacing:2px;margin-top:1px}

/* Nav */
.nav{position:fixed;bottom:0;left:0;right:0;height:var(--nav);background:rgba(6,6,14,.97);border-top:1px solid var(--line);display:flex;align-items:flex-start;padding-top:8px;z-index:100;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
.ni{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;padding:2px 0;transition:all .2s}
.ni-ico{font-size:18px;line-height:1}
.ni-lbl{font-size:9px;color:var(--ink3);font-weight:700;letter-spacing:.8px;text-transform:uppercase;font-family:'DM Mono',monospace}
.ni.on .ni-lbl{color:var(--red)}
.ni.on .ni-ico{transform:scale(1.1)}

/* Layout */
.pg-hd{padding:18px 18px 8px;display:flex;align-items:flex-end;justify-content:space-between}
.pg-title{font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:3px;line-height:1}
.pg-sub{font-family:'DM Mono',monospace;font-size:10px;color:var(--ink3)}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;margin:0 14px 12px}
.ctitle{font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:2.5px;color:var(--ink3);margin-bottom:12px}
.pad{padding:0 14px}
.sp{height:14px}
.hr{height:1px;background:var(--line);margin:8px 14px}
.empty{text-align:center;color:var(--ink3);padding:28px;font-family:'DM Mono',monospace;font-size:12px}

/* KPIs */
.kpi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:8px 14px 4px}
.kpi{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:13px 10px;text-align:center;position:relative;overflow:hidden}
.kpi::before{content:'';position:absolute;top:0;left:0;right:0;height:2px}
.kpi.ct::before{background:var(--teal)}.kpi.cr::before{background:var(--red)}.kpi.cb::before{background:var(--blue)}.kpi.cg::before{background:var(--gold)}.kpi.cgr::before{background:var(--green)}.kpi.cp::before{background:var(--purple)}
.kpi-v{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:1px;line-height:1}
.kpi-l{font-family:'DM Mono',monospace;font-size:9px;color:var(--ink3);margin-top:4px;letter-spacing:.5px;text-transform:uppercase}

/* Banner */
.banner{margin:4px 14px;padding:12px 16px;border-radius:12px;font-family:'Bebas Neue',sans-serif;font-size:16px;letter-spacing:2.5px;text-align:center}
.banner.good{background:rgba(6,214,160,.08);color:var(--green);border:1px solid rgba(6,214,160,.2)}
.banner.warn{background:rgba(255,209,102,.07);color:var(--gold);border:1px solid rgba(255,209,102,.18)}

/* Progress */
.pb-wrap{margin-bottom:13px}
.pb-row{display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px}
.pb-lbl{color:var(--ink2)}
.pb-val{font-family:'DM Mono',monospace;font-weight:500}
.pb{height:4px;background:var(--line2);border-radius:2px;overflow:hidden}
.pb-fill{height:100%;border-radius:2px;transition:width .6s cubic-bezier(.4,0,.2,1)}

/* Inputs */
.ig{margin-bottom:14px}
.lbl{font-family:'DM Mono',monospace;font-size:10px;color:var(--ink3);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;display:block}
input,select,textarea{width:100%;background:var(--bg4);border:1px solid var(--line2);border-radius:10px;color:var(--ink);font-family:'Syne',sans-serif;font-size:16px;padding:12px 14px;outline:none;appearance:none;-webkit-appearance:none;transition:border-color .2s}
input:focus,select:focus,textarea:focus{border-color:var(--red);background:var(--bg3)}
input::placeholder{color:var(--ink3)}
select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2355556a'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:36px}
textarea{resize:none;height:76px;font-size:14px}
.r2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}
.r3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px}

/* Buttons */
.btn{width:100%;padding:15px;border-radius:12px;border:none;font-family:'Bebas Neue',sans-serif;font-size:17px;letter-spacing:2.5px;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center;gap:8px}
.btn:active{transform:scale(.97)}
.btn-fire{background:linear-gradient(135deg,var(--red),var(--orange));color:#fff}
.btn-teal{background:linear-gradient(135deg,var(--teal),#00b588);color:#06060e;font-weight:700}
.btn-ghost{background:var(--bg4);color:var(--ink2);border:1px solid var(--line2);font-family:'Syne',sans-serif;font-size:13px;font-weight:600;letter-spacing:.5px;padding:11px}
.btn-sm{width:auto;padding:8px 16px;font-size:13px;font-family:'Syne',sans-serif;font-weight:700;letter-spacing:.5px;border-radius:9px}

/* Chips */
.chips{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px}
.chip{padding:8px 14px;border-radius:20px;border:1px solid var(--line2);font-family:'DM Mono',monospace;font-size:11px;cursor:pointer;color:var(--ink3);background:var(--bg4);transition:all .15s}
.chip.on{background:rgba(255,59,59,.12);border-color:var(--red);color:var(--red)}

/* Meals */
.meal{background:var(--card);border:1px solid var(--line);border-radius:16px;margin-bottom:10px;overflow:hidden}
.meal-hd{padding:13px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)}
.meal-name{font-weight:700;font-size:14px}
.meal-mac{font-family:'DM Mono',monospace;font-size:10px;color:var(--ink3);margin-top:2px}
.meal-badge{font-family:'DM Mono',monospace;font-size:10px;padding:4px 10px;border-radius:7px}
.meal-badge.logged{background:rgba(6,214,160,.12);color:var(--green);border:1px solid rgba(6,214,160,.2)}
.meal-badge.pending{background:rgba(255,59,59,.1);color:var(--red);border:1px solid rgba(255,59,59,.2)}
.meal-body{padding:12px 16px}
.meal-line{font-family:'DM Mono',monospace;font-size:12px;color:var(--ink3);padding:4px 0;border-bottom:1px solid var(--line);display:flex;justify-content:space-between}
.meal-line:last-of-type{border-bottom:none}
.meal-line b{color:var(--ink);font-weight:500}
.swap-row{display:flex;gap:7px;margin-top:10px}
.swap-btn{flex:1;padding:8px;border-radius:9px;border:1px solid var(--line2);background:var(--bg4);color:var(--ink3);font-family:'DM Mono',monospace;font-size:11px;cursor:pointer;text-align:center;transition:all .15s}
.swap-btn.on{border-color:var(--teal);color:var(--teal);background:rgba(0,229,170,.07)}

/* Nutrition total */
.nut-tot{background:linear-gradient(135deg,rgba(255,59,59,.07),rgba(255,107,53,.04));border:1px solid rgba(255,59,59,.15);border-radius:14px;padding:14px 16px;margin-bottom:14px}
.nt-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:7px}
.nt-row:last-child{margin-bottom:0}
.nt-lbl{font-family:'DM Mono',monospace;font-size:11px;color:var(--ink3)}
.nt-val{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:1px}

/* Exercise blocks */
.ex-block{background:var(--bg4);border:1px solid var(--line2);border-radius:13px;padding:14px;margin-bottom:11px}
.ex-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.ex-name{font-weight:700;font-size:14px}
.add-set-btn{background:rgba(255,59,59,.12);border:1px solid rgba(255,59,59,.25);color:var(--red);border-radius:8px;padding:5px 12px;font-family:'DM Mono',monospace;font-size:11px;cursor:pointer}
.last-sess{background:rgba(0,229,170,.05);border:1px solid rgba(0,229,170,.15);border-radius:9px;padding:9px 12px;margin-bottom:10px}
.ls-ttl{font-family:'DM Mono',monospace;font-size:10px;color:var(--teal);letter-spacing:1px;text-transform:uppercase;margin-bottom:5px}
.ls-sets{display:flex;flex-wrap:wrap;gap:5px}
.ls-set{background:rgba(0,229,170,.1);border-radius:5px;padding:3px 8px;font-family:'DM Mono',monospace;font-size:11px;color:var(--teal)}
.no-prev{background:rgba(85,85,106,.07);border:1px solid rgba(85,85,106,.15);border-radius:9px;padding:8px 12px;margin-bottom:10px;font-family:'DM Mono',monospace;font-size:11px;color:var(--ink3)}
.set-row{display:flex;align-items:center;gap:8px;margin-bottom:7px;background:var(--bg3);border-radius:9px;padding:9px 12px;border:1px solid var(--line)}
.set-n{font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--red);width:22px;flex-shrink:0}
.set-f{display:flex;flex-direction:column;flex:1}
.set-i{flex:1;background:transparent;border:none;border-bottom:1px solid var(--line2);border-radius:0;padding:3px 0;font-size:15px;font-family:'DM Mono',monospace;color:var(--ink);text-align:center}
.set-i:focus{border-color:var(--red);outline:none;background:transparent}
.set-lbl{font-family:'DM Mono',monospace;font-size:9px;color:var(--ink3);text-align:center;margin-top:2px;letter-spacing:.5px;text-transform:uppercase}
.del-btn{background:none;border:none;color:var(--ink3);font-size:17px;cursor:pointer;padding:4px;flex-shrink:0}

/* History */
.hist-item{padding:13px 16px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between}
.hist-item:last-child{border-bottom:none}
.hist-main{font-weight:600;font-size:14px}
.hist-sub{font-family:'DM Mono',monospace;font-size:11px;color:var(--ink3);margin-top:2px}
.badge{font-family:'DM Mono',monospace;font-size:10px;padding:4px 10px;border-radius:8px;font-weight:500;flex-shrink:0}
.badge-g{background:rgba(6,214,160,.12);color:var(--green)}
.badge-r{background:rgba(255,59,59,.12);color:var(--red)}

/* Lifts */
.lift-row{display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--line)}
.lift-row:last-child{border-bottom:none}
.lift-name{font-size:13px;color:var(--ink2)}
.lift-kg{font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--teal)}
.lift-u{font-family:'DM Mono',monospace;font-size:10px;color:var(--ink3)}

/* Steps */
.steps-box{background:var(--card);border:1px solid var(--line);border-radius:13px;padding:13px;margin-bottom:14px}

/* Settings */
.srow{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--line);font-size:14px}
.srow:last-child{border-bottom:none}
.srow-lbl{color:var(--ink2)}
.srow-val{font-family:'DM Mono',monospace;font-size:11px;color:var(--ink3);text-align:right;max-width:190px;word-break:break-all}
.srow-val.ok{color:var(--teal)}

/* Data tables */
.ds{margin:0 14px 16px}
.ds-ttl{font-family:'Bebas Neue',sans-serif;font-size:16px;letter-spacing:2px;color:var(--ink2);margin-bottom:8px}
.dtbl{width:100%;border-collapse:collapse;font-size:12px}
.dtbl th{background:var(--bg4);font-family:'DM Mono',monospace;font-size:10px;color:var(--ink3);letter-spacing:.5px;padding:8px 10px;text-align:left;border-bottom:1px solid var(--line2)}
.dtbl td{padding:8px 10px;border-bottom:1px solid var(--line);color:var(--ink2);font-family:'DM Mono',monospace}
.dtbl tr:last-child td{border-bottom:none}

/* Modal */
.modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:200;overflow-y:auto;padding:calc(var(--safe-t) + 16px) 16px calc(var(--safe-b) + 24px)}
.modal.open{display:block}
.modal-inner{max-width:500px;margin:0 auto}
.modal-title{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:3px;background:linear-gradient(110deg,var(--red),var(--orange));-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center;margin-bottom:4px}
.modal-sub{font-family:'DM Mono',monospace;font-size:11px;color:var(--ink3);text-align:center;margin-bottom:22px}
.setup-step{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:13px;display:flex;gap:12px;align-items:flex-start;margin-bottom:8px}
.step-n{font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--red);width:24px;flex-shrink:0;line-height:1.1}
.step-txt{font-size:13px;color:var(--ink3);line-height:1.5}
.step-txt strong{color:var(--ink);display:block;margin-bottom:1px}
.status-box{background:var(--card);border:1px solid var(--line);border-radius:11px;padding:12px;margin-top:14px}
.status-lbl{font-family:'DM Mono',monospace;font-size:10px;color:var(--ink3);letter-spacing:1px;text-transform:uppercase;margin-bottom:5px}
.status-val{font-family:'DM Mono',monospace;font-size:12px;font-weight:500;color:var(--ink2)}

/* Toast */
#toast{position:fixed;bottom:calc(var(--nav) + 14px);left:50%;transform:translateX(-50%) translateY(16px);background:var(--bg3);border:1px solid var(--line2);border-radius:11px;padding:11px 20px;font-family:'DM Mono',monospace;font-size:13px;font-weight:500;opacity:0;transition:all .25s;z-index:300;white-space:nowrap;backdrop-filter:blur(20px)}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
#toast.ok{border-color:var(--teal);color:var(--teal)}
#toast.err{border-color:var(--red);color:var(--red)}

/* ── Rest Timer ── */
.timer-ov{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:400;flex-direction:column;align-items:center;justify-content:center;gap:16px}
.timer-ov.show{display:flex}
.timer-ring{width:200px;height:200px;position:relative;flex-shrink:0}
.timer-ring svg{transform:rotate(-90deg)}
.timer-circle-bg{fill:none;stroke:var(--line2);stroke-width:10}
.timer-circle-fg{fill:none;stroke:var(--teal);stroke-width:10;stroke-linecap:round;transition:stroke-dashoffset .97s linear;stroke-dasharray:565;stroke-dashoffset:0}
.timer-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:58px;letter-spacing:2px;color:var(--ink)}
.timer-lbl{font-family:'DM Mono',monospace;font-size:11px;color:var(--ink3);letter-spacing:2px;text-transform:uppercase}
.timer-presets{display:flex;gap:10px}
.tpreset{padding:9px 22px;border-radius:20px;border:1px solid var(--line2);background:var(--bg4);color:var(--ink3);font-family:'DM Mono',monospace;font-size:12px;cursor:pointer;transition:all .15s}
.tpreset.on{border-color:var(--teal);color:var(--teal);background:rgba(0,229,170,.08)}
.timer-actions{display:flex;gap:10px}
.tbtn{padding:11px 28px;border-radius:10px;border:none;font-family:'Bebas Neue',sans-serif;font-size:16px;letter-spacing:1.5px;cursor:pointer;transition:all .15s}
.tbtn:active{transform:scale(.96)}
.tbtn-add{background:rgba(0,229,170,.12);color:var(--teal);border:1px solid rgba(0,229,170,.2)}
.tbtn-skip{background:var(--bg4);color:var(--ink2);border:1px solid var(--line2)}

/* ── Next session / streak ── */
.next-band{margin:6px 14px;padding:11px 16px;border-radius:12px;background:rgba(61,158,255,.07);border:1px solid rgba(61,158,255,.18);display:flex;align-items:center;justify-content:space-between}
.next-lbl{font-family:'DM Mono',monospace;font-size:10px;color:var(--ink3);letter-spacing:1px;text-transform:uppercase;margin-bottom:3px}
.next-val{font-family:'Bebas Neue',sans-serif;font-size:17px;letter-spacing:2px;color:var(--blue)}
.streak-band{margin:6px 14px 2px;padding:10px 16px;border-radius:12px;background:rgba(255,209,102,.07);border:1px solid rgba(255,209,102,.18);display:flex;align-items:center;gap:10px}
.streak-ico{font-size:20px}
.streak-txt{font-family:'Bebas Neue',sans-serif;font-size:16px;letter-spacing:1.5px;color:var(--gold)}
.streak-sub{font-family:'DM Mono',monospace;font-size:10px;color:var(--ink3);margin-top:1px}

/* ── Calories remaining ── */
.cal-rem-box{background:linear-gradient(135deg,rgba(6,214,160,.07),rgba(61,158,255,.04));border:1px solid rgba(6,214,160,.18);border-radius:12px;padding:12px 16px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between}
.cal-rem-v{font-family:'Bebas Neue',sans-serif;font-size:34px;letter-spacing:1px}
.cal-rem-l{font-family:'DM Mono',monospace;font-size:10px;color:var(--ink3);letter-spacing:.5px;text-transform:uppercase;margin-top:2px}
.cal-rem-r{text-align:right;font-family:'DM Mono',monospace;font-size:11px;color:var(--ink3);line-height:1.6}

/* ── Copy last sets btn ── */
.copy-btn{width:100%;padding:9px;background:rgba(0,229,170,.06);border:1px solid rgba(0,229,170,.15);border-radius:8px;color:var(--teal);font-family:'DM Mono',monospace;font-size:11px;cursor:pointer;letter-spacing:.5px;margin-bottom:10px;text-align:center;transition:all .15s}
.copy-btn:active{transform:scale(.97)}

/* ── BW prefill hint ── */
.bw-hint{font-family:'DM Mono',monospace;font-size:11px;color:var(--teal);cursor:pointer;margin-top:4px;display:none}
.bw-hint:hover{text-decoration:underline}

/* ── Dim mode ── */
.dim-btn{position:fixed;top:calc(var(--safe-t) + 8px);right:16px;z-index:500;background:rgba(6,6,14,.85);border:1px solid var(--line2);border-radius:8px;padding:7px 11px;font-size:17px;cursor:pointer;backdrop-filter:blur(8px);transition:all .2s}
body.dim-mode{filter:brightness(.35)}
body.dim-mode .dim-btn{filter:brightness(2.8)}

/* ── Weekly summary ── */
.wk-sum{margin:0 14px 12px}
.wk-sum-title{font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:2.5px;color:var(--ink3);margin-bottom:10px}
.wk-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--line);font-size:13px}
.wk-row:last-child{border-bottom:none}
.wk-row-lbl{color:var(--ink3);font-family:'DM Mono',monospace;font-size:11px}
.wk-row-val{font-family:'Bebas Neue',sans-serif;font-size:18px;letter-spacing:1px}

</style>
</head>
<body>
<div id="app">

<!-- HEADER -->
<div class="hdr">
  <div><div class="logo">PEAK</div></div>
  <div class="hdr-r">
    <div class="hdr-date" id="hdr-date"></div>
    <div class="hdr-wt" id="hdr-wt"></div>
  </div>
</div>

<!-- ===== DASHBOARD ===== -->
<div class="screen active" id="sc-dash">
  <div class="pg-hd"><div class="pg-title">This Week</div><div class="pg-sub" id="week-range"></div></div>
  <div id="banner" class="banner warn">PUSH MORE</div>
  <div id="streak-band" class="streak-band" style="display:none">
    <span class="streak-ico">&#128293;</span>
    <div><div class="streak-txt" id="streak-num">0 DAY STREAK</div><div class="streak-sub" id="streak-sub">Keep going</div></div>
  </div>
  <div class="next-band">
    <div><div class="next-lbl">Next Session</div><div class="next-val" id="next-sess">-</div></div>
    <div style="font-size:22px;color:var(--blue);opacity:.5">&#8594;</div>
  </div>
  <div class="kpi-grid">
    <div class="kpi ct"><div class="kpi-v" id="k-wt" style="color:var(--teal)">-</div><div class="kpi-l">Body kg</div></div>
    <div class="kpi cr"><div class="kpi-v" id="k-sess" style="color:var(--red)">0</div><div class="kpi-l">Sessions</div></div>
    <div class="kpi cb"><div class="kpi-v" id="k-steps" style="color:var(--blue)">-</div><div class="kpi-l">Steps</div></div>
    <div class="kpi cg"><div class="kpi-v" id="k-cal" style="color:var(--gold)">-</div><div class="kpi-l">Avg kcal</div></div>
    <div class="kpi cgr"><div class="kpi-v" id="k-prot" style="color:var(--green)">-</div><div class="kpi-l">Avg prot</div></div>
    <div class="kpi cp"><div class="kpi-v" style="color:var(--purple)">83</div><div class="kpi-l">Target kg</div></div>
  </div>
  <div class="card">
    <div class="ctitle">Weekly Goals</div>
    <div class="pb-wrap"><div class="pb-row"><span class="pb-lbl">Workouts (4 per week)</span><span class="pb-val" id="pgw-v" style="color:var(--teal)">0/4</span></div><div class="pb"><div class="pb-fill" id="pgw" style="width:0%;background:var(--teal)"></div></div></div>
    <div class="pb-wrap"><div class="pb-row"><span class="pb-lbl">Protein avg (190g)</span><span class="pb-val" id="pgp-v" style="color:var(--red)">0g</span></div><div class="pb"><div class="pb-fill" id="pgp" style="width:0%;background:var(--red)"></div></div></div>
    <div class="pb-wrap" style="margin-bottom:0"><div class="pb-row"><span class="pb-lbl">Steps today (10k)</span><span class="pb-val" id="pgs-v" style="color:var(--blue)">0</span></div><div class="pb"><div class="pb-fill" id="pgs" style="width:0%;background:var(--blue)"></div></div></div>
  </div>
  <div class="card" id="wk-sum-card">
    <div class="ctitle">This Week</div>
    <div class="wk-row"><span class="wk-row-lbl">Sessions completed</span><span class="wk-row-val" id="ws-sessions" style="color:var(--red)">0 / 4</span></div>
    <div class="wk-row"><span class="wk-row-lbl">Avg calories</span><span class="wk-row-val" id="ws-cal" style="color:var(--gold)">-</span></div>
    <div class="wk-row"><span class="wk-row-lbl">Avg protein</span><span class="wk-row-val" id="ws-prot" style="color:var(--teal)">-</span></div>
    <div class="wk-row"><span class="wk-row-lbl">Total boxing rounds</span><span class="wk-row-val" id="ws-boxing" style="color:var(--purple)">0</span></div>
    <div class="wk-row"><span class="wk-row-lbl">Weight change</span><span class="wk-row-val" id="ws-wt-chg">-</span></div>
  </div>
  <div class="card"><div class="ctitle">Best Lifts</div><div id="best-lifts"><div class="empty">Log your first session to see records</div></div></div>
  <div class="sp"></div>
</div>

<!-- ===== LOG SESSION ===== -->
<div class="screen" id="sc-log">
  <div class="pg-hd"><div class="pg-title">Log Session</div></div>
  <div class="pad">
    <div class="ig">
      <span class="lbl">Session Type</span>
      <div class="chips" id="wtype">
        <div class="chip on" data-v="Upper 1 (Push)" onclick="chip(this,'wtype')">U1 PUSH</div>
        <div class="chip" data-v="Lower 1 (Quads)" onclick="chip(this,'wtype')">L1 QUAD</div>
        <div class="chip" data-v="Upper 2 (Pull)" onclick="chip(this,'wtype')">U2 PULL</div>
        <div class="chip" data-v="Lower 2 (Posterior)" onclick="chip(this,'wtype')">L2 POST</div>
        <div class="chip" data-v="Rest" onclick="chip(this,'wtype')">REST</div>
      </div>
    </div>
    <div class="r2"><div><span class="lbl">Date</span><input type="date" id="l-date"></div><div>
          <span class="lbl">Body Weight kg</span>
          <input type="number" id="l-bw" placeholder="93" step="0.1">
          <div class="bw-hint" id="bw-hint" onclick="prefillBW()">&#8634; Use last recorded weight</div>
        </div></div>
    <div class="r2"><div><span class="lbl">Duration min</span><input type="number" id="l-dur" placeholder="65"></div><div><span class="lbl">Intensity 1-10</span><input type="number" id="l-int" placeholder="8" min="1" max="10"></div></div>
    <div class="card" style="margin:0 0 14px;padding:14px">
      <div class="ctitle" style="margin-bottom:10px">Cardio and Boxing</div>
      <div class="r3"><div><span class="lbl">Boxing Rds</span><input type="number" id="l-box" placeholder="5"></div><div><span class="lbl">Steps</span><input type="number" id="l-steps" placeholder="10000"></div><div><span class="lbl">Cardio min</span><input type="number" id="l-cardio" placeholder="0"></div></div>
      <div class="r2" style="margin-bottom:0">
        <div><span class="lbl">Boxing Done</span><div class="chips" id="box-done" style="margin-bottom:0"><div class="chip on" data-v="Yes" onclick="chip(this,'box-done')">YES</div><div class="chip" data-v="No" onclick="chip(this,'box-done')">NO</div></div></div>
        <div><span class="lbl">Cardio Done</span><div class="chips" id="cardio-done" style="margin-bottom:0"><div class="chip on" data-v="Yes" onclick="chip(this,'cardio-done')">YES</div><div class="chip" data-v="No" onclick="chip(this,'cardio-done')">NO</div></div></div>
      </div>
    </div>
    <div class="ig"><span class="lbl">Notes</span><textarea id="l-notes" placeholder="How did it feel?"></textarea></div>
    <button class="btn btn-fire" onclick="saveSession()">LOG SESSION</button>
    <div class="sp"></div>
  </div>
</div>

<!-- ===== STRENGTH ===== -->
<div class="screen" id="sc-str">
  <div class="pg-hd"><div class="pg-title">Strength Log</div><div class="pg-sub">Last session shown per lift</div></div>
  <div class="pad">
    <div class="r2">
      <div><span class="lbl">Date</span><input type="date" id="s-date"></div>
      <div><span class="lbl">Session</span>
        <select id="s-type">
          <option value="Upper 1 (Push)">UPPER 1 - PUSH</option>
          <option value="Lower 1 (Quads)">LOWER 1 - QUADS</option>
          <option value="Upper 2 (Pull)">UPPER 2 - PULL</option>
          <option value="Lower 2 (Posterior)">LOWER 2 - POSTERIOR</option>
        </select>
      </div>
    </div>
    <div class="ig">
      <span class="lbl">Add Exercise</span>
      <div style="display:flex;gap:8px">
        <select id="s-ex" style="flex:1">
          <optgroup label="UPPER 1 - PUSH">
            <option>Incline Barbell Press</option><option>Cable Push Machine</option><option>Machine OHP</option><option>Lateral Raises</option><option>Cable Preacher Curls</option><option>Hammer Curls</option><option>Chest Supported Row</option><option>Tricep Pushdowns</option>
          </optgroup>
          <optgroup label="LOWER 1 - QUADS">
            <option>Hack Squat</option><option>Leg Extensions</option><option>Barbell Sissy Squats</option><option>Tibialis Raises</option><option>Cable Crunches</option><option>Decline Crunches</option>
          </optgroup>
          <optgroup label="UPPER 2 - PULL">
            <option>Chest Supported Row</option><option>FW Lat Pulldown</option><option>Shrugs</option><option>Rear Delts</option><option>Incline Barbell Press</option><option>Lateral Raises</option><option>Overhead Triceps</option>
          </optgroup>
          <optgroup label="LOWER 2 - POSTERIOR">
            <option>RDL</option><option>Leg Curls</option><option>Laying Leg Curls</option><option>Calves</option><option>Cable Crunches</option><option>Decline Crunches</option>
          </optgroup>
        </select>
        <button class="btn btn-fire btn-sm" onclick="addEx()">ADD</button>
      </div>
    </div>
    <div id="ex-blocks"></div>
    <button class="btn btn-teal" id="s-save" style="display:none" onclick="saveStrength()">SAVE ALL SETS</button>
    <div class="sp"></div>
  </div>
</div>

<!-- ===== NUTRITION ===== -->
<div class="screen" id="sc-nut">
  <div class="pg-hd"><div class="pg-title">Nutrition</div><div class="pg-sub">2065 kcal - 190g protein</div></div>
  <div class="pad">
    <div class="ig"><span class="lbl">Date</span><input type="date" id="n-date"></div>
    <div class="cal-rem-box">
      <div>
        <div class="cal-rem-v" id="cal-rem" style="color:var(--teal)">2065</div>
        <div class="cal-rem-l">Calories remaining</div>
      </div>
      <div class="cal-rem-r" id="cal-rem-r">0 of 2065 logged<br>Target: 2065 kcal</div>
    </div>
    <div class="nut-tot">
      <div class="nt-row"><span class="nt-lbl">Total Calories</span><span class="nt-val" id="nt-cal" style="color:var(--gold)">0</span></div>
      <div class="nt-row"><span class="nt-lbl">Total Protein</span><span class="nt-val" id="nt-prot" style="color:var(--teal)">0g</span></div>
      <div class="pb" style="margin-top:6px"><div class="pb-fill" id="nt-prog" style="width:0%;background:linear-gradient(90deg,var(--red),var(--orange))"></div></div>
    </div>

    <div class="meal">
      <div class="meal-hd"><div><div class="meal-name">Meal 1 - Breakfast</div><div class="meal-mac">67g protein - 580 kcal</div></div><div class="meal-badge pending" id="m1b">Pending</div></div>
      <div class="meal-body">
        <div class="meal-line">4 scrambled eggs<b>27g P - 280 kcal</b></div>
        <div class="meal-line">MyProtein scoop + 300ml whole milk<b>40g P - 300 kcal</b></div>
        <div class="meal-line">Coffee with milk<b>~20 kcal</b></div>
        <button class="btn btn-fire" style="margin-top:12px;font-size:15px;padding:12px" onclick="logMeal(1,67,580,230,30)">LOG MEAL 1</button>
      </div>
    </div>

    <div class="meal">
      <div class="meal-hd"><div><div class="meal-name">Meal 2 - Chicken Salad</div><div class="meal-mac">50g protein - 175 kcal</div></div><div class="meal-badge pending" id="m2b">Pending</div></div>
      <div class="meal-body">
        <div class="meal-line">160g boiled chicken breast<b>50g P - 168 kcal</b></div>
        <div class="meal-line">Mixed salad leaves<b>~7 kcal</b></div>
        <div class="meal-line">No dressing</div>
        <button class="btn btn-fire" style="margin-top:12px;font-size:15px;padding:12px" onclick="logMeal(2,50,175,2,4)">LOG MEAL 2</button>
      </div>
    </div>

    <div class="meal">
      <div class="meal-hd"><div><div class="meal-name">Meal 3 - Main Meal</div><div class="meal-mac" id="m3mac">45g protein - 700 kcal</div></div><div class="meal-badge pending" id="m3b">Pending</div></div>
      <div class="meal-body">
        <div class="meal-line">Home curry + 80-100g extra chicken</div>
        <div class="swap-row"><div class="swap-btn on" id="sw-roti" onclick="swapBase('roti')">ROTI</div><div class="swap-btn" id="sw-rice" onclick="swapBase('rice')">RICE</div></div>
        <div class="swap-row"><div class="swap-btn on" id="sw-chicken" onclick="swapProt('chicken')">CHICKEN</div><div class="swap-btn" id="sw-lentils" onclick="swapProt('lentils')">LENTILS</div><div class="swap-btn" id="sw-lamb" onclick="swapProt('lamb')">LAMB</div></div>
        <button class="btn btn-fire" style="margin-top:12px;font-size:15px;padding:12px" onclick="logMeal3()">LOG MEAL 3</button>
      </div>
    </div>

    <div class="meal">
      <div class="meal-hd"><div><div class="meal-name">Meal 4 - Evening</div><div class="meal-mac">18g protein - 270 kcal</div></div><div class="meal-badge pending" id="m4b">Pending</div></div>
      <div class="meal-body">
        <div class="meal-line">150g low fat Greek yogurt<b>15g P - 90 kcal</b></div>
        <div class="meal-line">Apple + kiwi + banana or grapes<b>3g P - 180 kcal</b></div>
        <div class="meal-line">5g creatine</div>
        <button class="btn btn-fire" style="margin-top:12px;font-size:15px;padding:12px" onclick="logMeal(4,18,270,45,8)">LOG MEAL 4</button>
      </div>
    </div>


    <!-- SNACK -->
    <div class="meal" id="snack-card">
      <div class="meal-hd">
        <div>
          <div class="meal-name">Snack (optional)</div>
          <div class="meal-mac" id="snack-mac">Max 200 kcal - use your flex buffer</div>
        </div>
        <div class="meal-badge pending" id="snack-badge">Pending</div>
      </div>
      <div class="meal-body">
        <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--ink3);margin-bottom:10px;line-height:1.5">
          Only log if needed. Comes out of your 200-300 kcal flex buffer. Training days only recommended.
        </div>
        <div class="r2" style="margin-bottom:10px">
          <div>
            <span class="lbl">Calories</span>
            <input type="number" id="snack-cal" placeholder="100" max="200" oninput="updSnackPreview()">
          </div>
          <div>
            <span class="lbl">Protein g</span>
            <input type="number" id="snack-prot" placeholder="0" step="1" oninput="updSnackPreview()">
          </div>
        </div>
        <div class="ig" style="margin-bottom:12px">
          <span class="lbl">What was it?</span>
          <input type="text" id="snack-desc" placeholder="e.g. Greek yogurt, handful of nuts">
        </div>
        <div id="snack-warning" style="display:none;background:rgba(255,59,59,.08);border:1px solid rgba(255,59,59,.2);border-radius:8px;padding:9px 12px;font-family:'DM Mono',monospace;font-size:11px;color:var(--red);margin-bottom:10px">
          Over 200 kcal limit - reduce to stay within your buffer
        </div>
        <div id="snack-cal-bar" style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;font-size:11px;font-family:'DM Mono',monospace;margin-bottom:5px">
            <span style="color:var(--ink3)">Snack budget</span>
            <span id="snack-bar-txt" style="color:var(--teal)">0 / 200 kcal</span>
          </div>
          <div class="pb"><div class="pb-fill" id="snack-prog" style="width:0%;background:var(--teal)"></div></div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-fire" style="font-size:15px;padding:12px;flex:1" onclick="logSnack()">LOG SNACK</button>
          <button class="btn btn-ghost" style="width:auto;padding:12px 16px;font-size:13px" onclick="clearSnack()">Clear</button>
        </div>
      </div>
    </div>

    <div class="ig"><span class="lbl">Water L</span><input type="number" id="n-water" placeholder="2.5" step="0.1"></div>
    <button class="btn btn-ghost" onclick="resetMeals()">Reset Todays Meals</button>
    <div class="sp"></div>
  </div>
</div>

<!-- ===== STEPS ===== -->
<div class="screen" id="sc-steps">
  <div class="pg-hd"><div class="pg-title">Steps and Cardio</div></div>
  <div class="pad">
    <div class="ig"><span class="lbl">Date</span><input type="date" id="st-date"></div>
    <div class="r2"><div><span class="lbl">Steps Today</span><input type="number" id="st-steps" placeholder="10000" oninput="updStepsBox()"></div><div><span class="lbl">Boxing Rounds</span><input type="number" id="st-box" placeholder="5"></div></div>
    <div class="r2"><div><span class="lbl">Cardio min</span><input type="number" id="st-cardio" placeholder="0"></div><div><span class="lbl">Other</span><input type="text" id="st-other" placeholder="e.g. Run"></div></div>
    <div class="steps-box">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><span style="font-size:13px;color:var(--ink2)">Steps goal 10000</span><span id="st-status" style="font-family:'DM Mono',monospace;font-size:12px;color:var(--ink3)">-</span></div>
      <div class="pb"><div class="pb-fill" id="st-prog" style="width:0%;background:var(--blue)"></div></div>
    </div>
    <button class="btn btn-fire" onclick="saveSteps()">LOG STEPS</button>
  </div>
  <div class="sp"></div><div class="hr"></div>
  <div class="pg-hd"><div class="pg-title">Recent Sessions</div></div>
  <div class="card" style="padding:0;overflow:hidden"><div id="hist-list"><div class="empty">No sessions logged yet</div></div></div>
  <div class="sp"></div>
</div>

<!-- ===== DATA ===== -->
<div class="screen" id="sc-data">
  <div class="pg-hd"><div class="pg-title">Data and Export</div></div>
  <div class="pad" style="display:flex;flex-direction:column;gap:9px;margin-bottom:18px">
    <button class="btn btn-teal" onclick="exportExcel()">Export to Excel (.xls)</button>
    <button class="btn btn-ghost" style="border-color:var(--blue);color:var(--blue)" onclick="exportCSV()">Export to CSV</button>
  </div>
  <div class="ds"><div class="ds-ttl">Sessions</div><div style="overflow-x:auto;border-radius:12px;border:1px solid var(--line)"><table class="dtbl"><thead><tr><th>Date</th><th>Type</th><th>Weight</th><th>Steps</th><th>Boxing</th></tr></thead><tbody id="tb1"><tr><td colspan="5" class="empty">No data</td></tr></tbody></table></div></div>
  <div class="ds"><div class="ds-ttl">Strength Log</div><div style="overflow-x:auto;border-radius:12px;border:1px solid var(--line)"><table class="dtbl"><thead><tr><th>Date</th><th>Exercise</th><th>Weight</th><th>Reps</th><th>1RM</th></tr></thead><tbody id="tb2"><tr><td colspan="5" class="empty">No data</td></tr></tbody></table></div></div>
  <div class="ds"><div class="ds-ttl">Nutrition</div><div style="overflow-x:auto;border-radius:12px;border:1px solid var(--line)"><table class="dtbl"><thead><tr><th>Date</th><th>Calories</th><th>Protein</th><th>Water</th></tr></thead><tbody id="tb3"><tr><td colspan="4" class="empty">No data</td></tr></tbody></table></div></div>
  <div class="ds"><div class="ds-ttl">Steps</div><div style="overflow-x:auto;border-radius:12px;border:1px solid var(--line)"><table class="dtbl"><thead><tr><th>Date</th><th>Steps</th><th>Boxing</th><th>Goal</th></tr></thead><tbody id="tb4"><tr><td colspan="4" class="empty">No data</td></tr></tbody></table></div></div>
  <div class="sp"></div>
</div>

<!-- ===== SETTINGS ===== -->
<div class="screen" id="sc-settings">
  <div class="pg-hd"><div class="pg-title">Settings</div></div>
  <div class="pad">
    <div class="card">
      <div class="ctitle">Google Sheets Sync</div>
      <div class="srow"><span class="srow-lbl">Status</span><span class="srow-val" id="gs-stat">Not connected</span></div>
      <div class="srow"><span class="srow-lbl">URL</span><span class="srow-val" id="gs-url">-</span></div>
      <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px">
        <button class="btn btn-ghost" style="border-color:var(--teal);color:var(--teal)" onclick="openSetup()">Configure Connection</button>
        <button class="btn btn-ghost" onclick="testConn()">Test Connection</button>
      </div>
    </div>
    <div class="card">
      <div class="ctitle">Data Management</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <button class="btn btn-ghost" onclick="exportExcel()">Export to Excel</button>
        <button class="btn btn-ghost" onclick="exportCSV()">Export to CSV</button>
        <button class="btn btn-ghost" onclick="clearAll()" style="border-color:var(--red);color:var(--red)">Clear All Data</button>
      </div>
    </div>
    <div class="card">
      <div class="ctitle">About</div>
      <div class="srow"><span class="srow-lbl">Version</span><span class="srow-val">2.0.0</span></div>
      <div class="srow"><span class="srow-lbl">Storage Used</span><span class="srow-val" id="stor-sz">-</span></div>
    </div>
  </div>
  <div class="sp"></div>
</div>

<!-- NAV -->

<!-- ===== WEIGHT ===== -->
<div class="screen" id="sc-weight">
  <div class="pg-hd"><div class="pg-title">Body Weight</div><div class="pg-sub">Log daily - fasted, same time</div></div>
  <div class="pad">

    <div class="card" style="margin-bottom:14px">
      <div class="ctitle">Log Weight</div>
      <div class="r2">
        <div><span class="lbl">Date</span><input type="date" id="w-date"></div>
        <div><span class="lbl">Weight kg</span><input type="number" id="w-kg" placeholder="93.0" step="0.1"></div>
      </div>
      <div class="ig">
        <span class="lbl">Time of Day</span>
        <div class="chips" id="w-time">
          <div class="chip on" data-v="Morning (fasted)" onclick="chip(this,'w-time')">MORNING</div>
          <div class="chip" data-v="Evening" onclick="chip(this,'w-time')">EVENING</div>
          <div class="chip" data-v="Other" onclick="chip(this,'w-time')">OTHER</div>
        </div>
      </div>
      <div class="ig"><span class="lbl">Notes (optional)</span><input type="text" id="w-notes" placeholder="e.g. post workout, bloated"></div>
      <button class="btn btn-fire" onclick="saveWeight()">LOG WEIGHT</button>
    </div>

    <div class="card">
      <div class="ctitle">Progress to Target</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px">
        <div style="text-align:center;background:var(--bg4);border:1px solid var(--line2);border-radius:10px;padding:12px 6px">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:var(--teal)" id="wt-curr">-</div>
          <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--ink3);margin-top:3px;text-transform:uppercase">Current</div>
        </div>
        <div style="text-align:center;background:var(--bg4);border:1px solid var(--line2);border-radius:10px;padding:12px 6px">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:var(--gold)" id="wt-start">-</div>
          <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--ink3);margin-top:3px;text-transform:uppercase">Start</div>
        </div>
        <div style="text-align:center;background:var(--bg4);border:1px solid var(--line2);border-radius:10px;padding:12px 6px">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;" id="wt-chg">-</div>
          <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--ink3);margin-top:3px;text-transform:uppercase">Change</div>
        </div>
      </div>
      <div style="margin-bottom:6px">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px">
          <span style="color:var(--ink2)">Progress to 83kg target</span>
          <span style="font-family:'DM Mono',monospace;font-weight:500;color:var(--teal)" id="wt-tgt-txt">-</span>
        </div>
        <div class="pb"><div class="pb-fill" id="wt-prog" style="width:0%;background:linear-gradient(90deg,var(--red),var(--teal))"></div></div>
      </div>
    </div>

    <div class="card" style="padding:0;overflow:hidden">
      <div style="padding:14px 16px 10px;border-bottom:1px solid var(--line)"><div class="ctitle" style="margin-bottom:0">Weight History</div></div>
      <div id="wt-hist"><div class="empty">No weight entries yet</div></div>
    </div>
    <div class="sp"></div>
  </div>
</div>

<div class="nav">
  <div class="ni on" onclick="go('dash',this)"><div class="ni-ico">&#9889;</div><div class="ni-lbl">Home</div></div>
  <div class="ni" onclick="go('log',this)"><div class="ni-ico">&#128203;</div><div class="ni-lbl">Session</div></div>
  <div class="ni" onclick="go('str',this)"><div class="ni-ico">&#128170;</div><div class="ni-lbl">Lifts</div></div>
  <div class="ni" onclick="go('nut',this)"><div class="ni-ico">&#129367;</div><div class="ni-lbl">Nutrition</div></div>
  <div class="ni" onclick="go('steps',this)"><div class="ni-ico">&#128609;</div><div class="ni-lbl">Steps</div></div>
  <div class="ni" onclick="go('data',this)"><div class="ni-ico">&#128202;</div><div class="ni-lbl">Data</div></div>
  <div class="ni" onclick="go('weight',this)"><div class="ni-ico">&#9878;</div><div class="ni-lbl">Weight</div></div>
  <div class="ni" onclick="go('settings',this)"><div class="ni-ico">&#9881;</div><div class="ni-lbl">Settings</div></div>
</div>
</div>

<!-- SETUP MODAL -->
<div class="modal" id="setup-modal">
  <div class="modal-inner">
    <div class="modal-title">GOOGLE SHEETS</div>
    <div class="modal-sub">Connect for live sync</div>
    <div class="setup-step"><div class="step-n">1</div><div class="step-txt"><strong>Open your Google Sheet</strong>Extensions then Apps Script</div></div>
    <div class="setup-step"><div class="step-n">2</div><div class="step-txt"><strong>Paste the Apps Script code</strong>Delete existing content and paste apps_script.js</div></div>
    <div class="setup-step"><div class="step-n">3</div><div class="step-txt"><strong>Deploy as Web App</strong>Deploy - New Deployment - Web App - Anyone - Deploy</div></div>
    <div class="setup-step"><div class="step-n">4</div><div class="step-txt"><strong>Paste the URL below</strong>Starts with script.google.com/macros/s/</div></div>
    <div style="margin-top:16px">
      <span class="lbl">Web App URL</span>
      <input type="url" id="setup-url" placeholder="https://script.google.com/macros/s/..." style="font-size:13px;font-family:'DM Mono',monospace">
    </div>
    <div id="setup-msg" style="font-family:'DM Mono',monospace;font-size:12px;text-align:center;margin:10px 0;min-height:18px;color:var(--ink3)"></div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <button class="btn btn-teal" onclick="saveSetup()">CONNECT</button>
      <button class="btn btn-ghost" onclick="closeSetup()">Close</button>
    </div>
    <div class="status-box">
      <div class="status-lbl">Current Status</div>
      <div class="status-val" id="setup-stat-val">Not connected</div>
    </div>
  </div>
</div>


<!-- REST TIMER -->
<div class="timer-ov" id="timer-ov">
  <div class="timer-lbl">Rest Timer</div>
  <div class="timer-ring">
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle class="timer-circle-bg" cx="100" cy="100" r="90"/>
      <circle class="timer-circle-fg" id="timer-arc" cx="100" cy="100" r="90"/>
    </svg>
    <div class="timer-num" id="timer-num">60</div>
  </div>
  <div class="timer-presets">
    <div class="tpreset on" onclick="setTimerDur(60,this)">60s</div>
    <div class="tpreset" onclick="setTimerDur(90,this)">90s</div>
    <div class="tpreset" onclick="setTimerDur(120,this)">2min</div>
  </div>
  <div class="timer-actions">
    <button class="tbtn tbtn-add" onclick="addTime(30)">+30s</button>
    <button class="tbtn tbtn-skip" onclick="stopTimer()">Skip</button>
  </div>
</div>

<!-- DIM BUTTON -->
<button class="dim-btn" id="dim-btn" onclick="toggleDim()" title="Dim for gym">&#9681;</button>

<div id="toast"></div>

<script>
// ============================================================
// STORAGE
// ============================================================
var DB = {
  get: function(k) {
    try { return JSON.parse(localStorage.getItem('pk_' + k)); }
    catch(e) { return null; }
  },
  set: function(k, v) {
    try { localStorage.setItem('pk_' + k, JSON.stringify(v)); }
    catch(e) { toast('Storage full', 'err'); }
  },
  push: function(k, v) {
    var a = DB.get(k) || [];
    a.push(v);
    DB.set(k, a);
  }
};

// ============================================================
// STATE
// ============================================================
var exBlocks = [];
var m3Base = 'roti';
var m3Prot = 'chicken';
var mData = {1: null, 2: null, 3: null, 4: null};
var todayKey = '';

// ============================================================
// INIT
// ============================================================
function init() {
  var t = new Date();
  todayKey = t.toISOString().split('T')[0];

  ['l-date', 's-date', 'n-date', 'st-date', 'w-date'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = todayKey;
  });

  document.getElementById('hdr-date').textContent =
    t.toLocaleDateString('en-GB', {weekday: 'short', day: 'numeric', month: 'short'});

  var ws = new Date(t);
  ws.setDate(t.getDate() - t.getDay() + 1);
  var we = new Date(ws);
  we.setDate(ws.getDate() + 6);
  document.getElementById('week-range').textContent =
    ws.getDate() + '-' + we.getDate() + ' ' + we.toLocaleDateString('en-GB', {month: 'short'});

  restoreMeals();
  refreshDash();
  renderHistory();
  updSettings();
  updBWHint();
  updCalRemaining();
}

// ============================================================
// NAVIGATION
// ============================================================
function go(name, el) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  document.querySelectorAll('.ni').forEach(function(n) { n.classList.remove('on'); });
  document.getElementById('sc-' + name).classList.add('active');
  if (el) el.classList.add('on');
  if (name === 'dash') refreshDash();
  if (name === 'steps') renderHistory();
  if (name === 'data') renderTables();
  if (name === 'settings') updSettings();
  if (name === 'weight') renderWeightScreen();
  if (name === 'log') updBWHint();
  if (name === 'nut') updCalRemaining();
}

// ============================================================
// CHIPS
// ============================================================
function chip(el, gid) {
  document.querySelectorAll('#' + gid + ' .chip').forEach(function(c) { c.classList.remove('on'); });
  el.classList.add('on');
}
function chipVal(gid) {
  var sel = document.querySelector('#' + gid + ' .chip.on');
  return sel ? sel.dataset.v : '';
}

// ============================================================
// DASHBOARD
// ============================================================
function refreshDash() {
  var sess = DB.get('sessions') || [];
  var nut = DB.get('nutrition') || [];
  var steps = DB.get('steps') || [];
  var str = DB.get('strength') || [];

  if (sess.length) {
    var l = sess[sess.length - 1];
    document.getElementById('k-wt').textContent = l.bw || '-';
    if (l.bw) document.getElementById('hdr-wt').textContent = l.bw + 'kg';
  }

  var now = new Date(); now.setHours(23, 59, 59, 0);
  var ws = new Date(now); ws.setDate(now.getDate() - now.getDay() + 1); ws.setHours(0, 0, 0, 0);
  var wkS = sess.filter(function(s) { var d = new Date(s.date); return d >= ws && d <= now; });
  document.getElementById('k-sess').textContent = wkS.length;

  if (steps.length) {
    var ls = parseInt(steps[steps.length - 1].steps) || 0;
    document.getElementById('k-steps').textContent = ls >= 1000 ? (ls / 1000).toFixed(1) + 'k' : ls;
    document.getElementById('pgs').style.width = Math.min(100, (ls / 10000) * 100) + '%';
    document.getElementById('pgs-v').textContent = ls.toLocaleString();
  }

  var wkN = nut.filter(function(n) { var d = new Date(n.date); return d >= ws && d <= now; });
  if (wkN.length) {
    var ac = Math.round(wkN.reduce(function(s, n) { return s + (n.calories || 0); }, 0) / wkN.length);
    var ap = Math.round(wkN.reduce(function(s, n) { return s + (n.protein || 0); }, 0) / wkN.length);
    document.getElementById('k-cal').textContent = ac;
    document.getElementById('k-prot').textContent = ap + 'g';
    document.getElementById('pgp').style.width = Math.min(100, (ap / 190) * 100) + '%';
    document.getElementById('pgp-v').textContent = ap + 'g';
  }

  document.getElementById('pgw').style.width = Math.min(100, (wkS.length / 4) * 100) + '%';
  document.getElementById('pgw-v').textContent = wkS.length + '/4';

  var avgP = wkN.length ? Math.round(wkN.reduce(function(s, n) { return s + (n.protein || 0); }, 0) / wkN.length) : 0;
  var ok = wkS.length >= 4 && avgP >= 150;
  var bn = document.getElementById('banner');
  bn.textContent = ok ? 'ON TRACK' : 'PUSH MORE';
  bn.className = 'banner ' + (ok ? 'good' : 'warn');
  updNextSession();
  updStreak();
  updWeeklySummary();

  var best = {};
  str.forEach(function(s) {
    if (!best[s.exercise] || s.weight > best[s.exercise]) best[s.exercise] = s.weight;
  });
  var le = document.getElementById('best-lifts');
  var ks = Object.keys(best);
  if (ks.length) {
    le.innerHTML = ks.map(function(ex) {
      return '<div class="lift-row"><div class="lift-name">' + ex + '</div><div><span class="lift-kg">' + best[ex] + '</span> <span class="lift-u">kg</span></div></div>';
    }).join('');
  } else {
    le.innerHTML = '<div class="empty">Log your first session to see records</div>';
  }
}

// ============================================================
// SESSION
// ============================================================
function saveSession() {
  var date = document.getElementById('l-date').value;
  var bw = document.getElementById('l-bw').value;
  if (!date || !bw) { toast('Date and body weight required', 'err'); return; }

  var s = {
    date: date, bw: parseFloat(bw), type: chipVal('wtype'),
    duration: parseInt(document.getElementById('l-dur').value) || 65,
    intensity: parseInt(document.getElementById('l-int').value) || 8,
    boxing: parseInt(document.getElementById('l-box').value) || 0,
    steps: parseInt(document.getElementById('l-steps').value) || 0,
    cardio: parseInt(document.getElementById('l-cardio').value) || 0,
    boxingDone: chipVal('box-done'), cardioDone: chipVal('cardio-done'),
    notes: document.getElementById('l-notes').value, ts: Date.now()
  };

  DB.push('sessions', s);
  apiPost('logWorkout', s);
  toast('Session logged', 'ok');
  document.getElementById('l-notes').value = '';
  document.getElementById('l-bw').value = '';
  refreshDash();
}

// ============================================================
// STRENGTH
// ============================================================
function getLastSess(exName, sessType) {
  var all = DB.get('strength') || [];
  var m = all.filter(function(s) { return s.exercise === exName && s.type === sessType; });
  if (!m.length) return null;
  var ld = m.map(function(s) { return s.date; }).sort().reverse()[0];
  return { date: ld, sets: m.filter(function(s) { return s.date === ld; }) };
}

function addEx() {
  var name = document.getElementById('s-ex').value;
  var type = document.getElementById('s-type').value;
  var id = 'ex' + Date.now();
  exBlocks.push({ id: id, name: name, sets: [] });

  var last = getLastSess(name, type);
  var lHtml = '';
  if (last && last.sets.length) {
    var sh = last.sets.map(function(s, i) {
      return '<div class="ls-set">S' + (i + 1) + ': ' + s.weight + 'kg x ' + s.reps + '</div>';
    }).join('');
    lHtml = '<div class="last-sess"><div class="ls-ttl">Last session: ' + last.date + '</div><div class="ls-sets">' + sh + '</div><button class="copy-btn" onclick="copyLastSets(\''+id+'\',event)">&#8645; Copy last session weights &amp; reps</button></div>';
  } else {
    lHtml = '<div class="no-prev">No previous data - first time logging this exercise</div>';
  }

  var c = document.getElementById('ex-blocks');
  var d = document.createElement('div');
  d.className = 'ex-block'; d.id = id;
  d.innerHTML = '<div class="ex-hd"><div class="ex-name">' + name + '</div><button class="add-set-btn" onclick="addSet(\'' + id + '\')">+ Set</button></div>' + lHtml + '<div id="sets-' + id + '"></div>';
  c.appendChild(d);
  addSet(id);
  document.getElementById('s-save').style.display = 'flex';
}

function addSet(bid) {
  var block = exBlocks.find(function(b) { return b.id === bid; });
  if (!block) return;
  var sn = block.sets.length + 1;
  var sid = 'set-' + bid + '-' + sn;
  block.sets.push(sid);

  var type = document.getElementById('s-type').value;
  var be = document.getElementById(bid);
  var exName = be ? be.querySelector('.ex-name').textContent : '';
  var last = getLastSess(exName, type);
  var ls = last && last.sets[sn - 1] ? last.sets[sn - 1] : null;
  var wPH = ls ? ls.weight + 'kg' : 'kg';
  var rPH = ls ? ls.reps + ' reps' : 'reps';

  var c = document.getElementById('sets-' + bid);
  var d = document.createElement('div');
  d.className = 'set-row'; d.id = sid;
  d.innerHTML = '<div class="set-n">' + sn + '</div>'
    + '<div class="set-f"><input class="set-i" type="number" placeholder="' + wPH + '" id="' + sid + '-w" step="0.5"><div class="set-lbl">WEIGHT</div></div>'
    + '<div class="set-f"><input class="set-i" type="number" placeholder="' + rPH + '" id="' + sid + '-r"><div class="set-lbl">REPS</div></div>'
    + '<button class="del-btn" onclick="delSet(\'' + sid + '\',\'' + bid + '\')">x</button>';
  c.appendChild(d);
}

function delSet(sid, bid) {
  var el = document.getElementById(sid);
  if (el) el.remove();
  var b = exBlocks.find(function(b) { return b.id === bid; });
  if (b) b.sets = b.sets.filter(function(s) { return s !== sid; });
}

function saveStrength() {
  var date = document.getElementById('s-date').value;
  var type = document.getElementById('s-type').value;
  if (!date) { toast('Select a date', 'err'); return; }

  var saved = 0;
  var all = DB.get('strength') || [];
  var newSets = [];

  exBlocks.forEach(function(block) {
    block.sets.forEach(function(sid, idx) {
      var wEl = document.getElementById(sid + '-w');
      var rEl = document.getElementById(sid + '-r');
      if (wEl && rEl && wEl.value && rEl.value) {
        var w = parseFloat(wEl.value);
        var r = parseInt(rEl.value);
        var orm = Math.round(w * (1 + r / 30) * 10) / 10;
        var pb = all.filter(function(s) { return s.exercise === block.name; }).reduce(function(mx, s) { return Math.max(mx, s.weight); }, 0);
        var entry = { date: date, exercise: block.name, weight: w, reps: r, setNum: idx + 1, type: type, oneRM: orm, best: w >= pb, ts: Date.now() };
        all.push(entry);
        newSets.push(entry);
        saved++;
      }
    });
  });

  DB.set('strength', all);
  if (newSets.length) apiPost('logStrength', { date: date, sets: newSets });
  toast(saved + ' sets saved', 'ok');
  if (saved > 0) startRestTimer();
  document.getElementById('ex-blocks').innerHTML = '';
  exBlocks = [];
  document.getElementById('s-save').style.display = 'none';
  refreshDash();
}

// ============================================================
// NUTRITION
// ============================================================
function restoreMeals() {
  var saved = DB.get('meals-' + todayKey);
  if (saved) { mData = saved; updMealUI(); updNutTot(); restoreSnack(); }
}

function logMeal(n, p, c, cb, f) {
  mData[n] = { protein: p, calories: c, carbs: cb, fat: f };
  saveMeals(); updMealUI(); updNutTot();
  toast('Meal ' + n + ' logged', 'ok');
}

function logMeal3() {
  var pr = m3Prot === 'lentils' ? 37 : 45;
  var cal = (m3Prot === 'lentils' ? 520 : 550) + (m3Base === 'rice' ? 30 : 0);
  var cb = m3Base === 'rice' ? 70 : 45;
  document.getElementById('m3mac').textContent = pr + 'g protein - ' + cal + ' kcal';
  logMeal(3, pr, cal, cb, 18);
}

function swapBase(v) {
  m3Base = v;
  ['roti', 'rice'].forEach(function(b) {
    document.getElementById('sw-' + b).className = 'swap-btn' + (v === b ? ' on' : '');
  });
}

function swapProt(v) {
  m3Prot = v;
  ['chicken', 'lentils', 'lamb'].forEach(function(p) {
    document.getElementById('sw-' + p).className = 'swap-btn' + (v === p ? ' on' : '');
  });
}

function updMealUI() {
  [1, 2, 3, 4].forEach(function(n) {
    var b = document.getElementById('m' + n + 'b');
    if (b) {
      b.textContent = mData[n] ? 'Logged' : 'Pending';
      b.className = 'meal-badge ' + (mData[n] ? 'logged' : 'pending');
    }
  });
}

function updNutTot() {
  var tc = 0, tp = 0;
  [1, 2, 3, 4].forEach(function(n) {
    if (mData[n]) { tc += mData[n].calories || 0; tp += mData[n].protein || 0; }
  });
  if (mData['snack']) { tc += mData['snack'].calories || 0; tp += mData['snack'].protein || 0; }
  document.getElementById('nt-cal').textContent = tc;
  document.getElementById('nt-prot').textContent = tp + 'g';
  document.getElementById('nt-prog').style.width = Math.min(100, (tc / 2065) * 100) + '%';
  updCalRemaining();

  if (mData[1] && mData[2] && mData[3] && mData[4]) {
    var water = parseFloat(document.getElementById('n-water').value) || 0;
    var nut = DB.get('nutrition') || [];
    var date = document.getElementById('n-date').value;
    var idx = nut.findIndex(function(n) { return n.date === date; });
    var rec = { date: date, calories: tc, protein: tp, water: water, ts: Date.now() };
    if (idx >= 0) nut[idx] = rec; else nut.push(rec);
    DB.set('nutrition', nut);
    apiPost('logNutrition', rec);
  }
}

function saveMeals() { DB.set('meals-' + todayKey, mData); }

function resetMeals() {
  mData = {1: null, 2: null, 3: null, 4: null, snack: null};
  DB.set('meals-' + todayKey, mData);
  updMealUI(); updNutTot(); clearSnack();
  toast('Meals reset', 'ok');
}

// ============================================================
// STEPS
// ============================================================
function updStepsBox() {
  var s = parseInt(document.getElementById('st-steps').value) || 0;
  document.getElementById('st-prog').style.width = Math.min(100, (s / 10000) * 100) + '%';
  var el = document.getElementById('st-status');
  el.textContent = s >= 10000 ? 'Goal met' : (s > 0 ? s.toLocaleString() + ' / 10000' : '-');
  el.style.color = s >= 10000 ? 'var(--green)' : (s > 0 ? 'var(--gold)' : 'var(--ink3)');
}

function saveSteps() {
  var date = document.getElementById('st-date').value;
  var steps = parseInt(document.getElementById('st-steps').value) || 0;
  if (!date) { toast('Select a date', 'err'); return; }

  var all = DB.get('steps') || [];
  var idx = all.findIndex(function(s) { return s.date === date; });
  var rec = {
    date: date, steps: steps,
    boxing: parseInt(document.getElementById('st-box').value) || 0,
    cardio: parseInt(document.getElementById('st-cardio').value) || 0,
    other: document.getElementById('st-other').value || '',
    ts: Date.now()
  };
  if (idx >= 0) all[idx] = rec; else all.push(rec);
  DB.set('steps', all);
  apiPost('logSteps', rec);
  toast('Steps logged', 'ok');
  refreshDash(); renderHistory();
}

function renderHistory() {
  var sess = (DB.get('sessions') || []).slice().reverse().slice(0, 15);
  var el = document.getElementById('hist-list');
  if (!sess.length) { el.innerHTML = '<div class="empty">No sessions logged yet</div>'; return; }
  el.innerHTML = sess.map(function(s) {
    var ok = parseInt(s.steps) >= 10000;
    return '<div class="hist-item"><div><div class="hist-main">' + s.type + ' - ' + s.bw + 'kg</div><div class="hist-sub">' + s.date + ' - ' + s.duration + 'min - Intensity ' + s.intensity + '/10</div></div><div class="badge ' + (ok ? 'badge-g' : 'badge-r') + '">' + (ok ? 'Steps OK' : 'Steps Low') + '</div></div>';
  }).join('');
}

// ============================================================
// DATA TABLES
// ============================================================
function renderTables() {
  var sess = (DB.get('sessions') || []).slice().reverse();
  var t1 = document.getElementById('tb1');
  t1.innerHTML = sess.length
    ? sess.map(function(s) { return '<tr><td>' + s.date + '</td><td>' + s.type + '</td><td>' + s.bw + 'kg</td><td>' + (s.steps || 0) + '</td><td>' + (s.boxing || 0) + '</td></tr>'; }).join('')
    : '<tr><td colspan="5" class="empty">No data</td></tr>';

  var str = (DB.get('strength') || []).slice().reverse().slice(0, 60);
  var t2 = document.getElementById('tb2');
  t2.innerHTML = str.length
    ? str.map(function(s) { return '<tr><td>' + s.date + '</td><td>' + s.exercise + '</td><td>' + s.weight + 'kg</td><td>' + s.reps + '</td><td>' + s.oneRM + '</td></tr>'; }).join('')
    : '<tr><td colspan="5" class="empty">No data</td></tr>';

  var nut = (DB.get('nutrition') || []).slice().reverse();
  var t3 = document.getElementById('tb3');
  t3.innerHTML = nut.length
    ? nut.map(function(n) { return '<tr><td>' + n.date + '</td><td>' + n.calories + '</td><td>' + n.protein + 'g</td><td>' + (n.water || 0) + 'L</td></tr>'; }).join('')
    : '<tr><td colspan="4" class="empty">No data</td></tr>';

  var steps = (DB.get('steps') || []).slice().reverse();
  var t4 = document.getElementById('tb4');
  t4.innerHTML = steps.length
    ? steps.map(function(s) { var ok = parseInt(s.steps) >= 10000; return '<tr><td>' + s.date + '</td><td>' + s.steps + '</td><td>' + s.boxing + '</td><td style="color:' + (ok ? 'var(--green)' : 'var(--red)') + '">' + (ok ? 'YES' : 'NO') + '</td></tr>'; }).join('')
    : '<tr><td colspan="4" class="empty">No data</td></tr>';
}

// ============================================================
// EXPORT
// ============================================================
function exportCSV() {
  var sess = DB.get('sessions') || [];
  var nut = DB.get('nutrition') || [];
  var str = DB.get('strength') || [];
  var steps = DB.get('steps') || [];

  var csv = 'SESSIONS\nDate,Type,Body Weight,Duration,Intensity,Boxing Done,Cardio Done,Steps,Notes\n';
  sess.forEach(function(s) { csv += [s.date, s.type, s.bw, s.duration, s.intensity, s.boxingDone, s.cardioDone, s.steps, '"' + (s.notes || '') + '"'].join(',') + '\n'; });
  csv += '\nNUTRITION\nDate,Calories,Protein,Water\n';
  nut.forEach(function(n) { csv += [n.date, n.calories, n.protein, n.water || 0].join(',') + '\n'; });
  csv += '\nSTRENGTH\nDate,Exercise,Weight,Reps,Set,1RM,Best,Type\n';
  str.forEach(function(s) { csv += [s.date, s.exercise, s.weight, s.reps, s.setNum, s.oneRM, s.best ? 'YES' : '', s.type].join(',') + '\n'; });
  csv += '\nSTEPS\nDate,Steps,Boxing,Cardio,Other\n';
  steps.forEach(function(s) { csv += [s.date, s.steps, s.boxing, s.cardio, s.other || ''].join(',') + '\n'; });

  dlFile('peak-data-' + todayKey + '.csv', csv, 'text/csv');
  toast('CSV exported', 'ok');
}

function exportExcel() {
  var sess = DB.get('sessions') || [];
  var nut = DB.get('nutrition') || [];
  var str = DB.get('strength') || [];
  var steps = DB.get('steps') || [];

  function esc(v) { return String(v || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function row(cells, isHdr) {
    var s = isHdr ? ' s="1"' : '';
    return '<Row>' + cells.map(function(c) { return '<Cell' + s + '><Data ss:Type="String">' + esc(c) + '</Data></Cell>'; }).join('') + '</Row>\n';
  }

  var xml = '<?xml version="1.0" encoding="UTF-8"?><?mso-application progid="Excel.Sheet"?>'
    + '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'
    + '<Styles><Style ss:ID="1"><Font ss:Bold="1" ss:Color="#FFFFFF"/><Interior ss:Color="#1A1A2E" ss:Pattern="Solid"/></Style></Styles>';

  xml += '<Worksheet ss:Name="Sessions"><Table>' + row(['Date', 'Type', 'Body Weight kg', 'Duration min', 'Intensity', 'Boxing Done', 'Cardio Done', 'Steps', 'Notes'], true);
  sess.forEach(function(s) { xml += row([s.date, s.type, s.bw, s.duration, s.intensity, s.boxingDone, s.cardioDone, s.steps, s.notes || '']); });
  xml += '</Table></Worksheet>';

  xml += '<Worksheet ss:Name="Strength Log"><Table>' + row(['Date', 'Exercise', 'Weight kg', 'Reps', 'Set', '1RM Estimate', 'Best Ever', 'Session Type'], true);
  str.forEach(function(s) { xml += row([s.date, s.exercise, s.weight, s.reps, s.setNum, s.oneRM, s.best ? 'YES' : '', s.type]); });
  xml += '</Table></Worksheet>';

  xml += '<Worksheet ss:Name="Nutrition"><Table>' + row(['Date', 'Calories', 'Protein g', 'Water L'], true);
  nut.forEach(function(n) { xml += row([n.date, n.calories, n.protein, n.water || 0]); });
  xml += '</Table></Worksheet>';

  xml += '<Worksheet ss:Name="Steps"><Table>' + row(['Date', 'Steps', 'Boxing Rounds', 'Cardio min', 'Other', 'Goal Met'], true);
  steps.forEach(function(s) { xml += row([s.date, s.steps, s.boxing, s.cardio, s.other || '', parseInt(s.steps) >= 10000 ? 'YES' : 'NO']); });
  xml += '</Table></Worksheet></Workbook>';

  dlFile('peak-tracker-' + todayKey + '.xls', xml, 'application/vnd.ms-excel');
  toast('Excel exported', 'ok');
}

function dlFile(name, content, mime) {
  var blob = new Blob([content], { type: mime });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================================
// GOOGLE SHEETS API
// ============================================================
function apiPost(action, payload) {
  var url = localStorage.getItem('pk_gs_url');
  if (!url) return;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({ action: action, payload: payload }),
    headers: { 'Content-Type': 'text/plain' }
  }).catch(function() {});
}

// ============================================================
// SETTINGS / SETUP
// ============================================================
function openSetup() {
  document.getElementById('setup-url').value = localStorage.getItem('pk_gs_url') || '';
  updSetupStat();
  document.getElementById('setup-modal').classList.add('open');
}

function closeSetup() {
  document.getElementById('setup-modal').classList.remove('open');
}

function saveSetup() {
  var url = document.getElementById('setup-url').value.trim();
  var msg = document.getElementById('setup-msg');
  if (!url || !url.includes('script.google.com')) {
    msg.style.color = 'var(--red)';
    msg.textContent = 'Enter a valid Apps Script URL';
    return;
  }
  localStorage.setItem('pk_gs_url', url);
  msg.style.color = 'var(--teal)';
  msg.textContent = 'Connected successfully';
  updSetupStat();
  updSettings();
  setTimeout(function() { closeSetup(); toast('Google Sheets connected', 'ok'); }, 800);
}

function updSetupStat() {
  var url = localStorage.getItem('pk_gs_url') || '';
  var el = document.getElementById('setup-stat-val');
  if (url) { el.textContent = 'Connected: ' + url.substring(0, 45) + '...'; el.style.color = 'var(--teal)'; }
  else { el.textContent = 'Not connected - using local storage'; el.style.color = 'var(--ink3)'; }
}

function testConn() {
  var url = localStorage.getItem('pk_gs_url');
  if (!url) { toast('No URL configured', 'err'); return; }
  toast('Testing...', 'ok');
  fetch(url + '?action=getDashboard')
    .then(function(r) { return r.json(); })
    .then(function(d) { toast(d.success ? 'Connected' : 'Error: ' + (d.error || 'unknown'), 'ok'); })
    .catch(function() { toast('Connection failed', 'err'); });
}

function updSettings() {
  var url = localStorage.getItem('pk_gs_url') || '';
  var se = document.getElementById('gs-stat');
  var ue = document.getElementById('gs-url');
  if (url) { se.textContent = 'Connected'; se.className = 'srow-val ok'; ue.textContent = url.substring(0, 38) + '...'; }
  else { se.textContent = 'Not connected'; se.className = 'srow-val'; ue.textContent = '-'; }
  var total = 0;
  for (var k in localStorage) { if (k.startsWith('pk_')) total += (localStorage[k] || '').length; }
  var sz = document.getElementById('stor-sz');
  if (sz) sz.textContent = (total / 1024).toFixed(1) + ' KB';
}

function clearAll() {
  if (!confirm('Clear all data? This cannot be undone.')) return;
  var keys = [];
  for (var k in localStorage) { if (k.startsWith('pk_')) keys.push(k); }
  keys.forEach(function(k) { localStorage.removeItem(k); });
  mData = {1: null, 2: null, 3: null, 4: null};
  refreshDash(); renderHistory();
  toast('All data cleared', 'ok');
}


// ============================================================
// SNACK
// ============================================================
function updSnackPreview() {
  var cal = parseInt(document.getElementById('snack-cal').value) || 0;
  var pct = Math.min(100, (cal / 200) * 100);
  document.getElementById('snack-prog').style.width = pct + '%';
  document.getElementById('snack-bar-txt').textContent = cal + ' / 200 kcal';
  document.getElementById('snack-prog').style.background = cal > 200 ? 'var(--red)' : (cal > 150 ? 'var(--gold)' : 'var(--teal)');
  var warn = document.getElementById('snack-warning');
  warn.style.display = cal > 200 ? 'block' : 'none';
  // Update mac label
  var prot = parseInt(document.getElementById('snack-prot').value) || 0;
  if (cal > 0) {
    document.getElementById('snack-mac').textContent = cal + ' kcal' + (prot > 0 ? ' - ' + prot + 'g protein' : '') + (cal > 200 ? ' - OVER LIMIT' : '');
  } else {
    document.getElementById('snack-mac').textContent = 'Max 200 kcal - use your flex buffer';
  }
}

function logSnack() {
  var cal = parseInt(document.getElementById('snack-cal').value) || 0;
  var prot = parseInt(document.getElementById('snack-prot').value) || 0;
  var desc = document.getElementById('snack-desc').value || 'Snack';

  if (!cal) { toast('Enter calories', 'err'); return; }
  if (cal > 200) { toast('Over 200 kcal limit', 'err'); return; }

  // Store snack in today meals
  mData['snack'] = { calories: cal, protein: prot, desc: desc };
  saveMeals();

  // Update badge
  document.getElementById('snack-badge').textContent = 'Logged';
  document.getElementById('snack-badge').className = 'meal-badge logged';
  document.getElementById('snack-mac').textContent = cal + ' kcal' + (prot > 0 ? ' - ' + prot + 'g protein' : '') + ' - ' + desc;

  updNutTot();
  toast('Snack logged', 'ok');
}

function clearSnack() {
  mData['snack'] = null;
  saveMeals();
  document.getElementById('snack-cal').value = '';
  document.getElementById('snack-prot').value = '';
  document.getElementById('snack-desc').value = '';
  document.getElementById('snack-badge').textContent = 'Pending';
  document.getElementById('snack-badge').className = 'meal-badge pending';
  document.getElementById('snack-mac').textContent = 'Max 200 kcal - use your flex buffer';
  document.getElementById('snack-prog').style.width = '0%';
  document.getElementById('snack-bar-txt').textContent = '0 / 200 kcal';
  document.getElementById('snack-warning').style.display = 'none';
  updNutTot();
  toast('Snack cleared', 'ok');
}

function restoreSnack() {
  var s = mData['snack'];
  if (!s) return;
  document.getElementById('snack-cal').value = s.calories || '';
  document.getElementById('snack-prot').value = s.protein || '';
  document.getElementById('snack-desc').value = s.desc || '';
  document.getElementById('snack-badge').textContent = 'Logged';
  document.getElementById('snack-badge').className = 'meal-badge logged';
  document.getElementById('snack-mac').textContent = s.calories + ' kcal' + (s.protein > 0 ? ' - ' + s.protein + 'g protein' : '') + ' - ' + s.desc;
  updSnackPreview();
}

// ============================================================
// TOAST
// ============================================================
function toast(msg, type) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'show ' + (type || 'ok');
  clearTimeout(window._tt);
  window._tt = setTimeout(function() { t.className = ''; }, 2600);
}


// ============================================================
// WEIGHT
// ============================================================
function saveWeight() {
  var date = document.getElementById('w-date').value;
  var kg = document.getElementById('w-kg').value;
  if (!date || !kg) { toast('Date and weight required', 'err'); return; }

  var all = DB.get('weights') || [];
  var idx = all.findIndex(function(w) { return w.date === date; });
  var rec = {
    date: date,
    kg: parseFloat(kg),
    time: chipVal('w-time'),
    notes: document.getElementById('w-notes').value || '',
    ts: Date.now()
  };
  if (idx >= 0) all[idx] = rec; else all.push(rec);
  DB.set('weights', all);
  apiPost('logWeight', rec);
  toast('Weight logged', 'ok');
  document.getElementById('w-kg').value = '';
  document.getElementById('w-notes').value = '';
  renderWeightScreen();
  refreshDash();
}

function renderWeightScreen() {
  var all = (DB.get('weights') || []).slice().sort(function(a,b) { return a.date < b.date ? -1 : 1; });
  if (!all.length) {
    document.getElementById('wt-curr').textContent = '-';
    document.getElementById('wt-start').textContent = '-';
    document.getElementById('wt-chg').textContent = '-';
    document.getElementById('wt-prog').style.width = '0%';
    document.getElementById('wt-tgt-txt').textContent = '-';
    document.getElementById('wt-hist').innerHTML = '<div class="empty">No weight entries yet</div>';
    return;
  }

  var latest = all[all.length - 1].kg;
  var start = all[0].kg;
  var change = Math.round((latest - start) * 10) / 10;
  var target = 83;

  document.getElementById('wt-curr').textContent = latest;
  document.getElementById('wt-start').textContent = start;

  var chgEl = document.getElementById('wt-chg');
  chgEl.textContent = (change > 0 ? '+' : '') + change + 'kg';
  chgEl.style.color = change <= 0 ? 'var(--green)' : 'var(--red)';

  // Progress bar: from start weight down to 83kg
  var totalToLose = start - target;
  var lost = start - latest;
  var pct = totalToLose > 0 ? Math.min(100, Math.max(0, (lost / totalToLose) * 100)) : 0;
  document.getElementById('wt-prog').style.width = pct + '%';
  var remaining = Math.round((latest - target) * 10) / 10;
  document.getElementById('wt-tgt-txt').textContent = remaining > 0 ? remaining + 'kg to go' : 'TARGET REACHED';

  // History list - most recent first
  var hist = all.slice().reverse().slice(0, 30);
  document.getElementById('wt-hist').innerHTML = hist.map(function(w, i) {
    var prev = i < hist.length - 1 ? hist[i + 1].kg : null;
    var diff = prev !== null ? Math.round((w.kg - prev) * 10) / 10 : null;
    var diffStr = diff !== null ? '<span style="font-family:'DM Mono',monospace;font-size:11px;color:' + (diff <= 0 ? 'var(--green)' : 'var(--red)') + '">' + (diff > 0 ? '+' : '') + diff + 'kg</span>' : '';
    return '<div class="hist-item"><div><div class="hist-main">' + w.kg + ' kg</div><div class="hist-sub">' + w.date + (w.time ? ' - ' + w.time : '') + (w.notes ? ' - ' + w.notes : '') + '</div></div>' + diffStr + '</div>';
  }).join('');
}


// ============================================================
// REST TIMER
// ============================================================
var timerInt = null;
var timerSecs = 60;
var timerMax = 60;
var timerActive = false;
var CIRCUMFERENCE = 565;

function startTimer(secs) {
  stopTimer();
  timerMax = secs || 60;
  timerSecs = timerMax;
  timerActive = true;
  document.getElementById('timer-ov').classList.add('show');
  updTimerDisplay();
  timerInt = setInterval(function() {
    timerSecs--;
    updTimerDisplay();
    if (timerSecs <= 0) {
      stopTimer();
      // Vibrate if supported
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      toast('Rest over - next set!', 'ok');
    }
  }, 1000);
}

function updTimerDisplay() {
  document.getElementById('timer-num').textContent = timerSecs;
  var pct = timerSecs / timerMax;
  var offset = CIRCUMFERENCE * (1 - pct);
  document.getElementById('timer-arc').style.strokeDashoffset = offset;
  // Colour: teal > gold > red
  var col = timerSecs > timerMax * 0.5 ? 'var(--teal)' : timerSecs > timerMax * 0.25 ? 'var(--gold)' : 'var(--red)';
  document.getElementById('timer-arc').style.stroke = col.replace('var(--teal)', '#00e5aa').replace('var(--gold)', '#ffd166').replace('var(--red)', '#ff3b3b');
}

function stopTimer() {
  clearInterval(timerInt);
  timerActive = false;
  document.getElementById('timer-ov').classList.remove('show');
}

function addTime(secs) {
  timerSecs += secs;
  timerMax += secs;
  updTimerDisplay();
}

function setTimerDur(secs, el) {
  document.querySelectorAll('.tpreset').forEach(function(p) { p.classList.remove('on'); });
  if (el) el.classList.add('on');
  startTimer(secs);
}

// Auto-start timer when a set is saved
function startRestTimer() {
  // Default 60s, user can change on the overlay
  startTimer(60);
}

// ============================================================
// NEXT SESSION TRACKER
// ============================================================
var SESSION_ORDER = [
  'Upper 1 (Push)',
  'Lower 1 (Quads)',
  'Upper 2 (Pull)',
  'Lower 2 (Posterior)'
];

function getNextSession() {
  var sess = DB.get('sessions') || [];
  // Find last training session (not rest)
  var lastSess = null;
  for (var i = sess.length - 1; i >= 0; i--) {
    if (sess[i].type !== 'Rest') { lastSess = sess[i]; break; }
  }
  if (!lastSess) return SESSION_ORDER[0];
  var idx = SESSION_ORDER.indexOf(lastSess.type);
  if (idx === -1) return SESSION_ORDER[0];
  return SESSION_ORDER[(idx + 1) % SESSION_ORDER.length];
}

function updNextSession() {
  var next = getNextSession();
  var el = document.getElementById('next-sess');
  if (el) el.textContent = next;
  // Also pre-select on strength log
  var sel = document.getElementById('s-type');
  if (sel) sel.value = next;
  // Pre-select chip on session log
  var chips = document.querySelectorAll('#wtype .chip');
  chips.forEach(function(c) {
    c.classList.remove('on');
    if (c.dataset.v === next) c.classList.add('on');
  });
}

// ============================================================
// STREAK
// ============================================================
function calcStreak() {
  var sess = DB.get('sessions') || [];
  if (!sess.length) return 0;
  // Get unique training dates (not rest days) sorted desc
  var dates = [];
  sess.forEach(function(s) {
    if (s.type !== 'Rest' && dates.indexOf(s.date) === -1) dates.push(s.date);
  });
  dates.sort().reverse();

  var streak = 0;
  var today = new Date();
  var check = new Date(today);
  check.setHours(0,0,0,0);

  for (var i = 0; i < dates.length; i++) {
    var d = new Date(dates[i]);
    d.setHours(0,0,0,0);
    var diff = Math.round((check - d) / 86400000);
    if (diff <= 1) {
      streak++;
      check = d;
    } else {
      break;
    }
  }
  return streak;
}

function updStreak() {
  var streak = calcStreak();
  var band = document.getElementById('streak-band');
  var num = document.getElementById('streak-num');
  var sub = document.getElementById('streak-sub');
  if (!band) return;
  if (streak >= 2) {
    band.style.display = 'flex';
    num.textContent = streak + ' DAY STREAK';
    sub.textContent = streak >= 7 ? 'On fire - keep it up' : streak >= 4 ? 'Strong week' : 'Building momentum';
  } else {
    band.style.display = 'none';
  }
}

// ============================================================
// WEEKLY SUMMARY
// ============================================================
function updWeeklySummary() {
  var sess = DB.get('sessions') || [];
  var nut = DB.get('nutrition') || [];
  var weights = DB.get('weights') || [];

  var now = new Date(); now.setHours(23,59,59,0);
  var ws = new Date(now); ws.setDate(now.getDate() - now.getDay() + 1); ws.setHours(0,0,0,0);

  var wkS = sess.filter(function(s) { var d = new Date(s.date); return d >= ws && d <= now && s.type !== 'Rest'; });
  var wkN = nut.filter(function(n) { var d = new Date(n.date); return d >= ws && d <= now; });
  var totalBoxing = wkS.reduce(function(t, s) { return t + (parseInt(s.boxing) || 0); }, 0);

  var wsEl = document.getElementById('ws-sessions');
  var wcEl = document.getElementById('ws-cal');
  var wpEl = document.getElementById('ws-prot');
  var wbEl = document.getElementById('ws-boxing');
  var wwtEl = document.getElementById('ws-wt-chg');

  if (wsEl) wsEl.textContent = wkS.length + ' / 4';
  if (wcEl) wcEl.textContent = wkN.length ? Math.round(wkN.reduce(function(t,n){ return t+(n.calories||0); },0)/wkN.length) + ' kcal' : '-';
  if (wpEl) wpEl.textContent = wkN.length ? Math.round(wkN.reduce(function(t,n){ return t+(n.protein||0); },0)/wkN.length) + 'g' : '-';
  if (wbEl) wbEl.textContent = totalBoxing + ' rds';

  // Weight change this week
  var wkWts = weights.filter(function(w) { var d = new Date(w.date); return d >= ws && d <= now; }).sort(function(a,b){ return a.date > b.date ? 1 : -1; });
  if (wwtEl) {
    if (wkWts.length >= 2) {
      var chg = Math.round((wkWts[wkWts.length-1].kg - wkWts[0].kg) * 10) / 10;
      wwtEl.textContent = (chg > 0 ? '+' : '') + chg + 'kg';
      wwtEl.style.color = chg <= 0 ? 'var(--green)' : 'var(--red)';
    } else if (wkWts.length === 1) {
      wwtEl.textContent = wkWts[0].kg + 'kg';
      wwtEl.style.color = 'var(--ink2)';
    } else {
      wwtEl.textContent = '-';
      wwtEl.style.color = 'var(--ink3)';
    }
  }
}

// ============================================================
// CALORIES REMAINING
// ============================================================
function updCalRemaining() {
  var target = 2065;
  var tc = 0, tp = 0;
  [1,2,3,4].forEach(function(n) { if(mData[n]){ tc += mData[n].calories||0; tp += mData[n].protein||0; } });
  if (mData['snack']) { tc += mData['snack'].calories||0; tp += mData['snack'].protein||0; }
  var rem = target - tc;
  var el = document.getElementById('cal-rem');
  var elr = document.getElementById('cal-rem-r');
  if (!el) return;
  el.textContent = rem > 0 ? rem : 0;
  el.style.color = rem > 500 ? 'var(--teal)' : rem > 200 ? 'var(--gold)' : rem > 0 ? 'var(--orange)' : 'var(--green)';
  if (elr) elr.innerHTML = tc + ' of ' + target + ' logged<br>' + tp + 'g protein logged';
}

// ============================================================
// BODY WEIGHT PREFILL
// ============================================================
function updBWHint() {
  var sess = DB.get('sessions') || [];
  var weights = DB.get('weights') || [];
  var lastBW = null;

  // Check weights log first, then sessions
  if (weights.length) lastBW = weights[weights.length-1].kg;
  else if (sess.length) lastBW = sess[sess.length-1].bw;

  var hint = document.getElementById('bw-hint');
  if (hint && lastBW) {
    hint.style.display = 'block';
    hint.textContent = '↺ Use last: ' + lastBW + 'kg';
  }
}

function prefillBW() {
  var sess = DB.get('sessions') || [];
  var weights = DB.get('weights') || [];
  var lastBW = null;
  if (weights.length) lastBW = weights[weights.length-1].kg;
  else if (sess.length) lastBW = sess[sess.length-1].bw;
  if (lastBW) {
    document.getElementById('l-bw').value = lastBW;
    toast('Weight prefilled: ' + lastBW + 'kg', 'ok');
  }
}

// ============================================================
// COPY LAST SESSION SETS
// ============================================================
function copyLastSets(blockId, evt) {
  if (evt) evt.stopPropagation();
  var block = exBlocks.find(function(b) { return b.id === blockId; });
  if (!block) return;

  var type = document.getElementById('s-type').value;
  var last = getLastSess(block.name, type);
  if (!last || !last.sets.length) { toast('No previous sets to copy', 'err'); return; }

  // Clear existing sets
  var container = document.getElementById('sets-' + blockId);
  if (container) container.innerHTML = '';
  block.sets = [];

  // Add sets from last session
  last.sets.forEach(function(s, idx) {
    var sn = idx + 1;
    var sid = 'set-' + blockId + '-' + sn;
    block.sets.push(sid);
    var d = document.createElement('div');
    d.className = 'set-row'; d.id = sid;
    d.innerHTML = '<div class="set-n">' + sn + '</div>'
      + '<div class="set-f"><input class="set-i" type="number" value="' + s.weight + '" id="' + sid + '-w" step="0.5"><div class="set-lbl">WEIGHT</div></div>'
      + '<div class="set-f"><input class="set-i" type="number" value="' + s.reps + '" id="' + sid + '-r"><div class="set-lbl">REPS</div></div>'
      + '<button class="del-btn" onclick="delSet('' + sid + '','' + blockId + '')">x</button>';
    if (container) container.appendChild(d);
  });

  toast('Last session weights copied', 'ok');
}

// ============================================================
// DIM MODE
// ============================================================
function toggleDim() {
  document.body.classList.toggle('dim-mode');
  var btn = document.getElementById('dim-btn');
  if (btn) btn.title = document.body.classList.contains('dim-mode') ? 'Exit dim mode' : 'Dim for gym';
}

// ============================================================
// TIMER auto-start on set save (hook into saveStrength)
// ============================================================
var _origSaveStrength = null;

// ============================================================
// BOOT
// ============================================================
init();
</script>
</body>
</html>
