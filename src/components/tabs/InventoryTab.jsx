import React from 'react';
import { Trash2 } from 'lucide-react';

export default function InventoryTab({
  totalWeight,
  maxCarryWeight,
  attunedCount,
  wealth,
  setWealth,
  newItemName,
  setNewItemName,
  newItemType,
  setNewItemType,
  newItemWeight,
  setNewItemWeight,
  newItemQty,
  setNewItemQty,
  newItemAC,
  setNewItemAC,
  newItemDesc,
  setNewItemDesc,
  inventory,
  setInventory,
  setStatusMsg
}) {
  return (
    <div className="animate-in fade-in space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">กระเป๋าสัมภาระ สวมใส่อุปกรณ์ & เชื่อมจิต</h2>
          <p className="text-xs text-slate-400">
            น้ำหนักรวม: <strong className={totalWeight > maxCarryWeight ? 'text-rose-400' : 'text-emerald-400'}>{totalWeight.toFixed(1)} / {maxCarryWeight} ปอนด์</strong> • การเชื่อมจิต (Attunement): <strong className="text-amber-400">{attunedCount} / 3 ชิ้น</strong>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2.5 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
        {[
          { key: 'cp', label: 'CP (ทองแดง)', color: 'text-orange-400' },
          { key: 'sp', label: 'SP (เงิน)', color: 'text-slate-300' },
          { key: 'ep', label: 'EP (อีเลคตรัม)', color: 'text-sky-300' },
          { key: 'gp', label: 'GP (ทองคำ)', color: 'text-amber-400' },
          { key: 'pp', label: 'PP (แพลตตินัม)', color: 'text-indigo-300' }
        ].map(coin => (
          <div key={coin.key} className="text-center">
            <label className={`text-[11px] font-bold block mb-1 ${coin.color}`}>{coin.label}</label>
            <input
              type="number"
              min="0"
              value={wealth[coin.key]}
              onChange={(e) => setWealth({ ...wealth, [coin.key]: Math.max(0, parseInt(e.target.value, 10) || 0) })}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg py-1.5 text-center font-bold text-sm text-white outline-none"
            />
          </div>
        ))}
      </div>

      <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-end">
        <div className="sm:col-span-4">
          <label className="text-[11px] text-slate-400 block mb-1">ชื่อไอเทม / ชุดเกราะ</label>
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="เช่น Ring of Protection, Half Plate"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white outline-none"
          />
        </div>
        <div className="sm:col-span-3">
          <label className="text-[11px] text-slate-400 block mb-1">หมวดหมู่</label>
          <select
            value={newItemType}
            onChange={(e) => setNewItemType(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white outline-none"
          >
            <option value="ทั่วไป">ทั่วไป</option>
            <option value="อาวุธ/ชุดอาชีพ">อาวุธ</option>
            <option value="ชุดเกราะ">ชุดเกราะ</option>
            <option value="โล่">โล่</option>
            <option value="ไอเทมเวทมนตร์">ไอเทมเวทมนตร์</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-[11px] text-slate-400 block mb-1">น้ำหนัก (lb)</label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={newItemWeight}
            onChange={(e) => setNewItemWeight(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white outline-none"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-[11px] text-slate-400 block mb-1">AC (เกราะ=ฐาน, อื่น=บวก)</label>
          <input
            type="number"
            min="0"
            value={newItemAC}
            onChange={(e) => setNewItemAC(e.target.value)}
            placeholder="เช่น 15 หรือ 1"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-2 text-xs text-white outline-none text-center"
          />
        </div>
        <div className="sm:col-span-2">
          <button
            onClick={() => {
              if (!newItemName.trim()) return;
              setInventory(prev => [
                ...prev,
                {
                  id: `item-${Date.now()}`,
                  name: newItemName.trim(),
                  qty: parseInt(newItemQty, 10) || 1,
                  weight: parseFloat(newItemWeight) || 0,
                  type: newItemType,
                  ac: newItemAC ? parseInt(newItemAC, 10) : null,
                  desc: newItemDesc.trim(),
                  equipped: newItemType === 'ชุดเกราะ' || newItemType === 'โล่',
                  isShield: newItemType === 'โล่',
                  attuned: false
                }
              ]);
              setNewItemName('');
              setNewItemAC('');
              setNewItemDesc('');
            }}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2 rounded-lg text-xs transition-all"
          >
            + เพิ่มไอเทม
          </button>
        </div>
        <div className="sm:col-span-12 mt-1">
          <label className="text-[11px] text-slate-400 block mb-1">คำอธิบายความสามารถ / เอฟเฟกต์เวทมนตร์ (ถ้ามี)</label>
          <input
            type="text"
            value={newItemDesc}
            onChange={(e) => setNewItemDesc(e.target.value)}
            placeholder="อธิบายความสามารถพิเศษ เช่น โจมตี +1, ร่ายเวท Shield ได้ 1 ครั้ง..."
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        {inventory.map(item => (
          <div key={item.id} className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2">
            <div>
                <div className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  {item.name} 
                  <span className="text-xs text-slate-400 font-normal">({item.type} • {item.weight} lb)</span>
                  {item.ac && <span className="text-[10px] font-black bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded border border-sky-500/30">AC {item.ac}</span>}
                </div>
                {item.desc && <div className="text-xs text-amber-300/80 mt-1.5 leading-relaxed bg-slate-900/50 p-2 rounded-lg border border-slate-700/50">{item.desc}</div>}
              </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setInventory(prev => prev.map(i => i.id === item.id ? { ...i, equipped: !i.equipped } : i))}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  item.equipped ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {item.equipped ? '🛡️ สวมใส่แล้ว' : 'สวมใส่'}
              </button>
              <button
                onClick={() => {
                  if (!item.attuned && attunedCount >= 3) {
                    setStatusMsg('⚠️ เชื่อมจิต (Attunement) ได้สูงสุด 3 ชิ้นเท่านั้น!');
                    setTimeout(() => setStatusMsg(null), 3000);
                    return;
                  }
                  setInventory(prev => prev.map(i => i.id === item.id ? { ...i, attuned: !i.attuned } : i));
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  item.attuned ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {item.attuned ? '✨ เชื่อมจิต' : 'Attune'}
              </button>
              <button
                onClick={() => setInventory(prev => prev.filter(i => i.id !== item.id))}
                className="p-1.5 text-rose-400 hover:bg-rose-500/20 rounded-lg"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
