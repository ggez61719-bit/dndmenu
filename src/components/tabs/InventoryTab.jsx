import React, { useState } from 'react';
import { Trash2, Sparkles, Shield, Wand2, Activity, Globe, Plus, Sliders, ChevronDown, ChevronUp } from 'lucide-react';

const MAGIC_ITEMS_PRESETS = [
  {
    name: '🎩 Birthright (หมวกจอมเวทเสน่ห์ +2 CHA)',
    type: 'ไอเทมเวทมนตร์',
    weight: 1,
    ac: null,
    statBonuses: { CHA: 2 },
    uncappedStat: true,
    attuned: true,
    equipped: true,
    desc: 'หมวกเวทมนตร์ระดับ Very Rare: บวกค่า Charisma (CHA) +2 แต้ม (ทะลุเพดานสูงสุดถึง 22!)'
  },
  {
    name: '🥊 Gauntlets of Hill Giant Strength (ถุงมือพละกำลังยักษ์ STR = 23)',
    type: 'ไอเทมเวทมนตร์',
    weight: 2,
    ac: null,
    statOverrides: { STR: 23 },
    attuned: true,
    equipped: true,
    desc: 'ถุงมือเหล็กยักษ์: เปลี่ยนค่าพละกำลัง (STR) ของผู้สวมใส่ให้กลายเป็น 23 ทันที (+6 Modifier)!'
  },
  {
    name: '📿 Amulet of Greater Health (สร้อยคอสุขภาพแห่งความอึด CON = 23)',
    type: 'ไอเทมเวทมนตร์',
    weight: 1,
    ac: null,
    statOverrides: { CON: 23 },
    attuned: true,
    equipped: true,
    desc: 'สร้อยคอศักดิ์สิทธิ์: เปลี่ยนค่าความอึด (CON) ของผู้สวมใส่ให้กลายเป็น 23 ทันที (เลือด Max HP พุ่งกระฉูด)!'
  },
  {
    name: '👑 Warped Headband of Intellect (รัดเกล้าปัญญาโอเกอร์ INT = 19)',
    type: 'ไอเทมเวทมนตร์',
    weight: 1,
    ac: null,
    statOverrides: { INT: 19 },
    attuned: true,
    equipped: true,
    desc: 'รัดเกล้าเวทมนตร์: เปลี่ยนค่าสติปัญญา (INT) ของผู้สวมใส่ให้กลายเป็น 19 ทันที (+4 Modifier)!'
  },
  {
    name: '🧤 Gloves of Dexterity (ถุงมือความว่องไวจอมโจร DEX = 18)',
    type: 'ไอเทมเวทมนตร์',
    weight: 1,
    ac: null,
    statOverrides: { DEX: 18 },
    attuned: false,
    equipped: true,
    desc: 'ถุงมือหนังเวทมนตร์: เปลี่ยนค่าความว่องไว (DEX) ของผู้สวมใส่ให้กลายเป็น 18 ทันที (+4 Modifier)!'
  },
  {
    name: '💍 Ring of Protection (แหวนแห่งการคุ้มครอง +1 AC)',
    type: 'ไอเทมเวทมนตร์',
    weight: 0.1,
    ac: 1,
    attuned: true,
    equipped: true,
    desc: 'มอบโบนัสเกราะป้องกัน +1 AC และ +1 Saving Throws ทุกชนิดขณะสวมใส่'
  },
  {
    name: '🧥 Cloak of Protection (ผ้าคลุมแห่งการคุ้มครอง +1 AC)',
    type: 'ไอเทมเวทมนตร์',
    weight: 1,
    ac: 1,
    attuned: true,
    equipped: true,
    desc: 'ผ้าคลุมอาคม: มอบโบนัสเกราะป้องกัน +1 AC และ +1 Saving Throws ทุกชนิด'
  },
  {
    name: '🔮 Pearl of Power / Spellcrux Amulet (+1 ช่องเวท Lv.3)',
    type: 'ไอเทมเวทมนตร์',
    weight: 0.5,
    ac: null,
    bonusSpellSlots: { 3: 1 },
    attuned: true,
    equipped: true,
    desc: 'ไข่มุกแห่งมนตรา: เพิ่มโควต้าช่องเวทมนตร์ (Spell Slot) ระดับ 3 ให้ใช้งานเพิ่มฟรีอีก +1 ช่อง!'
  },
  {
    name: '🪄 Staff of Power / Markoheshkir (+2 AC, +ช่องเวท Lv.5 & Fireball)',
    type: 'อาวุธ/ชุดอาชีพ',
    weight: 4,
    ac: 2,
    bonusSpellSlots: { 5: 1 },
    grantedSpells: ['Fireball', 'Lightning Bolt', 'Wall of Force'],
    attuned: true,
    equipped: true,
    desc: 'คฑามหาเวทระดับตำนาน: บวกเกราะ +2 AC, เพิ่มช่องเวทระดับ 5 ฟรี +1 ช่อง และปลดล็อกคาถา Fireball, Lightning Bolt, Wall of Force เข้าสมุดเวท!'
  },
  {
    name: '🥾 Boots of Speed / Crusher’s Ring (ความเร็วเคลื่อนที่ +10 ฟุต)',
    type: 'ไอเทมเวทมนตร์',
    weight: 1,
    ac: null,
    speedBonus: 10,
    attuned: false,
    equipped: true,
    desc: 'เพิ่มความเร็วในการเคลื่อนที่พื้นฐาน (Movement Speed) ให้ผู้สวมใส่อีก +10 ฟุต ตลอดเวลา!'
  },
  {
    name: '🎭 Envoy’s Amulet / Gloves of Thievery (+2 Persuasion & Sleight of Hand)',
    type: 'ไอเทมเวทมนตร์',
    weight: 0.5,
    ac: null,
    skillBonuses: { persuasion: 2, sleight_of_hand: 2, stealth: 2 },
    attuned: false,
    equipped: true,
    desc: 'เครื่องประดับจอมโจรและทูต: บวกโบนัสทักษะ Persuasion +2, Sleight of Hand +2 และ Stealth +2 ทันที!'
  },
  {
    name: '📖 Tome of Leadership / Mirror of Loss (พรถาวร +2 Stat เลือกได้)',
    type: 'ไอเทมเวทมนตร์',
    weight: 0,
    ac: null,
    statBonuses: { CHA: 2 },
    uncappedStat: true,
    attuned: false,
    equipped: true,
    desc: 'บันทึกคัมภีร์โบราณหรือพรถาวร (สามารถกดแก้ไขที่การ์ดไอเทมเพื่อเปลี่ยนค่าสเตตัสที่บวกได้ตามต้องการ)'
  }
];

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
  setStatusMsg,
  STATS_INFO = [],
  SKILLS_META = {},
  SPELLS_DB = {}
}) {
  // Advanced Builder States for New Item
  const [showAdvancedBuilder, setShowAdvancedBuilder] = useState(true);
  const [showPresetModal, setShowPresetModal] = useState(false);

  // Armor Category (light / medium / heavy)
  const [newArmorCat, setNewArmorCat] = useState('medium');

  // Stat Bonus / Override
  const [bonusStatId, setBonusStatId] = useState('CHA');
  const [bonusStatVal, setBonusStatVal] = useState(0);
  const [uncappedStat, setUncappedStat] = useState(true);
  const [overrideStatId, setOverrideStatId] = useState('STR');
  const [overrideStatVal, setOverrideStatVal] = useState(0);

  // Combat & Speed Bonuses
  const [newSpeedBonus, setNewSpeedBonus] = useState(0);
  const [newHpBonus, setNewHpBonus] = useState(0);
  const [newInitBonus, setNewInitBonus] = useState(0);

  // Spell Slot & Granted Spell
  const [bonusSlotLv, setBonusSlotLv] = useState(1);
  const [bonusSlotCount, setBonusSlotCount] = useState(0);
  const [grantedSpellName, setGrantedSpellName] = useState('');

  // Skill Bonus & Proficiency
  const [bonusSkillId, setBonusSkillId] = useState('persuasion');
  const [bonusSkillVal, setBonusSkillVal] = useState(0);
  const [grantSkillProf, setGrantSkillProf] = useState(false);
  const [grantSkillExp, setGrantSkillExp] = useState(false);

  // Editing existing item id
  const [editingItemId, setEditingItemId] = useState(null);

  // Calculate active equipment summary
  const activeItems = inventory.filter(i => i.equipped || i.attuned);

  const handleAddSmartItem = () => {
    if (!newItemName.trim()) {
      if (setStatusMsg) {
        setStatusMsg('⚠️ กรุณาตั้งชื่อไอเทมก่อนกดเพิ่มเข้ากระเป๋า');
        setTimeout(() => setStatusMsg(null), 3000);
      }
      return;
    }

    const statBonuses = {};
    if (parseInt(bonusStatVal, 10) !== 0) {
      statBonuses[bonusStatId] = parseInt(bonusStatVal, 10);
    }

    const statOverrides = {};
    if (parseInt(overrideStatVal, 10) > 0) {
      statOverrides[overrideStatId] = parseInt(overrideStatVal, 10);
    }

    const bonusSpellSlots = {};
    if (parseInt(bonusSlotCount, 10) > 0) {
      bonusSpellSlots[bonusSlotLv] = parseInt(bonusSlotCount, 10);
    }

    const skillBonuses = {};
    if (parseInt(bonusSkillVal, 10) !== 0) {
      skillBonuses[bonusSkillId] = parseInt(bonusSkillVal, 10);
    }

    const skillProficiencies = grantSkillProf ? [bonusSkillId] : [];
    const skillExpertise = grantSkillExp ? [bonusSkillId] : [];
    const grantedSpells = grantedSpellName ? [grantedSpellName] : [];

    const newItemObj = {
      id: `item-${Date.now()}`,
      name: newItemName.trim(),
      qty: parseInt(newItemQty, 10) || 1,
      weight: parseFloat(newItemWeight) || 0,
      type: newItemType,
      armorCat: newItemType === 'ชุดเกราะ' ? newArmorCat : undefined,
      ac: newItemAC !== '' ? parseInt(newItemAC, 10) : null,
      speedBonus: parseInt(newSpeedBonus, 10) || 0,
      hpBonus: parseInt(newHpBonus, 10) || 0,
      initBonus: parseInt(newInitBonus, 10) || 0,
      statBonuses: Object.keys(statBonuses).length > 0 ? statBonuses : undefined,
      uncappedStat,
      statOverrides: Object.keys(statOverrides).length > 0 ? statOverrides : undefined,
      bonusSpellSlots: Object.keys(bonusSpellSlots).length > 0 ? bonusSpellSlots : undefined,
      grantedSpells: grantedSpells.length > 0 ? grantedSpells : undefined,
      skillBonuses: Object.keys(skillBonuses).length > 0 ? skillBonuses : undefined,
      skillProficiencies: skillProficiencies.length > 0 ? skillProficiencies : undefined,
      skillExpertise: skillExpertise.length > 0 ? skillExpertise : undefined,
      desc: newItemDesc.trim(),
      equipped: true,
      isShield: newItemType === 'โล่',
      attuned: false
    };

    setInventory(prev => [newItemObj, ...prev]);
    setNewItemName('');
    setNewItemAC('');
    setNewItemDesc('');
    setBonusStatVal(0);
    setOverrideStatVal(0);
    setNewSpeedBonus(0);
    setNewHpBonus(0);
    setNewInitBonus(0);
    setBonusSlotCount(0);
    setGrantedSpellName('');
    setBonusSkillVal(0);
    setGrantSkillProf(false);
    setGrantSkillExp(false);

    if (setStatusMsg) {
      setStatusMsg(`🎒 เพิ่มและสวมใส่ "${newItemObj.name}" เรียบร้อยแล้ว! ค่าสถานะทั้งหมดอัปเดตอัตโนมัติ`);
      setTimeout(() => setStatusMsg(null), 3500);
    }
  };

  const handleAddPresetItem = (preset) => {
    const canAttune = preset.attuned && attunedCount < 3;
    const itemObj = {
      ...preset,
      id: `preset-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      qty: 1,
      equipped: true,
      attuned: canAttune
    };
    setInventory(prev => [itemObj, ...prev]);
    if (setStatusMsg) {
      setStatusMsg(`✨ เสก "${preset.name}" เข้ากระเป๋าและสวมใส่ทันที!`);
      setTimeout(() => setStatusMsg(null), 3500);
    }
  };

  const renderItemEffectBadges = (item) => {
    const badges = [];
    if (item.ac) {
      badges.push({
        label: item.type === 'ชุดเกราะ' ? `Base AC ${item.ac} (${item.armorCat || 'armor'})` : `+${item.ac} AC`,
        color: 'bg-sky-500/20 text-sky-300 border-sky-500/40'
      });
    }
    if (item.statBonuses) {
      Object.entries(item.statBonuses).forEach(([st, val]) => {
        if (val !== 0) {
          badges.push({
            label: `${st} ${val > 0 ? `+${val}` : val}${item.uncappedStat ? ' (ทะลุ 20)' : ''}`,
            color: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
          });
        }
      });
    }
    if (item.statOverrides) {
      Object.entries(item.statOverrides).forEach(([st, val]) => {
        if (val > 0) {
          badges.push({
            label: `เซ็ต ${st} = ${val}`,
            color: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
          });
        }
      });
    }
    if (item.bonusSpellSlots) {
      Object.entries(item.bonusSpellSlots).forEach(([sLv, cnt]) => {
        if (cnt > 0) {
          badges.push({
            label: `+${cnt} ช่องเวท Lv.${sLv}`,
            color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
          });
        }
      });
    }
    if (Array.isArray(item.grantedSpells) && item.grantedSpells.length > 0) {
      badges.push({
        label: `🪄 เวท: ${item.grantedSpells.join(', ')}`,
        color: 'bg-purple-500/20 text-purple-300 border-purple-500/40'
      });
    }
    if (item.skillBonuses) {
      Object.entries(item.skillBonuses).forEach(([sk, val]) => {
        if (val !== 0) {
          const skName = sk === 'ALL' ? 'ทุกทักษะ' : (SKILLS_META[sk]?.name_th?.split(' (')[0] || sk);
          badges.push({
            label: `${skName} ${val > 0 ? `+${val}` : val}`,
            color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
          });
        }
      });
    }
    if (Array.isArray(item.skillProficiencies) && item.skillProficiencies.length > 0) {
      item.skillProficiencies.forEach(sk => {
        badges.push({
          label: `ชำนาญ: ${SKILLS_META[sk]?.name_th?.split(' (')[0] || sk}`,
          color: 'bg-teal-500/20 text-teal-300 border-teal-500/40'
        });
      });
    }
    if (Array.isArray(item.skillExpertise) && item.skillExpertise.length > 0) {
      item.skillExpertise.forEach(sk => {
        badges.push({
          label: `🌟 Expertise: ${SKILLS_META[sk]?.name_th?.split(' (')[0] || sk}`,
          color: 'bg-pink-500/20 text-pink-300 border-pink-500/40'
        });
      });
    }
    if (item.speedBonus) {
      badges.push({
        label: `⚡ ความเร็ว ${item.speedBonus > 0 ? `+${item.speedBonus}` : item.speedBonus} ฟุต`,
        color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
      });
    }
    if (item.hpBonus) {
      badges.push({
        label: `❤️ Max HP ${item.hpBonus > 0 ? `+${item.hpBonus}` : item.hpBonus}`,
        color: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
      });
    }
    if (item.initBonus) {
      badges.push({
        label: `🎲 Initiative ${item.initBonus > 0 ? `+${item.initBonus}` : item.initBonus}`,
        color: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
      });
    }
    return badges;
  };

  return (
    <div className="animate-in fade-in space-y-6">
      {/* Header & Preset Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            🎒 กระเป๋าอัจฉริยะ & อุปกรณ์เวทมนตร์ (Smart Inventory)
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            น้ำหนักรวม: <strong className={totalWeight > maxCarryWeight ? 'text-rose-400' : 'text-emerald-400'}>{totalWeight.toFixed(1)} / {maxCarryWeight} ปอนด์</strong> • การเชื่อมจิต (Attunement): <strong className="text-amber-400">{attunedCount} / 3 ชิ้น</strong>
          </p>
        </div>
        <button
          onClick={() => setShowPresetModal(!showPresetModal)}
          className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs shadow-lg transition-all self-start sm:self-auto"
        >
          <Sparkles className="w-4 h-4" /> {showPresetModal ? 'ซ่อนคลังไอเทมสำเร็จรูป' : '✨ เสกไอเทมเวทมนตร์ยอดฮิต (Presets)'}
        </button>
      </div>

      {/* Magic Items Presets Drawer */}
      {showPresetModal && (
        <div className="bg-amber-950/20 border-2 border-amber-500/40 rounded-2xl p-4 space-y-3 animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> คลังไอเทมเวทมนตร์ D&D 5e / BG3 (คลิกเพื่อเสกเข้ากระเป๋าพร้อมสวมใส่ทันที!)
            </span>
            <button onClick={() => setShowPresetModal(false)} className="text-xs text-slate-400 hover:text-white">✕ ปิด</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-80 overflow-y-auto pr-1">
            {MAGIC_ITEMS_PRESETS.map((preset, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-xl p-3 flex flex-col justify-between gap-2 transition-all">
                <div>
                  <div className="font-bold text-xs text-amber-300">{preset.name}</div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">{preset.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1">
                    {renderItemEffectBadges(preset).map((b, bi) => (
                      <span key={bi} className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${b.color}`}>
                        {b.label}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleAddPresetItem(preset)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-3 py-1 rounded-lg text-[11px] shrink-0 shadow"
                  >
                    + เสกเข้ากระเป๋า
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Equipment Buffs Summary Banner */}
      {activeItems.some(i => renderItemEffectBadges(i).length > 0) && (
        <div className="bg-indigo-950/30 border border-indigo-500/40 rounded-xl p-3.5 space-y-2">
          <div className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-400" /> บัฟและเอฟเฟกต์จากอุปกรณ์ที่กำลังสวมใส่ / เชื่อมจิตอยู่ตอนนี้:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {activeItems.flatMap(item =>
              renderItemEffectBadges(item).map((b, idx) => (
                <span key={`${item.id}-${idx}`} className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${b.color}`}>
                  {item.name.split(' (')[0]}: <strong>{b.label}</strong>
                </span>
              ))
            )}
          </div>
        </div>
      )}

      {/* Wealth / Currency */}
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

      {/* Smart Item Creator Form */}
      <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
            <Plus className="w-4 h-4" /> สร้างไอเทม / อุปกรณ์สวมใส่ใหม่ (รองรับการบวก Status, AC, Spell Slot, Skill)
          </h3>
          <button
            onClick={() => setShowAdvancedBuilder(!showAdvancedBuilder)}
            className="text-xs text-indigo-300 hover:text-indigo-200 flex items-center gap-1 font-semibold bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700"
          >
            <Sliders className="w-3.5 h-3.5" />
            {showAdvancedBuilder ? 'ย่อตั้งค่าเอฟเฟกต์' : 'ตั้งค่าบวก Status / Spell Slot / Skill'}
            {showAdvancedBuilder ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Basic Row */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
          <div className="sm:col-span-5">
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">ชื่อไอเทม / อุปกรณ์</label>
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="เช่น หมวก CHA+2, สร้อยคอเพิ่มช่องเวท, ดาบเวท..."
              className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-3 py-2 text-xs text-white outline-none"
            />
          </div>
          <div className="sm:col-span-3">
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">หมวดหมู่</label>
            <select
              value={newItemType}
              onChange={(e) => setNewItemType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-2 text-xs text-white outline-none"
            >
              <option value="ไอเทมเวทมนตร์">✨ ไอเทมเวทมนตร์ / เครื่องประดับ</option>
              <option value="อาวุธ/ชุดอาชีพ">⚔️ อาวุธ / คฑาเวท</option>
              <option value="ชุดเกราะ">🛡️ ชุดเกราะ (Armor)</option>
              <option value="โล่">🛡️ โล่ (Shield)</option>
              <option value="ทั่วไป">🎒 ของใช้ทั่วไป</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">
              {newItemType === 'ชุดเกราะ' ? 'ค่า AC พื้นฐานเกราะ' : 'โบนัส +AC'}
            </label>
            <input
              type="number"
              value={newItemAC}
              onChange={(e) => setNewItemAC(e.target.value)}
              placeholder={newItemType === 'ชุดเกราะ' ? 'เช่น 15' : 'เช่น +1, +2'}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-2 text-xs text-sky-300 font-bold outline-none text-center"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">น้ำหนัก (ปอนด์)</label>
            <input
              type="number"
              min="0"
              step="0.5"
              value={newItemWeight}
              onChange={(e) => setNewItemWeight(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-2 text-xs text-white outline-none text-center"
            />
          </div>
        </div>

        {/* Armor Category Selector if Armor */}
        {newItemType === 'ชุดเกราะ' && (
          <div className="bg-slate-900/90 border border-sky-500/30 rounded-xl p-3 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-sky-300">ประเภทชุดเกราะ:</span>
            {[
              { id: 'light', label: 'เกราะเบา (AC + DEX เต็ม)' },
              { id: 'medium', label: 'เกราะกลาง (AC + DEX สูงสุด +2/+3)' },
              { id: 'heavy', label: 'เกราะหนัก (AC ตายตัว ไม่บวก DEX)' }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setNewArmorCat(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  newArmorCat === cat.id ? 'bg-sky-500 text-slate-950' : 'bg-slate-950 text-slate-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Advanced Effect Modifiers Box (Status, Spell Slot, Skill, Speed/HP/Init) */}
        {showAdvancedBuilder && (
          <div className="bg-slate-950/90 border border-amber-500/30 rounded-xl p-4 space-y-4">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              ⚡ กำหนดค่าพลังพิเศษของไอเทม (แสดงผลอัตโนมัติเมื่อกดสวมใส่หรือเชื่อมจิต)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. Stat Bonus & Stat Override */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-3">
                <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Activity className="w-4 h-4" /> 1. บวกค่าสถานะ (Status) หรือล็อกค่าสถานะ
                </div>

                {/* Add Stat (+1, +2...) */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] text-slate-400 w-24">บวกเพิ่ม (+):</span>
                  <select
                    value={bonusStatId}
                    onChange={(e) => setBonusStatId(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-bold text-amber-400"
                  >
                    {['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min="-5"
                    max="10"
                    value={bonusStatVal}
                    onChange={(e) => setBonusStatVal(e.target.value)}
                    className="w-16 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-xs font-bold text-emerald-400 text-center"
                  />
                  <label className="flex items-center gap-1 text-[11px] text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={uncappedStat}
                      onChange={(e) => setUncappedStat(e.target.checked)}
                      className="rounded accent-amber-500"
                    />
                    ทะลุเพดาน 20 ได้
                  </label>
                </div>

                {/* Set / Override Stat (e.g. STR = 23) */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400 w-24">หรือเซ็ตค่าเป็น:</span>
                  <select
                    value={overrideStatId}
                    onChange={(e) => setOverrideStatId(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-bold text-rose-400"
                  >
                    {['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={overrideStatVal}
                    onChange={(e) => setOverrideStatVal(e.target.value)}
                    placeholder="เช่น 19, 23"
                    className="w-16 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-xs font-bold text-rose-300 text-center"
                  />
                  <span className="text-[10px] text-slate-500">(0 = ไม่เซ็ต เช่น ถุงมือยักษ์ใส่ 23)</span>
                </div>
              </div>

              {/* 2. Spell Slots & Granted Spells */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-3">
                <div className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                  <Wand2 className="w-4 h-4" /> 2. เพิ่มช่องเวท (Spell Slot) & มอบคาถา
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] text-slate-400">เพิ่มช่องเวทระดับ:</span>
                  <select
                    value={bonusSlotLv}
                    onChange={(e) => setBonusSlotLv(parseInt(e.target.value, 10))}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-bold text-indigo-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(lv => (
                      <option key={lv} value={lv}>ระดับ {lv}</option>
                    ))}
                  </select>
                  <span className="text-[11px] text-slate-400">จำนวน:</span>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    value={bonusSlotCount}
                    onChange={(e) => setBonusSlotCount(e.target.value)}
                    className="w-16 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-xs font-bold text-emerald-400 text-center"
                  />
                  <span className="text-[11px] text-slate-400">ช่อง</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400">มอบคาถาติดตัว:</span>
                  <select
                    value={grantedSpellName}
                    onChange={(e) => setGrantedSpellName(e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-purple-300 font-semibold outline-none"
                  >
                    <option value="">-- ไม่ได้มอบคาถา --</option>
                    {Object.keys(SPELLS_DB).sort().map(sName => (
                      <option key={sName} value={sName}>
                        [Lv.{SPELLS_DB[sName]?.level}] {sName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Skill Bonus & Proficiency */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-3">
                <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <Globe className="w-4 h-4" /> 3. บวกโบนัสทักษะ (Skill) & ความชำนาญ
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <select
                    value={bonusSkillId}
                    onChange={(e) => setBonusSkillId(e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-bold text-emerald-300 outline-none"
                  >
                    <option value="ALL">🌟 ทุกทักษะทั้งหมด (All Skills)</option>
                    {Object.entries(SKILLS_META).map(([skId, meta]) => (
                      <option key={skId} value={skId}>{meta.name_th}</option>
                    ))}
                  </select>
                  <span className="text-[11px] text-slate-400">บวกเพิ่ม:</span>
                  <input
                    type="number"
                    min="-5"
                    max="10"
                    value={bonusSkillVal}
                    onChange={(e) => setBonusSkillVal(e.target.value)}
                    className="w-16 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-xs font-bold text-emerald-400 text-center"
                  />
                </div>

                {bonusSkillId !== 'ALL' && (
                  <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-800/80 text-[11px]">
                    <label className="flex items-center gap-1.5 text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={grantSkillProf}
                        onChange={(e) => setGrantSkillProf(e.target.checked)}
                        className="rounded accent-emerald-500"
                      />
                      มอบความชำนาญ (Proficiency)
                    </label>
                    <label className="flex items-center gap-1.5 text-pink-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={grantSkillExp}
                        onChange={(e) => setGrantSkillExp(e.target.checked)}
                        className="rounded accent-pink-500"
                      />
                      มอบความชำนาญคูณสอง (Expertise)
                    </label>
                  </div>
                )}
              </div>

              {/* 4. Speed, Max HP & Initiative Bonus */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-3">
                <div className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> 4. โบนัสความเร็ว (ฟุต), เลือดสูงสุด (HP) & เริ่มเทิร์น
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">ความเร็ว (+ฟุต)</label>
                    <input
                      type="number"
                      step="5"
                      value={newSpeedBonus}
                      onChange={(e) => setNewSpeedBonus(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-1.5 text-xs font-bold text-emerald-400 text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Max HP (+เลือด)</label>
                    <input
                      type="number"
                      value={newHpBonus}
                      onChange={(e) => setNewHpBonus(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-1.5 text-xs font-bold text-rose-400 text-center"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Initiative (+เริ่มเทิร์น)</label>
                    <input
                      type="number"
                      value={newInitBonus}
                      onChange={(e) => setNewInitBonus(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg py-1.5 text-xs font-bold text-amber-400 text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Description & Submit Button */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="text"
            value={newItemDesc}
            onChange={(e) => setNewItemDesc(e.target.value)}
            placeholder="คำอธิบายเพิ่มเติม เช่น เมื่อตีติดคริติคอลจะฮีล 1d6, ได้รับจากบอสมังกร..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none"
          />
          <button
            onClick={handleAddSmartItem}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs transition-all shadow-lg shrink-0"
          >
            + เพิ่มและสวมใส่ไอเทม
          </button>
        </div>
      </div>

      {/* Inventory Items List with Inline Quick-Edit */}
      <div className="space-y-2.5">
        {inventory.map(item => {
          const badges = renderItemEffectBadges(item);
          const isEditing = editingItemId === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-xl p-3.5 border transition-all space-y-2.5 ${
                item.equipped || item.attuned
                  ? 'bg-slate-900/90 border-emerald-500/40 shadow-md'
                  : 'bg-slate-950/60 border-slate-800 opacity-80'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="space-y-1 flex-1">
                  <div className="text-sm font-bold text-slate-100 flex flex-wrap items-center gap-2">
                    <span>{item.name}</span>
                    <span className="text-xs text-slate-400 font-normal">({item.type} • {item.weight} lb)</span>
                    {badges.map((b, bIdx) => (
                      <span key={bIdx} className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${b.color}`}>
                        {b.label}
                      </span>
                    ))}
                  </div>
                  {item.desc && (
                    <div className="text-xs text-slate-300 leading-relaxed bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                      {item.desc}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => setEditingItemId(isEditing ? null : item.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all ${
                      isEditing
                        ? 'bg-indigo-500 text-white border-indigo-400'
                        : 'bg-slate-800 hover:bg-slate-700 text-indigo-300 border-slate-700'
                    }`}
                  >
                    ⚙️ แก้ไขค่าบวก
                  </button>
                  <button
                    onClick={() => setInventory(prev => prev.map(i => i.id === item.id ? { ...i, equipped: !i.equipped } : i))}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      item.equipped
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
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
                      item.attuned
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.attuned ? '✨ เชื่อมจิต' : 'Attune'}
                  </button>
                  <button
                    onClick={() => setInventory(prev => prev.filter(i => i.id !== item.id))}
                    className="p-1.5 text-rose-400 hover:bg-rose-500/20 rounded-lg"
                    title="ลบไอเทม"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Inline Quick Editor for Existing Item */}
              {isEditing && (
                <div className="bg-slate-950 border border-indigo-500/40 rounded-xl p-3.5 space-y-3 animate-in fade-in">
                  <div className="text-xs font-bold text-indigo-300 flex items-center justify-between">
                    <span>⚙️ ปรับแต่งโบนัสของ "{item.name}" แบบสด (อัปเดตทันที)</span>
                    <button onClick={() => setEditingItemId(null)} className="text-slate-400 hover:text-white text-[11px]">เสร็จสิ้น ✕</button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                    {['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].map(st => {
                      const curVal = item.statBonuses?.[st] || 0;
                      return (
                        <div key={st} className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-center">
                          <label className="text-[10px] font-bold text-amber-400 block">บวก {st}</label>
                          <input
                            type="number"
                            min="-5"
                            max="10"
                            value={curVal}
                            onChange={(e) => {
                              const v = parseInt(e.target.value, 10) || 0;
                              setInventory(prev => prev.map(it => {
                                if (it.id !== item.id) return it;
                                const nextBonuses = { ...(it.statBonuses || {}), [st]: v };
                                if (v === 0) delete nextBonuses[st];
                                return { ...it, statBonuses: nextBonuses, uncappedStat: true };
                              }));
                            }}
                            className="w-full bg-slate-950 border border-slate-700 rounded mt-1 py-1 text-center text-xs font-bold text-white"
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-center">
                      <label className="text-[10px] font-bold text-sky-400 block">ค่า AC / โบนัส AC</label>
                      <input
                        type="number"
                        value={item.ac || 0}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10) || 0;
                          setInventory(prev => prev.map(it => it.id === item.id ? { ...it, ac: v === 0 ? null : v } : it));
                        }}
                        className="w-full bg-slate-950 border border-slate-700 rounded mt-1 py-1 text-center text-xs font-bold text-white"
                      />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-center">
                      <label className="text-[10px] font-bold text-emerald-400 block">ความเร็ว (+ฟุต)</label>
                      <input
                        type="number"
                        step="5"
                        value={item.speedBonus || 0}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10) || 0;
                          setInventory(prev => prev.map(it => it.id === item.id ? { ...it, speedBonus: v } : it));
                        }}
                        className="w-full bg-slate-950 border border-slate-700 rounded mt-1 py-1 text-center text-xs font-bold text-white"
                      />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-center">
                      <label className="text-[10px] font-bold text-rose-400 block">Max HP (+เลือด)</label>
                      <input
                        type="number"
                        value={item.hpBonus || 0}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10) || 0;
                          setInventory(prev => prev.map(it => it.id === item.id ? { ...it, hpBonus: v } : it));
                        }}
                        className="w-full bg-slate-950 border border-slate-700 rounded mt-1 py-1 text-center text-xs font-bold text-white"
                      />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-center">
                      <label className="text-[10px] font-bold text-amber-300 block">Initiative (+เริ่มเทิร์น)</label>
                      <input
                        type="number"
                        value={item.initBonus || 0}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10) || 0;
                          setInventory(prev => prev.map(it => it.id === item.id ? { ...it, initBonus: v } : it));
                        }}
                        className="w-full bg-slate-950 border border-slate-700 rounded mt-1 py-1 text-center text-xs font-bold text-white"
                      />
                    </div>
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
