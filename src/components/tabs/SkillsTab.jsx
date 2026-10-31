import React from 'react';
import { Globe, Check, Dice5 } from 'lucide-react';

export default function SkillsTab({
  selectedSkills,
  totalSkillQuota,
  SKILLS_META,
  selectedBg,
  selectedClass,
  hasFeatActive,
  selectedRace,
  getSkillBonusNum,
  toggleSkill,
  rollD20Check,
  formatMod,
  autoLanguages,
  selectedLanguages,
  extraLanguageQuota,
  LANGUAGES_DB,
  toggleLanguage
}) {
  return (
    <div className="animate-in fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">ความชำนาญทักษะ (Skills) & ภาษา</h2>
          <p className="text-xs text-slate-400">คลิกที่ปุ่มลูกเต๋าด้านหลังทักษะเพื่อทอยทดสอบ (Skill Check) ได้ทันที</p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3 py-1.5 rounded-xl text-xs font-bold">
          เลือกทักษะเพิ่มได้: {selectedSkills.length} / {totalSkillQuota}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {Object.entries(SKILLS_META).map(([skillId, meta]) => {
          const isFromBg = selectedBg.proficiencies.includes(skillId);
          const isSelected = selectedSkills.includes(skillId);
          const isAllowedByClass = selectedClass.skills.includes(skillId) || hasFeatActive('skilled') || selectedRace.id === 'human';
          const bonusNum = getSkillBonusNum(skillId);

          return (
            <div
              key={skillId}
              className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                isFromBg || isSelected
                  ? 'bg-amber-500/10 border-amber-500/50'
                  : 'bg-slate-800/60 border-slate-700/70'
              }`}
            >
              <button
                onClick={() => !isFromBg && isAllowedByClass && toggleSkill(skillId)}
                disabled={isFromBg || (!isSelected && (selectedSkills.length >= totalSkillQuota || !isAllowedByClass))}
                className="flex items-center gap-2.5 text-left flex-1 disabled:opacity-60"
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                  isFromBg || isSelected ? 'bg-amber-500 border-amber-400 text-slate-950' : 'border-slate-600'
                }`}>
                  {(isFromBg || isSelected) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-100">
                    {meta.name_th} <span className="text-xs text-slate-400 font-normal">({meta.stat})</span>
                  </div>
                  {isFromBg && <span className="text-[10px] text-amber-400">ได้รับจากภูมิหลัง ({selectedBg.name_th})</span>}
                </div>
              </button>

              <button
                onClick={() => rollD20Check(`ทอยทักษะ ${meta.name_th}`, bonusNum)}
                className="bg-slate-950 hover:bg-amber-500/20 border border-slate-700 px-2.5 py-1 rounded-lg text-xs font-black text-emerald-400 flex items-center gap-1"
              >
                <Dice5 className="w-3.5 h-3.5 text-amber-400" /> {formatMod(bonusNum)}
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <Globe className="w-5 h-5" /> ภาษาที่ตัวละครสื่อสารได้ (Languages)
            </h3>
            <p className="text-xs text-slate-400">รวมภาษาอัตโนมัติจากเผ่าพันธุ์ ภาษาลับประจำอาชีพ และภาษาที่เลือกเพิ่มเอง</p>
          </div>
          <span className="text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 px-3 py-1 rounded-lg">
            เลือกภาษาเสริมได้: {selectedLanguages.slice(0, extraLanguageQuota).length} / {extraLanguageQuota}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
          {LANGUAGES_DB.map(lang => {
            const isAuto = autoLanguages.includes(lang.id);
            const isPicked = selectedLanguages.includes(lang.id);
            return (
              <button
                key={lang.id}
                onClick={() => toggleLanguage(lang.id)}
                disabled={isAuto || (!isPicked && selectedLanguages.length >= extraLanguageQuota)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  isAuto
                    ? 'border-emerald-500/50 bg-emerald-500/10'
                    : isPicked
                    ? 'border-amber-500 bg-amber-500/15'
                    : 'border-slate-800 bg-slate-900 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="text-xs font-bold text-slate-100">{lang.name_th}</div>
                <div className="text-[10px] text-slate-400">
                  {isAuto ? 'ภาษาประจำเผ่า/สายเลือด' : lang.type}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
