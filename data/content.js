const disciplines = [
  { id: "fingerprints", icon: "🖐️", name: "Fingerprint Examination", summary: "Studies friction ridge patterns to compare and evaluate impressions found at a scene.", detail: "Fingerprint examination considers ridge flow, minutiae and the quality of an impression. Conclusions depend on the amount and clarity of the available information." },
  { id: "biology", icon: "🧬", name: "Forensic Biology & DNA", summary: "Examines biological materials such as blood, saliva and hair using scientific techniques.", detail: "Biological evidence is documented, collected and packaged carefully to reduce contamination. DNA analysis may help associate biological material with a person." },
  { id: "chemistry", icon: "🔬", name: "Forensic Chemistry", summary: "Analyses unknown substances, residues and materials to understand their composition.", detail: "Analytical techniques can help identify or compare materials. Screening results should be interpreted carefully and confirmed where appropriate." },
  { id: "documents", icon: "📄", name: "Questioned Documents", summary: "Examines handwriting, signatures, inks, paper and possible alterations in documents.", detail: "Examiners may compare writing characteristics and inspect document features. A conclusion must account for natural variation and limitations in the samples." },
  { id: "toxicology", icon: "⚖️", name: "Forensic Toxicology", summary: "Detects and interprets drugs, alcohol and toxic substances in biological samples.", detail: "Toxicological interpretation considers the substance, concentration, specimen, timing and relevant circumstances. Detection alone does not automatically establish impairment." },
  { id: "crime-scene", icon: "📷", name: "Crime Scene Investigation", summary: "Focuses on documenting, collecting, preserving and packaging evidence carefully.", detail: "A systematic approach includes scene safety, photography, notes, sketches, evidence identification, packaging and chain-of-custody documentation." }
];

const cases = [
  { id: "glass-fragment", title: "Case file 01 — The glass fragment", field: "Forensic Chemistry", description: "A broken window is found at a scene. Investigators document the fragments and a laboratory may compare their physical and chemical properties with a questioned sample." },
  { id: "anonymous-note", title: "Case file 02 — The anonymous note", field: "Questioned Documents", description: "A note is recovered during an inquiry. A document examiner may study handwriting characteristics, writing materials and signs of alteration." },
  { id: "unknown-stain", title: "Case file 03 — The unknown stain", field: "Forensic Biology", description: "A reddish stain is located and collected using proper procedures. Laboratory screening and confirmatory tests can help determine its nature." }
];

const questions = [
  { id: 1, question: "Which branch examines handwriting and questioned signatures?", options: ["Forensic Toxicology", "Questioned Document Examination", "Forensic Biology"], answer: 1, explanation: "Questioned document examination studies handwriting, signatures and document features." },
  { id: 2, question: "Which type of evidence can contain DNA?", options: ["Saliva", "A shoe size chart", "A location map"], answer: 0, explanation: "Saliva can contain cells that may provide DNA." },
  { id: 3, question: "What is an important first step when documenting a scene?", options: ["Move all objects", "Photograph and record observations", "Clean the area"], answer: 1, explanation: "Careful documentation helps preserve a record of the scene's original condition." },
  { id: 4, question: "What does chain of custody help document?", options: ["Evidence handling and transfer", "A suspect's social media", "Laboratory furniture"], answer: 0, explanation: "Chain-of-custody records document who handled evidence and when." },
  { id: 5, question: "Which discipline may examine unknown chemical residues?", options: ["Forensic Chemistry", "Forensic Linguistics", "Forensic Anthropology"], answer: 0, explanation: "Forensic chemistry uses analytical methods to examine substances and materials." }
];

module.exports = { disciplines, cases, questions };
