import React from 'react';

export default function BackgroundTab({ 
  BACKGROUNDS, 
  selectedBg, 
  setSelectedBg, 
  SKILLS_META 
}) {
  return (
    <div className="animate-in fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-100">เลือกภูมิหลังตัวละคร (Background)</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {BACKGROUNDS.map(bg => (
          <button
            key={bg.id}
            onClick={() => setSelectedBg(bg)}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              selectedBg.id === bg.id
                ? 'border-amber-500 bg-amber-500/10 shadow-md'
                : 'border-slate-700 bg-slate-800 hover:border-slate-500'
            }`}
          >
            <div className="font-bold text-slate-100">{bg.name_th}</div>
            <div className="text-xs text-slate-400">{bg.name_en}</div>
          </button>
        ))}
      </div>

      <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-3">
        <h3 className="text-lg font-bold text-amber-400">{selectedBg.name_th} ({selectedBg.name_en})</h3>
        <div className="text-sm text-slate-300 space-y-2">
          <div>
            <span className="text-slate-400 font-semibold">ความชำนาญทักษะที่ได้รับ (Skill Proficiencies): </span>
            {selectedBg.proficiencies.map(sk => (
              <span key={sk} className="inline-block bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded px-2 py-0.5 text-xs font-bold mr-1.5">
                {SKILLS_META[sk]?.name_th || sk}
              </span>
            ))}
          </div>
          <div>
            <span className="text-slate-400 font-semibold">โควต้าภาษาเสริม: </span>
            <span className="text-emerald-400 font-bold">+{selectedBg.extraLanguages || 0} ภาษา</span>
          </div>
          <div>
            <span className="text-slate-400 font-semibold">เงินเริ่มต้น: </span>
            <span className="text-amber-400 font-bold">{selectedBg.gold} GP</span>
          </div>
          <div>
            <span className="text-slate-400 font-semibold">อุปกรณ์จากภูมิหลัง: </span>
            <span className="text-slate-200">{selectedBg.equipment.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
