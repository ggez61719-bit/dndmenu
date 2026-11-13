import React from 'react';
import { Sparkles } from 'lucide-react';

export default function StatsFeatsTab({
  STATS_INFO,
  STANDARD_ARRAY,
  scores,
  handleScoreChange,
  bonus2,
  handleBonus2Change,
  bonus1,
  handleBonus1Change,
  getFinalScore,
  getModifierNum,
  formatMod,
  rollD20Check,
  unlockedFeatSlots = [],
  getFeatSlotChoice,
  allCharacterClasses = [],
  totalLevel,
  FEATS_LIST,
  featSearch,
  setFeatSearch,
  asiTiers,
  setAsiTiers
}) {
  const classSummary = allCharacterClasses.map(c => `${c.cls.name_th} Lv.${c.level}`).join(' / ');

  return (
    <div className="animate-in fade-in space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-100">ค่าสถานะ (Standard Array) & Feats</h2>
        <p className="text-xs text-slate-400 mt-1">
          จัดสรรแต้ม 15, 14, 13, 12, 10, 8 พร้อมเลือกโบนัสเริ่มต้น +2 / +1 และเลือก Feats ทั้ง 37 แบบจาก Tool form Renji
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STATS_INFO.map(stat => {
          const finalScore = getFinalScore(stat.id);
          const mod = getModifierNum(finalScore);
          return (
            <div key={stat.id} className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-black text-amber-400">{stat.id}</span>
                  <span className="text-xs text-slate-300 ml-2 font-semibold">{stat.name}</span>
                  <p className="text-[11px] text-slate-400">{stat.desc}</p>
                </div>
                <button
                  onClick={() => rollD20Check(`ทอยทดสอบ ${stat.id}`, mod)}
                  className="bg-slate-950 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500 rounded-xl px-3 py-2 text-center transition-all"
                  title="คลิกเพื่อทอยเต๋า 1d20"
                >
                  <div className="text-xl font-black text-white">{finalScore}</div>
                  <div className="text-xs font-bold text-emerald-400">{formatMod(mod)}</div>
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-700/70 gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-400">ค่าตั้งต้น:</span>
                  <select
                    value={scores[stat.id]}
                    onChange={(e) => handleScoreChange(stat.id, e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-sm font-bold text-amber-400 outline-none"
                  >
                    {STANDARD_ARRAY.map(val => (
                      <option key={val} value={val}>{val}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleBonus2Change(stat.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      bonus2 === stat.id ? 'bg-amber-500 text-slate-950 shadow' : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    +2
                  </button>
                  <button
                    onClick={() => handleBonus1Change(stat.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      bonus1 === stat.id ? 'bg-indigo-500 text-white shadow' : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    +1
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-950/90 border border-amber-500/30 rounded-2xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> ความสามารถพิเศษ & อัพสเตตัส (Feats — คิดตามเลเวลของแต่ละคลาส)
            </h3>
            <p className="text-xs text-slate-400">
              ปลดล็อกเมื่อ <strong>เลเวลของคลาสนั้นๆ (Class Level)</strong> ถึง Lv.4, 8, 12, 16, 19 (Fighter ได้เพิ่มที่ Lv.6, 14 / Rogue ได้เพิ่มที่ Lv.10)
            </p>
          </div>
          <input
            type="text"
            value={featSearch}
            onChange={(e) => setFeatSearch(e.target.value)}
            placeholder="🔍 ค้นหาชื่อ Feat หรือผลลัพธ์..."
            className="bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl px-3 py-1.5 text-xs text-white outline-none w-full sm:w-60"
          />
        </div>

        {unlockedFeatSlots.length === 0 ? (
          <div className="text-xs text-amber-300/90 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 leading-relaxed">
            💡 ปัจจุบันคุณคือ <strong>{classSummary}</strong> (เลเวลรวม Lv.{totalLevel}) — ตามกฎ D&D 5e / BG3 คุณต้องอัพเลเวลของ <strong>คลาสใดคลาสหนึ่งให้ถึง Lv.4 ขึ้นไป</strong> ก่อน จึงจะปลดล็อกช่องเลือก Feat ได้!
          </div>
        ) : (
          <div className="space-y-4">
            {unlockedFeatSlots.map((slot, sIdx) => {
              const slotKey = slot.key;
              const currentChoice = getFeatSlotChoice ? getFeatSlotChoice(slot) : (asiTiers[slotKey] || { feat: 'asi', stat: 'STR', stat2: 'STR' });
              const selectedFeatObj = FEATS_LIST.find(f => f.id === currentChoice.feat) || FEATS_LIST[0];
              const filteredFeats = FEATS_LIST.filter(f =>
                f.id === currentChoice.feat ||
                f.name.toLowerCase().includes(featSearch.toLowerCase()) ||
                f.desc.toLowerCase().includes(featSearch.toLowerCase())
              );

              return (
                <div key={slotKey} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-black bg-amber-500 text-slate-950 px-2.5 py-1 rounded-lg">
                      ช่อง Feat #{sIdx + 1} — ปลดล็อกจาก {slot.label} {slot.badgeText}
                    </span>
                    <span className="text-xs text-indigo-400 font-semibold">{selectedFeatObj.category}</span>
                  </div>

                  <select
                    value={currentChoice.feat}
                    onChange={(e) => {
                      const newFeat = FEATS_LIST.find(f => f.id === e.target.value) || FEATS_LIST[0];
                      const defaultStat = newFeat.statOptions?.[0] || 'STR';
                      setAsiTiers(prev => ({
                        ...prev,
                        [slotKey]: { feat: e.target.value, stat: defaultStat, stat2: defaultStat }
                      }));
                    }}
                    className="w-full bg-slate-950 border border-slate-700 text-amber-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
                  >
                    {filteredFeats.map(f => (
                      <option key={f.id} value={f.id}>
                        [{f.category}] {f.name}
                      </option>
                    ))}
                  </select>

                  <p className="text-xs text-slate-300 bg-slate-950/70 border border-slate-800/80 rounded-lg p-3 leading-relaxed">
                    {selectedFeatObj.desc}
                  </p>

                  {selectedFeatObj.id === 'asi' && (
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">แต้มที่ 1 (+1):</span>
                        <select
                          value={currentChoice.stat || 'STR'}
                          onChange={(e) => setAsiTiers(prev => ({ ...prev, [slotKey]: { ...currentChoice, stat: e.target.value } }))}
                          className="bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-xs rounded-lg px-2.5 py-1.5"
                        >
                          {STATS_INFO.map(s => <option key={s.id} value={s.id}>{s.id} (+1)</option>)}
                        </select>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">แต้มที่ 2 (+1):</span>
                        <select
                          value={currentChoice.stat2 || currentChoice.stat || 'STR'}
                          onChange={(e) => setAsiTiers(prev => ({ ...prev, [slotKey]: { ...currentChoice, stat2: e.target.value } }))}
                          className="bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-xs rounded-lg px-2.5 py-1.5"
                        >
                          {STATS_INFO.map(s => <option key={s.id} value={s.id}>{s.id} (+1)</option>)}
                        </select>
                      </div>
                      <span className="text-[11px] text-slate-500">(เลือกค่าเดียวกันทั้ง 2 ช่องเพื่อบวก +2)</span>
                    </div>
                  )}

                  {selectedFeatObj.id !== 'asi' && selectedFeatObj.statBonus === 1 && (
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-xs text-amber-300 font-semibold">เลือกค่าสถานะที่ได้รับโบนัส +1 จาก Feat นี้:</span>
                      <select
                        value={selectedFeatObj.statOptions?.includes(currentChoice.stat) ? currentChoice.stat : selectedFeatObj.statOptions?.[0]}
                        onChange={(e) => setAsiTiers(prev => ({ ...prev, [slotKey]: { ...currentChoice, stat: e.target.value } }))}
                        className="bg-slate-800 border border-amber-500/40 text-amber-400 font-bold text-xs rounded-lg px-3 py-1.5"
                      >
                        {selectedFeatObj.statOptions?.map(st => (
                          <option key={st} value={st}>{st} +1</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
