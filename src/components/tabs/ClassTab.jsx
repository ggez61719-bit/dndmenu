import React, { useState } from 'react';
import { UserPlus, Sparkles, Trash2 } from 'lucide-react';

export default function ClassTab({
  level,
  totalLevel,
  classSummaryText,
  handleAddMulticlass,
  CLASSES,
  selectedClass,
  handleSelectClass,
  isSubclassUnlocked,
  selectedSubclass,
  setSelectedSubclass,
  multiclasses,
  handleUpdateMulticlass,
  handleRemoveMulticlass,
  allCharacterClasses,
  fightingStyles,
  setFightingStyles,
  warlockInvocations,
  setWarlockInvocations,
  warlockPactBoon,
  setWarlockPactBoon,
  sorcererMetamagic,
  setSorcererMetamagic,
  rangerFavoredEnemy,
  setRangerFavoredEnemy,
  rangerNaturalExplorer,
  setRangerNaturalExplorer,
  bardExpertise,
  setBardExpertise,
  druidWildShape,
  setDruidWildShape,
  rogueExpertise,
  setRogueExpertise,
  battleMasterManeuvers = [],
  setBattleMasterManeuvers,
  championExtraStyle = '',
  setChampionExtraStyle,
  wildheartBestialHeart = 'bear',
  setWildheartBestialHeart,
  wildheartAnimalAspect = 'aspect_bear',
  setWildheartAnimalAspect,
  wildheartSecondAspect = 'aspect_eagle',
  setWildheartSecondAspect,
  monkElementsDisciplines = [],
  setMonkElementsDisciplines,
  hunterPreyChoice = 'colossus_slayer',
  setHunterPreyChoice,
  hunterDefenseChoice = 'multiattack_def',
  setHunterDefenseChoice,
  hunterMultiattackChoice = 'volley',
  setHunterMultiattackChoice,
  beastMasterCompanion = 'ursa',
  setBeastMasterCompanion,
  landCircleTerrain = 'grassland',
  setLandCircleTerrain,
  homebrewConfig = {},
  setHomebrewConfig,
  profBonus = 2,
  chaMod = 0,
  rollDiceFormula,
  setStatusMsg,
  selectedSkills,
  selectedBg,
  SKILLS_META
}) {

  const [hbFeatLv, setHbFeatLv] = useState(1);
  const [hbFeatName, setHbFeatName] = useState('');
  const [hbFeatDice, setHbFeatDice] = useState('');
  const [hbFeatDesc, setHbFeatDesc] = useState('');

  const toggleArrayItem = (setter, list, item, maxQuota) => {
    if (list.includes(item)) {
      setter(list.filter(x => x !== item));
    } else if (list.length < maxQuota) {
      setter([...list, item]);
    }
  };
  return (
    <div className="animate-in fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">เลือกอาชีพหลัก (Primary Class — Lv.{level})</h2>
          <p className="text-xs text-slate-400">เลเวลรวมทั้งหมดของตัวละคร: <strong className="text-amber-400">Lv.{totalLevel} / 20</strong> ({classSummaryText})</p>
        </div>
        <button
          onClick={handleAddMulticlass}
          disabled={totalLevel >= 20}
          className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-lg transition-all self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4" /> + เพิ่มอาชีพเสริม (Multiclass)
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {CLASSES.map(cls => {
          const isHb = cls.id === 'homebrew';
          const displayTh = isHb && homebrewConfig?.classNameTh ? `✨ ${homebrewConfig.classNameTh}` : cls.name_th;
          const displayDie = isHb && homebrewConfig?.hitDie ? homebrewConfig.hitDie : cls.hitDie;
          return (
            <button key={cls.id} onClick={() => handleSelectClass(cls)}
              className={`p-3 rounded-lg border text-left transition-all ${
                selectedClass.id === cls.id
                  ? isHb ? 'border-fuchsia-400 bg-fuchsia-500/20 shadow-lg shadow-fuchsia-950/50' : 'border-amber-500 bg-amber-500/10'
                  : isHb ? 'border-fuchsia-500/40 bg-fuchsia-950/20 hover:border-fuchsia-400' : 'border-slate-700 bg-slate-800 hover:border-slate-500'
              }`}
            >
              <div className={`font-semibold ${isHb ? 'text-fuchsia-300' : 'text-slate-200'}`}>{displayTh}</div>
              <div className="text-xs text-slate-400">{isHb ? (homebrewConfig?.classNameEn || 'Custom Homebrew') : cls.name_en} (1d{displayDie})</div>
            </button>
          );
        })}
      </div>

      <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-indigo-400 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> สายอาชีพย่อยของ {selectedClass.name_th} — ปลดล็อกที่ Lv.{selectedClass.subclassLevel}
          </h3>
          {!isSubclassUnlocked && (
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-full">
              ปรับเลเวล {selectedClass.name_th} เป็น Lv.{selectedClass.subclassLevel}+ เพื่อเปิดใช้งาน
            </span>
          )}
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 ${!isSubclassUnlocked ? 'opacity-50 pointer-events-none' : ''}`}>
          {selectedClass.subclasses?.map(sub => (
            <button
              key={sub.id}
              onClick={() => setSelectedSubclass(sub)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedSubclass?.id === sub.id
                  ? 'border-indigo-400 bg-indigo-500/20 shadow-md'
                  : 'border-slate-700 bg-slate-900/70 hover:border-slate-500'
              }`}
            >
              <div className="font-bold text-slate-100 text-sm mb-1">{sub.name_th}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{sub.desc}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-indigo-950/25 rounded-xl p-5 border border-indigo-500/40 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-indigo-400" /> ระบบผสมหลายอาชีพ (Multiclass Builder)
            </h3>
            <p className="text-xs text-slate-400">
              ผสมคลาสได้อิสระตามกฎ D&D / Tool form Renji (เช่น พาลาดิน 2 / บาร์ด 10 หรือ ไฟต์เตอร์ 2 / วอร์ล็อค 2 / ซอร์เซอเรอร์ 8)
            </p>
          </div>
          <button
            onClick={handleAddMulticlass}
            disabled={totalLevel >= 20}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
          >
            + เพิ่มคลาสเสริม
          </button>
        </div>

        {multiclasses.length === 0 ? (
          <div className="text-xs text-slate-400 bg-slate-900/60 border border-slate-800 rounded-lg p-3.5">
            ปัจจุบันคุณเล่นเป็น <strong>อาชีพเดี่ยว (Single Class: {selectedClass.name_th} Lv.{level})</strong> หากต้องการผสมอาชีพอื่น ให้กดปุ่ม <strong>"+ เพิ่มคลาสเสริม"</strong> ด้านบน (ต้องมีเลเวลว่างเหลือจากเพดาน Lv.20)
          </div>
        ) : (
          <div className="space-y-3">
            {multiclasses.map((mc, idx) => {
              const mcClsObj = CLASSES.find(c => c.id === mc.classId) || CLASSES[0];
              const mcSubUnlocked = mc.level >= (mcClsObj.subclassLevel || 1);
              return (
                <div key={mc.id} className="bg-slate-900/90 border border-indigo-500/40 rounded-xl p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
                        คลาสเสริม #{idx + 1}
                      </span>
                      <select
                        value={mc.classId}
                        onChange={(e) => handleUpdateMulticlass(mc.id, 'classId', e.target.value)}
                        className="bg-slate-800 border border-slate-700 text-white text-sm font-bold rounded-lg px-3 py-1.5 outline-none"
                      >
                        {CLASSES.filter(c => c.id !== selectedClass.id && !multiclasses.some(other => other.id !== mc.id && other.classId === c.id)).map(c => (
                          <option key={c.id} value={c.id}>{c.name_th} ({c.name_en} - 1d{c.hitDie})</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">เลเวลคลาสนี้:</span>
                      <button
                        onClick={() => handleUpdateMulticlass(mc.id, 'level', mc.level - 1)}
                        className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="text-sm font-black text-amber-400 px-2">Lv.{mc.level}</span>
                      <button
                        onClick={() => handleUpdateMulticlass(mc.id, 'level', mc.level + 1)}
                        disabled={totalLevel >= 20}
                        className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white font-bold text-xs"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveMulticlass(mc.id)}
                        className="ml-2 p-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 transition-all"
                        title="ลบคลาสเสริมนี้"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {mcSubUnlocked ? (
                    <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-xs text-indigo-300 font-semibold shrink-0">สายอาชีพย่อย ({mcClsObj.name_th}):</span>
                      <select
                        value={mc.subclassId || ''}
                        onChange={(e) => handleUpdateMulticlass(mc.id, 'subclassId', e.target.value)}
                        className="bg-slate-950 border border-indigo-500/40 text-slate-200 text-xs rounded-lg px-3 py-1.5 outline-none flex-1"
                      >
                        {mcClsObj.subclasses?.map(sc => (
                          <option key={sc.id} value={sc.id}>{sc.name_th} — {sc.desc}</option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-500">
                      * สายอาชีพย่อยของ {mcClsObj.name_th} จะปลดล็อกเมื่ออัพคลาสนี้ถึง Lv.{mcClsObj.subclassLevel}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      
      {/* ➕ Class Specific Choices (ตัวเลือกพิเศษประจำอาชีพ) */}
      {allCharacterClasses.some(c => c.cls.fightingStyles && c.level >= (c.cls.fightingStyleLevel || 1)) && (
        <div className="bg-indigo-950/20 rounded-xl p-5 border border-indigo-500/30 space-y-4">
          <h3 className="text-lg font-bold text-indigo-400">ตัวเลือกพิเศษประจำอาชีพ (Class Features Choices)</h3>
          
          {allCharacterClasses.filter(c => c.cls.fightingStyles && c.level >= (c.cls.fightingStyleLevel || 1)).map((cItem, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-100">{cItem.cls.name_th}: Fighting Style (รูปแบบการต่อสู้)</span>
                <span className="text-xs text-amber-400">ปลดล็อกตอน Lv.{cItem.cls.fightingStyleLevel || 1}</span>
              </div>
              <select
                value={fightingStyles[cItem.cls.id] || ''}
                onChange={(e) => setFightingStyles(prev => ({ ...prev, [cItem.cls.id]: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-700 text-amber-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
              >
                <option value="">-- เลือกรูปแบบการต่อสู้ --</option>
                {cItem.cls.fightingStyles.map(fs => (
                  <option key={fs.id} value={fs.id}>[{fs.name}] {fs.desc}</option>
                ))}
              </select>
              {fightingStyles[cItem.cls.id] && (
                <p className="text-xs text-slate-300 bg-slate-950/70 border border-slate-800/80 rounded-lg p-3 leading-relaxed">
                  {cItem.cls.fightingStyles.find(f => f.id === fightingStyles[cItem.cls.id])?.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      
      {/* ➕ Warlock Invocations & Pact Boon */}
      {allCharacterClasses.some(c => c.cls.id === 'warlock' && c.level >= 2) && (
        <div className="bg-purple-950/20 rounded-xl p-5 border border-purple-500/30 space-y-4">
          <h3 className="text-lg font-bold text-purple-400">Eldritch Invocations & Pact Boon (Warlock)</h3>
          
          {allCharacterClasses.filter(c => c.cls.id === 'warlock').map((cItem, idx) => {
            const wLv = cItem.level;
            const invQuota = wLv >= 18 ? 8 : wLv >= 15 ? 7 : wLv >= 12 ? 6 : wLv >= 9 ? 5 : wLv >= 7 ? 4 : wLv >= 5 ? 3 : wLv >= 2 ? 2 : 0;
            
            return (
              <div key={idx} className="space-y-4">
                {wLv >= 2 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-bold text-slate-100">Eldritch Invocations (มนตราลี้ลับ)</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">เลือกแล้ว: {warlockInvocations.length} / {invQuota}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {(cItem.cls.invocations || []).map(inv => {
                        const picked = warlockInvocations.includes(inv.id);
                        const meetsLv = wLv >= (inv.minLv || 2);
                        const meetsPact = !inv.pact || warlockPactBoon === inv.pact;
                        const isLocked = !meetsLv || !meetsPact;

                        return (
                          <button
                            key={inv.id}
                            onClick={() => {
                              if (isLocked && !picked) return;
                              toggleArrayItem(setWarlockInvocations, warlockInvocations, inv.id, invQuota);
                            }}
                            disabled={(!picked && warlockInvocations.length >= invQuota) || (isLocked && !picked)}
                            className={`p-3 rounded-xl border text-left transition-all text-xs disabled:opacity-50 flex flex-col justify-between gap-1.5 ${
                              picked
                                ? 'border-purple-500 bg-purple-500/20 shadow-md'
                                : isLocked
                                ? 'border-slate-800/80 bg-slate-950/40 text-slate-500 cursor-not-allowed'
                                : 'border-slate-700 bg-slate-950 hover:border-purple-400/60'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <span className={`font-bold ${picked ? 'text-purple-300' : isLocked ? 'text-slate-400' : 'text-slate-200'}`}>
                                  {picked ? '✅ ' : ''}{inv.name}
                                </span>
                                <div className="flex items-center gap-1 shrink-0">
                                  {inv.minLv && inv.minLv > 2 && (
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded border font-bold ${
                                      meetsLv ? 'bg-purple-900/40 text-purple-300 border-purple-500/40' : 'bg-rose-950/40 text-rose-400 border-rose-500/30'
                                    }`}>
                                      Lv.{inv.minLv}+
                                    </span>
                                  )}
                                  {inv.pact && (
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded border font-bold ${
                                      meetsPact ? 'bg-amber-900/40 text-amber-300 border-amber-500/40' : 'bg-slate-900 text-amber-500/60 border-amber-500/30'
                                    }`}>
                                      {inv.pact === 'blade' ? 'Pact of Blade' : inv.pact === 'chain' ? 'Pact of Chain' : 'Pact of Tome'}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="text-[11px] text-slate-400 leading-relaxed">{inv.desc}</div>
                            </div>
                            {isLocked && !picked && (
                              <div className="text-[10px] text-rose-400/90 font-medium pt-1 border-t border-slate-800/80">
                                🔒 {!meetsLv ? `ต้องการ Warlock เลเวล ${inv.minLv}+` : `ต้องการ ${inv.pact === 'blade' ? 'Pact of the Blade' : inv.pact === 'chain' ? 'Pact of the Chain' : 'Pact of the Tome'}`}
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {wLv >= 3 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-bold text-slate-100">Pact Boon (พันธสัญญาแห่งพลัง)</span>
                      <span className="text-xs text-amber-400">ปลดล็อกตอน Lv.3</span>
                    </div>
                    <select
                      value={warlockPactBoon}
                      onChange={(e) => setWarlockPactBoon(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-purple-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
                    >
                      <option value="">-- เลือกพันธสัญญา --</option>
                      {cItem.cls.pactBoons.map(pb => (
                        <option key={pb.id} value={pb.id}>{pb.name}</option>
                      ))}
                    </select>
                    {warlockPactBoon && (
                      <p className="text-xs text-slate-300 bg-slate-950/70 border border-slate-800/80 rounded-lg p-3 leading-relaxed">
                        {cItem.cls.pactBoons.find(p => p.id === warlockPactBoon)?.desc}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ➕ Sorcerer Metamagic */}
      {allCharacterClasses.some(c => c.cls.id === 'sorcerer' && c.level >= 3) && (
        <div className="bg-rose-950/20 rounded-xl p-5 border border-rose-500/30 space-y-4">
          <h3 className="text-lg font-bold text-rose-400">Metamagic (Sorcerer)</h3>
          
          {allCharacterClasses.filter(c => c.cls.id === 'sorcerer').map((cItem, idx) => {
            const sLv = cItem.level;
            const metaQuota = sLv >= 17 ? 4 : sLv >= 10 ? 3 : sLv >= 3 ? 2 : 0;
            
            if (sLv < 3) return null;
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-100">ดัดแปลงเวทมนตร์ (Sorcery Points: {sLv})</span>
                  <span className="text-xs bg-rose-500/20 text-rose-300 px-2 py-1 rounded">เลือกแล้ว: {sorcererMetamagic.length} / {metaQuota}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {cItem.cls.metamagic.map(mm => {
                    const picked = sorcererMetamagic.includes(mm.id);
                    return (
                      <button
                        key={mm.id}
                        onClick={() => toggleArrayItem(setSorcererMetamagic, sorcererMetamagic, mm.id, metaQuota)}
                        disabled={!picked && sorcererMetamagic.length >= metaQuota}
                        className={`p-2.5 rounded-xl border text-left transition-all text-xs disabled:opacity-50 ${
                          picked ? 'border-rose-500 bg-rose-500/20 shadow' : 'border-slate-700 bg-slate-950 hover:border-rose-400/50'
                        }`}
                      >
                        <div className="font-bold text-slate-200 mb-1">{picked ? '✅ ' : ''}{mm.name}</div>
                        <div className="text-[10px] text-slate-400">{mm.desc}</div>
                      </button>
                    )
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      
      {/* ➕ Ranger: Favored Enemy & Natural Explorer */}
      {allCharacterClasses.some(c => c.cls.id === 'ranger' && c.level >= 1) && (
        <div className="bg-emerald-950/20 rounded-xl p-5 border border-emerald-500/30 space-y-4">
          <h3 className="text-lg font-bold text-emerald-400">Ranger's Calling (สัญชาตญาณนักล่า)</h3>
          
          {allCharacterClasses.filter(c => c.cls.id === 'ranger').map((cItem, idx) => (
            <div key={idx} className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-100">Favored Enemy (ศัตรูคู่อาฆาต)</span>
                  <span className="text-xs text-emerald-400">ปลดล็อกตอน Lv.1</span>
                </div>
                <select
                  value={rangerFavoredEnemy}
                  onChange={(e) => setRangerFavoredEnemy(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-emerald-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
                >
                  <option value="">-- เลือกศัตรูคู่อาฆาต --</option>
                  {cItem.cls.favoredEnemies.map(fe => (
                    <option key={fe.id} value={fe.id}>[{fe.name}]</option>
                  ))}
                </select>
                {rangerFavoredEnemy && (
                  <p className="text-xs text-slate-300 bg-slate-950/70 border border-slate-800/80 rounded-lg p-3 leading-relaxed">
                    {cItem.cls.favoredEnemies.find(f => f.id === rangerFavoredEnemy)?.desc}
                  </p>
                )}
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-100">Natural Explorer (นักสำรวจธรรมชาติ)</span>
                  <span className="text-xs text-emerald-400">ปลดล็อกตอน Lv.1</span>
                </div>
                <select
                  value={rangerNaturalExplorer}
                  onChange={(e) => setRangerNaturalExplorer(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-emerald-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
                >
                  <option value="">-- เลือกพื้นที่ชำนาญ --</option>
                  {cItem.cls.naturalExplorers.map(ne => (
                    <option key={ne.id} value={ne.id}>[{ne.name}]</option>
                  ))}
                </select>
                {rangerNaturalExplorer && (
                  <p className="text-xs text-slate-300 bg-slate-950/70 border border-slate-800/80 rounded-lg p-3 leading-relaxed">
                    {cItem.cls.naturalExplorers.find(f => f.id === rangerNaturalExplorer)?.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      
      {/* ➕ Bard: Expertise */}
      {allCharacterClasses.some(c => c.cls.id === 'bard' && c.level >= 3) && (
        <div className="bg-pink-950/20 rounded-xl p-5 border border-pink-500/30 space-y-4">
          <h3 className="text-lg font-bold text-pink-400">Bardic Expertise (ความชำนาญขั้นสูง)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'bard').map((cItem, idx) => {
            const bLv = cItem.level;
            const expQuota = bLv >= 10 ? 4 : bLv >= 3 ? 2 : 0;
            const proficientSkills = Object.keys(SKILLS_META).filter(sk => selectedBg.proficiencies.includes(sk) || selectedSkills.includes(sk));
            
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-100">เลือกทักษะที่ต้องการบวก 2 เท่า</span>
                  <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">เลือกแล้ว: {bardExpertise.length} / {expQuota}</span>
                </div>
                {proficientSkills.length === 0 ? (
                  <p className="text-xs text-slate-400">คุณยังไม่ได้เลือกความชำนาญทักษะในแท็บ 'ทักษะ & ภาษา'</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {proficientSkills.map(sk => {
                      const picked = bardExpertise.includes(sk);
                      return (
                        <button
                          key={sk}
                          onClick={() => toggleArrayItem(setBardExpertise, bardExpertise, sk, expQuota)}
                          disabled={!picked && bardExpertise.length >= expQuota}
                          className={`p-2.5 rounded-xl border text-left transition-all text-xs disabled:opacity-50 ${
                            picked ? 'border-pink-500 bg-pink-500/20 shadow' : 'border-slate-700 bg-slate-950 hover:border-pink-400/50'
                          }`}
                        >
                          <div className="font-bold text-slate-200">{picked ? '🌟 ' : ''}{SKILLS_META[sk].name_th}</div>
                        </button>
                      );
                    })}
                  </div>
                )}
                <p className="text-xs text-slate-400 mt-2">เมื่อเลือกแล้ว ค่าโบนัสทักษะเหล่านี้ในแท็บ 'ทักษะ' จะเพิ่มเป็น 2 เท่าอัตโนมัติ</p>
              </div>
            );
          })}
        </div>
      )}

      {/* ➕ Cleric: Channel Divinity */}
      {allCharacterClasses.some(c => c.cls.id === 'cleric' && c.level >= 2) && (
        <div className="bg-amber-950/20 rounded-xl p-5 border border-amber-500/30 space-y-4">
          <h3 className="text-lg font-bold text-amber-400">Channel Divinity (สื่อกลางศักดิ์สิทธิ์)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'cleric').map((cItem, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-slate-100">พลังศักดิ์สิทธิ์ (ใช้ได้ {cItem.level >= 18 ? 3 : cItem.level >= 6 ? 2 : 1} ครั้ง / พักสั้น)</span>
              </div>
              <div className="space-y-2">
                {cItem.cls.channelDivinities.map(cd => (
                  <div key={cd.id} className="bg-slate-950 border border-slate-800 p-3 rounded-lg">
                    <div className="font-bold text-amber-300 text-sm">{cd.name}</div>
                    <div className="text-xs text-slate-300 mt-1">{cd.desc}</div>
                  </div>
                ))}
                {cItem.subclass && (
                  <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg">
                    <div className="font-bold text-amber-300 text-sm">{cItem.subclass.name_th} Channel Divinity</div>
                    <div className="text-xs text-slate-300 mt-1">ได้รับพลังพิเศษตามสายอาชีพย่อยที่เลือก ({cItem.subclass.desc})</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ➕ Druid: Wild Shape */}
      {allCharacterClasses.some(c => c.cls.id === 'druid' && c.level >= 2) && (
        <div className="bg-emerald-950/20 rounded-xl p-5 border border-emerald-500/30 space-y-4">
          <h3 className="text-lg font-bold text-emerald-400">Wild Shape (แปลงร่างสัตว์ป่า)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'druid').map((cItem, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-slate-100">ร่างสัตว์จำแลง (ใช้ได้ 2 ครั้ง / พักสั้น)</span>
              </div>
              <select
                value={druidWildShape}
                onChange={(e) => setDruidWildShape(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-emerald-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
              >
                <option value="">-- ดูสเตตัสร่างสัตว์ --</option>
                {cItem.cls.wildShapes.map(ws => (
                  <option key={ws.id} value={ws.id}>{ws.name}</option>
                ))}
              </select>
              {druidWildShape && (
                <div className="text-xs text-slate-300 bg-slate-950/70 border border-slate-800/80 rounded-lg p-3 leading-relaxed">
                  <div className="font-bold text-emerald-400 mb-1">สเตตัสร่างแปลง:</div>
                  {cItem.cls.wildShapes.find(f => f.id === druidWildShape)?.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      
      {/* ➕ Rogue: Expertise & Sneak Attack */}
      {allCharacterClasses.some(c => c.cls.id === 'rogue' && c.level >= 1) && (
        <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-700 space-y-4">
          <h3 className="text-lg font-bold text-slate-300">Rogue's Talents (พรสวรรค์จอมโจร)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'rogue').map((cItem, idx) => {
            const rLv = cItem.level;
            const expQuota = rLv >= 6 ? 4 : rLv >= 1 ? 2 : 0;
            const sneakAttack = Math.ceil(rLv / 2) + 'd6';
            const proficientSkills = Object.keys(SKILLS_META).filter(sk => selectedBg.proficiencies.includes(sk) || selectedSkills.includes(sk));
            
            return (
              <div key={idx} className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-100">Sneak Attack (ลอบโจมตี)</span>
                  <span className="text-sm font-black text-rose-400">+{sneakAttack} ดาเมจ</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-slate-100">Rogue Expertise (เลือกทักษะบวก 2 เท่า)</span>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">เลือกแล้ว: {rogueExpertise.length} / {expQuota}</span>
                  </div>
                  {proficientSkills.length === 0 ? (
                    <p className="text-xs text-slate-400">คุณยังไม่ได้เลือกความชำนาญทักษะในแท็บ 'ทักษะ & ภาษา'</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {proficientSkills.map(sk => {
                        const picked = rogueExpertise.includes(sk);
                        return (
                          <button
                            key={sk}
                            onClick={() => toggleArrayItem(setRogueExpertise, rogueExpertise, sk, expQuota)}
                            disabled={!picked && rogueExpertise.length >= expQuota}
                            className={`p-2.5 rounded-xl border text-left transition-all text-xs disabled:opacity-50 ${
                              picked ? 'border-slate-500 bg-slate-700 shadow' : 'border-slate-800 bg-slate-950 hover:border-slate-600'
                            }`}
                          >
                            <div className="font-bold text-slate-200">{picked ? '🌟 ' : ''}{SKILLS_META[sk].name_th}</div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  <p className="text-xs text-slate-400 mt-2">โบนัสทักษะจะถูกคำนวณคูณสองอัตโนมัติในแท็บ 'ทักษะ & ภาษา'</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ➕ Barbarian: Rage */}
      {allCharacterClasses.some(c => c.cls.id === 'barbarian' && c.level >= 1) && (
        <div className="bg-rose-950/20 rounded-xl p-5 border border-rose-500/30 space-y-4">
          <h3 className="text-lg font-bold text-rose-400">Primal Rage (ความโกรธเกรี้ยวแห่งป่าเถื่อน)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'barbarian').map((cItem, idx) => {
            const bLv = cItem.level;
            const rageUses = bLv >= 20 ? 'ไม่จำกัด' : bLv >= 17 ? 6 : bLv >= 12 ? 5 : bLv >= 6 ? 4 : bLv >= 3 ? 3 : 2;
            const rageDmg = bLv >= 16 ? '+4' : bLv >= 9 ? '+3' : '+2';
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-950 border border-rose-500/30 p-3 rounded-xl">
                  <div className="text-[10px] text-slate-400 uppercase">จำนวนครั้ง Rage / พักยาว</div>
                  <div className="text-xl font-black text-rose-400">{rageUses}</div>
                </div>
                <div className="bg-slate-950 border border-rose-500/30 p-3 rounded-xl">
                  <div className="text-[10px] text-slate-400 uppercase">โบนัสดาเมจตอน Rage (STR)</div>
                  <div className="text-xl font-black text-rose-400">{rageDmg}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ➕ Monk: Ki & Martial Arts */}
      {allCharacterClasses.some(c => c.cls.id === 'monk' && c.level >= 1) && (
        <div className="bg-sky-950/20 rounded-xl p-5 border border-sky-500/30 space-y-4">
          <h3 className="text-lg font-bold text-sky-400">Martial Arts (ศิลปะการต่อสู้)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'monk').map((cItem, idx) => {
            const mLv = cItem.level;
            const maDie = mLv >= 17 ? '1d10' : mLv >= 11 ? '1d8' : mLv >= 5 ? '1d6' : '1d4';
            const kiPoints = mLv >= 2 ? mLv : 0;
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-950 border border-sky-500/30 p-3 rounded-xl">
                  <div className="text-[10px] text-slate-400 uppercase">ลูกเต๋าต่อยมือเปล่า</div>
                  <div className="text-xl font-black text-sky-400">{maDie}</div>
                </div>
                <div className="bg-slate-950 border border-sky-500/30 p-3 rounded-xl">
                  <div className="text-[10px] text-slate-400 uppercase">Ki Points (แต้มลมปราณ)</div>
                  <div className="text-xl font-black text-sky-400">{kiPoints > 0 ? kiPoints : '-'}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ➕ Wizard: Arcane Recovery & Arcane Tradition Interactive Tools */}
      {allCharacterClasses.some(c => c.cls.id === 'wizard' && c.level >= 1) && (
        <div className="bg-blue-950/25 rounded-xl p-5 border border-blue-500/40 space-y-4">
          <h3 className="text-lg font-bold text-blue-400">📖 Wizard: Arcane Recovery & พลังเฉพาะสำนักเวท</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'wizard').map((cItem, idx) => {
            const wLv = cItem.level;
            const recoverySlots = Math.ceil(wLv / 2);
            const sub = cItem.subclass;
            return (
              <div key={idx} className="space-y-3">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-100">Arcane Recovery (ฟื้นฟูช่องเวทวันละ 1 ครั้งตอนพักสั้น)</div>
                    <div className="text-xs text-slate-400">ฟื้นฟูรวมกันสูงสุดได้ <strong className="text-blue-400">{recoverySlots}</strong> ระดับ (เช่น สล็อต Lv.3 หนึ่งช่อง หรือ Lv.1 สามช่อง)</div>
                  </div>
                  <span className="text-2xl font-black text-blue-400">{recoverySlots}</span>
                </div>

                {wLv >= 2 && sub && (
                  <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-blue-300">🌟 สำนักเวท: {sub.name_th}</div>
                      <div className="text-xs text-slate-300 leading-relaxed">{sub.desc}</div>
                    </div>
                    {sub.id === 'divination' && rollDiceFormula && (
                      <button
                        onClick={() => rollDiceFormula(`ลูกเต๋าพยากรณ์ (Portent ${wLv >= 14 ? '3d20' : '2d20'})`, wLv >= 14 ? '3d20' : '2d20')}
                        className="bg-blue-500 hover:bg-blue-400 text-slate-950 font-black px-3.5 py-2 rounded-xl text-xs shadow shrink-0"
                      >
                        🔮 ทอยเต๋าพยากรณ์ ({wLv >= 14 ? '3d20' : '2d20'})
                      </button>
                    )}
                    {sub.id === 'abjuration' && (
                      <div className="bg-blue-950/60 border border-blue-500/40 px-3.5 py-2 rounded-xl text-center shrink-0">
                        <div className="text-[10px] text-blue-300 uppercase">เกราะ Arcane Ward สูงสุด</div>
                        <div className="text-lg font-black text-blue-400">{wLv * 2} + INT HP</div>
                      </div>
                    )}
                    {sub.id === 'bladesinging' && (
                      <div className="bg-blue-950/60 border border-blue-500/40 px-3.5 py-2 rounded-xl text-center shrink-0">
                        <div className="text-[10px] text-blue-300 uppercase">Bladesong Active</div>
                        <div className="text-xs font-black text-emerald-400">+INT AC • +10 ฟุต • {wLv >= 6 ? 'ตี 2 ครั้ง+Cantrip' : 'สมาธิแกร่ง'}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}


      {/* ⚔️ เฟส 1: Fighter Subclasses (Battle Master & Champion) */}
      {allCharacterClasses.some(c => c.cls.id === 'fighter' && c.level >= 3 && c.subclass?.id === 'battle_master') && (
        <div className="bg-amber-950/20 rounded-xl p-5 border border-amber-500/40 space-y-4">
          <h3 className="text-lg font-bold text-amber-400">⚔️ Battle Master: Combat Superiority (กระบวนท่ายุทธ์และลูกเต๋ายุทธ์)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'fighter' && c.level >= 3 && c.subclass?.id === 'battle_master').map((cItem, idx) => {
            const fLv = cItem.level;
            const supDiceCount = fLv >= 15 ? 6 : fLv >= 7 ? 5 : 4;
            const supDieSize = fLv >= 18 ? '1d12' : fLv >= 10 ? '1d10' : '1d8';
            const maneuverQuota = fLv >= 15 ? 9 : fLv >= 10 ? 7 : fLv >= 7 ? 5 : 3;
            const maneuversList = cItem.subclass.maneuvers || [];

            return (
              <div key={idx} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-900 border border-amber-500/30 p-3 rounded-xl">
                    <div className="text-[10px] text-slate-400 uppercase">จำนวนลูกเต๋ายุทธ์ / พักสั้น</div>
                    <div className="text-xl font-black text-amber-400">{supDiceCount} ลูก</div>
                  </div>
                  <div className="bg-slate-900 border border-amber-500/30 p-3 rounded-xl">
                    <div className="text-[10px] text-slate-400 uppercase">ขนาดลูกเต๋ายุทธ์ (Superiority Die)</div>
                    <div className="text-xl font-black text-amber-400">{supDieSize}</div>
                  </div>
                  <div className="bg-slate-900 border border-amber-500/30 p-3 rounded-xl flex items-center justify-center">
                    <button
                      onClick={() => rollDiceFormula && rollDiceFormula(`ทอยลูกเต๋ายุทธ์ (Superiority Die)`, supDieSize)}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2 rounded-lg text-xs shadow transition-all"
                    >
                      🎲 ทอยเต๋ายุทธ์ ({supDieSize})
                    </button>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-slate-100">เลือกกระบวนท่ายุทธ์ (Maneuvers)</span>
                    <span className="text-xs bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded font-bold">
                      เลือกแล้ว: {battleMasterManeuvers.length} / {maneuverQuota} ท่า
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {maneuversList.map(mn => {
                      const picked = battleMasterManeuvers.includes(mn.id);
                      return (
                        <div
                          key={mn.id}
                          className={`p-3 rounded-xl border transition-all flex flex-col justify-between gap-2 ${
                            picked ? 'border-amber-500 bg-amber-500/15 shadow' : 'border-slate-800 bg-slate-950 hover:border-amber-500/40'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <button
                                onClick={() => toggleArrayItem(setBattleMasterManeuvers, battleMasterManeuvers, mn.id, maneuverQuota)}
                                disabled={!picked && battleMasterManeuvers.length >= maneuverQuota}
                                className="font-bold text-slate-100 text-xs text-left flex-1 disabled:opacity-40"
                              >
                                {picked ? '✅ ' : '+ '} {mn.name}
                              </button>
                              {picked && rollDiceFormula && (
                                <button
                                  onClick={() => rollDiceFormula(`กระบวนท่า ${mn.name}`, supDieSize)}
                                  className="bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded text-[10px] font-bold shrink-0"
                                >
                                  🎲 ใช้ท่า ({supDieSize})
                                </button>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">{mn.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 🏆 Champion Fighter: Additional Fighting Style & Critical Range */}
      {allCharacterClasses.some(c => c.cls.id === 'fighter' && c.level >= 3 && c.subclass?.id === 'champion') && (
        <div className="bg-amber-950/20 rounded-xl p-5 border border-amber-500/40 space-y-4">
          <h3 className="text-lg font-bold text-amber-400">🏆 Champion: ขีดจำกัดนักรบแชมเปี้ยน</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'fighter' && c.level >= 3 && c.subclass?.id === 'champion').map((cItem, idx) => {
            const fLv = cItem.level;
            const critRange = fLv >= 15 ? '18 - 20 (Superior Critical)' : '19 - 20 (Improved Critical)';
            return (
              <div key={idx} className="space-y-3">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">ระยะติด Critical Hit อัตโนมัติเมื่อทอยเต๋า d20:</span>
                  <span className="text-sm font-black text-amber-400 bg-amber-500/15 px-3 py-1 rounded-lg border border-amber-500/30">{critRange}</span>
                </div>
                {fLv >= 10 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-100">Additional Fighting Style (รูปแบบการต่อสู้ที่ 2)</span>
                      <span className="text-xs text-amber-400">ปลดล็อกตอน Lv.10</span>
                    </div>
                    <select
                      value={championExtraStyle}
                      onChange={(e) => setChampionExtraStyle(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-amber-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
                    >
                      <option value="">-- เลือกรูปแบบการต่อสู้ที่ 2 --</option>
                      {(cItem.cls.fightingStyles || []).filter(fs => fs.id !== fightingStyles[cItem.cls.id]).map(fs => (
                        <option key={fs.id} value={fs.id}>[{fs.name}] {fs.desc}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 🐾 เฟส 1: Barbarian Wildheart (Bestial Heart & Animal Aspect) */}
      {allCharacterClasses.some(c => c.cls.id === 'barbarian' && c.level >= 3 && c.subclass?.id === 'wildheart') && (
        <div className="bg-rose-950/25 rounded-xl p-5 border border-rose-500/40 space-y-4">
          <h3 className="text-lg font-bold text-rose-400">🐾 Wildheart / Totem Warrior (วิญญาณสัตว์ป่าประจำกาย)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'barbarian' && c.level >= 3 && c.subclass?.id === 'wildheart').map((cItem, idx) => {
            const bLv = cItem.level;
            const hearts = cItem.subclass.bestialHearts || [];
            const aspects = cItem.subclass.animalAspects || [];

            return (
              <div key={idx} className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-100">Bestial Heart (พลังวิญญาณสัตว์ขณะคลั่ง Rage)</span>
                    <span className="text-xs text-rose-400 font-bold">ปลดล็อกตอน Lv.3</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {hearts.map(h => {
                      const picked = wildheartBestialHeart === h.id;
                      return (
                        <button
                          key={h.id}
                          onClick={() => setWildheartBestialHeart(h.id)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            picked ? 'border-rose-500 bg-rose-500/20 shadow' : 'border-slate-800 bg-slate-950 hover:border-rose-500/40'
                          }`}
                        >
                          <div className="font-bold text-xs text-slate-100 mb-1">{picked ? '✅ ' : ''}{h.name}</div>
                          <div className="text-[11px] text-slate-300 leading-relaxed">{h.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {bLv >= 6 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-100">Animal Aspect ขั้นที่ 1 (สัญชาตญาณสัตว์ป่าติดตัวถาวร)</span>
                      <span className="text-xs text-rose-400 font-bold">ปลดล็อกตอน Lv.6</span>
                    </div>
                    <select
                      value={wildheartAnimalAspect}
                      onChange={(e) => setWildheartAnimalAspect(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-rose-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
                    >
                      {aspects.map(a => (
                        <option key={a.id} value={a.id}>{a.name}</option>
                      ))}
                    </select>
                    <p className="text-xs text-slate-300 bg-slate-950/80 border border-slate-800 rounded-lg p-3">
                      {aspects.find(a => a.id === wildheartAnimalAspect)?.desc}
                    </p>
                  </div>
                )}

                {bLv >= 10 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-100">Animal Aspect ขั้นที่ 2 (ผสานธรรมชาติขั้นสูง)</span>
                      <span className="text-xs text-rose-400 font-bold">ปลดล็อกตอน Lv.10</span>
                    </div>
                    <select
                      value={wildheartSecondAspect}
                      onChange={(e) => setWildheartSecondAspect(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-rose-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
                    >
                      {aspects.map(a => (
                        <option key={a.id} value={a.id}>{a.name}</option>
                      ))}
                    </select>
                    <p className="text-xs text-slate-300 bg-slate-950/80 border border-slate-800 rounded-lg p-3">
                      {aspects.find(a => a.id === wildheartSecondAspect)?.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ☯️ เฟส 1: Monk Way of the Four Elements (Elemental Disciplines) */}
      {allCharacterClasses.some(c => c.cls.id === 'monk' && c.level >= 3 && c.subclass?.id === 'four_elements') && (
        <div className="bg-sky-950/25 rounded-xl p-5 border border-sky-500/40 space-y-4">
          <h3 className="text-lg font-bold text-sky-400">☯️ Way of the Four Elements: กระบวนท่าปราณสี่ธาตุ</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'monk' && c.level >= 3 && c.subclass?.id === 'four_elements').map((cItem, idx) => {
            const mLv = cItem.level;
            const discQuota = mLv >= 17 ? 6 : mLv >= 11 ? 5 : mLv >= 6 ? 4 : 3;
            const availableDisciplines = (cItem.subclass.elementalDisciplines || []).filter(d => mLv >= d.minLv);

            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-100">เลือกกระบวนท่าปราณธาตุ (ปลดล็อกตามเลเวล Monk)</span>
                  <span className="text-xs bg-sky-500/20 text-sky-300 px-2.5 py-1 rounded font-bold">
                    เลือกแล้ว: {monkElementsDisciplines.length} / {discQuota} กระบวนท่า
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {availableDisciplines.map(disc => {
                    const picked = monkElementsDisciplines.includes(disc.id);
                    return (
                      <div
                        key={disc.id}
                        className={`p-3 rounded-xl border transition-all flex flex-col justify-between gap-2 ${
                          picked ? 'border-sky-500 bg-sky-500/15 shadow' : 'border-slate-800 bg-slate-950 hover:border-sky-500/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <button
                              onClick={() => toggleArrayItem(setMonkElementsDisciplines, monkElementsDisciplines, disc.id, discQuota)}
                              disabled={!picked && monkElementsDisciplines.length >= discQuota}
                              className="font-bold text-slate-100 text-xs text-left flex-1 disabled:opacity-40"
                            >
                              {picked ? '✅ ' : '+ '} {disc.name}
                            </button>
                            <span className="text-[10px] bg-sky-900/60 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded font-bold shrink-0">
                              Lv.{disc.minLv} • {disc.ki}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">{disc.desc}</p>
                        </div>
                        {picked && (
                          <div className="pt-1 flex justify-end">
                            <button
                              onClick={() => {
                                if (disc.dice && rollDiceFormula) {
                                  rollDiceFormula(`ปราณธาตุ: ${disc.name}`, disc.dice);
                                } else if (setStatusMsg) {
                                  setStatusMsg(`☯️ ใช้กระบวนท่า "${disc.name}" (${disc.ki}) — ${disc.desc}`);
                                  setTimeout(() => setStatusMsg(null), 4000);
                                }
                              }}
                              className="bg-sky-500/20 hover:bg-sky-500/40 text-sky-200 border border-sky-500/40 px-2.5 py-1 rounded-lg text-[11px] font-bold"
                            >
                              {disc.dice ? `🎲 ร่ายปราณ (${disc.dice})` : '✨ ใช้กระบวนท่า'}
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      
      {/* 🏹 เฟส 2: Ranger Subclasses (Hunter, Beast Master, Gloom Stalker) */}
      {allCharacterClasses.some(c => c.cls.id === 'ranger' && c.level >= 3 && c.subclass?.id === 'hunter') && (
        <div className="bg-emerald-950/25 rounded-xl p-5 border border-emerald-500/40 space-y-4">
          <h3 className="text-lg font-bold text-emerald-400">🏹 Hunter: กลยุทธ์นายพรานนักล่ามืออาชีพ</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'ranger' && c.level >= 3 && c.subclass?.id === 'hunter').map((cItem, idx) => {
            const rLv = cItem.level;
            const preyList = cItem.subclass.hunterPreyOptions || [];
            const defList = cItem.subclass.defensiveTacticsOptions || [];
            const multiList = cItem.subclass.multiattackOptions || [];
            const activePrey = preyList.find(p => p.id === hunterPreyChoice) || preyList[0];

            return (
              <div key={idx} className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-slate-100">Hunter’s Prey (วิชาพิชิตเหยื่อ — Lv.3)</span>
                    {activePrey?.dice && rollDiceFormula && (
                      <button
                        onClick={() => rollDiceFormula(`Hunter's Prey: ${activePrey.name}`, activePrey.dice)}
                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs shadow transition-all"
                      >
                        🎲 ทอยดาเมจ ({activePrey.dice})
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {preyList.map(opt => {
                      const picked = hunterPreyChoice === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setHunterPreyChoice(opt.id)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            picked ? 'border-emerald-500 bg-emerald-500/20 shadow' : 'border-slate-800 bg-slate-950 hover:border-emerald-500/40'
                          }`}
                        >
                          <div className="font-bold text-xs text-slate-100 mb-1">{picked ? '✅ ' : ''}{opt.name}</div>
                          <div className="text-[11px] text-slate-300 leading-relaxed">{opt.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {rLv >= 7 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-100">Defensive Tactics (กลยุทธ์ตั้งรับนักล่า — Lv.7)</span>
                      <span className="text-xs text-emerald-400 font-bold">ปลดล็อกตอน Lv.7</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {defList.map(opt => {
                        const picked = hunterDefenseChoice === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => setHunterDefenseChoice(opt.id)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              picked ? 'border-emerald-500 bg-emerald-500/20 shadow' : 'border-slate-800 bg-slate-950 hover:border-emerald-500/40'
                            }`}
                          >
                            <div className="font-bold text-xs text-slate-100 mb-1">{picked ? '✅ ' : ''}{opt.name}</div>
                            <div className="text-[11px] text-slate-300 leading-relaxed">{opt.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {rLv >= 11 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-100">Multiattack (ท่าโจมตีหมู่ขั้นสุดยอด — Lv.11)</span>
                      <span className="text-xs text-emerald-400 font-bold">ปลดล็อกตอน Lv.11</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {multiList.map(opt => {
                        const picked = hunterMultiattackChoice === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => setHunterMultiattackChoice(opt.id)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              picked ? 'border-emerald-500 bg-emerald-500/20 shadow' : 'border-slate-800 bg-slate-950 hover:border-emerald-500/40'
                            }`}
                          >
                            <div className="font-bold text-xs text-slate-100 mb-1">{picked ? '✅ ' : ''}{opt.name}</div>
                            <div className="text-[11px] text-slate-300 leading-relaxed">{opt.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 🐾 Beast Master Ranger: Companion Selector & Dynamic Stats */}
      {allCharacterClasses.some(c => c.cls.id === 'ranger' && c.level >= 3 && c.subclass?.id === 'beast_master') && (
        <div className="bg-emerald-950/25 rounded-xl p-5 border border-emerald-500/40 space-y-4">
          <h3 className="text-lg font-bold text-emerald-400">🐾 Beast Master: สัตว์อสูรคู่ใจ (Ranger’s Companion)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'ranger' && c.level >= 3 && c.subclass?.id === 'beast_master').map((cItem, idx) => {
            const rLv = cItem.level;
            const companions = cItem.subclass.companions || [];
            const activeComp = companions.find(cp => cp.id === beastMasterCompanion) || companions[0];
            const compHP = (activeComp?.baseHP || 15) + (rLv * 5);
            const compAC = (activeComp?.baseAC || 12) + profBonus;
            const compAtkBonus = 3 + profBonus;

            return (
              <div key={idx} className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-slate-100">เลือกสัตว์อสูรคู่ใจที่อัญเชิญ</span>
                    <span className="text-xs text-emerald-400 font-bold">สเกลตามเลเวล Ranger (Lv.{rLv}) + Prof (+{profBonus})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {companions.map(cp => {
                      const picked = beastMasterCompanion === cp.id;
                      return (
                        <button
                          key={cp.id}
                          onClick={() => setBeastMasterCompanion(cp.id)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            picked ? 'border-emerald-500 bg-emerald-500/20 shadow' : 'border-slate-800 bg-slate-950 hover:border-emerald-500/40'
                          }`}
                        >
                          <div className="font-bold text-xs text-slate-100 mb-1">{picked ? '✅ ' : ''}{cp.name}</div>
                          <div className="text-[10px] text-emerald-300 font-semibold">{cp.attack}</div>
                        </button>
                      );
                    })}
                  </div>

                  {activeComp && (
                    <div className="bg-slate-950 border border-emerald-500/30 rounded-xl p-4 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-sm font-black text-emerald-300">{activeComp.name}</div>
                        <button
                          onClick={() => rollDiceFormula && rollDiceFormula(`${activeComp.name} โจมตี!`, `1d20+${compAtkBonus}`)}
                          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs shadow transition-all"
                        >
                          🎲 สั่งสัตว์คู่ใจโจมตี (1d20+{compAtkBonus})
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-2.5 text-center">
                        <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                          <div className="text-[10px] text-slate-400">พลังชีวิต (Max HP)</div>
                          <div className="text-lg font-black text-rose-400">{compHP} HP</div>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                          <div className="text-[10px] text-slate-400">เกราะป้องกัน (AC)</div>
                          <div className="text-lg font-black text-sky-400">{compAC} AC</div>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
                          <div className="text-[10px] text-slate-400">จำนวนโจมตี / เทิร์น</div>
                          <div className="text-lg font-black text-amber-400">{rLv >= 11 ? '2 ครั้ง (Bestial Fury)' : '1 ครั้ง'}</div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{activeComp.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 🌑 Gloom Stalker Ranger: Dread Ambusher Quick Roll */}
      {allCharacterClasses.some(c => c.cls.id === 'ranger' && c.level >= 3 && c.subclass?.id === 'gloom_stalker') && (
        <div className="bg-indigo-950/30 rounded-xl p-5 border border-indigo-500/40 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-indigo-300">🌑 Gloom Stalker: Dread Ambusher (จอมซุ่มโจมตีในเงามืด)</h3>
              <p className="text-xs text-slate-400">เทิร์นแรกของการต่อสู้: ความเร็ว +10 ฟุต, บวก Initiative +3 และโจมตีฟรีเพิ่ม 1 ครั้งพร้อมโบนัสดาเมจ +1d8!</p>
            </div>
            <button
              onClick={() => rollDiceFormula && rollDiceFormula('Dread Ambusher (โบนัสดาเมจเทิร์นแรก)', '1d8')}
              className="bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-black px-3.5 py-2 rounded-xl text-xs shadow transition-all"
            >
              🎲 ทอยโบนัส Dread Ambusher (+1d8)
            </button>
          </div>
        </div>
      )}

      {/* 🛡️ เฟส 2: Paladin Sacred Oath (Channel Divinity, Aura & Oath Spells) */}
      {allCharacterClasses.some(c => c.cls.id === 'paladin' && c.level >= 1 && c.subclass) && (
        <div className="bg-amber-950/25 rounded-xl p-5 border border-amber-500/40 space-y-4">
          <h3 className="text-lg font-bold text-amber-400">🛡️ Sacred Oath: พลังคำสัตย์ศักดิ์สิทธิ์และออร่าพาลาดิน</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'paladin' && c.level >= 1 && c.subclass).map((cItem, idx) => {
            const pLv = cItem.level;
            const sub = cItem.subclass;
            const layOnHandsPool = pLv * 5;
            const auraBonus = Math.max(1, chaMod);
            const auraRadius = pLv >= 18 ? '30 ฟุต' : '10 ฟุต';
            const unlockedOathSpells = Object.entries(sub.oathSpells || {})
              .filter(([reqLv]) => pLv >= parseInt(reqLv, 10))
              .flatMap(([, sList]) => sList);

            return (
              <div key={idx} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-900 border border-amber-500/30 p-3 rounded-xl">
                    <div className="text-[10px] text-slate-400 uppercase">Lay on Hands (แต้มฮีลรวม)</div>
                    <div className="text-xl font-black text-emerald-400">{layOnHandsPool} HP</div>
                  </div>
                  <div className="bg-slate-900 border border-amber-500/30 p-3 rounded-xl">
                    <div className="text-[10px] text-slate-400 uppercase">Aura of Protection {pLv >= 6 ? `(รัศมี ${auraRadius})` : '(ปลดล็อก Lv.6)'}</div>
                    <div className="text-xl font-black text-amber-400">{pLv >= 6 ? `+${auraBonus} ทุก Save` : 'รอ Lv.6'}</div>
                  </div>
                  <div className="bg-slate-900 border border-amber-500/30 p-3 rounded-xl flex items-center justify-center">
                    <button
                      onClick={() => rollDiceFormula && rollDiceFormula('Divine Smite (ทัณฑ์สวรรค์ Lv.1)', '2d8')}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-3.5 py-2 rounded-lg text-xs shadow transition-all"
                    >
                      ⚡ ทอย Divine Smite (2d8)
                    </button>
                  </div>
                </div>

                {/* Channel Divinity Actions */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-100">Channel Divinity ({sub.name_th})</span>
                    <span className="text-xs text-amber-300 font-bold">รีเซ็ตทุกการพักสั้น (Short Rest)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {(sub.channelDivinities || []).map(cd => (
                      <div key={cd.id} className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col justify-between gap-2">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <span className="font-bold text-amber-300 text-xs">{cd.name}</span>
                            <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded shrink-0">{cd.action}</span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">{cd.desc}</p>
                        </div>
                        <button
                          onClick={() => {
                            if (cd.dice && rollDiceFormula) {
                              rollDiceFormula(cd.name, cd.dice);
                            } else if (setStatusMsg) {
                              setStatusMsg(`🛡️ ใช้พลังคำสัตย์ "${cd.name}" — ${cd.desc}`);
                              setTimeout(() => setStatusMsg(null), 4500);
                            }
                          }}
                          className="bg-amber-500/20 hover:bg-amber-500/40 text-amber-200 border border-amber-500/40 py-1 rounded-lg text-[11px] font-bold"
                        >
                          ✨ กดใช้พลังคำสัตย์
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Auto-unlocked Oath Spells */}
                {unlockedOathSpells.length > 0 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-indigo-300">🌟 คาถาคำสัตย์ที่ปลดล็อกเข้าสมุดเวทอัตโนมัติ (Oath Spells):</span>
                    {unlockedOathSpells.map(sp => (
                      <span key={sp} className="text-xs bg-indigo-500/20 text-indigo-200 border border-indigo-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                        {sp}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 🗡️ เฟส 2: Rogue Subclass Highlights (Thief, Assassin, Arcane Trickster) */}
      {allCharacterClasses.some(c => c.cls.id === 'rogue' && c.level >= 3 && c.subclass) && (
        <div className="bg-slate-900/90 rounded-xl p-5 border border-rose-500/30 space-y-3">
          {allCharacterClasses.filter(c => c.cls.id === 'rogue' && c.level >= 3 && c.subclass).map((cItem, idx) => {
            const rLv = cItem.level;
            const sneakDice = `${Math.ceil(rLv / 2)}d6`;
            const sub = cItem.subclass;
            return (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-rose-400">🗡️ {sub.name_th} — ท่าไม้ตายลอบสังหาร</h3>
                  <p className="text-xs text-slate-300">
                    {sub.id === 'thief' && '⚡ Fast Hands ทำงานแล้ว: คุณมี 2 Bonus Actions ในทุกเทิร์น!'}
                    {sub.id === 'assassin' && '💀 Assassinate ทำงานแล้ว: โจมตีศัตรูที่ติด Surprised ติด Critical Hit 100% ทันที!'}
                    {sub.id === 'arcane_trickster' && '🪄 Mage Hand Legerdemain ทำงานแล้ว: ได้รับคาถา Mage Hand ล่องหนในสมุดเวทอัตโนมัติ!'}
                    {sub.id === 'swashbuckler' && '🤺 Fancy Footwork & Rakish Audacity: บวก CHA เข้ากับ Initiative อัตโนมัติ, ตีแล้วเดินหนีฟรี และแทง Sneak Attack ตัวต่อตัวได้เลย!'}
                    {sub.id === 'soulknife' && '🔮 Psychic Blades & Psi-Bolstered Knack: เสกมีดพลังจิต 1d6+1d4 Psychic โจมตี 2 มือ และทอยเต๋าพลังจิตช่วยทักษะ!'}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => rollDiceFormula && rollDiceFormula(`Sneak Attack (ลอบโจมตี Lv.${rLv})`, sneakDice)}
                    className="bg-rose-600 hover:bg-rose-500 text-white font-black px-3.5 py-2 rounded-xl text-xs shadow transition-all"
                  >
                    🎲 ทอย Sneak Attack ({sneakDice})
                  </button>
                  {sub.id === 'assassin' && (
                    <button
                      onClick={() => rollDiceFormula && rollDiceFormula(`Assassinate Critical Sneak Attack!`, `${Math.ceil(rLv / 2) * 2}d6`)}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-3.5 py-2 rounded-xl text-xs shadow transition-all"
                    >
                      💀 ทอยคริลอบสังหาร ({Math.ceil(rLv / 2) * 2}d6)
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      
      {/* 🌿 เฟส 3: Cleric Domain Spells & Channel Divinity Dashboard */}
      {allCharacterClasses.some(c => c.cls.id === 'cleric' && c.level >= 1 && c.subclass) && (
        <div className="bg-amber-950/25 rounded-xl p-5 border border-amber-500/40 space-y-4">
          <h3 className="text-lg font-bold text-amber-400">✨ Cleric Domain: พลังแห่งโดเมนศักดิ์สิทธิ์</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'cleric' && c.level >= 1 && c.subclass).map((cItem, idx) => {
            const cLv = cItem.level;
            const sub = cItem.subclass;
            const domainSpellsMap = sub.domainSpells || {};
            const unlockedDomainSpells = Object.entries(domainSpellsMap)
              .filter(([reqLv]) => cLv >= parseInt(reqLv, 10))
              .flatMap(([, sList]) => sList);

            return (
              <div key={idx} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
                  <div className="bg-slate-900 border border-amber-500/30 p-3 rounded-xl">
                    <div className="text-[10px] text-slate-400 uppercase">Channel Divinity (พลังศักดิ์สิทธิ์)</div>
                    <div className="text-xl font-black text-amber-400">{cLv >= 6 ? '2 ครั้ง / พักสั้น' : cLv >= 2 ? '1 ครั้ง / พักสั้น' : 'รอ Lv.2'}</div>
                  </div>
                  <div className="bg-slate-900 border border-amber-500/30 p-3 rounded-xl flex items-center justify-center">
                    <button
                      onClick={() => rollDiceFormula && rollDiceFormula('Turn Undead (ขับไล่ผีดิบ)', '1d20')}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2 rounded-lg text-xs shadow transition-all"
                    >
                      ✨ ทอยต้าน Turn Undead (WIS Save)
                    </button>
                  </div>
                </div>

                {/* Domain Spells auto-unlocked */}
                {unlockedDomainSpells.length > 0 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-amber-300">🌟 คาถาประจำโดเมนที่ปลดล็อกเข้าสมุดเวทอัตโนมัติ (Domain Spells):</span>
                    {unlockedDomainSpells.map(sp => (
                      <span key={sp} className="text-xs bg-amber-500/20 text-amber-200 border border-amber-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                        {sp}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 🌲 เฟส 3: Druid Circle of the Land Terrain Selector */}
      {allCharacterClasses.some(c => c.cls.id === 'druid' && c.level >= 3 && c.subclass?.id === 'land') && (
        <div className="bg-emerald-950/25 rounded-xl p-5 border border-emerald-500/40 space-y-4">
          <h3 className="text-lg font-bold text-emerald-400">🌲 Circle of the Land: เลือกภูมิประเทศประจำถิ่น</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'druid' && c.level >= 3 && c.subclass?.id === 'land').map((cItem, idx) => {
            const terrains = [
              { id: 'arctic', name: '❄️ Arctic (ขั้วโลก/น้ำแข็ง)' },
              { id: 'coast', name: '🌊 Coast (ชายฝั่งทะเล)' },
              { id: 'desert', name: '🏜️ Desert (ทะเลทราย)' },
              { id: 'forest', name: '🌲 Forest (ป่าทึบ)' },
              { id: 'grassland', name: '🌾 Grassland (ทุ่งหญ้าสะวันนา)' },
              { id: 'mountain', name: '⛰️ Mountain (ภูเขาสูง)' },
              { id: 'swamp', name: '🌿 Swamp (หนองน้ำมืด)' },
              { id: 'underdark', name: '🦇 Underdark (โลกใต้ดิน)' }
            ];

            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-100">เลือกภูมิประเทศเพื่อปลดล็อกคาถาประจำถิ่นอัตโนมัติ</span>
                  <span className="text-xs text-emerald-400 font-bold">Natural Recovery (ฟื้นช่องเวทครึ่งเลเวล)</span>
                </div>
                <select
                  value={landCircleTerrain}
                  onChange={(e) => setLandCircleTerrain(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-emerald-300 font-bold text-sm rounded-xl px-3 py-2.5 outline-none"
                >
                  {terrains.map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      )}

      {/* 🎶 เฟส 3: Bard Colleges Highlights (Lore, Valour, Swords) */}
      {allCharacterClasses.some(c => c.cls.id === 'bard' && c.level >= 3 && c.subclass) && (
        <div className="bg-pink-950/25 rounded-xl p-5 border border-pink-500/40 space-y-3">
          {allCharacterClasses.filter(c => c.cls.id === 'bard' && c.level >= 3 && c.subclass).map((cItem, idx) => {
            const bLv = cItem.level;
            const sub = cItem.subclass;
            return (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-pink-300">🎵 {sub.name_th} — พลังเสียงดนตรีและวาทศิลป์</h3>
                  <p className="text-xs text-slate-300">
                    {sub.id === 'lore' && '✨ Cutting Words ทำงานแล้ว: ใช้ Reaction ตัดแต้มเต๋าแรงใจลบผลลัพธ์การโจมตี/ดาเมจของศัตรูได้!'}
                    {sub.id === 'valour' && '🛡️ Combat Inspiration ทำงานแล้ว: เพื่อนร่วมทีมสามารถใช้เต๋าแรงใจไปบวก AC หรือดาเมจได้!'}
                    {sub.id === 'swords' && '🗡️ Blade Flourish ทำงานแล้ว: ใช้เต๋า Inspiration ร่ายรำเพิ่มเกราะ, ตีหมู่ หรือผลักศัตรู!'}
                    {sub.id === 'glamour' && '🦋 Mantle of Inspiration & Majesty: มอบ Temp HP + สั่งเพื่อนทั้งทีมวิ่งจัดทัพฟรี และร่าย Command ฟรีทุกเทิร์น!'}
                    {sub.id === 'eloquence' && '👑 Silver Tongue & Unsettling Words: ทอย Persuasion/Deception หน้าเต๋าขั้นต่ำ 10 เสมอ และหักแต้ม Save ศัตรู!'}
                    {sub.id === 'whispers' && `💀 Psychic Blades ทำงานแล้ว: อัดคลื่นจิตระเบิดดาเมจเพิ่ม +${bLv >= 15 ? '8d6' : bLv >= 10 ? '5d6' : bLv >= 5 ? '3d6' : '2d6'} Psychic!`}
                  </p>
                </div>
                <button
                  onClick={() => rollDiceFormula && rollDiceFormula(`Bardic Inspiration (เต๋าแรงใจ 1d${bLv >= 15 ? '12' : bLv >= 10 ? '10' : bLv >= 5 ? '8' : '6'})`, `1d${bLv >= 15 ? '12' : bLv >= 10 ? '10' : bLv >= 5 ? '8' : '6'}`)}
                  className="bg-pink-600 hover:bg-pink-500 text-white font-black px-4 py-2 rounded-xl text-xs shadow transition-all shrink-0"
                >
                  🎲 ทอยเต๋าแรงใจ (Bardic Inspiration)
                </button>
              </div>
            );
          })}
        </div>
      )}

      
      {/* 🔮 เฟส 4: Wizard & Sorcerer & Warlock Subclass Features Display */}
      {allCharacterClasses.some(c => ['wizard', 'sorcerer', 'warlock'].includes(c.cls.id) && c.level >= 1 && c.subclass) && (
        <div className="bg-purple-950/20 rounded-xl p-5 border border-purple-500/30 space-y-4">
          <h3 className="text-lg font-bold text-purple-300">🔮 Arcane & Pact Subclass Features (พลังสายเวทและพันธสัญญา)</h3>
          {allCharacterClasses.filter(c => ['wizard', 'sorcerer', 'warlock'].includes(c.cls.id) && c.level >= 1 && c.subclass).map((cItem, idx) => {
            const cLv = cItem.level;
            const sub = cItem.subclass;
            const expandedMap = sub.expandedSpells || sub.bonusSpells || {};
            const unlockedExpandedSpells = Object.entries(expandedMap)
              .filter(([reqLv]) => cLv >= parseInt(reqLv, 10))
              .flatMap(([, sList]) => sList);

            return (
              <div key={idx} className="space-y-3">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-300">{cItem.cls.name_th} — {sub.name_th}</span>
                  <span className="text-amber-400 font-bold">เลเวลคลาส: Lv.{cLv}</span>
                </div>
                {unlockedExpandedSpells.length > 0 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-purple-300">🌟 คาถาขุมพลังอเวจี/ภูต (Expanded Spells เข้าสมุดเวทอัตโนมัติ):</span>
                    {unlockedExpandedSpells.map(sp => (
                      <span key={sp} className="text-xs bg-purple-500/20 text-purple-200 border border-purple-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                        {sp}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

            {/* 🧪 โต๊ะสร้างและปรับแต่งคลาสพิเศษ (Homebrew Class Studio) */}
      {allCharacterClasses.some(c => c.cls.id === 'homebrew') && setHomebrewConfig && (
        <div className="bg-gradient-to-br from-fuchsia-950/30 via-slate-900 to-indigo-950/30 rounded-2xl p-5 border-2 border-fuchsia-500/40 space-y-5 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-fuchsia-500/30 pb-3">
            <div>
              <h3 className="text-lg font-black text-fuchsia-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" /> สตูดิโอปรับแต่งคลาสพิเศษ (Homebrew Class & Subclass Builder)
              </h3>
              <p className="text-xs text-slate-300">
                ปรับแต่งชื่อคลาส ลูกเต๋าเลือด ระบบเวทมนตร์ โควต้า Feat และเพิ่มสกิล Homebrew ของคุณได้อิสระ!
              </p>
            </div>
            <span className="text-xs bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-500/40 px-3 py-1 rounded-full font-bold self-start sm:self-auto">
              รองรับทั้งคลาสหลัก & Multiclass
            </span>
          </div>

          {/* Row 1: Class & Subclass Names */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-bold text-fuchsia-300 block mb-1">ชื่อคลาส (ภาษาไทย / ชื่อหลัก)</label>
              <input
                type="text"
                value={homebrewConfig.classNameTh || ''}
                onChange={(e) => setHomebrewConfig(prev => ({ ...prev, classNameTh: e.target.value }))}
                placeholder="เช่น จอมเวทศาสตรา, อัศวินมังกร..."
                className="w-full bg-slate-950 border border-slate-700 focus:border-fuchsia-400 rounded-xl px-3 py-2 text-xs font-bold text-white outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-fuchsia-300 block mb-1">ชื่อคลาส (ภาษาอังกฤษ / ตัวย่อ)</label>
              <input
                type="text"
                value={homebrewConfig.classNameEn || ''}
                onChange={(e) => setHomebrewConfig(prev => ({ ...prev, classNameEn: e.target.value }))}
                placeholder="เช่น Spellblade, Blood Hunter..."
                className="w-full bg-slate-950 border border-slate-700 focus:border-fuchsia-400 rounded-xl px-3 py-2 text-xs text-white outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-fuchsia-300 block mb-1">ชื่อสายอาชีพย่อย (Subclass Name)</label>
              <input
                type="text"
                value={homebrewConfig.subclassNameTh || ''}
                onChange={(e) => setHomebrewConfig(prev => ({ ...prev, subclassNameTh: e.target.value }))}
                placeholder="เช่น ภาคีโลหิตทมิฬ, สำนักอัสนี..."
                className="w-full bg-slate-950 border border-slate-700 focus:border-fuchsia-400 rounded-xl px-3 py-2 text-xs font-bold text-amber-300 outline-none"
              />
            </div>
          </div>

          {/* Row 2: Hit Die, Skill Quota, Unarmored Defense */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
              <label className="text-[11px] font-bold text-amber-400 block mb-1.5">ลูกเต๋าเลือด (Hit Die — คำนวณ Max HP อัตโนมัติ)</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[6, 8, 10, 12].map(hd => (
                  <button
                    key={hd}
                    type="button"
                    onClick={() => setHomebrewConfig(prev => ({ ...prev, hitDie: hd }))}
                    className={`py-1.5 rounded-lg text-xs font-black transition-all ${
                      parseInt(homebrewConfig.hitDie, 10) === hd
                        ? 'bg-amber-500 text-slate-950 shadow'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    1d{hd}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
              <label className="text-[11px] font-bold text-emerald-400 block mb-1.5">โควต้าเลือกทักษะเริ่มต้น (Skill Choices)</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[2, 3, 4, 5].map(skc => (
                  <button
                    key={skc}
                    type="button"
                    onClick={() => setHomebrewConfig(prev => ({ ...prev, skillChoices: skc }))}
                    className={`py-1.5 rounded-lg text-xs font-black transition-all ${
                      parseInt(homebrewConfig.skillChoices, 10) === skc
                        ? 'bg-emerald-500 text-slate-950 shadow'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {skc} ทักษะ
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
              <label className="text-[11px] font-bold text-sky-400 block mb-1.5">เกราะธรรมชาติเมื่อไม่ใส่ชุดเกราะ (Unarmored AC)</label>
              <select
                value={homebrewConfig.unarmoredDefense || 'none'}
                onChange={(e) => setHomebrewConfig(prev => ({ ...prev, unarmoredDefense: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-bold text-sky-300 outline-none"
              >
                <option value="none">ปกติ (10 + DEX)</option>
                <option value="con">กายาเหล็ก (10 + DEX + CON แบบ Barbarian)</option>
                <option value="wis">ปราณคุ้มกาย (10 + DEX + WIS แบบ Monk)</option>
                <option value="int">ปัญญามนตรา (10 + DEX + INT แบบ Bladesinger)</option>
                <option value="cha">บารมีคุ้มครอง (10 + DEX + CHA)</option>
              </select>
            </div>
          </div>

          {/* Row 3: Spellcasting Progression & Extra Feat Slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-3">
              <div className="text-xs font-bold text-indigo-300">🪄 ระบบร่ายเวทและช่องเวทมนตร์ (Spellcasting Progression)</div>
              <select
                value={homebrewConfig.casterType || 'none'}
                onChange={(e) => setHomebrewConfig(prev => ({ ...prev, casterType: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs font-bold text-indigo-300 outline-none"
              >
                <option value="none">⚔️ ไม่ใช่คลาสสายเวท (Non-Caster — กายภาพ/ปราณล้วน)</option>
                <option value="full">🔮 Full Caster (ช่องเวทเต็ม Lv.1-9 แบบ Wizard / Cleric / Sorcerer)</option>
                <option value="half">🛡️ Half Caster (ช่องเวทครึ่งหนึ่ง Lv.1-5 แบบ Paladin / Ranger)</option>
                <option value="third">🗡️ 1/3 Caster (ช่องเวทหนึ่งส่วนสาม Lv.1-4 แบบ Eldritch Knight)</option>
                <option value="pact">👁️ Pact Magic (ช่องเวทรีเซ็ตเมื่อพักสั้น แบบ Warlock)</option>
              </select>

              {homebrewConfig.casterType && homebrewConfig.casterType !== 'none' && (
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">ดึงคาถาจากคลาส</label>
                    <select
                      value={homebrewConfig.spellListSource || 'all'}
                      onChange={(e) => setHomebrewConfig(prev => ({ ...prev, spellListSource: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-[11px] font-bold text-amber-300"
                    >
                      <option value="all">🌟 ทุกคาถา (All 200 Spells)</option>
                      <option value="wizard">Wizard</option>
                      <option value="cleric">Cleric</option>
                      <option value="druid">Druid</option>
                      <option value="sorcerer">Sorcerer</option>
                      <option value="warlock">Warlock</option>
                      <option value="bard">Bard</option>
                      <option value="paladin">Paladin</option>
                      <option value="ranger">Ranger</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">จำนวน Cantrips</label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={homebrewConfig.cantripsQuota ?? 3}
                      onChange={(e) => setHomebrewConfig(prev => ({ ...prev, cantripsQuota: parseInt(e.target.value, 10) || 0 }))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-1 text-center text-xs font-bold text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">ฐานคาถาที่เตรียมได้</label>
                    <input
                      type="number"
                      min="1"
                      max="15"
                      value={homebrewConfig.spellsQuota ?? 5}
                      onChange={(e) => setHomebrewConfig(prev => ({ ...prev, spellsQuota: parseInt(e.target.value, 10) || 1 }))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-1 text-center text-xs font-bold text-white"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2.5">
              <div className="text-xs font-bold text-amber-300">🏆 โควต้าช่องเลือก Feat พิเศษ (นอกเหนือจาก Lv.4, 8, 12, 16, 19)</div>
              <p className="text-[11px] text-slate-400">
                โดยปกติทุกคลาสจะได้ Feat ที่เลเวลคลาส 4, 8, 12, 16, 19 หากคลาส Homebrew ของคุณเป็นสายนักรบหรือผู้เชี่ยวชาญ สามารถติ๊กเพิ่มช่องโบนัสได้:
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                {[
                  { key: 'extraFeat6', label: 'ปลดล็อก Feat ที่ Lv.6 (แบบ Fighter)' },
                  { key: 'extraFeat10', label: 'ปลดล็อก Feat ที่ Lv.10 (แบบ Rogue)' },
                  { key: 'extraFeat14', label: 'ปลดล็อก Feat ที่ Lv.14 (แบบ Fighter)' }
                ].map(ef => (
                  <label key={ef.key} className="flex items-center gap-1.5 text-xs text-slate-200 cursor-pointer bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <input
                      type="checkbox"
                      checked={Boolean(homebrewConfig[ef.key])}
                      onChange={(e) => setHomebrewConfig(prev => ({ ...prev, [ef.key]: e.target.checked }))}
                      className="rounded accent-fuchsia-500"
                    />
                    {ef.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Row 4: Custom Class & Subclass Features Creator */}
          <div className="bg-slate-950/90 border border-fuchsia-500/30 rounded-xl p-4 space-y-3">
            <div className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider">
              ⚡ สร้างความสามารถและท่าไม้ตายประจำคลาส Homebrew (Custom Features & Dice Rollers)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
              <div className="sm:col-span-2">
                <label className="text-[10px] text-slate-400 block mb-1">ปลดล็อกที่ Lv.</label>
                <select
                  value={hbFeatLv}
                  onChange={(e) => setHbFeatLv(parseInt(e.target.value, 10))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-2 text-xs font-bold text-amber-400"
                >
                  {Array.from({ length: 20 }, (_, i) => i + 1).map(lv => (
                    <option key={lv} value={lv}>Lv.{lv}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-4">
                <label className="text-[10px] text-slate-400 block mb-1">ชื่อความสามารถ / สกิล</label>
                <input
                  type="text"
                  value={hbFeatName}
                  onChange={(e) => setHbFeatName(e.target.value)}
                  placeholder="เช่น ดาบอาคมทมิฬ, เนตรราชันย์..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white outline-none"
                />
              </div>
              <div className="sm:col-span-3">
                <label className="text-[10px] text-slate-400 block mb-1">สูตรเต๋าทอย (ถ้ามี)</label>
                <input
                  type="text"
                  value={hbFeatDice}
                  onChange={(e) => setHbFeatDice(e.target.value)}
                  placeholder="เช่น 2d6+4, 1d10 (เว้นว่างได้)"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-emerald-400 font-bold outline-none"
                />
              </div>
              <div className="sm:col-span-3">
                <button
                  type="button"
                  onClick={() => {
                    if (!hbFeatName.trim()) return;
                    const nextFeat = {
                      id: `hbf-${Date.now()}`,
                      level: hbFeatLv,
                      name: hbFeatName.trim(),
                      dice: hbFeatDice.trim(),
                      desc: hbFeatDesc.trim() || 'ความสามารถพิเศษประจำคลาส Homebrew'
                    };
                    setHomebrewConfig(prev => ({
                      ...prev,
                      customFeatures: [...(prev.customFeatures || []), nextFeat].sort((a, b) => a.level - b.level)
                    }));
                    setHbFeatName('');
                    setHbFeatDice('');
                    setHbFeatDesc('');
                  }}
                  className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black py-2 rounded-lg text-xs shadow transition-all"
                >
                  + เพิ่มความสามารถ
                </button>
              </div>
              <div className="sm:col-span-12">
                <input
                  type="text"
                  value={hbFeatDesc}
                  onChange={(e) => setHbFeatDesc(e.target.value)}
                  placeholder="รายละเอียดความสามารถ เช่น ใช้ Bonus Action เคลือบอาวุธด้วยไฟนรก นาน 1 นาที..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 outline-none"
                />
              </div>
            </div>

            {/* List of Custom Features */}
            <div className="space-y-2 pt-2">
              {(homebrewConfig.customFeatures || []).map(feat => {
                const hbClsLv = allCharacterClasses.find(c => c.cls.id === 'homebrew')?.level || 1;
                const isUnlocked = hbClsLv >= feat.level;
                return (
                  <div
                    key={feat.id}
                    className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                      isUnlocked ? 'bg-slate-900 border-fuchsia-500/40' : 'bg-slate-950/50 border-slate-800 opacity-60'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded ${
                          isUnlocked ? 'bg-fuchsia-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          Lv.{feat.level} {isUnlocked ? 'ปลดล็อกแล้ว' : '(ยังไม่ถึงเลเวล)'}
                        </span>
                        <span className="text-xs font-bold text-white">{feat.name}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {isUnlocked && (
                        <button
                          type="button"
                          onClick={() => {
                            if (feat.dice && rollDiceFormula) {
                              rollDiceFormula(`${homebrewConfig.classNameTh}: ${feat.name}`, feat.dice);
                            } else if (setStatusMsg) {
                              setStatusMsg(`✨ ใช้ความสามารถ "${feat.name}" — ${feat.desc}`);
                              setTimeout(() => setStatusMsg(null), 4000);
                            }
                          }}
                          className="bg-fuchsia-500/20 hover:bg-fuchsia-500/40 text-fuchsia-200 border border-fuchsia-500/40 px-3 py-1.5 rounded-lg text-xs font-bold"
                        >
                          {feat.dice ? `🎲 ทอย (${feat.dice})` : '✨ กดใช้สกิล'}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setHomebrewConfig(prev => ({
                          ...prev,
                          customFeatures: (prev.customFeatures || []).filter(f => f.id !== feat.id)
                        }))}
                        className="p-1.5 text-rose-400 hover:bg-rose-500/20 rounded-lg"
                        title="ลบความสามารถนี้"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-5">
        <h3 className="text-lg font-bold text-amber-400">ความสามารถประจำคลาสและสายอาชีพย่อยที่ปลดล็อกแล้ว (Class & Subclass Features)</h3>
        {allCharacterClasses.map((cItem, cIdx) => {
          const hasSub = cItem.level >= (cItem.cls.subclassLevel || 1) && cItem.subclass;
          const subFeaturesEntries = hasSub && cItem.subclass.features
            ? Object.entries(cItem.subclass.features).filter(([lvKey]) => parseInt(lvKey, 10) <= cItem.level)
            : [];

          return (
            <div key={cIdx} className="space-y-3 border-b border-slate-800/80 last:border-none pb-5 last:pb-0">
              <div className="text-sm font-bold text-indigo-300">
                {cItem.cls.name_th} (Lv.{cItem.level}) {hasSub ? `— ${cItem.subclass.name_th}` : ''}
              </div>
              <p className="text-xs text-slate-400">{cItem.cls.desc}</p>

              {/* Main Class Progression */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                {Object.entries(cItem.cls.progression || {})
                  .filter(([lvKey]) => parseInt(lvKey, 10) <= cItem.level)
                  .map(([lvKey, feats]) => (
                    <div key={lvKey} className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs">
                      <span className="font-bold text-amber-400 mr-1.5">Lv.{lvKey}:</span>
                      <span className="text-slate-200">{feats.join(', ')}</span>
                    </div>
                  ))}
              </div>

              {/* Subclass Detailed Features Progression */}
              {subFeaturesEntries.length > 0 && (
                <div className="mt-3 bg-indigo-950/25 border border-indigo-500/30 rounded-xl p-4 space-y-2.5">
                  <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                    🌟 ความสามารถเฉพาะสายอาชีพย่อย: {cItem.subclass.name_th}
                  </div>
                  <div className="space-y-2">
                    {subFeaturesEntries.map(([lvKey, featList]) =>
                      featList.map((fObj, fIdx) => (
                        <div key={`${lvKey}-${fIdx}`} className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs space-y-1">
                          <div className="font-bold text-amber-300">
                            [ปลดล็อก Lv.{lvKey}] {fObj.name}
                          </div>
                          <div className="text-slate-300 leading-relaxed">{fObj.desc}</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
