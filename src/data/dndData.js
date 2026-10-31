// src/data/dndData.js
// ฐานข้อมูลหลักของโปรเจกต์ Tool form Renji (D&D 5e / BG3 Ruleset)
// กฎเหล็ก: หน่วยวัดเป็นฟุต (Feet) ทั้งหมด, ไม่มีเผ่า Drow/Githyanki, ไม่มีภูมิหลัง Haunted One

export const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

export const RACES = [
  {
    id: 'human', name_en: 'Human', name_th: 'มนุษย์ (Human)',
    desc: 'เผ่าพันธุ์ผู้ปรับตัวเก่งและมีความทะเยอทะยานสูง พบได้ทั่วไปใน Faerûn',
    traits: ['ความเร็วพื้นฐาน 30 ฟุต', 'Civil Militia: ชำนาญหอก ง้าว ทวน และเกราะเบา/โล่', 'Human Versatility: เลือกชำนาญทักษะเพิ่ม 1 อย่าง และแบกน้ำหนักเพิ่ม +25%'],
    languages: ['common'], extraLanguages: 1
  },
  {
    id: 'elf', name_en: 'Elf', name_th: 'เอลฟ์ (Elf)',
    desc: 'สิ่งมีชีวิตอายุยืนผู้สง่างามและผูกพันกับธรรมชาติและเวทมนตร์',
    traits: ['Darkvision: มองเห็นในที่มืด 60 ฟุต', 'Keen Senses: ชำนาญทักษะ Perception', 'Fey Ancestry: ได้เปรียบเมื่อทอยต้านทานเสน่ห์ (Charmed) และเวทมนตร์ทำให้หลับไม่ได้'],
    languages: ['common', 'elvish'], extraLanguages: 0,
    subraces: [
      { id: 'high_elf', name_th: 'ไฮเอลฟ์ (High Elf)', traits: ['ความเร็วพื้นฐาน 30 ฟุต', 'รับ 1 Cantrip จากสาย Wizard (Fire Bolt)'], extraLanguages: 1 },
      { id: 'wood_elf', name_th: 'วูดเอลฟ์ (Wood Elf)', traits: ['Fleet of Foot: ความเร็วพื้นฐาน 35 ฟุต', 'Mask of the Wild: ชำนาญทักษะ Stealth'] }
    ]
  },
  {
    id: 'dwarf', name_en: 'Dwarf', name_th: 'ดวอร์ฟ (Dwarf)',
    desc: 'นักรบและช่างตีเหล็กร่างกำยำผู้แข็งแกร่งดั่งหินผา',
    traits: ['ความเร็วพื้นฐาน 25 ฟุต', 'Darkvision: มองเห็นในที่มืด 60 ฟุต', 'Dwarven Resilience: ต้านทานความเสียหายพิษครึ่งหนึ่ง และได้เปรียบเมื่อทอยกันสถานะติดพิษ'],
    languages: ['common', 'dwarvish'], extraLanguages: 0,
    subraces: [
      { id: 'gold_dwarf', name_th: 'โกลด์ดวอร์ฟ (Gold Dwarf)', traits: ['Dwarven Toughness: พลังชีวิตสูงสุด (Max HP) +1 แต้มต่อทุกเลเวล'] },
      { id: 'shield_dwarf', name_th: 'ชิลด์ดวอร์ฟ (Shield Dwarf)', traits: ['Dwarven Armour Training: ชำนาญการสวมใส่เกราะเบาและเกราะกลาง'] },
      { id: 'duergar', name_th: 'เดอร์การ์ (Duergar)', traits: ['Superior Darkvision: มองเห็นในที่มืด 120 ฟุต', 'Duergar Resilience: ได้เปรียบในการทอยต้านภาพลวงตาและอัมพาต'] }
    ]
  },
  {
    id: 'half_elf', name_en: 'Half-Elf', name_th: 'ฮาล์ฟเอลฟ์ (Half-Elf)',
    desc: 'ลูกครึ่งมนุษย์และเอลฟ์ที่ผสมผสานความคล่องตัวและเสน่ห์เข้าด้วยกัน',
    traits: ['Darkvision: มองเห็นในที่มืด 60 ฟุต', 'Fey Ancestry: ได้เปรียบเมื่อทอยต้านเสน่ห์ และเวททำให้หลับไม่ได้', 'Civil Militia: ชำนาญอาวุธด้ามยาว เกราะเบา และโล่'],
    languages: ['common', 'elvish'], extraLanguages: 1,
    subraces: [
      { id: 'high_half_elf', name_th: 'ไฮฮาล์ฟเอลฟ์ (High Half-Elf)', traits: ['ความเร็วพื้นฐาน 30 ฟุต', 'รับ 1 Cantrip จากสาย Wizard'] },
      { id: 'wood_half_elf', name_th: 'วูดฮาล์ฟเอลฟ์ (Wood Half-Elf)', traits: ['Fleet of Foot: ความเร็วพื้นฐาน 35 ฟุต', 'ชำนาญทักษะ Stealth'] }
    ]
  },
  {
    id: 'halfling', name_en: 'Halfling', name_th: 'ฮาล์ฟลิง (Halfling)',
    desc: 'คนตัวเล็กหัวใจใหญ่ ผู้มาพร้อมกับโชคชะตาอันน่าเหลือเชื่อ',
    traits: ['ความเร็วพื้นฐาน 25 ฟุต', 'Lucky: เมื่อทอยเต๋า 1d20 ออก 1 สามารถทอยใหม่ได้', 'Brave: ได้เปรียบเมื่อทอยต้านทานความหวาดกลัว (Frightened)'],
    languages: ['common', 'halfling'], extraLanguages: 0,
    subraces: [
      { id: 'lightfoot_halfling', name_th: 'ไลท์ฟุต ฮาล์ฟลิง (Lightfoot)', traits: ['Naturally Stealthy: ได้เปรียบในการทอยทักษะซ่อนตัว (Stealth)'] },
      { id: 'strongheart_halfling', name_th: 'สตรองฮาร์ท ฮาล์ฟลิง (Strongheart)', traits: ['Strongheart Resilience: ต้านทานความเสียหายพิษและได้เปรียบทอยกันพิษ'] }
    ]
  },
  {
    id: 'gnome', name_en: 'Gnome', name_th: 'โนม (Gnome)',
    desc: 'นักประดิษฐ์และผู้ใฝ่รู้ตัวจิ๋วที่เปี่ยมด้วยไหวพริบด้านเวทมนตร์',
    traits: ['ความเร็วพื้นฐาน 25 ฟุต', 'Gnome Cunning: ได้เปรียบในการทอยป้องกันสาย INT, WIS และ CHA จากเวทมนตร์'],
    languages: ['common', 'gnomish'], extraLanguages: 0,
    subraces: [
      { id: 'rock_gnome', name_th: 'ร็อคโนม (Rock Gnome)', traits: ['Darkvision 60 ฟุต', 'Artificer’s Lore: บวก Proficiency คูณสองในทักษะ History'] },
      { id: 'forest_gnome', name_th: 'ฟอเรสต์โนม (Forest Gnome)', traits: ['Darkvision 60 ฟุต', 'ได้รับคาถา Speak with Animals'] },
      { id: 'deep_gnome', name_th: 'ดีพโนม (Deep Gnome)', traits: ['Superior Darkvision 120 ฟุต', 'Stone Camouflage: ได้เปรียบเมื่อซ่อนตัวในพื้นที่หิน'] }
    ]
  },
  {
    id: 'tiefling', name_en: 'Tiefling', name_th: 'ทีฟลิง (Tiefling)',
    desc: 'ผู้สืบสายเลือดจากขุมนรก Avernus มีเขาและหางอันเป็นเอกลักษณ์',
    traits: ['ความเร็วพื้นฐาน 30 ฟุต', 'Darkvision: มองเห็นในที่มืด 60 ฟุต', 'Hellish Resistance: ต้านทานความเสียหายไฟ (Fire Resistance) ครึ่งหนึ่ง'],
    languages: ['common', 'infernal'], extraLanguages: 0,
    subraces: [
      { id: 'asmodeus_tiefling', name_th: 'สายเลือด Asmodeus', traits: ['ได้รับคาถา Produce Flame, Hellish Rebuke และ Darkness ตามเลเวล'] },
      { id: 'mephistopheles_tiefling', name_th: 'สายเลือด Mephistopheles', traits: ['ได้รับคาถา Mage Hand, Burning Hands และ Flame Blade ตามเลเวล'] },
      { id: 'zariel_tiefling', name_th: 'สายเลือด Zariel', traits: ['ได้รับคาถา Thaumaturgy, Searing Smite และ Branding Smite ตามเลเวล'] }
    ]
  },
  {
    id: 'dragonborn', name_en: 'Dragonborn', name_th: 'ดราก้อนบอร์น (Dragonborn)',
    desc: 'เผ่าพันธุ์มังกรเดินดินผู้หยิ่งทะนง มาพร้อมลมหายใจธาตุตามสีเกล็ด',
    traits: ['ความเร็วพื้นฐาน 30 ฟุต', 'Breath Weapon: พ่นลมหายใจธาตุโจมตีเป็นพื้นที่ระยะ 15-30 ฟุต', 'Damage Resistance: ต้านทานความเสียหายตามธาตุของสายเลือดมังกร'],
    languages: ['common', 'draconic'], extraLanguages: 0,
    subraces: [
      { id: 'red_dragonborn', name_th: 'มังกรแดง/ทอง (Red/Gold - ธาตุไฟ)', traits: ['พ่นไฟระยะ 15 ฟุต (กรวย) และต้านทานไฟครึ่งหนึ่ง'] },
      { id: 'blue_dragonborn', name_th: 'มังกรน้ำเงิน/บรอนซ์ (Blue/Bronze - สายฟ้า)', traits: ['พ่นสายฟ้าระยะ 30 ฟุต (เส้นตรง) และต้านทานสายฟ้าครึ่งหนึ่ง'] },
      { id: 'white_dragonborn', name_th: 'มังกรขาว/เงิน (White/Silver - น้ำแข็ง)', traits: ['พ่นน้ำแข็งระยะ 15 ฟุต (กรวย) และต้านทานน้ำแข็งครึ่งหนึ่ง'] }
    ]
  },
  {
    id: 'half_orc', name_en: 'Half-Orc', name_th: 'ฮาล์ฟออร์ค (Half-Orc)',
    desc: 'นักรบผู้ดุดันที่ไม่มีวันล้มลงง่ายๆ ในสมรภูมิ',
    traits: ['ความเร็วพื้นฐาน 30 ฟุต', 'Darkvision: มองเห็นในที่มืด 60 ฟุต', 'Relentless Endurance: เมื่อ HP ลดเหลือ 0 จะเด้งกลับมาที่ 1 HP ทันที (1 ครั้ง/พักยาว)', 'Savage Attacks: ทอยเต๋าดาเมจอาวุธประชิดเพิ่ม 1 ลูกเมื่อติด Critical'],
    languages: ['common', 'orc'], extraLanguages: 0
  }
];

export const BACKGROUNDS = [
  { id: 'acolyte', name_en: 'Acolyte', name_th: 'นักบวชฝึกหัด', proficiencies: ['insight', 'religion'], extraLanguages: 2, gold: 15, equipment: ['Holy symbol (สัญลักษณ์ศักดิ์สิทธิ์)', 'Prayer book (คัมภีร์สวดมนต์)'] },
  { id: 'charlatan', name_en: 'Charlatan', name_th: 'นักต้มตุ๋น', proficiencies: ['deception', 'sleight_of_hand'], extraLanguages: 0, gold: 15, equipment: ['Disguise kit (ชุดปลอมตัว)', 'Weighted dice (ลูกเต๋าถ่วงน้ำหนัก)'] },
  { id: 'criminal', name_en: 'Criminal', name_th: 'อาชญากร', proficiencies: ['deception', 'stealth'], extraLanguages: 0, gold: 15, equipment: ['Crowbar (ชะแลง)', 'Thieves’ tools (อุปกรณ์สะเดาะกุญแจ)'] },
  { id: 'entertainer', name_en: 'Entertainer', name_th: 'ศิลปินนักแสดง', proficiencies: ['acrobatics', 'performance'], extraLanguages: 0, gold: 15, equipment: ['Lute (พิณลูท)', 'Costume (ชุดการแสดง)'] },
  { id: 'folk_hero', name_en: 'Folk Hero', name_th: 'วีรบุรุษพื้นบ้าน', proficiencies: ['animal_handling', 'survival'], extraLanguages: 0, gold: 10, equipment: ['Shovel (พลั่ว)', 'Iron pot (หม้อเหล็ก)'] },
  { id: 'guild_artisan', name_en: 'Guild Artisan', name_th: 'ช่างฝีมือประจำกิลด์', proficiencies: ['insight', 'persuasion'], extraLanguages: 1, gold: 15, equipment: ['Artisan’s tools (เครื่องมือช่าง)', 'Letter of introduction (จดหมายรับรองกิลด์)'] },
  { id: 'noble', name_en: 'Noble', name_th: 'ชนชั้นสูง', proficiencies: ['history', 'persuasion'], extraLanguages: 1, gold: 25, equipment: ['Signet ring (แหวนตราตระกูล)', 'Fine clothes (ชุดหรูหรา)'] },
  { id: 'outlander', name_en: 'Outlander', name_th: 'คนเถื่อนแดนไกล', proficiencies: ['athletics', 'survival'], extraLanguages: 1, gold: 10, equipment: ['Hunting trap (กับดักล่าสัตว์)', 'Traveler’s clothes (ชุดเดินทาง)'] },
  { id: 'sage', name_en: 'Sage', name_th: 'นักปราชญ์', proficiencies: ['arcana', 'history'], extraLanguages: 2, gold: 10, equipment: ['Quill & Ink (ปากกาขนนกและหมึก)', 'Ancient scroll (ม้วนบันทึกโบราณ)'] },
  { id: 'soldier', name_en: 'Soldier', name_th: 'ทหารผ่านศึก', proficiencies: ['athletics', 'intimidation'], extraLanguages: 0, gold: 10, equipment: ['Insignia of rank (ตราประจำยศ)', 'Playing cards (สำรับไพ่)'] },
  { id: 'urchin', name_en: 'Urchin', name_th: 'เด็กกำพร้าข้างถนน', proficiencies: ['sleight_of_hand', 'stealth'], extraLanguages: 0, gold: 10, equipment: ['Small knife (มีดสั้นเก่าๆ)', 'Map of city (แผนที่ตรอกซอกซอย)', 'Pet mouse (หนูเชื่องคู่ใจ)'] }
];

export const CLASSES = [
  {
    id: 'barbarian', name_en: 'Barbarian', name_th: 'บาร์บาเรียน', hitDie: 12, subclassLevel: 3, skillChoices: 2,
    skills: ['animal_handling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
    equipment: ['Greataxe (ขวานยักษ์ 1d12)', 'Handaxe x2 (ขวานสั้น)'],
    desc: 'นักรบคลั่งผู้เปลี่ยนความโกรธเกรี้ยวเป็นพลังทำลายล้างและความอึดเหนือมนุษย์',
    subclasses: [
      { id: 'berserker', name_th: 'Berserker', desc: 'คลั่งสุดขีด โจมตีแถมด้วย Bonus Action (Frenzied Strike) และขว้างปาสิ่งของ' },
      { id: 'wildheart', name_th: 'Wildheart', desc: 'ผสานวิญญาณสัตว์ป่า (เช่น หมีลดดาเมจทุกธาตุครึ่งหนึ่ง หรืออินทรีพุ่งโจมตี)' },
      { id: 'wild_magic_barb', name_th: 'Wild Magic', desc: 'ระเบิดคลื่นเวทมนตร์สุ่มทุกครั้งที่กดใช้สถานะคลั่ง (Rage)' }
    ],
    progression: { 1: ['Rage (คลั่ง)', 'Unarmoured Defence (10+DEX+CON)'], 2: ['Reckless Attack', 'Danger Sense'], 3: ['ปลดล็อกสายอาชีพย่อย'], 5: ['Extra Attack (โจมตี 2 ครั้ง)', 'Fast Movement (+10 ฟุต)'], 7: ['Feral Instinct (+3 Initiative)'], 11: ['Relentless Rage'], 20: ['Primal Champion (STR & CON +4 สูงสุด 24)'] }
  },
  {
    id: 'bard', name_en: 'Bard', name_th: 'บาร์ด', hitDie: 8, subclassLevel: 3, skillChoices: 3,
    skills: ['acrobatics', 'animal_handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight_of_hand', 'stealth', 'survival'],
    expertiseLevel: 3,
    equipment: ['Rapier (ดาบเรเปียร์ 1d8)', 'Leather Armour (เกราะหนัง AC 11)', 'Lute (พิณลูท)'],
    desc: 'กวีผู้ใช้เสียงดนตรีและถ้อยคำร่ายเวทมนตร์สนับสนุนเพื่อนและปั่นป่วนศัตรู',
    spellcasting: { cantrips: 2, spells: 4, cantripList: ["Blade Ward", "Dancing Lights", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Prestidigitation", "True Strike", "Vicious Mockery"], spellList: ["Animal Friendship", "Bane", "Charm Person", "Comprehend Languages", "Cure Wounds", "Detect Magic", "Disguise Self", "Dissonant Whispers", "Faerie Fire", "Feather Fall", "Healing Word", "Heroism", "Identify", "Longstrider", "Silent Image", "Sleep", "Speak with Animals", "Tasha's Hideous Laughter", "Thunderwave", "Blindness/Deafness", "Calm Emotions", "Cloud of Daggers", "Crown of Madness", "Detect Thoughts", "Enhance Ability", "Hold Person", "Invisibility", "Knock", "Lesser Restoration", "Shatter", "Silence", "Suggestion", "Zone of Truth", "Bestow Curse", "Clairvoyance", "Dispel Magic", "Fear", "Hypnotic Pattern", "Leomund's Tiny Hut", "Major Image", "Sending", "Confusion", "Dimension Door", "Freedom of Movement", "Greater Invisibility", "Polymorph", "Animate Objects", "Dominate Person", "Greater Restoration", "Hold Monster", "Mass Cure Wounds", "Raise Dead", "Scrying", "Eyebite", "Mass Suggestion", "True Seeing", "Forcecage", "Magnificent Mansion", "Regenerate", "Resurrection", "Teleport", "Dominate Monster", "Feeblemind", "Mind Blank", "Power Word Stun", "Foresight", "Power Word Heal", "Power Word Kill", "True Polymorph"] },
    subclasses: [
      { id: 'lore', name_th: 'College of Lore', desc: 'ปราชญ์ผู้รู้รอบด้าน ได้รับทักษะเพิ่มและตัดแต้มลูกเต๋าศัตรูด้วย Cutting Words' },
      { id: 'valour', name_th: 'College of Valour', desc: 'กวีศึกผู้ชำนาญเกราะกลาง โล่ อาวุธสงคราม และโจมตีได้ 2 ครั้งที่ Lv.6' },
      { id: 'swords', name_th: 'College of Swords', desc: 'จอมยุทธ์ร่ายรำเพลงดาบ ใช้กระบวนท่า Blade Flourish เพิ่มเกราะหรือโจมตีหมู่' }
    ],
    progression: { 1: ['Bardic Inspiration (1d6)', 'Spellcasting'], 2: ['Jack of All Trades (+ครึ่ง Prof ให้ทักษะที่ไม่ชำนาญ)', 'Song of Rest (+1d6 HP เมื่อพักสั้น)'], 3: ['ปลดล็อกสายอาชีพย่อย', 'Expertise'], 5: ['Font of Inspiration (รีเซ็ตเต๋าเมื่อพักสั้น)'], 6: ['Countercharm / Extra Attack (Valour/Swords)'] }
  },
  {
    id: 'cleric', name_en: 'Cleric', name_th: 'เคลริค', hitDie: 8, subclassLevel: 1, skillChoices: 2,
    skills: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
    equipment: ['Mace (กระบอง 1d6)', 'Scale Mail (เกราะเกล็ด AC 14)', 'Shield (โล่ +2 AC)'],
    channelDivinityLevel: 2,
    channelDivinities: [
      { id: 'turn_undead', name: 'Turn Undead (ขับไล่ผีดิบ)', desc: 'ชูสัญลักษณ์ศักดิ์สิทธิ์ ผีดิบในระยะ 30 ฟุตต้องทอย WIS Save ไม่ผ่านจะหวาดกลัวและวิ่งหนีเป็นเวลา 1 นาที' }
    ],
    desc: 'ตัวแทนแห่งทวยเทพ ผู้เชี่ยวชาญเวทฟื้นฟูและแสงศักดิ์สิทธิ์ปราบอสูร',
    spellcasting: { cantrips: 3, spells: 4, cantripList: ["Guidance", "Light", "Mending", "Resistance", "Sacred Flame", "Spare the Dying", "Thaumaturgy"], spellList: ["Bane", "Bless", "Command", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Guiding Bolt", "Healing Word", "Inflict Wounds", "Protection from Evil and Good", "Sanctuary", "Shield of Faith", "Aid", "Blindness/Deafness", "Calm Emotions", "Enhance Ability", "Hold Person", "Lesser Restoration", "Prayer of Healing", "Silence", "Spiritual Weapon", "Zone of Truth", "Animate Dead", "Bestow Curse", "Clairvoyance", "Dispel Magic", "Mass Healing Word", "Remove Curse", "Revivify", "Sending", "Spirit Guardians", "Banishment", "Death Ward", "Freedom of Movement", "Contagion", "Flame Strike", "Greater Restoration", "Mass Cure Wounds", "Raise Dead", "Scrying", "Harm", "Heal", "Heroes' Feast", "True Seeing", "Fire Storm", "Plane Shift", "Regenerate", "Resurrection", "Antimagic Field", "Earthquake", "Holy Aura", "Sunburst", "Astral Projection", "Gate", "Mass Heal", "True Resurrection"] },
    subclasses: [
      { id: 'life', name_th: 'Life Domain', desc: 'ชำนาญเกราะหนัก และเพิ่มพลังการฮีลของคาถาฟื้นฟูทั้งหมดอย่างมหาศาล' },
      { id: 'light', name_th: 'Light Domain', desc: 'ใช้แสงแผดเผาศัตรูด้วย Warding Flare และปลดล็อกคาถา Fireball' },
      { id: 'tempest', name_th: 'Tempest Domain', desc: 'ชำนาญเกราะหนักและอาวุธสงคราม เรียกสายฟ้าฟาดด้วยความเสียหายเต็มแม็กซ์' },
      { id: 'war', name_th: 'War Domain', desc: 'นักบวชสงคราม โจมตีแถมด้วย Bonus Action และบวกความแม่นยำ +10' }
    ],
    progression: { 1: ['Spellcasting', 'Divine Domain (สายอาชีพย่อย)'], 2: ['Channel Divinity (1/พักสั้น)', 'Turn Undead'], 5: ['Destroy Undead'], 10: ['Divine Intervention'] }
  },
  {
    id: 'druid', name_en: 'Druid', name_th: 'ดรูอิด', hitDie: 8, subclassLevel: 2, skillChoices: 2,
    skills: ['arcana', 'animal_handling', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'],
    secretLanguage: 'Druidic (ภาษาดรูอิด)',
    wildShapeLevel: 2,
    wildShapes: [
      { id: 'badger', name: 'Giant Badger (แบดเจอร์ยักษ์)', desc: 'HP 13 | AC 10 | กัด 1d6+1, กรงเล็บ 2d4+1 | มีสปีดขุดดิน' },
      { id: 'spider', name: 'Wolf Spider (แมงมุมหมาป่า)', desc: 'HP 11 | AC 13 | กัด 1d6+1 + พิษ 2d6 | ปีนกำแพงได้กระจุย' },
      { id: 'wolf', name: 'Dire Wolf (หมาป่าโลกันตร์)', desc: 'HP 37 | AC 14 | กัด 2d6+3 (โอกาสทำให้ศัตรูล้ม) | ได้เปรียบเมื่อโจมตีรุม' },
      { id: 'bear', name: 'Brown Bear (หมีสีน้ำตาล - แนะนำสำหรับ Moon Druid)', desc: 'HP 34 | AC 11 | กัด 1d8+4, กรงเล็บ 2d6+4 | โจมตีได้ 2 ครั้งต่อเทิร์น' }
    ],
    equipment: ['Quarterstaff (พลองไม้ 1d6)', 'Leather Armour (เกราะหนัง AC 11)', 'Shield (โล่ไม้ +2 AC)'],
    desc: 'ผู้พิทักษ์ผืนป่า สามารถแปลงกายเป็นสัตว์ร้าย (Wild Shape) และควบคุมธาตุธรรมชาติ',
    spellcasting: { cantrips: 2, spells: 4, cantripList: ["Druidcraft", "Guidance", "Mending", "Poison Spray", "Produce Flame", "Resistance", "Shillelagh", "Thorn Whip"], spellList: ["Animal Friendship", "Charm Person", "Create or Destroy Water", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Entangle", "Faerie Fire", "Fog Cloud", "Goodberry", "Healing Word", "Jump", "Longstrider", "Speak with Animals", "Thunderwave", "Barkskin", "Darkvision", "Enhance Ability", "Flaming Sphere", "Hold Person", "Lesser Restoration", "Moonbeam", "Pass without Trace", "Call Lightning", "Conjure Animals", "Dispel Magic", "Blight", "Confusion", "Freedom of Movement", "Ice Storm", "Polymorph", "Wall of Fire", "Contagion", "Greater Restoration", "Mass Cure Wounds", "Scrying", "Heal", "Heroes' Feast", "Sunbeam", "Fire Storm", "Plane Shift", "Regenerate", "Reverse Gravity", "Earthquake", "Feeblemind", "Sunburst", "Foresight", "Shapechange", "True Resurrection"] },
    subclasses: [
      { id: 'land', name_th: 'Circle of the Land', desc: 'จอมเวทธรรมชาติ ฟื้นฟูช่องเวทได้เมื่อพักสั้น และได้รับคาถาประจำถิ่น' },
      { id: 'moon', name_th: 'Circle of the Moon', desc: 'แปลงร่างเป็นสัตว์อสูรทรงพลัง (เช่น หมี หรือ Owlbear) ด้วย Bonus Action' },
      { id: 'spores', name_th: 'Circle of the Spores', desc: 'ควบคุมสปอร์เห็ดพิษ เพิ่ม Temp HP และปลุกซากศพขึ้นมาช่วยสู้' }
    ],
    progression: { 1: ['Druidic', 'Spellcasting'], 2: ['Wild Shape (แปลงร่างสัตว์)', 'ปลดล็อกสายอาชีพย่อย'], 4: ['Wild Shape Improvement'], 18: ['Beast Spells'] }
  },
  {
    id: 'fighter', name_en: 'Fighter', name_th: 'ไฟต์เตอร์', hitDie: 10, subclassLevel: 3, skillChoices: 2, fightingStyleLevel: 1,
    skills: ['acrobatics', 'animal_handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
    fightingStyles: [
      { id: 'archery', name: 'Archery (นักธนู)', desc: 'บวกความแม่นยำ (Attack Roll) +2 เมื่อใช้อาวุธระยะไกล' },
      { id: 'defense', name: 'Defense (ป้องกัน)', desc: 'บวกเกราะ (AC) +1 ขณะที่สวมใส่ชุดเกราะ' },
      { id: 'dueling', name: 'Dueling (นักดาบเดี่ยว)', desc: 'บวกความเสียหาย (Damage) +2 เมื่อถืออาวุธประชิดมือเดียว และมืออีกข้างไม่ถืออาวุธ' },
      { id: 'gwf', name: 'Great Weapon Fighting (อาวุธหนัก)', desc: 'เมื่อทอยดาเมจด้วยอาวุธสองมือได้ 1 หรือ 2 สามารถทอยใหม่ได้ 1 ครั้ง' },
      { id: 'protection', name: 'Protection (ผู้พิทักษ์)', desc: 'เมื่อถือโล่ สามารถใช้ Reaction บังคับให้ศัตรูที่โจมตีเพื่อนติด Disadvantage ได้' },
      { id: 'twf', name: 'Two-Weapon Fighting (อาวุธคู่)', desc: 'เมื่อโจมตีด้วยอาวุธรอง (Bonus Action) สามารถนำโบนัสค่าสถานะไปบวกเพิ่มดาเมจได้' }
    ],
    equipment: ['Chain Mail (เกราะโซ่ถัก AC 16)', 'Greatsword (ดาบใหญ่ 2d6)', 'Heavy Crossbow (หน้าไม้หนัก 1d10)'],
    desc: 'ปรมาจารย์แห่งศาสตราวุธทุกแขนง โจมตีได้รวดเร็วและต่อเนื่องที่สุดในเกม',
    subclasses: [
      { id: 'battle_master', name_th: 'Battle Master', desc: 'ใช้ลูกเต๋ายุทธ์ (Superiority Dice) ออกกระบวนท่าปลดอาวุธ สวนกลับ หรือขัดขา' },
      { id: 'eldritch_knight', name_th: 'Eldritch Knight', desc: 'นักรบมนตรา ผสานการฟันดาบเข้ากับคาถาป้องกันและโจมตีสาย Wizard' },
      { id: 'champion', name_th: 'Champion', desc: 'เน้นพลังกายภาพล้วน ลดแต้มติด Critical Hit ลงเหลือ 19-20' }
    ],
    progression: { 1: ['Fighting Style', 'Second Wind (ฮีลตัวเอง 1d10+Lv)'], 2: ['Action Surge (เพิ่ม 1 Action เต็ม/พักสั้น)'], 3: ['ปลดล็อกสายอาชีพย่อย'], 5: ['Extra Attack (โจมตี 2 ครั้ง)'], 6: ['Bonus Feat'], 9: ['Indomitable'], 11: ['Improved Extra Attack (โจมตี 3 ครั้ง!)'], 14: ['Bonus Feat'] }
  },
  {
    id: 'monk', name_en: 'Monk', name_th: 'มังก์', hitDie: 8, subclassLevel: 3, skillChoices: 2,
    skills: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'],
    equipment: ['Quarterstaff (พลอง 1d6)', 'Dart x10 (ลูกดอกซัด)'],
    desc: 'จอมยุทธ์ผู้ฝึกฝนปราณ (Ki) ต่อสู้มือเปล่าด้วยความเร็วสูงและสกัดจุดศัตรู',
    subclasses: [
      { id: 'open_hand', name_th: 'Way of the Open Hand', desc: 'สุดยอดวิชาฝ่ามือ กระแทกศัตรูล้ม ผลักกระเด็น และระเบิดปราณ' },
      { id: 'shadow', name_th: 'Way of Shadow', desc: 'นินจาเงาสังหาร วาร์ปผ่านเงามืดและร่ายคาถาอำพรางตัว' },
      { id: 'four_elements', name_th: 'Way of the Four Elements', desc: 'ใช้แต้ม Ki ร่ายกระบวนท่าธาตุทั้งสี่ เช่น หมัดเพลิงและคลื่นพายุ' }
    ],
    progression: { 1: ['Unarmoured Defence (10+DEX+WIS)', 'Martial Arts'], 2: ['Ki Points', 'Unarmoured Movement (+10 ฟุต)'], 3: ['ปลดล็อกสายอาชีพย่อย', 'Deflect Missiles'], 5: ['Extra Attack', 'Stunning Strike (สกัดจุดสตัน)'], 7: ['Evasion'], 13: ['Tongue of the Sun and Moon'] }
  },
  {
    id: 'paladin', name_en: 'Paladin', name_th: 'พาลาดิน', hitDie: 10, subclassLevel: 1, skillChoices: 2,
    skills: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'],
    fightingStyleLevel: 2,
    fightingStyles: [
      { id: 'defense', name: 'Defense (ป้องกัน)', desc: 'บวกเกราะ (AC) +1 ขณะที่สวมใส่ชุดเกราะ' },
      { id: 'dueling', name: 'Dueling (นักดาบเดี่ยว)', desc: 'บวกความเสียหาย (Damage) +2 เมื่อถืออาวุธประชิดมือเดียว และมืออีกข้างไม่ถืออาวุธ' },
      { id: 'gwf', name: 'Great Weapon Fighting (อาวุธหนัก)', desc: 'เมื่อทอยดาเมจด้วยอาวุธสองมือได้ 1 หรือ 2 สามารถทอยใหม่ได้ 1 ครั้ง' },
      { id: 'protection', name: 'Protection (ผู้พิทักษ์)', desc: 'เมื่อถือโล่ สามารถใช้ Reaction บังคับให้ศัตรูที่โจมตีเพื่อนติด Disadvantage ได้' }
    ],
    equipment: ['Chain Mail (เกราะโซ่ถัก AC 16)', 'Longsword (ดาบยาว 1d8)', 'Shield (โล่ +2 AC)'],
    desc: 'อัศวินศักดิ์สิทธิ์ผู้ยึดมั่นในคำสัตย์ ฟาดฟันศัตรูด้วยพลัง Divine Smite อันรุนแรง',
    spellcasting: { cantrips: 0, spells: 3, cantripList: [], spellList: ["Bless", "Command", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Divine Favor", "Heroism", "Protection from Evil and Good", "Shield of Faith", "Aid", "Lesser Restoration", "Zone of Truth", "Dispel Magic", "Remove Curse", "Revivify", "Banishment", "Death Ward", "Raise Dead"] },
    subclasses: [
      { id: 'devotion', name_th: 'Oath of Devotion', desc: 'อัศวินแห่งแสง เสริมอาวุธให้แม่นยำตามค่า CHA และปกป้องเพื่อนร่วมทีม' },
      { id: 'ancients', name_th: 'Oath of the Ancients', desc: 'อัศวินพฤกษา มีออร่าลดความเสียหายเวทมนตร์ครึ่งหนึ่งและฮีลหมู่รอบตัว' },
      { id: 'vengeance', name_th: 'Oath of Vengeance', desc: 'อัศวินล้างแค้น ล็อกเป้าหมายเพื่อตีแบบ Advantage และไล่ล่าอย่างดุดัน' }
    ],
    progression: { 1: ['Divine Sense', 'Lay on Hands (ฮีล 5xLv)', 'Sacred Oath'], 2: ['Divine Smite (ระเบิดแสง +2d8)', 'Fighting Style', 'Spellcasting'], 5: ['Extra Attack (โจมตี 2 ครั้ง)'], 6: ['Aura of Protection (+CHA ให้ Saving Throw ทั้งทีม)'], 11: ['Improved Divine Smite (+1d8 Radiant ทุกการโจมตี)'] }
  },
  {
    id: 'ranger', name_en: 'Ranger', name_th: 'เรนเจอร์', hitDie: 10, subclassLevel: 3, skillChoices: 3,
    skills: ['animal_handling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
    fightingStyleLevel: 2,
    fightingStyles: [
      { id: 'archery', name: 'Archery (นักธนู)', desc: 'บวกความแม่นยำ (Attack Roll) +2 เมื่อใช้อาวุธระยะไกล' },
      { id: 'defense', name: 'Defense (ป้องกัน)', desc: 'บวกเกราะ (AC) +1 ขณะที่สวมใส่ชุดเกราะ' },
      { id: 'dueling', name: 'Dueling (นักดาบเดี่ยว)', desc: 'บวกความเสียหาย (Damage) +2 เมื่อถืออาวุธประชิดมือเดียว และมืออีกข้างไม่ถืออาวุธ' },
      { id: 'twf', name: 'Two-Weapon Fighting (อาวุธคู่)', desc: 'เมื่อโจมตีด้วยอาวุธรอง (Bonus Action) สามารถนำโบนัสค่าสถานะไปบวกเพิ่มดาเมจได้' }
    ],
    favoredEnemies: [
       { id: 'beasts', name: 'Beasts (สัตว์ป่า)', desc: 'ได้เปรียบในการแกะรอยและระลึกข้อมูลเกี่ยวกับสัตว์ป่า' },
       { id: 'fey', name: 'Fey (ภูตพงไพร)', desc: 'ได้เปรียบในการแกะรอยและระลึกข้อมูลเกี่ยวกับภูตพงไพร' },
       { id: 'humanoids', name: 'Humanoids (อมนุษย์/มนุษย์)', desc: 'ได้เปรียบในการแกะรอยและระลึกข้อมูลเกี่ยวกับเผ่าพันธุ์มนุษย์/อมนุษย์' },
       { id: 'monstrosities', name: 'Monstrosities (อสูรกาย)', desc: 'ได้เปรียบในการแกะรอยและระลึกข้อมูลเกี่ยวกับอสูรกายกลายพันธุ์' },
       { id: 'undead', name: 'Undead (ผีดิบ/อันเดด)', desc: 'ได้เปรียบในการแกะรอยและระลึกข้อมูลเกี่ยวกับผีดิบวิญญาณร้าย' }
    ],
    naturalExplorers: [
       { id: 'forest', name: 'Forest (ป่าไม้)', desc: 'ชำนาญการเดินทางในป่า ไม่หลงทาง หาอาหารได้สองเท่า และเดินผ่านพื้นที่วิบากป่าได้ปกติ' },
       { id: 'mountain', name: 'Mountain (ภูเขา)', desc: 'ชำนาญการเดินทางในภูเขา ไม่หลงทาง หาอาหารได้สองเท่า และเดินผ่านพื้นที่วิบากภูเขาได้ปกติ' },
       { id: 'swamp', name: 'Swamp (หนองน้ำ)', desc: 'ชำนาญการเดินทางในหนองน้ำ ไม่หลงทาง หาอาหารได้สองเท่า และเดินผ่านพื้นที่วิบากหนองน้ำได้ปกติ' },
       { id: 'underdark', name: 'Underdark (โลกใต้ดิน)', desc: 'ชำนาญการเดินทางในโลกใต้ดิน ไม่หลงทาง หาอาหารได้สองเท่า และเดินผ่านพื้นที่วิบากใต้ดินได้ปกติ' }
    ],
    equipment: ['Scale Mail (เกราะเกล็ด AC 14)', 'Longbow (ธนูยาว 1d8)', 'Shortsword x2 (ดาบสั้นคู่)'],
    desc: 'นายพรานและนักล่าผู้เชี่ยวชาญการแกะรอย การซุ่มยิง และเวทมนตร์พงไพร',
    spellcasting: { cantrips: 0, spells: 3, cantripList: [], spellList: ["Alarm", "Animal Friendship", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Fog Cloud", "Goodberry", "Hail of Thorns", "Hunter's Mark", "Jump", "Longstrider", "Speak with Animals", "Barkskin", "Darkvision", "Lesser Restoration", "Pass without Trace", "Silence", "Conjure Animals", "Freedom of Movement"] },
    subclasses: [
      { id: 'hunter', name_th: 'Hunter', desc: 'นักล่าอาชีพ เลือกท่าสังหารยักษ์ (Colossus Slayer +1d8) หรือยิงกวาดหมู่' },
      { id: 'beast_master', name_th: 'Beast Master', desc: 'อัญเชิญสัตว์คู่ใจ (หมี หมาป่า แมงมุม หรืออีกา) มาร่วมต่อสู้เคียงบ่าเคียงไหล่' },
      { id: 'gloom_stalker', name_th: 'Gloom Stalker', desc: 'นักล่าในเงามืด บวก Initiative +3 และโจมตีฟรีเพิ่ม 1 ครั้งในเทิร์นแรก' }
    ],
    progression: { 1: ['Favoured Enemy', 'Natural Explorer'], 2: ['Fighting Style', 'Spellcasting'], 3: ['ปลดล็อกสายอาชีพย่อย'], 5: ['Extra Attack (โจมตี 2 ครั้ง)'], 8: ['Land’s Stride'], 10: ['Hide in Plain Sight'] }
  },
  {
    id: 'rogue', name_en: 'Rogue', name_th: 'โร้ก', hitDie: 8, subclassLevel: 3, skillChoices: 4, expertiseLevel: 1,
    skills: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleight_of_hand', 'stealth'],
    secretLanguage: "Thieves' Cant (ภาษาลับจอมโจร)",
    equipment: ['Leather Armour (เกราะหนัง AC 11)', 'Dagger x2 (มีดสั้น 1d4)', 'Shortbow (ธนูสั้น 1d6)', 'Thieves’ tools'],
    desc: 'จอมโจรและมือสังหารผู้เชี่ยวชาญการลอบเร้น ปลดกับดัก และแทงจุดตาย (Sneak Attack)',
    subclasses: [
      { id: 'thief', name_th: 'Thief', desc: 'จอมโจรความเร็วสูง ได้รับ Bonus Action เพิ่มเป็น 2 ครั้งต่อเทิร์น (Fast Hands)!' },
      { id: 'assassin', name_th: 'Assassin', desc: 'มือสังหารไร้เงา โจมตีศัตรูที่ยังไม่เข้าเทิร์นแบบ Advantage และติด Critical อัตโนมัติเมื่อซุ่มโจมตี' },
      { id: 'arcane_trickster', name_th: 'Arcane Trickster', desc: 'จอมโจรผู้ใช้เวทลวงตาและควบคุม Mage Hand ล่องหนขโมยของจากระยะไกล' }
    ],
    progression: { 1: ['Expertise', 'Sneak Attack', "Thieves' Cant"], 2: ['Cunning Action (วิ่ง/หลบ/ซ่อน ด้วย Bonus Action)'], 3: ['ปลดล็อกสายอาชีพย่อย'], 5: ['Uncanny Dodge (ลดดาเมจครึ่งหนึ่งด้วย Reaction)'], 7: ['Evasion'], 10: ['Bonus Feat'], 11: ['Reliable Talent'] }
  },
  {
    id: 'sorcerer', name_en: 'Sorcerer', name_th: 'ซอร์เซอเรอร์', hitDie: 6, subclassLevel: 1, skillChoices: 2,
    skills: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
    metamagic: [
      { id: 'careful', name: 'Careful Spell', desc: 'ใช้ 1 SP: เลือกเพื่อนร่วมทีมให้รอดพ้นจากดาเมจเวทหมู่ของคุณ (เช่น Fireball) ได้อัตโนมัติ' },
      { id: 'distant', name: 'Distant Spell', desc: 'ใช้ 1 SP: เพิ่มระยะร่ายเวท 2 เท่า หรือเปลี่ยนเวทระยะสัมผัสให้ร่ายได้ไกล 30 ฟุต' },
      { id: 'empowered', name: 'Empowered Spell', desc: 'ใช้ 1 SP: ทอยลูกเต๋าดาเมจใหม่ได้สูงสุดเท่ากับโบนัส CHA (เลือกใช้หลังทอยดาเมจไปแล้วได้)' },
      { id: 'extended', name: 'Extended Spell', desc: 'ใช้ 1 SP: เพิ่มระยะเวลาแสดงผลของเวทมนตร์เป็น 2 เท่า (สูงสุดไม่เกิน 24 ชม.)' },
      { id: 'quickened', name: 'Quickened Spell', desc: 'ใช้ 2 SP: เปลี่ยนเวทที่ต้องใช้ 1 Action ให้กลายเป็นใช้ 1 Bonus Action ร่ายแทนได้' },
      { id: 'twinned', name: 'Twinned Spell', desc: 'ใช้ SP เท่ากับระดับเวท: ทำให้เวทที่เล็งเป้าหมายเดียว ชิ่งไปโดนเป้าหมายที่ 2 ได้ (เช่น Haste 2 คนพร้อมกัน)' }
    ],
    equipment: ['Quarterstaff (ไม้เท้าเวท 1d6)', 'Dagger x2 (มีดสั้น)'],
    desc: 'ผู้มีสายเลือดเวทมนตร์มาแต่กำเนิด สามารถดัดแปลงคาถาด้วย Metamagic ให้ร่ายได้ 2 เป้าหมายหรือร่ายด้วย Bonus Action',
    spellcasting: { cantrips: 4, spells: 4, cantripList: ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"], spellList: ["Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Fog Cloud", "Jump", "Mage Armor", "Magic Missile", "Shield", "Silent Image", "Sleep", "Thunderwave", "Witch Bolt", "Alter Self", "Blindness/Deafness", "Blur", "Cloud of Daggers", "Crown of Madness", "Darkness", "Darkvision", "Detect Thoughts", "Enhance Ability", "Enlarge/Reduce", "Hold Person", "Invisibility", "Knock", "Levitate", "Mirror Image", "Misty Step", "Scorching Ray", "Shatter", "Suggestion", "Web", "Blink", "Clairvoyance", "Counterspell", "Dispel Magic", "Fear", "Fireball", "Fly", "Haste", "Hypnotic Pattern", "Lightning Bolt", "Major Image", "Slow", "Banishment", "Blight", "Confusion", "Dimension Door", "Greater Invisibility", "Ice Storm", "Polymorph", "Wall of Fire", "Animate Objects", "Cone of Cold", "Dominate Person", "Hold Monster", "Telekinesis", "Chain Lightning", "Disintegrate", "Eyebite", "Globe of Invulnerability", "Mass Suggestion", "Sunbeam", "True Seeing", "Finger of Death", "Fire Storm", "Plane Shift", "Reverse Gravity", "Teleport", "Dominate Monster", "Earthquake", "Power Word Stun", "Sunburst", "Gate", "Meteor Swarm", "Power Word Kill", "Time Stop", "Wish"] },
    subclasses: [
      { id: 'draconic', name_th: 'Draconic Bloodline', desc: 'สายเลือดมังกร ได้รับเกราะเกล็ดมังกร (Base AC 13+DEX) และเลือด +1 HP ทุกเลเวล' },
      { id: 'wild_magic', name_th: 'Wild Magic', desc: 'พลังเวทแปรปรวน บังคับทอยได้เปรียบด้วย Tides of Chaos และสุ่มเอฟเฟกต์เวทปั่นป่วน' },
      { id: 'storm', name_th: 'Storm Sorcery', desc: 'จ้าวแห่งพายุ บินได้ระยะสั้นๆ 30 ฟุตด้วย Bonus Action ทันทีหลังร่ายคาถาโดยไม่โดนตีสวน' }
    ],
    progression: { 1: ['Spellcasting', 'Sorcerous Origin (สายอาชีพย่อย)'], 2: ['Font of Magic (Sorcery Points)'], 3: ['Metamagic (Twinned / Quickened Spell)'], 6: ['Subclass Feature'], 14: ['Wings / Flight'] }
  },
  {
    id: 'warlock', name_en: 'Warlock', name_th: 'วอร์ล็อค', hitDie: 8, subclassLevel: 1, skillChoices: 2,
    skills: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'],
    pactBoons: [
      { id: 'blade', name: 'Pact of the Blade (พันธสัญญาแห่งดาบ)', desc: 'ใช้ Action เสกอาวุธประชิดเวทมนตร์คู่กาย นำค่า CHA มาทอยโจมตีได้ และนับเป็นอาวุธเวทมนตร์' },
      { id: 'chain', name: 'Pact of the Chain (พันธสัญญาแห่งโซ่)', desc: 'ได้รับคาถา Find Familiar อัญเชิญสัตว์รับใช้พิเศษ (เช่น Imp, Quasit) ที่สามารถโจมตีแทนคุณได้' },
      { id: 'tome', name: 'Pact of the Tome (พันธสัญญาแห่งคัมภีร์)', desc: 'ได้รับคัมภีร์เวท เลือกเรียน Cantrips เพิ่ม 3 บทจากอาชีพใดก็ได้ และร่ายแบบอรรถประโยชน์ได้ยอดเยี่ยม' }
    ],
    invocations: [
      { id: 'agonizing', name: 'Agonizing Blast', desc: 'บวกโบนัส CHA Modifier เข้ากับดาเมจของลำแสง Eldritch Blast ทุกเส้น' },
      { id: 'repelling', name: 'Repelling Blast', desc: 'เมื่อยิง Eldritch Blast โดน สามารถผลักศัตรูกระเด็นถอยหลังไป 10 ฟุตได้เสมอ' },
      { id: 'armor_shadows', name: 'Armor of Shadows', desc: 'สามารถร่ายเวท Mage Armor ใส่ตัวเองได้ไม่จำกัดครั้งโดยไม่ต้องใช้ช่องเวท' },
      { id: 'devils_sight', name: 'Devil’s Sight', desc: 'มองเห็นในความมืดปกติและ "ความมืดเวทมนตร์ (Magical Darkness)" ได้ไกล 120 ฟุต' },
      { id: 'fiendish_vigor', name: 'Fiendish Vigor', desc: 'สามารถร่าย False Life ระดับ 1 ใส่ตัวเองเพื่อเพิ่ม Temp HP ได้ไม่จำกัดครั้ง' },
      { id: 'mask_faces', name: 'Mask of Many Faces', desc: 'สามารถร่าย Disguise Self ปลอมตัวได้ตลอดเวลาโดยไม่ต้องใช้ช่องเวท' }
    ],
    equipment: ['Leather Armour (เกราะหนัง AC 11)', 'Simple Weapon (อาวุธพื้นฐาน)', 'Dagger x2 (มีดสั้น)'],
    desc: 'ผู้ทำพันธสัญญากับตัวตนทรงอำนาจ ยิงลำแสง Eldritch Blast และฟื้นฟูช่องเวทระดับสูงสุดทุกครั้งที่พักสั้น',
    spellcasting: { cantrips: 2, spells: 3, cantripList: ["Blade Ward", "Chill Touch", "Eldritch Blast", "Friends", "Mage Hand", "Minor Illusion", "Poison Spray", "Prestidigitation", "True Strike"], spellList: ["Armor of Agathys", "Arms of Hadar", "Charm Person", "Comprehend Languages", "Expeditious Retreat", "Hellish Rebuke", "Hex", "Protection from Evil and Good", "Witch Bolt", "Cloud of Daggers", "Crown of Madness", "Darkness", "Hold Person", "Invisibility", "Mirror Image", "Misty Step", "Shatter", "Suggestion", "Counterspell", "Dispel Magic", "Fear", "Fly", "Hypnotic Pattern", "Major Image", "Remove Curse", "Vampiric Touch", "Banishment", "Blight", "Dimension Door", "Hold Monster", "Scrying", "Eyebite", "Mass Suggestion", "True Seeing", "Finger of Death", "Forcecage", "Plane Shift", "Dominate Monster", "Feeblemind", "Power Word Stun", "Astral Projection", "Foresight", "Power Word Kill", "True Polymorph"] },
    subclasses: [
      { id: 'fiend', name_th: 'The Fiend', desc: 'พันธสัญญาจ้าวปีศาจ ได้รับ Temp HP ทุกครั้งที่สังหารศัตรู และปลดล็อกคาถา Fireball' },
      { id: 'great_old_one', name_th: 'The Great Old One', desc: 'พันธสัญญาเทพโบราณ เมื่อตีติด Critical จะทำให้ศัตรูรอบข้างติดสถานะหวาดกลัว (Frightened)' },
      { id: 'archfey', name_th: 'The Archfey', desc: 'พันธสัญญาจ้าวภูต ใช้มนตร์เสน่ห์และวาร์ปหายตัวด้วยหมอกลวงตา' }
    ],
    progression: { 1: ['Otherworldly Patron', 'Pact Magic (รีเซ็ตช่องเวทเมื่อพักสั้น)'], 2: ['Eldritch Invocations (Agonizing Blast +CHA ดาเมจ)'], 3: ['Pact Boon (Pact of the Blade / Chain / Tome)'], 11: ['Mystic Arcanum (Lv.6)'], 13: ['Mystic Arcanum (Lv.7)'], 15: ['Mystic Arcanum (Lv.8)'], 17: ['Mystic Arcanum (Lv.9)'] }
  },
  {
    id: 'wizard', name_en: 'Wizard', name_th: 'วิซาร์ด', hitDie: 6, subclassLevel: 2, skillChoices: 2,
    skills: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
    equipment: ['Quarterstaff (ไม้เท้าเวท 1d6)', 'Spellbook (ตำราเวทมนตร์ประจำตัว)'],
    desc: 'จอมเวทผู้ศึกษาศาสตร์มนตราอย่างลึกซึ้ง สามารถคัดลอกคาถาจากม้วนคัมภีร์ลงตำราได้ไม่จำกัด',
    spellcasting: { cantrips: 3, spells: 6, cantripList: ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"], spellList: ["Alarm", "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Grease", "Identify", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Shield", "Silent Image", "Sleep", "Tasha's Hideous Laughter", "Thunderwave", "Witch Bolt", "Alter Self", "Blindness/Deafness", "Blur", "Cloud of Daggers", "Crown of Madness", "Darkness", "Darkvision", "Detect Thoughts", "Enlarge/Reduce", "Flaming Sphere", "Hold Person", "Invisibility", "Knock", "Levitate", "Mirror Image", "Misty Step", "Scorching Ray", "Shatter", "Suggestion", "Web", "Animate Dead", "Bestow Curse", "Blink", "Clairvoyance", "Counterspell", "Dispel Magic", "Fear", "Fireball", "Fly", "Haste", "Hypnotic Pattern", "Leomund's Tiny Hut", "Lightning Bolt", "Major Image", "Remove Curse", "Sending", "Slow", "Vampiric Touch", "Arcane Eye", "Banishment", "Blight", "Confusion", "Dimension Door", "Evard's Black Tentacles", "Greater Invisibility", "Ice Storm", "Polymorph", "Wall of Fire", "Animate Objects", "Cone of Cold", "Dominate Person", "Hold Monster", "Scrying", "Telekinesis", "Wall of Force", "Chain Lightning", "Disintegrate", "Eyebite", "Globe of Invulnerability", "Mass Suggestion", "Sunbeam", "True Seeing", "Finger of Death", "Forcecage", "Magnificent Mansion", "Plane Shift", "Reverse Gravity", "Teleport", "Antimagic Field", "Clone", "Dominate Monster", "Feeblemind", "Maze", "Mind Blank", "Power Word Stun", "Sunburst", "Astral Projection", "Foresight", "Gate", "Meteor Swarm", "Power Word Kill", "Prismatic Wall", "Shapechange", "Time Stop", "True Polymorph", "Weird", "Wish"] },
    subclasses: [
      { id: 'evocation', name_th: 'School of Evocation', desc: 'ปรมาจารย์เวททำลายล้าง ร่ายคาถาโจมตีพื้นที่ (เช่น Fireball) โดยไม่โดนเพื่อนร่วมทีมเลย!' },
      { id: 'abjuration', name_th: 'School of Abjuration', desc: 'จอมเวทปราการ สร้างเกราะ Arcane Ward ดูดซับความเสียหายให้ตัวเองและเพื่อน' },
      { id: 'divination', name_th: 'School of Divination', desc: 'ผู้หยั่งรู้อนาคต ทอยลูกเต๋าพยากรณ์ (Portent) ล่วงหน้าเพื่อเปลี่ยนผลเต๋าของเพื่อนหรือศัตรู' }
    ],
    progression: { 1: ['Spellcasting', 'Arcane Recovery (ฟื้นช่องเวทเมื่อพักสั้น)'], 2: ['Arcane Tradition (สายอาชีพย่อย)'], 6: ['School Feature'], 10: ['Empowered Evocation / Improved Abjuration'], 18: ['Spell Mastery'] }
  }
];

export const FEATS_LIST = [
  { id: 'asi', name: 'Ability Improvement (อัพค่าสถานะ +2 หรือ +1/+1)', category: 'ค่าสถานะ', statBonus: 2, statOptions: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'], desc: 'เพิ่มค่าสถานะ 1 ค่าขึ้น +2 แต้ม หรือแบ่งเพิ่ม 2 ค่า ค่าละ +1 แต้ม (สูงสุดไม่เกิน 20)' },
  { id: 'actor', name: 'Actor (นักแสดงเจ้าบทบาท)', category: 'ทักษะ & สเตตัส (+1)', statBonus: 1, statOptions: ['CHA'], desc: 'บวก CHA +1 และได้รับความชำนาญคูณสอง (Expertise) ในทักษะ Deception และ Performance' },
  { id: 'alert', name: 'Alert (ระแวดระวังภัย)', category: 'การต่อสู้', desc: 'บวกโบนัสเริ่มเทิร์น (Initiative) +5 ทันที และไม่มีวันติดสถานะถูกซุ่มโจมตี (Surprised)' },
  { id: 'athlete', name: 'Athlete (นักกีฬากายกรรม)', category: 'ทักษะ & สเตตัส (+1)', statBonus: 1, statOptions: ['STR', 'DEX'], desc: 'บวก STR หรือ DEX +1, ลุกจากสถานะล้ม (Prone) ใช้ความเร็วเพียง 5 ฟุต และกระโดดไกลขึ้น 50%' },
  { id: 'charger', name: 'Charger (จอมพุ่งชน)', category: 'การต่อสู้', desc: 'ได้รับท่าพุ่งโจมตีด้วยอาวุธ (+5 ดาเมจ) หรือพุ่งผลักศัตรูให้กระเด็นโดยใช้ Action + Bonus Action' },
  { id: 'crossbow_expert', name: 'Crossbow Expert (ผู้เชี่ยวชาญหน้าไม้)', category: 'การต่อสู้', desc: 'ยิงหน้าไม้ในระยะประชิดได้โดยไม่ติดสถานะเสียเปรียบ (Disadvantage) และท่า Piercing Shot ส่งผลนานขึ้น 2 เทิร์น' },
  { id: 'defensive_duelist', name: 'Defensive Duelist (นักดาบปัดป้อง)', category: 'ป้องกัน', desc: 'เมื่อถืออาวุธ Finesse ที่ชำนาญ สามารถใช้ Reaction บวกค่า Proficiency (+2 ถึง +6) เข้ากับ AC เพื่อกันการโจมตีประชิด' },
  { id: 'dual_wielder', name: 'Dual Wielder (ปรมาจารย์ดาบคู่)', category: 'การต่อสู้', acBonus: 1, desc: 'ถืออาวุธมือเดียวที่ไม่ใช่ประเภท Light คู่กันได้ (เช่น ถือ Longsword หรือไม้เท้าเวท 2 มือ) และได้รับเกราะ +1 AC!' },
  { id: 'dungeon_delver', name: 'Dungeon Delver (นักสำรวจดันเจี้ยน)', category: 'อรรถประโยชน์', desc: 'ได้เปรียบ (Advantage) ในการทอย Perception เพื่อหากับดัก ทอยป้องกันกับดัก และต้านทานดาเมจจากกับดักครึ่งหนึ่ง' },
  { id: 'durable', name: 'Durable (อึดถึกทนทาน)', category: 'ทักษะ & สเตตัส (+1)', statBonus: 1, statOptions: ['CON'], desc: 'บวก CON +1 และฟื้นฟูพลังชีวิตเต็ม 100% ทันทีทุกครั้งที่กดพักผ่อนสั้น (Short Rest)!' },
  { id: 'elemental_adept', name: 'Elemental Adept (จอมเวทผู้เชี่ยวชาญธาตุ)', category: 'เวทมนตร์', desc: 'เลือก 1 ธาตุ (กรด/น้ำแข็ง/ไฟ/สายฟ้า/คลื่นเสียง) เวทมนตร์ของคุณจะทะลุการต้านทาน (Resistance) และเต๋าดาเมจไม่ออก 1' },
  { id: 'gwm', name: 'Great Weapon Master (ปรมาจารย์อาวุธหนัก)', category: 'การต่อสู้', desc: 'เมื่อตีติดคริติคอลหรือสังหารศัตรูจะได้โจมตีแถมด้วย Bonus Action และเปิดโหมดลดแม่นยำ -5 เพื่อบวกดาเมจอาวุธสองมือ +10!' },
  { id: 'heavily_armoured', name: 'Heavily Armoured (ชำนาญเกราะหนัก)', category: 'ป้องกัน', statBonus: 1, statOptions: ['STR'], desc: 'บวก STR +1 และได้รับความชำนาญในการสวมใส่ชุดเกราะหนัก (Heavy Armour)' },
  { id: 'heavy_armour_master', name: 'Heavy Armour Master (ปรมาจารย์เกราะหนัก)', category: 'ป้องกัน', statBonus: 1, statOptions: ['STR'], desc: 'บวก STR +1 และลดความเสียหายกายภาพที่ไม่ใช่เวทมนตร์ลง 3 หน่วยทุกครั้งขณะสวมเกราะหนัก' },
  { id: 'lightly_armoured', name: 'Lightly Armoured (ชำนาญเกราะเบา)', category: 'ป้องกัน', statBonus: 1, statOptions: ['STR', 'DEX'], desc: 'บวก STR หรือ DEX +1 และได้รับความชำนาญในการสวมใส่ชุดเกราะเบา (Light Armour)' },
  { id: 'linguist', name: 'Linguist (ปราชญ์พหูสูตด้านภาษา)', category: 'ทักษะ & สเตตัส (+1)', statBonus: 1, statOptions: ['INT'], desc: 'บวก INT +1 และสามารถเรียนรู้ภาษาเพิ่มเติมได้อีก 3 ภาษาทันที!' },
  { id: 'lucky', name: 'Lucky (คนดวงเฮง)', category: 'อรรถประโยชน์', desc: 'ได้รับแต้มนำโชค 3 แต้มต่อการพักผ่อนยาว ใช้เพื่อทอยเต๋าโจมตี/ทักษะ/ป้องกันแบบ Advantage หรือบังคับศัตรูทอยใหม่' },
  { id: 'mage_slayer', name: 'Mage Slayer (มือสังหารจอมเวท)', category: 'การต่อสู้', desc: 'เมื่อศัตรูร่ายเวทในระยะประชิดจะใช้ Reaction โจมตีสวนได้ทันที และศัตรูที่คุณโจมตีจะเสียเปรียบในการรักษาสมาธิเวท' },
  { id: 'magic_initiate', name: 'Magic Initiate (ผู้ริเริ่มศาสตร์เวทมนตร์)', category: 'เวทมนตร์', desc: 'เลือกเรียนคาถาพื้นฐาน (Cantrips) 2 บท และคาถา Lv.1 อีก 1 บท จากคลาสผู้ใช้เวทมนตร์ (ร่ายฟรี 1 ครั้ง/พักยาว)' },
  { id: 'martial_adept', name: 'Martial Adept (ผู้ฝึกยุทธ์กระบวนท่า)', category: 'การต่อสู้', desc: 'เรียนรู้กระบวนท่าของ Battle Master 2 ท่า และได้รับลูกเต๋ายุทธ์ (Superiority Die 1d6) 1 ลูก (รีเซ็ตเมื่อพักสั้น)' },
  { id: 'medium_armour_master', name: 'Medium Armour Master (ปรมาจารย์เกราะกลาง)', category: 'ป้องกัน', desc: 'สวมเกราะกลางโดยไม่เสียเปรียบ Stealth และสามารถนำโบนัส DEX มาบวก AC ได้สูงสุดถึง +3 (จากเดิม +2)!' },
  { id: 'mobile', name: 'Mobile (พริ้วไหวดั่งสายลม)', category: 'การต่อสู้', speedBonus: 10, desc: 'ความเร็วเคลื่อนที่เพิ่มขึ้น +10 ฟุต ถาวร, วิ่ง Dash ไม่ติดพื้นที่ลำบาก และศัตรูที่คุณตีประชิดจะตีสวน (Opportunity Attack) ไม่ได้!' },
  { id: 'moderately_armoured', name: 'Moderately Armoured (ชำนาญเกราะกลางและโล่)', category: 'ป้องกัน', statBonus: 1, statOptions: ['STR', 'DEX'], desc: 'บวก STR หรือ DEX +1 และได้รับความชำนาญในการสวมใส่เกราะกลาง (Medium Armour) และโล่ (Shield)' },
  { id: 'observant', name: 'Observant (ช่างสังเกตการณ์)', category: 'ทักษะ & สเตตัส (+1)', statBonus: 1, statOptions: ['INT', 'WIS'], desc: 'บวก INT หรือ WIS +1 และเพิ่มความสามารถในการตรวจจับสิ่งซ่อนเร้น (+5 Passive Perception & Investigation)' },
  { id: 'performer', name: 'Performer (ศิลปินนักดนตรี)', category: 'ทักษะ & สเตตัส (+1)', statBonus: 1, statOptions: ['CHA'], desc: 'บวก CHA +1 และได้รับความชำนาญในการเล่นเครื่องดนตรีทุกชนิด (Musical Instruments)' },
  { id: 'polearm_master', name: 'Polearm Master (ปรมาจารย์อาวุธด้ามยาว)', category: 'การต่อสู้', desc: 'เมื่อใช้ง้าว หอก หรือพลอง สามารถใช้ Bonus Action เอาท้ายด้ามกระแทก (1d4) และตีสวนทันทีเมื่อศัตรูเดินเข้ามาในระยะ' },
  { id: 'resilient', name: 'Resilient (จิตและกายแกร่งกล้า)', category: 'ป้องกัน', statBonus: 1, statOptions: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'], desc: 'บวกค่าสถานะที่เลือก +1 แต้ม และได้รับความชำนาญในการทอยป้องกัน (Saving Throw Proficiency) ของค่าสถานะนั้น!' },
  { id: 'ritual_caster', name: 'Ritual Caster (ผู้ประกอบพิธีกรรมเวท)', category: 'เวทมนตร์', desc: 'เรียนรู้คาถาพิธีกรรม (Ritual Spells) 2 บท เช่น Find Familiar, Speak with Dead หรือ Longstrider' },
  { id: 'savage_attacker', name: 'Savage Attacker (จอมโจมตีอำมหิต)', category: 'การต่อสู้', desc: 'ทุกครั้งที่โจมตีด้วยอาวุธประชิด ระบบจะทอยลูกเต๋าความเสียหาย 2 ครั้งแล้วเลือกใช้ค่าที่สูงที่สุดเสมอ!' },
  { id: 'sentinel', name: 'Sentinel (ปราการผู้พิทักษ์)', category: 'ป้องกัน', desc: 'ใช้ Reaction ตีศัตรูที่โจมตีเพื่อนในระยะประชิด และเมื่อตี Opportunity Attack โดน จะหยุดความเร็วศัตรูเป็น 0 ทันที' },
  { id: 'sharpshooter', name: 'Sharpshooter (จอมแม่นธนู)', category: 'การต่อสู้', desc: 'ยิงระยะไกลโดยไม่เสียเปรียบเรื่องพื้นที่ต่ำกว่า และสามารถลดความแม่นยำ -5 เพื่อบวกดาเมจยิงไกล +10 แต้ม!' },
  { id: 'shield_master', name: 'Shield Master (ปรมาจารย์โล่ป้องกัน)', category: 'ป้องกัน', desc: 'ขณะถือโล่ ได้รับโบนัส +2 ในการทอย DEX Save และใช้ Reaction ยกโล่กันดาเมจเวทมนตร์ให้เหลือครึ่งเดียวหรือไม่โดนเลย' },
  { id: 'skilled', name: 'Skilled (ผู้มากความสามารถ)', category: 'อรรถประโยชน์', desc: 'ได้รับความชำนาญในทักษะ (Skill Proficiencies) เพิ่มเติมอีก 3 ทักษะใดก็ได้ทันที!' },
  { id: 'spell_sniper', name: 'Spell Sniper (จอมเวทซุ่มยิง)', category: 'เวทมนตร์', desc: 'เรียนรู้ 1 Cantrip โจมตี และลดแต้มหน้าเต๋าที่ต้องใช้ในการติด Critical Hit ของคาถาลง 1 แต้ม (ติดคริที่ 19-20)' },
  { id: 'tavern_brawler', name: 'Tavern Brawler (นักเลงโรงเตี๊ยม)', category: 'การต่อสู้', statBonus: 1, statOptions: ['STR', 'CON'], desc: 'บวก STR หรือ CON +1 และนำโบนัส STR ไปบวกเพิ่มเป็น 2 เท่าทั้งความแม่นยำและดาเมจเมื่อต่อยมือเปล่าหรือขว้างปาสิ่งของ!' },
  { id: 'tough', name: 'Tough (ร่างกายอึดถึกทน)', category: 'ป้องกัน', desc: 'เพิ่มพลังชีวิตสูงสุด (Max HP) +2 แต้มต่อทุกๆ เลเวลของตัวละครโดยอัตโนมัติ (Lv.20 ได้เลือดเพิ่ม +40 HP)' },
  { id: 'warcaster', name: 'War Caster (จอมเวทสมรภูมิ)', category: 'เวทมนตร์', desc: 'ได้เปรียบ (Advantage) เวลาทอย CON Save เพื่อรักษาสมาธิเวท (Concentration) และร่าย Shocking Grasp เป็น Reaction ได้' },
  { id: 'weapon_master', name: 'Weapon Master (ผู้เชี่ยวชาญสรรพาวุธ)', category: 'การต่อสู้', statBonus: 1, statOptions: ['STR', 'DEX'], desc: 'บวก STR หรือ DEX +1 และเลือกรับความชำนาญในอาวุธชนิดใดก็ได้เพิ่ม 4 ชนิด' }
];

export const STATS_INFO = [
  { id: 'STR', name: 'Strength (พละกำลัง)', desc: 'พลังกาย อาวุธประชิด การกระโดดและแบกน้ำหนัก' },
  { id: 'DEX', name: 'Dexterity (ความว่องไว)', desc: 'ความแม่นยำอาวุธไกล เกราะ AC ลำดับเทิร์น และการซ่อนตัว' },
  { id: 'CON', name: 'Constitution (ความอึด)', desc: 'พลังชีวิตสูงสุด (HP) และสมาธิร่ายเวท (Concentration)' },
  { id: 'INT', name: 'Intelligence (สติปัญญา)', desc: 'ความรู้เวทมนตร์ (Wizard) ประวัติศาสตร์ และการสืบสวน' },
  { id: 'WIS', name: 'Wisdom (ปัญญาญาณ)', desc: 'การรับรู้ สัญชาตญาณ และพลังเวทสาย Cleric / Druid / Ranger' },
  { id: 'CHA', name: 'Charisma (เสน่ห์บารมี)', desc: 'การเจรจา ข่มขู่ และพลังเวทสาย Bard / Paladin / Sorcerer / Warlock' }
];

export const SKILLS_META = {
  acrobatics: { name_th: 'Acrobatics (กายกรรม)', stat: 'DEX' },
  animal_handling: { name_th: 'Animal Handling (คุมสัตว์)', stat: 'WIS' },
  arcana: { name_th: 'Arcana (ศาสตร์เวทมนตร์)', stat: 'INT' },
  athletics: { name_th: 'Athletics (กรีฑา/พละกำลัง)', stat: 'STR' },
  deception: { name_th: 'Deception (หลอกลวง)', stat: 'CHA' },
  history: { name_th: 'History (ประวัติศาสตร์)', stat: 'INT' },
  insight: { name_th: 'Insight (หยั่งรู้เจตนา)', stat: 'WIS' },
  intimidation: { name_th: 'Intimidation (ข่มขู่)', stat: 'CHA' },
  investigation: { name_th: 'Investigation (สืบสวน)', stat: 'INT' },
  medicine: { name_th: 'Medicine (การแพทย์)', stat: 'WIS' },
  nature: { name_th: 'Nature (ธรรมชาติวิทยา)', stat: 'INT' },
  perception: { name_th: 'Perception (การรับรู้/สังเกต)', stat: 'WIS' },
  performance: { name_th: 'Performance (การแสดง)', stat: 'CHA' },
  persuasion: { name_th: 'Persuasion (โน้มน้าวใจ)', stat: 'CHA' },
  religion: { name_th: 'Religion (ศาสนา)', stat: 'INT' },
  sleight_of_hand: { name_th: 'Sleight of Hand (มือไว/ล้วงกระเป๋า)', stat: 'DEX' },
  stealth: { name_th: 'Stealth (ลอบเร้น/ซ่อนตัว)', stat: 'DEX' },
  survival: { name_th: 'Survival (เอาชีวิตรอด/แกะรอย)', stat: 'WIS' }
};

export const LANGUAGES_DB = [
  { id: 'common', name_th: 'Common (ภาษากลาง)', type: 'ภาษามาตรฐาน' },
  { id: 'elvish', name_th: 'Elvish (ภาษาเอลฟ์)', type: 'ภาษามาตรฐาน' },
  { id: 'dwarvish', name_th: 'Dwarvish (ภาษาดวอร์ฟ)', type: 'ภาษามาตรฐาน' },
  { id: 'halfling', name_th: 'Halfling (ภาษาฮาล์ฟลิง)', type: 'ภาษามาตรฐาน' },
  { id: 'gnomish', name_th: 'Gnomish (ภาษาโนม)', type: 'ภาษามาตรฐาน' },
  { id: 'orc', name_th: 'Orc (ภาษาออร์ค)', type: 'ภาษามาตรฐาน' },
  { id: 'giant', name_th: 'Giant (ภาษายักษ์)', type: 'ภาษามาตรฐาน' },
  { id: 'goblin', name_th: 'Goblin (ภาษาก็อบลิน)', type: 'ภาษามาตรฐาน' },
  { id: 'draconic', name_th: 'Draconic (ภาษามังกร)', type: 'ภาษาโบราณ/ลี้ลับ' },
  { id: 'infernal', name_th: 'Infernal (ภาษาปีศาจนรก)', type: 'ภาษาโบราณ/ลี้ลับ' },
  { id: 'abyssal', name_th: 'Abyssal (ภาษาอสูรเหวลึก)', type: 'ภาษาโบราณ/ลี้ลับ' },
  { id: 'celestial', name_th: 'Celestial (ภาษาสวรรค์)', type: 'ภาษาโบราณ/ลี้ลับ' },
  { id: 'sylvan', name_th: 'Sylvan (ภาษาภูตพงไพร)', type: 'ภาษาโบราณ/ลี้ลับ' },
  { id: 'undercommon', name_th: 'Undercommon (ภาษาโลกใต้ดิน)', type: 'ภาษาโบราณ/ลี้ลับ' }
];

export const FULL_CASTER_SLOTS = {
  1:  { 1: 2 },
  2:  { 1: 3 },
  3:  { 1: 4, 2: 2 },
  4:  { 1: 4, 2: 3 },
  5:  { 1: 4, 2: 3, 3: 2 },
  6:  { 1: 4, 2: 3, 3: 3 },
  7:  { 1: 4, 2: 3, 3: 3, 4: 1 },
  8:  { 1: 4, 2: 3, 3: 3, 4: 2 },
  9:  { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
  10: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
  11: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
  12: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
  13: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
  14: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
  15: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
  16: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
  17: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 },
  18: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
  19: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 },
  20: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 }
};

export const HALF_CASTER_SLOTS = {
  1: {},
  2: { 1: 2 },
  3: { 1: 3 },
  4: { 1: 3 },
  5: { 1: 4, 2: 2 },
  6: { 1: 4, 2: 2 },
  7: { 1: 4, 2: 3 },
  8: { 1: 4, 2: 3 },
  9: { 1: 4, 2: 3, 3: 2 },
  10: { 1: 4, 2: 3, 3: 2 },
  11: { 1: 4, 2: 3, 3: 3 },
  12: { 1: 4, 2: 3, 3: 3 },
  13: { 1: 4, 2: 3, 3: 3, 4: 1 },
  14: { 1: 4, 2: 3, 3: 3, 4: 1 },
  15: { 1: 4, 2: 3, 3: 3, 4: 2 },
  16: { 1: 4, 2: 3, 3: 3, 4: 2 },
  17: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
  18: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
  19: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
  20: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 }
};

export const SPELLS_DB = {
  "Acid Splash": {"level": 0, "school": "Conjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "1d6", "desc": "สาดกรดใส่เป้าหมาย 1 ตัว (หรือ 2 ตัวที่อยู่ติดกันในระยะ 5 ฟุต) เป้าหมายต้องทอย DEX Save หากไม่ผ่านจะได้รับความเสียหายกรด (Acid) 1d6"},
  "Blade Ward": {"level": 0, "school": "Abjuration", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "1 รอบ", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "จนจบเทิร์นถัดไปของคุณ คุณจะได้รับ Resistance (ลดความเสียหายครึ่งหนึ่ง) ต่อการโจมตีประเภท Bludgeoning, Piercing และ Slashing จากอาวุธ"},
  "Chill Touch": {"level": 0, "school": "Necromancy", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "1 รอบ", "ritual": false, "concentration": false, "classes": ["sorcerer", "warlock", "wizard"], "dice": "1d8", "desc": "สร้างมือกระดูกพุ่งโจมตี (Ranged Spell Attack) ทำความเสียหาย Necrotic 1d8 และเป้าหมายไม่สามารถฟื้นฟู HP ได้จนเริ่มเทิร์นถัดไปของคุณ (หากเป็น Undead จะติด Disadvantage ตอนโจมตีคุณด้วย)"},
  "Dancing Lights": {"level": 0, "school": "Evocation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "สร้างดวงไฟขนาดเท่าคบเพลิงได้สูงสุด 4 ดวง ส่องแสงสลัวในรัศมี 10 ฟุต สามารถรวมเป็นร่างคล้ายมนุษย์ขนาดเล็กได้ และสั่งเคลื่อนที่ได้ 60 ฟุตด้วย Bonus Action"},
  "Druidcraft": {"level": 0, "school": "Transmutation", "action": "1 Action", "range": "30 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["druid"], "dice": "", "desc": "สร้างปรากฏการณ์ธรรมชาติเล็กๆ เช่น พยากรณ์อากาศล่วงหน้า 24 ชม., เร่งให้ดอกไม้บาน, สร้างเสียง/กลิ่นธรรมชาติ หรือจุด/ดับไฟขนาดเล็ก"},
  "Eldritch Blast": {"level": 0, "school": "Evocation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["warlock"], "dice": "1d10", "desc": "ยิงลำแสงพลังงาน (Ranged Spell Attack) ทำความเสียหาย Force 1d10 เมื่อเลเวลสูงขึ้นจะยิงได้หลายลำแสง (2 ลำที่ Lv.5, 3 ลำที่ Lv.11, 4 ลำที่ Lv.17)"},
  "Fire Bolt": {"level": 0, "school": "Evocation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "1d10", "desc": "ขว้างลูกไฟใส่ศัตรูหรือวัตถุ (Ranged Spell Attack) ทำความเสียหายไฟ (Fire) 1d10 และทำให้วัตถุไวไฟที่ไม่มีคนถือติดไฟได้"},
  "Friends": {"level": 0, "school": "Enchantment", "action": "1 Action", "range": "ตัวเอง", "components": "S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "ได้รับ Advantage ในการทอย Charisma Check กับสิ่งมีชีวิต 1 ตัวที่ไม่ใช่ศัตรู แต่เมื่อเวทย์หมดลง เป้าหมายจะรู้ตัวว่าถูกใช้เวทย์ใส่และอาจโกรธเคือง"},
  "Guidance": {"level": 0, "school": "Divination", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric", "druid"], "dice": "1d4", "desc": "แตะเพื่อนร่วมทีม 1 คน เป้าหมายสามารถทอย 1d4 บวกเพิ่มในการทอย Ability Check ครั้งหนึ่งก่อนที่เวทย์จะหมด"},
  "Light": {"level": 0, "school": "Evocation", "action": "1 Action", "range": "สัมผัส", "components": "V, M", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "sorcerer", "wizard"], "dice": "", "desc": "แตะวัตถุให้ส่องแสงสว่างในรัศมี 20 ฟุต และแสงสลัวอีก 20 ฟุต"},
  "Mage Hand": {"level": 0, "school": "Conjuration", "action": "1 Action", "range": "30 ฟุต", "components": "V, S", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "เสกมือเวทมนตร์ลอยได้ ใช้หยิบจับวัตถุ เปิดประตู หรือถือของหนักไม่เกิน 10 ปอนด์ (โจมตีหรือใช้ไอเทมเวทมนตร์ไม่ได้)"},
  "Mending": {"level": 0, "school": "Transmutation", "action": "1 นาที", "range": "สัมผัส", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "druid", "sorcerer", "wizard"], "dice": "", "desc": "ซ่อมแซมรอยแตกหรือรอยขาดของวัตถุที่มีขนาดไม่เกิน 1 ฟุต ให้กลับมาสมบูรณ์ดังเดิม"},
  "Message": {"level": 0, "school": "Transmutation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S, M", "duration": "1 รอบ", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "ชี้ไปที่เป้าหมายในระยะแล้วกระซิบ เป้าหมายจะได้ยินข้อความในหัวเพียงคนเดียวและสามารถกระซิบตอบกลับมาได้ทันที"},
  "Minor Illusion": {"level": 0, "school": "Illusion", "action": "1 Action", "range": "30 ฟุต", "components": "S, M", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "สร้างเสียงลวงตา หรือภาพวัตถุลวงตาขนาดไม่เกินลูกบาศก์ 5 ฟุต หากมีคนสัมผัสจะรู้ว่าเป็นภาพลวงตาทันที"},
  "Poison Spray": {"level": 0, "school": "Conjuration", "action": "1 Action", "range": "10 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["druid", "sorcerer", "warlock", "wizard"], "dice": "1d12", "desc": "พ่นแก๊สพิษใส่ศัตรูในระยะ เป้าหมายต้องทอย CON Save หากไม่ผ่านจะได้รับความเสียหายพิษ (Poison) 1d12"},
  "Prestidigitation": {"level": 0, "school": "Transmutation", "action": "1 Action", "range": "10 ฟุต", "components": "V, S", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "มายากลอเนกประสงค์ เช่น ทำความสะอาด/ทำให้เปื้อน, อุ่น/แช่เย็นอาหาร, เปลี่ยนรสชาติ, จุดเทียน, สร้างสัญลักษณ์บนพื้นผิว"},
  "Produce Flame": {"level": 0, "school": "Conjuration", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "10 นาที", "ritual": false, "concentration": false, "classes": ["druid"], "dice": "1d8", "desc": "สร้างลูกไฟบนฝ่ามือเพื่อให้แสงสว่าง (สว่าง 10 ฟุต/สลัว 10 ฟุต) หรือขว้างใส่ศัตรูในระยะ 30 ฟุต (Ranged Spell Attack) ทำความเสียหายไฟ 1d8"},
  "Ray of Frost": {"level": 0, "school": "Evocation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "1d8", "desc": "ยิงลำแสงน้ำแข็ง (Ranged Spell Attack) ทำความเสียหายน้ำแข็ง (Cold) 1d8 และลดความเร็วเคลื่อนที่ของเป้าหมายลง 10 ฟุต จนเริ่มเทิร์นถัดไปของคุณ"},
  "Resistance": {"level": 0, "school": "Abjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric", "druid"], "dice": "1d4", "desc": "แตะเพื่อนร่วมทีม 1 คน เป้าหมายสามารถทอย 1d4 บวกเพิ่มในการทอย Saving Throw ครั้งหนึ่งก่อนที่เวทย์จะหมด"},
  "Sacred Flame": {"level": 0, "school": "Evocation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "1d8", "desc": "เปลวไฟศักดิ์สิทธิ์ผ่าลงมาใส่เป้าหมาย เป้าหมายต้องทอย DEX Save (ไม่ได้รับโบนัสจากที่กำบัง/Cover) หากไม่ผ่านจะได้รับความเสียหาย Radiant 1d8"},
  "Shillelagh": {"level": 0, "school": "Transmutation", "action": "1 Bonus Action", "range": "สัมผัส", "components": "V, S, M", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["druid"], "dice": "1d8", "desc": "เสริมพลังธรรมชาติให้กระบอง (Club หรือ Quarterstaff) ที่ถืออยู่ ทำให้ใช้ค่าสถานะการร่ายเวทย์แทน STR ในการโจมตีและคิดความเสียหาย และเปลี่ยนเต๋าความเสียหายเป็น 1d8 (นับเป็นอาวุธเวทมนตร์)"},
  "Shocking Grasp": {"level": 0, "school": "Evocation", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "1d8", "desc": "ช็อตไฟฟ้าใส่เป้าหมายระยะประชิด (Melee Spell Attack, ได้ Advantage ถ้าศัตรูใส่เกราะโลหะ) ทำความเสียหายสายฟ้า (Lightning) 1d8 และเป้าหมายใช้ Reaction ไม่ได้จนเริ่มเทิร์นถัดไปของมัน"},
  "Spare the Dying": {"level": 0, "school": "Necromancy", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "", "desc": "แตะสิ่งมีชีวิตที่มี 0 HP ให้มีอาการคงที่ (Stable) ทันทีโดยไม่ต้องทอย Death Saving Throw (ใช้กับ Undead และ Construct ไม่ได้)"},
  "Thaumaturgy": {"level": 0, "school": "Transmutation", "action": "1 Action", "range": "30 ฟุต", "components": "V", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "", "desc": "แสดงปาฏิหาริย์เล็กๆ เช่น ขยายเสียงพูดให้ดังขึ้น 3 เท่า, ทำให้พื้นสั่นสะเทือนเบาๆ, เปลี่ยนสีไฟ, กระแทกประตู/หน้าต่างที่ไม่ได้ล็อคให้เปิดหรือปิด"},
  "Thorn Whip": {"level": 0, "school": "Transmutation", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["druid"], "dice": "1d6", "desc": "สร้างแส้หนามฟาดศัตรู (Melee Spell Attack) ทำความเสียหาย Piercing 1d6 และหากเป้าหมายมีขนาด Large หรือเล็กกว่า จะถูกดึงเข้ามาใกล้คุณสูงสุด 10 ฟุต"},
  "True Strike": {"level": 0, "school": "Divination", "action": "1 Action", "range": "30 ฟุต", "components": "S", "duration": "1 รอบ (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "ชี้เป้าหมายเพื่ออ่านจุดอ่อน ในเทิร์นถัดไปคุณจะได้รับ Advantage ในการโจมตีครั้งแรกใส่เป้าหมายนั้น"},
  "Vicious Mockery": {"level": 0, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard"], "dice": "1d4", "desc": "ด่าทอเสียดสีศัตรูด้วยเวทมนตร์ เป้าหมายต้องทอย WIS Save หากไม่ผ่านจะได้รับความเสียหายทางจิตใจ (Psychic) 1d4 และติด Disadvantage ในการโจมตีครั้งถัดไป"},
  "Alarm": {"level": 1, "school": "Abjuration", "action": "1 นาที", "range": "30 ฟุต", "components": "V, S, M", "duration": "8 ชั่วโมง", "ritual": true, "concentration": false, "classes": ["ranger", "wizard"], "dice": "", "desc": "สร้างอาณาเขตเตือนภัยขนาดลูกบาศก์ 20 ฟุต เมื่อมีสิ่งมีชีวิตขนาด Tiny ขึ้นไปเข้ามา จะส่งเสียงเตือนในหัวหรือเสียงกระดิ่งดัง"},
  "Animal Friendship": {"level": 1, "school": "Enchantment", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "24 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "druid", "ranger"], "dice": "", "desc": "ทำให้สัตว์ป่า (Beast ที่มีค่า INT ต่ำกว่า 4) ทอย WIS Save หากไม่ผ่านจะติดสถานะ Charmed (เป็นมิตรและไม่ทำร้ายคุณ)"},
  "Armor of Agathys": {"level": 1, "school": "Abjuration", "action": "1 Action", "range": "ตัวเอง", "components": "V, S, M", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["warlock"], "dice": "", "desc": "เคลือบตัวเองด้วยน้ำแข็งเวทมนตร์ ได้รับ 5 Temporary HP หากศัตรูโจมตีระยะประชิดโดนคุณในขณะที่ยังมีเกราะนี้อยู่ ศัตรูจะโดนความเสียหายน้ำแข็ง (Cold) 5 หน่วยทันที"},
  "Arms of Hadar": {"level": 1, "school": "Conjuration", "action": "1 Action", "range": "ตัวเอง (รัศมี 10 ฟุต)", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["warlock"], "dice": "2d6", "desc": "เรียกหนวดความมืดฟาดรอบตัว ศัตรูในรัศมี 10 ฟุตต้องทอย STR Save หากไม่ผ่านจะโดนความเสียหาย Necrotic 2d6 และใช้ Reaction ไม่ได้ 1 รอบ (ผ่านโดนครึ่งเดียว)"},
  "Bane": {"level": 1, "school": "Enchantment", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "cleric"], "dice": "1d4", "desc": "สาปศัตรูสูงสุด 3 ตัว ต้องทอย CHA Save หากไม่ผ่าน ทุกครั้งที่เป้าหมายทอย Attack Roll หรือ Saving Throw จะต้องทอย 1d4 มาลบออกจากผลลัพธ์"},
  "Bless": {"level": 1, "school": "Enchantment", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric", "paladin"], "dice": "1d4", "desc": "อวยพรเพื่อนสูงสุด 3 คน ทุกครั้งที่เป้าหมายทอย Attack Roll หรือ Saving Throw จะได้ทอย 1d4 บวกเพิ่มเข้าไปในผลลัพธ์"},
  "Burning Hands": {"level": 1, "school": "Evocation", "action": "1 Action", "range": "ตัวเอง (กรวย 15 ฟุต)", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "3d6", "desc": "พ่นไฟเป็นรูปกรวย 15 ฟุตจากปลายนิ้ว ศัตรูในพื้นที่ต้องทอย DEX Save ไม่ผ่านโดนความเสียหายไฟ 3d6 (ผ่านโดนครึ่งเดียว)"},
  "Charm Person": {"level": 1, "school": "Enchantment", "action": "1 Action", "range": "30 ฟุต", "components": "V, S", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "druid", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "สะกดจิตเผ่าพันธุ์คล้ายมนุษย์ (Humanoid) 1 ตัว ต้องทอย WIS Save (ได้ Advantage ถ้ากำลังสู้กันอยู่) ไม่ผ่านจะติดสถานะ Charmed และมองคุณเป็นเพื่อนสนิท"},
  "Chromatic Orb": {"level": 1, "school": "Evocation", "action": "1 Action", "range": "90 ฟุต", "components": "V, S, M (เพชร 50 gp)", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "3d8", "desc": "ขว้างลูกแก้วพลังงาน (Ranged Spell Attack) เลือกธาตุได้ (Acid, Cold, Fire, Lightning, Poison, Thunder) ทำความเสียหาย 3d8"},
  "Color Spray": {"level": 1, "school": "Illusion", "action": "1 Action", "range": "ตัวเอง (กรวย 15 ฟุต)", "components": "V, S, M", "duration": "1 รอบ", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "6d10", "desc": "สาดแสงหลากสีแสบตา ทอย 6d10 เพื่อดูจำนวน HP รวมของสิ่งมีชีวิตที่จะติดสถานะตาบอด (Blinded) โดยเริ่มคิดจากตัวที่มี HP ปัจจุบันน้อยที่สุดก่อน"},
  "Command": {"level": 1, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V", "duration": "1 รอบ", "ritual": false, "concentration": false, "classes": ["cleric", "paladin"], "dice": "", "desc": "ออกคำสั่งสั้นๆ 1 คำ (เช่น Approach, Drop, Flee, Grovel, Halt) เป้าหมายต้องทอย WIS Save ไม่ผ่านจะต้องทำตามคำสั่งนั้นในเทิร์นถัดไปของมัน"},
  "Comprehend Languages": {"level": 1, "school": "Divination", "action": "1 Action", "range": "ตัวเอง", "components": "V, S, M", "duration": "1 ชั่วโมง", "ritual": true, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "เข้าใจภาษาพูดทุกภาษาที่ได้ยิน และอ่านภาษาเขียนทุกภาษาที่สัมผัสพื้นผิวได้ (แต่ไม่ได้ช่วยให้พูดหรือเขียนภาษานั้นได้)"},
  "Create or Destroy Water": {"level": 1, "school": "Transmutation", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "druid"], "dice": "", "desc": "สร้างน้ำสะอาดสูงสุด 10 แกลลอน (หรือเสกฝนตกในพื้นที่ 30 ฟุตเพื่อดับไฟ) หรือทำลายน้ำ/หมอกในพื้นที่ขนาดเท่ากัน"},
  "Cure Wounds": {"level": 1, "school": "Evocation", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "druid", "paladin", "ranger"], "dice": "1d8", "desc": "แตะสิ่งมีชีวิต 1 ตัวเพื่อฟื้นฟูพลังชีวิตเท่ากับ 1d8 + Spellcasting Ability Modifier (ใช้กับ Undead หรือ Construct ไม่ได้)"},
  "Detect Evil and Good": {"level": 1, "school": "Divination", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric", "paladin"], "dice": "", "desc": "รับรู้ถึงการมีอยู่และตำแหน่งของสิ่งมีชีวิตประเภท Aberration, Celestial, Elemental, Fey, Fiend หรือ Undead รวมถึงพื้นที่ศักดิ์สิทธิ์/ต้องสาป ในรัศมี 30 ฟุต"},
  "Detect Magic": {"level": 1, "school": "Divination", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "10 นาที (C)", "ritual": true, "concentration": true, "classes": ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "wizard"], "dice": "", "desc": "รับรู้ถึงเวทมนตร์ในรัศมี 30 ฟุต รอบตัว และสามารถใช้ Action เพ่งมองออร่าเพื่อระบุสำนักเวทย์ (School of Magic) ของสิ่งนั้นได้"},
  "Detect Poison and Disease": {"level": 1, "school": "Divination", "action": "1 Action", "range": "ตัวเอง", "components": "V, S, M", "duration": "10 นาที (C)", "ritual": true, "concentration": true, "classes": ["cleric", "druid", "paladin", "ranger"], "dice": "", "desc": "รับรู้ถึงพิษ สิ่งมีชีวิตมีพิษ และโรคภัยไข้เจ็บในรัศมี 30 ฟุต พร้อมระบุชนิดของพิษหรือโรคนั้นได้"},
  "Disguise Self": {"level": 1, "school": "Illusion", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "เปลี่ยนรูปลักษณ์ภายนอกของตัวเองและเสื้อผ้าด้วยภาพลวงตา (สูง/เตี้ยขึ้นได้ไม่เกิน 1 ฟุต) แต่เป็นเพียงภาพลวงตา หากถูกจับต้องอาจถูกจับได้ (Investigation Check)"},
  "Dissonant Whispers": {"level": 1, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard"], "dice": "3d6", "desc": "ร้องทำนองหลอนประสาทใส่เป้าหมาย 1 ตัว ต้องทอย WIS Save ไม่ผ่านโดนความเสียหาย Psychic 3d6 และต้องใช้ Reaction วิ่งหนีห่างออกไปทันที (ผ่านโดนครึ่งเดียวและไม่หนี)"},
  "Divine Favor": {"level": 1, "school": "Evocation", "action": "1 Bonus Action", "range": "ตัวเอง", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["paladin"], "dice": "1d4", "desc": "เสริมพลังศักดิ์สิทธิ์ให้อาวุธ ทุกครั้งที่โจมตีด้วยอาวุธโดน จะทำโบนัสความเสียหาย Radiant เพิ่มอีก 1d4"},
  "Entangle": {"level": 1, "school": "Conjuration", "action": "1 Action", "range": "90 ฟุต", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["druid"], "dice": "", "desc": "เรียกเถาวัลย์และวัชพืชขึ้นในพื้นที่สี่เหลี่ยมจัตุรัส 20 ฟุต ทำให้เป็นพื้นที่เดินยาก (Difficult Terrain) และสิ่งมีชีวิตในพื้นที่ต้องทอย STR Save ไม่ผ่านจะติดสถานะถูกมัด (Restrained)"},
  "Expeditious Retreat": {"level": 1, "school": "Transmutation", "action": "1 Bonus Action", "range": "ตัวเอง", "components": "V, S", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "warlock", "wizard"], "dice": "", "desc": "ทำให้คุณสามารถใช้คำสั่ง Dash (วิ่งเพิ่มความเร็ว) ได้ทันทีที่ร่าย และใช้เป็น Bonus Action ได้ในทุกๆ เทิร์นจนกว่าเวทย์จะหมด"},
  "Faerie Fire": {"level": 1, "school": "Evocation", "action": "1 Action", "range": "60 ฟุต", "components": "V", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "druid"], "dice": "", "desc": "สาดแสงสีเคลือบวัตถุและสิ่งมีชีวิตในพื้นที่ลูกบาศก์ 20 ฟุต เป้าหมายต้องทอย DEX Save ไม่ผ่านจะมีแสงเรืองรอง ทำให้การโจมตีใส่เป้าหมายได้ Advantage และหายตัว (Invisible) ไม่ได้"},
  "False Life": {"level": 1, "school": "Necromancy", "action": "1 Action", "range": "ตัวเอง", "components": "V, S, M", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "1d4+4", "desc": "เสริมพลังชีวิตจำลอง ได้รับ Temporary HP เท่ากับ 1d4 + 4"},
  "Feather Fall": {"level": 1, "school": "Transmutation", "action": "1 Reaction", "range": "60 ฟุต", "components": "V, M", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "ร่ายเมื่อมีคนตกจากที่สูง เปลี่ยนให้สิ่งมีชีวิตสูงสุด 5 ตัวในระยะ ร่อนลงมาอย่างช้าๆ (60 ฟุตต่อรอบ) และไม่ได้รับความเสียหายจากการตกพื้น"},
  "Find Familiar": {"level": 1, "school": "Conjuration", "action": "1 ชั่วโมง", "range": "10 ฟุต", "components": "V, S, M (กำยาน 10 gp)", "duration": "ทันที", "ritual": true, "concentration": false, "classes": ["wizard"], "dice": "", "desc": "อัญเชิญวิญญาณรับใช้ในร่างสัตว์ขนาดเล็ก (เช่น นกฮูก แมว กบ) ช่วยสอดแนม สื่อสารทางจิตในระยะ 100 ฟุต และช่วยร่ายเวทย์ระยะสัมผัสแทนคุณได้"},
  "Fog Cloud": {"level": 1, "school": "Conjuration", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["druid", "ranger", "sorcerer", "wizard"], "dice": "", "desc": "สร้างหมอกหนาทึบในรัศมีทรงกลม 20 ฟุต บดบังทัศนวิสัยทั้งหมดในพื้นที่ (Heavily Obscured)"},
  "Goodberry": {"level": 1, "school": "Transmutation", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["druid", "ranger"], "dice": "", "desc": "เสกผลเบอร์รี่เวทมนตร์ขึ้นมาสูงสุด 10 ลูก (อยู่ได้ 24 ชม.) การกิน 1 ลูกใช้ 1 Action จะฟื้นฟู 1 HP และทำให้อิ่มท้องไปตลอดทั้งวัน"},
  "Grease": {"level": 1, "school": "Conjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["wizard"], "dice": "", "desc": "เสกคราบน้ำมันลื่นในพื้นที่สี่เหลี่ยม 10 ฟุต เป็น Difficult Terrain และผู้ที่อยู่ในพื้นที่ต้องทอย DEX Save ไม่ผ่านจะล้มลง (Prone)"},
  "Guiding Bolt": {"level": 1, "school": "Evocation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "1 รอบ", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "4d6", "desc": "ยิงลำแสงศักดิ์สิทธิ์ใส่ศัตรู (Ranged Spell Attack) ทำความเสียหาย Radiant 4d6 และทำให้การโจมตีครั้งถัดไปที่โจมตีใส่เป้าหมายนี้ได้รับ Advantage"},
  "Hail of Thorns": {"level": 1, "school": "Conjuration", "action": "1 Bonus Action", "range": "ตัวเอง", "components": "V", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["ranger"], "dice": "1d10", "desc": "ครั้งถัดไปที่คุณยิงอาวุธระยะไกลโดนเป้าหมาย กระสุนจะแตกตัวเป็นห่าหนาม เป้าหมายและสิ่งมีชีวิตในระยะ 5 ฟุต รอบเป้าหมายต้องทอย DEX Save ไม่ผ่านโดนความเสียหาย Piercing 1d10"},
  "Healing Word": {"level": 1, "school": "Evocation", "action": "1 Bonus Action", "range": "60 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "druid"], "dice": "1d4", "desc": "เอ่ยคำศักดิ์สิทธิ์ฟื้นฟูสิ่งมีชีวิตที่มองเห็นในระยะ ฟื้นฟู HP เท่ากับ 1d4 + Spellcasting Ability Modifier"},
  "Hellish Rebuke": {"level": 1, "school": "Evocation", "action": "1 Reaction", "range": "60 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["warlock"], "dice": "2d10", "desc": "ร่ายสวนกลับทันทีเมื่อคุณถูกโจมตีโดยศัตรูในระยะ 60 ฟุต เปลวไฟนรกจะลุกท่วมศัตรู ต้องทอย DEX Save ไม่ผ่านโดนความเสียหายไฟ 2d10 (ผ่านโดนครึ่งเดียว)"},
  "Heroism": {"level": 1, "school": "Enchantment", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "paladin"], "dice": "", "desc": "แตะเพื่อนร่วมทีมให้เกิดความกล้าหาญ เป้าหมายจะไม่ติดสถานะหวาดกลัว (Immune to Frightened) และได้รับ Temporary HP เท่ากับค่าสถานะร่ายเวทย์ของคุณในตอนเริ่มทุกๆ เทิร์น"},
  "Hex": {"level": 1, "school": "Enchantment", "action": "1 Bonus Action", "range": "90 ฟุต", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["warlock"], "dice": "1d6", "desc": "สาปศัตรู 1 ตัว ทุกครั้งที่คุณโจมตีโดนเป้าหมายนี้ จะทำโบนัสความเสียหาย Necrotic เพิ่ม 1d6 และเลือก 1 ค่าสถานะให้เป้าหมายติด Disadvantage เวลาทอย Ability Check (ย้ายคำสาปได้เมื่อเป้าหมายตาย)"},
  "Hunter's Mark": {"level": 1, "school": "Divination", "action": "1 Bonus Action", "range": "90 ฟุต", "components": "V", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["ranger"], "dice": "1d6", "desc": "เล็งเป้าหมายเป็นผู้ถูกล่า ทุกครั้งที่คุณโจมตีด้วยอาวุธโดนเป้าหมายนี้ จะทำโบนัสความเสียหายเพิ่ม 1d6 และคุณได้ Advantage ในการแกะรอยหรือค้นหาเป้าหมายนี้"},
  "Identify": {"level": 1, "school": "Divination", "action": "1 นาที", "range": "สัมผัส", "components": "V, S, M (ไข่มุก 100 gp)", "duration": "ทันที", "ritual": true, "concentration": false, "classes": ["bard", "wizard"], "dice": "", "desc": "แตะไอเทมเวทมนตร์หรือสิ่งของเพื่อเรียนรู้คุณสมบัติ วิธีใช้งาน จำนวนชาร์จที่เหลือ หรือเวทมนตร์ที่กำลังส่งผลอยู่กับสิ่งนั้น"},
  "Inflict Wounds": {"level": 1, "school": "Necromancy", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "3d10", "desc": "แตะศัตรูเพื่อปล่อยพลังงานมืด (Melee Spell Attack) ทำความเสียหาย Necrotic สูงถึง 3d10"},
  "Jump": {"level": 1, "school": "Transmutation", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["druid", "ranger", "sorcerer", "wizard"], "dice": "", "desc": "แตะสิ่งมีชีวิต 1 ตัว ทำให้ระยะกระโดดของเป้าหมายเพิ่มขึ้นเป็น 3 เท่า"},
  "Longstrider": {"level": 1, "school": "Transmutation", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "druid", "ranger", "wizard"], "dice": "", "desc": "แตะสิ่งมีชีวิต 1 ตัว เพิ่มความเร็วในการเคลื่อนที่ (Speed) ให้เป้าหมายอีก 10 ฟุต"},
  "Mage Armor": {"level": 1, "school": "Abjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "8 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "แตะสิ่งมีชีวิตที่ไม่ได้สวมชุดเกราะ สร้างเกราะพลังงานทำให้ค่า AC พื้นฐานของเป้าหมายกลายเป็น 13 + DEX Modifier"},
  "Magic Missile": {"level": 1, "school": "Evocation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "3d4+3", "desc": "สร้างลูกศรพลังงานเวทย์ 3 ดอก พุ่งเข้าหาเป้าหมายที่มองเห็นโดยอัตโนมัติ (โดน 100% ไม่ต้องทอยโจมตี) ทำความเสียหาย Force ดอกละ 1d4 + 1"},
  "Protection from Evil and Good": {"level": 1, "school": "Abjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M (น้ำมนต์)", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric", "paladin", "warlock", "wizard"], "dice": "", "desc": "ปกป้องเป้าหมายจากสิ่งมีชีวิตประเภท Aberration, Celestial, Elemental, Fey, Fiend และ Undead (พวกมันติด Disadvantage เวลาโจมตีเป้าหมาย และไม่สามารถ Charm, Frighten หรือสิงสู่เป้าหมายได้)"},
  "Sanctuary": {"level": 1, "school": "Abjuration", "action": "1 Bonus Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "", "desc": "กางเกราะคุ้มครองเป้าหมาย ศัตรูที่จะโจมตีหรือร่ายเวทย์ทำร้ายเป้าหมายต้องทอย WIS Save ให้ผ่านก่อน หากไม่ผ่านต้องเปลี่ยนไปโจมตีตัวอื่นแทน (เวทย์จะหลุดทันทีหากผู้ได้รับเกราะทำการโจมตีหรือร่ายเวทย์ใส่ศัตรู)"},
  "Shield": {"level": 1, "school": "Abjuration", "action": "1 Reaction", "range": "ตัวเอง", "components": "V, S", "duration": "1 รอบ", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "ร่ายเมื่อคุณถูกโจมตีโดน หรือตกเป็นเป้าของเวทย์ Magic Missile คุณจะได้รับโบนัส +5 AC ทันที (รวมถึงการโจมตีที่เพิ่งเข้ามาด้วย) และไม่ได้รับความเสียหายจาก Magic Missile จนเริ่มเทิร์นถัดไปของคุณ"},
  "Shield of Faith": {"level": 1, "school": "Abjuration", "action": "1 Bonus Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric", "paladin"], "dice": "", "desc": "สร้างสนามพลังศักดิ์สิทธิ์ล้อมรอบเป้าหมาย 1 ตัว เพิ่มค่า AC ให้เป้าหมาย +2 ตลอดระยะเวลาของเวทย์"},
  "Silent Image": {"level": 1, "school": "Illusion", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "สร้างภาพลวงตาของวัตถุหรือสิ่งมีชีวิตขนาดไม่เกินลูกบาศก์ 15 ฟุต (ไม่มีเสียง/กลิ่น) สามารถใช้ Action สั่งให้ภาพเคลื่อนไหวได้สมจริง"},
  "Sleep": {"level": 1, "school": "Enchantment", "action": "1 Action", "range": "90 ฟุต", "components": "V, S, M", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "wizard"], "dice": "5d8", "desc": "กล่อมสิ่งมีชีวิตในรัศมี 20 ฟุต ให้หลับใหล ทอย 5d8 เพื่อดูผลรวม HP ของเป้าหมายที่จะหลับ โดยเริ่มนับจากตัวที่มี HP ปัจจุบันน้อยที่สุดขึ้นไป (ใช้กับ Undead และพวกที่ Immune to Charm ไม่ได้)"},
  "Speak with Animals": {"level": 1, "school": "Divination", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "10 นาที", "ritual": true, "concentration": false, "classes": ["bard", "druid", "ranger"], "dice": "", "desc": "สามารถพูดคุยและเข้าใจภาษากาย/เสียงของสัตว์ป่า (Beasts) ได้ตลอดระยะเวลาเวทย์"},
  "Tasha's Hideous Laughter": {"level": 1, "school": "Enchantment", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "wizard"], "dice": "", "desc": "ทำให้เป้าหมายขำอย่างบ้าคลั่ง ต้องทอย WIS Save ไม่ผ่านจะล้มลงนอนขำ (Prone และ Incapacitated) ลุกไม่ได้จนกว่าจะทอย Save ผ่านในตอนจบเทิร์นหรือเมื่อได้รับความเสียหาย"},
  "Thunderwave": {"level": 1, "school": "Evocation", "action": "1 Action", "range": "ตัวเอง (ลูกบาศก์ 15 ฟุต)", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "druid", "sorcerer", "wizard"], "dice": "2d8", "desc": "ปล่อยคลื่นเสียงอัดกระแทกรอบตัว ศัตรูในพื้นที่ต้องทอย CON Save ไม่ผ่านโดนความเสียหายเสียง (Thunder) 2d8 และถูกผลักกระเด็นออกไป 10 ฟุต (เกิดเสียงดังก้องไปไกล 300 ฟุต)"},
  "Witch Bolt": {"level": 1, "school": "Evocation", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "warlock", "wizard"], "dice": "1d12", "desc": "ยิงสายฟ้าเชื่อมโยงคุณกับเป้าหมาย (Ranged Spell Attack) ทำความเสียหายสายฟ้า 1d12 และในเทิร์นถัดๆ ไป คุณสามารถใช้ Action ช็อตความเสียหาย 1d12 ใส่เป้าหมายได้อัตโนมัติตราบใดที่ยังอยู่ในระยะ"},
  "Aid": {"level": 2, "school": "Abjuration", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "8 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["cleric", "paladin"], "dice": "", "desc": "อวยพรเพื่อนร่วมทีมสูงสุด 3 คน เพิ่มทั้ง HP สูงสุด (Max HP) และ HP ปัจจุบันให้คนละ 5 หน่วย เป็นเวลา 8 ชั่วโมง"},
  "Alter Self": {"level": 2, "school": "Transmutation", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "wizard"], "dice": "1d6+1", "desc": "เปลี่ยนแปลงร่างกายตัวเองจริง (ไม่ใช่ภาพลวงตา) เลือกได้ระหว่าง: หายใจใต้น้ำ+ว่ายน้ำเร็ว, เปลี่ยนรูปร่างหน้าตาตัวเอง หรือ งอกกรงเล็บ/เขี้ยวเป็นอาวุธธรรมชาติ (1d6 +1 โจมตีและเสียหาย)"},
  "Barkskin": {"level": 2, "school": "Transmutation", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["druid", "ranger"], "dice": "", "desc": "เปลี่ยนผิวหนังของเป้าหมายให้แข็งดั่งเปลือกไม้ ทำให้ค่า AC ของเป้าหมายไม่มีทางต่ำกว่า 16 ไม่ว่าจะใส่เกราะอะไรอยู่ก็ตาม"},
  "Blindness/Deafness": {"level": 2, "school": "Necromancy", "action": "1 Action", "range": "30 ฟุต", "components": "V", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "sorcerer", "wizard"], "dice": "", "desc": "สาปให้ศัตรูตาบอด (Blinded) หรือหูหนวก (Deafened) เป้าหมายต้องทอย CON Save (ไม่ต้องใช้ Concentration และทอยแก้ได้ทุกจบเทิร์น)"},
  "Blur": {"level": 2, "school": "Illusion", "action": "1 Action", "range": "ตัวเอง", "components": "V", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "ทำให้ร่างกายของคุณพร่ามัว ศัตรูที่โจมตีคุณโดยอาศัยการมองเห็นจะติด Disadvantage ในการทอยโจมตีทั้งหมด"},
  "Calm Emotions": {"level": 2, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "cleric"], "dice": "", "desc": "สยบอารมณ์สิ่งมีชีวิตในรัศมี 20 ฟุต (CHA Save) เลือกได้ว่าจะระงับอาการ Charmed/Frightened ชั่วคราว หรือทำให้ศัตรูหยุดความก้าวร้าวและเป็นกลางต่อกัน"},
  "Cloud of Daggers": {"level": 2, "school": "Conjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "4d4", "desc": "เสกพายุมีดสั้นหมุนวนในพื้นที่ลูกบาศก์ 5 ฟุต ใครก็ตามที่เดินเข้าไปหรือเริ่มเทิร์นในพื้นที่นี้จะได้รับความเสียหาย Slashing 4d4 ทันทีโดยไม่ต้องทอย Save"},
  "Crown of Madness": {"level": 2, "school": "Enchantment", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "สวมมงกุฎเหล็กบ้าคลั่งใส่ Humanoid 1 ตัว (WIS Save) ไม่ผ่านจะติดสถานะ Charmed และคุณสามารถบังคับให้มันโจมตีเพื่อนของมันที่อยู่ประชิดตัวในตอนเริ่มเทิร์นของมันได้"},
  "Darkness": {"level": 2, "school": "Evocation", "action": "1 Action", "range": "60 ฟุต", "components": "V, M", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "warlock", "wizard"], "dice": "", "desc": "สร้างความมืดมิดเวทมนตร์รัศมีทรงกลม 15 ฟุต แม้แต่ความสามารถมองในที่มืด (Darkvision) ปกติก็มองไม่เห็น และแสงไฟธรรมดาหรือเวทย์แสงระดับ 2 ลงไปไม่สามารถส่องสว่างได้"},
  "Darkvision": {"level": 2, "school": "Transmutation", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "8 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["druid", "ranger", "sorcerer", "wizard"], "dice": "", "desc": "แตะสิ่งมีชีวิต 1 ตัว มอบความสามารถในการมองเห็นในที่มืด (Darkvision) ในระยะ 60 ฟุต"},
  "Detect Thoughts": {"level": 2, "school": "Divination", "action": "1 Action", "range": "ตัวเอง", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "อ่านความคิดผิวเผินของสิ่งมีชีวิตในระยะ 30 ฟุต หรือเพ่งเจาะลึกเข้าไปในจิตใจ (เป้าหมายต้องทอย WIS Save หากไม่ผ่านจะรู้ถึงเหตุผล อารมณ์ หรือสิ่งที่ซ่อนอยู่ในใจ)"},
  "Enhance Ability": {"level": 2, "school": "Transmutation", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["bard", "cleric", "druid", "sorcerer"], "dice": "", "desc": "มอบพลังสัตว์ป่าให้เป้าหมาย เลือก 1 ค่าสถานะ (STR, DEX, CON, INT, WIS, CHA) เป้าหมายจะได้รับ Advantage ในการทอย Ability Check ของค่าสถานะนั้นๆ พร้อมความสามารถเสริม"},
  "Enlarge/Reduce": {"level": 2, "school": "Transmutation", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "wizard"], "dice": "1d4", "desc": "ขยายร่างเป้าหมายให้ใหญ่ขึ้น 1 ขนาด (ได้ Advantage STR และตีแรงขึ้น +1d4) หรือย่อส่วนให้เล็กลง 1 ขนาด (ติด Disadvantage STR และตีเบาลง -1d4)"},
  "Flaming Sphere": {"level": 2, "school": "Conjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["druid", "wizard"], "dice": "2d6", "desc": "เสกลูกบอลไฟขนาด 5 ฟุต ศัตรูที่จบเทิร์นในระยะ 5 ฟุต รอบลูกไฟต้องทอย DEX Save ไม่ผ่านโดนความเสียหายไฟ 2d6 และคุณใช้ Bonus Action กลิ้งลูกไฟไปชนศัตรูได้เรื่อยๆ"},
  "Hold Person": {"level": 2, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "ตรึงร่างเผ่าพันธุ์คล้ายมนุษย์ (Humanoid) 1 ตัว ต้องทอย WIS Save หากไม่ผ่านจะติดสถานะอัมพาต (Paralyzed - ขยับไม่ได้และโดนโจมตีระยะประชิดเป็น Critical ทันที)"},
  "Invisibility": {"level": 2, "school": "Illusion", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "แตะสิ่งมีชีวิต 1 ตัว ให้ล่องหนหายตัวไป (Invisible) เวทย์จะสลายทันทีหากเป้าหมายทำการโจมตีหรือร่ายเวทมนตร์"},
  "Knock": {"level": 2, "school": "Transmutation", "action": "1 Action", "range": "60 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "สะเดาะกุญแจ กลอนประตู โซ่ตรวน หรือปลดเวทย์ Arcane Lock ชั่วคราว แต่จะมีเสียงเคาะดังสนั่นไปไกลถึง 300 ฟุต"},
  "Lesser Restoration": {"level": 2, "school": "Abjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "druid", "paladin", "ranger"], "dice": "", "desc": "แตะสิ่งมีชีวิต 1 ตัว เพื่อรักษาโรคภัย 1 ชนิด หรือลบล้างสถานะผิดปกติ 1 อย่างจาก: Blinded (ตาบอด), Deafened (หูหนวก), Paralyzed (อัมพาต) หรือ Poisoned (ติดพิษ)"},
  "Levitate": {"level": 2, "school": "Transmutation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "ยกสิ่งมีชีวิตหรือวัตถุหนักไม่เกิน 500 ปอนด์ให้ลอยขึ้นในแนวดิ่งสูงสุด 20 ฟุต (หากใช้ใส่ศัตรู ต้องทอย CON Save)"},
  "Mirror Image": {"level": 2, "school": "Illusion", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["sorcerer", "warlock", "wizard"], "dice": "", "desc": "สร้างร่างแยกภาพลวงตาของตัวเองขึ้นมา 3 ร่าง (ไม่ต้องใช้ Concentration) ทุกครั้งที่ถูกโจมตี มีโอกาสที่ศัตรูจะโจมตีไปโดนร่างแยกแทนและทำให้ร่างแยกสลายไปทีละร่าง"},
  "Misty Step": {"level": 2, "school": "Conjuration", "action": "1 Bonus Action", "range": "ตัวเอง", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "warlock", "wizard"], "dice": "", "desc": "ร่างกายสลายเป็นหมอกสีเงินและวาร์ป (Teleport) ไปยังพื้นที่ว่างที่คุณมองเห็นในระยะ 30 ฟุต ทันที"},
  "Moonbeam": {"level": 2, "school": "Evocation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["druid"], "dice": "2d10", "desc": "เรียกลำแสงจันทร์รัศมี 5 ฟุต สูง 40 ฟุต ศัตรูในพื้นที่ต้องทอย CON Save ไม่ผ่านโดนความเสียหาย Radiant 2d10 และหากเป็นพวกแปลงร่าง (Shapechanger) จะติด Disadvantage และคืนร่างเดิม"},
  "Pass without Trace": {"level": 2, "school": "Abjuration", "action": "1 Action", "range": "ตัวเอง", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["druid", "ranger"], "dice": "", "desc": "แผ่ออร่าเงาอำพราง คุณและเพื่อนร่วมทีมในรัศมี 30 ฟุต ได้รับโบนัส +10 ในการทอย DEX (Stealth) Check และไม่ทิ้งร่องรอยให้แกะรอยตามได้"},
  "Prayer of Healing": {"level": 2, "school": "Evocation", "action": "10 นาที", "range": "30 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "2d8", "desc": "สวดภาวนาฟื้นฟูพลังชีวิตให้เพื่อนร่วมทีมสูงสุด 6 คน คนละ 2d8 + Spellcasting Ability Modifier (เหมาะสำหรับใช้พักฟื้นหลังจบการต่อสู้)"},
  "Scorching Ray": {"level": 2, "school": "Evocation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "6d6", "desc": "ยิงลำแสงไฟออกไป 3 สาย เลือกยิงใส่เป้าหมายเดียวหรือแยกเป้าหมายก็ได้ ทอย Ranged Spell Attack แยกแต่ละสาย สายที่โดนทำความเสียหายไฟ 2d6"},
  "Shatter": {"level": 2, "school": "Evocation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "3d8", "desc": "สร้างคลื่นเสียงกัมปนาทในรัศมีทรงกลม 10 ฟุต เป้าหมายต้องทอย CON Save ไม่ผ่านโดนความเสียหายเสียง (Thunder) 3d8 (สิ่งมีชีวิตที่เป็นหิน/แร่ธาตุ/โลหะ จะติด Disadvantage ในการทอย Save)"},
  "Silence": {"level": 2, "school": "Illusion", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "10 นาที (C)", "ritual": true, "concentration": true, "classes": ["bard", "cleric", "ranger"], "dice": "", "desc": "สร้างโดมไร้เสียงรัศมี 20 ฟุต ไม่มีเสียงใดเล็ดลอดเข้าออกได้ ป้องกันความเสียหาย Thunder ทั้งหมด และไม่สามารถร่ายเวทมนตร์ที่ต้องใช้เสียงพูด (Verbal Component) ในพื้นที่นี้ได้เลย"},
  "Spiritual Weapon": {"level": 2, "school": "Evocation", "action": "1 Bonus Action", "range": "60 ฟุต", "components": "V, S", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "1d8", "desc": "เสกอาวุธพลังงานลอยได้ (ไม่ต้องใช้ Concentration) โจมตีศัตรูทันทีที่ร่าย (Melee Spell Attack) ทำความเสียหาย Force 1d8 + Spellcasting Modifier และใช้ Bonus Action สั่งเคลื่อนที่และโจมตีได้ทุกเทิร์น"},
  "Suggestion": {"level": 2, "school": "Enchantment", "action": "1 Action", "range": "30 ฟุต", "components": "V, M", "duration": "8 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "ชี้นำจิตใจเป้าหมายด้วยประโยคที่ฟังดูสมเหตุสมผล (ไม่เป็นการฆ่าตัวตาย) เป้าหมายต้องทอย WIS Save หากไม่ผ่านจะทำตามคำแนะนำนั้นอย่างสุดความสามารถ"},
  "Web": {"level": 2, "school": "Conjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "เสกใยแมงมุมเหนียวหนึบในพื้นที่ลูกบาศก์ 20 ฟุต ศัตรูในพื้นที่ต้องทอย DEX Save ไม่ผ่านจะติดสถานะถูกมัด (Restrained) และใยแมงมุมนี้สามารถจุดไฟเผาได้"},
  "Zone of Truth": {"level": 2, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "10 นาที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "paladin"], "dice": "", "desc": "สร้างเขตแห่งความจริงรัศมี 15 ฟุต สิ่งมีชีวิตในพื้นที่ต้องทอย CHA Save หากไม่ผ่านจะไม่สามารถพูดโกหกโดยเจตนาได้เลย (แต่สามารถเลี่ยงบาลีหรือเงียบไม่ตอบได้)"},
  "Animate Dead": {"level": 3, "school": "Necromancy", "action": "1 นาที", "range": "10 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "wizard"], "dice": "", "desc": "ปลุกโครงกระดูกหรือศพมนุษย์ให้กลายเป็น Skeleton หรือ Zombie รับใช้คุณเป็นเวลา 24 ชั่วโมง (ต้องร่ายซ้ำทุกวันเพื่อรักษาการควบคุม)"},
  "Bestow Curse": {"level": 3, "school": "Necromancy", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "cleric", "wizard"], "dice": "1d8", "desc": "แตะศัตรูเพื่อสาปแช่ง (WIS Save) เลือกผลของคำสาปได้ เช่น ติด Disadvantage ในค่าสถานะหนึ่ง, โจมตีคุณติด Disadvantage, มีโอกาสเสีย Action ฟรีทุกเทิร์น หรือโดนความเสียหาย Necrotic เพิ่ม 1d8 จากคุณ"},
  "Blink": {"level": 3, "school": "Transmutation", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "1 นาที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "1d20", "desc": "ตอนจบเทิร์นของคุณ ทอย 1d20 หากได้ 11 ขึ้นไป คุณจะวาร์ปหายไปอยู่ในมิติ Ethereal Plane (ไม่มีใครตีคุณได้) และจะวาร์ปกลับมาในตอนเริ่มเทิร์นถัดไป"},
  "Call Lightning": {"level": 3, "school": "Conjuration", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["druid"], "dice": "3d10", "desc": "เรียกเมฆพายุและฟาดสายฟ้าลงมาในรัศมี 5 ฟุต เป้าหมายต้องทอย DEX Save ไม่ผ่านโดนความเสียหายสายฟ้า 3d10 (หากเกิดพายุอยู่แล้วจะแรงขึ้นเป็น 4d10) และใช้ Action ผ่าซ้ำได้ทุกเทิร์น"},
  "Clairvoyance": {"level": 3, "school": "Divination", "action": "10 นาที", "range": "5,280 ฟุต (1 ไมล์)", "components": "V, S, M (100 gp)", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "cleric", "sorcerer", "wizard"], "dice": "", "desc": "สร้างลูกแก้วเซนเซอร์ล่องหนในสถานที่ที่คุณคุ้นเคยหรือมองเห็นได้ เพื่อแอบดูภาพหรือแอบฟังเสียงจากระยะไกลถึง 5,280 ฟุต (1 ไมล์)"},
  "Conjure Animals": {"level": 3, "school": "Conjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["druid", "ranger"], "dice": "", "desc": "อัญเชิญวิญญาณธรรมชาติในร่างสัตว์ป่า (Beasts) มาช่วยต่อสู้ เลือกจำนวนตามระดับความเก่ง (เช่น CR 2 จำนวน 1 ตัว หรือ CR 1/4 จำนวน 8 ตัว)"},
  "Counterspell": {"level": 3, "school": "Abjuration", "action": "1 Reaction", "range": "60 ฟุต", "components": "S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "warlock", "wizard"], "dice": "", "desc": "ร่ายขัดจังหวะทันทีเมื่อเห็นศัตรูกำลังร่ายเวทย์ในระยะ 60 ฟุต หากเวทย์ของศัตรูเป็นระดับ 3 หรือต่ำกว่า เวทย์นั้นจะล้มเหลวทันที (หากสูงกว่าระดับ 3 ต้องทอย Ability Check สู้กับ DC 10 + ระดับเวทย์นั้น)"},
  "Dispel Magic": {"level": 3, "school": "Abjuration", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "druid", "paladin", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "สลายผลของเวทมนตร์บนตัวสิ่งมีชีวิต วัตถุ หรือพื้นที่ เวทมนตร์ระดับ 3 หรือต่ำกว่าจะสลายไปทันที (ระดับ 4 ขึ้นไปต้องทอย Ability Check สู้กับ DC 10 + ระดับเวทย์)"},
  "Fear": {"level": 3, "school": "Illusion", "action": "1 Action", "range": "ตัวเอง (กรวย 30 ฟุต)", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "ฉายภาพสิ่งที่ศัตรูกลัวที่สุดในพื้นที่กรวย 30 ฟุต เป้าหมายต้องทอย WIS Save ไม่ผ่านจะติดสถานะ Frightened ต้องทิ้งของในมือและวิ่งหนีสุดชีวิตทุกเทิร์น"},
  "Fireball": {"level": 3, "school": "Evocation", "action": "1 Action", "range": "150 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "8d6", "desc": "เวทย์ระเบิดเพลิงยอดฮิต ยิงลูกไฟไประเบิดในรัศมีทรงกลม 20 ฟุต ทุกสิ่งมีชีวิตในพื้นที่ต้องทอย DEX Save ไม่ผ่านโดนความเสียหายไฟสูงถึง 8d6 (ผ่านโดนครึ่งเดียว)"},
  "Fly": {"level": 3, "school": "Transmutation", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "warlock", "wizard"], "dice": "", "desc": "แตะสิ่งมีชีวิต 1 ตัว มอบความเร็วในการบิน (Flying Speed) 60 ฟุต ให้แก่เป้าหมาย"},
  "Haste": {"level": 3, "school": "Transmutation", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "เร่งความเร็วเป้าหมาย ความเร็วเคลื่อนที่เพิ่มเป็น 2 เท่า, ได้ +2 AC, ได้ Advantage DEX Save และได้เพิ่ม 1 Action พิเศษในแต่ละเทิร์น (แต่เมื่อเวทย์หมด เป้าหมายจะเหนื่อยล้าขยับไม่ได้ไป 1 รอบ)"},
  "Hypnotic Pattern": {"level": 3, "school": "Illusion", "action": "1 Action", "range": "120 ฟุต", "components": "S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "สร้างลวดลายสีสันสะกดจิตในพื้นที่ลูกบาศก์ 30 ฟุต ผู้ที่มองเห็นต้องทอย WIS Save ไม่ผ่านจะติดสถานะ Charmed และยืนนิ่งทำอะไรไม่ได้ (Incapacitated, ความเร็วเหลือ 0) จนกว่าจะโดนตีหรือมีคนมาเขย่าตัวปลุก"},
  "Leomund's Tiny Hut": {"level": 3, "school": "Evocation", "action": "1 นาที", "range": "ตัวเอง (โดมรัศมี 10 ฟุต)", "components": "V, S, M", "duration": "8 ชั่วโมง", "ritual": true, "concentration": false, "classes": ["bard", "wizard"], "dice": "", "desc": "สร้างโดมพลังงานป้องกันขนาด 10 ฟุต รอบตัว ปลอดภัยจากสภาพอากาศ ศัตรูและเวทมนตร์จากภายนอกไม่สามารถทะลุเข้ามาได้เลย เหมาะสำหรับการพักผ่อนยาว (Long Rest)"},
  "Lightning Bolt": {"level": 3, "school": "Evocation", "action": "1 Action", "range": "ตัวเอง (เส้นตรง 100 ฟุต)", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "8d6", "desc": "ยิงสายฟ้าฟาดเป็นเส้นตรงยาว 100 ฟุต กว้าง 5 ฟุต ศัตรูทุกตัวในแนวเส้นตรงต้องทอย DEX Save ไม่ผ่านโดนความเสียหายสายฟ้า 8d6 (ผ่านโดนครึ่งเดียว)"},
  "Major Image": {"level": 3, "school": "Illusion", "action": "1 Action", "range": "120 ฟุต", "components": "V, S, M", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "สร้างภาพลวงตาขนาดใหญ่ไม่เกินลูกบาศก์ 20 ฟุต ที่มีความสมจริงครบทั้งภาพ เสียง กลิ่น และอุณหภูมิ"},
  "Mass Healing Word": {"level": 3, "school": "Evocation", "action": "1 Bonus Action", "range": "60 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "1d4", "desc": "เอ่ยถ้อยคำศักดิ์สิทธิ์ฟื้นฟูเพื่อนร่วมทีมสูงสุด 6 คนในระยะ พร้อมกัน คนละ 1d4 + Spellcasting Ability Modifier"},
  "Remove Curse": {"level": 3, "school": "Abjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "paladin", "warlock", "wizard"], "dice": "", "desc": "แตะสิ่งมีชีวิตหรือวัตถุ เพื่อสลายคำสาปทั้งหมดที่ส่งผลต่อสิ่งมีชีวิตนั้น หรือปลดพันธะจากไอเทมต้องสาปให้ถอดออกได้"},
  "Revivify": {"level": 3, "school": "Necromancy", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M (เพชร 300 gp - ใช้แล้วหมดไป)", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "paladin"], "dice": "", "desc": "ชุบชีวิตสิ่งมีชีวิตที่เพิ่งตายไปไม่เกิน 1 นาที ให้ฟื้นคืนชีพขึ้นมาพร้อม 1 HP"},
  "Sending": {"level": 3, "school": "Evocation", "action": "1 Action", "range": "ไม่จำกัด", "components": "V, S, M", "duration": "1 รอบ", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "wizard"], "dice": "", "desc": "ส่งข้อความทางจิตยาวไม่เกิน 25 คำ ไปยังคนที่คุณรู้จัก ไม่ว่าจะอยู่ไกลแค่ไหนหรืออยู่คนละมิติก็ตาม และผู้รับสามารถตอบกลับได้ 25 คำทันที"},
  "Slow": {"level": 3, "school": "Transmutation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "บิดเบือนเวลาทำให้ศัตรูสูงสุด 6 ตัวช้าลง (WIS Save) ไม่ผ่านจะถูกลดความเร็วลงครึ่งหนึ่ง, -2 AC และ DEX Save, ใช้ Reaction ไม่ได้, เลือกใช้ได้แค่ Action หรือ Bonus Action อย่างใดอย่างหนึ่ง และโจมตีได้แค่ครั้งเดียวต่อเทิร์น"},
  "Spirit Guardians": {"level": 3, "school": "Conjuration", "action": "1 Action", "range": "ตัวเอง (รัศมี 15 ฟุต)", "components": "V, S, M", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric"], "dice": "3d8", "desc": "เรียกวิญญาณผู้พิทักษ์บินวนรอบตัวในรัศมี 15 ฟุต ลดความเร็วศัตรูในพื้นที่ลงครึ่งหนึ่ง และศัตรูต้องทอย WIS Save ไม่ผ่านโดนความเสียหาย Radiant หรือ Necrotic 3d8 ทุกเทิร์น"},
  "Vampiric Touch": {"level": 3, "school": "Necromancy", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["warlock", "wizard"], "dice": "3d6", "desc": "มืออาบเงามืดโจมตีระยะประชิด (Melee Spell Attack) ทำความเสียหาย Necrotic 3d6 และคุณจะได้ฟื้นฟู HP เท่ากับครึ่งหนึ่งของความเสียหายที่ทำได้"},
  "Arcane Eye": {"level": 4, "school": "Divination", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["wizard"], "dice": "", "desc": "สร้างดวงตาเวทมนตร์ล่องหนที่มองในที่มืดได้ และสั่งให้ลอยไปสำรวจพื้นที่ต่างๆ ได้ด้วยความเร็ว 30 ฟุตต่อรอบ (ลอดช่องแคบขนาด 1 นิ้วได้)"},
  "Banishment": {"level": 4, "school": "Abjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric", "paladin", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "เนรเทศเป้าหมายไปอยู่อีกมิติหนึ่ง (CHA Save) หากเป็นสิ่งมีชีวิตจากต่างมิติและคุณครองสมาธิครบ 1 นาที มันจะถูกส่งกลับมิติบ้านเกิดไปอย่างถาวร"},
  "Blight": {"level": 4, "school": "Necromancy", "action": "1 Action", "range": "30 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["druid", "sorcerer", "warlock", "wizard"], "dice": "8d8", "desc": "สูบความชื้นและพลังชีวิตออกจากเป้าหมาย ต้องทอย CON Save ไม่ผ่านโดนความเสียหาย Necrotic 8d8 (หากเป็นมอนสเตอร์ประเภทพืชจะติด Disadvantage และโดนความเสียหายเต็มจำนวนสูงสุดทันที)"},
  "Confusion": {"level": 4, "school": "Enchantment", "action": "1 Action", "range": "90 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "druid", "sorcerer", "wizard"], "dice": "", "desc": "ทำให้ศัตรูในรัศมี 10 ฟุต สับสนมึนงง (WIS Save) ทุกเทิร์นต้องทอย d10 เพื่อดูว่าจะเดินมั่วซั่ว ยืนนิ่ง หรือหันไปโจมตีสิ่งมีชีวิตที่อยู่ใกล้ที่สุด"},
  "Death Ward": {"level": 4, "school": "Abjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "8 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["cleric", "paladin"], "dice": "", "desc": "มอบพรป้องกันความตาย หากเป้าหมายได้รับความเสียหายจน HP ลดเหลือ 0 จะเปลี่ยนเป็นเหลือ 1 HP แทนทันที (หรือป้องกันผลของเวทย์สั่งตายทันทีได้ 1 ครั้ง)"},
  "Dimension Door": {"level": 4, "school": "Conjuration", "action": "1 Action", "range": "500 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "เปิดประตูมิติวาร์ปตัวเองและเพื่อนอีก 1 คน ไปยังจุดใดก็ได้ในระยะ 500 ฟุต แม้จะมองไม่เห็นจุดหมายก็ตาม (เพียงระบุทิศทางและระยะทาง)"},
  "Evard's Black Tentacles": {"level": 4, "school": "Conjuration", "action": "1 Action", "range": "90 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["wizard"], "dice": "3d6", "desc": "เรียกหนวดสีดำยั้วเยี้ยในพื้นที่สี่เหลี่ยม 20 ฟุต ศัตรูในพื้นที่ต้องทอย DEX Save ไม่ผ่านโดนความเสียหาย Bludgeoning 3d6 และติดสถานะถูกมัด (Restrained)"},
  "Freedom of Movement": {"level": 4, "school": "Abjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "druid", "ranger"], "dice": "", "desc": "ทำให้เป้าหมายเคลื่อนที่ผ่านพื้นที่วิบากได้โดยไม่ถูกลดความเร็ว ไม่ติดสถานะ Paralyzed หรือ Restrained จากเวทมนตร์ และสลัดหลุดจากการถูกจับล็อค (Grapple) ได้ง่ายดาย"},
  "Greater Invisibility": {"level": 4, "school": "Illusion", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "ทำให้เป้าหมายล่องหนหายตัว (Invisible) โดยที่แม้เป้าหมายจะทำการโจมตีหรือร่ายเวทมนตร์ใส่ศัตรู เวทย์ล่องหนนี้ก็จะไม่คลายออก!"},
  "Ice Storm": {"level": 4, "school": "Evocation", "action": "1 Action", "range": "300 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["druid", "sorcerer", "wizard"], "dice": "2d8", "desc": "เรียกพายุลูกเห็บยักษ์ถล่มในรัศมี 20 ฟุต ศัตรูต้องทอย DEX Save ไม่ผ่านโดนความเสียหาย Bludgeoning 2d8 และ Cold 4d6 พร้อมทำให้พื้นที่กลายเป็นน้ำแข็งลื่น 1 รอบ"},
  "Polymorph": {"level": 4, "school": "Transmutation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["bard", "druid", "sorcerer", "wizard"], "dice": "", "desc": "สาปสิ่งมีชีวิตให้กลายร่างเป็นสัตว์ป่า (Beast) ที่มีระดับ CR ไม่เกินเลเวลของเป้าหมาย (เช่น เสกศัตรูเป็นเต่า/แกะ หรือเสกเพื่อนที่ใกล้ตายให้เป็น T-Rex เลือดเต็มหลอด!)"},
  "Wall of Fire": {"level": 4, "school": "Evocation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["druid", "sorcerer", "wizard"], "dice": "5d8", "desc": "สร้างกำแพงเพลิงยาวสูงสุด 60 ฟุต สูง 20 ฟุต (หรือเป็นวงกลม) แผ่ความร้อนออกด้านหนึ่ง ทำความเสียหายไฟ 5d8 แก่ศัตรูที่เดินทะลุหรืออยู่ใกล้ด้านที่ร้อน"},
  "Animate Objects": {"level": 5, "school": "Transmutation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "เสกสิ่งของไม่มีชีวิตสูงสุด 10 ชิ้นให้มีชีวิตขึ้นมาและสั่งการด้วย Bonus Action ให้บินไปรุมโจมตีศัตรูได้"},
  "Cone of Cold": {"level": 5, "school": "Evocation", "action": "1 Action", "range": "ตัวเอง (กรวย 60 ฟุต)", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "8d8", "desc": "พ่นไอเย็นยะเยือกเป็นรูปกรวยขนาดใหญ่ 60 ฟุต ศัตรูในพื้นที่ต้องทอย CON Save ไม่ผ่านโดนความเสียหายน้ำแข็ง (Cold) 8d8 (ตัวที่ตายจากเวทย์นี้จะกลายเป็นรูปปั้นน้ำแข็ง)"},
  "Contagion": {"level": 5, "school": "Necromancy", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "7 วัน", "ritual": false, "concentration": false, "classes": ["cleric", "druid"], "dice": "", "desc": "แตะศัตรูเพื่อแพร่โรคร้ายแรง (Melee Spell Attack) เป้าหมายติดสถานะ Poisoned และหากทอย CON Save ไม่ผ่านครบ 3 ครั้ง จะติดโรคร้ายแรงยาวนานถึง 7 วัน"},
  "Dominate Person": {"level": 5, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "ควบคุมจิตใจ Humanoid 1 ตัว (WIS Save) สามารถสั่งการผ่านทางจิตหรือเข้าควบคุมร่างกายเป้าหมายโดยตรงได้"},
  "Flame Strike": {"level": 5, "school": "Evocation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "8d6", "desc": "เรียกเสาเพลิงสวรรค์ผ่าลงมาในรัศมี 10 ฟุต สูง 40 ฟุต ศัตรูต้องทอย DEX Save ไม่ผ่านโดนความเสียหายไฟ (Fire) 4d6 และความเสียหายศักดิ์สิทธิ์ (Radiant) อีก 4d6"},
  "Greater Restoration": {"level": 5, "school": "Abjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M (ผงเพชร 100 gp)", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "druid"], "dice": "", "desc": "ชำระล้างขั้นสูง ลบล้างอาการเหนื่อยล้า (Exhaustion) 1 ระดับ, แก้คำสาป, แก้อาการกลายเป็นหิน (Petrified) หรือฟื้นฟูค่าสถานะ/Max HP ที่ถูกลดทอนลงไป"},
  "Hold Monster": {"level": 5, "school": "Enchantment", "action": "1 Action", "range": "90 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "ตรึงร่างสิ่งมีชีวิตทุกประเภท (ยกเว้น Undead) ให้ติดสถานะอัมพาต (Paralyzed) หากทอย WIS Save ไม่ผ่าน"},
  "Mass Cure Wounds": {"level": 5, "school": "Evocation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "druid"], "dice": "3d8", "desc": "คลื่นพลังรักษาฟื้นฟูสิ่งมีชีวิตสูงสุด 6 ตัวในรัศมี 30 ฟุต ให้ได้รับ HP คืนคนละ 3d8 + Spellcasting Ability Modifier"},
  "Raise Dead": {"level": 5, "school": "Necromancy", "action": "1 ชั่วโมง", "range": "สัมผัส", "components": "V, S, M (เพชร 500 gp)", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "paladin"], "dice": "", "desc": "ชุบชีวิตผู้ที่เสียชีวิตไปแล้วไม่เกิน 10 วัน ให้ฟื้นคืนชีพขึ้นมาพร้อม 1 HP (รักษาพิษและโรคทั่วไป แต่ไม่งอกอวัยวะที่ขาดหายไป)"},
  "Scrying": {"level": 5, "school": "Divination", "action": "10 นาที", "range": "ตัวเอง", "components": "V, S, M (ลูกแก้ว/กระจก 1,000 gp)", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "cleric", "druid", "warlock", "wizard"], "dice": "", "desc": "ส่องดูและฟังเสียงสิ่งมีชีวิตหรือสถานที่ที่อยู่ในมิติเดียวกันแบบเรียลไทม์ (หากส่องสิ่งมีชีวิต เป้าหมายต้องทอย WIS Save)"},
  "Telekinesis": {"level": 5, "school": "Transmutation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "ใช้พลังจิตยกและเคลื่อนย้ายวัตถุหนักไม่เกิน 1,000 ปอนด์ หรือใช้ตรึงร่างสิ่งมีชีวิตขนาด Huge หรือเล็กกว่าให้อยู่กลางอากาศ"},
  "Wall of Force": {"level": 5, "school": "Evocation", "action": "1 Action", "range": "120 ฟุต", "components": "V, S, M", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["wizard"], "dice": "", "desc": "สร้างกำแพงหรือโดมพลังงานล่องหนที่ไม่สามารถถูกทำลายได้ด้วยความเสียหายใดๆ และล้างด้วย Dispel Magic ไม่ได้ (ทำลายได้ด้วยเวทย์ Disintegrate เท่านั้น)"},
  "Chain Lightning": {"level": 6, "school": "Evocation", "action": "1 Action", "range": "150 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "10d8", "desc": "ฟาดสายฟ้าใส่เป้าหมายหลัก แล้วชิ่งต่อไปหาศัตรูอีกสูงสุด 3 ตัวในระยะ 30 ฟุต ทุกตัวต้องทอย DEX Save ไม่ผ่านโดนความเสียหายสายฟ้าตัวละ 10d8!"},
  "Disintegrate": {"level": 6, "school": "Transmutation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "10d6+40", "desc": "ยิงลำแสงสีเขียวสลายสสาร เป้าหมายต้องทอย DEX Save ไม่ผ่านจะโดนความเสียหาย Force 10d6 + 40 และหาก HP ลดเหลือ 0 ร่างกายจะสลายกลายเป็นผุยผงทันที"},
  "Eyebite": {"level": 6, "school": "Necromancy", "action": "1 Action", "range": "ตัวเอง", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "ดวงตาของคุณกลายเป็นความว่างเปล่าสีดำ ทุกเทิร์นสามารถจ้องมองศัตรู (WIS Save) เพื่อสั่งให้: หลับใหล (Asleep), ตื่นตระหนกวิ่งหนี (Panicked) หรือ ล้มป่วยอ่อนแรง (Sickened)"},
  "Globe of Invulnerability": {"level": 6, "school": "Abjuration", "action": "1 Action", "range": "ตัวเอง (รัศมี 10 ฟุต)", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "กางบาเรียรัศมี 10 ฟุต รอบตัว เวทมนตร์ระดับ 5 หรือต่ำกว่าที่ร่ายมาจากนอกโดมจะไม่สามารถส่งผลต่อสิ่งใดๆ ที่อยู่ภายในโดมนี้ได้เลย"},
  "Harm": {"level": 6, "school": "Necromancy", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "14d6", "desc": "ปล่อยโรคร้ายกัดกินเป้าหมาย ต้องทอย CON Save ไม่ผ่านโดนความเสียหาย Necrotic 14d6 และลด Max HP ของเป้าหมายลงเท่ากับความเสียหายที่ได้รับ (แต่จะไม่ลดต่ำกว่า 1 HP)"},
  "Heal": {"level": 6, "school": "Evocation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "druid"], "dice": "", "desc": "ฟื้นฟูพลังชีวิตให้เป้าหมาย 70 HP ทันที พร้อมรักษาอาการตาบอด หูหนวก และโรคภัยทั้งหมดบนตัวเป้าหมาย"},
  "Heroes' Feast": {"level": 6, "school": "Conjuration", "action": "10 นาที", "range": "30 ฟุต", "components": "V, S, M (ชามอัญมณี 1,000 gp)", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "druid"], "dice": "2d10", "desc": "เสกงานเลี้ยงอาหารเลิศรสสำหรับผู้ร่วมโต๊ะสูงสุด 12 คน เมื่อกินเสร็จ (ใช้เวลา 1 ชม.) จะรักษาโรคและพิษทั้งหมด, Immune ต่อพิษและอาการหวาดกลัว, ได้ Advantage WIS Save และเพิ่ม Max HP 2d10 เป็นเวลา 24 ชั่วโมง"},
  "Mass Suggestion": {"level": 6, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V, M", "duration": "24 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "ชี้นำจิตใจสิ่งมีชีวิตพร้อมกันสูงสุด 12 ตัว (WIS Save) ให้ทำตามคำสั่งที่สมเหตุสมผลเป็นเวลา 24 ชั่วโมง โดยไม่ต้องใช้สมาธิ (No Concentration)"},
  "Sunbeam": {"level": 6, "school": "Evocation", "action": "1 Action", "range": "ตัวเอง (เส้นตรง 60 ฟุต)", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["druid", "sorcerer", "wizard"], "dice": "6d8", "desc": "ยิงลำแสงอาทิตย์เจิดจ้าเป็นเส้นตรง 60 ฟุต กว้าง 5 ฟุต ศัตรูต้องทอย CON Save (Undead และ Ooze ติด Disadvantage) ไม่ผ่านโดนความเสียหาย Radiant 6d8 และตาบอด (ยิงซ้ำได้ทุกเทิร์น)"},
  "True Seeing": {"level": 6, "school": "Divination", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M (25 gp)", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "มอบดวงตาแห่งความจริง (Truesight) ระยะ 120 ฟุต มองทะลุความมืดเวทมนตร์ มองเห็นภาพลวงตา เห็นร่างจริงของพวกแปลงร่าง และมองเห็นสิ่งมีชีวิตที่ล่องหนหรืออยู่ในมิติ Ethereal"},
  "Finger of Death": {"level": 7, "school": "Necromancy", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "warlock", "wizard"], "dice": "7d8+30", "desc": "ชี้นิ้วส่งพลังงานความตายทะลวงเป้าหมาย ต้องทอย CON Save ไม่ผ่านโดนความเสียหาย Necrotic 7d8 + 30 หาก Humanoid ตายด้วยเวทย์นี้ จะลุกขึ้นมาเป็น Zombie รับใช้คุณอย่างถาวร"},
  "Fire Storm": {"level": 7, "school": "Evocation", "action": "1 Action", "range": "150 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "druid", "sorcerer"], "dice": "7d10", "desc": "สร้างพายุเพลิงขนาดลูกบาศก์ 10 ฟุต จำนวน 10 ลูกเรียงต่อกันตามใจชอบ ศัตรูในพื้นที่ต้องทอย DEX Save ไม่ผ่านโดนความเสียหายไฟ 7d10"},
  "Forcecage": {"level": 7, "school": "Evocation", "action": "1 Action", "range": "100 ฟุต", "components": "V, S, M (ผงทับทิม 1,500 gp)", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "warlock", "wizard"], "dice": "", "desc": "สร้างกรงหรือกล่องพลังงานขนาดสูงสุด 20 ฟุต ขังศัตรูทันทีโดยไม่ต้องทอย Save ไม่ต้องใช้ Concentration ทำลายไม่ได้ และหากจะวาร์ปหนีต้องทอย CHA Save ให้ผ่านก่อน"},
  "Magnificent Mansion": {"level": 7, "school": "Conjuration", "action": "1 นาที", "range": "300 ฟุต", "components": "V, S, M", "duration": "24 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "wizard"], "dice": "", "desc": "เปิดประตูสู่มิติพิเศษที่เป็นคฤหาสน์สุดหรู มีห้องพัก อาหารจัดเต็มสำหรับ 100 คน และคนรับใช้โปร่งแสงคอยบริการ ปลอดภัย 100% จากโลกภายนอก"},
  "Plane Shift": {"level": 7, "school": "Conjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S, M (ส้อมเสียงประจำมิติ 250 gp)", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "druid", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "พาตัวเองและเพื่อนร่วมทีมที่จับมือกันสูงสุด 8 คน วาร์ปข้ามไปยังมิติอื่น (Plane of Existence) หรือใช้โจมตีส่งศัตรู 1 ตัวไปมิติอื่นก็ได้"},
  "Regenerate": {"level": 7, "school": "Transmutation", "action": "1 นาที", "range": "สัมผัส", "components": "V, S, M", "duration": "1 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "cleric", "druid"], "dice": "4d8+15", "desc": "กระตุ้นการฟื้นฟูขั้นสุดยอด ฟื้นฟู 4d8 + 15 HP ทันที + ฟื้นฟูอีก 1 HP ทุกเริ่มเทิร์นเป็นเวลา 1 ชั่วโมง และงอกอวัยวะที่ขาดหายไปให้กลับมาสมบูรณ์ใน 2 นาที"},
  "Resurrection": {"level": 7, "school": "Necromancy", "action": "1 ชั่วโมง", "range": "สัมผัส", "components": "V, S, M (เพชร 1,000 gp)", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "cleric"], "dice": "", "desc": "ชุบชีวิตผู้ที่เสียชีวิตไปแล้วไม่เกิน 100 ปี (และไม่ได้ตายตามอายุขัย) ให้ฟื้นคืนชีพขึ้นมาพร้อม HP เต็ม และงอกอวัยวะที่ขาดหายไปให้กลับมาครบถ้วน"},
  "Reverse Gravity": {"level": 7, "school": "Transmutation", "action": "1 Action", "range": "100 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["druid", "sorcerer", "wizard"], "dice": "", "desc": "กลับด้านแรงโน้มถ่วงในพื้นที่ทรงกระบอกรัศมี 50 ฟุต สูง 100 ฟุต ทุกสิ่งในพื้นที่ที่ไม่ได้ยึดเกาะจะร่วงขึ้นไปข้างบนทันที และเมื่อเวทย์หมดจะร่วงหล่นลงมากระแทกพื้นซ้ำ"},
  "Teleport": {"level": 7, "school": "Conjuration", "action": "1 Action", "range": "10 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "wizard"], "dice": "", "desc": "วาร์ปตัวเองและเพื่อนสูงสุด 8 คน ไปยังสถานที่ใดก็ได้ในมิติเดียวกันในพริบตา (ความแม่นยำขึ้นอยู่กับความคุ้นเคยกับสถานที่ปลายทางหรือการมี Teleportation Circle)"},
  "Antimagic Field": {"level": 8, "school": "Abjuration", "action": "1 Action", "range": "ตัวเอง (รัศมี 10 ฟุต)", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["cleric", "wizard"], "dice": "", "desc": "สร้างเขตปลอดเวทมนตร์รัศมี 10 ฟุต รอบตัวคุณ เวทมนตร์ทุกชนิดไม่สามารถร่ายหรือส่งผลในพื้นที่นี้ได้ ไอเทมเวทมนตร์จะกลายเป็นของธรรมดาชั่วคราว และสิ่งมีชีวิตที่ถูกอัญเชิญมาจะหายไปชั่วคราว"},
  "Clone": {"level": 8, "school": "Necromancy", "action": "1 ชั่วโมง", "range": "สัมผัส", "components": "V, S, M (เพชร 1,000 gp + โลง 2,000 gp)", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["wizard"], "dice": "", "desc": "เพาะเลี้ยงร่างโคลนของสิ่งมีชีวิต (ใช้เวลาโตเต็มที่ 120 วัน) เมื่อเจ้าของร่างเดิมเสียชีวิต วิญญาณจะย้ายเข้ามาอยู่ในร่างโคลนนี้แทนทันที ทำให้เป็นอมตะทางอ้อม!"},
  "Dominate Monster": {"level": 8, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "ควบคุมจิตใจมอนสเตอร์หรือสิ่งมีชีวิตประเภทใดก็ได้ 1 ตัว (WIS Save) ให้ตกอยู่ใต้อำนาจคำสั่งของคุณ"},
  "Earthquake": {"level": 8, "school": "Evocation", "action": "1 Action", "range": "500 ฟุต", "components": "V, S, M", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric", "druid", "sorcerer"], "dice": "", "desc": "สร้างแผ่นดินไหวรุนแรงในรัศมี 100 ฟุต ทำให้ศัตรูล้มลง เสียสมาธิร่ายเวทย์ แผ่นดินแยกออกเป็นเหวลึก และพังทลายสิ่งปลูกสร้างในพื้นที่ให้ถล่มลงมา"},
  "Feeblemind": {"level": 8, "school": "Enchantment", "action": "1 Action", "range": "150 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "druid", "warlock", "wizard"], "dice": "4d6", "desc": "ทำลายสติปัญญาของเป้าหมาย ทำความเสียหาย Psychic 4d6 และเป้าหมายต้องทอย INT Save หากไม่ผ่าน ค่า INT และ CHA ของเป้าหมายจะลดเหลือ 1 ทันที! (ร่ายเวทย์ไม่ได้ ใช้ไอเทมไม่ได้ พูดจาไม่รู้เรื่อง)"},
  "Holy Aura": {"level": 8, "school": "Abjuration", "action": "1 Action", "range": "ตัวเอง (รัศมี 30 ฟุต)", "components": "V, S, M (1,000 gp)", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric"], "dice": "", "desc": "แผ่รัศมีศักดิ์สิทธิ์ให้เพื่อนในระยะ 30 ฟุต ทุกคนได้ Advantage ในการทอย Saving Throw ทุกชนิด ศัตรูโจมตีเข้ามาติด Disadvantage และหาก Fiend หรือ Undead โจมตีโดนอาจตาบอดได้"},
  "Maze": {"level": 8, "school": "Conjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "10 นาที (C)", "ritual": false, "concentration": true, "classes": ["wizard"], "dice": "", "desc": "ส่งศัตรูเข้าไปติดอยู่ในมิติเขาวงกตทันทีโดยไม่ต้องทอย Save! ศัตรูต้องใช้ Action ในแต่ละเทิร์นทอย INT Check (DC 20) เพื่อหาทางออก หากทอยไม่ผ่านจะติดอยู่ในนั้นจนกว่าเวทย์จะหมด"},
  "Mind Blank": {"level": 8, "school": "Abjuration", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "24 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "wizard"], "dice": "", "desc": "ปกป้องจิตใจเป้าหมายอย่างสมบูรณ์แบบเป็นเวลา 24 ชั่วโมง เป้าหมายจะ Immune ต่อความเสียหาย Psychic, ไม่สามารถถูกอ่านใจ ถูกส่องด้วยเวทย์พยากรณ์ หรือติดสถานะ Charmed ได้เลย (แม้แต่เวทย์ Wish ก็เจาะไม่เข้า)"},
  "Power Word Stun": {"level": 8, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "เอ่ยคำศักดิ์สิทธิ์แห่งอำนาจใส่เป้าหมาย หากเป้าหมายมี HP ปัจจุบันตั้งแต่ 150 ลงมา จะติดสถานะมึนงง (Stunned) ทันทีโดยไม่ต้องทอย Save แรก (ค่อยทอย CON Save แก้ตอนจบเทิร์น)"},
  "Sunburst": {"level": 8, "school": "Evocation", "action": "1 Action", "range": "150 ฟุต", "components": "V, S, M", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "druid", "sorcerer", "wizard"], "dice": "12d6", "desc": "ระเบิดแสงอาทิตย์เจิดจ้าในรัศมี 60 ฟุต ศัตรูในพื้นที่ต้องทอย CON Save ไม่ผ่านโดนความเสียหาย Radiant 12d6 และติดสถานะตาบอด (Blinded) เป็นเวลา 1 นาที"},
  "Astral Projection": {"level": 9, "school": "Necromancy", "action": "1 ชั่วโมง", "range": "10 ฟุต", "components": "V, S, M (1,100 gp ต่อคน)", "duration": "พิเศษ", "ritual": false, "concentration": false, "classes": ["cleric", "warlock", "wizard"], "dice": "", "desc": "ถอดจิตของตัวเองและเพื่อนสูงสุด 8 คน เดินทางเข้าสู่มิติ Astral Plane โดยร่างจริงจะหยุดนิ่งไม่แก่ชรา และหากร่างจิตถูกทำลายจะเพียงแค่ตื่นขึ้นในร่างเดิม"},
  "Foresight": {"level": 9, "school": "Divination", "action": "1 นาที", "range": "สัมผัส", "components": "V, S, M", "duration": "8 ชั่วโมง", "ritual": false, "concentration": false, "classes": ["bard", "druid", "warlock", "wizard"], "dice": "", "desc": "มอบสัมผัสที่หกมองเห็นอนาคตเสี้ยววินาทีให้เป้าหมาย 8 ชั่วโมง เป้าหมายไม่ติดสถานะถูกซุ่มโจมตี (Surprised), ได้ Advantage ในการทอยโจมตี/Ability Check/Saving Throw ทุกครั้ง และศัตรูโจมตีใส่ติด Disadvantage"},
  "Gate": {"level": 9, "school": "Conjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S, M (เพชร 5,000 gp)", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["cleric", "sorcerer", "wizard"], "dice": "", "desc": "เปิดประตูมิติเชื่อมต่อไปยังจุดใดก็ได้ในต่างมิติ (Plane of Existence) หรือเอ่ยชื่อสิ่งมีชีวิตเฉพาะเจาะจงที่อยู่มิติอื่นเพื่อดูดดึงตัวมันข้ามมิติมาอยู่ตรงหน้าคุณทันที!"},
  "Mass Heal": {"level": 9, "school": "Evocation", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric"], "dice": "", "desc": "มหาเวทย์แห่งการฟื้นฟู กระจายพลังชีวิตจำนวนรวมสูงถึง 700 HP แบ่งให้กับสิ่งมีชีวิตกี่ตัวก็ได้ที่คุณมองเห็นในระยะ พร้อมรักษาโรค อาการตาบอด และหูหนวกทั้งหมด"},
  "Meteor Swarm": {"level": 9, "school": "Evocation", "action": "1 Action", "range": "5,280 ฟุต (1 ไมล์)", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "40d6", "desc": "เรียกอุกกาบาตยักษ์ 4 ลูก พุ่งชนพื้นโลกในระยะไกลถึง 5,280 ฟุต (1 ไมล์) แต่ละลูกระเบิดรัศมี 40 ฟุต ศัตรูต้องทอย DEX Save ไม่ผ่านโดนความเสียหายไฟ (Fire) 20d6 และความเสียหายกระแทก (Bludgeoning) อีก 20d6 (รวม 40d6!)"},
  "Power Word Heal": {"level": 9, "school": "Evocation", "action": "1 Action", "range": "สัมผัส", "components": "V, S", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard"], "dice": "", "desc": "เอ่ยคำศักดิ์สิทธิ์ฟื้นฟูเป้าหมายให้กลับมา HP เต็ม 100% ทันที พร้อมล้างสถานะ Charmed, Frightened, Paralyzed และ Stunned ออกทั้งหมด"},
  "Power Word Kill": {"level": 9, "school": "Enchantment", "action": "1 Action", "range": "60 ฟุต", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["bard", "sorcerer", "warlock", "wizard"], "dice": "", "desc": "เอ่ยคำประกาศิตแห่งความตาย หากสิ่งมีชีวิตที่คุณเลือกมี HP ปัจจุบันตั้งแต่ 100 ลงมา เป้าหมายจะตายทันทีโดยไม่มีการทอย Saving Throw ใดๆ ทั้งสิ้น!"},
  "Prismatic Wall": {"level": 9, "school": "Abjuration", "action": "1 Action", "range": "60 ฟุต", "components": "V, S", "duration": "10 นาที", "ritual": false, "concentration": false, "classes": ["wizard"], "dice": "", "desc": "สร้างกำแพงหรือทรงกลมแสง 7 สีสุดอลังการ ส่องแสงทำให้ศัตรูตาบอด และแต่ละชั้นสีจะมีธาตุทำลายล้างและเงื่อนไขการสลายที่ต่างกัน หากศัตรูพยายามเดินทะลุจะต้องโดนความเสียหายมหาศาลทั้ง 7 ชั้น"},
  "Shapechange": {"level": 9, "school": "Transmutation", "action": "1 Action", "range": "ตัวเอง", "components": "V, S, M (มงกุฎหยก 1,500 gp)", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["druid", "wizard"], "dice": "", "desc": "แปลงร่างตัวเองเป็นสิ่งมีชีวิตใดก็ได้ที่เคยเห็นที่มีระดับ CR ไม่เกินเลเวลของคุณ (เช่น มังกรโบราณ Ancient Dragon) โดยยังคงสติปัญญาและความสามารถของคลาสตัวเองไว้ครบถ้วน"},
  "Time Stop": {"level": 9, "school": "Transmutation", "action": "1 Action", "range": "ตัวเอง", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "1d4+1", "desc": "หยุดเวลาของโลกใบนี้ชั่วคราว! คุณจะได้เล่นเทิร์นติดต่อกันทันที 1d4 + 1 เทิร์นรวดในขณะที่คนอื่นหยุดนิ่ง (เวทย์จะคลายก่อนกำหนดหากคุณทำสิ่งใดที่ส่งผลกระทบหรือทำร้ายสิ่งมีชีวิตอื่น)"},
  "True Polymorph": {"level": 9, "school": "Transmutation", "action": "1 Action", "range": "30 ฟุต", "components": "V, S, M", "duration": "1 ชั่วโมง (C)", "ritual": false, "concentration": true, "classes": ["bard", "warlock", "wizard"], "dice": "", "desc": "เปลี่ยนสิ่งมีชีวิตเป็นสิ่งมีชีวิตอื่น, เปลี่ยนสิ่งมีชีวิตเป็นสิ่งของ หรือเปลี่ยนสิ่งของให้กลายเป็นสิ่งมีชีวิต! และหากคุณครองสมาธิจนครบ 1 ชั่วโมง การเปลี่ยนแปลงนั้นจะคงอยู่ตลอดไปจนกว่าจะถูก Dispel"},
  "True Resurrection": {"level": 9, "school": "Necromancy", "action": "1 ชั่วโมง", "range": "สัมผัส", "components": "V, S, M (เพชร 25,000 gp)", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["cleric", "druid"], "dice": "", "desc": "มหาเวทย์ชุบชีวิตขั้นสูงสุด ชุบชีวิตผู้ที่ตายไปแล้วไม่เกิน 200 ปีให้ฟื้นคืนชีพแบบสมบูรณ์ 100% และแม้จะไม่เหลือเศษซากร่างกายเลย เพียงแค่เอ่ยชื่อและวิญญาณยินยอม เวทย์นี้ก็จะสร้างร่างใหม่ขึ้นมาให้ทันที!"},
  "Weird": {"level": 9, "school": "Illusion", "action": "1 Action", "range": "120 ฟุต", "components": "V, S", "duration": "1 นาที (C)", "ritual": false, "concentration": true, "classes": ["wizard"], "dice": "4d10", "desc": "ดึงความกลัวที่ลึกที่สุดในจิตใจของศัตรูทุกตัวในรัศมี 30 ฟุต ออกมาทำร้ายตัวเอง เป้าหมายต้องทอย WIS Save ไม่ผ่านจะติดสถานะ Frightened และโดนความเสียหาย Psychic 4d10 ทุกๆ จบเทิร์น"},
  "Wish": {"level": 9, "school": "Conjuration", "action": "1 Action", "range": "ตัวเอง", "components": "V", "duration": "ทันที", "ritual": false, "concentration": false, "classes": ["sorcerer", "wizard"], "dice": "", "desc": "เวทมนตร์ที่ทรงพลังที่สุดในจักรวาล D&D สามารถใช้เลียนแบบเวทมนตร์ระดับ 8 ลงไปของอาชีพใดก็ได้โดยไม่ต้องใช้วัตถุดิบและร่ายทันที หรือใช้ขอพรเพื่อเปลี่ยนแปลงความเป็นจริงได้ตามใจปรารถนา!"},
};

export const CONDITIONS_LIST = [
  { id: 'blessed', name: '✨ Blessed (ได้รับพร)', diceEffect: 'adv', desc: 'ได้รับพรศักดิ์สิทธิ์ (+1d4 การโจมตีและ Saving Throw)' },
  { id: 'invisible', name: '👻 Invisible (ล่องหน)', diceEffect: 'adv', desc: 'ตัวละครล่องหน โจมตีศัตรูแบบได้เปรียบ (Advantage)' },
  { id: 'hastened', name: '⚡ Hastened (เร่งความเร็ว)', diceEffect: 'normal', desc: 'ความเร็วเคลื่อนที่ x2, เกราะ +2 AC และได้ Action เพิ่ม' },
  { id: 'poisoned', name: '🤢 Poisoned (ติดพิษ)', diceEffect: 'disadv', desc: 'ทอยโจมตีและทอยทดสอบทักษะทั้งหมดแบบเสียเปรียบ (Disadvantage)' },
  { id: 'blinded', name: '🙈 Blinded (ตาบอด)', diceEffect: 'disadv', desc: 'มองไม่เห็น ทอยโจมตีแบบเสียเปรียบ และระยะยิงลดลง' },
  { id: 'prone', name: '🧎 Prone (ล้มคว่ำ)', diceEffect: 'disadv', desc: 'ล้มลงกับพื้น ต้องใช้ความเร็วครึ่งหนึ่งเพื่อลุกขึ้น' },
  { id: 'restrained', name: '🕸️ Restrained (ถูกพันธนาการ)', diceEffect: 'disadv', zeroSpeed: true, desc: 'ความเร็วเป็น 0 ฟุต ทอยโจมตีและ DEX Save แบบเสียเปรียบ' },
  { id: 'paralyzed', name: '⚡ Paralyzed (อัมพาต)', diceEffect: 'disadv', zeroSpeed: true, desc: 'ความเร็วเป็น 0 ฟุต ขยับหรือใช้ Action ไม่ได้ และศัตรูตีประชิดติด Critical!' }
];

export const ALIGNMENTS_LIST = [
  { id: 'LG', name: 'Lawful Good (ธรรมะจัดระเบียบ)', desc: 'ยึดมั่นความยุติธรรม กฎเกณฑ์ และช่วยเหลือผู้อ่อนแอ' },
  { id: 'NG', name: 'Neutral Good (ธรรมะสายกลาง)', desc: 'ทำความดีด้วยใจจริงโดยไม่ยึดติดว่าต้องอยู่ในกฎหรือแหกกฎ' },
  { id: 'CG', name: 'Chaotic Good (ธรรมะรักอิสระ)', desc: 'ทำตามเสียงหัวใจและความถูกต้อง แม้ต้องขัดแย้งกับกฎหมาย' },
  { id: 'LN', name: 'Lawful Neutral (เป็นกลางรักษากฎ)', desc: 'ยึดถือระเบียบวินัย คำสัตย์ และกฎหมายเหนือสิ่งอื่นใด' },
  { id: 'TN', name: 'True Neutral (เป็นกลางอย่างแท้จริง)', desc: 'รักษาสมดุลของธรรมชาติและตัดสินใจตามสถานการณ์จริง' },
  { id: 'CN', name: 'Chaotic Neutral (เป็นกลางรักอิสระ)', desc: 'ใช้ชีวิตตามใจปรารถนา รักเสรีภาพสูงสุด ไม่ผูกมัดกับใคร' },
  { id: 'LE', name: 'Lawful Evil (อธรรมจอมบงการ)', desc: 'ใช้ระบบ กฎหมาย และลำดับชนชั้นเพื่อแสวงหาอำนาจให้ตนเอง' },
  { id: 'NE', name: 'Neutral Evil (อธรรมเห็นแก่ตัว)', desc: 'ทำทุกอย่างเพื่อผลประโยชน์ของตนเองโดยไม่สนวิธีการ' },
  { id: 'CE', name: 'Chaotic Evil (อธรรมบ้าคลั่ง)', desc: 'ชื่นชอบการทำลายล้าง ความโกลาหล และความรุนแรงไร้ขีดจำกัด' }
];
