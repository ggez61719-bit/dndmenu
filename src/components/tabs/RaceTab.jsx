import React from 'react';
import { Sparkles, Check } from 'lucide-react';

export default function RaceTab({ 
  RACES, 
  selectedRace, 
  handleSelectRace, 
  selectedSubrace, 
  setSelectedSubrace, 
  allRaceTraits 
}) {
  return (
    <div className="animate-in fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-100">เลือกเผ่าพันธุ์ (Race & Subrace)</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {RACES.map(race => (
          <button
            key={race.id}
            onClick={() => handleSelectRace(race)}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              selectedRace.id === race.id
                ? 'border-amber-500 bg-amber-500/10 shadow-md'
                : 'border-slate-700 bg-slate-800 hover:border-slate-500'
            }`}
          >
            <div className="font-bold text-slate-100">{race.name_th}</div>
            <div className="text-xs text-slate-400">{race.name_en}</div>
          </button>
        ))}
      </div>

      {selectedRace.subraces && (
        <div className="bg-slate-800/70 rounded-xl p-5 border border-slate-700 space-y-3">
          <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> เลือกเผ่าพันธุ์ย่อย (Subrace ของ {selectedRace.name_th})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedRace.subraces.map(sub => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubrace(sub)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  selectedSubrace?.id === sub.id
                    ? 'border-amber-400 bg-amber-500/20 shadow-md'
                    : 'border-slate-700 bg-slate-900/70 hover:border-slate-500'
                }`}
              >
                <div className="font-bold text-slate-100 text-sm mb-1">{sub.name_th}</div>
                <ul className="text-xs text-slate-300 space-y-1">
                  {sub.traits.map((t, idx) => <li key={idx}>• {t}</li>)}
                </ul>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-3">
        <h3 className="text-lg font-bold text-amber-400">{selectedRace.name_th} ({selectedRace.name_en})</h3>
        <p className="text-sm text-slate-300 leading-relaxed">{selectedRace.desc}</p>
        <div className="pt-2 space-y-1.5">
          <div className="text-xs font-bold text-slate-400 uppercase">ความสามารถประจำเผ่าพันธุ์:</div>
          {allRaceTraits.map((trait, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-emerald-300">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{trait}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
