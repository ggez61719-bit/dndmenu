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
      {
        id: 'berserker',
        name_th: 'Berserker (นักรบคลั่งล้างผลาญ)',
        desc: 'คลั่งสุดขีด โจมตีแถมด้วย Bonus Action (Frenzied Strike) และขว้างปาสิ่งของอย่างรุนแรง',
        features: {
          3: [
            { name: 'Frenzy (คลั่งสุดขีด)', desc: 'ขณะติดสถานะ Rage สามารถใช้ Bonus Action โจมตีระยะประชิดเพิ่มได้ 1 ครั้ง (Frenzied Strike) หรือขว้างปาสิ่งของ/ศัตรูอย่างรุนแรง (Enraged Throw ทำดาเมจเพิ่มและทำให้ศัตรูล้ม Prone)' }
          ],
          6: [
            { name: 'Mindless Rage (จิตไร้ความกลัว)', desc: 'ขณะติดสถานะ Rage คุณจะไม่ติดสถานะถูกสะกดจิต (Charmed) หรือหวาดกลัว (Frightened) เลย และหากติดอยู่ก่อนหน้าจะถูกระงับทันที' }
          ],
          10: [
            { name: 'Intimidating Presence (จิตสังหารข่มขวัญ)', desc: 'ใช้ Action ข่มขวัญศัตรูในระยะ 30 ฟุต ต้องทอย WIS Save (DC = 8 + Prof + CHA) หากไม่ผ่านจะติดสถานะหวาดกลัว (Frightened) จนจบเทิร์นถัดไปของคุณ' }
          ],
          14: [
            { name: 'Retaliation (ฟันสวนทันควัน)', desc: 'เมื่อคุณได้รับความเสียหายจากศัตรูที่อยู่ในระยะ 5 ฟุต สามารถใช้ Reaction โจมตีประชิดสวนกลับใส่ศัตรูตัวนั้นได้ทันที 1 ครั้ง' }
          ]
        }
      },
      {
        id: 'wildheart',
        name_th: 'Wildheart / Totem Warrior (นักรบวิญญาณสัตว์ป่า)',
        desc: 'ผสานวิญญาณสัตว์ป่า (เช่น หมีลดดาเมจทุกธาตุครึ่งหนึ่ง หรืออินทรีพุ่งโจมตี)',
        features: {
          3: [
            { name: 'Speak with Animals (สื่อสารกับสัตว์ป่า)', desc: 'สามารถร่ายคาถา Speak with Animals เพื่อพูดคุยกับสัตว์ป่าได้' },
            { name: 'Bestial Heart (หัวใจสัตว์ป่า)', desc: 'เลือกวิญญาณสัตว์ป่าประจำกาย 1 ชนิด เพื่อรับพลังพิเศษทุกครั้งที่เข้าสู่สถานะ Rage' }
          ],
          6: [
            { name: 'Animal Aspect (สัญชาตญาณสัตว์ป่า)', desc: 'เลือกคุณสมบัติพิเศษของสัตว์ป่าติดตัวถาวร (ไม่ต้องกด Rage ก็แสดงผล) เช่น พลังแบกหามของหมี หรือสายตาของอินทรี' }
          ],
          10: [
            { name: 'Nature’s Ward / second Aspect (ผสานธรรมชาติขั้นสูง)', desc: 'สื่อสารกับวิญญาณธรรมชาติและเลือก Animal Aspect เพิ่มเติมเพื่อเสริมขีดจำกัดร่างกาย' }
          ],
          14: [
            { name: 'Totemic Attunement (กายาวิญญาณสัตว์สมบูรณ์)', desc: 'ปลดล็อกพลังขั้นสุดยอดของวิญญาณสัตว์ป่าขณะติดสถานะ Rage' }
          ]
        },
        bestialHearts: [
          { id: 'bear', name: '🐻 Bear Heart (หัวใจหมี)', desc: 'ขณะ Rage: ต้านทานความเสียหายทุกชนิดครึ่งหนึ่ง (ยกเว้น Psychic) และใช้ Action ฮีลตัวเอง 1d8+CON HP ได้' },
          { id: 'eagle', name: '🦅 Eagle Heart (หัวใจอินทรี)', desc: 'ขณะ Rage: ศัตรูตีสวน (Opportunity Attack) ใส่คุณแบบเสียเปรียบ ใช้ Bonus Action วิ่ง Dash ได้ และกระโดดพุ่งโจมตีจากที่สูงให้ศัตรูล้มได้' },
          { id: 'elk', name: '🦌 Elk Heart (หัวใจกวางเอลก์)', desc: 'ขณะ Rage: ความเร็วเคลื่อนที่เพิ่มขึ้น +15 ฟุต และสามารถวิ่งพุ่งชนศัตรูให้ล้มคว่ำ (Prone) พร้อมทำดาเมจ 1d4+STR' },
          { id: 'tiger', name: '🐯 Tiger Heart (หัวใจพยัคฆ์)', desc: 'ขณะ Rage: กระโดดไกลขึ้น +15 ฟุต และสามารถกวาดอาวุธโจมตีศัตรูสูงสุด 3 ตัวพร้อมกันทำให้ติดสถานะเลือดไหล (Bleeding)' },
          { id: 'wolf', name: '🐺 Wolf Heart (หัวใจหมาป่า)', desc: 'ขณะ Rage: เพื่อนร่วมทีมทุกคนได้เปรียบ (Advantage) เวลาตีประชิดใส่ศัตรูที่อยู่ใกล้คุณในระยะ 5 ฟุต และสั่งเพิ่มความเร็วให้เพื่อนได้' }
        ],
        animalAspects: [
          { id: 'aspect_bear', name: '🐻 Aspect of the Bear (พลังหมี)', desc: 'แบกน้ำหนักได้เพิ่มขึ้นเป็น 2 เท่า และได้เปรียบ (Advantage) ในการทอย STR Check เพื่อผลัก ดึง ยก หรือพังสิ่งของ' },
          { id: 'aspect_eagle', name: '🦅 Aspect of the Eagle (เนตรอินทรี)', desc: 'มองเห็นได้ไกลถึง 5,280 ฟุต (1 ไมล์) อย่างชัดเจน และแสงสลัวไม่ทำให้เสียเปรียบ Perception' },
          { id: 'aspect_elk', name: '🦌 Aspect of the Elk (ฝีเท้ากวาง)', desc: 'มอบออร่าเพิ่มความเร็วเคลื่อนที่ให้ตัวเองและเพื่อนร่วมทีมทุกคนอีก +5 ฟุต' },
          { id: 'aspect_tiger', name: '🐯 Aspect of the Tiger (เขี้ยวพยัคฆ์)', desc: 'บวกโบนัส STR เพิ่มเติมในการโจมตีใส่เป้าหมายที่ติดสถานะเลือดไหลหรือติดพิษ และชำนาญทักษะ Survival' },
          { id: 'aspect_wolf', name: '🐺 Aspect of the Wolf (เงาหมาป่า)', desc: 'ชำนาญทักษะ Stealth และสามารถสะกดรอยตามศัตรูด้วยความเร็วปกติโดยไม่เสียเปรียบ' }
        ]
      },
      {
        id: 'wild_magic_barb',
        name_th: 'Wild Magic (นักรบคลั่งกระแสเวทแปรปรวน)',
        desc: 'ระเบิดคลื่นเวทมนตร์สุ่มทุกครั้งที่กดใช้สถานะคลั่ง (Rage) และช่วยฟื้นช่องเวทให้เพื่อน',
        features: {
          3: [
            { name: 'Magic Awareness (สัมผัสกระแสเวท)', desc: 'ใช้ Action เปิดสัมผัสรับรู้ตำแหน่งของเวทมนตร์และไอเทมเวทในระยะ 60 ฟุต' },
            { name: 'Wild Surge (ระเบิดคลื่นเวทแปรปรวน)', desc: 'ทันทีที่กดใช้ Rage ทอย 1d8 เพื่อสุ่มเอฟเฟกต์เวทมนตร์ (เช่น วาร์ปได้เรื่อยๆ, เสกอาวุธแสง, เรียกภูตระเบิด หรือเพิ่มเกราะ +1 AC ให้ทั้งทีม)' }
          ],
          6: [
            { name: 'Bolstering Magic (เสริมพลังมนตรา)', desc: 'แตะตัวเองหรือเพื่อนเพื่อบวกเต๋า +1d4 ในการทอยโจมตีและ Ability Check นาน 10 นาที หรือฟื้นฟูช่องเวทมนตร์ (Spell Slot) ระดับ 1-3 ให้เพื่อนร่วมทีม!' }
          ],
          10: [
            { name: 'Unstable Backlash (คลื่นเวทสะท้อนกลับ)', desc: 'ขณะอยู่ในสถานะ Rage หากคุณได้รับความเสียหายหรือทอย Saving Throw ไม่ผ่าน สามารถใช้ Reaction สุ่มเปลี่ยนเอฟเฟกต์ Wild Surge ใหม่ได้ทันที' }
          ],
          14: [
            { name: 'Controlled Surge (ควบคุมกระแสเวทคลั่ง)', desc: 'เมื่อทอยตาราง Wild Surge คุณสามารถทอย 2 ครั้งแล้วเลือกผลลัพธ์ที่ต้องการได้เอง และหากออกเลขซ้ำสามารถเลือกผลใดในตารางก็ได้ทันที!' }
          ]
        }
      },
      {
        id: 'zealot',
        name_th: 'Path of the Zealot (นักรบคลั่งศรัทธาอมตะไร้พ่าย)',
        desc: 'นักรบคลั่งแห่งทวยเทพ ฟันติดดาเมจแสง/มืดเพิ่มทุกเทิร์น ชุบชีวิตฟรีไม่เสียเพชร และที่ Lv.14 ต่อให้ HP เหลือ 0 ก็ยังไม่ตายตราบใดที่ยังคลั่ง (Rage Beyond Death)!',
        features: {
          3: [
            { name: 'Divine Fury (เพลิงพิโรธศักดิ์สิทธิ์ +1d6 + ครึ่งเลเวล!)', desc: 'ขณะอยู่ในสถานะ Rage การโจมตีอาวุธที่โดนศัตรูตัวแรกในแต่ละเทิร์นของคุณ จะระเบิดโบนัสความเสียหาย Radiant (หรือ Necrotic) เพิ่มเติมอัตโนมัติเท่ากับ [1d6 + ครึ่งหนึ่งของเลเวลบาร์บาเรียน] ทุกเทิร์น!' },
            { name: 'Warrior of the Gods (นักรบแห่งทวยเทพ ชุบชีวิตฟรี!)', desc: 'วิญญาณของคุณผูกพันกับศึกสงคราม ทำให้เมื่อเพื่อนร่ายเวทชุบชีวิตคุณ (เช่น Revivify หรือ Raise Dead) ผู้ร่ายไม่ต้องเสียเพชรหรือวัตถุดิบราคาแพงใดๆ เลย (ชุบฟรีตลอดกาล)!' }
          ],
          6: [
            { name: 'Fanatical Focus (ศรัทธาคลั่งทอยแก้ Saving Throw!)', desc: 'ขณะอยู่ในสถานะ Rage หากคุณทอย Saving Throw ต้านทานเวทหรือเอฟเฟกต์ไม่ผ่าน คุณสามารถสั่งทอยใหม่ (Reroll) ได้ทันที! (ใช้ได้ 1 ครั้งต่อการกด Rage แต่ละรอบ)' }
          ],
          10: [
            { name: 'Zealous Presence (เสียงคำรามปลุกศรัทธาทั้งกองทัพ!)', desc: 'ใช้ Bonus Action คำรามปลุกขวัญเพื่อนร่วมทีมสูงสุด 10 คนในระยะ 60 ฟุต: เพื่อนทุกคนจะได้รับความได้เปรียบ (Advantage) ทั้งในการทอยโจมตีทั้งหมดและการทอย Saving Throw ทุกชนิดไปจนถึงเริ่มเทิร์นหน้าของคุณ! (1 ครั้ง/พักยาว)' }
          ],
          14: [
            { name: 'Rage Beyond Death (คลั่งทะลุความตาย — HP เหลือ 0 ก็ไม่ล้ม!)', desc: 'สุดยอดสกิลอมตะในตำนาน: ในขณะที่คุณติดสถานะ Rage ต่อให้คุณโดนตีจน HP ลดเหลือ 0 คุณก็จะไม่หมดสติและไม่ล้มลง! และต่อให้ทอย Death Saving Throw พลาดครบ 3 ครั้ง คุณก็จะยังไม่ตายและยืนฟาดฟันศัตรูต่อไปได้เรื่อยๆ จนกว่าเวลา Rage จะหมดลง (เพียงแค่ดื่มโพชั่นฮีล 1 ขวดก่อนหมด Rage คุณก็รอดชีวิต 100%)!' }
          ]
        }
      },
      {
        id: 'giant_barb',
        name_th: 'Path of the Giant (นักรบคลั่งสายเลือดไททันยักษ์)',
        desc: 'นักรบคลั่งร่างยักษ์ ขยายร่างเป็นขนาด Large/Huge เมื่อกดคลั่ง, เสกอาวุธประชิดเป็นอาวุธสายฟ้า/ไฟขว้างไกลแล้วบินกลับมาที่มือ และจับศัตรูทุ่มข้ามสนามรบ!',
        features: {
          3: [
            { name: 'Giant’s Havoc (กายาไททันขยายร่าง & ขว้างอาวุธแรง)', desc: 'เมื่อกดใช้ Rage ร่างกายของคุณจะขยายใหญ่ขึ้นเป็นขนาด Large! ระยะโจมตีประชิดยาวขึ้น +5 ฟุต และนำโบนัสดาเมจตอน Rage ไปบวกเข้ากับการโจมตีแบบขว้างปา (Thrown Weapon) ได้ด้วย!' },
            { name: 'Thaumaturgy & Giant Power (พละกำลังยักษ์บรรพกาล)', desc: 'เรียนรู้ภาษายักษ์ (Giant) และได้รับคาถา Thaumaturgy ฟรี พร้อมเพิ่มขีดจำกัดการแบกน้ำหนักและระยะขว้างสิ่งของ' }
          ],
          6: [
            { name: 'Elemental Cleaver (ศาสตราธาตุไททัน ขว้างแล้วบินกลับมือ!)', desc: 'เมื่อกดใช้ Rage อาวุธที่คุณถือจะถูกอาบด้วยพลังธาตุ (เลือกได้ระหว่าง Acid, Cold, Fire, Lightning หรือ Thunder): เปลี่ยนดาเมจอาวุธทั้งหมดเป็นธาตุนั้น, บวกดาเมจธาตุเพิ่มอีก +1d6 ทุกหมัด (และ +2d6 ที่ Lv.14), และอาวุธทุกชนิดจะได้รับคุณสมบัติ Thrown (ขว้างไกลได้) ซึ่งทันทีที่ขว้างออกไป อาวุธจะวาร์ปบินกลับมาอยู่ในมือคุณอัตโนมัติทันที!' }
          ],
          10: [
            { name: 'Mighty Impel (จับทุ่มข้ามสมรภูมิ!)', desc: 'ขณะอยู่ในสถานะ Rage คุณสามารถใช้ Bonus Action คว้าตัวเพื่อนหรือศัตรูขนาด Medium หรือเล็กกว่าที่อยู่ข้างตัว แล้วจับโยนขว้างออกไปในอากาศได้ไกลถึง 30 ฟุต! (หากเป็นศัตรูต้องทอย STR Save ไม่ผ่านจะปลิวไปตกกระแทกพื้นรับดาเมจและล้มคว่ำ Prone ทันที)' }
          ],
          14: [
            { name: 'Demiurgic Colossus (มหาไททันขนาด Huge ถล่มปฐพี!)', desc: 'เมื่อกดใช้ Rage ร่างกายของคุณสามารถขยายใหญ่ได้ถึงขนาด Huge! ระยะตีประชิดยาวขึ้นเป็น +10 ฟุต, ดาเมจธาตุจาก Elemental Cleaver เพิ่มเป็น +2d6 ทุกครั้งที่ตีหรือขว้าง, และสามารถจับศัตรูขนาด Large ทุ่มโยนข้ามหัวได้สบายๆ!' }
          ]
        }
      }
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
      {
        id: 'lore',
        name_th: 'College of Lore (สำนักปราชญ์กวีรอบรู้)',
        desc: 'ปราชญ์ผู้รู้รอบด้าน ได้รับทักษะเพิ่ม 3 ทักษะ ตัดแต้มลูกเต๋าศัตรูด้วย Cutting Words และขโมยเวทอาชีพอื่นด้วย Magical Secrets',
        features: {
          3: [
            { name: 'Bonus Proficiencies & Cutting Words (ทักษะเพิ่ม & วาจาเชือดเฉือน)', desc: 'ได้รับความชำนาญในทักษะใดก็ได้เพิ่มทันที 3 ทักษะ และเมื่อศัตรูกำลังทอยโจมตี ทักษะ หรือดาเมจ สามารถใช้ Reaction และแต้ม Bardic Inspiration เพื่อตัดแต้มเต๋า (1d6) ลบผลลัพธ์ของศัตรูให้พลาดเป้าได้!' }
          ],
          6: [
            { name: 'Additional Magical Secrets (มหาเวทลับข้ามสำนัก)', desc: 'คุณสามารถเลือกเรียนคาถาใดก็ได้จำนวน 2 บทจากอาชีพใดก็ได้ในเกม (เช่น คาถา Fireball ของ Wizard หรือ Counterspell) มาใส่ในสมุดเวทของคุณ!' }
          ],
          14: [
            { name: 'Peerless Skill (วาทศิลป์เหนือชั้นไร้ที่ติ)', desc: 'เมื่อคุณทอย Ability Check แล้วผลลัพธ์ไม่สวย สามารถใช้ Bardic Inspiration ทอยบวกเพิ่มเข้าไปในแต้มทักษะเพื่อพลิกเกมได้ทันที' }
          ]
        }
      },
      {
        id: 'valour',
        name_th: 'College of Valour (สำนักกวีศึกอัศวิน)',
        desc: 'กวีศึกผู้ชำนาญเกราะกลาง โล่ อาวุธสงคราม มอบเต๋าแรงใจโจมตี/ป้องกัน (Combat Inspiration) และโจมตีได้ 2 ครั้งที่ Lv.6',
        features: {
          3: [
            { name: 'Bonus Proficiencies & Combat Inspiration (ชำนาญเกราะกลาง & แรงใจออกศึก)', desc: 'ได้รับความชำนาญการสวมใส่เกราะกลาง (Medium Armour), โล่ และอาวุธสงครามทั้งหมด และเพื่อนร่วมทีมสามารถนำเต๋า Bardic Inspiration ไปบวกเพิ่มดาเมจโจมตี หรือนำไปบวกเพิ่มค่า AC เพื่อกันการโจมตีได้!' }
          ],
          6: [
            { name: 'Extra Attack (โจมตี 2 ครั้ง)', desc: 'เมื่อคุณใช้ Action โจมตีด้วยอาวุธในเทิร์น สามารถโจมตีได้ต่อเนื่อง 2 ครั้ง (เช่นเดียวกับ Fighter และ Paladin)' }
          ],
          14: [
            { name: 'Battle Magic (ยุทธเวทบรรเลงเพลงดาบ)', desc: 'เมื่อคุณใช้ Action ร่ายคาถาในเทิร์น สามารถใช้ Bonus Action โจมตีด้วยอาวุธประชิดแถมได้ทันที 1 ครั้ง' }
          ]
        }
      },
      {
        id: 'swords',
        name_th: 'College of Swords (สำนักร่ายรำเพลงดาบมายา)',
        desc: 'จอมยุทธ์ร่ายรำเพลงดาบ ใช้กระบวนท่า Blade Flourish (เพิ่มเกราะ, ผลักกระเด็น หรือตีหมู่) และใช้พิณเป็นดาบอาคม',
        features: {
          3: [
            { name: 'Bonus Proficiencies & Fighting Style (ชำนาญเกราะกลาง/อาวุธ & เลือกสไตล์การต่อสู้)', desc: 'ชำนาญเกราะกลางและอาวุธประเภท Scimitar พร้อมเลือกรูปแบบการต่อสู้ได้ 1 แบบ (Dueling เพิ่มดาเมจ หรือ Two-Weapon Fighting ถือดาบสองมือ)' },
            { name: 'Blade Flourish (กระบวนท่าร่ายรำเพลงดาบ)', desc: 'เมื่อโจมตีโดนสามารถใช้เต๋า Inspiration เคลื่อนไหวร่ายรำพร้อมทำดาเมจเพิ่มและเลือกใช้ท่าพิเศษได้: (1) Defensive Flourish บวก AC สูง, (2) Slashing Flourish ฟันชิ่งตีหมู่, หรือ (3) Mobile Flourish ผลักกระเด็นพร้อมวิ่งตาม' }
          ],
          6: [
            { name: 'Extra Attack (โจมตี 2 ครั้ง)', desc: 'เมื่อคุณใช้ Action โจมตีด้วยอาวุธในเทิร์น สามารถโจมตีได้ต่อเนื่อง 2 ครั้ง' }
          ],
          14: [
            { name: 'Master’s Flourish (ร่ายรำไร้พ่ายฟรีทุกเทิร์น)', desc: 'เมื่อคุณใช้ Blade Flourish สามารถใช้เต๋าขนาดเล็ก 1d6 ทันทีโดยไม่ต้องเสียแต้ม Bardic Inspiration!' }
          ]
        }
      },
      {
        id: 'glamour',
        name_th: 'College of Glamour (สำนักมนตร์เสน่ห์ภูต Feywild)',
        desc: 'กวีผู้เปี่ยมเสน่ห์แห่งภูต มอบ Temp HP พร้อมสั่งเพื่อนทั้งทีมวิ่งจัดตำแหน่งฟรีโดยไม่โดนตีสวน (Mantle of Inspiration) และสั่งศัตรูด้วย Command ฟรีทุกเทิร์น!',
        features: {
          3: [
            { name: 'Mantle of Inspiration (อาภรณ์ภูตประทานพร & จัดทัพพริบตา!)', desc: 'ใช้ Bonus Action และหัก Bardic Inspiration 1 ลูก เลือกเพื่อนร่วมทีมสูงสุดตามค่า CHA: ทุกคนได้รับ Temporary HP ทันที (5 -> 8 -> 11 -> 14 ตามเลเวล) และเพื่อนทุกคนสามารถใช้ Reaction วิ่งเคลื่อนที่เต็มสปีดได้ทันทีโดยไม่โดนศัตรูตีสวน (Opportunity Attack)!' },
            { name: 'Enthralling Performance (การแสดงสะกดวิญญาณ)', desc: 'บรรเลงดนตรีหรือขับร้อง 1 นาที เพื่อสะกดจิตผู้ฟังให้หลงใหล (Charmed) และเทิดทูนคุณเป็นเวลา 1 ชั่วโมงโดยที่เป้าหมายไม่รู้ตัวว่าถูกสะกดจิต' }
          ],
          6: [
            { name: 'Mantle of Majesty (อาภรณ์ราชันย์ประกาศิตสั่งการฟรีทุกเทิร์น!)', desc: 'ใช้ Bonus Action สวมใส่รัศมีภูต 1 นาที: ตลอด 1 นาทีนี้คุณสามารถร่ายเวท Command (สั่งให้หมอบ ทิ้งอาวุธ หรือวิ่งหนี) เป็น Bonus Action ได้ฟรีทุกเทิร์นโดยไม่เสียช่องเวท! และศัตรูที่ติดสถานะ Charmed จากคุณจะทอย Save ต้านทานไม่ผ่านอัตโนมัติ 100%!' }
          ],
          14: [
            { name: 'Unbreakable Majesty (บารมีสูงส่งไร้ผู้แตะต้อง)', desc: 'ใช้ Bonus Action เปล่งรัศมีสูงส่ง 1 นาที: ศัตรูที่จะโจมตีคุณครั้งแรกในแต่ละเทิร์นต้องทอย CHA Save ให้ผ่านก่อน หากไม่ผ่านจะตีคุณไม่ได้เลยและติด Disadvantage ในการทอยต้านทานเวทของคุณในเทิร์นถัดไป!' }
          ]
        }
      },
      {
        id: 'eloquence',
        name_th: 'College of Eloquence (สำนักวาทศิลป์ไร้พ่าย)',
        desc: 'สุดยอดนักเจรจา ทอย Persuasion/Deception ไม่มีวันออกต่ำกว่า 10 (Silver Tongue), หักแต้ม Saving Throw ของศัตรูด้วยเต๋าแรงใจ และเต๋าแรงใจใช้ไม่ผ่านไม่เสียฟรี!',
        features: {
          3: [
            { name: 'Silver Tongue (ลิ้นทองคำทอยเจรจาขั้นต่ำ 10!)', desc: 'ความสามารถโกงสายโรลเพลย์: ทุกครั้งที่คุณทอยทักษะโน้มน้าวใจ (Persuasion) หรือหลอกลวง (Deception) หากหน้าเต๋า d20 ออก 1 ถึง 9 ระบบจะนับว่าคุณทอยออก 10 เสมอ! (รวมโบนัสแล้วแทบไม่มีวันเจรจาพลาดเลย)' },
            { name: 'Unsettling Words (ถ้อยคำสั่นคลอนจิตใจ ลด Save ศัตรู!)', desc: 'ใช้ Bonus Action และหักเต๋า Bardic Inspiration 1 ลูกทอยใส่ศัตรูในระยะ 60 ฟุต นำแต้มที่ได้ไป "หักลบ" ออกจากผลการทอย Saving Throw ครั้งถัดไปของศัตรูตัวนั้นทันที! (คอมโบกับเวท Hold Monster หรือ Hypnotic Pattern โหดสุดขีด)' }
          ],
          6: [
            { name: 'Unfailing Inspiration (แรงใจไร้พ่าย ใช้ไม่ผ่านไม่เสียเต๋า!)', desc: 'เมื่อเพื่อนร่วมทีมทอยลูกเต๋า Bardic Inspiration ของคุณไปบวกเพิ่มแล้วการทอยนั้นยังคงล้มเหลว เพื่อนจะไม่ต้องเสียลูกเต๋าแรงใจลูกนั้นไปฟรีๆ (เก็บไว้ใช้ใหม่ได้เรื่อยๆ จนกว่าจะสำเร็จ)!' },
            { name: 'Universal Speech (ภาษาสากลสื่อสารทุกเผ่าพันธุ์)', desc: 'ใช้ Action ทำให้สิ่งมีชีวิตสูงสุดตามโบนัส CHA เข้าใจทุกคำพูดของคุณอย่างสมบูรณ์แบบนาน 1 ชั่วโมง แม้จะไม่มีภาษาพูดหรืออยู่คนละเผ่าพันธุ์ก็ตาม' }
          ],
          14: [
            { name: 'Infectious Inspiration (แรงใจส่งต่อไม่สิ้นสุด)', desc: 'เมื่อเพื่อนร่วมทีมใช้ลูกเต๋า Bardic Inspiration ของคุณแล้วทอยสำเร็จ คุณสามารถใช้ Reaction มอบลูกเต๋า Bardic Inspiration ลูกใหม่ให้เพื่อนอีกคนได้ฟรีทันทีโดยไม่ต้องหักโควต้าเต๋าของคุณ!' }
          ]
        }
      },
      {
        id: 'whispers',
        name_th: 'College of Whispers (สำนักกระซิบมรณะและสายลับเงา)',
        desc: 'กวีสายมืดและมือสังหาร ใช้เต๋าแรงใจระเบิดดาเมจ Psychic เหมือน Sneak Attack (Psychic Blades) และสวมรอยขโมยเงาและความทรงจำของผู้ตาย!',
        features: {
          3: [
            { name: 'Psychic Blades (คมมีดจิตสังหาร +2d6 ถึง +8d6 Psychic!)', desc: 'เมื่อคุณโจมตีด้วยอาวุธโดนศัตรู สามารถใช้เต๋า Bardic Inspiration 1 ลูก เพื่ออัดคลื่นจิตทำโบนัสดาเมจ Psychic เพิ่มทันที +2d6 (อัปเกรดเป็น +3d6 ที่ Lv.5, +5d6 ที่ Lv.10 และ +8d6 ที่ Lv.15 เทียบเท่า Sneak Attack ของ Rogue!)' },
            { name: 'Words of Terror (ถ้อยคำกระซิบหวาดผวา)', desc: 'พูดคุยกับเป้าหมายตามลำพัง 1 นาที เพื่อฝังความหวาดระแวงลงในจิตใจ (WIS Save) ทำให้เป้าหมายหวาดกลัว (Frightened) คุณหรือคนที่คุณระบุเป็นเวลา 1 ชั่วโมงเต็ม' }
          ],
          6: [
            { name: 'Mantle of Whispers (สวมรอยเงาวิญญาณผู้วายชนม์)', desc: 'เมื่อมี Humanoid เสียชีวิตใกล้คุณในระยะ 30 ฟุต สามารถใช้ Reaction ดูดกลืนเงาของศพนั้นมาเก็บไว้ แล้วกดใช้สวมรอยปลอมตัวเป็นคนตายคนนั้นได้อย่างแนบเนียน 100% พร้อมดึงข้อมูลความทรงจำทั่วไปของคนตายมาใช้แทรกซึมได้นาน 1 ชั่วโมง!' }
          ],
          14: [
            { name: 'Shadow Lore (ประกาศิตเสียงกระซิบแบล็กเมล์)', desc: 'ใช้ Action กระซิบความลับดำมืดใส่ศัตรูในระยะ 30 ฟุต (WIS Save) ไม่ผ่านจะติดสถานะ Charmed และเชื่อว่าคุณกุมความลับที่ทำลายชีวิตมันได้ จึงต้องยอมทำตามคำสั่งของคุณทุกอย่างนานถึง 8 ชั่วโมง!' }
          ]
        }
      }
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
      {
        id: 'life',
        name_th: 'Life Domain (โดเมนแห่งการเยียวยาชีวิต)',
        desc: 'ชำนาญเกราะหนัก และเพิ่มพลังการฮีลของคาถาฟื้นฟูทั้งหมดอย่างมหาศาล (Disciple of Life: 2 + ระดับเวท)',
        domainSpells: {
          1: ['Bless', 'Cure Wounds'],
          3: ['Lesser Restoration', 'Spiritual Weapon'],
          5: ['Beacon of Hope', 'Revivify'],
          7: ['Death Ward', 'Guardian of Faith'],
          9: ['Mass Cure Wounds', 'Raise Dead']
        },
        channelDivinities: [
          { id: 'preserve_life', name: '💖 Preserve Life (ระเบิดพลังชีวิตหมู่)', action: '1 Action', desc: 'ใช้ Channel Divinity ฟื้นฟูพลังชีวิตให้เพื่อนในระยะ 30 ฟุต จำนวนรวมสูงสุดเท่ากับ 5 x เลเวล Cleric (ฮีลให้เกินครึ่งหลอด Max HP ของแต่ละคนไม่ได้)' }
        ],
        features: {
          1: [
            { name: 'Bonus Proficiency & Disciple of Life (ชำนาญเกราะหนัก & สาวกแห่งชีวิต)', desc: 'ได้รับความชำนาญเกราะหนัก (Heavy Armour) และทุกครั้งที่ร่ายคาถาฟื้นฟู HP เป้าหมายจะได้รับ HP บวกเพิ่มพิเศษอัตโนมัติเท่ากับ 2 + ระดับของช่องเวทมนตร์นั้น!' }
          ],
          2: [
            { name: 'Channel Divinity: Preserve Life (สื่อกลางระเบิดพลังชีวิต)', desc: 'ปลดล็อกท่าฮีลหมู่ด้วยพลังศักดิ์สิทธิ์ ฟื้นฟูเพื่อนในรัศมี 30 ฟุต รวมสูงสุด 5 เท่าของเลเวล' }
          ],
          6: [
            { name: 'Blessed Healer (ผู้เยียวยาได้รับพร)', desc: 'เมื่อร่ายคาถาฟื้นฟู HP ให้ผู้อื่น คุณจะได้รับ HP ฟื้นฟูคืนกลับมาหาตัวเองอัตโนมัติเท่ากับ 2 + ระดับของช่องเวทมนตร์นั้นด้วย!' }
          ],
          8: [
            { name: 'Divine Strike: Radiant (ทัณฑ์ศักดิ์สิทธิ์ +1d8 แสง)', desc: 'เมื่อโจมตีด้วยอาวุธโดน สามารถบวกความเสียหาย Radiant เพิ่มเติมอีก 1d8 (และ 2d8 ที่ Lv.14)' }
          ],
          17: [
            { name: 'Supreme Healing (การเยียวยาสูงสุดไร้ที่ติ)', desc: 'เมื่อต้องทอยลูกเต๋าฟื้นฟู HP จากคาถา ไม่ต้องทอยเต๋า แต่ใช้แต้มสูงสุดของลูกเต๋าทุกลูกได้ทันทีแบบ 100% เต็ม!' }
          ]
        }
      },
      {
        id: 'light',
        name_th: 'Light Domain (โดเมนแห่งแสงสว่างแผดเผา)',
        desc: 'ใช้แสงแผดเผาศัตรูด้วย Warding Flare, ปลดล็อกคาถา Fireball และระเบิดแสงอรุณรุ่ง',
        domainSpells: {
          1: ['Burning Hands', 'Faerie Fire'],
          3: ['Flaming Sphere', 'Scorching Ray'],
          5: ['Daylight', 'Fireball'],
          7: ['Guardian of Faith', 'Wall of Fire'],
          9: ['Flame Strike', 'Scrying']
        },
        channelDivinities: [
          { id: 'radiant_dawn', name: '☀️ Radiance of the Dawn (รัศมีอรุณรุ่งแผดเผาอสูร)', action: '1 Action', dice: '2d10', desc: 'ใช้ Channel Divinity ปล่อยแสงสว่างจ้าในรัศมี 30 ฟุต สลายความมืดเวทมนตร์ และศัตรูต้องทอย CON Save ไม่ผ่านโดนดาเมจ Radiant สูงถึง 2d10 + เลเวล Cleric!' }
        ],
        features: {
          1: [
            { name: 'Bonus Cantrip & Warding Flare (คาถาแสง & เปลวเพลิงพิทักษ์)', desc: 'ได้รับคาถา Light ฟรี และเมื่อศัตรูโจมตีคุณในระยะ 30 ฟุต สามารถใช้ Reaction ส่องแสงใส่ตาทำให้ศัตรูตีแบบเสียเปรียบ (Disadvantage) ทันที!' }
          ],
          2: [
            { name: 'Channel Divinity: Radiance of the Dawn (ระเบิดแสงอรุณรุ่ง)', desc: 'ปลดล็อกท่าระเบิดแสงแผดเผาศัตรูรอบตัว 30 ฟุต ทำดาเมจ Radiant ทันทีโดยไม่โดนเพื่อนร่วมทีม' }
          ],
          6: [
            { name: 'Improved Warding Flare (เปลวเพลิงพิทักษ์ปกป้องเพื่อน)', desc: 'สามารถใช้ Reaction Warding Flare เพื่อปกป้องเพื่อนร่วมทีมในระยะ 30 ฟุต ที่กำลังถูกศัตรูโจมตีให้ศัตรูติด Disadvantage ได้ด้วย!' }
          ],
          8: [
            { name: 'Potent Spellcasting (เวทพื้นฐานทรงอานุภาพ)', desc: 'บวกโบนัส Wisdom Modifier เข้ากับความเสียหายของคาถาพื้นฐาน (Cantrips) สาย Cleric ทุกบท' }
          ],
          17: [
            { name: 'Corona of Light (มงกุฎแสงสุริยัน)', desc: 'ใช้ Action สร้างออร่าแสงอาทิตย์รัศมี 60 ฟุต ศัตรูในรัศมีจะติดเสียเปรียบ (Disadvantage) เวลาทอยต้านทานเวทมนตร์ธาตุไฟ (Fire) และธาตุแสง (Radiant) ทั้งหมด!' }
          ]
        }
      },
      {
        id: 'tempest',
        name_th: 'Tempest Domain (โดเมนแห่งพายุคะนองและสายฟ้า)',
        desc: 'ชำนาญเกราะหนักและอาวุธสงคราม สวนกลับด้วยสายฟ้า และทำดาเมจสายฟ้า/เสียงสูงสุดเต็มแม็กซ์ได้ด้วย Destructive Wrath!',
        domainSpells: {
          1: ['Fog Cloud', 'Thunderwave'],
          3: ['Gust of Wind', 'Shatter'],
          5: ['Call Lightning', 'Sleet Storm'],
          7: ['Control Water', 'Ice Storm'],
          9: ['Destructive Wave', 'Insect Plague']
        },
        channelDivinities: [
          { id: 'destructive_wrath', name: '⚡ Destructive Wrath (สายฟ้าพิโรธดาเมจเต็มแม็กซ์!)', action: 'No Action', desc: 'เมื่อทอยทำความเสียหายธาตุสายฟ้า (Lightning) หรือเสียง (Thunder) สามารถใช้ Channel Divinity บังคับให้ลูกเต๋าทุกเม็ดออกแต้มสูงสุด 100% ทันทีโดยไม่ต้องทอย!' }
        ],
        features: {
          1: [
            { name: 'Bonus Proficiencies & Wrath of the Storm (เกราะหนัก & สายฟ้าฟาดสวน)', desc: 'ชำนาญเกราะหนักและอาวุธสงคราม และเมื่อถูกตีประชิดโดน สามารถใช้ Reaction ช็อตสายฟ้าสวนกลับ 2d8 Lightning หรือ Thunder (DEX Save ลดครึ่งหนึ่ง)' }
          ],
          2: [
            { name: 'Channel Divinity: Destructive Wrath (มหาอภัยทานสายฟ้าเต็มสูบ)', desc: 'บังคับดาเมจสายฟ้า/เสียง (เช่น Call Lightning หรือ Shatter) ให้ออกค่าสูงสุดเต็มแม็กซ์ทันที' }
          ],
          6: [
            { name: 'Thunderbolt Strike (หมัดสายฟ้าผลักกระเด็น)', desc: 'เมื่อคุณทำดาเมจสายฟ้า (Lightning) ใส่ศัตรูขนาด Large หรือเล็กกว่า ศัตรูจะถูกกระแสไฟฟ้ากระแทกปลิวถอยหลังไป 10 ฟุตทันที!' }
          ],
          8: [
            { name: 'Divine Strike: Thunder (ทัณฑ์อัสนีกัมปนาท +1d8)', desc: 'เมื่อโจมตีด้วยอาวุธโดน สามารถบวกความเสียหาย Thunder เพิ่มเติมอีก 1d8 (และ 2d8 ที่ Lv.14)' }
          ],
          17: [
            { name: 'Stormborn (จ้าวแห่งเวหาพายุ)', desc: 'ได้รับความเร็วในการบิน (Flying Speed) เท่ากับความเร็วเดินปกติของคุณตลอดเวลาที่คุณอยู่กลางแจ้ง' }
          ]
        }
      },
      {
        id: 'war',
        name_th: 'War Domain (โดเมนแห่งสงครามศาสตรา)',
        desc: 'นักบวชสงคราม ชำนาญเกราะหนัก โจมตีแถมด้วย Bonus Action (War Priest) และบวกความแม่นยำ +10 (Guided Strike)',
        domainSpells: {
          1: ['Divine Favor', 'Shield of Faith'],
          3: ['Magic Weapon', 'Spiritual Weapon'],
          5: ['Crusader’s Mantle', 'Spirit Guardians'],
          7: ['Freedom of Movement', 'Stoneskin'],
          9: ['Flame Strike', 'Hold Monster']
        },
        channelDivinities: [
          { id: 'guided_strike', name: '🎯 Guided Strike (นำวิถีศาสตรา +10 แม่นยำ!)', action: 'No Action', desc: 'เมื่อทอยโจมตีด้วยอาวุธสามารถใช้ Channel Divinity เพื่อบวกความแม่นยำ (Attack Roll) เพิ่มทันที +10 แต้ม เปลี่ยนจากตีพลาดให้กลายเป็นโดน 100%!' }
        ],
        features: {
          1: [
            { name: 'Bonus Proficiencies & War Priest (เกราะหนัก & โจมตีแถม)', desc: 'ชำนาญเกราะหนักและอาวุธสงคราม และสามารถใช้ Bonus Action โจมตีด้วยอาวุธแถมเพิ่มได้อีก 1 ครั้งในเทิร์น (ชาร์จเท่ากับโบนัส WIS)' }
          ],
          2: [
            { name: 'Channel Divinity: Guided Strike (นำวิถีศาสตราแม่นยำ +10)', desc: 'ปลดล็อกท่าบวกความแม่นยำ +10 แต้มให้การโจมตีของตัวเอง' }
          ],
          6: [
            { name: 'War God’s Blessing (พรเทพสงคราม +10 แม่นยำให้เพื่อน)', desc: 'เมื่อเพื่อนร่วมทีมในระยะ 30 ฟุต ทอยโจมตีพลาด สามารถใช้ Reaction และ Channel Divinity บวก +10 ความแม่นยำให้เพื่อนตีโดนได้ทันที!' }
          ],
          8: [
            { name: 'Divine Strike: Weapon (ทัณฑ์ศาสตราวุธ +1d8)', desc: 'เมื่อโจมตีด้วยอาวุธโดน บวกความเสียหายตามประเภทอาวุธเพิ่มอีก 1d8 (และ 2d8 ที่ Lv.14)' }
          ],
          17: [
            { name: 'Avatar of Battle (ร่างอวตารเทพสงคราม)', desc: 'ได้รับความต้านทาน (Resistance - ลดดาเมจครึ่งหนึ่ง) ต่อความเสียหายกายภาพ Bludgeoning, Piercing และ Slashing จากอาวุธที่ไม่ใช่เวทมนตร์' }
          ]
        }
      },
      {
        id: 'trickery',
        name_th: 'Trickery Domain (โดเมนแห่งกลลวงและเงามายา)',
        desc: 'นักบวชสายลอบเร้น มอบ Advantage Stealth ให้เพื่อน เสกร่างโคลนลวงตา (Invoke Duplicity) และปลดล็อกเวท Dimension Door / Polymorph',
        domainSpells: {
          1: ['Charm Person', 'Disguise Self'],
          3: ['Mirror Image', 'Pass without Trace'],
          5: ['Blink', 'Dispel Magic'],
          7: ['Dimension Door', 'Polymorph'],
          9: ['Dominate Person', 'Modify Memory']
        },
        channelDivinities: [
          { id: 'invoke_duplicity', name: '👥 Invoke Duplicity (อัญเชิญร่างแยกมายา)', action: '1 Action', desc: 'ใช้ Channel Divinity สร้างร่างแยกภาพลวงตาของตัวเองขึ้นมานาน 1 นาที คุณสามารถร่ายเวทออกจากตำแหน่งร่างแยกได้ และเมื่อคุณกับร่างแยกยืนประกบศัตรู จะตีศัตรูแบบได้เปรียบ (Advantage) ตลอดเวลา!' },
          { id: 'cloak_shadows', name: '👻 Cloak of Shadows (ผ้าคลุมเงาล่องหน)', action: '1 Action', desc: 'ปลดล็อกที่ Lv.6: ใช้ Channel Divinity เพื่อล่องหนหายตัว (Invisible) ทันทีจนจบเทิร์นถัดไปของคุณ!' }
        ],
        features: {
          1: [
            { name: 'Blessing of the Trickster (พรแห่งจอมลวงตา)', desc: 'ใช้ Action แตะเพื่อนร่วมทีม 1 คน มอบความได้เปรียบ (Advantage) ในการทอยทักษะลอบเร้น (Stealth) ให้เพื่อนคนนั้นนาน 1 ชั่วโมงเต็มโดยไม่เสียช่องเวท!' }
          ],
          2: [
            { name: 'Channel Divinity: Invoke Duplicity (ร่างแยกมายาปั่นป่วน)', desc: 'เสกร่างโคลนภาพลวงตามาช่วยร่ายเวทและมอบ Advantage ในการโจมตีประชิดให้ทีม' }
          ],
          6: [
            { name: 'Channel Divinity: Cloak of Shadows (เร้นกายไร้เงา)', desc: 'สามารถใช้ Channel Divinity เพื่อหายตัวล่องหน (Invisible) ได้ทันที' }
          ],
          8: [
            { name: 'Divine Strike: Poison (ทัณฑ์พิษสังหาร +1d8)', desc: 'เมื่อโจมตีด้วยอาวุธโดน บวกความเสียหายพิษ (Poison) เพิ่มเติมอีก 1d8 (และ 2d8 ที่ Lv.14)' }
          ],
          17: [
            { name: 'Improved Duplicity (กองทัพร่างแยกมายา 4 ร่าง)', desc: 'เมื่อกดใช้ Invoke Duplicity คุณจะสร้างร่างแยกภาพลวงตาออกมาพร้อมกันถึง 4 ร่าง! และสั่งเคลื่อนที่ได้อิสระทั่วสนามรบ' }
          ]
        }
      },
      {
        id: 'knowledge',
        name_th: 'Knowledge Domain (โดเมนแห่งภูมิปัญญาและปราชญ์)',
        desc: 'ปราชญ์ผู้หยั่งรู้สรรพสิ่ง ได้รับความชำนาญทักษะความรู้แบบคูณสอง (Expertise), อ่านใจศัตรู และชำนาญทักษะใดก็ได้ชั่วคราว',
        domainSpells: {
          1: ['Command', 'Identify'],
          3: ['Augury', 'Suggestion'],
          5: ['Nondetection', 'Speak with Dead'],
          7: ['Arcane Eye', 'Confusion'],
          9: ['Legend Lore', 'Scrying']
        },
        channelDivinities: [
          { id: 'knowledge_ages', name: '📚 Knowledge of the Ages (ภูมิปัญญาแห่งยุคสมัย)', action: '1 Action', desc: 'ใช้ Channel Divinity เชื่อมต่อคลังปัญญาจักรวาล เลือกรับความชำนาญ (Proficiency) ในทักษะ (Skill) หรือเครื่องมือ (Tool) ใดก็ได้ 1 อย่าง (หรือทุกทักษะใน 1 สายสเตตัสตามกฎ BG3) นาน 10 นาที!' },
          { id: 'read_thoughts', name: '🧠 Read Thoughts (อ่านใจและสั่งการจิต)', action: '1 Action', desc: 'ปลดล็อกที่ Lv.6: ใช้ Channel Divinity อ่านความคิดศัตรูในระยะ 60 ฟุต (WIS Save) หากศัตรูไม่ผ่าน คุณสามารถร่ายเวท Suggestion สั่งการศัตรูตัวนั้นได้ฟรีทันทีโดยศัตรูจะทอย Save ต้านไม่ผ่านอัตโนมัติ!' }
        ],
        features: {
          1: [
            { name: 'Blessings of Knowledge (พรแห่งมหาปราชญ์ - Expertise 2 ทักษะ)', desc: 'เรียนรู้ภาษาเพิ่ม 2 ภาษา และเลือกรับความชำนาญคูณสอง (Expertise) ในทักษะความรู้ 2 อย่างจาก: Arcana, History, Nature หรือ Religion!' }
          ],
          2: [
            { name: 'Channel Divinity: Knowledge of the Ages (ดึงทักษะบรรพกาล)', desc: 'เสกความชำนาญทักษะใดก็ได้มาใช้งานได้ตามสถานการณ์' }
          ],
          6: [
            { name: 'Channel Divinity: Read Thoughts (เจาะลึกอ่านจิตใจ)', desc: 'อ่านความคิดเป้าหมายและบังคับใช้คำสั่ง Suggestion โดยไม่ต้องเสียช่องเวท' }
          ],
          8: [
            { name: 'Potent Spellcasting (เวทพื้นฐานทรงอานุภาพ)', desc: 'บวกโบนัส Wisdom Modifier เข้ากับความเสียหายของคาถาพื้นฐาน (Cantrips) สาย Cleric ทุกบท' }
          ],
          17: [
            { name: 'Visions of the Past (เนตรย้อนรอยอดีต)', desc: 'สามารถทำสมาธิเพ่งมองวัตถุหรือสถานที่เพื่อย้อนดูเหตุการณ์ในอดีตที่เคยเกิดขึ้นในสถานที่นั้น หรือประวัติของผู้ถือครองวัตถุนั้นได้ราวกับตาเห็น' }
          ]
        }
      },
      {
        id: 'nature',
        name_th: 'Nature Domain (โดเมนแห่งธรรมชาติและพงไพร)',
        desc: 'นักบวชผู้พิทักษ์ธรรมชาติ ชำนาญเกราะหนัก เรียน Cantrip ของ Druid (เช่น Shillelagh) และใช้ Reaction ลดดาเมจธาตุครึ่งหนึ่งให้เพื่อนได้ตลอดเวลา!',
        domainSpells: {
          1: ['Animal Friendship', 'Speak with Animals'],
          3: ['Barkskin', 'Spike Growth'],
          5: ['Plant Growth', 'Wind Wall'],
          7: ['Dominate Beast', 'Grasping Vine'],
          9: ['Insect Plague', 'Tree Stride']
        },
        channelDivinities: [
          { id: 'charm_animals_plants', name: '🦌 Charm Animals and Plants (สะกดสัตว์ป่าและพฤกษา)', action: '1 Action', desc: 'ใช้ Channel Divinity ชูสัญลักษณ์ศักดิ์สิทธิ์ สัตว์ป่าและมอนสเตอร์พืชทุกตัวในระยะ 30 ฟุต ต้องทอย WIS Save ไม่ผ่านจะติดสถานะ Charmed และเป็นมิตรกับคุณนาน 1 นาที' }
        ],
        features: {
          1: [
            { name: 'Acolyte of Nature & Heavy Armour (สาวกพงไพร & เกราะหนัก)', desc: 'ได้รับความชำนาญเกราะหนัก (Heavy Armour), เลือกเรียน Cantrip ของ Druid ได้ฟรี 1 บท (เช่น Shillelagh เสกกระบองตีด้วยค่า WIS หรือ Thorn Whip) และชำนาญทักษะธรรมชาติ 1 อย่าง' }
          ],
          2: [
            { name: 'Channel Divinity: Charm Animals and Plants (มนตราพงไพร)', desc: 'สะกดจิตสัตว์ป่าและอสูรพืชรอบตัว 30 ฟุต ให้หยุดโจมตี' }
          ],
          6: [
            { name: 'Dampen Elements (เกราะธรรมชาติซับพลังธาตุให้ทีม!)', desc: 'สุดยอดสกิลป้องกัน: เมื่อคุณหรือเพื่อนร่วมทีมในระยะ 30 ฟุต ได้รับความเสียหายธาตุ (Acid, Cold, Fire, Lightning หรือ Thunder) คุณสามารถใช้ Reaction มอบ Resistance (ลดดาเมจครึ่งหนึ่ง!) ให้ทันที ใช้ได้เรื่อยๆ ทุกเทิร์นโดยไม่เสียชาร์จ!' }
          ],
          8: [
            { name: 'Divine Strike: Elemental (ทัณฑ์ธาตุธรรมชาติ +1d8)', desc: 'เมื่อโจมตีด้วยอาวุธโดน สามารถเลือกบวกความเสียหายธาตุไฟ (Fire), น้ำแข็ง (Cold) หรือสายฟ้า (Lightning) เพิ่มอีก 1d8 ตามใจชอบในแต่ละหมัด! (และ 2d8 ที่ Lv.14)' }
          ],
          17: [
            { name: 'Master of Nature (จ้าวแห่งสรรพสัตว์และพงไพร)', desc: 'คุณสามารถใช้ Bonus Action ออกคำสั่งให้สัตว์ป่าและพืชที่ติดสถานะ Charmed จากคุณ เข้าโจมตีศัตรูตามคำสั่งของคุณได้!' }
          ]
        }
      }
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
      {
        id: 'land',
        name_th: 'Circle of the Land (สภาแห่งผืนแผ่นดินธรรมชาติ)',
        desc: 'จอมเวทธรรมชาติ ฟื้นฟูช่องเวทได้เมื่อพักสั้น (Natural Recovery) และได้รับคาถาประจำถิ่นตามภูมิประเทศที่เลือก',
        circleSpellsOptions: {
          arctic: { 3: ['Hold Person', 'Spike Growth'], 5: ['Sleet Storm', 'Slow'], 7: ['Freedom of Movement', 'Ice Storm'], 9: ['Commune with Nature', 'Cone of Cold'] },
          coast: { 3: ['Mirror Image', 'Misty Step'], 5: ['Water Breathing', 'Water Walk'], 7: ['Control Water', 'Freedom of Movement'], 9: ['Conjure Elemental', 'Scrying'] },
          desert: { 3: ['Blur', 'Silence'], 5: ['Create Food and Water', 'Protection from Energy'], 7: ['Blight', 'Hallucinatory Terrain'], 9: ['Insect Plague', 'Wall of Stone'] },
          forest: { 3: ['Barkskin', 'Spider Climb'], 5: ['Call Lightning', 'Plant Growth'], 7: ['Divination', 'Freedom of Movement'], 9: ['Commune with Nature', 'Tree Stride'] },
          grassland: { 3: ['Invisibility', 'Pass without Trace'], 5: ['Daylight', 'Haste'], 7: ['Divination', 'Freedom of Movement'], 9: ['Dream', 'Insect Plague'] },
          mountain: { 3: ['Spider Climb', 'Spike Growth'], 5: ['Lightning Bolt', 'Plant Growth'], 7: ['Stone Shape', 'Stoneskin'], 9: ['Passwall', 'Wall of Stone'] },
          swamp: { 3: ['Acid Arrow', 'Melf’s Acid Arrow'], 5: ['Water Walk', 'Stinking Cloud'], 7: ['Freedom of Movement', 'Blight'], 9: ['Insect Plague', 'Scrying'] },
          underdark: { 3: ['Spider Climb', 'Web'], 5: ['Gaseous Form', 'Stinking Cloud'], 7: ['Greater Invisibility', 'Stone Shape'], 9: ['Cloudkill', 'Insect Plague'] }
        },
        features: {
          2: [
            { name: 'Bonus Cantrip & Natural Recovery (คาถาเพิ่ม & ฟื้นฟูมนตราธรรมชาติ)', desc: 'ได้รับ Cantrip สาย Druid เพิ่มฟรี 1 บท และเมื่อคุณกดพักผ่อนสั้น (Short Rest) คุณสามารถฟื้นฟูช่องเวทมนตร์ (Spell Slots) รวมกันสูงสุดได้เท่ากับครึ่งหนึ่งของเลเวลดรูอิดของคุณ (ปัดเศษขึ้น เช่น ดรูอิด Lv.4 ฟื้นช่องเวทระดับ 2 ได้)' }
          ],
          6: [
            { name: 'Land’s Stride (ย่างก้าวพงไพรไร้สิ่งกีดขวาง)', desc: 'คุณสามารถเดินผ่านพืชรกชัฏ/พื้นที่วิบากธรรมชาติ (Nonmagical Difficult Terrain) ได้โดยไม่ถูกลดความเร็ว และเดินทะลุดงหนามเวทมนตร์ได้โดยไม่รับดาเมจ!' }
          ],
          10: [
            { name: 'Nature’s Ward (เกราะป้องกันธรรมชาติอันศักดิ์สิทธิ์)', desc: 'คุณจะไม่สามารถติดสถานะหวาดกลัว (Frightened) หรือติดพิษ (Poisoned) จากพวกภูต (Fey) หรือธาตุ (Elementals) และต้านทานโรคภัยไข้เจ็บทั้งหมด' }
          ],
          14: [
            { name: 'Nature’s Sanctuary (อาณาเขตพิทักษ์สัตว์ป่า)', desc: 'สัตว์ป่าหรือพืชมีชีวิตที่จะโจมตีคุณจะต้องทอย WIS Save (DC = Spell Save DC) หากไม่ผ่านพวกมันจะต้องเปลี่ยนเป้าหมายไปโจมตีตัวอื่นแทน' }
          ]
        }
      },
      {
        id: 'moon',
        name_th: 'Circle of the Moon (สภาแห่งจันทราอสูรป่า)',
        desc: 'แปลงร่างเป็นสัตว์อสูรทรงพลัง (Combat Wild Shape ด้วย Bonus Action) พร้อมฮีลตัวเองและโจมตีด้วยร่างสัตว์เวทมนตร์',
        features: {
          2: [
            { name: 'Combat Wild Shape & Moon Druid Forms (แปลงร่างไวด้วย Bonus Action)', desc: 'คุณสามารถใช้ Bonus Action (แทน Action ปกติ) เพื่อกดแปลงร่างเป็นสัตว์ป่า (Wild Shape) ได้ทันทีในระหว่างต่อสู้! และสามารถใช้ช่องเวทมนตร์เพื่อฮีลตัวเองขณะอยู่ในร่างสัตว์ได้ (ช่องเวท Lv.1 ฮีลได้ 3 HP ต่อเลเวลเวท)' },
            { name: 'Circle Forms (ขีดจำกัดร่างสัตว์ระดับสูง)', desc: 'แปลงร่างเป็นสัตว์อสูรที่มีระดับ CR สูงขึ้นได้ทันที (เช่น Brown Bear, Dire Wolf ที่มี HP หนาและดาเมจมหาศาลตั้งแต่เลเวล 2)' }
          ],
          6: [
            { name: 'Primal Strike (กรงเล็บอสูรอาคมเวท)', desc: 'การโจมตีด้วยกรงเล็บและเขี้ยวในร่างสัตว์ป่าของคุณจะนับเป็นอาวุธเวทมนตร์ (Magical Attacks) ทันที ช่วยให้โจมตีทะลุการต้านทานกายภาพของมอนสเตอร์ได้!' }
          ],
          10: [
            { name: 'Elemental Wild Shape (แปลงร่างเป็นธาตุอสูรธาตุ - Elemental)', desc: 'คุณสามารถใช้ Wild Shape 2 ครั้งพร้อมกันเพื่อแปลงร่างเป็นธาตุทรงพลัง (Air Elemental, Earth Elemental, Fire Elemental หรือ Water Elemental) ได้!' }
          ],
          14: [
            { name: 'Thousand Forms (ร่างจำแลงพันหน้า)', desc: 'สามารถร่ายคาถา Alter Self ได้ตลอดเวลาโดยไม่ต้องใช้ช่องเวทมนตร์ และสามารถเปลี่ยนรูปร่างหน้าตาหรือแปลงกายเป็นสัตว์เล็กได้ตามใจชอบ' }
          ]
        }
      },
      {
        id: 'spores',
        name_th: 'Circle of the Spores (สภาแห่งสปอร์มรณะ)',
        desc: 'ควบคุมสปอร์เห็ดพิษ เพิ่ม Temp HP มหาศาล (Symbiotic Entity) และปลุกซากศพขึ้นมาช่วยสู้',
        features: {
          2: [
            { name: 'Halo of Spores (ออร่าสปอร์พิษรอบตัว)', desc: 'เมื่อศัตรูเข้ามาใกล้ในระยะ 10 ฟุต คุณสามารถใช้ Reaction ปล่อยสปอร์พิษใส่ ทำความเสียหาย Necrotic 1d4 (เพิ่มเป็น 1d6 ที่ Lv.6, 1d8 ที่ Lv.10, 1d10 ที่ Lv.14) โดยไม่ต้องทอยโจมตี!' },
            { name: 'Symbiotic Entity (เกราะสปอร์ชีวภาพเพิ่ม HP มหาศาล)', desc: 'ใช้ Wild Shape 1 ครั้งเพื่อเคลือบตัวเองด้วยสปอร์ ได้รับ Temporary HP สูงสุดถึง 4 แต้มต่อเลเวลดรูอิด และในขณะที่มีเกราะนี้ ดาเมจจากออร่า Halo of Spores และการโจมตีด้วยอาวุธจะบวกความเสียหาย Necrotic เพิ่มอีก 1d6!' }
          ],
          6: [
            { name: 'Fungal Infestation (ปลุกซากสปอร์มรณะ)', desc: 'เมื่อสิ่งมีชีวิตขนาด Medium หรือ Small เสียชีวิตลงใกล้คุณ คุณสามารถใช้ Reaction และใช้สปอร์ปลุกซากศพนั้นให้ลุกขึ้นมาเป็นซอมบี้สปอร์รับใช้คุณได้ทันที (ใช้ได้จำนวนครั้งเท่ากับ WIS Modifier)' }
          ],
          10: [
            { name: 'Spreading Spores (ระเบิดดงสปอร์พิษคุมพื้นที่)', desc: 'สามารถใช้ Bonus Action ปล่อยกลุ่มสปอร์ลอยไปคุมพื้นที่ในระยะ 30 ฟุต นาน 1 นาที ใครก็ตามที่เดินผ่านจะโดนดาเมจสปอร์พิษอัตโนมัติทุกเทิร์น' }
          ],
          14: [
            { name: 'Fungal Body (กายเนื้อแห่งเห็ดราอมตะ)', desc: 'ร่างกายของคุณถูกสปอร์ยึดครองอย่างสมบูรณ์ ทำให้คุณไม่ต้องกลัวการติดคริติคอล (Crits ไม่คิดเบิ้ลดาเมจ), ไม่ติดสถานะตาบอด, กลัว, พิษ หรือป่วยใดๆ ทั้งสิ้น' }
          ]
        }
      },
      {
        id: 'stars',
        name_th: 'Circle of Stars (สภาแห่งหมู่ดาวและจักรวาล)',
        desc: 'ดรูอิดแห่งดวงดาว ยิง Guiding Bolt ฟรี, แปลงร่างเป็นกลุ่มดาวเรืองแสง (Archer ยิงธนูดาวด้วยโบนัสแอคชั่น / Chalice ฮีลแถม / Dragon สมาธิเวทขั้นต่ำ 10)!',
        bonusSpells: {
          2: ['Guidance', 'Guiding Bolt']
        },
        features: {
          2: [
            { name: 'Star Map (แผนที่ดาราจักร — ร่าย Guiding Bolt ฟรี!)', desc: 'ได้รับคาถา Guidance และ Guiding Bolt เข้าสมุดเวทอัตโนมัติ! และคุณสามารถร่าย Guiding Bolt (4d6 Radiant + มอบ Advantage) ได้ฟรีโดยไม่ต้องเสียช่องเวทมนตร์จำนวนครั้งเท่ากับค่า Proficiency Bonus (+2 ถึง +6 ครั้ง/พักยาว)!' },
            { name: 'Starry Form (ร่างจำแลงกลุ่มดาว 3 รูปแบบ!)', desc: 'ใช้ Bonus Action และแต้ม Wild Shape 1 ครั้ง เปลี่ยนร่างกายให้เรืองแสงเป็นกลุ่มดาวนาน 10 นาที (ยังร่ายเวทได้ตามปกติ!) เลือกกลุ่มดาวได้ 3 แบบ: (1) 🏹 Archer: ใช้ Bonus Action ยิงศรแสงดารา 1d8+WIS Radiant ทุกเทิร์น, (2) 🏆 Chalice: ทุกครั้งที่ร่ายเวทฮีล จะฮีลแถมฟรีอีก 1d8+WIS HP ให้ตัวเองหรือเพื่อน, หรือ (3) 🐉 Dragon: ทอย CON Save รักษาสมาธิเวท (Concentration) หน้าเต๋าไม่มีวันออกต่ำกว่า 10!' }
          ],
          6: [
            { name: 'Cosmic Omen (ลางบอกเหตุแห่งจักรวาล บวก/ลบ 1d6)', desc: 'หลังพักยาว ทอยเต๋าดูดวงชะตา คุณสามารถใช้ Reaction ทอยเต๋า 1d6 เพื่อบวกเพิ่ม (Weal) ให้เพื่อนที่กำลังทอยโจมตี/Save หรือนำไปหักลบ (Woe) ออกจากผลเต๋าของศัตรูได้ทันที!' }
          ],
          10: [
            { name: 'Twinkling Constellations (กลุ่มดาวจรัสแสงอัปเกรด & บินได้!)', desc: 'อัปเกรดร่าง Starry Form: เต๋าของ Archer และ Chalice เพิ่มเป็น 2d8+WIS, ร่าง Dragon มอบความเร็วในการบินลอยตัว (Flying Speed 20 ฟุต), และคุณสามารถสลับเปลี่ยนกลุ่มดาวไปมาได้ฟรีทุกต้นเทิร์น!' }
          ],
          14: [
            { name: 'Full of Stars (กายาดวงดาราต้านทานกายภาพครึ่งหนึ่ง!)', desc: 'ในขณะที่คุณอยู่ในร่างกลุ่มดาว (Starry Form) ร่างกายของคุณจะโปร่งแสงดั่งหมู่ดาว ทำให้คุณได้รับความต้านทาน (Resistance - ลดดาเมจครึ่งหนึ่ง!) ต่อการโจมตีแบบ Bludgeoning, Piercing และ Slashing ทุกชนิด!' }
          ]
        }
      },
      {
        id: 'wildfire',
        name_th: 'Circle of Wildfire (สภาแห่งเพลิงพงไพรและการเกิดใหม่)',
        desc: 'ดรูอิดผู้ควบคุมไฟป่า อัญเชิญภูตเพลิง (Wildfire Spirit) ที่พาเพื่อนทั้งทีมวาร์ปหนีพร้อมระเบิดไฟได้ทุกเทิร์น และเพิ่มพลังเวทไฟและเวทฮีล!',
        bonusSpells: {
          2: ['Burning Hands', 'Cure Wounds'],
          3: ['Flaming Sphere', 'Scorching Ray'],
          5: ['Plant Growth', 'Revivify'],
          7: ['Aura of Life', 'Fire Shield'],
          9: ['Flame Strike', 'Mass Cure Wounds']
        },
        features: {
          2: [
            { name: 'Summon Wildfire Spirit (อัญเชิญภูตเพลิงพงไพร วาร์ปหมู่ทุกเทิร์น!)', desc: 'ใช้ Action และแต้ม Wild Shape 1 ครั้ง อัญเชิญภูตเพลิงออกมาในระยะ 30 ฟุต (ศัตรูรอบจุดเกิดโดนไฟ 2d6) ในแต่ละเทิร์นคุณใช้ Bonus Action สั่งภูตเพลิงให้ยิงไฟ (1d6+Prof) หรือใช้ท่า "Fiery Teleportation" พาตัวมันเองและเพื่อนร่วมทีมทุกคนที่ยืนใกล้มัน วาร์ป (Teleport) หนีไปได้ไกล 15 ฟุต พร้อมทิ้งระเบิดไฟเผาศัตรูที่ยืนอยู่จุดเดิมได้เรื่อยๆ ทุกเทิร์น!' }
          ],
          6: [
            { name: 'Enhanced Bond (สายสัมพันธ์เพลิงชีวา +1d8 ดาเมจไฟและฮีล!)', desc: 'ตราบใดที่ภูตเพลิงของคุณถูกอัญเชิญอยู่ ทุกครั้งที่คุณร่ายเวทมนตร์ที่ทำดาเมจไฟ (Fire) หรือร่ายเวทฟื้นฟูพลังชีวิต (Heal) คุณจะได้ทอยลูกเต๋า +1d8 บวกเพิ่มเข้าไปในดาเมจหรือยอดฮีลนั้นทันที! และร่ายเวทออกจากตัวภูตเพลิงแทนตัวคุณได้' }
          ],
          10: [
            { name: 'Cauterizing Flames (เพลิงชำระล้างวิญญาณ)', desc: 'เมื่อมีสิ่งมีชีวิตตายลงในระยะ 30 ฟุต คุณสามารถใช้ Reaction เสกเปลวไฟวิญญาณครอบคลุมศพนั้น แล้วสั่งระเบิดเพื่อเลือกผลได้ว่าจะ "ฮีลเพื่อน" หรือ "เผาศัตรู" เป็นจำนวน 2d10 + WIS Modifier ทันที!' }
          ],
          14: [
            { name: 'Blazing Revival (เพลิงฟีนิกซ์คืนชีพอมตะ!)', desc: 'หากคุณล้มลงเหลือ 0 HP ในขณะที่ภูตเพลิงของคุณยังอยู่ในสนามรบ ภูตเพลิงสามารถสละตัวเองระเบิดพลังชีวิตชุบคุณให้ลุกขึ้นมายืนทันทีพร้อม HP ครึ่งหลอด Max HP!' }
          ]
        }
      }
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
      {
        id: 'battle_master',
        name_th: 'Battle Master (ปรมาจารย์กลยุทธ์)',
        desc: 'ใช้ลูกเต๋ายุทธ์ (Superiority Dice) ออกกระบวนท่าปลดอาวุธ สวนกลับ หรือขัดขาศัตรู',
        features: {
          3: [
            { name: 'Combat Superiority (ลูกเต๋ายุทธ์และกระบวนท่า)', desc: 'ได้รับลูกเต๋ายุทธ์ (Superiority Dice) 4 ลูก (ขนาด 1d8) และเลือกเรียนกระบวนท่ายุทธ์ (Maneuvers) 3 ท่า ลูกเต๋าจะฟื้นฟูทั้งหมดเมื่อพักสั้นหรือพักยาว (DC = 8 + Prof + STR หรือ DEX)' },
            { name: 'Student of War (ปราชญ์พิชัยสงคราม)', desc: 'ได้รับความชำนาญในเครื่องมือช่าง (Artisan’s Tools) 1 ชนิด' }
          ],
          7: [
            { name: 'Know Your Enemy (อ่านขาดศัตรู)', desc: 'ได้รับลูกเต๋ายุทธ์เพิ่มเป็น 5 ลูก เลือกเรียนกระบวนท่าเพิ่มอีก 2 ท่า (รวม 5 ท่า) และสามารถสังเกตวิเคราะห์ข้อมูลสเตตัส/HP ของศัตรูได้' }
          ],
          10: [
            { name: 'Improved Combat Superiority (ยกระดับลูกเต๋ายุทธ์ 1d10)', desc: 'ขนาดของลูกเต๋ายุทธ์ทั้งหมดอัปเกรดจาก 1d8 เป็น 1d10! และเลือกเรียนกระบวนท่าเพิ่มอีก 2 ท่า (รวม 7 ท่า)' }
          ],
          15: [
            { name: 'Relentless (ยุทธวิธีไร้พ่าย)', desc: 'ได้รับลูกเต๋ายุทธ์เพิ่มเป็น 6 ลูก เลือกเรียนกระบวนท่าเพิ่มอีก 2 ท่า (รวม 9 ท่า) และเมื่อเข้าสู่การต่อสู้โดยไม่มีลูกเต๋ายุทธ์เหลือ จะได้รับคืน 1 ลูกทันทีฟรีๆ!' }
          ],
          18: [
            { name: 'Ultimate Combat Superiority (สุดยอดลูกเต๋ายุทธ์ 1d12)', desc: 'ขนาดของลูกเต๋ายุทธ์ทั้งหมดอัปเกรดสูงสุดเป็น 1d12!' }
          ]
        },
        maneuvers: [
          { id: 'riposte', name: '⚔️ Riposte (เพลงดาบสวนกลับ)', desc: 'เมื่อศัตรูโจมตีประชิดใส่คุณพลาด ใช้ Reaction และเต๋ายุทธ์ 1 ลูกเพื่อโจมตีสวนกลับทันที พร้อมนำแต้มเต๋ายุทธ์ไปบวกดาเมจเพิ่ม!' },
          { id: 'precision', name: '🎯 Precision Attack (โจมตีแม่นยำไร้พลาด)', desc: 'เมื่อทอยโจมตีอาวุธ สามารถใช้เต๋ายุทธ์ 1 ลูกทอยบวกเพิ่มเข้าไปในค่าความแม่นยำ (Attack Roll) เพื่อเปลี่ยนจากตีพลาดให้กลายเป็นโดน!' },
          { id: 'trip', name: '🦵 Trip Attack (กวาดขาให้ล้มคว่ำ)', desc: 'เมื่อโจมตีโดน ใช้เต๋ายุทธ์บวกดาเมจเพิ่ม และหากเป้าหมายมีขนาด Large หรือเล็กกว่า ต้องทอย STR Save ไม่ผ่านจะล้มคว่ำ (Prone) ทันที' },
          { id: 'disarming', name: '🗡️ Disarming Attack (ฟันปลดอาวุธ)', desc: 'เมื่อโจมตีโดน ใช้เต๋ายุทธ์บวกดาเมจเพิ่ม และบังคับศัตรูทอย STR Save หากไม่ผ่านจะต้องปล่อยอาวุธหรือสิ่งของที่ถืออยู่ในมือหล่นลงพื้นทันที!' },
          { id: 'menacing', name: '👹 Menacing Attack (โจมตีข่มขวัญสั่นประสาท)', desc: 'เมื่อโจมตีโดน ใช้เต๋ายุทธ์บวกดาเมจเพิ่ม และเป้าหมายต้องทอย WIS Save หากไม่ผ่านจะติดสถานะหวาดกลัว (Frightened) คุณจนจบเทิร์นถัดไป' },
          { id: 'pushing', name: '💨 Pushing Attack (กระแทกปลิว)', desc: 'เมื่อโจมตีโดน ใช้เต๋ายุทธ์บวกดาเมจเพิ่ม และหากเป้าหมายมีขนาด Large หรือเล็กกว่า ต้องทอย STR Save ไม่ผ่านจะถูกผลักกระเด็นถอยหลังไปสูงสุด 15 ฟุต' },
          { id: 'feinting', name: '🎭 Feinting Attack (หลอกล่อฟันจุดตาย)', desc: 'ใช้ Bonus Action และเต๋ายุทธ์ 1 ลูกเพื่อหลอกล่อศัตรูในระยะ 5 ฟุต ทำให้การโจมตีครั้งถัดไปในเทิร์นนี้ได้เปรียบ (Advantage) และบวกแต้มเต๋ายุทธ์เข้ากับดาเมจ' },
          { id: 'goading', name: '🛡️ Goading Attack (ยั่วยุดึงความสนใจ)', desc: 'เมื่อโจมตีโดน ใช้เต๋ายุทธ์บวกดาเมจเพิ่ม และเป้าหมายต้องทอย WIS Save ไม่ผ่านจะติดเสียเปรียบ (Disadvantage) เวลาไปโจมตีคนอื่นที่ไม่ใช่คุณ' },
          { id: 'sweeping', name: '🌪️ Sweeping Attack (เพลงดาบกวาดหมู่)', desc: 'เมื่อโจมตีประชิดโดนศัตรู สามารถใช้เต๋ายุทธ์ 1 ลูกเพื่อฟันชิ่งใส่ศัตรูอีกตัวที่อยู่ติดกันในระยะ 5 ฟุต ทำความเสียหายเท่ากับแต้มเต๋ายุทธ์ที่ทอยได้' },
          { id: 'commander', name: '📣 Commander’s Strike (บัญชาการโจมตี)', desc: 'สละการโจมตี 1 ครั้งและใช้ Bonus Action + เต๋ายุทธ์ 1 ลูก สั่งให้เพื่อนร่วมทีมใช้ Reaction โจมตีศัตรูทันที พร้อมบวกแต้มเต๋ายุทธ์เข้ากับดาเมจของเพื่อน!' },
          { id: 'rally', name: '🚩 Rally (ปลุกขวัญกำลังใจ)', desc: 'ใช้ Bonus Action และเต๋ายุทธ์ 1 ลูก มอบพลังชีวิตชั่วคราว (Temporary HP) ให้เพื่อนร่วมทีมเท่ากับ แต้มเต๋ายุทธ์ + CHA Modifier' },
          { id: 'evasive', name: '🦶 Evasive Footwork (ฟุตเวิร์คหลบหลีก)', desc: 'เมื่อเคลื่อนที่ สามารถทอยเต๋ายุทธ์ 1 ลูกแล้วนำแต้มที่ได้ไปบวกเพิ่มค่าเกราะ AC ของตัวเองตลอดการเคลื่อนที่ในรอบนั้น' }
        ]
      },
      {
        id: 'eldritch_knight',
        name_th: 'Eldritch Knight (อัศวินมนตรา)',
        desc: 'นักรบมนตรา ผสานการฟันดาบเข้ากับคาถาป้องกันและโจมตีสาย Wizard',
        features: {
          3: [
            { name: 'Spellcasting (ศาสตร์เวทอัศวิน)', desc: 'ปลดล็อกการร่ายเวทมนตร์จากตำรา Wizard (ใช้ค่า INT ในการร่ายเวท) โดยเน้นสำนักป้องกัน (Abjuration) และทำลายล้าง (Evocation)' },
            { name: 'Weapon Bond (พันธสัญญาแห่งศาสตราวุธ)', desc: 'ทำพิธีผูกพันธะกับอาวุธคู่กาย ทำให้คุณไม่มีวันถูกปลดอาวุธ (Disarmed) และสามารถใช้ Bonus Action เรียกอาวุธวาร์ปกลับมาอยู่ในมือได้ทันที!' }
          ],
          7: [
            { name: 'War Magic (ยุทธเวทประสาน)', desc: 'เมื่อคุณใช้ Action ในเทิร์นเพื่อร่ายคาถาพื้นฐาน (Cantrip) คุณสามารถใช้ Bonus Action โจมตีด้วยอาวุธแถมได้อีก 1 ครั้งทันที!' }
          ],
          10: [
            { name: 'Eldritch Strike (คมดาบสะกดมนตรา)', desc: 'เมื่อคุณโจมตีศัตรูโดนด้วยอาวุธ ศัตรูตัวนั้นจะติดสถานะเสียเปรียบ (Disadvantage) ในการทอย Saving Throw เพื่อต้านทานเวทมนตร์บทถัดไปที่คุณร่ายใส่ก่อนจบเทิร์นหน้า!' }
          ],
          15: [
            { name: 'Arcane Charge (ก้าวพริบตาจู่โจม)', desc: 'เมื่อคุณกดใช้ Action Surge คุณสามารถวาร์ป (Teleport) ไปยังพื้นที่ว่างที่มองเห็นได้ในระยะสูงสุด 30 ฟุต ฟรีทันที (ทั้งก่อนหรือหลังใช้ Action เพิ่ม)' }
          ],
          18: [
            { name: 'Improved War Magic (มหาเวทประสานศาสตรา)', desc: 'เมื่อคุณใช้ Action ในเทิร์นเพื่อร่ายเวทมนตร์ระดับใดก็ได้ (Lv.1-4) คุณสามารถใช้ Bonus Action โจมตีด้วยอาวุธแถมได้ 1 ครั้งทันที!' }
          ]
        }
      },
      {
        id: 'champion',
        name_th: 'Champion (แชมเปี้ยนจอมพลัง)',
        desc: 'เน้นพลังกายภาพล้วน ลดแต้มติด Critical Hit ลงเหลือ 19-20 (และ 18-20 ที่ Lv.15)',
        features: {
          3: [
            { name: 'Improved Critical (คมดาบคริติคอล 19-20)', desc: 'การโจมตีด้วยอาวุธของคุณจะติด Critical Hit ทันทีเมื่อทอยหน้าเต๋า d20 ออก 19 หรือ 20!' }
          ],
          7: [
            { name: 'Remarkable Athlete (สุดยอดนักกีฬา)', desc: 'บวกครึ่งหนึ่งของค่า Proficiency Bonus เข้ากับการทอยทดสอบสาย STR, DEX และ CON ทุกอย่างที่คุณยังไม่ได้ชำนาญ และเพิ่มระยะกระโดดไกลขึ้นตามค่า STR Modifier ฟุต' }
          ],
          10: [
            { name: 'Additional Fighting Style (รูปแบบการต่อสู้ที่ 2)', desc: 'สามารถเลือกรูปแบบการต่อสู้ (Fighting Style) เพิ่มเติมเป็นแบบที่ 2 ได้ทันที!' }
          ],
          15: [
            { name: 'Superior Critical (สุดยอดคริติคอล 18-20)', desc: 'การโจมตีด้วยอาวุธของคุณจะติด Critical Hit ทันทีเมื่อทอยหน้าเต๋า d20 ออก 18, 19 หรือ 20!' }
          ],
          18: [
            { name: 'Survivor (ผู้รอดชีวิตไร้เทียมทาน)', desc: 'เมื่อเริ่มแต่ละเทิร์นของคุณ หากมี HP เหลือไม่เกินครึ่งหนึ่งของ Max HP (และมากกว่า 0) คุณจะฟื้นฟูพลังชีวิตอัตโนมัติเท่ากับ 5 + CON Modifier ทุกเทิร์น!' }
          ]
        }
      },
      {
        id: 'samurai',
        name_th: 'Samurai (ซามูไรจิตวิญญาณนักรบตะวันออก)',
        desc: 'ยอดนักดาบซามูไร กดใช้ Fighting Spirit ด้วยโบนัสแอคชั่นเพื่อตีแบบ Advantage ทุกหมัดในเทิร์นพร้อมรับ Temp HP และเปลี่ยน Advantage เป็นการฟันแถมฟรี!',
        features: {
          3: [
            { name: 'Fighting Spirit (จิตวิญญาณซามูไร — ตี Advantage ทุกหมัดในเทิร์น!)', desc: 'ใช้ Bonus Action ในเทิร์นเพื่อปลุกจิตนักรบ: การโจมตีด้วยอาวุธทุกครั้งในเทิร์นนี้ของคุณ (รวมถึงตอนกด Action Surge!) จะได้รับความได้เปรียบ (Advantage) ทั้งหมดทันที! พร้อมได้รับ Temporary HP ทันที 5 หน่วย (เพิ่มเป็น 10 ที่ Lv.10 และ 15 ที่ Lv.15 ใช้ได้ 3 ครั้ง/พักยาว)' },
            { name: 'Bonus Proficiency (จริยธรรมซามูไร)', desc: 'เลือกรับความชำนาญทักษะเพิ่มเติม 1 อย่างจาก: History, Insight, Performance หรือ Persuasion' }
          ],
          7: [
            { name: 'Elegant Courtier (ท่วงท่าขุนนางซามูไร +WIS เจรจา & WIS Save!)', desc: 'คุณได้บวกโบนัส Wisdom Modifier เพิ่มเข้ากับการทอย Persuasion ทุกครั้ง และได้รับความชำนาญในการทอยป้องกันทางจิตใจ (Wisdom Saving Throws) ถาวร!' }
          ],
          10: [
            { name: 'Tireless Spirit (จิตวิญญาณไร้พ่าย)', desc: 'เมื่อเริ่มเข้าสู่การต่อสู้ (Roll Initiative) และคุณไม่มีแต้ม Fighting Spirit เหลืออยู่เลย คุณจะได้รับแต้ม Fighting Spirit คืนกลับมา 1 ครั้งทันทีฟรีๆ!' }
          ],
          15: [
            { name: 'Rapid Strike (เพลงดาบสายฟ้าแลบ เปลี่ยน Advantage เป็นตีแถม!)', desc: 'เมื่อคุณทำการโจมตีด้วยอาวุธโดยที่มีความได้เปรียบ (Advantage) คุณสามารถเลือกสละ Advantage ของหมัดนั้น เพื่อแลกกับการได้ "โจมตีแถมด้วยอาวุธฟรีอีก 1 ครั้ง" ทันทีในแอคชั่นเดียวกัน!' }
          ],
          18: [
            { name: 'Strength Before Death (เพลงดาบสุดท้ายก่อนสิ้นลม — เล่นแทรกอีก 1 เทิร์นเต็ม!)', desc: 'เมื่อคุณได้รับความเสียหายจน HP ลดเหลือ 0 คุณสามารถใช้ Reaction ชะลอการหมดสติ แล้วประกาศ "เล่นเทิร์นพิเศษของตัวเองแทรกขึ้นมาอีก 1 เทิร์นเต็มๆ ทันที!" เพื่อฟาดฟันศัตรูให้ตายไปข้างหนึ่งก่อนที่จะล้มลง!' }
          ]
        }
      },
      {
        id: 'echo_knight',
        name_th: 'Echo Knight (อัศวินร่างแยกเงามิติเวลากาล)',
        desc: 'อัศวินผู้ควบคุมร่างแยกจากเส้นเวลาคู่ขนาน (Manifest Echo) เสกร่างเงามาช่วยตีประชิดจากระยะไกล วาร์ปสลับที่ได้ทุกเทิร์น และสั่งร่างเงาตีแถม!',
        features: {
          3: [
            { name: 'Manifest Echo (อัญเชิญร่างแยกเงามิติคู่ขนาน ไม่จำกัดครั้ง!)', desc: 'ใช้ Bonus Action เสกร่างแยกเงาสีเทา (Echo) ของคุณขึ้นมาในระยะ 15 ฟุต (AC = 14+Prof, 1 HP) คุณสามารถสั่งให้ร่างเงาเดินไปข้างหน้า แล้วโจมตีออกจากตำแหน่งของร่างเงาแทนตัวจริงได้! และสามารถใช้ Bonus Action วาร์ปสลับที่กับร่างเงาได้เรื่อยๆ ไม่จำกัดจำนวนครั้ง!' },
            { name: 'Unleash Incarnation (ร่างเงาโจมตีแถมประสาน!)', desc: 'เมื่อคุณใช้ Action โจมตีในเทิร์น คุณสามารถสั่งให้ร่างเงา Echo ฟันโจมตีประชิดแถมเพิ่มอีก 1 ครั้งออกจากตำแหน่งของมันได้ทันที! (ใช้ได้จำนวนครั้งเท่ากับโบนัส CON Modifier ต่อการพักยาว)' }
          ],
          7: [
            { name: 'Echo Avatar (ถอดจิตสอดแนมผ่านร่างเงา 1,000 ฟุต)', desc: 'สามารถใช้ Action ย้ายประสาทสัมผัสมองและฟังเสียงผ่านร่างเงา Echo และบังคับให้มันเดินสำรวจพื้นที่ออกไปได้ไกลถึง 1,000 ฟุต นาน 10 นาที' }
          ],
          10: [
            { name: 'Shadow Martyr (ร่างเงาสละชีพรับคมดาบแทนเพื่อน!)', desc: 'เมื่อเพื่อนร่วมทีมกำลังจะถูกศัตรูโจมตี คุณสามารถใช้ Reaction สั่งให้ร่างเงา Echo ของคุณวาร์ปไปขวางหน้าเพื่อน เพื่อรับการโจมตีนั้นแทนเพื่อนได้ทันที! (1 ครั้ง/พักสั้นหรือพักยาว)' }
          ],
          15: [
            { name: 'Reclaim Potential (ดูดกลืนพลังงานเงาสู่ Temp HP)', desc: 'เมื่อร่างเงา Echo ของคุณถูกศัตรูตีสลายไป คุณจะได้รับพลังชีวิตชั่วคราว (Temporary HP) ทันทีเท่ากับ 2d6 + CON Modifier!' }
          ],
          18: [
            { name: 'Legion of One (กองทัพเงาคู่ขนาน 2 ร่างพร้อมกัน!)', desc: 'เมื่อกดใช้ Manifest Echo คุณจะสามารถเสกร่างแยกเงา Echo ออกมาในสนามรบได้พร้อมกันถึง 2 ร่าง! และหากเริ่มการต่อสู้โดยไม่มีแต้ม Unleash Incarnation เหลือ จะได้รับคืน 1 แต้มทันที!' }
          ]
        }
      }
    ],
    progression: { 1: ['Fighting Style', 'Second Wind (ฮีลตัวเอง 1d10+Lv)'], 2: ['Action Surge (เพิ่ม 1 Action เต็ม/พักสั้น)'], 3: ['ปลดล็อกสายอาชีพย่อย'], 5: ['Extra Attack (โจมตี 2 ครั้ง)'], 6: ['Bonus Feat'], 9: ['Indomitable'], 11: ['Improved Extra Attack (โจมตี 3 ครั้ง!)'], 14: ['Bonus Feat'] }
  },
  {
    id: 'monk', name_en: 'Monk', name_th: 'มังก์', hitDie: 8, subclassLevel: 3, skillChoices: 2,
    skills: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'],
    equipment: ['Quarterstaff (พลอง 1d6)', 'Dart x10 (ลูกดอกซัด)'],
    desc: 'จอมยุทธ์ผู้ฝึกฝนปราณ (Ki) ต่อสู้มือเปล่าด้วยความเร็วสูงและสกัดจุดศัตรู',
        subclasses: [
      {
        id: 'open_hand',
        name_th: 'Way of the Open Hand (วิถีฝ่ามือไร้เทียมทาน)',
        desc: 'สุดยอดวิชาฝ่ามือ กระแทกศัตรูล้ม ผลักกระเด็น ร่างกายผสานปราณ และระเบิดจุดตาย',
        features: {
          3: [
            { name: 'Open Hand Technique (เคล็ดวิชาฝ่ามืออรหันต์)', desc: 'เมื่อคุณโจมตีโดนด้วยท่า Flurry of Blows สามารถบังคับให้เป้าหมายรับผลพิเศษ 1 อย่าง: (1) ทอย DEX Save ไม่ผ่านจะล้มคว่ำ Prone, (2) ทอย STR Save ไม่ผ่านจะกระเด็นถอยไป 15 ฟุต, หรือ (3) เป้าหมายไม่สามารถใช้ Reaction ได้จนจบเทิร์นหน้า' }
          ],
          6: [
            { name: 'Wholeness of Body (ปราณฟื้นฟูกายา) & Manifestation (ฝ่ามือ 3 วิถี)', desc: 'ใช้ Action ฟื้นฟูพลังชีวิตตัวเองเท่ากับ 3 เท่าของเลเวล Monk (1 ครั้ง/พักยาว) และในกฎ BG3 ทุกหมัดมือเปล่าจะเลือกบวกโบนัสดาเมจเพิ่ม 1d4+WIS (Radiant, Necrotic หรือ Psychic) ได้ตลอดเวลา!' }
          ],
          11: [
            { name: 'Tranquility (จิตสงบนิ่งดั่งวารี)', desc: 'เมื่อจบการพักยาว คุณจะได้รับผลคุ้มครองเหมือนคาถา Sanctuary ตลอดเวลา ศัตรูที่จะโจมตีคุณต้องทอย WIS Save ให้ผ่านก่อน (จนกว่าคุณจะเริ่มโจมตี)' }
          ],
          17: [
            { name: 'Quivering Palm (ดัชนีสั่นสะเทือนปลิดชีพ)', desc: 'เมื่อต่อยโดน ใช้ 3 Ki ส่งคลื่นปราณฝังในร่างศัตรู จากนั้นใช้ Action สั่งระเบิดปราณเมื่อไหร่ก็ได้ ศัตรูต้องทอย CON Save หากไม่ผ่าน HP จะลดเหลือ 0 ทันที! (หากผ่านยังโดนดาเมจ Necrotic สูงถึง 10d10!)' }
          ]
        }
      },
      {
        id: 'shadow',
        name_th: 'Way of Shadow (วิถีเงาสังหาร)',
        desc: 'นินจาเงาสังหาร วาร์ปผ่านเงามืด อำพรางตัว และจู่โจมจากความมืดมิด',
        features: {
          3: [
            { name: 'Shadow Arts (ศาสตร์ลับวิชาเงา)', desc: 'ได้รับ Cantrip Minor Illusion ฟรี และสามารถใช้ 2 Ki เพื่อร่ายคาถา Darkness, Darkvision, Pass without Trace หรือ Silence ได้โดยไม่ต้องใช้วัตถุดิบ' }
          ],
          6: [
            { name: 'Shadow Step (ก้าวพริบตาผ่านเงา)', desc: 'เมื่ออยู่ในพื้นที่แสงสลัวหรือความมืด สามารถใช้ Bonus Action วาร์ป (Teleport) ไปยังพื้นที่เงามืดอื่นในระยะ 60 ฟุต ได้ฟรี และได้เปรียบ (Advantage) ในการโจมตีประชิดครั้งแรกหลังวาร์ป!' }
          ],
          11: [
            { name: 'Cloak of Shadows (ผ้าคลุมเงาไร้ตัวตน)', desc: 'เมื่ออยู่ในพื้นที่แสงสลัวหรือความมืด สามารถใช้ Action เพื่อล่องหนหายตัว (Invisible) ได้ทันทีโดยไม่ต้องเสียแต้ม Ki (คงอยู่จนกว่าจะโจมตี ร่ายเวท หรือเดินเข้าที่สว่าง)' }
          ],
          17: [
            { name: 'Opportunist (ฉวยจังหวะสังหารในเงา)', desc: 'เมื่อศัตรูในระยะ 5 ฟุต ถูกโจมตีโดนโดยเพื่อนร่วมทีม คุณสามารถใช้ Reaction โจมตีซ้ำใส่ศัตรูตัวนั้นได้ทันที (หรือวาร์ปโจมตีด้วย Shadow Strike)' }
          ]
        }
      },
      {
        id: 'four_elements',
        name_th: 'Way of the Four Elements (วิถีปราณสี่ธาตุ)',
        desc: 'ใช้แต้ม Ki ร่ายกระบวนท่าธาตุทั้งสี่ เช่น หมัดเพลิงอัคคี แส้วารี และคลื่นพายุ',
        features: {
          3: [
            { name: 'Disciple of the Elements (ผู้ฝึกตนวิถีสี่ธาตุ)', desc: 'เรียนรู้วิชาควบคุมธาตุพื้นฐาน (Elemental Attunement) และเลือกเรียนกระบวนท่าปราณธาตุ (Elemental Disciplines) 3 ท่า โดยใช้แต้ม Ki ในการร่าย' }
          ],
          6: [
            { name: 'Elemental Disciplines Lv.6 (ยกระดับปราณธาตุขั้นที่ 2)', desc: 'เลือกเรียนกระบวนท่าปราณธาตุเพิ่มเติมได้อีก 1 ท่า (รวม 4 ท่า) และปลดล็อกท่าระดับสูง เช่น Clench of the North Wind' }
          ],
          11: [
            { name: 'Elemental Disciplines Lv.11 (ยกระดับปราณธาตุขั้นที่ 3)', desc: 'เลือกเรียนกระบวนท่าปราณธาตุเพิ่มเติมได้อีก 1 ท่า (รวม 5 ท่า) และปลดล็อกท่า Flames of the Phoenix (Fireball) และ Ride the Wind (Fly)' }
          ],
          17: [
            { name: 'Elemental Disciplines Lv.17 (ปรมาจารย์ปราณสี่ธาตุ)', desc: 'เลือกเรียนกระบวนท่าปราณธาตุเพิ่มเติมได้อีก 1 ท่า (รวม 6 ท่า) และปลดล็อกท่าสุดยอดอย่าง Wave of Rolling Earth' }
          ]
        },
        elementalDisciplines: [
          { id: 'fangs_fire_snake', name: '🔥 Fangs of the Fire Snake (เขี้ยวอสรพิษอัคคี)', minLv: 3, ki: '1-2 Ki', dice: '1d10', desc: 'ใช้ 1 Ki ยืดระยะต่อยมือเปล่าออกไปเป็น 15 ฟุต เปลี่ยนดาเมจเป็นไฟพร้อมบวกเพิ่ม 1d10 Fire (จ่ายเพิ่ม 1 Ki เพื่อบวกไฟอีก 1d4 ให้ทุกหมัดในเทิร์นนั้น)' },
          { id: 'fist_unbroken_air', name: '🌪️ Fist of Unbroken Air (หมัดวายุทะลวงฟ้า)', minLv: 3, ki: '2 Ki', dice: '3d10', desc: 'ใช้ 2 Ki อัดกระแสลมใส่ศัตรูในระยะ 30 ฟุต ต้องทอย STR Save ไม่ผ่านโดนดาเมจ 3d10 Bludgeoning กระเด็นถอยไป 20 ฟุต และล้มคว่ำ Prone!' },
          { id: 'water_whip', name: '💧 Water Whip (แส้วารีพันธนาการ)', minLv: 3, ki: '2 Ki', dice: '3d10', desc: 'ใช้ 2 Ki สร้างแส้น้ำฟาดศัตรูในระยะ 30 ฟุต ต้องทอย DEX Save ไม่ผ่านโดนดาเมจ 3d10 Bludgeoning และเลือกดึงเข้ามาหา 25 ฟุต หรือกระแทกให้ล้ม Prone' },
          { id: 'sweeping_cinder', name: '🔥 Sweeping Cinder Strike (ฝ่ามือเพลิงกวาดล้าง)', minLv: 3, ki: '2 Ki', dice: '3d6', desc: 'ใช้ 2 Ki พ่นไฟรูปกรวย 15 ฟุต (เทียบเท่าคาถา Burning Hands) ศัตรูทอย DEX Save ไม่ผ่านโดนดาเมจไฟ 3d6' },
          { id: 'fist_four_thunders', name: '⚡ Fist of Four Thunders (หมัดอัสนีกัมปนาท)', minLv: 3, ki: '2 Ki', dice: '2d8', desc: 'ใช้ 2 Ki ทุบพื้นปล่อยคลื่นเสียงรอบตัว 15 ฟุต (เทียบเท่า Thunderwave) ศัตรูทอย CON Save ไม่ผ่านโดนดาเมจ 2d8 Thunder และกระเด็น 10 ฟุต' },
          { id: 'rush_gale', name: '🌬️ Rush of the Gale Spirits (พายุหมุนวายุเทพ)', minLv: 3, ki: '2 Ki', dice: '', desc: 'ใช้ 2 Ki เรียกลมพายุความเร็วสูงเป็นเส้นตรงยาว 60 ฟุต (Gust of Wind) ผลักศัตรูให้ถอยหลังและพัดหมอกพิษออกไป' },
          { id: 'clench_north_wind', name: '❄️ Clench of the North Wind (พันธนาการเหมันต์เหนือ)', minLv: 6, ki: '3 Ki', dice: '', desc: 'ใช้ 3 Ki ตรึงร่างศัตรูประเภท Humanoid ให้เป็นอัมพาต (เทียบเท่า Hold Person) ศัตรูที่ติดอัมพาตจะโดนตีประชิดติด Critical อัตโนมัติ!' },
          { id: 'gong_summit', name: '🔔 Gong of the Summit (ระฆังกังวานยอดเขา)', minLv: 6, ki: '3 Ki', dice: '3d8', desc: 'ใช้ 3 Ki สร้างคลื่นเสียงระเบิดในรัศมี 10 ฟุต (เทียบเท่า Shatter) ทำความเสียหาย 3d8 Thunder' },
          { id: 'flames_phoenix', name: '🦅 Flames of the Phoenix (เพลิงวิหคอมตะ - Fireball)', minLv: 11, ki: '4 Ki', dice: '8d6', desc: 'ใช้ 4 Ki ยิงลูกไฟวิหคระเบิดในรัศมี 20 ฟุต (เทียบเท่า Fireball) ทำความเสียหายไฟ 8d6 แก่ศัตรูทุกตัวในพื้นที่!' },
          { id: 'ride_wind', name: '☁️ Ride the Wind (เหินเวหาโต้สายลม - Fly)', minLv: 11, ki: '4 Ki', dice: '', desc: 'ใช้ 4 Ki เพื่อมอบความเร็วในการบิน (Fly 60 ฟุต) ให้แก่ตนเองเป็นเวลา 10 นาที' },
          { id: 'wave_rolling_earth', name: '🪨 Wave of Rolling Earth (ปราการคลื่นปฐพี)', minLv: 17, ki: '6 Ki', dice: '', desc: 'ใช้ 6 Ki สร้างกำแพงหินขนาดยักษ์ (Wall of Stone) ขึ้นมาป้องกันทีมหรือขังศัตรูในสมรภูมิ' }
        ]
      },
      {
        id: 'mercy',
        name_th: 'Way of Mercy (วิถีหัตถ์เทวะและยมทูต)',
        desc: 'มังก์หมอเทวดาและยมทูตสวมหน้ากาก ใช้ปราณฮีลเพื่อนพร้อมล้างสถานะ (Hand of Healing) หรือต่อยอัดพิษเน่าเปื่อยโดยไม่ต้องทอย Save (Hand of Harm)!',
        features: {
          3: [
            { name: 'Implements of Mercy & Hand of Healing (หัตถ์เทวะฟื้นฟูชีวา)', desc: 'ได้รับความชำนาญทักษะ Insight และ Medicine พร้อมหน้ากากประจำตัว คุณสามารถใช้ 1 Ki แตะฮีลเพื่อนเท่ากับ [เต๋า Martial Arts + WIS Modifier] หรือเปลี่ยนหมัด 1 ครั้งในท่า Flurry of Blows ให้กลายเป็นหมัดฮีลเพื่อนได้ฟรีโดยไม่เสีย Ki เพิ่ม!' },
            { name: 'Hand of Harm (หัตถ์ยมทูตอัดปราณมรณะ การันตีดาเมจ!)', desc: 'เทิร์นละ 1 ครั้ง เมื่อคุณต่อยมือเปล่าโดนศัตรู สามารถใช้ 1 Ki อัดปราณพิษมรณะทำโบนัสดาเมจ Necrotic เพิ่มทันทีเท่ากับ [เต๋า Martial Arts + WIS Modifier] โดยที่ศัตรูไม่สามารถทอย Save ป้องกันได้เลย!' }
          ],
          6: [
            { name: 'Physician’s Touch (สัมผัสหมอเทวดาล้างคำสาป & หมัดติดพิษอัตโนมัติ!)', desc: 'เมื่อใช้ Hand of Healing ฮีลเพื่อน จะช่วยล้างสถานะตาบอด หูหนวก อัมพาต ติดพิษ หรือมึนงง (Stunned) ออกให้ฟรีทันที! และเมื่อใช้ Hand of Harm ต่อยศัตรู ศัตรูจะติดสถานะติดพิษ (Poisoned - โจมตีเสียเปรียบ) ทันทีโดยไม่ต้องทอย Save นาน 1 รอบ!' }
          ],
          11: [
            { name: 'Flurry of Healing and Harm (รัวหมัดเทวะและยมทูตฟรี ไม่เสีย Ki เพิ่ม!)', desc: 'เมื่อคุณกดใช้ Flurry of Blows คุณสามารถเปลี่ยนทุกหมัดให้เป็น Hand of Healing ได้ฟรี และใช้ Hand of Harm แถมได้ฟรีเทิร์นละ 1 ครั้งโดยไม่ต้องเสียแต้ม Ki เพิ่มเติมเลย!' }
          ],
          17: [
            { name: 'Hand of Ultimate Mercy (หัตถ์ชุบชีวิตคืนวิญญาณ)', desc: 'ใช้ Action และจ่าย 5 Ki แตะร่างของเพื่อนที่เสียชีวิตไปแล้วไม่เกิน 24 ชั่วโมง เพื่อชุบชีวิตให้ฟื้นคืนชีพขึ้นมาทันทีพร้อม HP เท่ากับ 4d10 + WIS Modifier และล้างสถานะผิดปกติทั้งหมด!' }
          ]
        }
      },
      {
        id: 'kensei',
        name_th: 'Way of the Kensei (วิถีปรมาจารย์เซียนกระบี่)',
        desc: 'มังก์ผู้หลอมรวมปราณเข้ากับศาสตราวุธ (ดาบยาว/ธนูยาว) ปัดป้องเพิ่มเกราะ +2 AC ทุกเทิร์น และเร่งปราณให้อาวุธเป็นระดับ +3!',
        features: {
          3: [
            { name: 'Path of the Kensei (ศาสตราวุธคู่กายเซียนกระบี่)', desc: 'เลือกอาวุธประชิดและอาวุธไกล (เช่น Longsword และ Longbow) ให้กลายเป็นอาวุธ Kensei ที่ใช้ค่า DEX และเต๋า Martial Arts ในการโจมตีได้! เมื่อต่อยมือเปล่าสลับฟันดาบ คุณจะได้เกราะเพิ่ม +2 AC ทันที (Agile Parry) และใช้ Bonus Action ยิงธนูแรงขึ้น +1d4 ทุกดอก!' }
          ],
          6: [
            { name: 'One with the Blade (หลอมรวมเป็นหนึ่งเดียวกับคมดาบ)', desc: 'อาวุธ Kensei ของคุณนับเป็นอาวุธเวทมนตร์ทะลุการต้านทาน และเมื่อฟันโดนสามารถใช้ 1 Ki (Deft Strike) เพื่อบวกเต๋า Martial Arts เพิ่มเข้าไปในดาเมจอาวุธทันที!' }
          ],
          11: [
            { name: 'Sharpen the Blade (เร่งปราณหลอมคมดาบ +3!)', desc: 'ใช้ Bonus Action และจ่าย 1 ถึง 3 Ki เพื่ออาบปราณลงในอาวุธ Kensei ทำให้อาวุธชิ้นนั้นได้รับโบนัสความแม่นยำ (Attack Roll) และความเสียหาย (Damage Roll) เพิ่มขึ้นสูงสุดถึง +3 ทันที นาน 1 นาที!' }
          ],
          17: [
            { name: 'Unerring Accuracy (กระบี่ไร้พ่ายฟันซ้ำไร้พลาด)', desc: 'เทิร์นละ 1 ครั้ง เมื่อคุณทอยโจมตีด้วยอาวุธ Monk พลาดเป้า คุณสามารถทอยลูกเต๋าโจมตีใหม่ซ้ำได้ฟรีทันที!' }
          ]
        }
      }
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
      {
        id: 'devotion',
        name_th: 'Oath of Devotion (คำสัตย์แห่งความภักดีและแสงสว่าง)',
        desc: 'อัศวินแห่งแสง เสริมอาวุธให้แม่นยำตามค่า CHA สะท้อนดาเมจ Radiant และปกป้องเพื่อนร่วมทีมจากมนตร์สะกด',
        oathSpells: {
          3: ['Protection from Evil and Good', 'Sanctuary'],
          5: ['Lesser Restoration', 'Zone of Truth'],
          9: ['Dispel Magic'],
          13: ['Freedom of Movement'],
          17: ['Flame Strike']
        },
        channelDivinities: [
          { id: 'sacred_weapon', name: '⚔️ Sacred Weapon (ศาสตราวุธศักดิ์สิทธิ์)', action: '1 Action', desc: 'ใช้ Channel Divinity อาบแสงให้อาวุธ 1 นาที บวกค่า CHA Modifier (ขั้นต่ำ +1) เข้ากับความแม่นยำ (Attack Roll) อาวุธส่องแสงสว่างรัศมี 20 ฟุต และนับเป็นอาวุธเวทมนตร์' },
          { id: 'turn_unholy', name: '✨ Turn the Unholy (ขับไล่อสูรและผีดิบ)', action: '1 Action', desc: 'ใช้ Channel Divinity ชูสัญลักษณ์ศักดิ์สิทธิ์ ศัตรูประเภท Fiend และ Undead ในระยะ 30 ฟุต ต้องทอย WIS Save หากไม่ผ่านจะติดสถานะหวาดกลัวและวิ่งหนีเป็นเวลา 1 นาที' },
          { id: 'holy_rebuke', name: '🛡️ Holy Rebuke (เกราะแสงสะท้อนบาป - BG3)', action: '1 Action', dice: '1d4', desc: 'กางเกราะแสงให้ตัวเองหรือเพื่อน ใครที่โจมตีระยะประชิดใส่ผู้ได้รับพรนี้จะโดนความเสียหาย 1d4 Radiant สะท้อนกลับทันที' }
        ],
        features: {
          1: [
            { name: 'Tenets of Devotion & Holy Rebuke (คำสัตย์แห่งแสง)', desc: 'ยึดมั่นในความซื่อสัตย์ ความกล้าหาญ และความเมตตา พร้อมปลดล็อกพลังสะท้อนแสงศักดิ์สิทธิ์ใส่ผู้ที่โจมตีเพื่อนร่วมทีม' }
          ],
          3: [
            { name: 'Oath Spells & Channel Divinity (มนตราคำสัตย์และสื่อกลางศักดิ์สิทธิ์)', desc: 'ปลดล็อกคาถาประจำสายอาชีพอัตโนมัติ (Protection from Evil and Good, Sanctuary) และได้รับท่า Sacred Weapon (+CHA แม่นยำ) และ Turn the Unholy' }
          ],
          7: [
            { name: 'Aura of Devotion (ออร่าคุ้มครองจิตใจ)', desc: 'คุณและเพื่อนร่วมทีมในระยะ 10 ฟุต รอบตัวคุณ จะไม่ติดสถานะถูกสะกดจิต (Immune to Charmed) ตราบใดที่คุณยังมีสติ (ที่ Lv.18 ขยายเป็น 30 ฟุต)' }
          ],
          15: [
            { name: 'Purity of Spirit (จิตวิญญาณบริสุทธิ์)', desc: 'คุณได้รับผลของคาถา Protection from Evil and Good ติดตัวตลอดเวลาโดยไม่ต้องร่ายและไม่ต้องเพ่งสมาธิ!' }
          ],
          20: [
            { name: 'Holy Nimbus (รัศมีเทวทูตจุติ)', desc: 'ใช้ Action เปล่งรัศมีแสงสวรรค์นาน 1 นาที ส่องแสงสว่าง 30 ฟุต ศัตรูที่เริ่มเทิร์นในแสงจะโดนดาเมจ Radiant 10 หน่วยทันที และคุณได้เปรียบ (Advantage) ในการทอย Saving Throw ต้านเวทของ Fiend หรือ Undead' }
          ]
        }
      },
      {
        id: 'ancients',
        name_th: 'Oath of the Ancients (คำสัตย์แห่งพงไพรโบราณ)',
        desc: 'อัศวินพฤกษา ฮีลหมู่รอบตัวด้วยโบนัสแอคชั่น และมีออร่าลดความเสียหายเวทมนตร์ครึ่งหนึ่งให้ทั้งทีม!',
        oathSpells: {
          3: ['Speak with Animals', 'Entangle'],
          5: ['Misty Step', 'Moonbeam'],
          9: ['Protection from Evil and Good'],
          13: ['Ice Storm'],
          17: ['Mass Cure Wounds']
        },
        channelDivinities: [
          { id: 'healing_radiance', name: '🌿 Healing Radiance (รัศมีพฤกษาฟื้นฟูหมู่)', action: '1 Bonus Action', desc: 'ใช้ Channel Divinity ฮีลตัวเองและเพื่อนร่วมทีมทุกคนในรัศมี 10 ฟุต ทันที และฮีลซ้ำอีกครั้งในเทิร์นถัดไป! (ฟื้นฟูรวม = CHA Modifier + เลเวลพาลาดิน)' },
          { id: 'natures_wrath', name: '🌱 Nature’s Wrath (เถาวัลย์พิโรธพันธนาการ)', action: '1 Action', desc: 'ใช้ Channel Divinity เรียกเถาวัลย์เวทมนตร์มัดศัตรูในระยะ 15 ฟุต เป้าหมายต้องทอย STR หรือ DEX Save ไม่ผ่านจะติดสถานะถูกมัด (Restrained) ขยับไม่ได้!' },
          { id: 'turn_faithless', name: '🦋 Turn the Faithless (ขับไล่ภูตและอสูรต่างมิติ)', action: '1 Action', desc: 'ใช้ Channel Divinity บังคับให้ Fey และ Fiend ในระยะ 30 ฟุต ทอย WIS Save ไม่ผ่านจะวิ่งหนีด้วยความหวาดกลัวและเผยร่างจริงหากแปลงกายอยู่' }
        ],
        features: {
          1: [
            { name: 'Healing Radiance (พรแห่งพงไพรโบราณ)', desc: 'ปลดล็อกท่าฮีลหมู่รอบตัวด้วย Bonus Action ช่วยพยุงทีมในจังหวะวิกฤตได้อย่างยอดเยี่ยม' }
          ],
          3: [
            { name: 'Oath Spells & Channel Divinity (มนตราพงไพร)', desc: 'ปลดล็อกคาถาประจำสายอาชีพ (Speak with Animals, Entangle, Misty Step, Moonbeam) และท่าเถาวัลย์พันธนาการ Nature’s Wrath' }
          ],
          7: [
            { name: 'Aura of Warding (ออร่าต้านทานเวทมนตร์)', desc: 'คุณและเพื่อนร่วมทีมในระยะ 10 ฟุต รอบตัวคุณ ได้รับ Resistance (ลดความเสียหายลงครึ่งหนึ่ง!) ต่อความเสียหายจากเวทมนตร์ (Spells) ทุกชนิด! (ที่ Lv.18 ขยายเป็น 30 ฟุต)' }
          ],
          15: [
            { name: 'Undying Sentinel (ผู้พิทักษ์อมตะ)', desc: 'เมื่อคุณถูกโจมตีจน HP ลดเหลือ 0 และไม่ตายทันที คุณจะเด้งกลับมาที่ 1 HP ทันทีโดยไม่ล้มลง (1 ครั้ง/พักยาว) และร่างกายของคุณจะไม่แก่ชราลงอีก' }
          ],
          20: [
            { name: 'Elder Champion (ร่างอวตารจ้าวแห่งธรรมชาติ)', desc: 'ใช้ Action ผสานพลังธรรมชาติ 1 นาที: ฟื้นฟู 10 HP ทุกต้นเทิร์น, ร่ายเวทพาลาดินที่ใช้ 1 Action ได้ด้วย Bonus Action, และศัตรูในระยะ 10 ฟุต ติดเสียเปรียบ (Disadvantage) เวลาทอยต้านเวทของคุณ!' }
          ]
        }
      },
      {
        id: 'vengeance',
        name_th: 'Oath of Vengeance (คำสัตย์แห่งการล้างแค้น)',
        desc: 'อัศวินล้างแค้น ล็อกเป้าหมายเพื่อตีแบบ Advantage ทุกหมัด และปลดล็อกเวท Hunter’s Mark / Haste',
        oathSpells: {
          3: ['Bane', "Hunter's Mark"],
          5: ['Hold Person', 'Misty Step'],
          9: ['Haste'],
          13: ['Banishment', 'Dimension Door'],
          17: ['Hold Monster']
        },
        channelDivinities: [
          { id: 'vow_enmity', name: '🎯 Vow of Enmity (คำสัตย์อาฆาตมาดร้าย)', action: '1 Bonus Action', desc: 'ใช้ Channel Divinity ชี้หน้าศัตรูในระยะ 10 ฟุต คุณจะได้รับความได้เปรียบ (Advantage) ในการทอยโจมตีทุกครั้งใส่เป้าหมายนั้นเป็นเวลา 1 นาที!' },
          { id: 'abjure_enemy', name: '⛓️ Abjure Enemy (ประกาศิตตรึงอริราช)', action: '1 Action', desc: 'ใช้ Channel Divinity ข่มขวัญศัตรู 1 ตัวในระยะ 60 ฟุต ต้องทอย WIS Save (Fiend และ Undead ติดเสียเปรียบ) หากไม่ผ่านจะติดหวาดกลัว Frightened และความเร็วกลายเป็น 0 ฟุตทันที!' },
          { id: 'inquisitors_might', name: '🔥 Inquisitor’s Might (ทัณฑ์ผู้พิพากษา - BG3)', action: '1 Bonus Action', desc: 'ใช้ Bonus Action เสริมพลังให้อาวุธของตัวเองหรือเพื่อน นาน 2 เทิร์น บวกโบนัสดาเมจ Radiant เพิ่มตามค่า CHA Modifier และมีโอกาสทำให้ศัตรูติดสถานะมึนงง (Dazed)' }
        ],
        features: {
          1: [
            { name: 'Inquisitor’s Might (เพลิงอาฆาตผู้พิพากษา)', desc: 'ใช้ Bonus Action เสริมดาเมจ Radiant ตามค่า CHA ให้ตัวเองหรือเพื่อนร่วมทีมตั้งแต่เลเวลแรก' }
          ],
          3: [
            { name: 'Oath Spells & Vow of Enmity (มนตราล้างแค้น)', desc: 'ปลดล็อกคาถาสุดแกร่งอย่าง Hunter’s Mark, Misty Step, Hold Person, Haste พร้อมท่า Vow of Enmity ที่ทำให้คุณตีบอสแบบ Advantage ตลอด 1 นาที!' }
          ],
          7: [
            { name: 'Relentless Avenger (ก้าวไล่ล่าไร้ปราณี)', desc: 'เมื่อคุณตีศัตรูด้วย Opportunity Attack โดน คุณสามารถเคลื่อนที่ตามเป้าหมายได้ทันทีครึ่งหนึ่งของความเร็วคุณโดยไม่ถูกศัตรูตีสวน' }
          ],
          15: [
            { name: 'Soul of Vengeance (จิตวิญญาณแห่งการจองเวร)', desc: 'เมื่อศัตรูที่ติดผล Vow of Enmity ของคุณทำการโจมตี คุณสามารถใช้ Reaction โจมตีประชิดสวนกลับใส่มันได้ทันที 1 ครั้ง!' }
          ],
          20: [
            { name: 'Avenging Angel (เทวทูตแห่งการทัณฑ์)', desc: 'ใช้ Action กางปีกเทวทูต 1 ชั่วโมง ได้รับความเร็วบิน (Flying Speed) 60 ฟุต และแผ่ออร่าข่มขวัญรัศมี 30 ฟุต ศัตรูที่เห็นต้องทอย WIS Save ไม่ผ่านจะหวาดกลัว Frightened และเพื่อนร่วมทีมตีตัวที่กลัวแบบ Advantage!' }
          ]
        }
      },
      {
        id: 'oathbreaker',
        name_th: 'Oathbreaker (อัศวินผู้ละทิ้งคำสัตย์แห่งความมืด)',
        desc: 'อัศวินความมืดผู้ฉีกคำสัตย์ ควบคุมผีดิบ บวกโบนัสดาเมจอาวุธตามค่า CHA (Aura of Hate) และสาปศัตรูด้วย Spiteful Suffering!',
        oathSpells: {
          3: ['Hellish Rebuke', 'Inflict Wounds'],
          5: ['Crown of Madness', 'Darkness'],
          9: ['Animate Dead', 'Bestow Curse'],
          13: ['Blight', 'Confusion'],
          17: ['Contagion', 'Dominate Person']
        },
        channelDivinities: [
          { id: 'spiteful_suffering', name: '🩸 Spiteful Suffering (คำสาปความเกลียดชังกัดกิน)', action: '1 Action', dice: '1d4', desc: 'ใช้ Channel Divinity สาปศัตรูในระยะ 10 ฟุต นาน 3 เทิร์น เป้าหมายโดนดาเมจ Necrotic 1d4 + CHA Modifier ทุกเทิร์น และทุกคนที่โจมตีใส่ศัตรูตัวนี้จะตีแบบได้เปรียบ (Advantage)!' },
          { id: 'control_undead', name: '💀 Control Undead (บงการผีดิบเป็นทาสรับใช้)', action: '1 Action', desc: 'ใช้ Channel Divinity บังคับให้ผีดิบ (Undead) 1 ตัวในระยะ 30 ฟุต ที่มีเลเวลต่ำกว่าคุณ ทอย WIS Save หากไม่ผ่านจะตกอยู่ใต้คำสั่งและเดินตามช่วยคุณต่อสู้ทันที!' },
          { id: 'dreadful_aspect', name: '👹 Dreadful Aspect (รัศมีอเวจีข่มขวัญหมู่)', action: '1 Action', desc: 'ใช้ Channel Divinity ระเบิดออร่าความมืดรอบตัวในรัศมี 30 ฟุต ศัตรูทุกตัวต้องทอย WIS Save ไม่ผ่านจะติดสถานะหวาดกลัว (Frightened) เป็นเวลา 1 นาที!' }
        ],
        features: {
          1: [
            { name: 'Spiteful Suffering (พลังมืดผู้ละทิ้งคำสัตย์)', desc: 'ละทิ้งแสงสว่างเข้าสู่ศาสตร์มืด ปลดล็อกคำสาป Spiteful Suffering ที่ทำดาเมจต่อเนื่องและมอบ Advantage ให้ทีม' }
          ],
          3: [
            { name: 'Oathbreaker Spells & Control Undead (มนตราความมืดและบงการผีดิบ)', desc: 'ปลดล็อกคาถาสายมืดเข้าสมุดเวทอัตโนมัติ (Hellish Rebuke, Inflict Wounds, Darkness, Animate Dead) พร้อมท่าควบคุมผีดิบและข่มขวัญหมู่' }
          ],
          7: [
            { name: 'Aura of Hate (ออร่าแห่งความเกลียดชัง +CHA ดาเมจทุกหมัด!)', desc: 'สุดยอดออร่าสายโจมตี: คุณ (รวมถึงผีดิบและปีศาจในระยะ 10 ฟุต) จะได้บวกโบนัส Charisma Modifier (ขั้นต่ำ +1) เข้ากับความเสียหายอาวุธประชิดทุกครั้ง! (ที่ Lv.18 ขยายเป็น 30 ฟุต)' }
          ],
          15: [
            { name: 'Supernatural Resistance (กายาเหนือธรรมชาติต้านทานอาวุธ)', desc: 'คุณได้รับความต้านทาน (Resistance - ลดดาเมจครึ่งหนึ่ง) ต่อความเสียหายกายภาพ Bludgeoning, Piercing และ Slashing จากอาวุธที่ไม่ใช่เวทมนตร์' }
          ],
          20: [
            { name: 'Dread Lord (จอมราชันย์แห่งความหวาดกลัว)', desc: 'ใช้ Action เรียกเงามืดปกคลุมรัศมี 30 ฟุต นาน 1 นาที: ศัตรูโจมตีคุณและเพื่อนแบบเสียเปรียบ (Disadvantage), ศัตรูที่กลัวโดนดาเมจ 4d10 Psychic ทุกต้นเทิร์น และใช้ Bonus Action สั่งเงามืดโจมตี 3d10+CHA Necrotic ได้ทุกเทิร์น!' }
          ]
        }
      },
      {
        id: 'conquest',
        name_th: 'Oath of Conquest (คำสัตย์แห่งผู้พิชิตจอมราชันย์)',
        desc: 'อัศวินผู้พิชิต สะกดศัตรูด้วยความกลัวจนขยับไม่ได้ (Aura of Conquest ความเร็วเหลือ 0) และบวกแม่นยำ +10 ด้วย Guided Strike',
        oathSpells: {
          3: ['Armor of Agathys', 'Command'],
          5: ['Hold Person', 'Spiritual Weapon'],
          9: ['Bestow Curse', 'Fear'],
          13: ['Blight', 'Dominate Person'],
          17: ['Cloudkill', 'Dominate Person']
        },
        channelDivinities: [
          { id: 'conquering_presence', name: '👑 Conquering Presence (จิตราชันย์สยบสมรภูมิ)', action: '1 Action', desc: 'ใช้ Channel Divinity แผ่แรงกดดันในรัศมี 30 ฟุต ศัตรูที่คุณเลือกทุกตัวต้องทอย WIS Save ไม่ผ่านจะติดสถานะหวาดกลัว (Frightened) เป็นเวลา 1 นาที!' },
          { id: 'guided_strike_pal', name: '🎯 Guided Strike (คมดาบผู้พิชิต +10 แม่นยำ!)', action: 'No Action', desc: 'เมื่อทอยโจมตีด้วยอาวุธ สามารถใช้ Channel Divinity บวกความแม่นยำ (Attack Roll) เพิ่มทันที +10 แต้ม เปลี่ยนจากตีพลาดให้กลายเป็นโดน 100%!' }
        ],
        features: {
          1: [
            { name: 'Tenets of Conquest (ประกาศิตแห่งผู้พิชิต)', desc: 'ดับไฟแห่งความหวังของศัตรู ปกครองด้วยหมัดเหล็กและความแข็งแกร่งเหนือผู้ใด' }
          ],
          3: [
            { name: 'Oath Spells & Channel Divinity (เกราะน้ำแข็งและจิตราชันย์)', desc: 'ปลดล็อกคาถา Armor of Agathys, Command, Hold Person, Spiritual Weapon, Fear พร้อมท่าข่มขวัญหมู่และบวกความแม่นยำ +10' }
          ],
          7: [
            { name: 'Aura of Conquest (ออร่าผู้พิชิตตรึงร่างศัตรูที่กลัว!)', desc: 'ศัตรูที่ติดสถานะหวาดกลัว (Frightened) คุณ เมื่ออยู่ในระยะ 10 ฟุต รอบตัวคุณ ความเร็วเคลื่อนที่จะกลายเป็น 0 ฟุตทันที (เดินหนีไม่ได้ และถ้าล้ม Prone จะลุกไม่ได้เลย!) พร้อมโดนดาเมจ Psychic เท่ากับครึ่งหนึ่งของเลเวลพาลาดินทุกต้นเทิร์น!' }
          ],
          15: [
            { name: 'Scornful Rebuke (สะท้อนทัณฑ์ผู้บังอาจ)', desc: 'ใครก็ตามที่บังอาจโจมตีโดนคุณ จะได้รับความเสียหายทางจิตใจ (Psychic Damage) สะท้อนกลับไปอัตโนมัติเท่ากับค่า CHA Modifier ของคุณทันทีโดยไม่ต้องใช้ Reaction!' }
          ],
          20: [
            { name: 'Invincible Conqueror (จอมพิชิตไร้เทียมทาน)', desc: 'ใช้ Action เข้าสู่โหมดไร้พ่าย 1 นาที: ได้รับ Resistance ต่อความเสียหายทุกชนิดในเกม, โจมตีแถมเพิ่มอีก 1 ครั้งในทุกเทิร์น (รวมตี 3 ครั้ง!), และติด Critical Hit ที่หน้าเต๋า 19-20!' }
          ]
        }
      }
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
      {
        id: 'hunter',
        name_th: 'Hunter (นายพรานนักล่ามืออาชีพ)',
        desc: 'นักล่าอาชีพ เลือกท่าสังหารยักษ์ (Colossus Slayer +1d8), กระบวนท่าตั้งรับ และท่าโจมตีหมู่ขั้นสุดยอด',
        features: {
          3: [
            { name: 'Hunter’s Prey (กลยุทธ์พิชิตเหยื่อ)', desc: 'เลือกเรียนวิชาโจมตีเฉพาะทางของนักล่า 1 อย่าง (Colossus Slayer, Giant Killer หรือ Horde Breaker)' }
          ],
          7: [
            { name: 'Defensive Tactics (กลยุทธ์ตั้งรับนักล่า)', desc: 'เลือกเรียนวิชาป้องกันตัว 1 อย่าง (Escape the Horde, Multiattack Defense หรือ Steel Will)' }
          ],
          11: [
            { name: 'Multiattack (พายุศาสตรากวาดล้างหมู่)', desc: 'ปลดล็อกท่าโจมตีหมู่เต็มรูปแบบ: เลือกใช้ Volley (ยิงฝนธนูใส่ทุกตัวในรัศมี 10 ฟุต) หรือ Whirlwind Attack (ฟันกวาดศัตรูทุกตัวรอบข้างในระยะ 5 ฟุต) ได้ไม่จำกัดครั้ง!' }
          ],
          15: [
            { name: 'Superior Hunter’s Defense (สุดยอดวิชาป้องกันนักล่า)', desc: 'เลือกวิชาหลบหลีกขั้นสูง: Evasion (หลบเวท DEX Save ไม่โดนดาเมจ), Stand Against the Tide (เบี่ยงการโจมตีศัตรูให้ไปโดนตัวอื่น) หรือ Uncanny Dodge (ลดดาเมจครึ่งหนึ่งด้วย Reaction)' }
          ]
        },
        hunterPreyOptions: [
          { id: 'colossus_slayer', name: '🩸 Colossus Slayer (ผู้สังหารยักษ์ +1d8)', dice: '1d8', desc: 'เมื่อคุณโจมตีอาวุธโดนศัตรูที่มี HP ไม่เต็มหลอด (ต่ำกว่า Max HP) จะทำโบนัสความเสียหายเพิ่มอีก +1d8 ทันที (เทิร์นละ 1 ครั้ง)!' },
          { id: 'giant_killer', name: '⚔️ Giant Killer (พิฆาตอสูรยักษ์)', dice: '', desc: 'เมื่อศัตรูขนาด Large หรือใหญ่กว่าในระยะ 5 ฟุต โจมตีใส่คุณ(ไม่ว่าจะโดนหรือไม่) คุณสามารถใช้ Reaction โจมตีสวนกลับใส่ศัตรูตัวนั้นได้ทันที!' },
          { id: 'horde_breaker', name: '🌪️ Horde Breaker (ทะลวงฝูงอสูร)', dice: '', desc: 'ในแต่ละเทิร์น เมื่อคุณโจมตีด้วยอาวุธ คุณสามารถโจมตีแถมฟรีอีก 1 ครั้งใส่ศัตรูอีกตัวที่ยืนอยู่ติดกับเป้าหมายแรกในระยะ 5 ฟุต!' }
        ],
        defensiveTacticsOptions: [
          { id: 'multiattack_def', name: '🛡️ Multiattack Defense (ปราการต้านทานคอมโบ)', desc: 'เมื่อศัตรูโจมตีโดนคุณ คุณจะได้รับโบนัสเกราะ +4 AC ต่อการโจมตีครั้งต่อๆ ไปของศัตรูตัวเดิมจนจบเทิร์นนั้น!' },
          { id: 'escape_horde', name: '💨 Escape the Horde (ฉากหลบฝูงศัตรู)', desc: 'การโจมตีฉวยโอกาส (Opportunity Attacks) ทั้งหมดที่ศัตรูตีใส่คุณจะติดสถานะเสียเปรียบ (Disadvantage) ตลอดเวลา' },
          { id: 'steel_will', name: '🦁 Steel Will (จิตใจเหล็กกล้า)', desc: 'คุณได้รับความได้เปรียบ (Advantage) ในการทอย Saving Throw เพื่อต้านทานสถานะหวาดกลัว (Frightened) ทุกชนิด' }
        ],
        multiattackOptions: [
          { id: 'volley', name: '🏹 Volley (ห่าฝนธนูถล่มพื้นที่)', desc: 'ใช้ Action ยิงธนู/หน้าไม้ใส่ศัตรูกี่ตัวก็ได้ที่อยู่ในรัศมี 10 ฟุต รอบจุดที่คุณเล็งในระยะยิง (ทอยโจมตีแยกแต่ละตัว)' },
          { id: 'whirlwind', name: '🗡️ Whirlwind Attack (พายุคมดาบกวาดรอบตัว)', desc: 'ใช้ Action ฟันกวาดใส่ศัตรูทุกตัวที่อยู่ในระยะ 5 ฟุต รอบตัวคุณพร้อมกัน (ทอยโจมตีประชิดแยกแต่ละตัว)' }
        ]
      },
      {
        id: 'beast_master',
        name_th: 'Beast Master (ผู้ฝึกสัตว์อสูรคู่ใจ)',
        desc: 'อัญเชิญสัตว์คู่ใจ (หมี หมาป่า แมงมุม หมูป่า หรืออีกา) ที่เติบโตแข็งแกร่งขึ้นตามเลเวลเรนเจอร์',
        features: {
          3: [
            { name: 'Ranger’s Companion (อัญเชิญสัตว์อสูรคู่ใจ)', desc: 'อัญเชิญสัตว์ป่าคู่ใจมาร่วมสู้ โดยสัตว์คู่ใจจะได้รับโบนัส Proficiency ของคุณบวกเพิ่มเข้ากับ AC, ความแม่นยำ, ดาเมจ และมี HP สูงขึ้นตามเลเวลเรนเจอร์' }
          ],
          5: [
            { name: 'Companion’s Bond (สายสัมพันธ์วิญญาณสัตว์)', desc: 'สัตว์คู่ใจเติบโตขึ้น ได้รับ HP และเกราะเพิ่มขึ้นอย่างมาก พร้อมปลดล็อกสกิลพิเศษเฉพาะสายพันธุ์ (เช่น หมีปลดอาวุธ หรืออีกาสาปแช่ง)' }
          ],
          7: [
            { name: 'Exceptional Training (การฝึกฝนขั้นสุดยอด)', desc: 'สัตว์คู่ใจสามารถใช้ Bonus Action เพื่อวิ่ง Dash, ฉากหลบ Disengage หรือ Help ได้ และการโจมตีทั้งหมดของสัตว์คู่ใจนับเป็นอาวุธเวทมนตร์ (ทะลุการต้านทานกายภาพ)!' }
          ],
          11: [
            { name: 'Bestial Fury (พายุกรงเล็บอสูรคู่ใจ)', desc: 'สัตว์คู่ใจปลดล็อก Extra Attack สามารถโจมตีได้ 2 ครั้งต่อเทิร์น และพัฒนารูปลักษณ์สู่ขั้นสูงสุด!' }
          ],
          15: [
            { name: 'Share Spells (แบ่งปันมนตรา)', desc: 'เมื่อคุณร่ายเวทมนตร์ส่งผลใส่ตัวเอง คุณสามารถให้สัตว์คู่ใจที่อยู่ในระยะ 30 ฟุต ได้รับผลของเวทมนตร์นั้นไปพร้อมกับคุณฟรีทันที!' }
          ]
        },
        companions: [
          { id: 'ursa', name: '🐻 Bear Companion (หมีเกราะศึก - Ursa)', baseHP: 19, baseAC: 11, attack: 'Goading Roar & Honeyed Paws (2d4+STR)', desc: 'สายแทงก์สุดอึด: มีท่าคำรามดึงดูดศัตรู (Goading Roar) และท่าตะปบน้ำผึ้ง (Honeyed Paws) ที่บังคับให้ศัตรูปล่อยอาวุธหล่นพื้นหรือล้ม Prone!' },
          { id: 'lupus', name: '🐺 Wolf Companion (หมาป่าจ่าฝูง - Lupus)', baseHP: 15, baseAC: 13, attack: 'Lunging Bite (2d4+DEX) &Infectious Bite', desc: 'สายดาเมจประชิด: ได้เปรียบเวลาตีรุม (Pack Tactics) มีท่ากระโจนกัดให้ศัตรูล้มคว่ำ (Prone) และที่เลเวลสูงมีท่าฟันดาบคาบในปากกวาดหมู่!' },
          { id: 'aranea', name: '🕷️ Spider Companion (แมงมุมยักษ์ - Aranea)', baseHP: 15, baseAC: 14, attack: 'Venomous Bite (1d8+DEX + พิษ) & Web', desc: 'สายป่วนสนามรบ: พ่นใยแมงมุม (Web) มัดศัตรูเป็นกลุ่มได้เรื่อยๆ เดินบนใยไม่ติดขัด และกัดติดพิษรุนแรง' },
          { id: 'corvus', name: '🐦‍⬛ Dire Raven Companion (อีกาโลกันตร์ - Corvus)', baseHP: 13, baseAC: 14, attack: 'Rend Vision (จิกตาบอด) & Bad Omen (2d4)', desc: 'สายบินป่วนระยะไกล: บินโฉบโดยไม่ติดพื้นวิบาก มีท่าจิกดวงตาทำให้ศัตรูตาบอด (Blinded) ทันที และสาปเป้าหมายให้เพื่อนตีแบบ Advantage!' },
          { id: 'verres', name: '🐗 Boar Companion (หมูป่าเขี้ยวตัน - Verres)', baseHP: 17, baseAC: 11, attack: 'Charge (วิ่งขวิดล้ม) & Rage', desc: 'สายพุ่งชนทะลวงแนวหน้า: วิ่งขวิดกระแทกศัตรูเป็นเส้นตรงให้ล้มคว่ำ และสามารถกดคลั่ง (Rage) เพื่อเพิ่มดาเมจและลดความเสียหายได้' }
        ]
      },
      {
        id: 'gloom_stalker',
        name_th: 'Gloom Stalker (นักล่าไร้เงาแห่งความมืด)',
        desc: 'นักล่าในเงามืด บวก Initiative +3, ล่องหนในความมืด และโจมตีฟรีเพิ่ม 1 ครั้งพร้อมดาเมจ +1d8 ในเทิร์นแรก!',
        oathSpells: {
          3: ['Disguise Self'],
          5: ['Misty Step'],
          9: ['Fear'],
          13: ['Greater Invisibility'],
          17: ['Seeming']
        },
        features: {
          3: [
            { name: 'Dread Ambusher (จอมซุ่มโจมตีแห่งรัตติกาล +3 Initiative)', desc: 'บวกโบนัสเริ่มเทิร์น +3 (หรือตาม WIS), ในเทิร์นแรกของการต่อสู้ ความเร็วของคุณเพิ่มขึ้น +10 ฟุต และคุณสามารถโจมตีอาวุธแถมฟรีได้อีก 1 ครั้ง ซึ่งการโจมตีนี้จะบวกโบนัสดาเมจเพิ่มอีก +1d8 ทันที!' },
            { name: 'Umbral Sight & Umbral Shroud (เนตรรัตติกาลและผ้าคลุมเงา)', desc: 'ได้รับ Darkvision 60 ฟุต (หากมีอยู่แล้วจะเพิ่มเป็น 90 ฟุต) และเมื่ออยู่ในความมืด คุณจะล่องหนหายตัว (Invisible) ต่อศัตรูที่ใช้ Darkvision มองหา!' }
          ],
          7: [
            { name: 'Iron Mind (จิตใจเหล็กกล้าไร้พ่าย)', desc: 'คุณได้รับความชำนาญในการทอยป้องกันสายปัญญาและจิตใจ (WIS Saving Throws และ INT Saving Throws)!' }
          ],
          11: [
            { name: 'Stalker’s Flurry (คมเขี้ยวซ้ำไร้พลาด)', desc: 'เทิร์นละ 1 ครั้ง เมื่อคุณทอยโจมตีด้วยอาวุธพลาดเป้า (Miss) คุณสามารถทอยโจมตีซ้ำใหม่ได้อีก 1 ครั้งทันทีฟรีๆ!' }
          ],
          15: [
            { name: 'Shadowy Dodge (หลบหลีกดั่งเงาพราย)', desc: 'เมื่อศัตรูทำการทอยโจมตีใส่คุณ (และไม่ได้รับ Advantage) คุณสามารถใช้ Reaction บังคับให้การโจมตีนั้นติดสถานะเสียเปรียบ (Disadvantage) ทันที!' }
          ]
        }
      },
      {
        id: 'fey_wanderer',
        name_th: 'Fey Wanderer (เรนเจอร์ผู้ท่องแดนภูต Feywild)',
        desc: 'เรนเจอร์สายภูตและวาทศิลป์ บวกโบนัส WIS เข้ากับการทอยเจรจา CHA ทุกชนิด! โจมตีบวกดาเมจ Psychic ทุกเทิร์น และสะท้อนอาการกลัว/เสน่ห์ใส่ศัตรู!',
        oathSpells: {
          3: ['Charm Person'],
          5: ['Misty Step'],
          9: ['Dispel Magic'],
          13: ['Dimension Door'],
          17: ['Mislead']
        },
        features: {
          3: [
            { name: 'Dreadful Strikes (คมศรภูตพิศวง +1d4 Psychic ทุกเป้าหมาย!)', desc: 'เมื่อคุณโจมตีศัตรูโดนด้วยอาวุธ จะทำโบนัสดาเมจทางจิตใจ (Psychic Damage) เพิ่มเติมอีก +1d4 (อัปเกรดเป็น +1d6 ที่ Lv.11) โดยสามารถทำดาเมจนี้ใส่ศัตรูแต่ละตัวได้ตัวละ 1 ครั้งในทุกๆ เทิร์น!' },
            { name: 'Otherworldly Glamour (มนตร์เสน่ห์แดนภูต — บวก WIS เข้ากับทักษะ CHA ทั้งหมด!)', desc: 'ความสามารถสุดคุ้ม: คุณได้รับความชำนาญในทักษะเจรจา 1 อย่าง (Deception, Performance หรือ Persuasion) และทุกครั้งที่คุณทอย測試สาย Charisma (CHA Check) คุณจะได้นำโบนัส Wisdom Modifier (WIS) ของคุณไปบวกเพิ่มเข้าไปด้วยเสมอ!' }
          ],
          7: [
            { name: 'Beguiling Twist (บิดเบือนมนตร์สะกดสะท้อนกลับ!)', desc: 'คุณได้เปรียบ (Advantage) ในการทอยต้านทาน Charmed และ Frightened และเมื่อใดก็ตามที่คุณหรือใครในระยะ 120 ฟุต ทอย Save ผ่านเพื่อต้านทานอาการ Charmed หรือ Frightened คุณสามารถใช้ Reaction ยิงคลื่นสะกดจิตนั้นไปใส่ศัตรูอีกตัวในระยะ 120 ฟุต ให้ติด Charmed หรือ Frightened นาน 1 นาทีแทนได้ทันที!' }
          ],
          11: [
            { name: 'Fey Reinforcements (อัญเชิญภูตพิทักษ์พงไพร)', desc: 'สามารถอัญเชิญภูต Fey ออกมาช่วยต่อสู้ในสนามรบได้ฟรี 1 ครั้งต่อการพักยาวโดยไม่ต้องใช้ช่องเวทมนตร์' }
          ],
          15: [
            { name: 'Misty Wanderer (ก้าวหมอกพริบตาพาเพื่อนวาร์ปฟรี!)', desc: 'คุณสามารถร่ายคาถา Misty Step (วาร์ป 30 ฟุตด้วย Bonus Action) ได้ฟรีโดยไม่เสียช่องเวทจำนวนครั้งเท่ากับโบนัส WIS! และทุกครั้งที่คุณวาร์ป คุณสามารถแตะเพื่อนร่วมทีม 1 คนให้วาร์ปติดไปด้วยกันได้ฟรี!' }
          ]
        }
      },
      {
        id: 'swarmkeeper',
        name_th: 'Swarmkeeper (ผู้ควบคุมฝูงแมลงและภูตจิ๋วธรรมชาติ)',
        desc: 'เรนเจอร์ผู้ใช้ฝูงภูตแมลง/ผีเสื้อ/หิ่งห้อยเวทมนตร์ ช่วยโจมตีเพิ่มดาเมจ ผลักศัตรูปลิว พาตัวเองลอยตัวหลบหนี และสลายร่างหลบดาเมจ!',
        oathSpells: {
          3: ['Faerie Fire', 'Mage Hand'],
          5: ['Web'],
          9: ['Fly'],
          13: ['Arcane Eye'],
          17: ['Insect Plague']
        },
        features: {
          3: [
            { name: 'Gathered Swarm (ฝูงภูตธรรมชาติประสานโจมตี 3 รูปแบบ!)', desc: 'มีฝูงภูตจิ๋วบินวนรอบตัวคุณ เทิร์นละ 1 ครั้งเมื่อคุณโจมตีโดนด้วยอาวุธ สามารถสั่งฝูงภูตให้แสดงผล 1 อย่าง: (1) ทำโบนัสดาเมจ Piercing เพิ่ม +1d6 (เป็น +1d8 ที่ Lv.11), (2) พัดศัตรูกระเด็นไปในทิศทางใดก็ได้ 15 ฟุต (STR Save), หรือ (3) อุ้มตัวคุณเองลอยขยับตำแหน่งไป 5 ฟุตฟรีโดยไม่โดนตีสวน!' }
          ],
          7: [
            { name: 'Writhing Tide (คลื่นฝูงภูตอุ้มโบยบิน)', desc: 'ใช้ Bonus Action สั่งให้ฝูงภูตรวมตัวกันเป็นพรมใต้เท้า มอบความเร็วในการบินลอยตัว (Flying Speed 10 ฟุต) และลอยข้ามสิ่งกีดขวางหรือเหวลึกได้นาน 1 นาที' }
          ],
          11: [
            { name: 'Mighty Swarm (พายุฝูงภูตกระแทกล้ม & เพิ่มเกราะ)', desc: 'ดาเมจของ Gathered Swarm เพิ่มเป็น 1d8, เมื่อผลักศัตรูกระเด็นสำเร็จ ศัตรูจะล้มคว่ำ (Prone) ลงกับพื้นด้วยทันที! และเมื่อให้ฝูงภูตอุ้มขยับตำแหน่ง คุณจะได้รับเกราะ Half Cover (+2 AC และ DEX Save) ไปจนเริ่มเทิร์นหน้า!' }
          ],
          15: [
            { name: 'Swarming Dispersal (สลายร่างเป็นฝูงแมลงหลบดาเมจครึ่งหนึ่ง + วาร์ป!)', desc: 'เมื่อคุณได้รับความเสียหาย สามารถใช้ Reaction สลายร่างกายตัวเองให้กลายเป็นฝูงภูตแมลงชั่วพริบตา: ได้รับ Resistance (ลดความเสียหายนั้นลงครึ่งหนึ่งทันที) และวาร์ปไปรวมร่างใหม่ในพื้นที่ว่างระยะ 30 ฟุต!' }
          ]
        }
      }
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
      {
        id: 'thief',
        name_th: 'Thief (จอมโจรหัตถ์เทวะความเร็วสูง)',
        desc: 'จอมโจรความเร็วสูง ได้รับ Bonus Action เพิ่มเป็น 2 ครั้งต่อเทิร์น (Fast Hands) ปีนป่ายเร็ว และทนการตกจากที่สูง!',
        features: {
          3: [
            { name: 'Fast Hands (สองหัตถ์ความเร็วแสง - 2 Bonus Actions!)', desc: 'สุดยอดความสามารถระดับเมต้า: คุณได้รับ Bonus Action เพิ่มขึ้นอีก 1 ครั้งในทุกๆ เทิร์น (รวมเป็น 2 Bonus Actions ต่อเทิร์น!) สามารถใช้ฟันอาวุธมือรอง 2 ครั้ง, วิ่ง Dash + ซ่อนตัว หรือดื่มยาได้ในเทิร์นเดียว!' },
            { name: 'Second-Story Work (วิชาตัวเบาจอมโจร)', desc: 'ปีนป่ายโดยไม่เสียความเร็วเพิ่ม กระโดดไกลขึ้นตามค่า DEX และได้รับความต้านทานความเสียหายจากการตกจากที่สูง (Falling Damage)' }
          ],
          9: [
            { name: 'Supreme Sneak (สุดยอดวิชาเร้นกายไร้เงา)', desc: 'ได้เปรียบ (Advantage) ในการทอย Stealth และสามารถใช้ความสามารถผสานเงาเพื่อล่องหนหายตัว (Invisible) เป็นเวลา 1 นาทีได้ (1 ครั้ง/พักสั้น)' }
          ],
          13: [
            { name: 'Use Magic Device (ปรมาจารย์ศาสตราวุธเวทมนตร์)', desc: 'คุณสามารถสวมใส่และใช้งานไอเทมเวทมนตร์หรือม้วนคัมภีร์เวท (Scrolls) ทุกชนิดได้โดยไม่ต้องสนเงื่อนไขด้านเผ่าพันธุ์ อาชีพ หรือเลเวล!' }
          ],
          17: [
            { name: 'Thief’s Reflexes (ปฏิกิริยาเหนือมนุษย์ 2 เทิร์นแรก)', desc: 'ในรอบแรกของการต่อสู้ทุกครั้ง คุณจะได้เล่นเทิร์นเต็มๆ ถึง 2 เทิร์น! (เทิร์นแรกตามค่า Initiative ปกติ และเทิร์นที่สองที่ค่า Initiative ลบ 10)' }
          ]
        }
      },
      {
        id: 'assassin',
        name_th: 'Assassin (มือสังหารไร้เงาปลิดชีพในพริบตา)',
        desc: 'มือสังหารไร้เงา รีเซ็ต Action เมื่อเปิดฉาก โจมตีศัตรูที่ยังไม่เข้าเทิร์นแบบ Advantage และติด Critical อัตโนมัติเมื่อซุ่มโจมตี!',
        features: {
          3: [
            { name: 'Assassinate: Initiative & Ambush (คมมีดสังหารไร้เงา)', desc: 'คุณได้เปรียบ (Advantage) ในการทอยโจมตีใส่ศัตรูทุกตัวที่ยังไม่ได้เริ่มเทิร์นแรกในการต่อสู้ และทุกการโจมตีที่โดนศัตรูที่ติดสถานะถูกซุ่มโจมตี (Surprised) จะกลายเป็น Critical Hit อัตโนมัติ 100%!' },
            { name: 'Assassin’s Alacrity (รีเซ็ตแอคชั่นเปิดฉาก)', desc: 'เมื่อคุณเปิดฉากโจมตีก่อนเข้าสู่การต่อสู้ ทันทีที่เริ่มเทิร์นแรกของคุณ ระบบจะรีเซ็ตคืนทั้ง Action และ Bonus Action ให้คุณกลับมาเต็มอีกครั้งทันที!' }
          ],
          9: [
            { name: 'Infiltration Expertise (ปรมาจารย์การปลอมแปลงแทรกซึม)', desc: 'สามารถปลอมแปลงตัวตนและสร้างตัวตนปลอมได้อย่างสมบูรณ์แบบ รวมถึงสามารถใช้ร่ายเวท Disguise Self อำพรางตัวเพื่อแทรกซึมเข้าพื้นที่ศัตรูได้' }
          ],
          13: [
            { name: 'Impostor (สวมรอยไร้ที่ติ)', desc: 'สามารถเลียนแบบคำพูด น้ำเสียง ลายมือ และท่าทางของผู้อื่นได้อย่างแนบเนียน โดยคุณจะได้เปรียบ (Advantage) ในการทอย Deception ทุกครั้งเมื่อมีคนสงสัย' }
          ],
          17: [
            { name: 'Death Strike (คมสังหารปลิดวิญญาณ ดาเมจ x2!)', desc: 'เมื่อคุณโจมตีโดนศัตรูที่ติดสถานะถูกซุ่มโจมตี (Surprised) เป้าหมายต้องทอย CON Save (DC = 8 + Prof + DEX) หากทอยไม่ผ่าน ความเสียหายทั้งหมดของการโจมตีนั้น (ที่ติด Critical ไปแล้ว) จะถูกคูณสอง (Double Damage) ซ้ำเข้าไปอีก!' }
          ]
        }
      },
      {
        id: 'arcane_trickster',
        name_th: 'Arcane Trickster (จอมโจรอาคมมายา)',
        desc: 'จอมโจรผู้ใช้เวทลวงตาและสะกดจิตจากตำรา Wizard พร้อมควบคุม Mage Hand ล่องหนขโมยของและปลดกับดักจากระยะไกล',
        features: {
          3: [
            { name: 'Spellcasting (ศาสตร์เวทจอมโจร)', desc: 'ปลดล็อกการร่ายเวทมนตร์จากตำรา Wizard (ใช้ค่า INT ในการร่ายเวท) โดยเน้นสำนักลวงตา (Illusion) และสะกดจิต (Enchantment)' },
            { name: 'Mage Hand Legerdemain (หัตถ์เวทล่องหนจอมโจร)', desc: 'เมื่อคุณร่าย Mage Hand มือเวทจะล่องหนหายตัว (Invisible) และคุณสามารถใช้ Bonus Action สั่งให้มันล้วงกระเป๋าศัตรู สะเดาะกุญแจ หรือปลดกับดักจากระยะไกลได้!' }
          ],
          9: [
            { name: 'Magical Ambush (ซุ่มร่ายอาคมจากเงามืด)', desc: 'หากคุณกำลังซ่อนตัว (Hidden) ตอนที่ร่ายเวทมนตร์ใส่ศัตรู เป้าหมายจะติดสถานะเสียเปรียบ (Disadvantage) ในการทอย Saving Throw เพื่อต้านทานเวทมนตร์บทนั้นทันที!' }
          ],
          13: [
            { name: 'Versatile Trickster (หัตถ์มายาปั่นป่วนศัตรู)', desc: 'คุณสามารถใช้ Bonus Action สั่งให้ Mage Hand ที่ลoyอยู่ใกล้ศัตรูในระยะ 5 ฟุต ก่อกวนศัตรู ทำให้การโจมตีของคุณใส่ศัตรูตัวนั้นได้เปรียบ (Advantage) ตลอดทั้งเทิร์น!' }
          ],
          17: [
            { name: 'Spell Thief (จอมโจรขโมยเวทมนตร์!)', desc: 'เมื่อศัตรูร่ายเวทมนตร์โดยมีคุณเป็นเป้าหมายหรืออยู่ในพื้นที่เวท คุณสามารถใช้ Reaction บังคับให้ศัตรูทอย Saving Throw สู้กับ Spell DC ของคุณ หากศัตรูทอยไม่ผ่าน เวทบทนั้นจะไร้ผลทันที และคุณจะขโมยเวทบทนั้นมาร่ายเองได้นาน 8 ชั่วโมง!' }
          ]
        }
      },
      {
        id: 'swashbuckler',
        name_th: 'Swashbuckler (จอมโจรนักดาบพเนจรเจ้าเสน่ห์)',
        desc: 'นักดาบพริ้วไหว ตีศัตรูแล้วเดินฉากหนีฟรีโดยไม่โดนตีสวน (Fancy Footwork), บวก CHA เข้ากับ Initiative และแทง Sneak Attack ตัวต่อตัวได้เลย!',
        features: {
          3: [
            { name: 'Fancy Footwork (ฟุตเวิร์คเพลงดาบตีแล้วฉากหนีฟรี!)', desc: 'เมื่อคุณทำการโจมตีประชิดใส่ศัตรูในเทิร์นของคุณ (ไม่ว่าจะตีโดนหรือพลาด) ศัตรูตัวนั้นจะไม่สามารถตีสวน (Opportunity Attack) ใส่คุณได้ตลอดทั้งเทิร์นนั้น! ทำให้คุณเดินถอยหนีได้ฟรีโดยไม่ต้องเปลือง Bonus Action กด Disengage!' },
            { name: 'Rakish Audacity (+CHA เริ่มเทิร์น & แทง Sneak Attack ดวลเดี่ยว!)', desc: 'คุณได้บวกโบนัส Charisma Modifier เพิ่มเข้ากับค่า Initiative! และคุณสามารถแทง Sneak Attack ใส่ศัตรูที่ดวลตัวต่อตัวกับคุณได้ทันทีโดยไม่ต้องมีเพื่อนยืนช่วยรุมและไม่ต้องซ่อนตัว!' }
          ],
          9: [
            { name: 'Panache (ลีลาเย้ยหยันท้าดวล & มนตร์เสน่ห์นักดาบ)', desc: 'ใช้ Action ทอย Persuasion สู้กับ Insight ของศัตรู หากชนะ ศัตรูจะถูกยั่วยุให้ติด Disadvantage เวลาไปตีคนอื่นที่ไม่ใช่คุณ และเดินหนีจากคุณไม่ได้นาน 1 นาที! (หากใช้ใส่คนที่ไม่ใช่ศัตรู จะทำให้หลงใหล Charmed นาน 1 นาที)' }
          ],
          13: [
            { name: 'Elegant Maneuver (ท่วงท่ากายกรรมไร้ที่ติ)', desc: 'ใช้ Bonus Action เพื่อรับความได้เปรียบ (Advantage) ในการทอย Acrobatics หรือ Athletics ครั้งถัดไปในเทิร์นนั้นทันที' }
          ],
          17: [
            { name: 'Master Duelist (ปรมาจารย์นักดาบไร้พ่าย)', desc: 'เมื่อคุณทอยโจมตีด้วยอาวุธพลาดเป้า คุณสามารถทอยโจมตีใหม่ซ้ำได้ทันทีพร้อมรับความได้เปรียบ (Advantage) ในการทอยซ้ำนั้น! (รีเซ็ตทุกการพักสั้นหรือพักยาว)' }
          ]
        }
      },
      {
        id: 'soulknife',
        name_th: 'Soulknife (มือสังหารมีดบินพลังจิต Psionic)',
        desc: 'มือสังหารพลังจิต เสกมีดพลังจิต (Psychic Blades) ปาโจมตีต่อเนื่องด้วย Bonus Action, บวกเต๋าพลังจิตเมื่อทักษะพลาด และวาร์ปผ่านมีดบิน!',
        features: {
          3: [
            { name: 'Psionic Power: Psi-Bolstered Knack (เต๋าพลังจิตพลิกทักษะ & สื่อสารจิต)', desc: 'ได้รับลูกเต๋าพลังจิต (Psionic Energy Dice ขนาด 1d6 -> 1d8 -> 1d10 -> 1d12) เมื่อคุณทอยทักษะที่ชำนาญแล้วไม่ผ่าน สามารถทอยเต๋าพลังจิตบวกเพิ่มได้ และหากบวกแล้วยังไม่ผ่านจะไม่เสียลูกเต๋านั้นไปฟรีๆ! พร้อมเชื่อมจิตคุยกับเพื่อนได้ไกล 1 ไมล์' },
            { name: 'Psychic Blades (คมมีดพลังจิตไร้รอยแผล โจมตี 2 มือ!)', desc: 'เสกมีดพลังงานจิตในมือโจมตีประชิดหรือขว้างไกล 60 ฟุต ทำดาเมจ 1d6 + DEX Psychic และเมื่อโจมตีเสร็จ สามารถใช้ Bonus Action เสกมีดจิตเล่มที่สองในมืออีกข้างปาซ้ำทำดาเมจ 1d4 + DEX Psychic ได้ทันทีโดยไม่ต้องถืออาวุธจริง!' }
          ],
          9: [
            { name: 'Soul Blades: Homing Strikes & Psychic Teleportation (มีดบินนำวิถี & วาร์ปมีดบิน!)', desc: 'เมื่อปามีดจิตพลาดเป้า สามารถทอยเต๋าพลังจิตบวกความแม่นยำให้โดนได้ (ถ้าไม่โดนไม่เสียเต๋า!) และสามารถใช้ Bonus Action ขว้างมีดจิตไปปักพื้นในระยะสูงสุด 10xเต๋า ฟุต แล้ววาร์ปร่างของคุณไปปรากฏที่จุดนั้นทันที!' }
          ],
          13: [
            { name: 'Psychic Veil (ผ้าคลุมพลังจิตล่องหนไร้ตัวตน)', desc: 'ใช้ Action เพื่อบิดเบือนการรับรู้ของศัตรู ทำให้คุณล่องหนหายตัว (Invisible) นานถึง 1 ชั่วโมงเต็ม!' }
          ],
          17: [
            { name: 'Rend Mind (คมมีดฉีกกระชากวิญญาณ สตันศัตรู!)', desc: 'เมื่อคุณทำดาเมจ Sneak Attack ด้วยมีดพลังจิต เป้าหมายต้องทอย WIS Save (DC = 8 + Prof + DEX) หากไม่ผ่านจะติดสถานะมึนงง (Stunned) ยืนนิ่งทำอะไรไม่ได้ไปนานถึง 1 นาทีเต็ม!' }
          ]
        }
      }
    ],
    progression: { 1: ['Expertise', 'Sneak Attack', "Thieves' Cant"], 2: ['Cunning Action (วิ่ง/หลบ/ซ่อน ด้วย Bonus Action)'], 3: ['ปลดล็อกสายอาชีพย่อย'], 5: ['Uncanny Dodge (ลดดาเมจครึ่งหนึ่งด้วย Reaction)'], 7: ['Evasion'], 10: ['Bonus Feat'], 11: ['Reliable Talent'] }
  },
  {
    id: 'sorcerer', name_en: 'Sorcerer', name_th: 'ซอร์เซอเรอร์', hitDie: 6, subclassLevel: 1, skillChoices: 2,
    skills: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
    metamagic: [
      {"id": "careful", "name": "🛡️ Careful Spell (1 SP)", "desc": "ใช้ 1 SP: เลือกเพื่อนร่วมทีมสูงสุดตามโบนัส CHA ให้ผ่าน Saving Throw จากดาเมจเวทหมู่ของคุณ (เช่น Fireball หรือ Hypnotic Pattern) อัตโนมัติ 100%!"},
      {"id": "distant", "name": "🎯 Distant Spell (1 SP)", "desc": "ใช้ 1 SP: เพิ่มระยะร่ายเวทมนตร์เป็น 2 เท่าทันที หรือเปลี่ยนเวทระยะสัมผัส (Touch) ให้ร่ายได้จากระยะไกล 30 ฟุต!"},
      {"id": "empowered", "name": "🔥 Empowered Spell (1 SP)", "desc": "ใช้ 1 SP: เมื่อทอยลูกเต๋าดาเมจเวทแล้วแต้มออกต่ำ สามารถเลือกทอยลูกเต๋าใหม่ได้สูงสุดตามโบนัส CHA (ใช้ซ้ำร่วมกับ Metamagic อื่นในเทิร์นเดียวได้!)"},
      {"id": "extended", "name": "⏳ Extended Spell (1 SP)", "desc": "ใช้ 1 SP: เพิ่มระยะเวลาแสดงผลของเวทมนตร์ที่มีเวลานานตั้งแต่ 1 นาทีขึ้นไป ให้ยาวนานขึ้นเป็น 2 เท่า (สูงสุดไม่เกิน 24 ชั่วโมง)"},
      {"id": "heightened", "name": "👁️ Heightened Spell (3 SP)", "desc": "ใช้ 3 SP: บังคับให้เป้าหมาย 1 ตัวติดสถานะเสียเปรียบ (Disadvantage) ในการทอย Saving Throw ครั้งแรกเพื่อต้านทานเวทมนตร์บทนี้ของคุณทันที!"},
      {"id": "quickened", "name": "⚡ Quickened Spell (2 SP)", "desc": "ใช้ 2 SP: เปลี่ยนเวทมนตร์ที่ใช้เวลา 1 Action ให้ร่ายด้วย 1 Bonus Action แทนได้ทันที! (ทำให้ร่ายเวทใหญ่ + ยิง Cantrip ซ้ำในเทิร์นเดียวได้)"},
      {"id": "seeking", "name": "🏹 Seeking Spell (2 SP)", "desc": "ใช้ 2 SP: เมื่อคุณทอยโจมตีด้วยเวทมนตร์ (Spell Attack Roll) แล้วพลาดเป้า สามารถทอยเต๋า d20 ใหม่ได้ทันที (ใช้ร่วมกับ Metamagic อื่นได้)"},
      {"id": "subtle", "name": "🤫 Subtle Spell (1 SP)", "desc": "ใช้ 1 SP: ร่ายเวทโดยไม่ต้องออกเสียง (V) และไม่ต้องขยับมือ (S) ร่ายในโดม Silence ได้ ร่ายตอนถูกมัดมือได้ และศัตรูมองไม่เห็นเพื่อ Counterspell!"},
      {"id": "transmuted", "name": "🔄 Transmuted Spell (1 SP)", "desc": "ใช้ 1 SP: เปลี่ยนชนิดธาตุของเวทมนตร์ (กรด, น้ำแข็ง, ไฟ, สายฟ้า, พิษ, เสียง) ให้เป็นอีกธาตุหนึ่งตามใจชอบ (เช่น เปลี่ยน Fireball เป็นลูกบอลสายฟ้า!)"},
      {"id": "twinned", "name": "👯 Twinned Spell (1-9 SP)", "desc": "ใช้ SP เท่ากับระดับเวท (Cantrip ใช้ 1 SP): ทำให้เวทที่เล็งเป้าหมายเดี่ยว ชิ่งไปส่งผลใส่เป้าหมายที่ 2 ได้พร้อมกัน! (เช่น ร่าย Haste หรือ Polymorph ใส่ 2 คนพร้อมกัน)"}
    ],
    equipment: ['Quarterstaff (ไม้เท้าเวท 1d6)', 'Dagger x2 (มีดสั้น)'],
    desc: 'ผู้มีสายเลือดเวทมนตร์มาแต่กำเนิด สามารถดัดแปลงคาถาด้วย Metamagic ให้ร่ายได้ 2 เป้าหมายหรือร่ายด้วย Bonus Action',
    spellcasting: { cantrips: 4, spells: 4, cantripList: ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Fire Bolt", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shocking Grasp", "True Strike"], spellList: ["Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Fog Cloud", "Jump", "Mage Armor", "Magic Missile", "Shield", "Silent Image", "Sleep", "Thunderwave", "Witch Bolt", "Alter Self", "Blindness/Deafness", "Blur", "Cloud of Daggers", "Crown of Madness", "Darkness", "Darkvision", "Detect Thoughts", "Enhance Ability", "Enlarge/Reduce", "Hold Person", "Invisibility", "Knock", "Levitate", "Mirror Image", "Misty Step", "Scorching Ray", "Shatter", "Suggestion", "Web", "Blink", "Clairvoyance", "Counterspell", "Dispel Magic", "Fear", "Fireball", "Fly", "Haste", "Hypnotic Pattern", "Lightning Bolt", "Major Image", "Slow", "Banishment", "Blight", "Confusion", "Dimension Door", "Greater Invisibility", "Ice Storm", "Polymorph", "Wall of Fire", "Animate Objects", "Cone of Cold", "Dominate Person", "Hold Monster", "Telekinesis", "Chain Lightning", "Disintegrate", "Eyebite", "Globe of Invulnerability", "Mass Suggestion", "Sunbeam", "True Seeing", "Finger of Death", "Fire Storm", "Plane Shift", "Reverse Gravity", "Teleport", "Dominate Monster", "Earthquake", "Power Word Stun", "Sunburst", "Gate", "Meteor Swarm", "Power Word Kill", "Time Stop", "Wish"] },
        subclasses: [
      {
        id: 'draconic',
        name_th: 'Draconic Bloodline (สายเลือดมังกรโบราณบรรพกาล)',
        desc: 'สายเลือดมังกร ได้รับเกราะเกล็ดมังกรธรรมชาติ (Base AC 13+DEX), เลือด +1 HP ทุกเลเวล และเพิ่มดาเมจธาตุตามสีเกล็ดที่เลือก',
        features: {
          1: [
            { name: 'Draconic Ancestry (เลือกสายเลือดสีมังกรบรรพกาล)', desc: 'เลือกธาตุประจำสายเลือดมังกร (Red/Gold=ไฟ, Blue/Lightning=สายฟ้า, White/Silver=น้ำแข็ง, Acid=กรด, Poison=พิษ) ซึ่งจะส่งผลต่อการป้องกันและการเพิ่มดาเมจเวทมนตร์ธาตุนั้น' }
          ],
          6: [
            { name: 'Elemental Affinity (พลังธาตุบรรพกาล)', desc: 'เมื่อคุณร่ายคาถาที่ทำความเสียหายตรงกับธาตุสายเลือดมังกรของคุณ คุณสามารถบวกโบนัส CHA Modifier เพิ่มเข้าไปในดาเมจของเวทมนตร์นั้นได้ทุกเส้น และได้รับความต้านทาน (Resistance) ต่อธาตุนั้นด้วย' }
          ],
          14: [
            { name: 'Dragon Wings (ปีกมังกรทะยานฟ้า)', desc: 'คุณสามารถใช้ Bonus Action งอกปีกมังกรมหึมาออกมาจากหลัง มอบความเร็วในการบิน (Flying Speed) เท่ากับความเร็วเดินปกติของคุณ' }
          ],
          18: [
            { name: 'Draconic Presence (รัศมีมังกรข่มขวัญ)', desc: 'ใช้ Action แผ่ออร่าความเกรงขามรัศมี 60 ฟุต ศัตรูต้องทอย WIS Save หากไม่ผ่านจะติดสถานะหวาดกลัว (Frightened) นาน 1 นาที' }
          ]
        }
      },
      {
        id: 'wild_magic',
        name_th: 'Wild Magic (สายเลือดเวทแปรปรวนอลวน)',
        desc: 'พลังเวทแปรปรวน บังคับทอยได้เปรียบด้วย Tides of Chaos และสุ่มเอฟเฟกต์เวทปั่นป่วนจากตาราง Wild Magic Surge',
        features: {
          1: [
            { name: 'Wild Surge & Tides of Chaos (คลื่นเวทปั่นป่วน & พลิกชะตาโชคชะตา)', desc: 'ทุกครั้งที่คุณร่ายเวทสาย Sorcerer ระดับ 1 ขึ้นไป DM สามารถสั่งให้ทอยตาราง Wild Magic Surge (สุ่มระเบิดเอฟเฟกต์ประหลาด) และคุณสามารถใช้ Tides of Chaos เพื่อบังคับทอยโจมตี/Save แบบ Advantage ได้ 1 ครั้งก่อนจะรีเซ็ต' }
          ],
          6: [
            { name: 'Bend Luck (บิดเบือนโชคชะตาเพื่อนหรือศัตรู)', desc: 'เมื่อคุณหรือศัตรูในระยะ 30 ฟุต กำลังจะทอย d20 คุณสามารถใช้ Reaction และจ่าย 2 Sorcery Points เพื่อทอยเต๋า 1d4 ไปบวกเพิ่มหรือลบออกจากผลลัพธ์ของเป้าหมายได้ทันที!' }
          ],
          10: [
            { name: 'Controlled Chaos (ควบคุมความโกลาหล)', desc: 'เมื่อคุณทอยได้ผลลัพธ์จากตาราง Wild Magic Surge คุณสามารถทอย 2 ครั้งแล้วเลือกผลลัพธ์ที่ต้องการได้เอง' }
          ],
          14: [
            { name: 'Spell Bombardment (ระเบิดพลังเวททำลายล้างทะลุพิกัด)', desc: 'เมื่อคุณทอยลูกเต๋าดาเมจของคาถาแล้วออกแต้มสูงสุด (Max Roll) คุณสามารถทอยลูกเต๋าเพิ่มฟรีได้อีก 1 ลูกทันที!' }
          ]
        }
      },
      {
        id: 'storm',
        name_th: 'Storm Sorcery (สายเลือดจ้าวพายุคลั่ง)',
        desc: 'จ้าวแห่งพายุ บินได้ระยะสั้นๆ 30 ฟุตด้วย Bonus Action ทันทีหลังร่ายคาถาโดยไม่โดนตีสวน (Heart of the Storm)',
        features: {
          1: [
            { name: 'Wind Speaker (ผู้สื่อสารกับสายลม)', desc: 'คุณสามารถพูด อ่าน และเขียนภาษา Primordial (ภาษาธาตุ: Auran, Ignan, Terran, Aquan) ได้อย่างคล่องแคล่ว' },
            { name: 'Heart of the Storm (หัวใจพายุคลั่ง)', desc: 'เมื่อคุณร่ายคาถาระดับ 1 ขึ้นไปที่ทำความเสียหายธาตุสายฟ้า (Lightning) หรือเสียง (Thunder) จะเกิดคลื่นพายุรอบตัวทำดาเมจใส่ศัตรูในระยะ 10 ฟุตอัตโนมัติ และได้รับความต้านทานสายฟ้า/เสียง' }
          ],
          6: [
            { name: 'Storm Guide (ผู้ชี้นำลมพายุ)', desc: 'คุณสามารถควบคุมสภาพอากาศรอบตัว (ฝน ลม ทิศทางพายุ) ให้เป็นไปตามใจชอบด้วยการใช้ Action เพียงเล็กน้อย' },
            { name: 'Tempestuous Magic (เวทย์พายุพัดพาโบยบิน)', desc: 'เมื่อคุณร่ายคาถาระดับ 1 ขึ้นไป สามารถใช้ Bonus Action บินลอยตัวระยะ 10 ฟุตหนีออกจากการประชิดตัวของศัตรูได้โดยไม่โดนตีสวน (Opportunity Attack)' }
          ],
          11: [
            { name: 'Storm’s Fury (กรงเล็บพายุสายฟ้าสลับสวน)', desc: 'เมื่อศัตรูโจมตีประชิดใส่คุณ สามารถใช้ Reaction สายฟ้าฟาดใส่ศัตรูตัวนั้น ทำดาเมจสายฟ้าพร้อมบังคับกระเด็นถอยหลัง 20 ฟุต!' }
          ],
          18: [
            { name: 'Wind Soul (จิตวิญญาณแห่งสายลม)', desc: 'คุณได้รับความเร็วในการบิน (Flying Speed) 60 ฟุตตลอดเวลา และสามารถแชร์ออร่าบินให้เพื่อนร่วมทีมที่อยู่ใกล้ได้ด้วย!' }
          ]
        }
      },
      {
        id: 'divine_soul',
        name_th: 'Divine Soul (สายเลือดเทวทูตสวรรค์ — เลือกเวท Cleric ได้ทั้งหมด!)',
        desc: 'ผู้ได้รับพรจากสวรรค์ สามารถเลือกเรียนคาถาจากตำรา Cleric ได้ทั้งหมด! (ใช้ Twinned Spell ร่าย Heal/Guiding Bolt ได้), บวก +2d4 ตอนทอยพลาด และงอกปีกเทวทูต!',
        features: {
          1: [
            { name: 'Divine Magic (มนตราสวรรค์ — ปลดล็อกสมุดเวท Cleric!)', desc: 'ความสามารถระดับท็อปเทียร์: คุณสามารถเลือกเรียนและร่ายเวทมนตร์จากตารางคาถาของ Cleric ได้ทุกบท! (เช่น Bless, Guiding Bolt, Healing Word, Spirit Guardians, Revivify, Heal) โดยนับเป็นเวท Sorcerer ที่ใช้ Metamagic ดัดแปลงได้ทั้งหมด!' },
            { name: 'Favored by the Gods (ทวยเทพประทานพร +2d4 พลิกชะตา!)', desc: 'เมื่อคุณทอย Saving Throw ไม่ผ่าน หรือทอยโจมตีพลาดเป้า คุณสามารถเรียกพลังสวรรค์ทอยลูกเต๋า +2d4 บวกเพิ่มเข้าไปในผลลัพธ์เพื่อเปลี่ยนจากพลาดเป็นสำเร็จได้ทันที! (รีเซ็ตทุกการพักสั้นหรือพักยาว)' }
          ],
          6: [
            { name: 'Empowered Healing (เสริมพลังเวทเยียวยา)', desc: 'เมื่อคุณหรือเพื่อนร่วมทีมในระยะ 5 ฟุต ทอยลูกเต๋าเพื่อฟื้นฟูพลังชีวิต (HP) คุณสามารถจ่าย 1 Sorcery Point เพื่อทอยลูกเต๋าฮีลเหล่านั้นใหม่กี่ลูกก็ได้ตามต้องการ!' }
          ],
          14: [
            { name: 'Otherworldly Wings (ปีกเทวทูตสวรรค์บินถาวร)', desc: 'ใช้ Bonus Action กางปีกแสงเทวทูตออกมาจากแผ่นหลัง มอบความเร็วในการบิน (Flying Speed) 30 ฟุต ให้คุณอย่างถาวรจนกว่าคุณจะสั่งเก็บปีกเอง!' }
          ],
          18: [
            { name: 'Unearthly Recovery (ปาฏิหาริย์ฟื้นคืนชีพครึ่งหลอด)', desc: 'เมื่อคุณมี HP เหลือน้อยกว่าครึ่งหนึ่งของ Max HP คุณสามารถใช้ Bonus Action ฟื้นฟูพลังชีวิตตัวเองกลับมาทันทีเท่ากับครึ่งหนึ่งของ Max HP ทั้งหมดของคุณ! (1 ครั้ง/พักยาว)' }
          ]
        }
      },
      {
        id: 'shadow_magic',
        name_th: 'Shadow Magic (สายเลือดเงามรณะแห่ง Shadowfell)',
        desc: 'จอมเวทเงามืด มองทะลุความมืดเวทมนตร์, มีโอกาสรอดตายที่ 1 HP (Strength of the Grave) และอัญเชิญหมาป่าเงาโลกันตร์มาขย้ำศัตรูให้ทอยต้านเวทแบบเสียเปรียบ!',
        bonusSpells: {
          3: ['Darkness']
        },
        features: {
          1: [
            { name: 'Eyes of the Dark (เนตรรัตติกาล 120 ฟุต)', desc: 'ได้รับ Darkvision ไกลถึง 120 ฟุต และเมื่อถึง Lv.3 จะได้รับคาถา Darkness ฟรี ซึ่งคุณสามารถจ่าย 2 Sorcery Points เพื่อร่าย Darkness ที่ตัวคุณเองมองทะลุความมืดเวทมนตร์นั้นได้อย่างชัดเจน!' },
            { name: 'Strength of the Grave (โกงความตายจากเงามืด)', desc: 'เมื่อคุณได้รับความเสียหายจน HP ลดเหลือ 0 (ที่ไม่ใช่ดาเมจ Radiant หรือ Critical Hit) คุณสามารถทอย CHA Saving Throw (DC = 5 + ดาเมจที่โดน) หากผ่าน คุณจะไม่ล้มลงแต่เด้งกลับมาที่ 1 HP ทันที!' }
          ],
          6: [
            { name: 'Hound of Ill Omen (อัญเชิญหมาป่าเงาอาถรรพ์)', desc: 'ใช้ Bonus Action และจ่าย 3 Sorcery Points อัญเชิญหมาป่าเงาโลกันตร์ (Dire Wolf เสริมพลัง) ออกมาไล่ขย้ำเป้าหมายที่ระบุ หมาป่าเดินทะลุกำแพงได้ และตราบใดที่หมาป่ายืนอยู่ติดกับเป้าหมายในระยะ 5 ฟุต เป้าหมายจะติดสถานะเสียเปรียบ (Disadvantage) ในการทอย Saving Throw ต้านทานเวททุกบทของคุณ!' }
          ],
          14: [
            { name: 'Shadow Walk (ก้าวพริบตาผ่านเงามืด 120 ฟุต)', desc: 'เมื่ออยู่ในพื้นที่แสงสลัวหรือความมืด สามารถใช้ Bonus Action วาร์ป (Teleport) ไปยังพื้นที่เงามืดอื่นในระยะไกลถึง 120 ฟุต ได้ฟรีทุกเทิร์น!' }
          ],
          18: [
            { name: 'Umbral Form (ร่างอวตารเงาอมตะ)', desc: 'จ่าย 6 Sorcery Points เปลี่ยนร่างเป็นเงาโปร่งแสงนาน 1 นาที: เดินทะลุสิ่งของและศัตรูได้ และได้รับความต้านทาน (Resistance - ลดดาเมจครึ่งหนึ่ง) ต่อความเสียหายทุกชนิดในเกม (ยกเว้น Force และ Radiant)!' }
          ]
        }
      },
      {
        id: 'aberrant_mind',
        name_th: 'Aberrant Mind (สายเลือดพลังจิตต่างมิติ Psionic)',
        desc: 'ผู้ตื่นรู้พลังจิต สื่อสารทางจิต ได้รับคาถาพลังจิตเพิ่ม 10 บท และร่ายด้วย Sorcery Points โดยไม่ต้องออกเสียงหรือขยับมือ (Psionic Sorcery)!',
        bonusSpells: {
          1: ['Arms of Hadar', 'Dissonant Whispers'],
          3: ['Calm Emotions', 'Detect Thoughts'],
          5: ['Hunger of Hadar', 'Sending'],
          7: ['Evard’s Black Tentacles'],
          9: ['Telekinesis']
        },
        features: {
          1: [
            { name: 'Psionic Spells & Telepathic Speech (คาถาพลังจิต & สื่อสารทางจิต)', desc: 'ปลดล็อกคาถาพลังจิตพิเศษเข้าสมุดเวทอัตโนมัติตามเลเวล และสามารถใช้ Bonus Action เชื่อมกระแสจิตพูดคุยกับเพื่อนในระยะไกลหลายไมล์ได้นานเท่ากับเลเวลของคุณ' }
          ],
          6: [
            { name: 'Psionic Sorcery & Psychic Defenses (ร่ายเวทด้วยจิตไร้เสียง & เกราะจิตใจ)', desc: 'เมื่อร่ายคาถาจากรายการ Psionic Spells คุณสามารถจ่าย Sorcery Points เท่ากับระดับเวทแทนการใช้ช่องเวทได้ ซึ่งการร่ายแบบนี้จะไม่มีเสียงและไม่ต้องขยับมือเลย (Subtle Spell ฟรี)! พร้อมได้รับ Resistance ต่อดาเมจ Psychic และได้เปรียบเวลาทอยต้าน Charmed/Frightened' }
          ],
          14: [
            { name: 'Revelation in Flesh (กลายพันธุ์พลังจิตเหนือมนุษย์)', desc: 'จ่าย 1+ Sorcery Points เพื่อกลายร่างชั่วคราว 10 นาที เลือกรับความสามารถ: มองเห็นสิ่งล่องหนในระยะ 60 ฟุต, บินลอยตัวได้เท่าความเร็วเดิน, ว่ายน้ำเร็ว 2 เท่า+หายใจใต้น้ำ, หรือบีบร่างกายลอดช่องแคบขนาด 1 นิ้วได้!' }
          ],
          18: [
            { name: 'Warping Implosion (หลุมดำบิดเบือนอวกาศ)', desc: 'ใช้ Action วาร์ปตัวเองไปที่ระยะ 120 ฟุต แล้วทิ้งหลุมดำดูดกลืนพื้นที่เดิมในรัศมี 30 ฟุต ศัตรูทุกตัวต้องทอย STR Save ไม่ผ่านโดนดาเมจ Force 3d10 และถูกดูดมารวมกันตรงกลางพร้อมความเร็วลดเหลือ 0!' }
          ]
        }
      }
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
      {"id": "agonizing", "name": "💥 Agonizing Blast", "minLv": 2, "desc": "บวกโบนัส CHA Modifier เข้ากับความเสียหายของลำแสง Eldritch Blast ทุกเส้นที่ยิงโดน"},
      {"id": "repelling", "name": "💨 Repelling Blast", "minLv": 2, "desc": "เมื่อยิง Eldritch Blast โดนศัตรู สามารถผลักศัตรูให้กระเด็นถอยหลังไป 10 ฟุตได้เสมอ"},
      {"id": "eldritch_spear", "name": "🎯 Eldritch Spear", "minLv": 2, "desc": "เพิ่มระยะการยิงของ Eldritch Blast ให้ไกลขึ้นเป็น 300 ฟุต (จากเดิม 120 ฟุต)"},
      {"id": "grasp_hadar", "name": "🐙 Grasp of Hadar", "minLv": 2, "desc": "เทิร์นละ 1 ครั้ง เมื่อคุณยิง Eldritch Blast โดนเป้าหมาย สามารถดึงศัตรูเข้ามาหาคุณเป็นเส้นตรง 10 ฟุต"},
      {"id": "lance_lethargy", "name": "❄️ Lance of Lethargy", "minLv": 2, "desc": "เทิร์นละ 1 ครั้ง เมื่อยิง Eldritch Blast โดนเป้าหมาย สามารถลดความเร็วเคลื่อนที่ของศัตรูลง 10 ฟุต จนจบเทิร์นหน้า"},
      {"id": "armor_shadows", "name": "🛡️ Armor of Shadows", "minLv": 2, "desc": "สามารถร่ายคาถา Mage Armor ใส่ตัวเองได้ไม่จำกัดครั้งโดยไม่ต้องใช้ช่องเวทมนตร์ (AC พื้นฐานกลายเป็น 13 + DEX)"},
      {"id": "devils_sight", "name": "👁️ Devil’s Sight", "minLv": 2, "desc": "มองเห็นในความมืดปกติและ \"ความมืดเวทมนตร์ (Magical Darkness)\" ได้อย่างชัดเจนในระยะ 120 ฟุต"},
      {"id": "fiendish_vigor", "name": "🩸 Fiendish Vigor", "minLv": 2, "desc": "สามารถร่ายคาถา False Life ระดับ 1 ใส่ตัวเองเพื่อรับ Temporary HP (1d4+4) ได้ไม่จำกัดครั้งโดยไม่ต้องใช้ช่องเวท"},
      {"id": "mask_faces", "name": "🎭 Mask of Many Faces", "minLv": 2, "desc": "สามารถร่ายคาถา Disguise Self เพื่อปลอมแปลงรูปลักษณ์ได้ตลอดเวลาโดยไม่ต้องเสียช่องเวทมนตร์"},
      {"id": "misty_visions", "name": "🌫️ Misty Visions", "minLv": 2, "desc": "สามารถร่ายคาถา Silent Image สร้างภาพลวงตาขนาดใหญ่ได้ตลอดเวลาโดยไม่ต้องเสียช่องเวทมนตร์"},
      {"id": "eldritch_sight", "name": "✨ Eldritch Sight", "minLv": 2, "desc": "สามารถร่ายคาถา Detect Magic เพื่อตรวจจับกระแสเวทมนตร์ได้ตลอดเวลาโดยไม่ต้องใช้ช่องเวทมนตร์"},
      {"id": "eldritch_mind", "name": "🧠 Eldritch Mind", "minLv": 2, "desc": "คุณได้รับความได้เปรียบ (Advantage) ในการทอย CON Saving Throw ทุกครั้งเพื่อรักษาสมาธิเวทมนตร์ (Concentration)!"},
      {"id": "beast_speech", "name": "🐾 Beast Speech", "minLv": 2, "desc": "สามารถร่ายคาถา Speak with Animals เพื่อพูดคุยสื่อสารกับสัตว์ป่าได้ตลอดเวลาโดยไม่ต้องใช้ช่องเวทมนตร์"},
      {"id": "eyes_rune_keeper", "name": "📜 Eyes of the Rune Keeper", "minLv": 2, "desc": "คุณสามารถอ่านและเข้าใจภาษาเขียนได้ทุกภาษาในโลกและมิติต่างๆ ได้อย่างสมบูรณ์แบบ"},
      {"id": "beguiling_influence", "name": "🗣️ Beguiling Influence", "minLv": 2, "desc": "ได้รับความชำนาญในทักษะการเจรจา (Deception และ Persuasion) ทันทีฟรี 2 ทักษะ"},
      {"id": "thief_five_fates", "name": "🎲 Thief of Five Fates", "minLv": 2, "desc": "สามารถใช้ช่องเวทมนตร์วอร์ล็อคร่ายคาถา Bane เพื่อหักแต้มโจมตีและ Saving Throw ของศัตรู -1d4 (1 ครั้ง/พักยาว)"},
      {"id": "book_ancient_secrets", "name": "📖 Book of Ancient Secrets", "minLv": 3, "pact": "tome", "desc": "เงื่อนไข: Pact of the Tome — บันทึกคาถาพิธีกรรม (Ritual Spells) ระดับ 1 สองบท และคัดลอกคาถาพิธีกรรมจากทุกอาชีพลงคัมภีร์ได้"},
      {"id": "improved_pact_weapon", "name": "🗡️ Improved Pact Weapon (+1)", "minLv": 3, "pact": "blade", "desc": "เงื่อนไข: Pact of the Blade — อาวุธพันธสัญญาของคุณได้รับโบนัสความแม่นยำและดาเมจ +1 ทันที และเสกเป็นธนู/หน้าไม้ระยะไกลได้ด้วย!"},
      {"id": "voice_chain_master", "name": "🦅 Voice of the Chain Master", "minLv": 3, "pact": "chain", "desc": "เงื่อนไข: Pact of the Chain — สื่อสารทางจิตและมองผ่านดวงตาของสัตว์รับใช้ (Familiar) ได้ไม่จำกัดระยะทางตราบใดที่อยู่มิติเดียวกัน และพูดผ่านปากสัตว์รับใช้ได้"},
      {"id": "gift_ever_living", "name": "💚 Gift of the Ever-Living Ones", "minLv": 3, "pact": "chain", "desc": "เงื่อนไข: Pact of the Chain — เมื่อคุณได้รับการฟื้นฟู HP ขณะที่สัตว์รับใช้ (Familiar) อยู่ใกล้ในระยะ 100 ฟุต ลูกเต๋าฮีลทุกลูกจะออกแต้มสูงสุดเต็มแม็กซ์ 100% ทันที!"},
      {"id": "thirsting_blade", "name": "⚔️ Thirsting Blade (Extra Attack)", "minLv": 5, "pact": "blade", "desc": "เงื่อนไข: Lv.5, Pact of the Blade — เมื่อใช้ Action โจมตีด้วยอาวุธพันธสัญญา สามารถโจมตีได้ 2 ครั้งต่อเทิร์น!"},
      {"id": "eldritch_smite", "name": "⚡ Eldritch Smite (ระเบิดพลังอเวจี)", "minLv": 5, "pact": "blade", "desc": "เงื่อนไข: Lv.5, Pact of the Blade — เมื่อตีโดนด้วยอาวุธพันธสัญญา สามารถสละช่องเวทเพื่อระเบิดดาเมจ Force เพิ่ม +1d8 (+1d8 ต่อระดับช่องเวท) และกระแทกศัตรูล้ม Prone ทันทีโดยไม่ต้องทอย Save!"},
      {"id": "one_with_shadows", "name": "🌑 One with Shadows", "minLv": 5, "desc": "เงื่อนไข: Lv.5 — เมื่ออยู่ในพื้นที่แสงสลัวหรือความมืด สามารถใช้ Action ล่องหนหายตัว (Invisible) ได้จนกว่าจะเคลื่อนที่หรือโจมตี"},
      {"id": "mire_mind", "name": "🌀 Mire the Mind", "minLv": 5, "desc": "เงื่อนไข: Lv.5 — สามารถใช้ช่องเวทมนตร์วอร์ล็อคร่ายคาถา Slow เพื่อชะลอความเร็วศัตรูเป็นกลุ่มได้ (1 ครั้ง/พักยาว)"},
      {"id": "sculptor_flesh", "name": "🐸 Sculptor of Flesh", "minLv": 7, "desc": "เงื่อนไข: Lv.7 — สามารถใช้ช่องเวทมนตร์วอร์ล็อคร่ายคาถา Polymorph เพื่อสาปศัตรูเป็นแกะหรือแปลงร่างเพื่อนเป็น T-Rex ได้ (1 ครั้ง/พักยาว)"},
      {"id": "whispers_grave", "name": "💀 Whispers of the Grave", "minLv": 9, "desc": "เงื่อนไข: Lv.9 — สามารถร่ายคาถา Speak with Dead เพื่อสื่อสารกับวิญญาณคนตายได้ตลอดเวลาโดยไม่ต้องใช้ช่องเวท"},
      {"id": "ascendant_step", "name": "☁️ Ascendant Step", "minLv": 9, "desc": "เงื่อนไข: Lv.9 — สามารถร่ายคาถา Levitate ยกตัวเองลอยขึ้นกลางอากาศได้ตลอดเวลาโดยไม่ต้องใช้ช่องเวทมนตร์"},
      {"id": "minions_chaos", "name": "🌪️ Minions of Chaos", "minLv": 9, "desc": "เงื่อนไข: Lv.9 — สามารถใช้ช่องเวทวอร์ล็อคร่ายคาถา Conjure Elemental เพื่ออัญเชิญอสูรธาตุทรงพลังมาช่วยสู้ได้ (1 ครั้ง/พักยาว)"},
      {"id": "lifedrinker", "name": "🩸 Lifedrinker (+CHA Necrotic)", "minLv": 12, "pact": "blade", "desc": "เงื่อนไข: Lv.12, Pact of the Blade — เมื่อโจมตีโดนด้วยอาวุธพันธสัญญา จะทำความเสียหาย Necrotic เพิ่มเติมเท่ากับค่า CHA Modifier ทุกหมัด!"},
      {"id": "visions_distant_realm", "name": "🔮 Visions of Distant Realms", "minLv": 15, "desc": "เงื่อนไข: Lv.15 — สามารถร่ายคาถา Arcane Eye ส่งดวงตาเวทล่องหนไปสอดแนมสำรวจพื้นที่ได้ตลอดเวลาโดยไม่ต้องใช้ช่องเวท"},
      {"id": "shroud_shadow", "name": "👻 Shroud of Shadow", "minLv": 15, "desc": "เงื่อนไข: Lv.15 — สามารถร่ายคาถา Invisibility เพื่อล่องหนหายตัวใส่ตัวเองได้ตลอดเวลาโดยไม่ต้องเสียช่องเวทมนตร์!"},
      {"id": "chains_carceri", "name": "⛓️ Chains of Carceri", "minLv": 15, "pact": "chain", "desc": "เงื่อนไข: Lv.15, Pact of the Chain — สามารถร่ายคาถา Hold Monster ใส่ Celestial, Fiend หรือ Elemental ได้ฟรีโดยไม่ต้องเสียช่องเวทมนตร์!"}
    ],
    equipment: ['Leather Armour (เกราะหนัง AC 11)', 'Simple Weapon (อาวุธพื้นฐาน)', 'Dagger x2 (มีดสั้น)'],
    desc: 'ผู้ทำพันธสัญญากับตัวตนทรงอำนาจ ยิงลำแสง Eldritch Blast และฟื้นฟูช่องเวทระดับสูงสุดทุกครั้งที่พักสั้น',
    spellcasting: { cantrips: 2, spells: 3, cantripList: ["Blade Ward", "Chill Touch", "Eldritch Blast", "Friends", "Mage Hand", "Minor Illusion", "Poison Spray", "Prestidigitation", "True Strike"], spellList: ["Armor of Agathys", "Arms of Hadar", "Charm Person", "Comprehend Languages", "Expeditious Retreat", "Hellish Rebuke", "Hex", "Protection from Evil and Good", "Witch Bolt", "Cloud of Daggers", "Crown of Madness", "Darkness", "Hold Person", "Invisibility", "Mirror Image", "Misty Step", "Shatter", "Suggestion", "Counterspell", "Dispel Magic", "Fear", "Fly", "Hypnotic Pattern", "Major Image", "Remove Curse", "Vampiric Touch", "Banishment", "Blight", "Dimension Door", "Hold Monster", "Scrying", "Eyebite", "Mass Suggestion", "True Seeing", "Finger of Death", "Forcecage", "Plane Shift", "Dominate Monster", "Feeblemind", "Power Word Stun", "Astral Projection", "Foresight", "Power Word Kill", "True Polymorph"] },
        subclasses: [
      {
        id: 'fiend',
        name_th: 'The Fiend (พันธสัญญานรกโลกันตร์ขุมอเวจี)',
        desc: 'พันธสัญญาจ้าวปีศาจ ได้รับ Temp HP ทุกครั้งที่สังหารศัตรู (Dark One’s Blessing) และปลดล็อกคาถา Fireball เข้าสมุดเวท',
        expandedSpells: {
          1: ['Burning Hands', 'Command'],
          3: ['Blindness/Deafness', 'Scorching Ray'],
          5: ['Fireball', 'Stinking Cloud'],
          7: ['Fire Shield', 'Wall of Fire'],
          9: ['Flame Strike', 'Hallow']
        },
        features: {
          1: [
            { name: 'Dark One’s Blessing (พรอเวจีโลกันตร์รับ Temp HP)', desc: 'เมื่อคุณสังหารสิ่งมีชีวิตที่เป็นศัตรูลงได้ คุณจะได้รับพลังชีวิตชั่วคราว (Temporary HP) ทันทีเท่ากับ [เลเวล Warlock + โบนัส CHA Modifier] (ขั้นต่ำ 1 HP)' }
          ],
          6: [
            { name: 'Dark One’s Own Luck (โชคลาภแห่งขุมนรก)', desc: 'เมื่อคุณทอยโจมตีหรือ Saving Throw แล้วผลลัพธ์ไม่สวย คุณสามารถบวกเต๋า +1d10 เข้าไปช่วยพลิกผลลัพธ์ให้ผ่านได้ (1 ครั้ง/พักสั้นหรือพักยาว)' }
          ],
          10: [
            { name: 'Fiend Resilience (เกราะอเวจีต้านทานธาตุ)', desc: 'ทุกครั้งที่คุณจบการพักสั้นหรือพักยาว คุณสามารถเลือกธาตุ 1 ชนิด (เช่น Fire, Cold, Lightning) เพื่อรับความต้านทาน (Resistance) ต่อธาตุนั้นได้ถาวรจนกว่าจะเปลี่ยนใหม่' }
          ],
          14: [
            { name: 'Hurl Through Hell (ส่งศัตรูดิ่งลงสู่นรกโลกันตร์)', desc: 'เมื่อคุณโจมตีศัตรูด้วยเวทหรืออาวุธโดน สามารถใช้ความสามารถนี้ส่งศัตรูดิ่งลงไปในนรกชั่วพริบตา เป้าหายจะหายตัวไปจากสนามรบ 1 เทิร์นและได้รับความเสียหาย Psychic มหาศาลถึง 10d10 เมื่อกลับมา!' }
          ]
        }
      },
      {
        id: 'great_old_one',
        name_th: 'The Great Old One (พันธสัญญาเทพโบราณนอกมิติ)',
        desc: 'พันธสัญญาเทพโบราณ สื่อสารทางจิต (Telepathy) ในระยะ 30 ฟุต และเมื่อตีติด Critical จะทำให้ศัตรูรอบข้างหวาดกลัว',
        expandedSpells: {
          1: ['Dissonant Whispers', 'Tasha’s Hideous Laughter'],
          3: ['Detect Thoughts', 'Phantasmal Force'],
          5: ['Clairvoyance', 'Hunger of Hadar'],
          7: ['Dominate Beast', 'Evard’s Black Tentacles'],
          9: ['Dominate Person', 'Telekinesis']
        },
        features: {
          1: [
            { name: 'Awakened Mind (สื่อสารทางจิต Telepathy)', desc: 'คุณสามารถพูดคุยสื่อสารผ่านทางกระแสจิต (Telepathic Link) กับสิ่งมีชีวิตใดก็ได้ที่คุณมองเห็นในระยะ 30 ฟุต โดยไม่ต้องใช้ภาษาพูดเดียวกัน' }
          ],
          6: [
            { name: 'Entropic Ward (เกราะเบี่ยงเบนความซวย)', desc: 'เมื่อศัตรูทอยโจมตีใส่คุณ สามารถใช้ Reaction บังคับให้ศัตรูตีพลาดได้ และหากพลาดคุณจะได้เปรียบในการโจมตีสวนกลับ (1 ครั้ง/พักสั้น)' }
          ],
          10: [
            { name: 'Thought Shield (โล่จิตใจสะท้อนพลังจิต)', desc: 'ความคิดของคุณจะถูกป้องกันอย่างสมบูรณ์แบบ (ไม่มีใครอ่านใจหรือตรวจจับอารมณ์ได้) และหากใครพยายามโจมตีคุณด้วยความเสียหาย Psychic ศัตรูตัวนั้นจะโดนดาเมจ Psychic สะท้อนกลับเท่ากันทันที!' }
          ],
          14: [
            { name: 'Create Thrall (สะกดจิตบงการจิตวิญญาณ)', desc: 'คุณสามารถใช้ Action สะกดจิต Humanoid 1 ตัวที่ติดสถานะ Charmed จากคุณ ให้ตกอยู่ใต้อำนาจการควบคุมของคุณอย่างถาวรจนกว่าจะถูก dispel' }
          ]
        }
      },
      {
        id: 'archfey',
        name_th: 'The Archfey (พันธสัญญาจ้าวภูตพงไพร)',
        desc: 'พันธสัญญาจ้าวภูต ใช้มนตร์เสน่ห์และวาร์ปหายตัวด้วยหมอกลวงตา (Fey Presence / Misty Escape)',
        expandedSpells: {
          1: ['Faerie Fire', 'Sleep'],
          3: ['Calm Emotions', 'Phantasmal Force'],
          5: ['Plant Growth', 'Blinding Smite'],
          7: ['Dominate Beast', 'Greater Invisibility'],
          9: ['Dominate Person', 'Seeming']
        },
        features: {
          1: [
            { name: 'Fey Presence (ออร่ามนต์เสน่ห์จ้าวภูต)', desc: 'ใช้ Action ปล่อยคลื่นมนต์เสน่ห์หรือความหวาดกลัวใส่ศัตรูในรัศมี 10 ฟุต ต้องทอย WIS Save ไม่ผ่านจะติดสถานะ Charmed หรือ Frightened นาน 1 เทิร์น (1 ครั้ง/พักสั้น)' }
          ],
          6: [
            { name: 'Misty Escape (วาร์ปหมอกลวงตาหนีภัย)', desc: 'เมื่อคุณได้รับความเสียหาย สามารถใช้ Reaction เพื่อสลายร่างเป็นหมอกแล้ววาร์ป (Teleport) หายตัวไปปรากฏในระยะ 60 ฟุต พร้อมกับล่องหน (Invisible) จนกว่าจะจบเทิร์น (1 ครั้ง/พักสั้น)' }
          ],
          10: [
            { name: 'Beguiling Defenses (จิตวิญญาณภูมิคุ้มกันเสน่ห์)', desc: 'คุณจะได้รับภูมิคุ้มกันอย่างสมบูรณ์แบบต่อสถานะ Charmed และหากมีใครพยายามร่ายเวทสะกดจิตคุณ คุณสามารถใช้ Reaction สะท้อนเวทนั้นกลับไปหาผู้ร่ายได้ทันที!' }
          ],
          14: [
            { name: 'Dark Delirium (ดึงศัตรูสู่วิมานภาพลวงตา)', desc: 'ใช้ Action ส่งศัตรู 1 ตัวในระยะ 60 ฟุต เข้าไปติดอยู่ในมิติภาพลวงตาสุดพิศวง เป้าหมายจะตาบอดและหูหนวกต่อโลกภายนอก นานสูงสุด 1 นาที (ไม่ต้องใช้สมาธิ)' }
          ]
        }
      },
      {
        id: 'hexblade',
        name_th: 'The Hexblade (พันธสัญญาศาสตราต้องสาปแห่งเงามืด)',
        desc: 'สุดยอดสายยอดฮิต! ชำนาญเกราะกลาง โล่ อาวุธสงคราม ใช้ค่า CHA โจมตีและคิดดาเมจอาวุธ (Hex Warrior) และสาปเป้าหมายให้ติดคริติคอลที่ 19-20!',
        expandedSpells: {
          1: ['Shield', 'Witch Bolt'],
          3: ['Blur', 'Misty Step'],
          5: ['Blink', 'Hypnotic Pattern'],
          7: ['Banishment', 'Dimension Door'],
          9: ['Cone of Cold', 'Hold Monster']
        },
        features: {
          1: [
            { name: 'Hex Warrior (นักรบศาสตราต้องสาป — ใช้ CHA ฟันดาบ & ใส่เกราะกลาง!)', desc: 'ได้รับความชำนาญเกราะกลาง (Medium Armour), โล่ (Shield) และอาวุธสงคราม (Martial Weapons) ทั้งหมด! และอาวุธคู่กายของคุณ (รวมถึงอาวุธ Pact of the Blade ทุกชนิด) จะใช้ค่า Charisma (CHA) แทน STR/DEX ทั้งในการทอยความแม่นยำและดาเมจ!' },
            { name: 'Hexblade’s Curse (คำสาปศาสตราทมิฬ — คริติคอล 19-20 & ดูดเลือด!)', desc: 'ใช้ Bonus Action สาปศัตรูในระยะ 30 ฟุต นาน 1 นาที (1 ครั้ง/พักสั้น): (1) บวกโบนัสดาเมจเพิ่มเท่ากับค่า Proficiency Bonus (+2 ถึง +6) ทุกครั้งที่โจมตีหรือยิงเวทโดน, (2) โจมตีใส่เป้าหมายที่ถูกสาปติด Critical Hit ที่หน้าเต๋า 19 หรือ 20!, และ (3) เมื่อเป้าหมายตาย คุณจะฟื้นฟู HP ทันทีเท่ากับ [เลเวล Warlock + CHA Modifier]!' }
          ],
          6: [
            { name: 'Accursed Specter (อัญเชิญวิญญาณอาฆาตภูตผี)', desc: 'เมื่อคุณสังหาร Humanoid ลงได้ สามารถสาปดวงวิญญาณของศพนั้นให้ลุกขึ้นมาเป็นวิญญาณร้าย (Specter) รับใช้คุณจนกว่าจะพักยาว โดยวิญญาณจะได้รับ Temp HP และบวกโบนัสโจมตีตามค่า CHA ของคุณ!' }
          ],
          10: [
            { name: 'Armor of Hexes (เกราะคำสาปเบี่ยงคมดาบ 50%!)', desc: 'เมื่อศัตรูที่ติดผล Hexblade’s Curse ของคุณทอยโจมตีโดนคุณ สามารถใช้ Reaction ทอยเต๋า 1d6 หากออก 4, 5 หรือ 6 (โอกาส 50%!) การโจมตีนั้นจะกลายเป็นพลาดเป้า (Miss) ทันทีโดยไม่ต้องสนว่าทอยได้แต้มสูงแค่ไหน!' }
          ],
          14: [
            { name: 'Master of Hexes (ปรมาจารย์คำสาปสังหารต่อเนื่อง)', desc: 'เมื่อศัตรูที่ติดผล Hexblade’s Curse ของคุณเสียชีวิตลง คุณสามารถย้ายคำสาปนั้นไปยังศัตรูตัวถัดไปในระยะ 30 ฟุต ได้ทันทีในเทิร์นถัดไปโดยไม่จำกัดจำนวนครั้ง!' }
          ]
        }
      },
      {
        id: 'celestial_warlock',
        name_th: 'The Celestial (พันธสัญญาเทวทูตสวรรค์แห่งแสง)',
        desc: 'วอร์ล็อคสายสวรรค์ ฮีลเพื่อนด้วย Bonus Action โดยไม่ใช้ช่องเวท (Healing Light), ได้รับ Temp HP ทั้งปาร์ตี้เมื่อพักสั้น และฟื้นคืนชีพพร้อมระเบิดแสงเมื่อล้ม!',
        expandedSpells: {
          1: ['Cure Wounds', 'Guiding Bolt'],
          3: ['Flaming Sphere', 'Lesser Restoration'],
          5: ['Daylight', 'Revivify'],
          7: ['Guardian of Faith', 'Wall of Fire'],
          9: ['Flame Strike', 'Greater Restoration']
        },
        features: {
          1: [
            { name: 'Bonus Cantrips & Healing Light (ลำแสงเยียวยาสวรรค์ด้วย Bonus Action!)', desc: 'ได้รับคาถา Light และ Sacred Flame ฟรี! พร้อมได้รับลูกเต๋าฮีลสวรรค์ (ขนาด d6) จำนวนเท่ากับ [1 + เลเวล Warlock] ลูก คุณสามารถใช้ Bonus Action ฮีลเพื่อนในระยะ 60 ฟุต ได้ทันทีโดยไม่ต้องเสียช่องเวทมนตร์และไม่นับเป็นการร่ายเวท!' }
          ],
          6: [
            { name: 'Radiant Soul (จิตวิญญาณสุริยัน +CHA ดาเมจไฟและแสง!)', desc: 'คุณได้รับความต้านทาน (Resistance) ต่อความเสียหายธาตุแสง (Radiant) และเมื่อคุณร่ายคาถาที่ทำความเสียหายธาตุไฟ (Fire) หรือแสง (Radiant) คุณจะได้บวกโบนัส CHA Modifier เพิ่มเข้าไปในดาเมจทันที!' }
          ],
          10: [
            { name: 'Celestial Resilience (เกราะสวรรค์คุ้มครองทั้งปาร์ตี้ทุกครั้งที่พักสั้น!)', desc: 'ทุกครั้งที่คุณจบการพักสั้น (Short Rest) หรือพักยาว ตัวคุณเองจะได้รับ Temporary HP เท่ากับ [เลเวล Warlock + CHA] และเพื่อนร่วมทีมอีกสูงสุด 5 คนจะได้รับ Temporary HP เท่ากับ [ครึ่งหนึ่งของเลเวล Warlock + CHA] ฟรีทันที!' }
          ],
          14: [
            { name: 'Searing Vengeance (ทัณฑ์สวรรค์ฟื้นคืนชีพระเบิดแสง!)', desc: 'เมื่อคุณล้มลงที่ 0 HP และถึงคิวต้องทอย Death Saving Throw คุณสามารถเลือก "เด้งลุกขึ้นมายืนทันที" พร้อมฟื้นฟู HP กลับมาครึ่งหลอด Max HP! และปล่อยคลื่นแสงระเบิดใส่ศัตรูรอบตัวในระยะ 30 ฟุต ทำดาเมจ 2d8+CHA Radiant พร้อมทำให้ศัตรูตาบอด (Blinded) ทันที!' }
          ]
        }
      }
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
      {
        id: 'evocation',
        name_th: 'School of Evocation (สำนักเวททำลายล้าง)',
        desc: 'ปรมาจารย์เวททำลายล้าง ร่ายคาถาโจมตีพื้นที่ (เช่น Fireball) โดยไม่โดนเพื่อนร่วมทีมเลยด้วย Sculpt Spells และบวก INT ดาเมจที่ Lv.10',
        features: {
          2: [
            { name: 'Evocation Savant & Sculpt Spells (ปั้นแต่งเวทหลบเพื่อน 100%)', desc: 'คัดลอกเวท Evocation ถูกลงครึ่งหนึ่ง และเมื่อร่ายคาถาทำลายล้างเป็นวงกว้าง (เช่น Fireball, Lightning Bolt) เพื่อนร่วมทีมทุกคนในพื้นที่เวทจะรอดพ้นจากดาเมจเวทของคุณ 100% เต็มโดยไม่โดนดาเมจเลย!' }
          ],
          6: [
            { name: 'Potent Cantrip (คาถาพื้นฐานทรงอานุภาพ)', desc: 'เมื่อศัตรูทอย Saving Throw ผ่านเพื่อหลบ Cantrip โจมตีของคุณ ศัตรูตัวนั้นยังคงได้รับความเสียหายครึ่งหนึ่งแทนที่จะไม่โดนเลย' }
          ],
          10: [
            { name: 'Empowered Evocation (เสริมพลังเวททำลายล้าง +INT)', desc: 'บวกโบนัส Intelligence Modifier เข้ากับความเสียหาย (Damage Roll) ของคาถาสำนัก Evocation ทุกบทที่คุณร่าย! (เช่น Magic Missile แรงขึ้นทุกลูก)' }
          ],
          14: [
            { name: 'Overchannel (เร่งพลังเวทขีดสุดทะลุพิกัด)', desc: 'เมื่อร่ายคาถาระดับ 1-5 ของสำนัก Evocation สามารถเร่งพลังเวทให้ออกผลลัพธ์ความเสียหายสูงสุดของลูกเต๋าทุกเม็ดทันที!' }
          ]
        }
      },
      {
        id: 'abjuration',
        name_th: 'School of Abjuration (สำนักเวทปราการป้องกัน)',
        desc: 'จอมเวทปราการ สร้างเกราะ Arcane Ward ดูดซับความเสียหายให้ตัวเองและเพื่อน และสะท้อนเวทด้วย Spell Resistance',
        features: {
          2: [
            { name: 'Abjuration Savant & Arcane Ward (เกราะพลังงานเวทป้องกัน)', desc: 'ทุกครั้งที่ร่ายคาถาสำนัก Abjuration (เช่น Shield, Mage Armor, Counterspell) จะสร้างโล่พลังงานเวทคุ้มครองตัวคุณ มีค่า HP เท่ากับ [2 x เลเวล Wizard + INT Modifier] รับดาเมจแทนเลือดจริง และชาร์จเพิ่มทุกครั้งที่ร่ายเวท Abjuration!' }
          ],
          6: [
            { name: 'Projected Ward (กางโล่ปกป้องเพื่อนร่วมทีม)', desc: 'เมื่อเพื่อนร่วมทีมในระยะ 30 ฟุต กำลังจะได้รับความเสียหาย สามารถใช้ Reaction สั่งให้เกราะ Arcane Ward ของคุณพุ่งไปรับดาเมจแทนเพื่อนคนนั้นได้ทันที!' }
          ],
          10: [
            { name: 'Improved Abjuration (ยกระดับการสลายมนตรา)', desc: 'เมื่อร่ายคาถา Dispel Magic หรือ Counterspell คุณจะได้บวกค่า Proficiency Bonus เข้าไปในการทอย Ability Check เพื่อสลายเวทระดับสูงโดยอัตโนมัติ!' }
          ],
          14: [
            { name: 'Spell Resistance (ต้านทานเวทมนตร์ขั้นสูงสุด)', desc: 'คุณได้เปรียบ (Advantage) ในการทอย Saving Throw เพื่อต้านทานเวทมนตร์ทุกชนิด และได้รับความต้านทาน (Resistance - ลดดาเมจครึ่งหนึ่ง) ต่อความเสียหายจากเวทมนตร์ทั้งหมด!' }
          ]
        }
      },
      {
        id: 'divination',
        name_th: 'School of Divination (สำนักพยากรณ์ล่วงรู้อนาคต)',
        desc: 'ผู้หยั่งรู้อนาคต ทอยลูกเต๋าพยากรณ์ (Portent) ล่วงหน้าทุกเช้าเพื่อสลับไปใช้แทนเต๋าของเพื่อนหรือศัตรูได้ทันที!',
        features: {
          2: [
            { name: 'Divination Savant & Portent (ลูกเต๋าพยากรณ์อนาคต 2 ลูก)', desc: 'หลังพักยาวทุกครั้ง ทอยลูกเต๋า d20 เก็บไว้ 2 ลูก คุณสามารถนำแต้มลูกเต๋าพยากรณ์นี้ไปยัดใส่มือเพื่อนหรือศัตรูเพื่อเปลี่ยนผลการทอย d20 (โจมตี / ทักษะ / Saving Throw) ให้เป็นแต้มนั้นทันที!' }
          ],
          6: [
            { name: 'Expert Divination (ตื่นรู้อนาคตคืนช่องเวท)', desc: 'เมื่อร่ายคาถาสำนัก Divination ระดับ 2 ขึ้นไป คุณจะได้รับช่องเวทมนตร์ (Spell Slot) ระดับที่ต่ำกว่าคาถานั้นคืนกลับมา 1 ช่องทันที (และรีเซ็ตลูกเต๋าพยากรณ์เมื่อพักสั้นตามกฎ BG3)' }
          ],
          10: [
            { name: 'The Third Eye (ดวงตาที่สามแห่งการหยั่งรู้)', desc: 'ใช้ Action เปิดเนตรทิพย์เลือกรับความสามารถพิเศษ: มองเห็นในที่มืด 60 ฟุต (Darkvision), อ่านภาษาได้ทุกภาษา, หรือมองเห็นสิ่งมีชีวิตที่ล่องหน (See Invisibility)!' }
          ],
          14: [
            { name: 'Greater Portent (มหาพยากรณ์ 3 ลูกเต๋า)', desc: 'เพิ่มจำนวนลูกเต๋าพยากรณ์ Portent ที่ทอยเก็บไว้จาก 2 ลูก เป็น 3 ลูกต่อวัน!' }
          ]
        }
      },
      {
        id: 'necromancy',
        name_th: 'School of Necromancy (สำนักเนโครแมนเซอร์ศาสตร์มืด)',
        desc: 'จ้าวแห่งความตาย ดูดเลือดทุกครั้งที่สังหารศัตรูด้วยเวท (Grim Harvest) และปลุกกองทัพซอมบี้/โครงกระดูกที่แข็งแกร่งขึ้น!',
        features: {
          2: [
            { name: 'Necromancy Savant & Grim Harvest (เก็บเกี่ยววิญญาณฟื้นฟู HP)', desc: 'เทิร์นละ 1 ครั้ง เมื่อคุณสังหารศัตรูลงได้ด้วยเวทมนตร์ระดับ 1 ขึ้นไป คุณจะฟื้นฟู HP ตัวเองทันทีเท่ากับ 2 เท่าของระดับเวทนั้น (หรือ 3 เท่าของระดับเวท หากเป็นคาถาสาย Necromancy!)' }
          ],
          6: [
            { name: 'Undead Thralls (กองทัพผีดิบเกราะเหล็ก)', desc: 'ได้รับคาถา Animate Dead เข้าสมุดเวทฟรี! เมื่อร่ายจะปลุกผีดิบเพิ่มได้อีก 1 ตัวเสมอ และผีดิบทุกตัวที่คุณอัญเชิญจะมี Max HP เพิ่มขึ้นเท่ากับเลเวล Wizard ของคุณ และบวกค่า Proficiency Bonus ของคุณเข้ากับดาเมจทุกหมัด!' }
          ],
          10: [
            { name: 'Inured to Undeath (กายาต้านทานความตาย)', desc: 'คุณได้รับความต้านทาน (Resistance) ต่อความเสียหายมืด (Necrotic Damage) และค่าพลังชีวิตสูงสุด (Max HP) ของคุณไม่มีวันถูกลดทอนลงได้ด้วยเวทหรือคำสาปใดๆ!' }
          ],
          14: [
            { name: 'Command Undead (ประกาศิตบงการราชันย์ผีดิบ)', desc: 'ใช้ Action ชี้สั่งผีดิบ (Undead) ของศัตรูในระยะ 60 ฟุต ต้องทอย CHA Save หากไม่ผ่านจะตกอยู่ใต้การควบคุมและเปลี่ยนมาเป็นลูกน้องของคุณทันที!' }
          ]
        }
      },
      {
        id: 'conjuration',
        name_th: 'School of Conjuration (สำนักอัญเชิญและบิดเบือนมิติ)',
        desc: 'จอมเวทมิติ เสกวัตถุและน้ำ (Minor Conjuration), วาร์ปสลับที่กับเพื่อนร่วมทีม (Benign Transposition) และไม่เสียสมาธิเวทอัญเชิญ!',
        features: {
          2: [
            { name: 'Conjuration Savant & Minor Conjuration (เสกสรรวัตถุและสายน้ำ)', desc: 'ใช้ Action เสกวัตถุไม่มีชีวิตขนาดเล็กขึ้นมาในมือ หรือร่าย Create Water เพื่อสร้างแอ่งน้ำดับไฟและช็อตสายฟ้าใส่ศัตรูได้ฟรี!' }
          ],
          6: [
            { name: 'Benign Transposition (วาร์ปสลับตำแหน่งพริบตา)', desc: 'ใช้ Action วาร์ปตัวเองไปยังพื้นที่ว่างในระยะ 30 ฟุต หรือเลือก "วาร์ปสลับตำแหน่ง" กับเพื่อนร่วมทีมในระยะ 30 ฟุต ได้ทันที! (รีเซ็ตเมื่อพักยาว หรือเมื่อร่ายเวท Conjuration ระดับ 1 ขึ้นไป)' }
          ],
          10: [
            { name: 'Focused Conjuration (สมาธิอัญเชิญไร้พ่าย)', desc: 'ในขณะที่คุณกำลังเพ่งสมาธิ (Concentration) กับเวทมนตร์สำนัก Conjuration การได้รับความเสียหายจะไม่มีวันทำให้สมาธิเวทของคุณหลุดได้เลย 100%!' }
          ],
          14: [
            { name: 'Durable Summons (อสูรอัญเชิญเกราะเพชร)', desc: 'สิ่งมีชีวิตหรืออสูรทุกตัวที่คุณอัญเชิญหรือสร้างขึ้นด้วยเวท Conjuration จะได้รับพลังชีวิตชั่วคราว (Temporary HP) เพิ่มขึ้นทันที 30 HP!' }
          ]
        }
      },
      {
        id: 'enchantment',
        name_th: 'School of Enchantment (สำนักมนตร์สะกดจิตและเสน่ห์)',
        desc: 'ปรมาจารย์สะกดจิต ตรึงศัตรูด้วยสายตา (Hypnotic Gaze), เบี่ยงการโจมตีให้ศัตรูตีกันเอง และร่ายเวทสะกดจิตใส่ 2 เป้าหมายพร้อมกัน!',
        features: {
          2: [
            { name: 'Enchantment Savant & Hypnotic Gaze (เนตรสะกดวิญญาณ)', desc: 'ใช้ Action จ้องตาศัตรูในระยะ 5 ฟุต เป้าหมายต้องทอย WIS Save ไม่ผ่านจะติดสถานะ Charmed และยืนนิ่งทำอะไรไม่ได้ (Incapacitated, ความเร็วเป็น 0) โดยไม่ต้องเสียช่องเวท!' }
          ],
          6: [
            { name: 'Instinctive Charm (มนตร์เสน่ห์เบี่ยงคมดาบ)', desc: 'เมื่อศัตรูในระยะ 30 ฟุต โจมตีใส่คุณ สามารถใช้ Reaction บังคับให้ศัตรูทอย WIS Save หากไม่ผ่าน ศัตรูจะต้องหันไปโจมตีสิ่งมีชีวิตตัวอื่นที่อยู่ใกล้มันที่สุดแทนคุณทันที!' }
          ],
          10: [
            { name: 'Split Enchantment (มนตร์สะกดจิตคู่แฝด!)', desc: 'สุดยอดความสามารถ: เมื่อคุณร่ายคาถาสำนัก Enchantment ระดับ 1 ขึ้นไปที่เล็งเป้าหมายเดี่ยว (เช่น Hold Person, Dominate Person, Otto’s Irresistible Dance) คุณสามารถเลือกเป้าหมายที่ 2 ให้โดนคาถานั้นพร้อมกันได้ฟรีทันที (เหมือนได้ Twinned Spell ฟรีทุกเทิร์น)!' }
          ],
          14: [
            { name: 'Alter Memories (ลบและบิดเบือนความทรงจำ)', desc: 'ผู้ที่ถูกคุณสะกดจิตจะไม่รู้ตัวเลยว่าถูกใช้เวทมนตร์ใส่เมื่อเวทหมดเวลา และคุณสามารถสั่งลบล้างความทรงจำช่วงที่ถูกสะกดจิตออกไปจากหัวของเป้าหมายได้' }
          ]
        }
      },
      {
        id: 'illusion',
        name_th: 'School of Illusion (สำนักมายาลวงตาไร้ขอบเขต)',
        desc: 'จอมเวทมายา ร่าย Minor Illusion เป็นโบนัสแอคชั่น, ใช้ Reaction สร้างร่างโคลนหลบการโจมตี 100% และเสกภาพลวงตาให้กลายเป็นของจริง!',
        features: {
          2: [
            { name: 'Illusion Savant & Improved Minor Illusion (มายาไร้รอยต่อ)', desc: 'ได้รับคาถา Minor Illusion ฟรี! สามารถร่ายได้ด้วย Bonus Action, สร้างได้ทั้งเสียงและภาพพร้อมกัน และร่ายขณะซ่อนตัวหรือติด Silence ได้โดยไม่เผยตำแหน่ง!' }
          ],
          6: [
            { name: 'Malleable Illusions & See Invisibility (ดัดแปลงภาพลวงตา & เนตรส่องล่องหน)', desc: 'สามารถเปลี่ยนรูปลักษณ์ของภาพลวงตาที่ร่ายไว้แล้วได้เรื่อยๆ และได้รับความสามารถมองเห็นสิ่งมีชีวิตที่ล่องหน (See Invisibility) ในระยะ 30 ฟุต' }
          ],
          10: [
            { name: 'Illusory Self (ร่างแยกมายาหลบหลีก 100%)', desc: 'เมื่อศัตรูทอยโจมตีโดนคุณ สามารถใช้ Reaction สลับร่างกับภาพลวงตา ทำให้การโจมตีนั้นพลาดเป้า (Auto-Miss) 100% ทันที! (รีเซ็ตทุกการพักสั้นหรือพักยาว)' }
          ],
          14: [
            { name: 'Illusory Reality (เปลี่ยนมายาเป็นความจริง!)', desc: 'เมื่อคุณสร้างภาพลวงตาของวัตถุไม่มีชีวิต (เช่น สะพานเหล็ก กำแพงหิน หรือกรงขัง) คุณสามารถใช้ Bonus Action เสกให้วัตถุชิ้นหนึ่งในภาพลวงตานั้นกลายเป็น "ของจริงที่จับต้องได้" เป็นเวลา 1 นาที!' }
          ]
        }
      },
      {
        id: 'transmutation',
        name_th: 'School of Transmutation (สำนักแปรธาตุและกลายร่าง)',
        desc: 'นักแปรธาตุ ปรุงยาแฝด 2 ขวด, สร้างศิลาอาคม (Transmuter’s Stone) มอบบัฟความเร็ว/ต้านทานธาตุ/CON Save และแปลงร่างเป็นนกบินได้!',
        features: {
          2: [
            { name: 'Transmutation Savant & Minor Alchemy (ศาสตร์แปรธาตุและปรุงยาคูณสอง)', desc: 'สามารถแปรสภาพสสาร (ไม้ หิน เหล็ก เงิน) ชั่วคราว และเมื่อทำการปรุงยา (Alchemy) มีโอกาสได้รับน้ำยาเพิ่มขึ้นเป็น 2 ขวดทันที!' }
          ],
          6: [
            { name: 'Transmuter’s Stone (ศิลาอาคมนักปราชญ์)', desc: 'สร้างศิลาเวทมนตร์พกติดตัว (หรือมอบให้เพื่อนถือ) เลือกรับบัฟถาวรได้ 1 อย่างและสลับได้เมื่อร่ายเวท Transmutation: (1) ชำนาญ CON Save รักษาสมาธิเวท, (2) Darkvision 60 ฟุต, (3) ความเร็วเคลื่อนที่ +10 ฟุต, หรือ (4) ต้านทานธาตุ Acid, Cold, Fire, Lightning หรือ Thunder!' }
          ],
          10: [
            { name: 'Shapechanger (แปรสภาพกลายร่างวิหค)', desc: 'ได้รับคาถา Polymorph เข้าสมุดเวทฟรี! และสามารถใช้ Action แปลงร่างตัวเองเป็นสัตว์บินได้ (เช่น นก Синяя Птица / Giant Eagle) ได้ฟรีโดยไม่ต้องเสียช่องเวทมนตร์!' }
          ],
          14: [
            { name: 'Master Transmuter (มหาปราชญ์ศิลาอาคมชุบชีวิต)', desc: 'สามารถสละพลังของศิลา Transmuter’s Stone เพื่อเลือกผลสุดยอด: ฮีลเต็ม 100% พร้อมล้างคำสาปและโรคทั้งหมด (Panacea), ชุบชีวิตด้วย Raise Dead โดยไม่เสียเพชร, หรือคืนความเยาว์วัย!' }
          ]
        }
      },
      {
        id: 'bladesinging',
        name_th: 'Order of the Bladesinger (สำนักระบำดาบมนตรา)',
        desc: 'จอมเวทเพลงดาบ ร่ายรำ Bladesong บวก INT เข้ากับเกราะ AC และสมาธิเวท, ความเร็ว +10 ฟุต และโจมตี 2 ครั้งผสาน Cantrip!',
        features: {
          2: [
            { name: 'Training in War and Song & Bladesong (ระบำดาบมนตรา +INT เกราะ AC!)', desc: 'ชำนาญเกราะเบา อาวุธมือเดียว 1 ชนิด และทักษะ Performance เมื่อกดใช้ Bonus Action เข้าสู่สถานะ Bladesong (นาน 1 นาที): บวกโบนัส INT Modifier เข้ากับค่าเกราะ AC, ความเร็วเคลื่อนที่ +10 ฟุต, ได้เปรียบ Acrobatics และบวกโบนัส INT เข้ากับการทอย CON Save เพื่อรักษาสมาธิเวท!' }
          ],
          6: [
            { name: 'Extra Attack: Bladesinger (โจมตี 2 ครั้งผสาน Cantrip!)', desc: 'คุณสามารถโจมตีได้ 2 ครั้งเมื่อใช้ Action โจมตีในเทิร์น และความพิเศษคือ คุณสามารถเปลี่ยนการโจมตี 1 ครั้งในนั้นให้กลายเป็น "การร่ายคาถาพื้นฐาน (Cantrip)" แทนได้ทันที! (ฟันดาบ 1 ที + ยิง Fire Bolt / Booming Blade ในแอคชั่นเดียว!)' }
          ],
          10: [
            { name: 'Song of Defense (บทเพลงปราการดูดซับดาเมจ)', desc: 'ขณะอยู่ในสถานะ Bladesong เมื่อคุณได้รับความเสียหาย คุณสามารถใช้ Reaction และสละช่องเวทมนตร์ 1 ช่อง เพื่อลดความเสียหายนั้นลงทันทีเท่ากับ 5 เท่าของระดับช่องเวทที่สละไป!' }
          ],
          14: [
            { name: 'Song of Victory (บทเพลงแห่งชัยชนะ +INT ดาเมจดาบ)', desc: 'ในขณะที่คุณอยู่ในสถานะ Bladesong การโจมตีด้วยอาวุธระยะประชิดทุกครั้งของคุณจะบวกโบนัสความเสียหายเพิ่มขึ้นเท่ากับค่า Intelligence Modifier (ขั้นต่ำ +1)!' }
          ]
        }
      }
    ],
    progression: { 1: ['Spellcasting', 'Arcane Recovery (ฟื้นช่องเวทเมื่อพักสั้น)'], 2: ['Arcane Tradition (สายอาชีพย่อย)'], 6: ['School Feature'], 10: ['Empowered Evocation / Improved Abjuration'], 18: ['Spell Mastery'] }
  }  ,
  {
    id: 'homebrew',
    name_en: 'Homebrew / Custom',
    name_th: '✨ คลาสพิเศษ (Homebrew)',
    hitDie: 10,
    subclassLevel: 1,
    skillChoices: 3,
    isHomebrew: true,
    skills: ['acrobatics', 'animal_handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight_of_hand', 'stealth', 'survival'],
    equipment: ['อาวุธประจำคลาส Homebrew (Custom Weapon)', 'ชุดเกราะประจำคลาส (Custom Armour)', 'ไอเทมพิเศษประจำตัว (Signature Item)'],
    desc: 'คลาสอิสระสำหรับสาย Homebrew! กำหนดชื่อคลาส ลูกเต๋าเลือด (1d6-1d12) รูปแบบการร่ายเวท และสร้างความสามารถประจำคลาส/สายอาชีพย่อยได้เองตามจินตนาการ',
    subclasses: [
      {
        id: 'hb_sub_1',
        name_th: '🌟 สายอาชีพย่อย Homebrew (ปรับแต่งชื่อและสกิลได้เอง)',
        desc: 'สามารถตั้งชื่อสายอาชีพย่อยและเพิ่มรายการความสามารถ (Features) ตามเลเวลได้เองในกล่องตั้งค่า Homebrew ด้านล่าง',
        features: {
          1: [
            { name: 'ความสามารถเริ่มต้นของสาย Homebrew (Custom Origin)', desc: 'คุณสามารถเพิ่ม แก้ไข หรือลบความสามารถของคลาส Homebrew ได้ที่แผงปรับแต่งด้านล่าง' }
          ]
        }
      }
    ],
    progression: {
      1: ['ปลดล็อกคลาสและสายอาชีพย่อย Homebrew'],
      4: ['Ability Score Improvement / Feat'],
      5: ['ยกระดับพลังขั้นที่ 2 (Tier 2 Power)'],
      8: ['Ability Score Improvement / Feat'],
      12: ['Ability Score Improvement / Feat'],
      16: ['Ability Score Improvement / Feat'],
      19: ['Ability Score Improvement / Feat'],
      20: ['พลังสูงสุดระดับตำนาน (Capstone Feature)']
    }
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

export const WEAPON_MASTERIES_2024 = [
  {
    id: 'cleave',
    name_en: 'Cleave',
    name_th: '🪓 Cleave (ฟันกวาดชิ่ง)',
    weapons: 'Greataxe (ขวานยักษ์), Halberd (ง้าว)',
    desc: 'เมื่อโจมตีประชิดโดนศัตรูตัวแรก คุณสามารถโจมตีแถมฟรีอีก 1 ครั้งใส่ศัตรูตัวที่สองที่อยู่ติดกับตัวแรกในระยะ 5 ฟุต และอยู่ในระยะอาวุธของคุณ! (ความเสียหายของหมัดแถมจะไม่บวกโบนัส Stat Modifier ยกเว้นติดลบ ใช้ได้เทิร์นละ 1 ครั้ง)',
    badge: 'ตีชิ่งตัวที่ 2 ฟรี'
  },
  {
    id: 'graze',
    name_en: 'Graze',
    name_th: '🗡️ Graze (เฉี่ยวคมดาบ การันตีดาเมจตอนตีพลาด!)',
    weapons: 'Greatsword (ดาบใหญ่), Glaive (ทวนง้าว)',
    desc: 'เมื่อคุณทอยโจมตีศัตรูพลาดเป้า (Miss) ศัตรูยังคงได้รับความเสียหายเท่ากับค่า Ability Modifier ที่คุณใช้ทอยโจมตีอาวุธชิ้นนั้นทันที! (เช่น หากมี STR +4 ต่อให้ทอยตีไม่โดน ศัตรูก็ยังโดนฟันเฉี่ยวเข้าเนื้อ 4 ดาเมจเสมอ!)',
    badge: 'ตีพลาดยังทำดาเมจ = Stat Mod'
  },
  {
    id: 'nick',
    name_en: 'Nick',
    name_th: '🔪 Nick (คมมีดฉับไว ตีอาวุธรองไม่เสีย Bonus Action!)',
    weapons: 'Dagger (มีดสั้น), Light Hammer (ค้อนเบา), Sickle (เคียว), Scimitar (ดาบโค้ง)',
    desc: 'เมื่อถืออาวุธเบาสองมือ (Two-Weapon Fighting) คุณสามารถฟันด้วยอาวุธมือรองควบเข้าไปใน Attack Action หลักได้เลยทันที โดยไม่ต้องเสีย Bonus Action! (ทำให้คุณเก็บ Bonus Action ไว้ใช้ทำอย่างอื่นในเทิร์นนั้นได้อิสระ ใช้ได้เทิร์นละ 1 ครั้ง)',
    badge: 'ตีมือรองฟรีใน Action หลัก'
  },
  {
    id: 'push',
    name_en: 'Push',
    name_th: '💨 Push (กระแทกปลิว 10 ฟุต ไม่ต้องทอย Save!)',
    weapons: 'Greatclub (กระบองยักษ์), Pike (หอกยาว), Warhammer (ค้อนศึก), Heavy Crossbow (หน้าไม้หนัก)',
    desc: 'เมื่อคุณโจมตีโดนศัตรูที่มีขนาดไม่เกิน Large คุณสามารถผลักกระแทกศัตรูตัวนั้นให้ปลิวถอยหลังออกไปจากคุณได้ไกลถึง 10 ฟุต ทันทีโดยที่ศัตรูไม่มีสิทธิ์ทอย Saving Throw ต้านทาน!',
    badge: 'ผลักกระเด็น 10 ฟุต ทันที'
  },
  {
    id: 'sap',
    name_en: 'Sap',
    name_th: '🛡️ Sap (สกัดกำลัง ศัตรูตีติด Disadvantage!)',
    weapons: 'Mace (กระบอง), Spear (หอก), Flail (ลูกตุ้มโซ่), Longsword (ดาบยาว), Morningstar (กระบองหนาม), War Pick (ค้อนเจาะเกราะ)',
    desc: 'เมื่อคุณโจมตีโดนศัตรู ศัตรูตัวนั้นจะเสียจังหวะและติดสถานะเสียเปรียบ (Disadvantage) ในการทอยโจมตีครั้งถัดไปของมันก่อนเริ่มเทิร์นหน้าของคุณทันที!',
    badge: 'ศัตรูตีครั้งหน้าติด Disadv'
  },
  {
    id: 'slow',
    name_en: 'Slow',
    name_th: '❄️ Slow (ชะลอฝีเท้า ลดความเร็วศัตรู -10 ฟุต)',
    weapons: 'Club (กระบองสั้น), Javelin (แหลนซัด), Light Crossbow (หน้าไม้เบา), Sling (สลิง), Whip (แส้), Longbow (ธนูยาว), Musket (ปืนคาบศิลา)',
    desc: 'เมื่อคุณโจมตีโดนศัตรูและทำความเสียหายได้ ความเร็วเคลื่อนที่ (Speed) ของศัตรูตัวนั้นจะถูกลดลง -10 ฟุต ไปจนถึงตอนเริ่มเทิร์นถัดไปของคุณ!',
    badge: 'ลดความเร็วศัตรู -10 ฟุต'
  },
  {
    id: 'topple',
    name_en: 'Topple',
    name_th: '🦵 Topple (กวาดล้มคว่ำติดสถานะ Prone!)',
    weapons: 'Quarterstaff (พลอง), Battleaxe (ขวานศึก), Lance (ทวนอัศวิน), Maul (ค้อนยักษ์), Trident (ตรีศูล)',
    desc: 'เมื่อคุณโจมตีโดนศัตรู คุณสามารถบังคับให้ศัตรูทอย Constitution Saving Throw (DC = 8 + Prof + Stat Mod ที่ใช้ตี) หากศัตรูทอยไม่ผ่านจะล้มคว่ำลงกับพื้นติดสถานะ Prone ทันที! (ทำให้เพื่อนรุมตีประชิดแบบ Advantage!)',
    badge: 'ทอย CON Save ไม่ผ่านล้ม Prone'
  },
  {
    id: 'vex',
    name_en: 'Vex',
    name_th: '🎯 Vex (จู่โจมปั่นป่วน หมัดต่อไปตีได้เปรียบ Advantage!)',
    weapons: 'Handaxe (ขวานสั้น), Dart (ลูกดอก), Shortbow (ธนูสั้น), Rapier (ดาบเรเปียร์), Shortsword (ดาบสั้น), Blowgun, Hand Crossbow (หน้าไม้มือ), Pistol (ปืนพก)',
    desc: 'เมื่อคุณโจมตีโดนศัตรูและทำความเสียหายได้ คุณจะได้รับความได้เปรียบ (Advantage) ในการทอยโจมตีครั้งถัดไปของคุณที่เล็งใส่ศัตรูตัวนั้นก่อนจบเทิร์นถัดไปของคุณทันที! (คอมโบกับ Sneak Attack ของ Rogue ได้ทุกเทิร์น!)',
    badge: 'ตีครั้งถัดไปได้ Advantage!'
  }
];
