import React from 'react';

export default function BioTab({
  ALIGNMENTS_LIST,
  alignment,
  setAlignment,
  personalityTraits,
  setPersonalityTraits,
  ideals,
  setIdeals,
  bonds,
  setBonds,
  flaws,
  setFlaws,
  campaignNotes,
  setCampaignNotes
}) {
  return (
    <div className="animate-in fade-in space-y-6">
      <h2 className="text-2xl font-bold text-slate-100">ประวัติตัวละคร ศีลธรรม & บันทึกการผจญภัย</h2>

      <div className="space-y-2">
        <label className="text-xs font-bold text-amber-400 uppercase">แนวทางศีลธรรม (Alignment 9 รูปแบบ)</label>
        <div className="grid grid-cols-3 gap-2.5">
          {ALIGNMENTS_LIST.map(al => (
            <button
              key={al.id}
              onClick={() => setAlignment(al.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                alignment === al.id ? 'border-amber-500 bg-amber-500/15 shadow' : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
              }`}
            >
              <div className="text-xs font-bold text-slate-100">{al.name}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{al.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-300 block mb-1">อุปนิสัย (Personality Traits)</label>
          <textarea
            rows={3}
            value={personalityTraits}
            onChange={(e) => setPersonalityTraits(e.target.value)}
            placeholder="ลักษณะนิสัย คำพูดติดปาก..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-amber-500"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-300 block mb-1">อุดมการณ์ (Ideals)</label>
          <textarea
            rows={3}
            value={ideals}
            onChange={(e) => setIdeals(e.target.value)}
            placeholder="สิ่งที่ยึดมั่น ความยุติธรรม อิสระ หรืออำนาจ..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-amber-500"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-300 block mb-1">สายสัมพันธ์ (Bonds)</label>
          <textarea
            rows={3}
            value={bonds}
            onChange={(e) => setBonds(e.target.value)}
            placeholder="คนสำคัญ สถานที่ หรือความลับที่ต้องปกป้อง..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-amber-500"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-300 block mb-1">จุดอ่อน (Flaws)</label>
          <textarea
            rows={3}
            value={flaws}
            onChange={(e) => setFlaws(e.target.value)}
            placeholder="ความกลัว ความโลภ หรือปมในอดีต..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-amber-500"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-amber-400 block mb-1">สมุดบันทึกแคมเปญ (Campaign Notes & Lore)</label>
        <textarea
          rows={4}
          value={campaignNotes}
          onChange={(e) => setCampaignNotes(e.target.value)}
          placeholder="จดบันทึกเควสต์ ชื่อ NPC หรือเรื่องราวระหว่างการเดินทาง..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-amber-500"
        />
      </div>
    </div>
  );
}
