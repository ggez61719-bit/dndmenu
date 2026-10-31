import React from 'react';
import { Flame, Sun, Moon, Heart, AlertCircle, Shield, Zap, Activity, Trash2, Dice5 } from 'lucide-react';

export default function CombatTab({
  profBonus,
  handleShortRest,
  handleLongRest,
  hitDiceRemaining,
  totalLevel,
  hitDie,
  currentHP,
  maxHP,
  tempHP,
  hpInput,
  setHpInput,
  handleDamage,
  handleHeal,
  setTempHP,
  handleSpendHitDie,
  deathSaves,
  setDeathSaves,
  rollDiceFormula,
  displayAC,
  setCustomAC,
  rollD20Check,
  initModNum,
  formatMod,
  characterSpeed,
  CONDITIONS_LIST,
  activeConditions,
  setActiveConditions,
  customResources,
  setCustomResources,
  newResName,
  setNewResName,
  newResMax,
  setNewResMax,
  newResReset,
  combatSubTab,
  setCombatSubTab,
  customActions,
  setCustomActions,
  newActName,
  setNewActName,
  newActDice,
  setNewActDice,
  newActDesc,
  setNewActDesc
}) {
    const [newActAddProf, setNewActAddProf] = React.useState(true);
  return (
    <div className="animate-in fade-in space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-2xl font-bold text-rose-400 flex items-center gap-2">
            <Flame className="w-6 h-6" /> ศูนย์บัญชาการต่อสู้ (Combat Mode)
          </h2>
          <p className="text-xs text-slate-400">จัดการพลังชีวิต พักสั้น/พักยาว สถานะผิดปกติ และทอยลูกเต๋าแอคชั่น</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleShortRest}
            className="flex items-center gap-1.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 px-3 py-2 rounded-xl text-xs font-bold transition-all"
          >
            <Sun className="w-4 h-4" /> พักสั้น (Short Rest)
          </button>
          <button
            onClick={handleLongRest}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-lg transition-all"
          >
            <Moon className="w-4 h-4" /> พักยาว (Long Rest)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-400 uppercase flex items-center gap-1">
              <Heart className="w-4 h-4" /> พลังชีวิต (Hit Points)
            </span>
            <span className="text-xs text-slate-400">Hit Dice: <strong className="text-amber-400">{hitDiceRemaining}/{totalLevel} (1d{hitDie})</strong></span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-white">{currentHP}</span>
            <span className="text-lg text-slate-500 font-bold">/ {maxHP} HP</span>
            {tempHP > 0 && <span className="text-sm font-bold text-sky-400">(+{tempHP} Temp HP)</span>}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <input
              type="number"
              min="1"
              value={hpInput}
              onChange={(e) => setHpInput(e.target.value)}
              className="w-20 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-center font-bold text-sm text-white"
            />
            <button onClick={handleDamage} className="bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
              - รับดาเมจ
            </button>
            <button onClick={handleHeal} className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
              + ฟื้นฟู (Heal)
            </button>
            <button
              onClick={() => setTempHP(Math.max(0, parseInt(hpInput, 10) || 0))}
              className="bg-sky-600 hover:bg-sky-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold"
            >
              🛡️ ตั้ง Temp HP
            </button>
            <button
              onClick={handleSpendHitDie}
              disabled={hitDiceRemaining <= 0}
              className="bg-amber-500/20 hover:bg-amber-500/30 disabled:opacity-40 text-amber-300 border border-amber-500/40 px-2.5 py-1.5 rounded-lg text-xs font-bold"
            >
              🎲 ใช้ Hit Die ฮีล
            </button>
          </div>

          {currentHP === 0 && (
            <div className="mt-3 pt-3 border-t border-rose-500/30 bg-rose-950/30 rounded-xl p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-400" /> สถานะปางตาย (Death Saving Throws)
                </span>
                <button
                  onClick={() => {
                    const r = Math.floor(Math.random() * 20) + 1;
                    rollDiceFormula('ทอย Death Save (DC 10)', '1d20', 'normal');
                    if (r === 20) {
                      handleHeal(1);
                      setDeathSaves({ successes: 0, failures: 0 });
                    } else if (r === 1) {
                      setDeathSaves(prev => ({ ...prev, failures: Math.min(3, prev.failures + 2) }));
                    } else if (r >= 10) {
                      setDeathSaves(prev => ({ ...prev, successes: Math.min(3, prev.successes + 1) }));
                    } else {
                      setDeathSaves(prev => ({ ...prev, failures: Math.min(3, prev.failures + 1) }));
                    }
                  }}
                  className="bg-rose-600 hover:bg-rose-500 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold"
                >
                  🎲 ทอยเต๋ายื้อชีวิต (1d20)
                </button>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-300 font-semibold">รอดชีวิต (Successes):</span>
                  {[1, 2, 3].map(idx => (
                    <button
                      key={idx}
                      onClick={() => setDeathSaves(prev => ({ ...prev, successes: prev.successes === idx ? idx - 1 : idx }))}
                      className={`w-4 h-4 rounded-full border ${idx <= deathSaves.successes ? 'bg-emerald-500 border-emerald-300' : 'bg-slate-900 border-slate-600'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-rose-300 font-semibold">ล้มเหลว (Failures):</span>
                  {[1, 2, 3].map(idx => (
                    <button
                      key={idx}
                      onClick={() => setDeathSaves(prev => ({ ...prev, failures: prev.failures === idx ? idx - 1 : idx }))}
                      className={`w-4 h-4 rounded-full border ${idx <= deathSaves.failures ? 'bg-rose-500 border-rose-300' : 'bg-slate-900 border-slate-600'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-5 grid grid-cols-3 gap-2.5">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
            <Shield className="w-5 h-5 text-sky-400 mb-1" />
            <div className="text-[10px] text-slate-400">ระดับเกราะ (AC)</div>
            <input
              type="number"
              value={displayAC}
              onChange={(e) => setCustomAC(parseInt(e.target.value, 10) || 10)}
              className="w-14 bg-transparent text-center text-2xl font-black text-white outline-none"
            />
          </div>
          <button
            onClick={() => rollD20Check('ทอยเริ่มเทิร์น (Initiative)', initModNum)}
            className="bg-slate-950 hover:border-amber-500 border border-slate-800 rounded-2xl p-3 flex flex-col items-center justify-center text-center transition-all"
          >
            <Zap className="w-5 h-5 text-amber-400 mb-1" />
            <div className="text-[10px] text-slate-400">เริ่มเทิร์น (Init)</div>
            <div className="text-2xl font-black text-amber-400">{formatMod(initModNum)}</div>
          </button>
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
            <Activity className="w-5 h-5 text-emerald-400 mb-1" />
            <div className="text-[10px] text-slate-400">ความเร็วเดิน</div>
            <div className="text-lg font-black text-emerald-400">{characterSpeed}</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2.5">
        <div className="text-xs font-bold text-amber-400 uppercase">สถานะผิดปกติ & บัฟ (Conditions — ส่งผลต่อลูกเต๋าและความเร็วอัตโนมัติ)</div>
        <div className="flex flex-wrap gap-2">
          {CONDITIONS_LIST.map(cond => {
            const active = activeConditions.includes(cond.id);
            return (
              <button
                key={cond.id}
                onClick={() => setActiveConditions(prev => active ? prev.filter(c => c !== cond.id) : [...prev, cond.id])}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  active
                    ? 'bg-rose-500/20 border-rose-500 text-rose-200 shadow'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
                title={cond.desc}
              >
                {cond.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3">
        <div className="text-xs font-bold text-indigo-400 uppercase">ทรัพยากรประจำคลาส / Homebrew (Custom Resources)</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {customResources.map(res => (
            <div key={res.id} className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-100">{res.name}</div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  {Array.from({ length: res.max }).map((_, idx) => {
                    const filled = idx < res.current;
                    return (
                      <button
                        key={idx}
                        onClick={() => setCustomResources(prev => prev.map(r => r.id === res.id ? { ...r, current: filled ? r.current - 1 : r.current + 1 } : r))}
                        className={`w-4 h-4 rounded-full border ${filled ? 'bg-amber-500 border-amber-300' : 'bg-slate-800 border-slate-600'}`}
                      />
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => setCustomResources(prev => prev.filter(r => r.id !== res.id))}
                className="text-slate-500 hover:text-rose-400"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          <input
            type="text"
            value={newResName}
            onChange={(e) => setNewResName(e.target.value)}
            placeholder="ชื่อทรัพยากร (เช่น Rage, แต้ม Ki, Sorcery Points)"
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white outline-none"
          />
          <input
            type="number"
            min="1"
            max="20"
            value={newResMax}
            onChange={(e) => setNewResMax(e.target.value)}
            className="w-16 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-center text-white"
          />
          <button
            onClick={() => {
              if (!newResName.trim()) return;
              const mx = Math.max(1, parseInt(newResMax, 10) || 1);
              setCustomResources(prev => [...prev, { id: `res-${Date.now()}`, name: newResName.trim(), max: mx, current: mx, resetOn: newResReset }]);
              setNewResName('');
            }}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold"
          >
            + เพิ่มช่องทรัพยากร
          </button>
        </div>
      </div>

      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-4">
        <div className="flex flex-wrap items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800 mb-4">
          <span className="text-xs font-bold text-amber-400 flex items-center gap-1"><Dice5 className="w-4 h-4"/> ทอยด่วน (Quick Roll):</span>
          <button onClick={() => rollDiceFormula('ทอย d20', '1d20')} className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-700 transition-all shadow">1d20 เพียวๆ</button>
          <button onClick={() => rollDiceFormula('ทอยโจมตี + Prof', `1d20+${profBonus}`)} className="bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold border border-emerald-600/30 transition-all shadow">1d20 + Prof (+{profBonus})</button>
        </div>
        <div className="flex gap-2">
          {[
            { id: 'main', label: '⚔️ Main Action' },
            { id: 'bonus', label: '⚡ Bonus Action' },
            { id: 'reaction', label: '🛡️ Reaction' }
          ].map(st => (
            <button
              key={st.id}
              onClick={() => setCombatSubTab(st.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                combatSubTab === st.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-400'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {customActions.filter(a => a.type === combatSubTab).map(act => (
            <div key={act.id} className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-2">
              <div>
                <div className="text-sm font-bold text-slate-100">{act.name}</div>
                <div className="text-xs text-slate-400">{act.desc}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const finalDice = act.addProf ? `${act.dice}+${profBonus}` : act.dice;
                    rollDiceFormula(act.name, finalDice);
                  }}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 shrink-0"
                >
                  <Dice5 className="w-4 h-4" /> ทอย ({act.addProf ? `${act.dice}+Prof` : act.dice})
                </button>
                <button
                  onClick={() => setCustomActions(prev => prev.filter(x => x.id !== act.id))}
                  className="text-slate-500 hover:text-rose-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-2 border-t border-slate-800">
          <input
            type="text"
            value={newActName}
            onChange={(e) => setNewActName(e.target.value)}
            placeholder="ชื่อท่าโจมตี / สกิล..."
            className="sm:col-span-4 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
          />
          <input
            type="text"
            value={newActDice}
            onChange={(e) => setNewActDice(e.target.value)}
            placeholder="ลูกเต๋า เช่น 1d20+6 หรือ 2d6+4"
            className="sm:col-span-3 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-amber-300 font-bold"
          />
          <div className="sm:col-span-3 flex flex-col gap-1.5">
            <input
              type="text"
              value={newActDesc}
              onChange={(e) => setNewActDesc(e.target.value)}
              placeholder="คำอธิบายสั้นๆ..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white outline-none"
            />
            <label className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold cursor-pointer pl-1">
              <input type="checkbox" checked={newActAddProf} onChange={(e) => setNewActAddProf(e.target.checked)} className="accent-emerald-500 w-3 h-3" />
              + บวกค่า Proficiency ตอนทอย
            </label>
          </div>
          <button
            onClick={() => {
              if (!newActName.trim()) return;
              setCustomActions(prev => [...prev, { id: `act-${Date.now()}`, type: combatSubTab, name: newActName.trim(), dice: newActDice || '1d20', desc: newActDesc, addProf: newActAddProf }]);
              setNewActName('');
              setNewActDesc('');
            }}
            className="sm:col-span-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-1.5 rounded-lg text-xs"
          >
            + เพิ่มปุ่ม
          </button>
        </div>
      </div>
    </div>
  );
}
