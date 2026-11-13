import React, { useState } from 'react';
import { Search, Sparkles, Wand2, Clock, Compass, Layers, ShieldAlert } from 'lucide-react';

export default function SpellsTab({
  maxSpellLevelUnlocked,
  spellSlots,
  setSpellSlots,
  combinedCantripOptions,
  selectedCantrips,
  combinedCantripQuota,
  SPELLS_DB,
  toggleSpell,
  rollDiceFormula,
  combinedSpellOptions,
  selectedSpells,
  autoPreparedSpells = [],
  maxPreparedSpells,
  setStatusMsg
}) {
  const [spellSearch, setSpellSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('all'); // 'all', 'picked', '0', '1'..'9'

  const handleCastLeveledSpell = (sName, meta) => {
    const sLv = meta.level || 1;
    const isRitualOnly = meta.ritual && (!spellSlots[sLv] || spellSlots[sLv].current <= 0);

    if (!isRitualOnly && (!spellSlots[sLv] || spellSlots[sLv].current <= 0)) {
      if (setStatusMsg) {
        setStatusMsg(`⚠️ ช่องเวทมนตร์ระดับ ${sLv} หมดแล้ว! กรุณากดพักผ่อนหรือเติมช่องเวทก่อนร่าย ${sName}`);
        setTimeout(() => setStatusMsg(null), 3500);
      }
      return;
    }

    if (meta.dice) {
      rollDiceFormula(`ร่ายคาถา ${sName} [Lv.${sLv}]`, meta.dice);
    } else if (setStatusMsg) {
      setStatusMsg(`✨ ร่ายคาถา "${sName}" (Lv.${sLv} • ${meta.school}) สำเร็จ! — ${meta.desc}`);
      setTimeout(() => setStatusMsg(null), 4500);
    }

    if (spellSlots[sLv]?.current > 0) {
      setSpellSlots(prev => ({
        ...prev,
        [sLv]: { ...prev[sLv], current: prev[sLv].current - 1 }
      }));
    }
  };

  const handleCastCantrip = (cName, meta) => {
    if (meta.dice) {
      rollDiceFormula(`ร่าย Cantrip: ${cName}`, meta.dice);
    } else if (setStatusMsg) {
      setStatusMsg(`✨ ร่าย Cantrip "${cName}" (${meta.school}) — ${meta.desc}`);
      setTimeout(() => setStatusMsg(null), 4000);
    }
  };

  const matchesSearch = (name, meta) => {
    if (!spellSearch.trim()) return true;
    const q = spellSearch.toLowerCase();
    return (
      name.toLowerCase().includes(q) ||
      (meta.school && meta.school.toLowerCase().includes(q)) ||
      (meta.desc && meta.desc.toLowerCase().includes(q))
    );
  };

  const filteredCantrips = combinedCantripOptions.filter(cName => {
    const meta = SPELLS_DB[cName] || {};
    if (levelFilter === 'picked' && !selectedCantrips.includes(cName)) return false;
    if (levelFilter !== 'all' && levelFilter !== 'picked' && levelFilter !== '0') return false;
    return matchesSearch(cName, meta);
  });

  const filteredSpells = combinedSpellOptions
    .filter(sName => (SPELLS_DB[sName]?.level || 1) <= maxSpellLevelUnlocked)
    .filter(sName => {
      const meta = SPELLS_DB[sName] || { level: 1 };
      if (levelFilter === 'picked' && !selectedSpells.includes(sName) && !autoPreparedSpells.includes(sName)) return false;
      if (levelFilter === '0') return false;
      if (levelFilter !== 'all' && levelFilter !== 'picked' && String(meta.level) !== levelFilter) return false;
      return matchesSearch(sName, meta);
    })
    .sort((a, b) => (SPELLS_DB[a]?.level || 1) - (SPELLS_DB[b]?.level || 1) || a.localeCompare(b));

  return (
    <div className="animate-in fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-amber-400" /> คัมภีร์เวทมนตร์ (Spell Compendium Lv.0 - Lv.9)
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            ปลดล็อกคาถาสูงสุดถึง <strong className="text-amber-400">ระดับ {maxSpellLevelUnlocked}</strong> ตามเลเวลผู้ร่ายเวทรวม (ฐานข้อมูลครบ 200 บท)
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={spellSearch}
            onChange={(e) => setSpellSearch(e.target.value)}
            placeholder="ค้นหาชื่อคาถา, สำนัก, ผลลัพธ์..."
            className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl pl-9 pr-3 py-2 text-xs text-white outline-none"
          />
        </div>
      </div>

      {/* Spell Slots Tracker */}
      <div className="bg-slate-950/90 border border-indigo-500/30 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">ช่องเวทมนตร์ (Spell Slots Tracker)</span>
          <span className="text-[11px] text-slate-400">คลิกที่จุดวงกลมเพื่อใช้/ฟื้นฟูช่องเวท หรือกดปุ่ม "ร่าย" ที่การ์ดคาถาเพื่อหักอัตโนมัติ</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {Object.entries(spellSlots).map(([sLv, slotObj]) => (
            <div key={sLv} className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center space-y-1.5">
              <div className="text-xs font-bold text-amber-400">
                ระดับ {sLv} {slotObj.isPact ? (slotObj.regularMax > 0 ? `(ปกติ ${slotObj.regularMax} + Pact ${slotObj.pactMax})` : `(Pact ${slotObj.pactMax})`) : slotObj.isArcanum ? '(Arcanum)' : ''}
              </div>
              <div className="flex items-center justify-center gap-1 flex-wrap">
                {Array.from({ length: slotObj.max }).map((_, idx) => {
                  const active = idx < slotObj.current;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSpellSlots(prev => ({
                          ...prev,
                          [sLv]: { ...prev[sLv], current: active ? slotObj.current - 1 : slotObj.current + 1 }
                        }));
                      }}
                      className={`w-4 h-4 rounded-full border transition-all ${
                        active ? 'bg-indigo-500 border-indigo-300 shadow-sm shadow-indigo-400' : 'bg-slate-800 border-slate-600'
                      }`}
                    />
                  );
                })}
              </div>
              <div className="text-[10px] text-slate-400">{slotObj.current} / {slotObj.max} ช่อง</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-1.5 bg-slate-950/70 p-2 rounded-xl border border-slate-800">
        {[
          { id: 'all', label: '🌟 ทั้งหมด' },
          { id: 'picked', label: `✅ ที่เลือกไว้ (${selectedCantrips.length + selectedSpells.length})` },
          { id: '0', label: 'Cantrips (Lv.0)' },
          ...Array.from({ length: maxSpellLevelUnlocked }, (_, i) => ({
            id: String(i + 1),
            label: `Lv.${i + 1}`
          }))
        ].map(btn => (
          <button
            key={btn.id}
            onClick={() => setLevelFilter(btn.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              levelFilter === btn.id
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Cantrips Selection */}
      {filteredCantrips.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="text-lg font-bold text-amber-400">
              คาถาพื้นฐาน (Cantrips — ร่ายฟรีไม่เสียช่องเวท)
            </h3>
            <span className="text-xs bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-lg font-bold">
              เลือกแล้ว: {selectedCantrips.length} / {Math.max(2, combinedCantripQuota)}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredCantrips.map(cName => {
              const meta = SPELLS_DB[cName] || {
                level: 0, school: 'Evocation', action: '1 Action', range: '60 ฟุต',
                components: 'V, S', duration: 'ทันที', desc: 'คาถาพื้นฐานประจำคลาส'
              };
              const picked = selectedCantrips.includes(cName);
              return (
                <div
                  key={cName}
                  className={`p-4 rounded-xl border transition-all flex flex-col justify-between gap-2.5 ${
                    picked ? 'border-amber-500 bg-amber-500/10 shadow-md' : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <button
                        onClick={() => toggleSpell(cName, 'cantrip')}
                        className="font-bold text-slate-100 text-sm text-left flex-1 hover:text-amber-300 transition-colors"
                      >
                        {picked ? '✅ ' : '+ '} {cName}
                      </button>
                      <button
                        onClick={() => handleCastCantrip(cName, meta)}
                        className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-lg text-xs font-bold shrink-0"
                      >
                        {meta.dice ? `🎲 ร่าย (${meta.dice})` : '✨ ร่ายคาถา'}
                      </button>
                    </div>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                      <span className="bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-semibold">
                        {meta.school}
                      </span>
                      <span className="bg-slate-900 text-slate-300 border border-slate-800 px-2 py-0.5 rounded">
                        ⏱️ {meta.action}
                      </span>
                      <span className="bg-slate-900 text-emerald-300 border border-slate-800 px-2 py-0.5 rounded">
                        📏 {meta.range}
                      </span>
                      {meta.components && (
                        <span className="bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                          🧩 {meta.components}
                        </span>
                      )}
                      {meta.duration && (
                        <span className="bg-slate-900 text-sky-300 border border-slate-800 px-2 py-0.5 rounded">
                          ⏳ {meta.duration}
                        </span>
                      )}
                      {meta.concentration && (
                        <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2 py-0.5 rounded font-bold">
                          🧠 เพ่งสมาธิ (C)
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{meta.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Leveled Spells Selection */}
      {filteredSpells.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="text-lg font-bold text-indigo-400">
              คาถาระดับ 1 - {maxSpellLevelUnlocked} (Leveled Spells)
            </h3>
            <span className="text-xs bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-lg font-bold">
              เลือกแล้ว: {selectedSpells.length} / {Math.max(2, maxPreparedSpells)}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredSpells.map(sName => {
              const meta = SPELLS_DB[sName] || {
                level: 1, school: 'Evocation', action: '1 Action', range: '60 ฟุต',
                components: 'V, S', duration: 'ทันที', desc: 'คาถาเวทมนตร์ประจำสายอาชีพ'
              };
              const isAutoSub = autoPreparedSpells.includes(sName);
              const picked = isAutoSub || selectedSpells.includes(sName);
              const sLv = meta.level || 1;
              const slotRemaining = spellSlots[sLv]?.current || 0;

              return (
                <div
                  key={sName}
                  className={`p-4 rounded-xl border transition-all flex flex-col justify-between gap-2.5 ${
                    picked ? 'border-indigo-400 bg-indigo-500/15 shadow-md' : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <button
                        onClick={() => toggleSpell(sName, 'spell')}
                        className="font-bold text-slate-100 text-sm text-left flex-1 hover:text-indigo-300 transition-colors"
                      >
                        {isAutoSub ? '🌟 [เวทสายอาชีพ] ' : picked ? '✅ ' : '+ '} <span className="text-indigo-400">[Lv.{sLv}]</span> {sName}
                      </button>
                      <button
                        onClick={() => handleCastLeveledSpell(sName, meta)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold border shrink-0 transition-all ${
                          slotRemaining > 0 || meta.ritual
                            ? 'bg-indigo-500/20 hover:bg-indigo-500/40 text-indigo-200 border-indigo-500/40'
                            : 'bg-slate-900 text-slate-500 border-slate-800'
                        }`}
                        title={slotRemaining > 0 ? `เหลือช่องเวท Lv.${sLv} จำนวน ${slotRemaining} ช่อง` : 'ช่องเวทหมดแล้ว'}
                      >
                        {meta.dice ? `🎲 ร่าย (${meta.dice})` : '✨ ร่ายเวท'}
                      </button>
                    </div>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                      <span className="bg-slate-800 text-indigo-300 px-2 py-0.5 rounded font-semibold">
                        {meta.school}
                      </span>
                      <span className="bg-slate-900 text-slate-300 border border-slate-800 px-2 py-0.5 rounded">
                        ⏱️ {meta.action}
                      </span>
                      <span className="bg-slate-900 text-emerald-300 border border-slate-800 px-2 py-0.5 rounded">
                        📏 {meta.range}
                      </span>
                      {meta.components && (
                        <span className="bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                          🧩 {meta.components}
                        </span>
                      )}
                      {meta.duration && (
                        <span className="bg-slate-900 text-sky-300 border border-slate-800 px-2 py-0.5 rounded">
                          ⏳ {meta.duration}
                        </span>
                      )}
                      {meta.concentration && (
                        <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2 py-0.5 rounded font-bold">
                          🧠 เพ่งสมาธิ (C)
                        </span>
                      )}
                      {meta.ritual && (
                        <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-bold">
                          🕯️ พิธีกรรม (R)
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{meta.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
