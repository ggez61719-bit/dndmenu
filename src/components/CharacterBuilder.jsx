// src/components/CharacterBuilder.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Swords, Book, User, Activity, Sparkles, Check, AlertCircle, 
  Camera, Backpack, Wand2, Printer, Save, Heart, Zap, Flame, Plus, 
  Trash2, RotateCcw, Dice5, Coins, FolderOpen, Download, Upload, 
  ChevronUp, Globe, Moon, Sun, Feather, UserPlus, Info
} from 'lucide-react';

import { supabase } from '../supabaseClient';
import {
  STANDARD_ARRAY, RACES, BACKGROUNDS, CLASSES, FEATS_LIST,
  STATS_INFO, SKILLS_META, LANGUAGES_DB, FULL_CASTER_SLOTS,
  HALF_CASTER_SLOTS, SPELLS_DB, CONDITIONS_LIST, ALIGNMENTS_LIST
} from '../data/dndData';

// นำเข้า แท็บ Component ย่อยทั้ง 9 และ Sidebar
import RaceTab from './tabs/RaceTab';
import ClassTab from './tabs/ClassTab';
import BackgroundTab from './tabs/BackgroundTab';
import StatsFeatsTab from './tabs/StatsFeatsTab';
import SkillsTab from './tabs/SkillsTab';
import SpellsTab from './tabs/SpellsTab';
import InventoryTab from './tabs/InventoryTab';
import BioTab from './tabs/BioTab';
import CombatTab from './tabs/CombatTab';
import SidebarSummary from './sidebar/SidebarSummary';

export default function CharacterBuilder() {
  // Identity & Level State
  const [characterName, setCharacterName] = useState('');
  const [portraitUrl, setPortraitUrl] = useState('');
  const [level, setLevel] = useState(1);

  // Multiclass State: Array of { id, classId, level, subclassId }
  const [multiclasses, setMulticlasses] = useState([]);
  const [featSearch, setFeatSearch] = useState('');

  // Roleplay & Biography State
  const [alignment, setAlignment] = useState('NG');
  const [personalityTraits, setPersonalityTraits] = useState('');
  const [ideals, setIdeals] = useState('');
  const [bonds, setBonds] = useState('');
  const [flaws, setFlaws] = useState('');
  const [campaignNotes, setCampaignNotes] = useState('');

  // Core Choices
  const [activeTab, setActiveTab] = useState('race');
  const [selectedRace, setSelectedRace] = useState(RACES[0]);
  const [selectedSubrace, setSelectedSubrace] = useState(RACES[0].subraces?.[0] || null);
  const [selectedClass, setSelectedClass] = useState(CLASSES[0]);
  const [selectedSubclass, setSelectedSubclass] = useState(CLASSES[0].subclasses?.[0] || null);
  const [selectedBg, setSelectedBg] = useState(BACKGROUNDS[0]);

  // Multi-Tier ASI / Feat State (Supports Lv 4, 6(Fighter), 8, 10(Rogue), 12, 14(Fighter), 16, 19)
  const [asiTiers, setAsiTiers] = useState({
    4:  { feat: 'asi', stat: 'STR', stat2: 'STR' },
    6:  { feat: 'gwm', stat: 'STR', stat2: 'STR' },
    8:  { feat: 'asi', stat: 'STR', stat2: 'STR' },
    10: { feat: 'lucky', stat: 'DEX', stat2: 'DEX' },
    12: { feat: 'tough', stat: 'CON', stat2: 'CON' },
    14: { feat: 'sentinel', stat: 'STR', stat2: 'STR' },
    16: { feat: 'alert', stat: 'DEX', stat2: 'DEX' },
    19: { feat: 'asi', stat: 'CON', stat2: 'CON' }
  });

  // Languages State
  const [selectedLanguages, setSelectedLanguages] = useState(['elvish', 'draconic']);

  // Active Conditions State
  const [activeConditions, setActiveConditions] = useState([]);

  // Standard Array & Bonuses
  const [scores, setScores] = useState({ STR: 15, DEX: 14, CON: 13, INT: 12, WIS: 10, CHA: 8 });
  const [bonus2, setBonus2] = useState('STR');
  const [bonus1, setBonus1] = useState('CON');

  // Skills & Spells
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCantrips, setSelectedCantrips] = useState([]);
  const [selectedSpells, setSelectedSpells] = useState([]);

  // Spell Slots Tracker
  const [spellSlots, setSpellSlots] = useState({});

  // Inventory & Wealth
  const [wealth, setWealth] = useState({ cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 });
  const [inventory, setInventory] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemWeight, setNewItemWeight] = useState(1);
  const [newItemQty, setNewItemQty] = useState(1);
  const [newItemType, setNewItemType] = useState('ทั่วไป');
  const [newItemAC, setNewItemAC] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');

  // Combat State
  const [currentHP, setCurrentHP] = useState(12);
  const [tempHP, setTempHP] = useState(0);
  const [hpInput, setHpInput] = useState(1);
  const [customAC, setCustomAC] = useState(null);
  const [deathSaves, setDeathSaves] = useState({ successes: 0, failures: 0 });
  const [hitDiceRemaining, setHitDiceRemaining] = useState(1);
  const [combatSubTab, setCombatSubTab] = useState('main');

  // Custom Actions & Resources
  const [customActions, setCustomActions] = useState([
    { id: 'act-1', type: 'main', name: 'ฟันด้วยอาวุธหลัก (Main Attack)', dice: '1d20+5', desc: 'โจมตีระยะประชิดด้วยอาวุธประจำกาย' },
    { id: 'act-2', type: 'bonus', name: 'ดื่มยาฟื้นฟู (Healing Potion)', dice: '2d4+2', desc: 'ฟื้นฟูพลังชีวิตทันทีด้วยโบนัสแอคชั่น' }
  ]);
  const [newActName, setNewActName] = useState('');
  const [newActDice, setNewActDice] = useState('1d20+5');
  const [newActDesc, setNewActDesc] = useState('');

  const [fightingStyles, setFightingStyles] = useState({});
  const [warlockInvocations, setWarlockInvocations] = useState([]);
  const [warlockPactBoon, setWarlockPactBoon] = useState('');
  const [sorcererMetamagic, setSorcererMetamagic] = useState([]);
  const [rangerFavoredEnemy, setRangerFavoredEnemy] = useState('');
  const [rangerNaturalExplorer, setRangerNaturalExplorer] = useState('');
  const [bardExpertise, setBardExpertise] = useState([]);
  const [druidWildShape, setDruidWildShape] = useState('');
  const [rogueExpertise, setRogueExpertise] = useState([]);
  // Phase 1 Subclass States (Fighter, Barbarian, Monk)
  const [battleMasterManeuvers, setBattleMasterManeuvers] = useState([]);
  const [championExtraStyle, setChampionExtraStyle] = useState('');
  const [wildheartBestialHeart, setWildheartBestialHeart] = useState('bear');
  const [wildheartAnimalAspect, setWildheartAnimalAspect] = useState('aspect_bear');
  const [wildheartSecondAspect, setWildheartSecondAspect] = useState('aspect_eagle');
  const [monkElementsDisciplines, setMonkElementsDisciplines] = useState([]);
  // Phase 2 Subclass States (Ranger, Rogue, Paladin)
  const [hunterPreyChoice, setHunterPreyChoice] = useState('colossus_slayer');
  const [hunterDefenseChoice, setHunterDefenseChoice] = useState('multiattack_def');
  const [hunterMultiattackChoice, setHunterMultiattackChoice] = useState('volley');
  const [beastMasterCompanion, setBeastMasterCompanion] = useState('ursa');
  // Phase 3 Subclass States (Cleric, Druid, Bard)
  const [landCircleTerrain, setLandCircleTerrain] = useState('grassland');
  // Homebrew Custom Class State
  const [homebrewConfig, setHomebrewConfig] = useState({
    classNameTh: 'จอมเวทศาสตรา (Homebrew)',
    classNameEn: 'Custom Class',
    subclassNameTh: 'สายอาชีพย่อยพิเศษ (Custom Subclass)',
    hitDie: 10,
    skillChoices: 3,
    casterType: 'none', // 'none', 'full', 'half', 'third', 'pact'
    spellListSource: 'all', // 'all', 'wizard', 'cleric', 'druid', 'bard', 'warlock', 'paladin', 'ranger'
    cantripsQuota: 3,
    spellsQuota: 5,
    unarmoredDefense: 'none', // 'none', 'con', 'wis', 'int', 'cha'
    extraFeat6: false,
    extraFeat10: false,
    extraFeat14: false,
    customFeatures: [
      { id: 'hbf-1', level: 1, name: 'พลังต้นกำเนิด (Origin Awakening)', dice: '1d8', desc: 'สามารถกดปุ่มทอยลูกเต๋าหรือกดใช้ความสามารถพิเศษประจำตัวได้ทันที' },
      { id: 'hbf-2', level: 5, name: 'Extra Attack / ยกระดับวิชาขั้นที่ 2', dice: '', desc: 'เมื่อถึงเลเวล 5 สามารถโจมตีได้ 2 ครั้งต่อเทิร์น หรือปลดล็อกขีดจำกัดพลังขั้นที่ 2' }
    ]
  });
  const [customResources, setCustomResources] = useState([
    { id: 'res-1', name: 'แต้มพิเศษประจำคลาส (Class Resource)', max: 3, current: 3, resetOn: 'short' }
  ]);
  const [newResName, setNewResName] = useState('');
  const [newResMax, setNewResMax] = useState(3);
  const [newResReset, setNewResReset] = useState('long');

  // Saved Characters (Local & Supabase Cloud) & Notifications
  const [showCharModal, setShowCharModal] = useState(false);
  const [modalTab, setModalTab] = useState('local');
  const [savedCharacters, setSavedCharacters] = useState([]);
  const [cloudCharacters, setCloudCharacters] = useState([]);
  const [statusMsg, setStatusMsg] = useState(null);

  // Global Dice Roller & Mode (normal / adv / disadv)
  const [rollMode, setRollMode] = useState('normal');
  const [rollLog, setRollLog] = useState(null);
  const [rollHistory, setRollHistory] = useState([]);
  const diceChannelRef = useRef(null);
  const isLoadingCharRef = useRef(false);

  // --- MULTICLASS & TOTAL LEVEL ENGINE ---
  const secondaryTotalLevels = multiclasses.reduce((sum, mc) => sum + (parseInt(mc.level) || 1), 0);
  const totalLevel = Math.min(20, level + secondaryTotalLevels);

  const applyHomebrewOverrides = (cObj, scObj) => {
    if (cObj.id !== 'homebrew') return { cls: cObj, subclass: scObj };
    const hbClass = {
      ...cObj,
      name_th: homebrewConfig.classNameTh || 'คลาสพิเศษ (Homebrew)',
      name_en: homebrewConfig.classNameEn || 'Homebrew',
      hitDie: parseInt(homebrewConfig.hitDie, 10) || 10,
      skillChoices: parseInt(homebrewConfig.skillChoices, 10) || 3,
      spellcasting: homebrewConfig.casterType !== 'none' ? {
        cantrips: parseInt(homebrewConfig.cantripsQuota, 10) || 3,
        spells: parseInt(homebrewConfig.spellsQuota, 10) || 5,
        cantripList: Object.keys(SPELLS_DB).filter(s => SPELLS_DB[s]?.level === 0 && (homebrewConfig.spellListSource === 'all' || SPELLS_DB[s]?.classes?.includes(homebrewConfig.spellListSource))),
        spellList: Object.keys(SPELLS_DB).filter(s => (SPELLS_DB[s]?.level || 0) > 0 && (homebrewConfig.spellListSource === 'all' || SPELLS_DB[s]?.classes?.includes(homebrewConfig.spellListSource)))
      } : null
    };
    const hbSubclass = {
      ...(scObj || {}),
      id: 'hb_sub_1',
      name_th: homebrewConfig.subclassNameTh || 'สายอาชีพย่อย Homebrew',
      desc: 'สายอาชีพย่อยปรับแต่งอิสระ (Custom Homebrew Subclass)'
    };
    return { cls: hbClass, subclass: hbSubclass };
  };

  const primaryResolved = applyHomebrewOverrides(selectedClass, selectedSubclass);
  const allCharacterClasses = [
    { cls: primaryResolved.cls, level, subclass: primaryResolved.subclass, isPrimary: true },
    ...multiclasses.map(mc => {
      const rawCls = CLASSES.find(c => c.id === mc.classId) || CLASSES[0];
      const rawSc = rawCls.subclasses?.find(s => s.id === mc.subclassId) || rawCls.subclasses?.[0] || null;
      const resolved = applyHomebrewOverrides(rawCls, rawSc);
      return { id: mc.id, cls: resolved.cls, level: mc.level, subclass: resolved.subclass, isPrimary: false };
    })
  ];

  const getClassLv = (classId) => {
    const found = allCharacterClasses.find(item => item.cls.id === classId);
    return found ? found.level : 0;
  };
  const hasClass = (classId) => getClassLv(classId) > 0;

  // Proficiency Bonus by Total Character Level (Lv 1-20 D&D 5e Formula)
  const profBonus = Math.ceil(totalLevel / 4) + 1;

  // Determine unlocked Feat / ASI slots by individual Class Level (D&D 5e / BG3 Standard Rule)
  // Standard classes unlock at Class Lv: 4, 8, 12, 16, 19
  // Fighter unlocks extra at Class Lv: 6, 14 | Rogue unlocks extra at Class Lv: 10
  const unlockedFeatSlots = [];
  allCharacterClasses.forEach(cItem => {
    const cid = cItem.cls.id;
    const cLv = cItem.level;
    const classTierList = [4, 8, 12, 16, 19];
    if (cid === 'fighter') classTierList.push(6, 14);
    if (cid === 'rogue') classTierList.push(10);
    if (cid === 'homebrew') {
      if (homebrewConfig.extraFeat6) classTierList.push(6);
      if (homebrewConfig.extraFeat10) classTierList.push(10);
      if (homebrewConfig.extraFeat14) classTierList.push(14);
    }
    classTierList.sort((a, b) => a - b);

    classTierList.forEach(reqLv => {
      if (cLv >= reqLv) {
        const isExtraFighter = cid === 'fighter' && (reqLv === 6 || reqLv === 14);
        const isExtraRogue = cid === 'rogue' && reqLv === 10;
        unlockedFeatSlots.push({
          key: `${cid}_${reqLv}`,
          legacyLv: cItem.isPrimary ? reqLv : null,
          classId: cid,
          className: cItem.cls.name_th,
          classLv: reqLv,
          badgeText: isExtraFighter ? '(โบนัส Fighter)' : isExtraRogue ? '(โบนัส Rogue)' : '',
          label: `${cItem.cls.name_th} Lv.${reqLv}`
        });
      }
    });
  });

  const getFeatSlotChoice = (slot) => {
    if (asiTiers[slot.key]) return asiTiers[slot.key];
    if (slot.legacyLv && asiTiers[slot.legacyLv]) return asiTiers[slot.legacyLv];
    return { feat: 'asi', stat: 'STR', stat2: 'STR' };
  };

  const unlockedTierLevels = unlockedFeatSlots.map(s => s.key);
  const hasFeatActive = (featId) => unlockedFeatSlots.some(slot => getFeatSlotChoice(slot)?.feat === featId);

  // Multiclass Handlers
  const handleAddMulticlass = () => {
    if (totalLevel >= 20) {
      setStatusMsg('⚠️ เลเวลรวมของตัวละครเต็มเพดาน Lv.20 แล้ว! กรุณาลดเลเวลอาชีพหลักก่อนเพิ่มอาชีพเสริม');
      setTimeout(() => setStatusMsg(null), 3500);
      return;
    }
    const usedIds = allCharacterClasses.map(c => c.cls.id);
    const availableCls = CLASSES.find(c => !usedIds.includes(c.id));
    if (!availableCls) return;
    setMulticlasses(prev => [
      ...prev,
      {
        id: `mc-${Date.now()}`,
        classId: availableCls.id,
        level: 1,
        subclassId: availableCls.subclasses?.[0]?.id || null
      }
    ]);
  };

  const handleUpdateMulticlass = (mcId, field, value) => {
    setMulticlasses(prev => prev.map(mc => {
      if (mc.id !== mcId) return mc;
      if (field === 'classId') {
        const newCls = CLASSES.find(c => c.id === value) || CLASSES[0];
        return { ...mc, classId: value, subclassId: newCls.subclasses?.[0]?.id || null };
      }
      if (field === 'level') {
        const otherLevels = level + prev.filter(x => x.id !== mcId).reduce((s, x) => s + x.level, 0);
        const clampedLv = Math.max(1, Math.min(20 - otherLevels, parseInt(value) || 1));
        return { ...mc, level: clampedLv };
      }
      return { ...mc, [field]: value };
    }));
  };

  const handleRemoveMulticlass = (mcId) => {
    setMulticlasses(prev => prev.filter(mc => mc.id !== mcId));
  };

  // Automatic & Extra Languages Logic
  const getAutoLanguages = () => {
    const auto = new Set(selectedRace.languages || ['common']);
    if (selectedSubrace?.bonusLanguages) {
      selectedSubrace.bonusLanguages.forEach(l => auto.add(l));
    }
    if (allCharacterClasses.some(c => c.cls.id === 'sorcerer' && c.subclass?.id === 'draconic')) {
      auto.add('draconic');
    }
    return Array.from(auto);
  };

  const autoLanguages = getAutoLanguages();
  const extraLanguageQuota = 
    (selectedRace.extraLanguages || 0) +
    (selectedSubrace?.extraLanguages || 0) +
    (selectedBg.extraLanguages || 0) +
    allCharacterClasses.reduce((sum, c) => sum + (c.cls.extraLanguages || 0), 0) +
    (hasFeatActive('linguist') ? 3 : 0);

  const toggleLanguage = (langId) => {
    if (autoLanguages.includes(langId)) return;
    if (selectedLanguages.includes(langId)) {
      setSelectedLanguages(prev => prev.filter(l => l !== langId));
    } else if (selectedLanguages.length < extraLanguageQuota) {
      setSelectedLanguages(prev => [...prev, langId]);
    }
  };

  // Load saved characters from localStorage & setup Supabase Realtime on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('dnd_renji_saved_chars_v1');
      if (raw) setSavedCharacters(JSON.parse(raw));
    } catch (e) {
      console.error(e);
    }

    fetchCloudCharacters();

    const channel = supabase.channel('party-dice-room');
    channel.on('broadcast', { event: 'dice-roll' }, (payload) => {
      const entry = payload.payload;
      setRollLog(entry);
      setRollHistory(prev => [entry, ...prev.slice(0, 4)]);
    }).subscribe();
    diceChannelRef.current = channel;

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Sync Starting Inventory & Gold when Class or Background changes
  useEffect(() => {
    if (isLoadingCharRef.current) {
      isLoadingCharRef.current = false;
      return;
    }
    setWealth(prev => ({ ...prev, gp: selectedBg.gold || 10 }));
    const classItems = (selectedClass.equipment || []).map((name, idx) => {
      const lower = name.toLowerCase();
      const isShield = lower.includes('shield') || lower.includes('โล่');
      const isArmor = lower.includes('armor') || lower.includes('mail') || lower.includes('เกราะ') || isShield;
      return {
        id: `cls-${idx}`,
        name,
        qty: 1,
        weight: isArmor ? 12 : 3,
        type: isShield ? 'โล่' : isArmor ? 'ชุดเกราะ' : 'อาวุธ/ชุดอาชีพ',
        equipped: true,
        isShield,
        attuned: false
      };
    });
    const bgItems = (selectedBg.equipment || []).map((name, idx) => ({
      id: `bg-${idx}`,
      name,
      qty: 1,
      weight: 1,
      type: 'ของภูมิหลัง',
      equipped: false,
      isShield: false,
      attuned: false
    }));
    setInventory([...classItems, ...bgItems]);
  }, [selectedClass.id, selectedBg.id]);

  // Keep Hit Dice synced when level increases
  useEffect(() => {
    setHitDiceRemaining(totalLevel);
  }, [totalLevel, selectedClass.id]);

  // Combined Spellcasting Check
  const activeEquippedItems = inventory.filter(i => i.equipped || i.attuned);
  const hasItemSpellGrant = activeEquippedItems.some(i => 
    (i.bonusSpellSlots && Object.values(i.bonusSpellSlots).some(v => v > 0)) ||
    (Array.isArray(i.grantedSpells) && i.grantedSpells.length > 0)
  );

  const hasAnySpellcasting = allCharacterClasses.some(c => 
    c.cls.spellcasting || 
    (c.cls.id === 'fighter' && c.level >= 3 && c.subclass?.id === 'eldritch_knight') ||
    (c.cls.id === 'rogue' && c.level >= 3 && c.subclass?.id === 'arcane_trickster')
  ) || hasFeatActive('magic_initiate') || hasFeatActive('ritual_caster') || hasFeatActive('spell_sniper') || hasItemSpellGrant;

  // Update Spell Slots when Class, Multiclass or Level changes (D&D 5e / BG3 Standard Rules)
  useEffect(() => {
    if (!hasAnySpellcasting) {
      setSpellSlots({});
      return;
    }

    // Identify non-Warlock spellcasting classes (Full, Half, 1/3 Casters, and Homebrew)
    const nonWarlockCasters = allCharacterClasses.filter(c => {
      const cid = c.cls.id;
      if (['bard', 'cleric', 'druid', 'sorcerer', 'wizard'].includes(cid)) return true;
      if (['paladin', 'ranger'].includes(cid) && c.level >= 2) return true;
      if (cid === 'fighter' && c.level >= 3 && c.subclass?.id === 'eldritch_knight') return true;
      if (cid === 'rogue' && c.level >= 3 && c.subclass?.id === 'arcane_trickster') return true;
      if (cid === 'homebrew' && ['full', 'half', 'third'].includes(homebrewConfig.casterType)) {
        if (homebrewConfig.casterType === 'half' && c.level < 2) return false;
        return true;
      }
      return false;
    });

    const isMulticlassSpellcaster = nonWarlockCasters.length >= 2;
    const nextSlots = {};

    if (nonWarlockCasters.length === 1 && !isMulticlassSpellcaster) {
      // Single Spellcasting Class (even if multiclassed with non-caster like Barbarian/Monk/Fighter)
      const sole = nonWarlockCasters[0];
      const cid = sole.cls.id;
      const cLv = sole.level;

      if (['bard', 'cleric', 'druid', 'sorcerer', 'wizard'].includes(cid) || (cid === 'homebrew' && homebrewConfig.casterType === 'full')) {
        const table = FULL_CASTER_SLOTS[cLv] || {};
        Object.entries(table).forEach(([sLv, maxCount]) => {
          if (maxCount > 0) nextSlots[sLv] = { max: maxCount, current: maxCount, regularMax: maxCount, pactMax: 0 };
        });
      } else if (['paladin', 'ranger'].includes(cid) || (cid === 'homebrew' && homebrewConfig.casterType === 'half')) {
        const table = HALF_CASTER_SLOTS[cLv] || {};
        Object.entries(table).forEach(([sLv, maxCount]) => {
          if (maxCount > 0) nextSlots[sLv] = { max: maxCount, current: maxCount, regularMax: maxCount, pactMax: 0 };
        });
      } else if (cid === 'fighter' || cid === 'rogue' || (cid === 'homebrew' && homebrewConfig.casterType === 'third')) {
        // Single-class 1/3 Caster (Eldritch Knight / Arcane Trickster) uses ceil(level / 3) on Full Caster Table
        const effThirdLv = Math.ceil(cLv / 3);
        const table = FULL_CASTER_SLOTS[effThirdLv] || {};
        Object.entries(table).forEach(([sLv, maxCount]) => {
          if (maxCount > 0) nextSlots[sLv] = { max: maxCount, current: maxCount, regularMax: maxCount, pactMax: 0 };
        });
      }
    } else if (isMulticlassSpellcaster) {
      // Multiclass Spellcaster Table (D&D 5e PHB p.164: Full = 1x, Half = floor(lv/2), Third = floor(lv/3))
      let combinedCasterLv = 0;
      nonWarlockCasters.forEach(c => {
        const cid = c.cls.id;
        if (['bard', 'cleric', 'druid', 'sorcerer', 'wizard'].includes(cid) || (cid === 'homebrew' && homebrewConfig.casterType === 'full')) {
          combinedCasterLv += c.level;
        } else if (['paladin', 'ranger'].includes(cid) || (cid === 'homebrew' && homebrewConfig.casterType === 'half')) {
          combinedCasterLv += Math.floor(c.level / 2);
        } else if (cid === 'fighter' || cid === 'rogue' || (cid === 'homebrew' && homebrewConfig.casterType === 'third')) {
          combinedCasterLv += Math.floor(c.level / 3);
        }
      });
      const effLv = Math.min(20, Math.max(1, combinedCasterLv));
      const table = FULL_CASTER_SLOTS[effLv] || {};
      Object.entries(table).forEach(([sLv, maxCount]) => {
        if (maxCount > 0) nextSlots[sLv] = { max: maxCount, current: maxCount, regularMax: maxCount, pactMax: 0 };
      });
    } else if (hasFeatActive('magic_initiate') || hasFeatActive('ritual_caster')) {
      nextSlots[1] = { max: 1, current: 1, regularMax: 1, pactMax: 0 };
    }

    // Warlock Pact Magic & Mystic Arcanum (Tracked separately so Short Rest only restores Pact Slots!)
    const warlockLv = getClassLv('warlock') + (homebrewConfig.casterType === 'pact' ? getClassLv('homebrew') : 0);
    if (warlockLv > 0) {
      const pactSlotLv = Math.min(5, Math.ceil(warlockLv / 2));
      const pactSlotCount = warlockLv >= 17 ? 4 : warlockLv >= 11 ? 3 : warlockLv >= 2 ? 2 : 1;
      const existingRegMax = nextSlots[pactSlotLv]?.regularMax || 0;
      const totalMax = existingRegMax + pactSlotCount;
      nextSlots[pactSlotLv] = {
        max: totalMax,
        current: totalMax,
        regularMax: existingRegMax,
        pactMax: pactSlotCount,
        isPact: true
      };
      // Mystic Arcanum (1/Long Rest each at Lv.11, 13, 15, 17)
      if (warlockLv >= 11 && !nextSlots[6]) nextSlots[6] = { max: 1, current: 1, regularMax: 1, pactMax: 0, isArcanum: true };
      if (warlockLv >= 13 && !nextSlots[7]) nextSlots[7] = { max: 1, current: 1, regularMax: 1, pactMax: 0, isArcanum: true };
      if (warlockLv >= 15 && !nextSlots[8]) nextSlots[8] = { max: 1, current: 1, regularMax: 1, pactMax: 0, isArcanum: true };
      if (warlockLv >= 17 && !nextSlots[9]) nextSlots[9] = { max: 1, current: 1, regularMax: 1, pactMax: 0, isArcanum: true };
    }

    // Apply Equipment Bonus Spell Slots (e.g. Pearl of Power, Spellcrux Amulet, Ring of Spell Storing)
    inventory.filter(i => i.equipped || i.attuned).forEach(item => {
      if (item.bonusSpellSlots) {
        Object.entries(item.bonusSpellSlots).forEach(([sLv, addCount]) => {
          const countNum = parseInt(addCount, 10) || 0;
          if (countNum > 0) {
            const existing = nextSlots[sLv] || { max: 0, current: 0, regularMax: 0, pactMax: 0, itemMax: 0 };
            nextSlots[sLv] = {
              ...existing,
              max: existing.max + countNum,
              current: existing.current + countNum,
              regularMax: (existing.regularMax || 0) + countNum,
              itemMax: (existing.itemMax || 0) + countNum
            };
          }
        });
      }
    });

    setSpellSlots(nextSlots);
  }, [selectedClass.id, selectedSubclass?.id, level, multiclasses, asiTiers, inventory, homebrewConfig]);

  // Ensure no duplicate skills with Background
  useEffect(() => {
    setSelectedSkills(prev => prev.filter(skill => !selectedBg.proficiencies.includes(skill)));
  }, [selectedBg]);

  // Handlers for Race & Class
  const handleSelectRace = (race) => {
    setSelectedRace(race);
    setSelectedSubrace(race.subraces ? race.subraces[0] : null);
  };

  const handleSelectClass = (cls) => {
    setSelectedClass(cls);
    setSelectedSubclass(cls.subclasses ? cls.subclasses[0] : null);
    setMulticlasses(prev => prev.filter(mc => mc.classId !== cls.id));
    setSelectedSkills([]);
    setSelectedCantrips([]);
    setSelectedSpells([]);
    setCustomAC(null);
  };

  // Standard Array Swap Logic
  const handleScoreChange = (statId, newValue) => {
    const val = parseInt(newValue, 10);
    const oldVal = scores[statId];
    const statWithNewVal = Object.keys(scores).find(k => scores[k] === val);
    if (statWithNewVal) {
      setScores({ ...scores, [statId]: val, [statWithNewVal]: oldVal });
    } else {
      setScores({ ...scores, [statId]: val });
    }
  };

  const handleBonus2Change = (statId) => {
    if (bonus1 === statId) setBonus1(bonus2);
    setBonus2(statId);
  };

  const handleBonus1Change = (statId) => {
    if (bonus2 === statId) setBonus2(bonus1);
    setBonus1(statId);
  };

  const getFinalScore = (statId) => {
    let final = scores[statId];
    if (bonus2 === statId) final += 2;
    if (bonus1 === statId) final += 1;
    unlockedFeatSlots.forEach(slot => {
      const choice = getFeatSlotChoice(slot);
      if (!choice) return;
      const featMeta = FEATS_LIST.find(f => f.id === choice.feat);
      if (choice.feat === 'asi') {
        const s1 = choice.stat || 'STR';
        const s2 = choice.stat2 || s1;
        if (s1 === statId) final += 1;
        if (s2 === statId) final += 1;
      } else if (featMeta?.statBonus === 1) {
        const chosenStat = featMeta.statOptions?.includes(choice.stat) ? choice.stat : featMeta.statOptions?.[0];
        if (chosenStat === statId) final += 1;
      }
    });

    // Base Cap (20 standard, 24 for Lv.20 Barbarian STR/CON)
    let cap = 20;
    if (getClassLv('barbarian') === 20 && (statId === 'STR' || statId === 'CON')) {
      final += 4;
      cap = 24;
    }

    // Apply Equipment Stat Bonuses (+1, +2, etc.)
    let itemUncappedBonus = 0;
    let highestOverride = 0;
    activeEquippedItems.forEach(item => {
      if (item.statBonuses && item.statBonuses[statId]) {
        const bVal = parseInt(item.statBonuses[statId], 10) || 0;
        if (item.uncappedStat) {
          itemUncappedBonus += bVal;
        } else {
          final += bVal;
        }
      }
      if (item.statOverrides && item.statOverrides[statId]) {
        const oVal = parseInt(item.statOverrides[statId], 10) || 0;
        if (oVal > highestOverride) highestOverride = oVal;
      }
    });

    final = Math.min(cap, final) + itemUncappedBonus;
    if (highestOverride > final) {
      final = highestOverride;
    }
    return Math.min(30, final);
  };

  const getModifierNum = (score) => Math.floor((score - 10) / 2);
  const formatMod = (mod) => (mod >= 0 ? `+${mod}` : `${mod}`);

  const hasWildheartAspect = (aspectId) => (
    (allCharacterClasses.some(c => c.cls.id === 'barbarian' && c.level >= 6 && c.subclass?.id === 'wildheart') && wildheartAnimalAspect === aspectId) ||
    (allCharacterClasses.some(c => c.cls.id === 'barbarian' && c.level >= 10 && c.subclass?.id === 'wildheart') && wildheartSecondAspect === aspectId)
  );
  const isChampion7 = allCharacterClasses.some(c => c.cls.id === 'fighter' && c.level >= 7 && c.subclass?.id === 'champion');
  const isChampion15 = allCharacterClasses.some(c => c.cls.id === 'fighter' && c.level >= 15 && c.subclass?.id === 'champion');
  const isChampion3 = allCharacterClasses.some(c => c.cls.id === 'fighter' && c.level >= 3 && c.subclass?.id === 'champion');
  const critThreshold = isChampion15 ? 18 : (isChampion3 || hasFeatActive('spell_sniper')) ? 19 : 20;

  const isSkillProficient = (skillId) => (
    selectedBg.proficiencies.includes(skillId) ||
    selectedSkills.includes(skillId) ||
    ((skillId === 'deception' || skillId === 'persuasion') && warlockInvocations.includes('beguiling_influence')) ||
    (skillId === 'survival' && hasWildheartAspect('aspect_tiger')) ||
    (skillId === 'stealth' && hasWildheartAspect('aspect_wolf')) ||
    activeEquippedItems.some(item => Array.isArray(item.skillProficiencies) && item.skillProficiencies.includes(skillId))
  );

  const getSkillBonusNum = (skillId) => {
    const statId = SKILLS_META[skillId].stat;
    const baseMod = getModifierNum(getFinalScore(statId));
    const hasActorExp = hasFeatActive('actor') && (skillId === 'deception' || skillId === 'performance');
    const isExp = hasActorExp || bardExpertise.includes(skillId) || rogueExpertise.includes(skillId) || activeEquippedItems.some(item => Array.isArray(item.skillExpertise) && item.skillExpertise.includes(skillId));
    const halfProfApplicable = getClassLv('bard') >= 2 || (isChampion7 && ['STR', 'DEX', 'CON'].includes(statId));
    const prof = isExp ? profBonus * 2 : isSkillProficient(skillId) ? profBonus : (halfProfApplicable ? Math.ceil(profBonus / 2) : 0);
    const isFeyWanderer = allCharacterClasses.some(c => c.cls.id === 'ranger' && c.level >= 3 && c.subclass?.id === 'fey_wanderer');
    const feyBonus = (isFeyWanderer && statId === 'CHA') ? Math.max(0, getModifierNum(getFinalScore('WIS'))) : 0;
    const itemSkillBonus = activeEquippedItems.reduce((sum, item) => {
      const specific = parseInt(item.skillBonuses?.[skillId], 10) || 0;
      const allSkills = parseInt(item.skillBonuses?.ALL, 10) || 0;
      return sum + specific + allSkills;
    }, 0);
    return baseMod + prof + feyBonus + itemSkillBonus;
  };

  // Combat Calculations
  const conMod = getModifierNum(getFinalScore('CON'));
  const dexMod = getModifierNum(getFinalScore('DEX'));
  const wisMod = getModifierNum(getFinalScore('WIS'));

  const isGoldDwarf = selectedSubrace?.id === 'gold_dwarf';
  const sorcDraconicLv = allCharacterClasses.find(c => c.cls.id === 'sorcerer' && c.subclass?.id === 'draconic')?.level || 0;
  const hasToughFeat = hasFeatActive('tough');
  const hasAlertFeat = hasFeatActive('alert');
  const isGloomStalker = allCharacterClasses.some(c => c.cls.id === 'ranger' && c.level >= 3 && c.subclass?.id === 'gloom_stalker');
  const hasFeralInstinct = getClassLv('barbarian') >= 7;

  const hitDie = (selectedClass.id === 'homebrew' ? parseInt(homebrewConfig.hitDie, 10) : selectedClass.hitDie) || 8;
  const avgPrimaryHitDie = Math.floor(hitDie / 2) + 1;
  const primaryHP = (hitDie + conMod) + (level - 1) * (avgPrimaryHitDie + conMod);
  const secondaryHP = multiclasses.reduce((sum, mc) => {
    const mcCls = CLASSES.find(c => c.id === mc.classId) || CLASSES[0];
    const effMcDie = mc.classId === 'homebrew' ? (parseInt(homebrewConfig.hitDie, 10) || 10) : (mcCls.hitDie || 8);
    const avgMcDie = Math.floor(effMcDie / 2) + 1;
    return sum + mc.level * (avgMcDie + conMod);
  }, 0);
  const itemFlatHPBonus = activeEquippedItems.reduce((sum, i) => sum + (parseInt(i.hpBonus, 10) || 0), 0);
  const bonusFeatRaceHP = ((isGoldDwarf ? 1 : 0) + (hasToughFeat ? 2 : 0)) * totalLevel + sorcDraconicLv + itemFlatHPBonus;
  const maxHP = Math.max(totalLevel, primaryHP + secondaryHP + bonusFeatRaceHP);

  const isSwashbuckler = allCharacterClasses.some(c => c.cls.id === 'rogue' && c.level >= 3 && c.subclass?.id === 'swashbuckler');
  const chaMod = getModifierNum(getFinalScore('CHA'));
  const itemInitBonus = activeEquippedItems.reduce((sum, i) => sum + (parseInt(i.initBonus, 10) || 0), 0);
  const initModNum = dexMod + (hasAlertFeat ? 5 : 0) + (isGloomStalker ? 3 : 0) + (hasFeralInstinct ? 3 : 0) + (isSwashbuckler ? chaMod : 0) + itemInitBonus;

  // Equipped Armor, Shield & Attunement Calculations
  const equippedArmorItem = inventory.find(i => i.equipped && i.type === 'ชุดเกราะ' && !i.isShield && !i.name.toLowerCase().includes('shield') && !i.name.toLowerCase().includes('โล่'));
  const equippedShieldItem = inventory.find(i => i.equipped && (i.isShield || i.name.toLowerCase().includes('shield') || i.name.toLowerCase().includes('โล่')));
  const attunedCount = inventory.filter(i => i.attuned).length;

  const hasDefenseStyle = Object.values(fightingStyles).includes('defense') || championExtraStyle === 'defense';
  const computeArmorAC = () => {
    let base = 10 + dexMod;
    const maxMedDex = hasFeatActive('medium_armour_master') ? 3 : 2;
    if (equippedArmorItem) {
      const acVal = equippedArmorItem.ac || equippedArmorItem.armorClassVal || parseInt(equippedArmorItem.name.match(/AC\s*(\d+)/i)?.[1] || '12', 10);
      const cat = equippedArmorItem.armorCat || (acVal >= 16 ? 'heavy' : acVal >= 13 ? 'medium' : 'light');
      if (cat === 'heavy') base = acVal;
      else if (cat === 'medium') base = acVal + Math.min(maxMedDex, dexMod);
      else base = acVal + dexMod;
    } else {
      const candidates = [10 + dexMod];
      if (hasClass('barbarian') || (hasClass('homebrew') && homebrewConfig.unarmoredDefense === 'con')) candidates.push(10 + dexMod + conMod);
      if ((hasClass('monk') && !equippedShieldItem) || (hasClass('homebrew') && homebrewConfig.unarmoredDefense === 'wis')) candidates.push(10 + dexMod + wisMod);
      if (hasClass('homebrew') && homebrewConfig.unarmoredDefense === 'int') candidates.push(10 + dexMod + getModifierNum(getFinalScore('INT')));
      if (hasClass('homebrew') && homebrewConfig.unarmoredDefense === 'cha') candidates.push(10 + dexMod + chaMod);
      if (sorcDraconicLv > 0) candidates.push(13 + dexMod);
      base = Math.max(...candidates);
    }
    if (equippedShieldItem) base += (equippedShieldItem.ac || 2);
    if (hasFeatActive('dual_wielder') && !equippedShieldItem) base += 1;
    if (activeConditions.includes('hastened')) base += 2;
    if (hasDefenseStyle && equippedArmorItem) base += 1;
    const otherBonusItems = inventory.filter(i => (i.equipped || i.attuned) && i.ac && i.id !== equippedArmorItem?.id && i.id !== equippedShieldItem?.id);
    otherBonusItems.forEach(item => { base += item.ac; });
    return base;
  };

  const calculatedAC = computeArmorAC();
  const displayAC = customAC !== null ? customAC : calculatedAC;
  
  const allRaceTraits = [...selectedRace.traits, ...(selectedSubrace ? selectedSubrace.traits : [])];
  const baseSpeedNum = parseInt(allRaceTraits.find(t => t.includes('ความเร็ว'))?.match(/(\d+)/)?.[1] || '30', 10);
  const monkLv = getClassLv('monk');
  const monkSpeedBonus = (monkLv >= 2 && !equippedArmorItem && !equippedShieldItem) ? (monkLv >= 18 ? 30 : monkLv >= 14 ? 25 : monkLv >= 10 ? 20 : monkLv >= 6 ? 15 : 10) : 0;
  const barbSpeedBonus = (getClassLv('barbarian') >= 5 && (!equippedArmorItem || equippedArmorItem.armorCat !== 'heavy')) ? 10 : 0;
  const mobileFeatBonus = (hasFeatActive('mobile') ? 10 : 0) + (hasWildheartAspect('aspect_elk') ? 5 : 0);
  const heavyArmorPenalty = (equippedArmorItem?.armorCat === 'heavy' && getFinalScore('STR') < 13) ? -10 : 0;
  
  const hasZeroSpeedCond = activeConditions.some(cId => CONDITIONS_LIST.find(c => c.id === cId)?.zeroSpeed);
  const hasDoubleSpeedCond = activeConditions.includes('hastened');
  const itemSpeedBonus = activeEquippedItems.reduce((sum, i) => sum + (parseInt(i.speedBonus, 10) || 0), 0);
  const finalSpeedNum = hasZeroSpeedCond ? 0 : Math.max(0, (baseSpeedNum + monkSpeedBonus + barbSpeedBonus + mobileFeatBonus + heavyArmorPenalty + itemSpeedBonus) * (hasDoubleSpeedCond ? 2 : 1));
  const characterSpeed = `${finalSpeedNum} ฟุต`;

  // Sync currentHP when maxHP changes
  useEffect(() => {
    setCurrentHP(maxHP);
  }, [maxHP]);

  // Condition Auto-Roll Mode
  useEffect(() => {
    const hasDisadv = activeConditions.some(cId => CONDITIONS_LIST.find(c => c.id === cId)?.diceEffect === 'disadv');
    const hasAdv = activeConditions.some(cId => CONDITIONS_LIST.find(c => c.id === cId)?.diceEffect === 'adv');
    if (hasDisadv && !hasAdv) setRollMode('disadv');
    else if (hasAdv && !hasDisadv) setRollMode('adv');
    else setRollMode('normal');
  }, [activeConditions]);

  // Dice Roller Engine (with Supabase Realtime Broadcast)
  const rollDiceFormula = (label, formulaStr, overrideMode = null) => {
    const clean = (formulaStr || '1d20').replace(/\s+/g, '');
    const match = clean.match(/^(\d+)d(\d+)((?:[+-]\d+)*)$/i);
    if (!match) return;
    const count = Math.min(40, Math.max(1, parseInt(match[1], 10)));
    const sides = Math.max(2, parseInt(match[2], 10));
    let mod = 0;
    if (match[3]) {
      const mods = match[3].match(/[+-]\d+/g);
      if (mods) mod = mods.reduce((acc, m) => acc + parseInt(m, 10), 0);
    }
    const modeToUse = overrideMode || rollMode;

    let rolls = [];
    let chosenTotal = 0;
    let isCrit = false;
    let isFumble = false;

    if (count === 1 && sides === 20 && modeToUse !== 'normal') {
      const r1 = Math.floor(Math.random() * 20) + 1;
      const r2 = Math.floor(Math.random() * 20) + 1;
      rolls = [r1, r2];
      const picked = modeToUse === 'adv' ? Math.max(r1, r2) : Math.min(r1, r2);
      chosenTotal = picked + mod;
      isCrit = picked >= critThreshold;
      isFumble = picked === 1;
    } else {
      for (let i = 0; i < count; i++) {
        rolls.push(Math.floor(Math.random() * sides) + 1);
      }
      const sum = rolls.reduce((a, b) => a + b, 0);
      chosenTotal = sum + mod;
      if (count === 1 && sides === 20) {
        isCrit = rolls[0] >= critThreshold;
        isFumble = rolls[0] === 1;
      }
    }

    const entry = {
      id: Date.now(),
      label,
      formula: clean,
      rolls,
      mod,
      total: chosenTotal,
      mode: count === 1 && sides === 20 ? modeToUse : 'normal',
      isCrit,
      isFumble,
      playerName: characterName || 'ผู้ผจญภัยนิรนาม'
    };

    if (diceChannelRef.current) {
      diceChannelRef.current.send({
        type: 'broadcast',
        event: 'dice-roll',
        payload: entry
      });
    }

    setRollLog(entry);
    setRollHistory(prev => [entry, ...prev.slice(0, 4)]);
  };

  const rollD20Check = (label, modNum) => {
    const sign = modNum >= 0 ? `+${modNum}` : `${modNum}`;
    rollDiceFormula(label, `1d20${modNum === 0 ? '' : sign}`);
  };

  // Combat HP & Rest Handlers
  const handleDamage = () => {
    const dmg = Math.max(0, parseInt(hpInput, 10) || 0);
    if (dmg === 0) return;
    let remainingDmg = dmg;
    if (tempHP > 0) {
      if (tempHP >= remainingDmg) {
        setTempHP(tempHP - remainingDmg);
        remainingDmg = 0;
      } else {
        remainingDmg -= tempHP;
        setTempHP(0);
      }
    }
    setCurrentHP(prev => Math.max(0, prev - remainingDmg));
  };

  const handleHeal = () => {
    const heal = Math.max(0, parseInt(hpInput, 10) || 0);
    if (heal === 0) return;
    setCurrentHP(prev => Math.min(maxHP, prev + heal));
    if (currentHP === 0 && heal > 0) {
      setDeathSaves({ successes: 0, failures: 0 });
    }
  };

  const handleSpendHitDie = () => {
    if (hitDiceRemaining <= 0) return;
    const roll = Math.floor(Math.random() * hitDie) + 1;
    const songOfRest = getClassLv('bard') >= 2 ? Math.floor(Math.random() * 6) + 1 : 0;
    const totalHeal = Math.max(1, roll + conMod + songOfRest);
    setHitDiceRemaining(prev => prev - 1);
    setCurrentHP(prev => Math.min(maxHP, prev + totalHeal));
    rollDiceFormula(`ฟื้นฟูด้วย Hit Die (1d${hitDie}${formatMod(conMod)})`, `1d${hitDie}${conMod >= 0 ? `+${conMod}` : conMod}`, 'normal');
  };

  const handleShortRest = () => {
    setCustomResources(prev => prev.map(res => res.resetOn === 'short' ? { ...res, current: res.max } : res));
    if (hasFeatActive('durable')) {
      setCurrentHP(maxHP);
    }
    if (hasClass('warlock')) {
      setSpellSlots(prev => {
        const next = { ...prev };
        Object.keys(next).forEach(k => {
          const slot = next[k];
          if (slot && slot.isPact && slot.pactMax > 0) {
            next[k] = {
              ...slot,
              current: Math.min(slot.max, slot.current + slot.pactMax)
            };
          }
        });
        return next;
      });
    }
    setStatusMsg(`🏕️ พักผ่อนสั้น (Short Rest 1 ชม.) เสร็จสิ้น! ${hasFeatActive('durable') ? 'ผลของ Feat Durable ฟื้นฟู HP เต็ม 100% ทันที! ' : ''}ฟื้นฟูสกิลพักสั้นเรียบร้อย`);
    setTimeout(() => setStatusMsg(null), 4000);
  };

  const handleLongRest = () => {
    setCurrentHP(maxHP);
    setTempHP(0);
    setDeathSaves({ successes: 0, failures: 0 });
    setHitDiceRemaining(totalLevel);
    setActiveConditions([]);
    setCustomResources(prev => prev.map(res => ({ ...res, current: res.max })));
    setSpellSlots(prev => {
      const next = {};
      Object.keys(prev).forEach(k => {
        next[k] = { ...prev[k], current: prev[k].max };
      });
      return next;
    });
    setStatusMsg('🌙 พักผ่อนยาว (Long Rest) เสร็จสิ้น! ฟื้นฟู HP, Hit Dice และช่องเวทมนตร์ทั้งหมดแล้ว');
    setTimeout(() => setStatusMsg(null), 3500);
  };

  // Character Manager (Save Local, Save Cloud, Load, Export JSON, Import JSON)
  const buildCharacterSnapshot = () => ({
    id: `char-${Date.now()}`,
    name: characterName || 'ผู้ผจญภัยนิรนาม',
    level,
    multiclasses,
    portraitUrl,
    alignment,
    personalityTraits,
    ideals,
    bonds,
    flaws,
    campaignNotes,
    raceId: selectedRace.id,
    subraceId: selectedSubrace?.id || null,
    classId: selectedClass.id,
    subclassId: selectedSubclass?.id || null,
    bgId: selectedBg.id,
    scores,
    bonus2,
    bonus1,
    asiTiers,
    fightingStyles,
    warlockInvocations,
    warlockPactBoon,
    sorcererMetamagic,
    rangerFavoredEnemy,
    rangerNaturalExplorer,
    bardExpertise,
    druidWildShape,
    rogueExpertise,
    battleMasterManeuvers,
    championExtraStyle,
    wildheartBestialHeart,
    wildheartAnimalAspect,
    wildheartSecondAspect,
    monkElementsDisciplines,
    hunterPreyChoice,
    hunterDefenseChoice,
    hunterMultiattackChoice,
    beastMasterCompanion,
    landCircleTerrain,
    homebrewConfig,
    selectedSkills,
    selectedLanguages,
    selectedCantrips,
    selectedSpells,
    wealth,
    inventory,
    customResources,
    customActions,
    updatedAt: new Date().toLocaleDateString('th-TH')
  });

  const handleSaveToLocal = () => {
    const snap = buildCharacterSnapshot();
    const updated = [snap, ...savedCharacters.filter(c => c.name !== snap.name)];
    setSavedCharacters(updated);
    try {
      localStorage.setItem('dnd_renji_saved_chars_v1', JSON.stringify(updated));
      setStatusMsg(`💾 บันทึกตัวละคร "${snap.name}" ลงในเครื่องเรียบร้อยแล้ว!`);
      setTimeout(() => setStatusMsg(null), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveToCloud = async () => {
    const snap = buildCharacterSnapshot();
    try {
      setStatusMsg('⏳ กำลังบันทึกข้อมูลขึ้น Supabase...');
      const { error } = await supabase
        .from('characters')
        .upsert({
          name: snap.name,
          level: totalLevel,
          race_id: snap.raceId,
          subrace_id: snap.subraceId,
          class_id: snap.classId,
          subclass_id: snap.subclassId,
          bg_id: snap.bgId,
          portrait_url: portraitUrl,
          sheet_data: snap,
          updated_at: new Date().toISOString()
        })
        .select();

      if (error) throw error;

      setStatusMsg(`☁️ บันทึกตัวละคร "${snap.name}" บน Cloud เรียบร้อยแล้ว!`);
      fetchCloudCharacters();
      setTimeout(() => setStatusMsg(null), 3500);
    } catch (err) {
      console.error(err);
      setStatusMsg('⚠️ บันทึกไม่สำเร็จ: ' + err.message);
      setTimeout(() => setStatusMsg(null), 3500);
    }
  };

  const fetchCloudCharacters = async () => {
    try {
      const { data, error } = await supabase
        .from('characters')
        .select('*')
        .order('updated_at', { ascending: false });
      if (!error && data) {
        setCloudCharacters(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteCloud = async (charId) => {
    const { error } = await supabase.from('characters').delete().eq('id', charId);
    if (!error) {
      setCloudCharacters(prev => prev.filter(c => c.id !== charId));
      setStatusMsg('🗑️ ลบตัวละครจาก Cloud แล้ว');
      setTimeout(() => setStatusMsg(null), 3000);
    }
  };

  const handleLoadCharacter = (charObj) => {
    if (!charObj) return;
    if (charObj.classId !== selectedClass.id || charObj.bgId !== selectedBg.id) {
      isLoadingCharRef.current = true;
    }
    setCharacterName(charObj.name || '');
    setLevel(charObj.level || 1);
    setMulticlasses(charObj.multiclasses || []);
    setPortraitUrl(charObj.portraitUrl || '');
    setAlignment(charObj.alignment || 'NG');
    setPersonalityTraits(charObj.personalityTraits || '');
    setIdeals(charObj.ideals || '');
    setBonds(charObj.bonds || '');
    setFlaws(charObj.flaws || '');
    setCampaignNotes(charObj.campaignNotes || '');

    const foundRace = RACES.find(r => r.id === charObj.raceId) || RACES[0];
    setSelectedRace(foundRace);
    setSelectedSubrace(foundRace.subraces?.find(s => s.id === charObj.subraceId) || foundRace.subraces?.[0] || null);

    const foundClass = CLASSES.find(c => c.id === charObj.classId) || CLASSES[0];
    setSelectedClass(foundClass);
    setSelectedSubclass(foundClass.subclasses?.find(s => s.id === charObj.subclassId) || foundClass.subclasses?.[0] || null);

    const foundBg = BACKGROUNDS.find(b => b.id === charObj.bgId) || BACKGROUNDS[0];
    setSelectedBg(foundBg);

    if (charObj.scores) setScores(charObj.scores);
    if (charObj.bonus2) setBonus2(charObj.bonus2);
    if (charObj.bonus1) setBonus1(charObj.bonus1);
    if (charObj.asiTiers) setAsiTiers(charObj.asiTiers);
    if (charObj.fightingStyles) setFightingStyles(charObj.fightingStyles);
    if (charObj.warlockInvocations) setWarlockInvocations(charObj.warlockInvocations);
    if (charObj.warlockPactBoon !== undefined) setWarlockPactBoon(charObj.warlockPactBoon);
    if (charObj.sorcererMetamagic) setSorcererMetamagic(charObj.sorcererMetamagic);
    if (charObj.rangerFavoredEnemy !== undefined) setRangerFavoredEnemy(charObj.rangerFavoredEnemy);
    if (charObj.rangerNaturalExplorer !== undefined) setRangerNaturalExplorer(charObj.rangerNaturalExplorer);
    if (charObj.bardExpertise) setBardExpertise(charObj.bardExpertise);
    if (charObj.druidWildShape !== undefined) setDruidWildShape(charObj.druidWildShape);
    if (charObj.rogueExpertise) setRogueExpertise(charObj.rogueExpertise);
    if (charObj.battleMasterManeuvers) setBattleMasterManeuvers(charObj.battleMasterManeuvers);
    if (charObj.championExtraStyle !== undefined) setChampionExtraStyle(charObj.championExtraStyle);
    if (charObj.wildheartBestialHeart) setWildheartBestialHeart(charObj.wildheartBestialHeart);
    if (charObj.wildheartAnimalAspect) setWildheartAnimalAspect(charObj.wildheartAnimalAspect);
    if (charObj.wildheartSecondAspect) setWildheartSecondAspect(charObj.wildheartSecondAspect);
    if (charObj.monkElementsDisciplines) setMonkElementsDisciplines(charObj.monkElementsDisciplines);
    if (charObj.hunterPreyChoice) setHunterPreyChoice(charObj.hunterPreyChoice);
    if (charObj.hunterDefenseChoice) setHunterDefenseChoice(charObj.hunterDefenseChoice);
    if (charObj.hunterMultiattackChoice) setHunterMultiattackChoice(charObj.hunterMultiattackChoice);
    if (charObj.beastMasterCompanion) setBeastMasterCompanion(charObj.beastMasterCompanion);
    if (charObj.landCircleTerrain) setLandCircleTerrain(charObj.landCircleTerrain);
    if (charObj.homebrewConfig) setHomebrewConfig(charObj.homebrewConfig);
    if (charObj.selectedSkills) setSelectedSkills(charObj.selectedSkills);
    if (charObj.selectedLanguages) setSelectedLanguages(charObj.selectedLanguages);
    if (charObj.selectedCantrips) setSelectedCantrips(charObj.selectedCantrips);
    if (charObj.selectedSpells) setSelectedSpells(charObj.selectedSpells);
    if (charObj.wealth) setWealth(charObj.wealth);
    if (charObj.inventory) setInventory(charObj.inventory);
    if (charObj.customResources) setCustomResources(charObj.customResources);
    if (charObj.customActions) setCustomActions(charObj.customActions);

    setShowCharModal(false);
    setStatusMsg(`✨ โหลดข้อมูลของ "${charObj.name}" สำเร็จ!`);
    setTimeout(() => setStatusMsg(null), 3000);
  };

  const handleExportJSON = () => {
    const snap = buildCharacterSnapshot();
    const blob = new Blob([JSON.stringify(snap, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${snap.name.replace(/\s+/g, '_')}_Lv${totalLevel}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        handleLoadCharacter(parsed);
      } catch (err) {
        setStatusMsg('⚠️ ไฟล์ JSON ไม่ถูกต้อง');
        setTimeout(() => setStatusMsg(null), 3000);
      }
    };
    reader.readAsText(file);
  };

  const handlePortraitUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setStatusMsg('⏳ กำลังอัปโหลดรูปภาพ...');
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `portraits/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('character-portraits')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('character-portraits')
        .getPublicUrl(filePath);

      setPortraitUrl(data.publicUrl);
      setStatusMsg('✅ อัปโหลดรูปภาพขึ้น Cloud สำเร็จ!');
      setTimeout(() => setStatusMsg(null), 3000);
    } catch (err) {
      console.error(err);
      const localUrl = URL.createObjectURL(file);
      setPortraitUrl(localUrl);
      setStatusMsg('💡 แสดงรูปภาพแบบ Local แล้ว (ตรวจสอบ Bucket character-portraits บน Supabase หากต้องการเก็บขึ้น Cloud)');
      setTimeout(() => setStatusMsg(null), 3500);
    }
  };

  // Toggle Skills (Includes Skilled Feat +3 bonus skills)
  const baseClsSkillQuota = selectedClass.id === 'homebrew' ? (parseInt(homebrewConfig.skillChoices, 10) || 3) : selectedClass.skillChoices;
  const totalSkillQuota = baseClsSkillQuota + (hasFeatActive('skilled') ? 3 : 0) + (selectedRace.id === 'human' ? 1 : 0);
  const toggleSkill = (skillId) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skillId));
    } else if (selectedSkills.length < totalSkillQuota) {
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };

  // Combined Spell Lists for Multiclass, Eldritch Knight, Arcane Trickster, Magic Initiate & Ritual Caster
  const wizardClassObj = CLASSES.find(c => c.id === 'wizard');
  const clericClassObj = CLASSES.find(c => c.id === 'cleric');
  const clericCantrips = clericClassObj?.spellcasting?.cantripList || [];
  const clericSpells = clericClassObj?.spellcasting?.spellList || [];
  const hasDivineSoul = allCharacterClasses.some(c => c.cls.id === 'sorcerer' && c.level >= 1 && c.subclass?.id === 'divine_soul');
  const wizardCantrips = wizardClassObj?.spellcasting?.cantripList || [];
  const wizardSpells = wizardClassObj?.spellcasting?.spellList || [];
  const allRitualSpells = Object.keys(SPELLS_DB).filter(sName => SPELLS_DB[sName]?.ritual && SPELLS_DB[sName]?.level > 0);

  const combinedCantripQuota = allCharacterClasses.reduce((sum, c) => sum + (c.cls.spellcasting?.cantrips || 0), 0) + (hasFeatActive('magic_initiate') ? 2 : 0) + (hasFeatActive('spell_sniper') ? 1 : 0);
  const maxPreparedSpells = allCharacterClasses.reduce((sum, c) => sum + (c.cls.spellcasting ? c.cls.spellcasting.spells + c.level : 0), 0) + (hasFeatActive('magic_initiate') ? 1 : 0) + (hasFeatActive('ritual_caster') ? 2 : 0);

  const hasShadowMonk3 = allCharacterClasses.some(c => c.cls.id === 'monk' && c.level >= 3 && c.subclass?.id === 'shadow');
  const hasArcaneTrickster3 = allCharacterClasses.some(c => c.cls.id === 'rogue' && c.level >= 3 && c.subclass?.id === 'arcane_trickster');

  // Auto-prepared Subclass Spells (Oath Spells, Gloom Stalker Spells, Domain/Circle Spells)
  const autoPreparedSpells = Array.from(new Set([
    ...allCharacterClasses.flatMap(c => {
      if (!c.subclass || c.level < (c.cls.subclassLevel || 1)) return [];
      let spellMap = c.subclass.oathSpells || c.subclass.bonusSpells || c.subclass.domainSpells || c.subclass.expandedSpells || {};
      if (c.subclass.id === 'land') {
        spellMap = c.subclass.circleSpellsOptions?.[landCircleTerrain] || {};
      }
      return Object.entries(spellMap)
        .filter(([reqLv]) => c.level >= parseInt(reqLv, 10))
        .flatMap(([, sList]) => sList.filter(sName => SPELLS_DB[sName]));
    }),
    ...(warlockInvocations.includes('armor_shadows') ? ['Mage Armor'] : []),
    ...(warlockInvocations.includes('fiendish_vigor') ? ['False Life'] : []),
    ...(warlockInvocations.includes('mask_faces') ? ['Disguise Self'] : []),
    ...(warlockInvocations.includes('misty_visions') ? ['Silent Image'] : []),
    ...(warlockInvocations.includes('eldritch_sight') ? ['Detect Magic'] : []),
    ...(warlockInvocations.includes('beast_speech') ? ['Speak with Animals'] : []),
    ...(warlockInvocations.includes('thief_five_fates') ? ['Bane'] : []),
    ...(warlockInvocations.includes('mire_mind') ? ['Slow'] : []),
    ...(warlockInvocations.includes('sculptor_flesh') ? ['Polymorph'] : []),
    ...(warlockInvocations.includes('ascendant_step') ? ['Levitate'] : []),
    ...(warlockInvocations.includes('visions_distant_realm') ? ['Arcane Eye'] : []),
    ...(warlockInvocations.includes('shroud_shadow') ? ['Invisibility'] : []),
    ...(warlockInvocations.includes('chains_carceri') ? ['Hold Monster'] : []),
    ...(allCharacterClasses.some(c => c.cls.id === 'wizard' && c.level >= 6 && c.subclass?.id === 'necromancy') ? ['Animate Dead'] : []),
    ...(allCharacterClasses.some(c => c.cls.id === 'wizard' && c.level >= 10 && c.subclass?.id === 'transmutation') ? ['Polymorph'] : []),
    ...activeEquippedItems.flatMap(i => Array.isArray(i.grantedSpells) ? i.grantedSpells.filter(s => SPELLS_DB[s]) : []),
  ]));

  const combinedCantripOptions = Array.from(new Set([
    ...(hasShadowMonk3 || allCharacterClasses.some(c => c.cls.id === 'wizard' && c.level >= 2 && c.subclass?.id === 'illusion') ? ['Minor Illusion'] : []),
    ...(allCharacterClasses.some(c => c.cls.id === 'cleric' && c.level >= 1 && c.subclass?.id === 'light') ? ['Light'] : []),
    ...(allCharacterClasses.some(c => c.cls.id === 'cleric' && c.level >= 1 && c.subclass?.id === 'nature') ? ['Shillelagh', 'Thorn Whip'] : []),
    ...(allCharacterClasses.some(c => c.cls.id === 'warlock' && c.level >= 1 && c.subclass?.id === 'celestial_warlock') ? ['Light', 'Sacred Flame'] : []),
    ...(allCharacterClasses.some(c => c.cls.id === 'druid' && c.level >= 2 && c.subclass?.id === 'stars') ? ['Guidance'] : []),
    ...(allCharacterClasses.some(c => c.cls.id === 'barbarian' && c.level >= 3 && c.subclass?.id === 'giant_barb') ? ['Thaumaturgy'] : []),
    ...(allCharacterClasses.some(c => c.cls.id === 'ranger' && c.level >= 3 && c.subclass?.id === 'swarmkeeper') ? ['Mage Hand'] : []),
    ...(hasDivineSoul ? clericCantrips : []),
    ...(hasArcaneTrickster3 ? ['Mage Hand'] : []),
    ...allCharacterClasses.flatMap(c => c.cls.spellcasting?.cantripList || (
      (c.cls.id === 'fighter' && c.subclass?.id === 'eldritch_knight') || (c.cls.id === 'rogue' && c.subclass?.id === 'arcane_trickster')
        ? wizardCantrips
        : []
    )),
    ...(hasFeatActive('magic_initiate') || hasFeatActive('spell_sniper') ? wizardCantrips : [])
  ]));

  const getClassMaxSpellLevel = (cItem) => {
    const cid = cItem.cls.id;
    const cLv = cItem.level;
    if (['bard', 'cleric', 'druid', 'sorcerer', 'wizard'].includes(cid)) {
      return Math.min(9, Math.ceil(cLv / 2));
    }
    if (['paladin', 'ranger'].includes(cid)) {
      if (cLv < 2) return 0;
      return Math.min(5, Math.ceil(cLv / 4));
    }
    if (cid === 'warlock') {
      if (cLv >= 17) return 9;
      if (cLv >= 15) return 8;
      if (cLv >= 13) return 7;
      if (cLv >= 11) return 6;
      return Math.min(5, Math.ceil(cLv / 2));
    }
    if (
      (cid === 'fighter' && cLv >= 3 && cItem.subclass?.id === 'eldritch_knight') ||
      (cid === 'rogue' && cLv >= 3 && cItem.subclass?.id === 'arcane_trickster') ||
      (cid === 'homebrew' && homebrewConfig.casterType === 'third')
    ) {
      return cLv >= 19 ? 4 : cLv >= 13 ? 3 : cLv >= 7 ? 2 : 1;
    }
    if (cid === 'homebrew') {
      if (homebrewConfig.casterType === 'full' || homebrewConfig.casterType === 'pact') return Math.min(9, Math.ceil(cLv / 2));
      if (homebrewConfig.casterType === 'half') return cLv < 2 ? 0 : Math.min(5, Math.ceil(cLv / 4));
    }
    return 0;
  };

  const sorcClassItem = allCharacterClasses.find(c => c.cls.id === 'sorcerer' && c.subclass?.id === 'divine_soul');
  const divineSoulMaxLv = sorcClassItem ? getClassMaxSpellLevel(sorcClassItem) : 0;

  const combinedSpellOptions = Array.from(new Set([
    ...autoPreparedSpells,
    ...(hasDivineSoul ? clericSpells.filter(sName => (SPELLS_DB[sName]?.level || 1) <= divineSoulMaxLv) : []),
    ...allCharacterClasses.flatMap(c => {
      const clsMaxSpellLv = getClassMaxSpellLevel(c);
      if (clsMaxSpellLv <= 0) return [];
      const rawList = c.cls.spellcasting?.spellList || (
        (c.cls.id === 'fighter' && c.subclass?.id === 'eldritch_knight') || (c.cls.id === 'rogue' && c.subclass?.id === 'arcane_trickster')
          ? wizardSpells
          : []
      );
      return rawList.filter(sName => (SPELLS_DB[sName]?.level || 1) <= clsMaxSpellLv);
    }),
    ...(hasFeatActive('magic_initiate') ? wizardSpells.filter(s => SPELLS_DB[s]?.level === 1) : []),
    ...(hasFeatActive('ritual_caster') ? allRitualSpells.filter(s => (SPELLS_DB[s]?.level || 1) <= Math.ceil(totalLevel / 2)) : [])
  ]));

  const maxSpellLevelUnlocked = Math.max(
    1,
    ...Object.keys(spellSlots).map(k => parseInt(k, 10))
  );

  const toggleSpell = (spellName, type) => {
    const isCantrip = type === 'cantrip';
    const limit = isCantrip ? Math.max(2, combinedCantripQuota) : Math.max(2, maxPreparedSpells);
    const list = isCantrip ? selectedCantrips : selectedSpells;
    const setFn = isCantrip ? setSelectedCantrips : setSelectedSpells;

    if (list.includes(spellName)) {
      setFn(list.filter(s => s !== spellName));
    } else if (list.length < limit) {
      setFn([...list, spellName]);
    }
  };

  const isSubclassUnlocked = level >= (selectedClass.subclassLevel || 1);
  const classSummaryText = allCharacterClasses.map(c => `${c.cls.name_th} Lv.${c.level}`).join(' / ');
  const allKnownLanguages = [
    ...autoLanguages.map(id => LANGUAGES_DB.find(l => l.id === id)?.name_th || id),
    ...selectedLanguages.slice(0, extraLanguageQuota).map(id => LANGUAGES_DB.find(l => l.id === id)?.name_th || id),
    ...allCharacterClasses.filter(c => c.cls.secretLanguage).map(c => c.cls.secretLanguage),
    ...(getClassLv('monk') >= 13 ? ['พูดได้ทุกภาษา (Tongue of Sun & Moon)'] : []),
    ...(warlockInvocations.includes('eyes_rune_keeper') ? ['อ่านภาษาเขียนได้ทุกภาษา (Eyes of the Rune Keeper)'] : [])
  ];

  // Inventory Carrying Capacity
  const totalWeight = inventory.reduce((sum, i) => sum + (parseFloat(i.weight) || 0) * (parseInt(i.qty, 10) || 1), 0);
  const carryMultiplier = (selectedRace.id === 'human' ? 18.75 : 15) * (hasWildheartAspect('aspect_bear') ? 2 : 1);
  const maxCarryWeight = Math.round(getFinalScore('STR') * carryMultiplier);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 pb-28 font-sans selection:bg-amber-500/30 print:bg-white print:text-black print:p-0">
      
      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { background: white !important; -webkit-print-color-adjust: exact; }
          .print-hidden { display: none !important; }
          .print-border { border-color: #e2e8f0 !important; }
          .print-text-dark { color: #1e293b !important; }
          .print-bg-light { background: #f8fafc !important; }
        }
      `}} />

      {/* Header */}
      <header className="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 print-hidden">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-500 flex items-center gap-3">
            <Sparkles className="w-8 h-8" />
            สร้างตัวละคร D&D / Tool form Renji
          </h1>
          <p className="text-slate-400 text-sm mt-1">Digital Character Sheet, Multiclass & Combat Tracker (Lv.1 - Lv.20 Full Edition)</p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleSaveToLocal}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-bold shadow-lg transition-all text-sm"
          >
            <Save className="w-4 h-4" /> บันทึกตัวละคร
          </button>
          <button
            onClick={handleSaveToCloud}
            className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2.5 rounded-xl font-bold shadow-lg transition-all text-sm"
          >
            <Sparkles className="w-4 h-4" /> บันทึกขึ้น Cloud
          </button>
          <button
            onClick={() => setShowCharModal(true)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl font-bold shadow-lg transition-all text-sm"
          >
            <FolderOpen className="w-4 h-4" /> ตัวละครของฉัน ({savedCharacters.length + cloudCharacters.length})
          </button>
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2.5 rounded-xl font-semibold transition-all text-sm"
          >
            <Download className="w-4 h-4 text-amber-400" /> Export JSON
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2.5 rounded-xl font-semibold transition-all text-sm"
          >
            <Printer className="w-4 h-4 text-sky-400" /> พิมพ์ PDF
          </button>
        </div>
      </header>

      {/* Status Toast */}
      {statusMsg && (
        <div className="max-w-6xl mx-auto mb-4 bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 px-4 py-3 rounded-xl flex items-center justify-between text-sm font-medium shadow-lg print-hidden">
          <span>{statusMsg}</span>
          <button onClick={() => setStatusMsg(null)} className="text-xs underline ml-4">ปิด</button>
        </div>
      )}

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: BUILDER & TABS */}
        <div className="lg:col-span-8 space-y-6 print-hidden">
          
          {/* Character Identity & Level Bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 shadow-xl">
            <label className="relative w-20 h-20 rounded-2xl bg-slate-800 border-2 border-dashed border-amber-500/50 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:border-amber-400 transition-all shrink-0 group">
              {portraitUrl ? (
                <img src={portraitUrl} alt="Portrait" className="w-full h-full object-cover" />
              ) : (
                <>
                  <Camera className="w-6 h-6 text-amber-500/70 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-slate-400 mt-1">อัปโหลดรูป</span>
                </>
              )}
              <input type="file" accept="image/*" onChange={handlePortraitUpload} className="hidden" />
            </label>

            <div className="flex-1 w-full space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label className="text-xs font-bold text-amber-400 uppercase tracking-wider">ชื่อตัวละคร (Character Name)</label>
                <span className="text-xs text-slate-400 font-medium">{classSummaryText}</span>
              </div>
              <input
                type="text"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
                placeholder="ตั้งชื่อผู้ผจญภัยของคุณ..."
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-lg font-bold text-white outline-none transition-all"
              />
            </div>

            {/* Level Selector (Lv. 1 - 20 + Multiclass Total) */}
            <div className="w-full md:w-auto bg-slate-950/90 border border-amber-500/30 rounded-xl p-3 flex flex-col items-center shrink-0">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1.5">
                <ChevronUp className="w-3.5 h-3.5" /> เลเวลรวม: Lv.{totalLevel} / 20 {multiclasses.length > 0 && `(Multiclass)`}
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setLevel(l => Math.max(1, l - 1))}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm"
                >
                  -
                </button>
                <select
                  value={level}
                  onChange={(e) => setLevel(Math.min(20 - secondaryTotalLevels, parseInt(e.target.value, 10)))}
                  className="bg-amber-500 text-slate-950 font-black text-sm px-3 py-1.5 rounded-lg outline-none cursor-pointer shadow-md"
                >
                  {Array.from({ length: Math.max(1, 20 - secondaryTotalLevels) }, (_, i) => i + 1).map(lv => (
                    <option key={lv} value={lv}>{selectedClass.name_th} Lv.{lv}</option>
                  ))}
                </select>
                <button
                  onClick={() => setLevel(l => Math.min(20 - secondaryTotalLevels, l + 1))}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm"
                >
                  +
                </button>
              </div>
              <div className="flex items-center gap-1.5 mt-1.5 flex-wrap justify-center">
                {[1, 5, 11, 17, 20].map(presetLv => (
                  <button
                    key={presetLv}
                    onClick={() => {
                      setMulticlasses([]);
                      setLevel(presetLv);
                    }}
                    className={`text-[10px] px-1.5 py-0.5 rounded font-bold transition-all ${totalLevel === presetLv && multiclasses.length === 0 ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                  >
                    Lv.{presetLv}
                  </button>
                ))}
                <span className="text-[10px] text-slate-400 ml-1">Prof: <strong className="text-emerald-400">+{profBonus}</strong></span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap bg-slate-900 rounded-xl p-1 shadow-lg border border-slate-800 gap-1">
            {[
              { id: 'race', label: 'เผ่าพันธุ์', icon: <User className="w-4 h-4" /> },
              { id: 'class', label: `อาชีพ & Multiclass`, icon: <Swords className="w-4 h-4" /> },
              { id: 'bg', label: 'ภูมิหลัง', icon: <Book className="w-4 h-4" /> },
              { id: 'stats', label: 'สเตตัส & Feats', icon: <Activity className="w-4 h-4" /> },
              { id: 'skills', label: 'ทักษะ & ภาษา', icon: <Globe className="w-4 h-4" /> },
              ...(hasAnySpellcasting ? [{ id: 'spells', label: 'สมุดเวท', icon: <Wand2 className="w-4 h-4" /> }] : []),
              { id: 'equip', label: 'อุปกรณ์ & สวมใส่', icon: <Backpack className="w-4 h-4" /> },
              { id: 'bio', label: 'ประวัติ & นิสัย', icon: <Feather className="w-4 h-4 text-amber-400" /> },
              { id: 'combat', label: 'ต่อสู้ (Combat)', icon: <Flame className="w-4 h-4 text-rose-400" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[100px] flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg font-medium text-xs transition-all ${
                  activeTab === tab.id ? 'bg-amber-500 text-slate-950 shadow-md font-bold' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {tab.icon} <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Main Tab Content Box (Modularized 9 Tabs) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            {activeTab === 'race' && (
              <RaceTab 
                RACES={RACES}
                selectedRace={selectedRace}
                handleSelectRace={handleSelectRace}
                selectedSubrace={selectedSubrace}
                setSelectedSubrace={setSelectedSubrace}
                allRaceTraits={allRaceTraits}
              />
            )}

            {activeTab === 'class' && (
              <ClassTab
                level={level}
                totalLevel={totalLevel}
                classSummaryText={classSummaryText}
                handleAddMulticlass={handleAddMulticlass}
                CLASSES={CLASSES}
                selectedClass={selectedClass}
                handleSelectClass={handleSelectClass}
                isSubclassUnlocked={isSubclassUnlocked}
                selectedSubclass={selectedSubclass}
                setSelectedSubclass={setSelectedSubclass}
                fightingStyles={fightingStyles}
                setFightingStyles={setFightingStyles}
                warlockInvocations={warlockInvocations}
                setWarlockInvocations={setWarlockInvocations}
                warlockPactBoon={warlockPactBoon}
                setWarlockPactBoon={setWarlockPactBoon}
                sorcererMetamagic={sorcererMetamagic}
                setSorcererMetamagic={setSorcererMetamagic}
                rangerFavoredEnemy={rangerFavoredEnemy}
                setRangerFavoredEnemy={setRangerFavoredEnemy}
                rangerNaturalExplorer={rangerNaturalExplorer}
                setRangerNaturalExplorer={setRangerNaturalExplorer}
                bardExpertise={bardExpertise}
                setBardExpertise={setBardExpertise}
                druidWildShape={druidWildShape}
                setDruidWildShape={setDruidWildShape}
                rogueExpertise={rogueExpertise}
                setRogueExpertise={setRogueExpertise}
                battleMasterManeuvers={battleMasterManeuvers}
                setBattleMasterManeuvers={setBattleMasterManeuvers}
                championExtraStyle={championExtraStyle}
                setChampionExtraStyle={setChampionExtraStyle}
                wildheartBestialHeart={wildheartBestialHeart}
                setWildheartBestialHeart={setWildheartBestialHeart}
                wildheartAnimalAspect={wildheartAnimalAspect}
                setWildheartAnimalAspect={setWildheartAnimalAspect}
                wildheartSecondAspect={wildheartSecondAspect}
                setWildheartSecondAspect={setWildheartSecondAspect}
                monkElementsDisciplines={monkElementsDisciplines}
                setMonkElementsDisciplines={setMonkElementsDisciplines}
                hunterPreyChoice={hunterPreyChoice}
                setHunterPreyChoice={setHunterPreyChoice}
                hunterDefenseChoice={hunterDefenseChoice}
                setHunterDefenseChoice={setHunterDefenseChoice}
                hunterMultiattackChoice={hunterMultiattackChoice}
                setHunterMultiattackChoice={setHunterMultiattackChoice}
                beastMasterCompanion={beastMasterCompanion}
                setBeastMasterCompanion={setBeastMasterCompanion}
                landCircleTerrain={landCircleTerrain}
                setLandCircleTerrain={setLandCircleTerrain}
                homebrewConfig={homebrewConfig}
                setHomebrewConfig={setHomebrewConfig}
                profBonus={profBonus}
                chaMod={getModifierNum(getFinalScore('CHA'))}
                rollDiceFormula={rollDiceFormula}
                setStatusMsg={setStatusMsg}
                selectedSkills={selectedSkills}
                selectedBg={selectedBg}
                SKILLS_META={SKILLS_META}
                multiclasses={multiclasses}
                handleUpdateMulticlass={handleUpdateMulticlass}
                handleRemoveMulticlass={handleRemoveMulticlass}
                allCharacterClasses={allCharacterClasses}
              />
            )}

            {activeTab === 'bg' && (
              <BackgroundTab
                BACKGROUNDS={BACKGROUNDS}
                selectedBg={selectedBg}
                setSelectedBg={setSelectedBg}
                SKILLS_META={SKILLS_META}
              />
            )}

            {activeTab === 'stats' && (
              <StatsFeatsTab
                STATS_INFO={STATS_INFO}
                STANDARD_ARRAY={STANDARD_ARRAY}
                scores={scores}
                handleScoreChange={handleScoreChange}
                bonus2={bonus2}
                handleBonus2Change={handleBonus2Change}
                bonus1={bonus1}
                handleBonus1Change={handleBonus1Change}
                getFinalScore={getFinalScore}
                getModifierNum={getModifierNum}
                formatMod={formatMod}
                rollD20Check={rollD20Check}
                unlockedTierLevels={unlockedTierLevels}
                unlockedFeatSlots={unlockedFeatSlots}
                getFeatSlotChoice={getFeatSlotChoice}
                allCharacterClasses={allCharacterClasses}
                totalLevel={totalLevel}
                FEATS_LIST={FEATS_LIST}
                featSearch={featSearch}
                setFeatSearch={setFeatSearch}
                asiTiers={asiTiers}
                setAsiTiers={setAsiTiers}
              />
            )}

            {activeTab === 'skills' && (
              <SkillsTab
                selectedSkills={selectedSkills}
                totalSkillQuota={totalSkillQuota}
                SKILLS_META={SKILLS_META}
                selectedBg={selectedBg}
                selectedClass={selectedClass}
                hasFeatActive={hasFeatActive}
                selectedRace={selectedRace}
                getSkillBonusNum={getSkillBonusNum}
                toggleSkill={toggleSkill}
                rollD20Check={rollD20Check}
                formatMod={formatMod}
                autoLanguages={autoLanguages}
                selectedLanguages={selectedLanguages}
                extraLanguageQuota={extraLanguageQuota}
                LANGUAGES_DB={LANGUAGES_DB}
                toggleLanguage={toggleLanguage}
              />
            )}

            {activeTab === 'spells' && hasAnySpellcasting && (
              <SpellsTab
                maxSpellLevelUnlocked={maxSpellLevelUnlocked}
                spellSlots={spellSlots}
                setSpellSlots={setSpellSlots}
                combinedCantripOptions={combinedCantripOptions}
                selectedCantrips={selectedCantrips}
                combinedCantripQuota={combinedCantripQuota}
                SPELLS_DB={SPELLS_DB}
                toggleSpell={toggleSpell}
                rollDiceFormula={rollDiceFormula}
                combinedSpellOptions={combinedSpellOptions}
                selectedSpells={selectedSpells}
                autoPreparedSpells={autoPreparedSpells}
                maxPreparedSpells={maxPreparedSpells}
                setStatusMsg={setStatusMsg}
              />
            )}

            {activeTab === 'equip' && (
              <InventoryTab
                totalWeight={totalWeight}
                maxCarryWeight={maxCarryWeight}
                attunedCount={attunedCount}
                wealth={wealth}
                setWealth={setWealth}
                newItemName={newItemName}
                setNewItemName={setNewItemName}
                newItemType={newItemType}
                setNewItemType={setNewItemType}
                newItemWeight={newItemWeight}
                setNewItemWeight={setNewItemWeight}
                newItemQty={newItemQty}
                setNewItemQty={setNewItemQty}
                newItemAC={newItemAC}
                setNewItemAC={setNewItemAC}
                newItemDesc={newItemDesc}
                setNewItemDesc={setNewItemDesc}
                inventory={inventory}
                setInventory={setInventory}
                setStatusMsg={setStatusMsg}
                STATS_INFO={STATS_INFO}
                SKILLS_META={SKILLS_META}
                SPELLS_DB={SPELLS_DB}
              />
            )}

            {activeTab === 'bio' && (
              <BioTab
                ALIGNMENTS_LIST={ALIGNMENTS_LIST}
                alignment={alignment}
                setAlignment={setAlignment}
                personalityTraits={personalityTraits}
                setPersonalityTraits={setPersonalityTraits}
                ideals={ideals}
                setIdeals={setIdeals}
                bonds={bonds}
                setBonds={setBonds}
                flaws={flaws}
                setFlaws={setFlaws}
                campaignNotes={campaignNotes}
                setCampaignNotes={setCampaignNotes}
              />
            )}

            {activeTab === 'combat' && (
              <CombatTab
                profBonus={profBonus}
                handleShortRest={handleShortRest}
                handleLongRest={handleLongRest}
                hitDiceRemaining={hitDiceRemaining}
                totalLevel={totalLevel}
                hitDie={hitDie}
                currentHP={currentHP}
                maxHP={maxHP}
                tempHP={tempHP}
                hpInput={hpInput}
                setHpInput={setHpInput}
                handleDamage={handleDamage}
                handleHeal={handleHeal}
                setTempHP={setTempHP}
                handleSpendHitDie={handleSpendHitDie}
                deathSaves={deathSaves}
                setDeathSaves={setDeathSaves}
                rollDiceFormula={rollDiceFormula}
                displayAC={displayAC}
                setCustomAC={setCustomAC}
                rollD20Check={rollD20Check}
                initModNum={initModNum}
                formatMod={formatMod}
                characterSpeed={characterSpeed}
                CONDITIONS_LIST={CONDITIONS_LIST}
                activeConditions={activeConditions}
                setActiveConditions={setActiveConditions}
                customResources={customResources}
                setCustomResources={setCustomResources}
                newResName={newResName}
                setNewResName={setNewResName}
                newResMax={newResMax}
                setNewResMax={setNewResMax}
                newResReset={newResReset}
                combatSubTab={combatSubTab}
                setCombatSubTab={setCombatSubTab}
                customActions={customActions}
                setCustomActions={setCustomActions}
                newActName={newActName}
                setNewActName={setNewActName}
                newActDice={newActDice}
                setNewActDice={setNewActDice}
                newActDesc={newActDesc}
                setNewActDesc={setNewActDesc}
              />
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR: LIVE CHARACTER SHEET SUMMARY */}
        <div className="lg:col-span-4 space-y-6">
          <SidebarSummary
            portraitUrl={portraitUrl}
            characterName={characterName}
            totalLevel={totalLevel}
            selectedSubrace={selectedSubrace}
            selectedRace={selectedRace}
            classSummaryText={classSummaryText}
            selectedBg={selectedBg}
            alignment={alignment}
            rollMode={rollMode}
            setRollMode={setRollMode}
            currentHP={currentHP}
            maxHP={maxHP}
            displayAC={displayAC}
            characterSpeed={characterSpeed}
            STATS_INFO={STATS_INFO}
            getFinalScore={getFinalScore}
            getModifierNum={getModifierNum}
            rollD20Check={rollD20Check}
            formatMod={formatMod}
            profBonus={profBonus}
            unlockedTierLevels={unlockedTierLevels}
                unlockedFeatSlots={unlockedFeatSlots}
                getFeatSlotChoice={getFeatSlotChoice}
                allCharacterClasses={allCharacterClasses}
            asiTiers={asiTiers}
            FEATS_LIST={FEATS_LIST}
            allKnownLanguages={allKnownLanguages}
          />
        </div>
      </main>

      {/* FLOATING DICE ROLLER TOAST (Realtime Party Broadcast - History Stack) */}
      {rollHistory.length > 0 && (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 w-80 pointer-events-none print-hidden">
          {rollHistory.slice().reverse().map((roll, idx) => (
            <div key={roll.id + '-' + idx} className="bg-slate-900/95 border-2 border-amber-500 rounded-2xl p-3 shadow-2xl animate-in fade-in pointer-events-auto">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5 leading-tight">
                  <Dice5 className="w-3.5 h-3.5 shrink-0" /> {roll.playerName ? `${roll.playerName}: ` : ''}{roll.label}
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <div className="text-[11px] text-slate-400">
                  เต๋า: [{roll.rolls.join(', ')}] {roll.mod !== 0 ? (roll.mod > 0 ? `+ ${roll.mod}` : `- ${Math.abs(roll.mod)}`) : ''}
                  {roll.mode === 'adv' && ' (Adv)'}
                  {roll.mode === 'disadv' && ' (Dis)'}
                </div>
                <div className={`text-2xl font-black ${roll.isCrit ? 'text-amber-400' : roll.isFumble ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {roll.total}
                </div>
              </div>
              {roll.isCrit && <div className="text-[10px] font-bold text-amber-300 mt-0.5">🌟 CRITICAL HIT!</div>}
              {roll.isFumble && <div className="text-[10px] font-bold text-rose-400 mt-0.5">💀 CRITICAL MISS!</div>}
            </div>
          ))}
          <div className="flex justify-end pointer-events-auto mt-1">
            <button onClick={() => setRollHistory([])} className="bg-slate-900/90 hover:bg-rose-500/30 text-slate-300 hover:text-rose-300 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-slate-700 hover:border-rose-500/50 transition-all shadow-lg backdrop-blur-sm flex items-center gap-1">
              <Trash2 className="w-3 h-3" /> ล้างประวัติลูกเต๋า
            </button>
          </div>
        </div>
      )}

      {/* CHARACTER MANAGER MODAL (Local & Supabase Cloud) */}
      {showCharModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 print-hidden">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                <FolderOpen className="w-5 h-5" /> จัดการตัวละครของฉัน
              </h3>
              <button onClick={() => setShowCharModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setModalTab('local')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  modalTab === 'local' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                💾 ในเครื่อง (Local: {savedCharacters.length})
              </button>
              <button
                onClick={() => { setModalTab('cloud'); fetchCloudCharacters(); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  modalTab === 'cloud' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                ☁️ บนคลาวด์ (Supabase: {cloudCharacters.length})
              </button>
            </div>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {modalTab === 'local' ? (
                savedCharacters.length === 0 ? (
                  <div className="text-xs text-slate-400 text-center py-6 bg-slate-950 rounded-xl border border-slate-800">
                    ยังไม่มีตัวละครที่บันทึกไว้ในเครื่อง
                  </div>
                ) : (
                  savedCharacters.map(ch => (
                    <div key={ch.id} className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-sm text-white">{ch.name}</div>
                        <div className="text-xs text-slate-400">บันทึกเมื่อ: {ch.updatedAt}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleLoadCharacter(ch)}
                          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs"
                        >
                          โหลด
                        </button>
                        <button
                          onClick={() => {
                            const next = savedCharacters.filter(x => x.id !== ch.id);
                            setSavedCharacters(next);
                            localStorage.setItem('dnd_renji_saved_chars_v1', JSON.stringify(next));
                          }}
                          className="text-rose-400 hover:bg-rose-500/20 p-2 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )
              ) : (
                cloudCharacters.length === 0 ? (
                  <div className="text-xs text-slate-400 text-center py-6 bg-slate-950 rounded-xl border border-sky-900/30">
                    ยังไม่มีตัวละครที่บันทึกไว้บน Cloud
                  </div>
                ) : (
                  cloudCharacters.map(ch => (
                    <div key={ch.id} className="bg-slate-950 border border-sky-800/50 rounded-xl p-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-sm text-sky-100">{ch.name} <span className="text-xs text-amber-400">(Lv.{ch.level || 1})</span></div>
                        <div className="text-xs text-slate-400">อัปเดต: {new Date(ch.updated_at).toLocaleString('th-TH')}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleLoadCharacter(ch.sheet_data)}
                          className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs"
                        >
                          โหลด
                        </button>
                        <button
                          onClick={() => handleDeleteCloud(ch.id)}
                          className="text-rose-400 hover:bg-rose-500/20 p-2 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )
              )}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <label className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer">
                <Upload className="w-4 h-4 text-emerald-400" /> อัปโหลดไฟล์ .JSON
                <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
              </label>
              <button
                onClick={() => setShowCharModal(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-xs font-bold"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
