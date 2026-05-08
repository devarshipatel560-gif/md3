// Heart Embryology — 50 Vignette-style MCQs
// Drop-in replacement for the existing `baseMcqs` and `importedMcqs` arrays.
// Replaces all ~290 recall questions with 50 clinically framed, board-style items.
//
// Schema (extends the existing app's MCQ shape):
//   {
//     id: string,
//     topic: string,
//     difficulty: 'Easy' | 'Medium' | 'Hard',
//     style: 'vignette',
//     q: string,                                    // clinical stem
//     options: string[],                            // 4–5 options
//     answer: number,                               // index of correct option
//     explanation: {
//       correct: string,                            // why correct + teaching point
//       distractors: { [index: number]: string }    // why each wrong option is wrong
//     }
//   }
//
// The renderer should preserve the existing string-explanation path for backwards
// compatibility with any other questions; if `explanation` is an object, render
// the per-option breakdown.

const vignetteMcqs = [
  // ─── Big Picture & Timing ──────────────────────────────────────────────
  {
    id: 'v1',
    topic: 'Big Picture',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'A pregnant woman in the third week of gestation is exposed to a known cardiac teratogen. A pediatric cardiologist warns that the heart is uniquely vulnerable to injury during this window. What is the embryologic basis for this vulnerability?',
    options: [
      'The heart is the first functional organ, with primitive contractions beginning around day 22',
      'Cardiac neural crest cells do not arrive at the heart until week 8',
      'The conducting system forms only at term and depends on third-trimester nutrition',
      'Simple diffusion is sufficient through week 8, after which abrupt cardiogenesis begins',
      'The heart tube cannot fuse until week 6'
    ],
    answer: 0,
    explanation: {
      correct: 'Heart development begins day 22–23 (week 3). Diffusion is no longer sufficient to meet the embryo\'s metabolic needs by this point, so the heart must function early — making the entire third week a critical period for teratogen exposure.',
      distractors: {
        1: 'Cardiac neural crest cells migrate during weeks 4–5 (not week 8) and contribute to the outflow tract.',
        2: 'The conducting system actually develops in parallel with chamber septation, well before term.',
        3: 'The opposite is true — diffusion is sufficient ONLY until week 3, after which heart function is required.',
        4: 'Endocardial tubes fuse during week 3 as part of lateral folding, not week 6.'
      }
    }
  },
  {
    id: 'v2',
    topic: 'Big Picture',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A 23-day human embryo is exposed to a chemical that selectively destroys splanchnopleuric (visceral) lateral plate mesoderm. Which structure is most likely to fail to develop normally?',
    options: [
      'Notochord',
      'Primitive heart tube',
      'Spinal cord',
      'Limb skeleton',
      'Pancreatic islets'
    ],
    answer: 1,
    explanation: {
      correct: 'The heart-forming region lies within the splanchnopleuric (visceral) lateral plate mesoderm. Cardiac neural crest cells (between otic vesicles and 3rd pair of somites) contribute too, but the primary tissue source is splanchnic mesoderm.',
      distractors: {
        0: 'The notochord originates from axial mesoderm (prechordal plate / epiblast), not lateral plate.',
        2: 'The spinal cord forms from the neural tube, which is ectodermal in origin.',
        3: 'Limb skeleton arises from somatopleuric (parietal) lateral plate mesoderm — the layer adjacent to ectoderm, not viscera.',
        4: 'Pancreatic islets derive from foregut endoderm, not mesoderm.'
      }
    }
  },

  // ─── Molecular Regulation ──────────────────────────────────────────────
  {
    id: 'v3',
    topic: 'Molecular Regulation',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A homozygous NKX2.5-knockout mouse line dies in utero with severe cardiac defects, including failure of looping and septation. Which signaling sequence normally activates NKX2.5 in the heart-forming region?',
    options: [
      'Notochord-derived sonic hedgehog activates NKX2.5 in the floor plate',
      'Anterior endoderm secretes BMP 2/4 along with WNT inhibitors, activating NKX2.5 in splanchnic mesoderm',
      'Posterior endoderm-derived WNT activates NKX2.5 in paraxial mesoderm',
      'Surface ectoderm-derived FGF8 activates NKX2.5 in cardiac neural crest',
      'Endocardial VEGF activates NKX2.5 in the epicardium'
    ],
    answer: 1,
    explanation: {
      correct: 'Anterior endoderm secretes BMP 2/4 plus WNT inhibitors, which together activate NKX2.5 in splanchnic mesoderm. NKX2.5 then drives heart formation, septation, and conducting system development. Memory trick: "Number-one Kardiac Xpression."',
      distractors: {
        0: 'Sonic hedgehog from the notochord patterns the ventral neural tube (floor plate), not the heart.',
        2: 'WNT signaling actually inhibits cardiac fate in the anterior region — it must be antagonized for cardiogenesis.',
        3: 'FGF8 affects pharyngeal arch and limb development; it does not directly activate NKX2.5.',
        4: 'Although VEGF and the epicardium matter for vasculogenesis, this is not the NKX2.5 activation pathway.'
      }
    }
  },
  {
    id: 'v4',
    topic: 'Molecular Regulation',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'In an experimental model, a researcher applies recombinant WNT3a directly to the anterior splanchnic mesoderm of a developing embryo. The expected effect on cardiac differentiation in this region is:',
    options: [
      'Accelerated cardiac differentiation via NKX2.5 induction',
      'Inhibition of cardiac differentiation',
      'Selective formation of conducting tissue',
      'Premature cardiac looping',
      'Formation of a duplicate heart tube'
    ],
    answer: 1,
    explanation: {
      correct: 'WNT signaling must be INHIBITED in the anterior region for cardiac differentiation to proceed. Adding active WNT directly suppresses the cardiac program — that is why anterior endoderm secretes WNT inhibitors alongside BMP 2/4.',
      distractors: {
        0: 'WNT does not activate NKX2.5; it suppresses cardiac fate.',
        2: 'Conducting tissue arises later from specified myocardium and is not produced by this manipulation.',
        3: 'Looping requires intact tube formation and is not driven by ectopic WNT.',
        4: 'Ectopic heart tubes are produced by different experimental manipulations (e.g., dual-axis induction), not WNT alone.'
      }
    }
  },

  // ─── Tube Formation & Folding ──────────────────────────────────────────
  {
    id: 'v5',
    topic: 'Tube Formation',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'An embryo with a severe defect in lateral folding is most likely to demonstrate which cardiac abnormality?',
    options: [
      'Cardia bifida (failure of fusion of the two endocardial tubes)',
      'Persistent truncus arteriosus',
      'Tricuspid atresia',
      'Ebstein anomaly',
      'Coarctation of the aorta'
    ],
    answer: 0,
    explanation: {
      correct: 'Lateral folding brings the two endocardial tubes from opposite sides of the embryo together so they can fuse cranio-caudally into a single heart tube. Failure of lateral folding leaves the tubes unfused → cardia bifida (two separate tubular hearts).',
      distractors: {
        1: 'Persistent truncus arteriosus results from failed neural crest migration (no aorticopulmonary septum), not folding failure.',
        2: 'Tricuspid atresia is a chamber/AV-canal partitioning issue, not a tube fusion problem.',
        3: 'Ebstein anomaly is apical displacement of tricuspid leaflets, classically associated with maternal lithium.',
        4: 'Coarctation arises from defective aortic arch development, well after tube fusion.'
      }
    }
  },
  {
    id: 'v6',
    topic: 'Tube Formation',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'During cephalic folding, the heart is initially suspended within the pericardial cavity by a midline membrane that subsequently degenerates. The space left by this degeneration becomes which adult anatomical landmark?',
    options: [
      'Oblique pericardial sinus',
      'Transverse pericardial sinus',
      'Coronary sinus',
      'Foramen of Monro',
      'Aorticopulmonary window'
    ],
    answer: 1,
    explanation: {
      correct: 'Cephalic folding suspends the heart by the dorsal mesocardium, which then degenerates. The resulting space becomes the transverse sinus of the pericardium — the passage you can run a finger through between the great arteries (anterior) and great veins (posterior).',
      distractors: {
        0: 'The oblique sinus is a cul-de-sac behind the left atrium, related to the line of pulmonary vein attachments — a different structure.',
        2: 'The coronary sinus is a venous channel derived from the left horn of the sinus venosus.',
        3: 'The foramen of Monro is in the brain, connecting lateral and third ventricles.',
        4: 'An aorticopulmonary window is a pathological fenestration between aorta and pulmonary trunk, not a normal landmark.'
      }
    }
  },
  {
    id: 'v7',
    topic: 'Tube Formation',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'The three pairs of veins that drain into the caudal end of the developing heart tube and are anchored in place by the septum transversum are the:',
    options: [
      'Vitelline, umbilical, and cardinal veins',
      'Pulmonary, coronary, and azygos veins',
      'Aortic, pharyngeal, and anterior cardinal veins',
      'SVC, IVC, and coronary sinus',
      'Hepatic, portal, and renal veins'
    ],
    answer: 0,
    explanation: {
      correct: 'Three pairs of veins enter caudally: vitelline (yolk sac), umbilical (placenta), and cardinal (embryo body wall). They are fixed by the septum transversum, while the two dorsal aortae leave cranially fixed by the 1st aortic arch.',
      distractors: {
        1: 'These are adult vessels, not embryologic inflows.',
        2: 'Aortic arches are arteries; the cardinals are correct but the others are not.',
        3: 'These are adult-named structures, not the embryologic veins.',
        4: 'These are adult abdominal veins, not the embryologic cardiac inflow.'
      }
    }
  },

  // ─── Layers ────────────────────────────────────────────────────────────
  {
    id: 'v8',
    topic: 'Layers',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'Cardiac jelly — an extracellular matrix essential for endocardial cushion formation — is secreted by which layer of the developing heart?',
    options: [
      'Endocardium',
      'Myocardium',
      'Epicardium',
      'Pericardium',
      'Septum transversum'
    ],
    answer: 1,
    explanation: {
      correct: 'The myocardium (middle layer) secretes cardiac jelly into the lumen-side extracellular space. Cells then invade this matrix to form the endocardial cushions, which are essential for AV canal partitioning, valve formation, and the membranous IV septum.',
      distractors: {
        0: 'The endocardium lines the lumen and provides cells that invade the jelly, but it does not secrete it.',
        2: 'The epicardium is the outermost cardiac layer (from coelomic mesoderm near the liver) and arrives later.',
        3: 'The pericardium is the surrounding sac, not part of the three-layer heart wall.',
        4: 'Septum transversum becomes the central tendon of the diaphragm, not a heart layer.'
      }
    }
  },

  // ─── Primitive Chambers ────────────────────────────────────────────────
  {
    id: 'v9',
    topic: 'Primitive Chambers',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'During week 4, a single tubular heart shows five primitive chambers along its length. Listed from cranial (outflow) to caudal (inflow), the correct sequence is:',
    options: [
      'Sinus venosus → primitive atrium → primitive ventricle → bulbus cordis → truncus arteriosus',
      'Truncus arteriosus → bulbus cordis → primitive ventricle → primitive atrium → sinus venosus',
      'Bulbus cordis → truncus arteriosus → primitive ventricle → sinus venosus → primitive atrium',
      'Primitive atrium → sinus venosus → primitive ventricle → bulbus cordis → truncus arteriosus',
      'Truncus arteriosus → primitive ventricle → bulbus cordis → primitive atrium → sinus venosus'
    ],
    answer: 1,
    explanation: {
      correct: 'Cranial → caudal (also outflow → inflow): TA → BC → PV → PA → SV. Mnemonic: "Tall Boys Play Pool Seriously" (Truncus, Bulbus, Primitive ventricle, Primitive atrium, Sinus venosus).',
      distractors: {
        0: 'This is the reverse order (caudal → cranial).',
        2: 'BC and TA are in the right relationship, but the rest is jumbled.',
        3: 'Primitive atrium is caudal to the ventricle, not cranial to the sinus venosus.',
        4: 'Bulbus cordis sits between truncus and ventricle, not between ventricle and atrium.'
      }
    }
  },
  {
    id: 'v10',
    topic: 'Primitive Chambers',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'The bulbus cordis ultimately gives rise to which set of adult structures?',
    options: [
      'Smooth (outflow) part of the right ventricle (conus arteriosus), plus contributions to the proximal aorta and pulmonary trunk',
      'Trabeculated part of the left ventricle',
      'Smooth posterior wall of the right atrium',
      'Coronary sinus',
      'Superior vena cava'
    ],
    answer: 0,
    explanation: {
      correct: 'The bulbus cordis becomes the smooth outflow part of the RV (the conus arteriosus / infundibulum). Its distal portion, together with the truncus arteriosus, contributes to the proximal great arteries.',
      distractors: {
        1: 'The trabeculated LV (and RV body) come from the primitive ventricle, not bulbus cordis.',
        2: 'Smooth RA arises from incorporation of the right horn of sinus venosus (sinus venarum).',
        3: 'Coronary sinus is the derivative of the LEFT horn of sinus venosus.',
        4: 'SVC derives from the right common cardinal + right anterior cardinal veins.'
      }
    }
  },
  {
    id: 'v11',
    topic: 'Primitive Chambers',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'The trabeculated (rough) parts of both atria — including the auricles and pectinate muscles — derive from which primitive chamber?',
    options: [
      'Primitive atrium',
      'Right horn of sinus venosus',
      'Left horn of sinus venosus',
      'Primordial pulmonary vein',
      'Bulbus cordis'
    ],
    answer: 0,
    explanation: {
      correct: 'The primitive atrium gives rise to the trabeculated parts of both atria, including the auricles. The smooth-walled posterior portions come from elsewhere (right horn of SV → smooth RA; absorbed pulmonary vein → smooth LA).',
      distractors: {
        1: 'Right horn of sinus venosus → smooth RA (sinus venarum), not trabeculated atrium.',
        2: 'Left horn of sinus venosus → coronary sinus.',
        3: 'Primordial pulmonary vein and its branches are absorbed into the smooth posterior wall of the LA.',
        4: 'Bulbus cordis becomes the conus and contributes to great vessel proximal segments.'
      }
    }
  },
  {
    id: 'v12',
    topic: 'Primitive Chambers',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'The smooth-walled posterior portion of the left atrium — into which the four pulmonary veins drain — derives from:',
    options: [
      'Absorption of the primordial pulmonary vein and its first four branches into the LA wall',
      'Left horn of the sinus venosus',
      'Right horn of the sinus venosus',
      'Septum primum',
      'Bulbus cordis'
    ],
    answer: 0,
    explanation: {
      correct: 'A single primordial pulmonary vein outgrows from the LA, divides into four branches, and is then progressively absorbed into the LA wall — explaining why four pulmonary veins enter directly. Anomalous incorporation can produce TAPVR.',
      distractors: {
        1: 'Left horn of SV → coronary sinus.',
        2: 'Right horn of SV → smooth RA, not LA.',
        3: 'Septum primum → floor of fossa ovalis after birth.',
        4: 'Bulbus cordis contributes to RV outflow and great vessels, not the LA wall.'
      }
    }
  },

  // ─── Cardiac Looping ───────────────────────────────────────────────────
  {
    id: 'v13',
    topic: 'Looping',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A 30-year-old asymptomatic woman has a chest X-ray for a workplace screening. The cardiac apex points to the right and heart sounds are loudest along the right sternal border. Abdominal organs are in their usual positions. The most likely embryologic mechanism is:',
    options: [
      'Failure of cardiac neural crest migration',
      'L-loop (sinistro/levo) instead of normal D-loop during cardiac looping',
      'Failure of fusion of endocardial cushions',
      'Persistence of the left common cardinal vein',
      'Failure of foramen ovale closure at birth'
    ],
    answer: 1,
    explanation: {
      correct: 'Normal cardiac looping is dextro (D-loop) — the bulboventricular loop bends to the right. L-looping (sinistro / levo) reverses this, producing dextrocardia. Isolated dextrocardia (without situs inversus) is what this case describes.',
      distractors: {
        0: 'Neural crest migration failure causes outflow tract anomalies (PTA, TGA, TOF), not cardiac position reversal.',
        2: 'Cushion fusion failure produces AV septal defects (e.g., trisomy 21), not dextrocardia.',
        3: 'A persistent left SVC drains into the coronary sinus; it does not reverse cardiac position.',
        4: 'Failure of foramen ovale closure produces a PFO, which is asymptomatic and does not affect cardiac position.'
      }
    }
  },
  {
    id: 'v14',
    topic: 'Looping',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'Cardiac looping (formation of the bulboventricular loop) occurs primarily during which gestational period?',
    options: [
      'Days 14–21 (week 2)',
      'Days 22–23',
      'Days 23–28 (week 4)',
      'Week 8',
      'Week 12'
    ],
    answer: 2,
    explanation: {
      correct: 'Looping takes place during week 4 (days 23–28). The first cardiac contractions begin slightly earlier (day 22–23) but the looping itself is a week-4 event.',
      distractors: {
        0: 'Week 2 is the bilaminar disc stage — the heart-forming region exists but no tube has formed.',
        1: 'Days 22–23 mark the start of contractions and tube fusion, not looping.',
        3: 'Septation events dominate week 5–8; looping is already complete.',
        4: 'Far too late — by week 12 most major cardiac morphogenesis is done.'
      }
    }
  },
  {
    id: 'v15',
    topic: 'Looping',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A neonate has dextrocardia with situs inversus, and over time develops chronic sinusitis, recurrent respiratory infections, and infertility (Kartagener syndrome). The cardiac and visceral defects share which underlying mechanism?',
    options: [
      'Defective cardiac neural crest migration',
      'Defective ciliary dynein, causing failure to establish left-right asymmetry from the embryonic node',
      'Failure of endocardial cushion fusion',
      'Maternal lithium exposure',
      'NKX2.5 mutation'
    ],
    answer: 1,
    explanation: {
      correct: 'Primary ciliary dyskinesia (Kartagener syndrome) is caused by defective dynein arms in cilia. Nodal cilia normally drive a leftward flow of morphogens that establishes left-right asymmetry; without it, laterality is randomized — about 50% of affected patients end up with situs inversus. Respiratory cilia fail in parallel, hence the sinusitis/bronchiectasis and infertility (sperm flagellar defect).',
      distractors: {
        0: 'Neural crest defects affect the outflow tract (PTA, TGA, TOF), not laterality of the entire body.',
        2: 'Cushion fusion failure produces AV septal defects, not heterotaxy.',
        3: 'Lithium → Ebstein anomaly, not heterotaxy or PCD.',
        4: 'NKX2.5 mutations → ASD with conduction block (familial), not laterality defects.'
      }
    }
  },

  // ─── Sinus Venosus Derivatives ─────────────────────────────────────────
  {
    id: 'v16',
    topic: 'Sinus Venosus',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'Anatomy review of an opened right atrium reveals a clear vertical ridge separating a smooth posterior wall from a trabeculated anterior wall. This ridge — the crista terminalis — represents the embryologic boundary between which two structures?',
    options: [
      'Trabeculated atrium (from primitive atrium) and smooth sinus venarum (from incorporated right horn of sinus venosus)',
      'Smooth and trabeculated portions of the left atrium',
      'SVC and IVC entry points',
      'Foramen ovale and fossa ovalis',
      'Coronary sinus opening and tricuspid valve'
    ],
    answer: 0,
    explanation: {
      correct: 'The crista terminalis (internal) and corresponding sulcus terminalis (external) mark the junction between the trabeculated RA (from primitive atrium → contains the auricle and pectinates) and the smooth sinus venarum (from the absorbed right horn of sinus venosus).',
      distractors: {
        1: 'The LA does not have a crista terminalis — its smooth and trabeculated portions are not separated by a comparable ridge.',
        2: 'These are landmarks within the RA but they do not define the crista.',
        3: 'The fossa ovalis is the postnatal remnant of the foramen ovale, in the interatrial septum — a different structure entirely.',
        4: 'These are separate landmarks within the RA and do not define the crista.'
      }
    }
  },
  {
    id: 'v17',
    topic: 'Sinus Venosus',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'A persistent left superior vena cava drains via an enlarged structure that derives embryologically from the left horn of the sinus venosus. That structure is the:',
    options: [
      'Coronary sinus',
      'Smooth part of the right atrium',
      'Superior vena cava',
      'Inferior vena cava',
      'Pulmonary trunk'
    ],
    answer: 0,
    explanation: {
      correct: 'The left horn of the sinus venosus becomes the coronary sinus. A persistent left SVC (failed regression of the left common cardinal system) typically drains into an enlarged coronary sinus — usually asymptomatic but occasionally relevant for line placement and pacing.',
      distractors: {
        1: 'Smooth RA is from the RIGHT horn of sinus venosus.',
        2: 'SVC derives from R common + R anterior cardinal veins.',
        3: 'IVC has a complex multi-segmental origin; the left horn of SV is not part of it.',
        4: 'Pulmonary trunk derives from the truncus arteriosus.'
      }
    }
  },

  // ─── Interatrial Septation & ASD ───────────────────────────────────────
  {
    id: 'v18',
    topic: 'Interatrial Septum',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'Septum primum grows downward from the roof of the primitive atrium toward the endocardial cushions. Before septum primum reaches the cushions and closes the foramen primum, what process must occur to maintain the right-to-left atrial shunt the fetus requires?',
    options: [
      'Apoptosis perforates the upper part of septum primum, creating the foramen secundum',
      'Septum secundum closes the foramen primum',
      'The left venous valves fuse together',
      'The crista terminalis forms',
      'The aorticopulmonary septum spirals'
    ],
    answer: 0,
    explanation: {
      correct: 'Programmed cell death (apoptosis) perforates the upper portion of septum primum, creating the foramen secundum. This timing is essential — the foramen secundum opens BEFORE the foramen primum closes, so right-to-left shunting through the atrial septum is never interrupted in utero.',
      distractors: {
        1: 'Septum secundum forms LATER, to the right of septum primum, and never closes the foramen primum directly.',
        2: 'Venous valve fusion is a separate event and does not maintain the interatrial shunt.',
        3: 'Crista terminalis is in the right atrium, unrelated to septation.',
        4: 'AP septum is in the outflow tract, not the atria.'
      }
    }
  },
  {
    id: 'v19',
    topic: 'Interatrial Septum',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'Within minutes of birth, the foramen ovale undergoes functional closure. The mechanism is:',
    options: [
      'Increased left atrial pressure presses the flexible septum primum against the rigid septum secundum, sealing the opening',
      'Septum secundum thickens in response to oxygen exposure',
      'Endocardial cushions complete their fusion',
      'Septum primum is rapidly resorbed',
      'The crista dividens redirects blood away from the atrium'
    ],
    answer: 0,
    explanation: {
      correct: 'At birth, lung expansion drops pulmonary vascular resistance → pulmonary venous return rises → LA pressure rises above RA pressure. The flexible septum primum (which becomes the floor of the future fossa ovalis) is pushed against the rigid septum secundum, occluding the foramen ovale. Anatomic fusion occurs over weeks to months.',
      distractors: {
        1: 'Septum secundum is already formed at birth — its thickness does not abruptly change.',
        2: 'Cushion fusion happens during weeks 4–5, far earlier.',
        3: 'Septum primum becomes the floor of the fossa ovalis, not resorbed.',
        4: 'Crista dividens (the lower edge of septum secundum) is a fetal feature that directs IVC blood through the foramen ovale, not the closure mechanism.'
      }
    }
  },
  {
    id: 'v20',
    topic: 'Interatrial Septum',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A 42-year-old man has a stroke. There is no carotid disease, but transesophageal echo with bubble study reveals right-to-left shunting through the interatrial septum during a Valsalva maneuver. The defect is small, located within the fossa ovalis region, and present in roughly 25% of adults. The most likely embryologic basis is:',
    options: [
      'Insufficient overlap between septum primum and septum secundum, allowing functional reopening when right atrial pressure rises',
      'Excessive resorption of septum primum',
      'Failure of endocardial cushion fusion',
      'Unequal aorticopulmonary septation',
      'L-loop instead of D-loop'
    ],
    answer: 0,
    explanation: {
      correct: 'A patent foramen ovale (PFO) reflects insufficient overlap between septum primum and secundum. The LA-side pressure normally holds them shut, but Valsalva or right heart strain can transiently reopen the slit-like opening, permitting paradoxical embolism. PFO is present in ~25% of adults — in most, asymptomatic.',
      distractors: {
        1: 'Excessive resorption of septum primum produces a TRUE secundum-type ASD (a defect in the septum), not a PFO.',
        2: 'Cushion fusion failure produces a primum-type ASD (lower septum), often part of an AV septal defect.',
        3: 'AP septation defects affect the outflow tract (TGA, TOF, PTA), not the atrial septum.',
        4: 'L-looping causes dextrocardia, not PFO.'
      }
    }
  },
  {
    id: 'v21',
    topic: 'Interatrial Septum',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A 35-year-old woman presents with progressive exercise intolerance and atrial fibrillation. Echocardiography reveals a defect in the central interatrial septum, in the region of the fossa ovalis, with left-to-right shunting and right heart enlargement. The most likely embryologic mechanism is:',
    options: [
      'Excessive resorption of septum primum, leaving a true defect at the fossa ovalis',
      'Failure of septum secundum to grow',
      'Endocardial cushion fusion failure',
      'Persistence of foramen primum',
      'Patent ductus arteriosus'
    ],
    answer: 0,
    explanation: {
      correct: 'Secundum-type ASD (the most common ASD) results from excessive resorption of septum primum. Despite the name, the defect is in the area normally covered by septum secundum, but the underlying issue is too much primum apoptosis. Long-standing left-to-right shunt → RA/RV dilation → atrial arrhythmias.',
      distractors: {
        1: 'Failure of septum secundum to grow is rarer and produces a different morphology.',
        2: 'Cushion fusion failure → primum ASD (low septum, near AV valves), not at the fossa ovalis.',
        3: 'Persistent foramen primum is a primum ASD — different location.',
        4: 'PDA is a connection between aorta and pulmonary artery, not interatrial.'
      }
    }
  },
  {
    id: 'v22',
    topic: 'Interatrial Septum',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A neonate with trisomy 21 has a holosystolic murmur and signs of heart failure. Echocardiography shows a low atrial septal defect contiguous with a high ventricular septal defect, plus a single common atrioventricular valve. The embryologic origin of this lesion is:',
    options: [
      'Failure of fusion of the endocardial cushions',
      'Failure of septum primum to grow downward',
      'Excessive resorption of septum primum',
      'Failure of the aorticopulmonary septum to spiral',
      'Maternal lithium exposure'
    ],
    answer: 0,
    explanation: {
      correct: 'Endocardial cushion fusion failure produces a complete atrioventricular septal defect (AVSD): primum-type ASD + inlet VSD + a single common AV valve. Strong association with trisomy 21 (Down syndrome) — about 40% of AVSDs.',
      distractors: {
        1: 'Primum failure alone could leave foramen primum open but would not produce the full AVSD picture with a common AV valve.',
        2: 'Excessive primum resorption → secundum ASD at the fossa ovalis, not primum ASD with VSD.',
        3: 'AP septum failure → TGA, not AVSD.',
        4: 'Lithium → Ebstein anomaly.'
      }
    }
  },

  // ─── AV Canal ──────────────────────────────────────────────────────────
  {
    id: 'v23',
    topic: 'AV Canal',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'The endocardial cushions, formed from cells invading cardiac jelly, contribute to all of the following EXCEPT:',
    options: [
      'Division of the AV canal into right (tricuspid) and left (mitral) openings',
      'Atrioventricular valve formation',
      'Membranous portion of the interventricular septum',
      'Closure of the foramen primum',
      'Semilunar (aortic and pulmonary) valves'
    ],
    answer: 4,
    explanation: {
      correct: 'Semilunar valves do NOT come from endocardial cushions — they form from three subendocardial swellings around the aortic and pulmonary orifices. Everything else listed is a true contribution of the endocardial cushions.',
      distractors: {
        0: 'True contribution — cushions divide the AV canal into right and left openings.',
        1: 'True contribution — cushions form the AV valves (tricuspid and mitral).',
        2: 'True contribution — the right edge of the dorsal endocardial cushion contributes to the membranous IV septum.',
        3: 'True contribution — fused cushions close the foramen primum.'
      }
    }
  },
  {
    id: 'v24',
    topic: 'AV Canal',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'Partitioning of the atrioventricular canal by the endocardial cushions occurs primarily during which gestational period?',
    options: [
      'Days 22–23',
      'Weeks 4–5',
      'Week 8',
      'Week 12',
      'After birth'
    ],
    answer: 1,
    explanation: {
      correct: 'AV canal partitioning begins in week 4 and ends in week 5. By the end of week 5, the cushions have divided the AV canal into the future tricuspid and mitral inflows.',
      distractors: {
        0: 'Days 22–23 are when the heart tube is fusing and beginning to contract; AV canal partitioning has not started.',
        2: 'Week 8 is too late — cushion-driven events are already complete.',
        3: 'Week 12 is much too late.',
        4: 'These events are entirely prenatal.'
      }
    }
  },
  {
    id: 'v25',
    topic: 'AV Canal',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A neonate is severely cyanotic, with a single S2 and a holosystolic murmur. Echocardiography shows complete absence of the tricuspid valve, a hypoplastic right ventricle, an obligatory atrial septal defect, and a VSD. The embryologic basis is:',
    options: [
      'Asymmetric partitioning of the AV canal by the endocardial cushions, with no opening allotted to the right side',
      'Failure of cardiac looping',
      'Failure of the AP septum to spiral',
      'Persistence of the left superior vena cava',
      'Coarctation of the aorta'
    ],
    answer: 0,
    explanation: {
      correct: 'Tricuspid atresia results from asymmetric AV canal division — the cushions partition unequally, leaving no opening on the right side. The RV cannot fill normally and is hypoplastic. Survival depends on a coexisting ASD (right-to-left atrial flow) plus a VSD or PDA to deliver blood to the lungs.',
      distractors: {
        1: 'Looping failure produces dextrocardia, not tricuspid atresia.',
        2: 'AP septum failure to spiral produces TGA.',
        3: 'Persistent left SVC drains to coronary sinus and is usually asymptomatic.',
        4: 'Coarctation is an aortic arch defect, with upper > lower extremity blood pressure.'
      }
    }
  },

  // ─── IV Septum & VSD ───────────────────────────────────────────────────
  {
    id: 'v26',
    topic: 'IV Septum',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'The most common congenital cardiac anomaly in liveborn infants is a ventricular septal defect, most often in the membranous portion of the interventricular septum. The best embryologic explanation is:',
    options: [
      'The membranous portion is the LAST to form and integrates contributions from the most sources (right and left bulbar ridges, right edge of the dorsal endocardial cushion, plus continuity with the muscular septum)',
      'The muscular septum forms first and is the most fragile',
      'Endocardial cushions never reach the membranous septum',
      'The aorticopulmonary septum thins the membranous septum as it spirals',
      'Cardiac neural crest cells fail to reach the IV septum'
    ],
    answer: 0,
    explanation: {
      correct: 'The membranous IV septum is the last part of the IV septum to close and depends on fusion of multiple contributors: right and left bulbar ridges, the right edge of the dorsal endocardial cushion, and the muscular septum. More moving parts = more chances for misalignment → membranous VSDs are the most common.',
      distractors: {
        1: 'Muscular septum forms early from the primitive ventricle wall and is the thicker, more robust portion.',
        2: 'The cushions DO contribute to the membranous septum — that is part of why it is failure-prone.',
        3: 'AP septum is in the outflow tract above the IV septum; it does not thin the membranous portion.',
        4: 'Neural crest contributes to the OUTFLOW tract septation, not directly to the IV septum.'
      }
    }
  },
  {
    id: 'v27',
    topic: 'IV Septum',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'A 6-month-old infant has an asymptomatic small holosystolic murmur loudest at the lower left sternal border. Echocardiography reveals a small muscular VSD. Many such defects close spontaneously by age 2. The muscular IV septum forms by:',
    options: [
      'Cavitation and upward growth of the muscular wall of the primitive ventricle',
      'Fusion of the endocardial cushions',
      'Downward extension of the aorticopulmonary septum',
      'Bulbar ridge fusion',
      'Resorption of septum primum'
    ],
    answer: 0,
    explanation: {
      correct: 'The muscular IV septum forms from the apex of the primitive ventricle by cavitation and upward growth as the ventricles enlarge. It eventually meets the membranous septum and cushions superiorly. Small muscular VSDs often close spontaneously as surrounding muscle grows.',
      distractors: {
        1: 'Cushions contribute to the membranous portion, not the muscular.',
        2: 'AP septum is in the outflow tract, separate from the IV septum.',
        3: 'Bulbar ridges contribute to the membranous IV septum and outflow tract.',
        4: 'Septum primum resorption is an interatrial event.'
      }
    }
  },
  {
    id: 'v28',
    topic: 'IV Septum',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A teenager with an unrepaired large VSD develops cyanosis, clubbing, and right ventricular hypertrophy. The murmur of the VSD has actually become softer over time. The pathophysiology is:',
    options: [
      'Pulmonary vascular remodeling from chronic high pulmonary flow → pulmonary hypertension → reversal of the L→R shunt to R→L (Eisenmenger syndrome)',
      'New-onset tetralogy of Fallot',
      'Spontaneous transition to persistent truncus arteriosus',
      'Coarctation of the aorta',
      'Spontaneous closure of the VSD'
    ],
    answer: 0,
    explanation: {
      correct: 'Eisenmenger syndrome: chronic left-to-right shunt → pulmonary overcirculation → pulmonary vascular remodeling → pulmonary hypertension → eventually RV pressure exceeds LV pressure → shunt reverses (R→L) → cyanosis. The murmur softens because the pressure gradient across the VSD diminishes.',
      distractors: {
        1: 'TOF is a congenital lesion present at birth, not acquired in adolescence.',
        2: 'PTA is fixed at birth; you do not "transition into" it.',
        3: 'Coarctation causes upper-extremity hypertension, not central cyanosis.',
        4: 'Spontaneous closure would not cause cyanosis or RVH — symptoms would resolve.'
      }
    }
  },

  // ─── Outflow Tract / Neural Crest / AP Septum ──────────────────────────
  {
    id: 'v29',
    topic: 'Outflow Tract',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A neonate is severely cyanotic at birth. Auscultation reveals a single S2. Echocardiography shows a single great vessel arising from the heart that gives rise to both the aorta and pulmonary arteries, with a large VSD beneath it. The most likely embryologic mechanism is:',
    options: [
      'Failure of cardiac neural crest migration into the truncus arteriosus and bulbus cordis, with failure of aorticopulmonary septum formation',
      'AP septum spirals correctly but fails to descend to meet the IV septum',
      'Failure of cardiac looping',
      'Endocardial cushion fusion failure',
      'Failure of the right horn of the sinus venosus to incorporate'
    ],
    answer: 0,
    explanation: {
      correct: 'Persistent truncus arteriosus arises from failure of cardiac neural crest cell migration → no bulbar/truncal ridges → no AP septum → single arterial outflow that overrides both ventricles. Always associated with a VSD. Strong association with 22q11.2 deletion (DiGeorge).',
      distractors: {
        1: 'Failure of AP septum descent is not the primary mechanism in PTA — the septum simply does not form.',
        2: 'Looping failure causes dextrocardia.',
        3: 'Cushion failure causes AVSD.',
        4: 'Sinus venosus issues affect systemic venous return, not the outflow tract.'
      }
    }
  },
  {
    id: 'v30',
    topic: 'Outflow Tract',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A neonate is severely cyanotic minutes after birth, despite a normal lung exam. Pulse oximetry shows an SpO₂ of 65% on room air. Echocardiography reveals the aorta arising from the right ventricle and the pulmonary trunk arising from the left ventricle. The embryologic mechanism is:',
    options: [
      'The aorticopulmonary septum grows straight downward instead of spiraling 180°',
      'Complete failure of cardiac neural crest migration',
      'Failure of bulbar ridge formation',
      'Persistence of foramen primum',
      'L-loop instead of D-loop'
    ],
    answer: 0,
    explanation: {
      correct: 'In transposition of the great vessels (TGA), the AP septum descends but fails to spiral 180°. As a result, the aorta ends up over the RV and the pulmonary trunk over the LV → parallel rather than series circulation → severe cyanosis. Strongly associated with maternal diabetes. Survival requires mixing (PFO, VSD, PDA → kept open with PGE1).',
      distractors: {
        1: 'Complete neural crest migration failure produces persistent truncus arteriosus, not TGA.',
        2: 'In TGA the bulbar ridges form — they just don\'t spiral. Failure to form would prevent any septation.',
        3: 'Foramen primum is in the atria, unrelated to outflow tract orientation.',
        4: 'L-looping causes dextrocardia, not TGA.'
      }
    }
  },
  {
    id: 'v31',
    topic: 'Outflow Tract',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A 2-year-old has cyanotic spells relieved by squatting. Chest X-ray shows a "boot-shaped" heart. Echocardiography reveals a VSD, pulmonary stenosis, an overriding aorta, and right ventricular hypertrophy. The embryologic mechanism is:',
    options: [
      'Anterosuperior (unequal) division of the aorticopulmonary septum, producing a small pulmonary trunk, a large overriding aorta, an unclosed VSD, and consequent RV hypertrophy',
      'Failure of the AP septum to spiral at all',
      'Complete failure of cardiac neural crest migration',
      'Endocardial cushion fusion failure',
      'Excessive resorption of septum primum'
    ],
    answer: 0,
    explanation: {
      correct: 'In tetralogy of Fallot, the AP septum divides UNEQUALLY (displaced anteriorly/superiorly), producing the four hallmarks: pulmonary stenosis (small PT), overriding aorta (large), VSD (the misaligned septum doesn\'t close properly), and RV hypertrophy (consequence of pulmonary stenosis). Squatting → ↑ SVR → ↓ R→L shunting → relief of cyanosis.',
      distractors: {
        1: 'Complete failure to spiral produces TGA, not TOF.',
        2: 'Complete neural crest failure → persistent truncus arteriosus (single vessel).',
        3: 'Cushion failure causes AVSD, not TOF.',
        4: 'Septum primum resorption affects the atria.'
      }
    }
  },
  {
    id: 'v32',
    topic: 'Outflow Tract',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A neonate presents with hypocalcemic seizures, recurrent bacterial infections, and a conotruncal cardiac defect (interrupted aortic arch). FISH testing reveals a 22q11.2 microdeletion. Which structures are most affected by the underlying developmental defect?',
    options: [
      'Cardiac neural crest cells migrating to pharyngeal arches 3 and 4 and into the cardiac outflow tract',
      'Splanchnopleuric mesoderm',
      'Notochord',
      'Endodermal foregut',
      'Septum transversum'
    ],
    answer: 0,
    explanation: {
      correct: 'DiGeorge / velocardiofacial syndrome (22q11.2 deletion) impairs cardiac neural crest migration to pharyngeal arches 3 and 4 (→ thymic and parathyroid hypoplasia → immunodeficiency, hypocalcemia) and to the cardiac outflow tract (→ conotruncal defects: persistent truncus arteriosus, TOF, interrupted aortic arch, type B). Mnemonic: CATCH-22.',
      distractors: {
        1: 'Splanchnopleuric mesoderm is the source of cardiomyocytes; not affected here.',
        2: 'Notochord defects affect axial patterning and the vertebral column, not pharyngeal/cardiac outflow.',
        3: 'Foregut endoderm contributes to thyroid and other structures but is not the primary defect here.',
        4: 'Septum transversum becomes the central tendon of the diaphragm — unrelated.'
      }
    }
  },
  {
    id: 'v33',
    topic: 'Valves',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A 5-year-old has an early systolic ejection click and a soft systolic ejection murmur. Echocardiography reveals a bicuspid aortic valve. Semilunar valves normally develop from:',
    options: [
      'Three subendocardial swellings around the aortic and pulmonary orifices',
      'Endocardial cushions of the AV canal',
      'The aorticopulmonary septum directly',
      'Trabecular myocardium',
      'The bulbus cordis wall'
    ],
    answer: 0,
    explanation: {
      correct: 'Both semilunar valves arise from three subendocardial swellings that hollow out into cusps. Bicuspid aortic valve (the most common congenital cardiac anomaly overall, ~1–2% of the population) results when two of the three swellings fuse during this process. Predisposes to early aortic stenosis and is associated with aortopathy.',
      distractors: {
        1: 'Endocardial cushions form the AV (mitral and tricuspid) valves, not semilunar.',
        2: 'AP septum divides the outflow tract but does not directly form valves.',
        3: 'Trabeculae are ventricular wall structure.',
        4: 'Bulbus cordis becomes the conus and contributes to great vessel proximal segments, but the valves themselves come from subendocardial swellings.'
      }
    }
  },

  // ─── Conducting System ─────────────────────────────────────────────────
  {
    id: 'v34',
    topic: 'Conducting System',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'An electrophysiology study of a chick embryo demonstrates organized cardiac contractions long before any neural input reaches the heart. Which statement about the cardiac conducting system does this best support?',
    options: [
      'The conducting system develops intrinsically before nerves enter the myocardium',
      'The conducting system requires sympathetic input to form',
      'The SA node is derived from migrating neural crest cells',
      'The AV node is derived from skeletal muscle precursors',
      'Conducting tissue forms only after birth'
    ],
    answer: 0,
    explanation: {
      correct: 'The conducting system develops intrinsically within the heart BEFORE autonomic nerves arrive. This is why the embryonic heart begins beating autonomously around day 22. Nerves later modulate rate but are not required for conduction system formation.',
      distractors: {
        1: 'Sympathetic input modulates rate but isn\'t required for conduction system formation.',
        2: 'SA node arises from sinus venosus tissue (myocardial origin), not neural crest.',
        3: 'All cardiac conduction tissue is myocardial in origin.',
        4: 'It is functional from week 3–4.'
      }
    }
  },
  {
    id: 'v35',
    topic: 'Conducting System',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'An elderly patient has sinus node dysfunction (sick sinus syndrome). The SA node is embryologically derived from:',
    options: [
      'Sinus venosus tissue, ending up at the junction of SVC and right atrium',
      'AV cushion tissue',
      'Cardiac neural crest',
      'Bulbus cordis',
      'Septum primum'
    ],
    answer: 0,
    explanation: {
      correct: 'The SA node arises from sinus venosus tissue. After incorporation of the right horn of the sinus venosus into the smooth wall of the RA, the SA node ends up at the junction of the SVC with the RA — its adult location.',
      distractors: {
        1: 'AV cushion contributes to the AV node region but the SA node specifically is from sinus venosus tissue.',
        2: 'Neural crest contributes to the outflow tract, not the conduction system.',
        3: 'Bulbus cordis becomes the conus and great vessels.',
        4: 'Septum primum becomes the floor of the fossa ovalis.'
      }
    }
  },

  // ─── Adult Derivatives ─────────────────────────────────────────────────
  {
    id: 'v36',
    topic: 'Derivatives',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'During cannulation of a central line, an interventionalist visualizes the SVC. The superior vena cava is derived embryologically from:',
    options: [
      'Right common cardinal vein and right anterior cardinal vein',
      'Left common cardinal vein',
      'Vitelline veins',
      'Umbilical veins',
      'Right horn of the sinus venosus'
    ],
    answer: 0,
    explanation: {
      correct: 'SVC = right common cardinal vein + right anterior cardinal vein. The left common cardinal vein normally regresses (its remnant is the oblique vein of Marshall on the posterior LA wall).',
      distractors: {
        1: 'Left common cardinal vein normally regresses; failure to regress = persistent left SVC.',
        2: 'Vitelline veins → portal venous system, hepatic veins, and a contribution to IVC.',
        3: 'Left umbilical vein → ligamentum teres after closure of the ductus venosus.',
        4: 'Right horn of sinus venosus → smooth wall of right atrium (sinus venarum), not SVC.'
      }
    }
  },
  {
    id: 'v37',
    topic: 'Derivatives',
    difficulty: 'Easy',
    style: 'vignette',
    q: 'A premature neonate has a continuous "machine-like" murmur. Indomethacin is administered and the murmur resolves. The structure that closed is derived embryologically from:',
    options: [
      'The distal portion of the LEFT 6th aortic arch',
      'The 4th aortic arch',
      'The truncus arteriosus',
      'The bulbus cordis',
      'The right anterior cardinal vein'
    ],
    answer: 0,
    explanation: {
      correct: 'The ductus arteriosus is the distal portion of the LEFT 6th aortic arch. It connects the pulmonary trunk to the aortic arch, allowing fetal blood to bypass the lungs. After birth, ↑ PaO₂ and ↓ prostaglandin E2 → closure → ligamentum arteriosum (adult remnant). Indomethacin (NSAID) blocks PG synthesis → closure in PDA.',
      distractors: {
        1: '4th aortic arch: left → arch of aorta; right → proximal right subclavian artery.',
        2: 'Truncus arteriosus → ascending aorta and pulmonary trunk.',
        3: 'Bulbus cordis → smooth right ventricle (conus arteriosus).',
        4: 'Right anterior cardinal vein → SVC contribution.'
      }
    }
  },
  {
    id: 'v38',
    topic: 'Derivatives',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A surgeon resecting a cardiac mass needs to enter the oblique sinus of the pericardium. This sinus lies posterior to which structure derived from absorption of a single embryologic vein into the wall of one chamber?',
    options: [
      'Smooth posterior wall of the left atrium (from absorption of the primordial pulmonary vein)',
      'Smooth wall of the right atrium (from right horn of sinus venosus)',
      'Coronary sinus (from left horn of sinus venosus)',
      'IVC (from vitelline contributions)',
      'SVC (from right common cardinal + right anterior cardinal)'
    ],
    answer: 0,
    explanation: {
      correct: 'The smooth posterior LA wall results from absorption of the primordial pulmonary vein and its first four branches — which is why four pulmonary veins enter directly into the LA. The oblique sinus of the pericardium lies posterior to this smooth LA wall, between the pulmonary vein attachments.',
      distractors: {
        1: 'Smooth RA is correctly described, but it is not the back wall behind which the oblique sinus lies.',
        2: 'Coronary sinus runs in the posterior AV groove but is not the structure absorbing a vein into a chamber wall.',
        3: 'IVC origin is mixed and complex — and the IVC is not relevant to the oblique sinus.',
        4: 'SVC origin is correctly described but is not the structure relevant to the oblique sinus.'
      }
    }
  },
  {
    id: 'v39',
    topic: 'Derivatives',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A patient has a vascular ring producing dysphagia. CTA shows a right-sided aortic arch (the right 4th arch persisted as the definitive arch instead of regressing). In normal development, which structure is the right 4th aortic arch destined to form?',
    options: [
      'Proximal right subclavian artery',
      'Common carotid arteries',
      'Proximal right pulmonary artery',
      'Maxillary artery',
      'Stapedial artery'
    ],
    answer: 0,
    explanation: {
      correct: 'Right 4th aortic arch → proximal right subclavian artery. Left 4th aortic arch → arch of the aorta. Persistence of the right 4th (with regression of the left) produces a right-sided aortic arch, which can compress the trachea/esophagus as a vascular ring.',
      distractors: {
        1: '3rd aortic arches → common carotids (and proximal internal carotids).',
        2: 'Right 6th aortic arch → proximal right pulmonary artery; left 6th → left PA + ductus arteriosus.',
        3: '1st aortic arch → maxillary artery (most regresses).',
        4: '2nd aortic arch → stapedial and hyoid arteries (mostly regresses).'
      }
    }
  },

  // ─── Anomalies — Teratogens and Syndromes ──────────────────────────────
  {
    id: 'v40',
    topic: 'Anomalies',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A pregnant woman developed a maculopapular rash, fever, and posterior auricular lymphadenopathy at 8 weeks gestation. Her newborn is delivered with a continuous murmur, sensorineural hearing loss, and bilateral cataracts. The most likely cardiac anomaly is:',
    options: [
      'Patent ductus arteriosus from congenital rubella syndrome',
      'Transposition of the great vessels from maternal diabetes',
      'Ebstein anomaly from maternal lithium',
      'Ventricular septal defect from fetal alcohol exposure',
      'Hypoplastic left heart from coxsackievirus'
    ],
    answer: 0,
    explanation: {
      correct: 'Congenital rubella syndrome classically produces PDA along with sensorineural deafness, cataracts, and microcephaly ("blueberry muffin" rash). The triad of cardiac defect + cataracts + deafness should immediately point to congenital rubella.',
      distractors: {
        1: 'Maternal diabetes is associated with TGA, VSD, and hypertrophic cardiomyopathy — but not the deafness/cataract triad.',
        2: 'Lithium → Ebstein anomaly, but no deafness or cataracts.',
        3: 'Fetal alcohol syndrome → VSD/ASD with characteristic facial features (smooth philtrum, thin upper lip), not deafness/cataracts.',
        4: 'Coxsackievirus can cause myocarditis but does not produce this triad.'
      }
    }
  },
  {
    id: 'v41',
    topic: 'Anomalies',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A neonate whose mother took lithium for bipolar disorder during the first trimester is found to have apical displacement of the tricuspid valve leaflets into the right ventricle, with "atrialization" of the proximal RV. The diagnosis is:',
    options: [
      'Ebstein anomaly',
      'Tricuspid atresia',
      'Hypoplastic right ventricle',
      'Tetralogy of Fallot',
      'Pulmonary atresia'
    ],
    answer: 0,
    explanation: {
      correct: 'Ebstein anomaly: apical displacement of the septal and posterior tricuspid leaflets into the RV. This "atrialized" portion of the RV is functionally part of the right atrium, leading to severe tricuspid regurgitation and RA enlargement. Strongly associated with maternal lithium exposure during the first trimester.',
      distractors: {
        1: 'Tricuspid atresia = absent valve, not displaced.',
        2: 'Hypoplastic RV is a different anatomic spectrum.',
        3: 'TOF does not displace the tricuspid valve.',
        4: 'Pulmonary atresia is at the pulmonary valve.'
      }
    }
  },
  {
    id: 'v42',
    topic: 'Anomalies',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A neonate of a poorly controlled diabetic mother becomes profoundly cyanotic within hours of birth. Echocardiography shows the aorta arising from the right ventricle. Prostaglandin E1 infusion is initiated. The rationale for PGE1 is:',
    options: [
      'To maintain ductus arteriosus patency, allowing mixing of the parallel pulmonary and systemic circulations',
      'To accelerate closure of the foramen ovale',
      'To increase pulmonary vascular resistance',
      'To decrease cardiac output',
      'To dilate the coronary arteries'
    ],
    answer: 0,
    explanation: {
      correct: 'In TGA the pulmonary and systemic circuits are PARALLEL rather than in series. Survival depends on mixing across an atrial (PFO/ASD), ventricular (VSD), or great-vessel (PDA) connection. PGE1 keeps the ductus open as a temporizing measure until definitive surgery (arterial switch operation, the Jatene procedure).',
      distractors: {
        1: 'Closing the foramen would REDUCE mixing and worsen cyanosis.',
        2: 'We need pulmonary flow, not less of it.',
        3: 'Lower CO would worsen perfusion.',
        4: 'Coronary dilation is not the issue.'
      }
    }
  },
  {
    id: 'v43',
    topic: 'Anomalies',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A 13-year-old girl is short, has a webbed neck, lymphedema of the hands and feet, and primary amenorrhea. BP is 150/90 mmHg in the arms but 100/60 mmHg in the legs. Karyotype: 45,XO. The most likely cardiac anomaly is:',
    options: [
      'Postductal coarctation of the aorta (with frequent association with bicuspid aortic valve)',
      'Ebstein anomaly',
      'Patent ductus arteriosus',
      'Persistent truncus arteriosus',
      'Tricuspid atresia'
    ],
    answer: 0,
    explanation: {
      correct: 'Turner syndrome (45,XO) is associated with postductal coarctation of the aorta and bicuspid aortic valve. Postductal coarctation produces upper > lower extremity blood pressure (a classic exam finding) and rib notching from collateral intercostal artery enlargement.',
      distractors: {
        1: 'Ebstein → maternal lithium, not Turner.',
        2: 'PDA → continuous machine-like murmur, not BP gradient.',
        3: 'PTA presents in the neonatal period with severe cyanosis.',
        4: 'Tricuspid atresia presents in infancy with cyanosis, not at age 13 with BP gradient.'
      }
    }
  },
  {
    id: 'v44',
    topic: 'Anomalies',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A neonate has bilateral upper limb defects (radial ray abnormalities — absent thumbs, hypoplastic radii) and an ASD with first-degree AV block on EKG. The mother is also affected. Genetic testing reveals an autosomal dominant mutation in TBX5. This Holt-Oram (heart-hand) syndrome reflects:',
    options: [
      'TBX5\'s role in patterning both the forelimb and the developing heart, particularly atrial septation and the conduction system',
      'Failure of cardiac neural crest migration',
      'Maternal lithium exposure',
      'Defective ciliary function',
      'NKX2.5 overexpression'
    ],
    answer: 0,
    explanation: {
      correct: 'TBX5 is a transcription factor required for both forelimb patterning (particularly the radial ray) and cardiac development (atrial septation and conduction system). Holt-Oram syndrome is autosomal dominant. The cardiac phenotype is most often a secundum-type ASD ± conduction abnormalities (AV block).',
      distractors: {
        1: 'Neural crest defects affect the cardiac outflow tract, not atrial septation with limb defects.',
        2: 'Lithium → Ebstein anomaly, not Holt-Oram.',
        3: 'Ciliary defects → heterotaxy/Kartagener, not Holt-Oram.',
        4: 'NKX2.5 mutations are also associated with ASD and conduction defects but do not cause limb defects — Holt-Oram requires TBX5.'
      }
    }
  },

  // ─── Mixed: Pharmacology Anchored in Embryology / Anatomy ──────────────
  {
    id: 'v45',
    topic: 'Conducting System',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A 66-year-old man with hypertension is prescribed a drug that inhibits depolarization of the sinoatrial (SA) node, thereby decreasing impulse conduction through the atria and ventricles. What is the most likely mechanism of action of this drug?',
    options: [
      'β1 adrenergic agonist',
      'β2 adrenergic antagonist',
      'Voltage-dependent Ca²⁺ channel antagonist',
      'Voltage-dependent K⁺ channel agonist',
      'Voltage-dependent Na⁺ channel agonist'
    ],
    answer: 2,
    explanation: {
      correct: 'SA (and AV) nodal phase 0 depolarization is driven by L-type voltage-gated Ca²⁺ channels (NOT Na⁺ channels — that\'s the working myocardium). Non-dihydropyridine Ca²⁺ channel antagonists (verapamil, diltiazem) inhibit this current → slow SA firing and AV conduction. Useful in HTN and rate control.',
      distractors: {
        0: 'β1 agonists (e.g., dobutamine) INCREASE SA firing — opposite of what is described.',
        1: 'β2 antagonism does little at the SA node, which is predominantly β1-driven.',
        3: 'A K⁺ channel AGONIST would hyperpolarize and slow the rate, but SA depolarization itself is Ca²⁺-driven, not K⁺-driven; this is not the standard mechanism for this clinical effect.',
        4: 'A Na⁺ channel AGONIST would speed depolarization (the opposite). Also, SA depolarization is not Na⁺-dependent.'
      }
    }
  },
  {
    id: 'v46',
    topic: 'Anomalies',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A neonate is well at birth but at 48 hours develops shock, severe metabolic acidosis, and a single S2. Echocardiography reveals a small left ventricle, atretic mitral and aortic valves, and a hypoplastic ascending aorta. PGE1 and the Norwood procedure are planned. The embryologic basis is:',
    options: [
      'Severely diminished left-sided flow during development → atresia and underdevelopment of all left-sided structures (hypoplastic left heart syndrome)',
      'Failure of the AP septum to spiral',
      'L-loop instead of D-loop',
      'Failure of cardiac neural crest migration',
      'Pulmonary atresia'
    ],
    answer: 0,
    explanation: {
      correct: 'Hypoplastic left heart syndrome (HLHS) arises when left-sided flow is severely reduced during cardiac development → underdevelopment of the LV, mitral valve, aortic valve, and ascending aorta. Systemic perfusion depends on a PDA → ductal closure causes shock at 24–72 hours of life. PGE1 keeps the duct open while staged surgical palliation (Norwood → Glenn → Fontan) is planned.',
      distractors: {
        1: 'AP septum failure to spiral causes TGA.',
        2: 'L-loop causes dextrocardia.',
        3: 'Neural crest failure causes outflow tract anomalies (PTA, TOF).',
        4: 'Pulmonary atresia is a right-sided lesion, not the picture described.'
      }
    }
  },

  // ─── Mixed Embryology Synthesis ────────────────────────────────────────
  {
    id: 'v47',
    topic: 'Tube Formation',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'The septum transversum, which anchors the caudal end of the developing heart and helps fix the three pairs of inflow veins, ultimately gives rise to which adult structure?',
    options: [
      'Central tendon of the diaphragm',
      'Smooth part of right atrium',
      'Coronary sinus',
      'Membranous interventricular septum',
      'Aorticopulmonary septum'
    ],
    answer: 0,
    explanation: {
      correct: 'The septum transversum becomes the central tendon of the diaphragm. It is also the precursor of the ventral mesentery and helps anchor the developing heart and liver in their early positions.',
      distractors: {
        1: 'Smooth RA is from the right horn of sinus venosus.',
        2: 'Coronary sinus is from the left horn of sinus venosus.',
        3: 'Membranous IV septum is formed from bulbar ridges + dorsal endocardial cushion + muscular septum.',
        4: 'AP septum is formed by neural crest-derived bulbar/truncal ridges.'
      }
    }
  },
  {
    id: 'v48',
    topic: 'Outflow Tract',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A research lab fluorescently labels premigratory neural crest cells located between the otic vesicles and the third pair of somites in a chick embryo. Tracing these cells through development, all of the following structures are colonized EXCEPT:',
    options: [
      'Aorticopulmonary septum',
      'Bulbar and truncal ridges',
      'Smooth muscle of the great arteries',
      'Mesenchyme of the pharyngeal arch arteries',
      'Sinoatrial node'
    ],
    answer: 4,
    explanation: {
      correct: 'The SA node derives from sinus venosus tissue (myocardial origin), not from neural crest. All the other structures listed ARE colonized by cardiac neural crest cells migrating from the level between the otic vesicles and the 3rd pair of somites.',
      distractors: {
        0: 'AP septum is a major neural crest contribution.',
        1: 'Bulbar and truncal ridges are colonized by neural crest cells, which is essential for their fusion into the AP septum.',
        2: 'Great artery smooth muscle is partly neural crest-derived.',
        3: 'Pharyngeal arch arteries are surrounded by neural crest mesenchyme that contributes to their walls.'
      }
    }
  },
  {
    id: 'v49',
    topic: 'Big Picture',
    difficulty: 'Medium',
    style: 'vignette',
    q: 'A pregnant woman has confirmed teratogen exposure during week 5 of gestation. Which class of cardiac defect is MOST likely to result from injury during this specific window?',
    options: [
      'Septation defects (VSD, ASD, AVSD) — septation occurs primarily weeks 4–8',
      'Failure of cardiac looping — looping occurs in week 4',
      'Failure of endocardial tube fusion — fusion occurs in week 3',
      'Failure of conducting system maturation — primarily a postnatal event',
      'Failure of coronary artery formation — occurs much earlier'
    ],
    answer: 0,
    explanation: {
      correct: 'Cardiac septation (interatrial, interventricular, AV canal, and outflow tract) occurs primarily weeks 4–8, with the bulk of septation events centered in weeks 5–8. A teratogen acting at week 5 most likely produces septation defects (VSD, ASD, AVSD).',
      distractors: {
        1: 'Looping is largely complete by the end of week 4.',
        2: 'Tube fusion is a week 3 event — earlier than this exposure.',
        3: 'Conducting system maturation is not the discrete week-5 event being asked about.',
        4: 'Coronary artery formation occurs later and is not the highest-yield answer for this window.'
      }
    }
  },
  {
    id: 'v50',
    topic: 'Anomalies',
    difficulty: 'Hard',
    style: 'vignette',
    q: 'A neonate has profound cyanosis. Echocardiography shows a single great vessel arising from the heart with a single semilunar valve, a large VSD, and the pulmonary arteries arising from the trunk of this single vessel. FISH testing on the neonate reveals a 22q11.2 deletion. The shared embryologic mechanism uniting the cardiac defect with the patient\'s thymic and parathyroid hypoplasia is:',
    options: [
      'Defective migration of cardiac neural crest cells, which normally contribute to both the aorticopulmonary septum and to pharyngeal pouches 3 and 4',
      'Failure of cardiac looping',
      'Failure of fusion of endocardial cushions',
      'Excessive resorption of septum primum',
      'Failure of incorporation of the pulmonary veins into the LA'
    ],
    answer: 0,
    explanation: {
      correct: 'Cardiac neural crest cells migrate from the neural tube to (1) the cardiac outflow tract (forming the aorticopulmonary septum from bulbar/truncal ridges) AND (2) pharyngeal arches/pouches 3 and 4 (forming thymus and inferior parathyroids). 22q11.2 deletion impairs this migration → conotruncal defects (PTA in this case) PLUS thymic hypoplasia (immunodeficiency) and parathyroid hypoplasia (hypocalcemia). The unifying lesion is failed neural crest migration. Mnemonic: CATCH-22 (Cardiac, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia, 22q11).',
      distractors: {
        1: 'Looping failure → dextrocardia, not PTA with thymic hypoplasia.',
        2: 'Cushion fusion failure → AVSD, not PTA.',
        3: 'Septum primum resorption → secundum ASD, not the syndrome described.',
        4: 'Pulmonary vein incorporation defects → TAPVR, not this picture.'
      }
    }
  }
];

// Export pattern compatible with the existing app — replace `baseMcqs` and
// `importedMcqs` with this array. Inside index.html:
//
//   const mcqs = vignetteMcqs;
//
// Update the renderer in `renderQuiz` / `renderQuizResults` to handle the
// object-shaped explanation:
//
//   if (typeof q.explanation === 'string') {
//     // legacy: render as one block
//   } else {
//     // new: render explanation.correct as a green block,
//     // then iterate options[] and for each non-answer index render
//     // explanation.distractors[i] as a red block under that option.
//   }
//
// Also display q.difficulty as a colored chip and q.style ('vignette') as
// a tag in the question header so she can filter to clinical vignettes only.
