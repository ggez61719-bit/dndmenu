import React from 'react';
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
  selectedSkills,
  selectedBg,
  SKILLS_META
}) {

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
        {CLASSES.map(cls => (
          <button key={cls.id} onClick={() => handleSelectClass(cls)}
            className={`p-3 rounded-lg border text-left transition-all ${selectedClass.id === cls.id ? 'border-amber-500 bg-amber-500/10' : 'border-slate-700 bg-slate-800 hover:border-slate-500'}`}
          >
            <div className="font-semibold text-slate-200">{cls.name_th}</div>
            <div className="text-xs text-slate-400">{cls.name_en} (1d{cls.hitDie})</div>
          </button>
        ))}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cItem.cls.invocations.map(inv => {
                        const picked = warlockInvocations.includes(inv.id);
                        return (
                          <button
                            key={inv.id}
                            onClick={() => toggleArrayItem(setWarlockInvocations, warlockInvocations, inv.id, invQuota)}
                            disabled={!picked && warlockInvocations.length >= invQuota}
                            className={`p-2.5 rounded-xl border text-left transition-all text-xs disabled:opacity-50 ${
                              picked ? 'border-purple-500 bg-purple-500/20 shadow' : 'border-slate-700 bg-slate-950 hover:border-purple-400/50'
                            }`}
                          >
                            <div className="font-bold text-slate-200 mb-1">{picked ? '✅ ' : ''}{inv.name}</div>
                            <div className="text-[10px] text-slate-400">{inv.desc}</div>
                          </button>
                        )
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

      {/* ➕ Wizard: Arcane Recovery */}
      {allCharacterClasses.some(c => c.cls.id === 'wizard' && c.level >= 1) && (
        <div className="bg-blue-950/20 rounded-xl p-5 border border-blue-500/30 space-y-4">
          <h3 className="text-lg font-bold text-blue-400">Arcane Recovery (ฟื้นฟูมนตรา)</h3>
          {allCharacterClasses.filter(c => c.cls.id === 'wizard').map((cItem, idx) => {
            const wLv = cItem.level;
            const recoverySlots = Math.ceil(wLv / 2);
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-100">ฟื้นฟูช่องเวท (วันละ 1 ครั้งตอนพักสั้น)</div>
                  <div className="text-xs text-slate-400">ฟื้นฟูรวมกันสูงสุดได้ <strong className="text-blue-400">{recoverySlots}</strong> ระดับ (เช่น สล็อต Lv.3 หนึ่งช่อง หรือ Lv.1 สามช่อง)</div>
                </div>
                <span className="text-2xl font-black text-blue-400">{recoverySlots}</span>
              </div>
            );
          })}
        </div>
      )}

      <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-amber-400">ความสามารถประจำคลาสที่ปลดล็อกแล้ว (Class Features)</h3>
        {allCharacterClasses.map((cItem, cIdx) => (
          <div key={cIdx} className="space-y-2 border-b border-slate-800/80 last:border-none pb-4 last:pb-0">
            <div className="text-sm font-bold text-indigo-300">
              {cItem.cls.name_th} (Lv.{cItem.level}) {cItem.level >= cItem.cls.subclassLevel && cItem.subclass ? `— ${cItem.subclass.name_th}` : ''}
            </div>
            <p className="text-xs text-slate-400">{cItem.cls.desc}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}
