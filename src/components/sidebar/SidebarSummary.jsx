import React from 'react';
import { Dice5 } from 'lucide-react';

export default function SidebarSummary({
  portraitUrl,
  characterName,
  totalLevel,
  selectedSubrace,
  selectedRace,
  classSummaryText,
  selectedBg,
  alignment,
  rollMode,
  setRollMode,
  currentHP,
  maxHP,
  displayAC,
  characterSpeed,
  STATS_INFO,
  getFinalScore,
  getModifierNum,
  rollD20Check,
  formatMod,
  profBonus,
  unlockedFeatSlots = [],
  getFeatSlotChoice,
  asiTiers,
  FEATS_LIST,
  WEAPON_MASTERIES_2024 = [],
  weaponMasteries = [],
  allKnownLanguages
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl sticky top-6 space-y-5 print-bg-light print-border print-text-dark">
      <div className="flex items-center gap-4 border-b border-slate-800 pb-4 print-border">
        {portraitUrl ? (
          <img src={portraitUrl} alt="Avatar" className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500" />
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black text-2xl">
            {(characterName || 'D')[0]}
          </div>
        )}
        <div>
          <h2 className="text-xl font-black text-white print-text-dark">
            {characterName || 'ผู้ผจญภัยนิรนาม'}
          </h2>
          <div className="text-xs font-bold text-amber-400">
            Lv.{totalLevel} • {selectedSubrace ? selectedSubrace.name_th : selectedRace.name_th}
          </div>
          <div className="text-xs text-slate-300 print-text-dark">{classSummaryText}</div>
          <div className="text-[11px] text-slate-400">ภูมิหลัง: {selectedBg.name_th} ({alignment})</div>
        </div>
      </div>

      <div className="bg-slate-950 rounded-xl p-1.5 border border-slate-800 flex gap-1 print-hidden">
        {[
          { id: 'normal', label: '🎲 ทอยปกติ' },
          { id: 'adv', label: '🟢 ได้เปรียบ (Adv)' },
          { id: 'disadv', label: '🔴 เสียเปรียบ (Dis)' }
        ].map(m => (
          <button
            key={m.id}
            onClick={() => setRollMode(m.id)}
            className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
              rollMode === m.id ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2.5 text-center">
        <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-2.5 print-bg-light print-border">
          <div className="text-[10px] text-slate-400 uppercase">HP สูงสุด</div>
          <div className="text-xl font-black text-rose-400">{currentHP}/{maxHP}</div>
        </div>
        <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-2.5 print-bg-light print-border">
          <div className="text-[10px] text-slate-400 uppercase">เกราะ (AC)</div>
          <div className="text-xl font-black text-sky-400">{displayAC}</div>
        </div>
        <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-2.5 print-bg-light print-border">
          <div className="text-[10px] text-slate-400 uppercase">ความเร็ว</div>
          <div className="text-base font-black text-emerald-400">{characterSpeed}</div>
        </div>
      </div>

      <div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>ค่าสถานะ (คลิกเพื่อทอยเต๋า)</span>
          <span className="text-emerald-400">Proficiency +{profBonus}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {STATS_INFO.map(stat => {
            const val = getFinalScore(stat.id);
            const mod = getModifierNum(val);
            return (
              <button
                key={stat.id}
                onClick={() => rollD20Check(`ทอยเช็ค ${stat.id}`, mod)}
                className="bg-slate-950 hover:border-amber-500 border border-slate-800 rounded-xl p-2.5 text-center transition-all print-bg-light print-border"
              >
                <div className="text-[11px] font-bold text-amber-400">{stat.id}</div>
                <div className="text-lg font-black text-white print-text-dark">{val}</div>
                <div className="text-xs font-bold text-emerald-400">{formatMod(mod)}</div>
              </button>
            );
          })}
        </div>
      </div>

      {unlockedFeatSlots.length > 0 && (
        <div className="space-y-1.5">
          <div className="text-xs font-bold text-amber-400 uppercase">Feats & ASI ที่เลือกไว้ ({unlockedFeatSlots.length})</div>
          <div className="flex flex-wrap gap-1.5">
            {unlockedFeatSlots.map(slot => {
              const ch = getFeatSlotChoice ? getFeatSlotChoice(slot) : asiTiers[slot.key];
              const fObj = FEATS_LIST.find(f => f.id === ch?.feat) || FEATS_LIST[0];
              return (
                <span key={slot.key} className="text-[11px] bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-lg">
                  {slot.label}: {fObj.name.split(' (')[0]}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {weaponMasteries.length > 0 && WEAPON_MASTERIES_2024.length > 0 && (
        <div className="space-y-1.5">
          <div className="text-xs font-bold text-emerald-400 uppercase">Weapon Mastery 2024 ({weaponMasteries.length})</div>
          <div className="flex flex-wrap gap-1.5">
            {weaponMasteries.map(wmId => {
              const wmObj = WEAPON_MASTERIES_2024.find(w => w.id === wmId);
              if (!wmObj) return null;
              return (
                <span
                  key={wmId}
                  title={`${wmObj.weapons} — ${wmObj.desc}`}
                  className="text-[11px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-lg font-semibold"
                >
                  ⚔️ {wmObj.name_en}: {wmObj.badge}
                </span>
              );
            })}
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        <div className="text-xs font-bold text-slate-400 uppercase">ภาษาที่สื่อสารได้ ({allKnownLanguages.length})</div>
        <div className="flex flex-wrap gap-1.5">
          {allKnownLanguages.map((lName, idx) => (
            <span key={idx} className="text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded-md border border-slate-700">
              {lName}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
