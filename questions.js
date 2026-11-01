const QUESTIONS = [
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A 52-year-old man with a history of heavy alcohol use is brought to the emergency department with tremor, tachycardia, and confusion. He is given a working diagnosis of alcohol withdrawal and admitted. Over the next day, his temperature rises to 38.9 C, he develops neck stiffness, and his glucose is low, but the team attributes each finding to withdrawal. Which of the following cognitive errors best describes the team's reasoning?",
    "options": {
      "A": "Anchoring on the initial label with premature closure, discounting new findings that do not fit the diagnosis",
      "B": "Availability bias, overestimating a diagnosis because a recent memorable case was a similar withdrawal presentation",
      "C": "Base-rate neglect, disregarding the known prevalence of withdrawal among patients admitted with tremor and confusion",
      "D": "Framing effect produced by the manner in which laboratory results were presented to the admitting team"
    },
    "answer": "A",
    "explanation": "The team adopted an early label and then explained away fever, meningismus, and hypoglycemia, which is the signature of anchoring combined with premature closure. Availability bias requires that a recent or vivid case drive the estimate, and nothing in the vignette says that. Base-rate neglect would involve ignoring prevalence when interpreting a result, whereas the team in fact relied on a common diagnosis too heavily. A framing effect depends on how data or a diagnosis is presented, and here the data were not presented differently; they were interpreted selectively.",
    "id": 1
  },
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A 45-year-old woman has a pretest probability of 20 percent for a particular disease. A diagnostic test has a sensitivity of 90 percent and a specificity of 91 percent, and her result is positive. Approximately what is the post-test probability of disease?",
    "options": {
      "A": "About 45 percent, because a positive result roughly doubles the pretest probability for a test of this accuracy",
      "B": "About 71 percent, because the pretest odds are multiplied by a positive likelihood ratio of about 10",
      "C": "About 90 percent, because the sensitivity of the test equals the probability of disease after a positive result",
      "D": "About 91 percent, because the specificity of the test sets the chance that a positive result is true"
    },
    "answer": "B",
    "explanation": "The positive likelihood ratio is 0.90 divided by 0.09, which equals 10. Pretest odds of 0.25 times 10 give post-test odds of 2.5, which corresponds to a probability of about 71 percent. A doubling estimate understates the shift produced by a likelihood ratio of 10. Sensitivity is the probability of a positive test given disease, not the probability of disease given a positive test, so equating them reverses the conditional. Specificity describes how often healthy people test negative and likewise cannot be read as the chance that a positive result is correct.",
    "id": 2
  },
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A 32-year-old woman presents with 2 days of mild pleuritic chest pain after a viral illness. Her heart rate is 88/min, blood pressure 118/74 mm Hg, and oxygen saturation 99 percent on room air. She takes no estrogen, has no leg swelling, hemoptysis, recent surgery, or personal history of thromboembolism, and the clinician judges pulmonary embolism unlikely. Which of the following is the most appropriate next step regarding pulmonary embolism?",
    "options": {
      "A": "Obtain a D-dimer and proceed to imaging if the value is above the standard laboratory reference range",
      "B": "Order CT pulmonary angiography to definitively exclude the diagnosis given the pleuritic character of the pain",
      "C": "Order a ventilation-perfusion scan because she is a young woman for whom radiation exposure should be limited",
      "D": "No further testing for pulmonary embolism, because she meets all rule-out criteria at low pretest probability"
    },
    "answer": "D",
    "explanation": "She is under 50 with normal heart rate and saturation and has no other risk features, so she satisfies PERC in a patient judged low risk, and testing would produce more false positives than true ones. A D-dimer is unnecessary once PERC is negative and would likely trigger further imaging if falsely elevated. CT angiography exposes her to radiation and contrast for a disease she is very unlikely to have. A ventilation-perfusion scan is an imaging alternative for patients who need imaging, and she does not.",
    "id": 3
  },
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A 67-year-old man with good functional status asks whether he should have a prostate-specific antigen test. He has no urinary symptoms and no family history of prostate cancer. Which of the following is the most appropriate approach?",
    "options": {
      "A": "Describe the potential benefit and harms of screening, ask what matters to him, and decide together",
      "B": "Recommend screening strongly because early detection of cancer always reduces cancer mortality in men his age",
      "C": "Advise against screening and avoid further discussion because routine testing is never recommended after age 65",
      "D": "Order the test without discussion and counsel on results only if the value returns above the reference range"
    },
    "answer": "A",
    "explanation": "For men aged 55 to 69, guidelines recommend an individualized decision after discussing the small mortality benefit and the harms of false positives, overdiagnosis, and treatment effects, which is the setting for shared decision making. Strong advice for screening overstates a benefit that is modest and not guaranteed. Blanket refusal to discuss skips the patient's values and is not what guidelines recommend at age 67. Ordering without discussion obtains no informed choice and exposes him to downstream harms he has not accepted.",
    "id": 4
  },
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A guideline panel is grading the certainty of evidence from several observational cohort studies on a medication and a rare adverse event. Which of the following findings would justify raising the certainty rating above the usual starting point for observational evidence?",
    "options": {
      "A": "A very large sample size across several cohorts that produced narrow confidence intervals around a small effect",
      "B": "A large magnitude of effect that rises consistently with higher doses of the medication across studies",
      "C": "Publication of all of the cohort studies in journals with a high impact factor and wide readership",
      "D": "A finding that is statistically significant in all studies but has not been replicated in a trial"
    },
    "answer": "B",
    "explanation": "Under GRADE, observational evidence starts at low certainty and can be upgraded for a large effect, a dose-response gradient, or when plausible confounding would only bias toward no effect, so a large effect with a dose-response pattern qualifies. Sample size and narrow intervals address imprecision but do not protect against confounding. Journal prestige is unrelated to risk of bias. Statistical significance alone, without a large effect or gradient, does not raise certainty and cannot substitute for protection against confounding.",
    "id": 5
  },
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A hospital quality committee wants to reduce missed diagnoses on its medical wards. Review of cases shows frequent premature closure after the first plausible diagnosis. Which of the following interventions is most likely to address this problem?",
    "options": {
      "A": "Instructing physicians to rely more heavily on pattern recognition so decisions are made faster and with fewer delays",
      "B": "Ordering a broad panel of laboratory and imaging tests on every admission to avoid missing any condition",
      "C": "Instituting a structured diagnostic time-out in which clinicians name dangerous alternatives and disconfirming findings",
      "D": "Providing a lecture on cognitive biases once a year with the expectation that awareness will prevent errors"
    },
    "answer": "C",
    "explanation": "A structured pause that forces consideration of alternative diagnoses and of findings that do not fit directly counters premature closure and confirmation bias. Faster pattern recognition is the mechanism that produces premature closure, so encouraging it would worsen the problem. Broad indiscriminate testing yields false positives and incidental findings without improving reasoning. Education about biases alone has weak evidence for reducing errors because awareness does not reliably change behavior in the moment.",
    "id": 6
  },
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A clinician wants to apply a published diagnostic test to patients in an outpatient clinic whose disease prevalence differs from that of the original study population. Which test characteristic can be used to convert pretest probability to post-test probability regardless of the prevalence in the study?",
    "options": {
      "A": "Positive predictive value, because it summarizes how often a positive result is correct in the clinic population",
      "B": "Overall accuracy, because it combines true positive and true negative results into a single prevalence-free value",
      "C": "Negative predictive value, because it is calculated directly from the results in people without the disease",
      "D": "Likelihood ratio, because it is derived from sensitivity and specificity and does not vary with prevalence"
    },
    "answer": "D",
    "explanation": "Likelihood ratios depend only on sensitivity and specificity, so they can be applied to any pretest probability through the odds form of Bayes theorem. Predictive values change with prevalence and cannot be carried to a population with a different baseline without recalculation. Accuracy is also prevalence dependent because it weights true positives and true negatives by how common each group is. Negative predictive value likewise varies with prevalence and describes the probability of no disease after a negative result in one specific population.",
    "id": 7
  },
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A 45-year-old woman presents 3 weeks after an abdominal hysterectomy with pleuritic chest pain and dyspnea. Her heart rate is 108/min and oxygen saturation is 96 percent on room air. She has no leg swelling, hemoptysis, malignancy, or prior thromboembolism, and her clinician believes another diagnosis is equally likely. Using the two-tier Wells score, which of the following is the most appropriate next step?",
    "options": {
      "A": "Proceed directly to CT pulmonary angiography because any recent surgery places a patient in the high-probability group",
      "B": "Start therapeutic anticoagulation empirically and arrange imaging in the next several days when it is convenient",
      "C": "Measure a high-sensitivity D-dimer, because the score of 3 places her in the PE-unlikely group",
      "D": "Obtain a lower extremity duplex only, because pulmonary embolism cannot be assessed without evidence of leg thrombosis"
    },
    "answer": "C",
    "explanation": "She scores 1.5 for heart rate above 100 and 1.5 for surgery within 4 weeks, total 3, which is 4 or less and so PE unlikely; a negative sensitive D-dimer would exclude the diagnosis. Surgery contributes points but does not by itself place a patient in the likely group. Empiric anticoagulation is reserved for high-probability patients when imaging is delayed, and she is not in that group. Leg duplex is not a substitute, since pulmonary embolism can occur without detectable leg thrombosis and she has no leg findings.",
    "id": 8
  },
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A 45-year-old man has had low back pain for 2 weeks after lifting furniture. There is no fever, weight loss, history of cancer, trauma, saddle anesthesia, bowel or bladder dysfunction, or leg weakness. He requests an MRI of the lumbar spine. Which of the following is the best management?",
    "options": {
      "A": "Order MRI now, because early imaging shortens the course of pain and prevents chronic disability",
      "B": "Order plain radiographs of the lumbar spine to screen for fractures and degenerative disease",
      "C": "Refer to a spine surgeon for evaluation because imaging requests should be directed to a specialist",
      "D": "Reassure him, advise staying active, offer short-term analgesia, and defer imaging unless red flags develop"
    },
    "answer": "D",
    "explanation": "Uncomplicated acute low back pain without red flags usually improves within weeks, and early imaging does not improve outcomes while it finds incidental abnormalities that prompt unnecessary interventions. MRI is therefore low-value care here. Plain films for a patient with no trauma or osteoporosis risk likewise yield no benefit and add radiation. Referral to a surgeon expands the cascade of care without indication. Counseling with the explicit return precautions respects his concern while avoiding harm.",
    "id": 9
  },
  {
    "domain": "clinical_reasoning",
    "chapter": 1,
    "question": "A trial reports that a new antihypertensive reduces the 5-year risk of stroke by 50 percent compared with placebo. The baseline 5-year stroke risk in the placebo group was 2 percent. Which of the following is the best way to communicate the benefit to a patient with similar baseline risk?",
    "options": {
      "A": "Treatment lowers stroke risk from 2 in 100 to 1 in 100 over 5 years",
      "B": "Treatment cuts your stroke risk in half, so it will prevent most strokes",
      "C": "Treatment has a relative risk of 0.5, a statistically significant and clinically large effect",
      "D": "Treatment will almost certainly prevent a stroke in your case, given the effect size"
    },
    "answer": "A",
    "explanation": "Presenting the absolute risk reduction of 1 percentage point and the number needed to treat of 100 with the baseline risk gives the patient an accurate sense of the magnitude. Saying the risk is cut in half is accurate as a relative statement but suggests a much larger absolute benefit than 1 in 100. Quoting a relative risk and its significance is technical and does not convey absolute benefit, and significance does not mean clinically large. Promising prevention misstates probability, since most patients in either group will not have a stroke.",
    "id": 10
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "A new blood test is evaluated against a reference standard in 1,000 patients. Of the 100 patients with the disease, 90 test positive. Of the 900 patients without the disease, 45 test positive. What is the positive predictive value of the test in this sample?",
    "options": {
      "A": "About 90 percent, because 90 of the 100 diseased patients had a positive result",
      "B": "About 95 percent, because 855 of the 900 patients without disease had a negative result",
      "C": "About 67 percent, because 90 of the 135 patients with a positive result had the disease",
      "D": "About 50 percent, because the test yields one false positive for each true negative result"
    },
    "answer": "C",
    "explanation": "There are 90 true positives and 45 false positives, giving 135 positive results, so the positive predictive value is 90 divided by 135, or 67 percent. The figure of 90 percent is the sensitivity, which is calculated among diseased patients only. The figure of 95 percent is the specificity, calculated among nondiseased patients. The suggestion of 50 percent has no basis in the table, since the number of false positives is 45 and the number of true negatives is 855.",
    "id": 11
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "Investigators want to identify risk factors for a rare pediatric malignancy with an incidence of 1 in 200,000 per year. They wish to examine several possible environmental exposures. Which of the following study designs is the most appropriate and what measure of association will it yield?",
    "options": {
      "A": "A prospective cohort study following exposed and unexposed children, yielding a relative risk",
      "B": "A case-control study comparing exposures in affected children and unaffected controls, yielding an odds ratio",
      "C": "A cross-sectional survey of children at a single time, yielding the incidence of the cancer",
      "D": "A randomized trial assigning children to exposures, yielding a hazard ratio for the malignancy"
    },
    "answer": "B",
    "explanation": "A case-control design starts from the few affected children, tests many exposures efficiently, and gives odds ratios that approximate relative risks for a rare outcome. A cohort would require following an enormous number of children for years to accrue enough cases. A cross-sectional survey measures prevalence, cannot give incidence, and would find too few cases to analyze. Randomly assigning children to environmental exposures that may cause cancer is unethical and impractical.",
    "id": 12
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "A new blood test detects a form of cancer an average of 2 years earlier than clinical diagnosis. Patients are treated, but the therapy at the earlier stage does not change the age at which they die. Reports show that 5-year survival after diagnosis has risen from 40 percent to 70 percent among screen-detected patients. Which of the following best explains the improved survival statistic?",
    "options": {
      "A": "Length-time bias, because screening selectively finds aggressive tumors that grow rapidly between visits",
      "B": "Selection bias, because patients who agree to testing are healthier than those who decline testing",
      "C": "Confounding by indication, because sicker patients are less likely to be offered the test",
      "D": "Lead-time bias, because earlier diagnosis lengthens the measured survival without delaying the time of death"
    },
    "answer": "D",
    "explanation": "The survival clock starts at diagnosis, so detecting the same cancer earlier adds lead time to the measured interval even when death occurs at the same age. Length-time bias involves overrepresentation of slow-growing indolent tumors rather than aggressive ones. Healthy-volunteer selection can occur but does not explain a rise confined to the clock starting earlier when death timing is unchanged. Confounding by indication is a problem in comparing treatments in observational data and is not the mechanism here.",
    "id": 13
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "In a randomized trial, the 3-year rate of stroke was 10 percent in the control group and 6 percent in the group receiving a new anticoagulant. What is the number needed to treat to prevent one stroke over 3 years?",
    "options": {
      "A": "25, because the absolute risk reduction is 4 percentage points",
      "B": "40, because the relative risk reduction is 40 percent",
      "C": "17, because the relative risk is about 0.6 in this trial",
      "D": "10, because the control group event rate is 10 percent"
    },
    "answer": "A",
    "explanation": "The absolute risk reduction is 10 percent minus 6 percent, or 4 percentage points, and the number needed to treat is 1 divided by 0.04, which equals 25. The relative risk reduction is 40 percent, but the number needed to treat is derived from the absolute difference, not the relative one. The relative risk of 0.6 does not give the reciprocal needed. The control event rate alone cannot determine the number needed to treat without the treated event rate.",
    "id": 14
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "A large randomized trial reports that a new drug reduced the risk of the primary composite endpoint, with a hazard ratio of 0.85 and a 95 percent confidence interval of 0.70 to 1.04 (p = 0.12). Which of the following is the most accurate conclusion?",
    "options": {
      "A": "The drug has been proven ineffective, because the p-value exceeds 0.05",
      "B": "The drug reduces the risk by exactly 15 percent, because the hazard ratio is the best estimate",
      "C": "There is a 12 percent probability that the drug has no effect on the endpoint",
      "D": "The result is not statistically significant, and the data are compatible with benefit and with no benefit"
    },
    "answer": "D",
    "explanation": "The interval includes 1, so the result is not significant at the 5 percent level, yet it ranges from a 30 percent reduction to a 4 percent increase, so the trial cannot exclude either a meaningful benefit or no effect. A nonsignificant result is not proof of ineffectiveness. The hazard ratio is a point estimate surrounded by uncertainty, not an exact effect. A p-value is the probability of data this extreme if the null hypothesis were true, not the probability that the null hypothesis is true.",
    "id": 15
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "A case-control study finds that coffee consumption is associated with pancreatic cancer (odds ratio 1.8). The investigators later find that coffee drinkers in the study smoked more cigarettes than non-drinkers. How is smoking best described in this study?",
    "options": {
      "A": "A confounder, because it is associated with coffee intake and independently raises the risk of pancreatic cancer",
      "B": "An effect modifier, because the association of coffee with cancer differs between smokers and nonsmokers",
      "C": "A mediator, because coffee consumption causes smoking, which in turn increases the cancer risk",
      "D": "A source of recall bias, because smokers remember their coffee consumption less accurately than nonsmokers"
    },
    "answer": "A",
    "explanation": "A confounder is related to the exposure, is an independent cause of the outcome, and is not on the causal pathway from exposure to outcome, all of which describe smoking here. Effect modification would require that the strength of the coffee association differ across smoking strata, which the vignette does not show. A mediator lies on the pathway from exposure to outcome, and coffee does not cause smoking. Recall bias concerns differential memory between cases and controls, not the relationship between two exposures.",
    "id": 16
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "In a randomized trial of surgery versus medical management, 20 percent of patients assigned to medical management crossed over to surgery because of worsening symptoms. Which analysis best preserves the benefit of randomization in estimating the effect of the assigned strategies?",
    "options": {
      "A": "A per-protocol analysis excluding patients who crossed over, because they did not receive the assigned treatment",
      "B": "An as-treated analysis comparing patients by the treatment they received, because that reflects actual exposure",
      "C": "An intention-to-treat analysis in which patients are analyzed in the groups to which they were randomized",
      "D": "An analysis excluding all patients with worsening symptoms, because they are not representative of medical management"
    },
    "answer": "C",
    "explanation": "Intention-to-treat analysis keeps each patient in the assigned group, preserving the balance of known and unknown prognostic factors created by randomization. Per-protocol and as-treated analyses compare groups formed by post-randomization behavior, and patients who cross over for worsening symptoms differ prognostically from those who do not, reintroducing selection bias. Excluding patients with worsening symptoms removes the very events that matter and biases the comparison in favor of medical management.",
    "id": 17
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "A noninferiority trial compares a new oral anticoagulant with warfarin for the prevention of stroke in atrial fibrillation. The prespecified noninferiority margin for the hazard ratio is 1.30. The trial reports a hazard ratio of 1.05 with a 95 percent confidence interval of 0.90 to 1.20. Which conclusion is most appropriate?",
    "options": {
      "A": "The new drug is superior to warfarin, because the point estimate is close to 1",
      "B": "The new drug is noninferior to warfarin, because the upper confidence limit is below the margin",
      "C": "The result is inconclusive, because the confidence interval includes the value 1.0",
      "D": "The new drug is inferior to warfarin, because the hazard ratio is above 1.0"
    },
    "answer": "B",
    "explanation": "Noninferiority is shown when the upper limit of the confidence interval for the hazard ratio falls below the prespecified margin, here 1.20 compared with 1.30. Superiority would require an upper limit below 1.0, and a point estimate near 1 does not show that. Including 1.0 in the interval is expected in a noninferiority trial and does not make the result inconclusive. A point estimate above 1.0 does not prove inferiority when the interval remains within the acceptable margin.",
    "id": 18
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "A small randomized trial of 40 patients tests a new therapy for a rare disease and finds no significant difference in the primary outcome (p = 0.30). The 95 percent confidence interval for the risk difference ranges from a 35 percent reduction to a 10 percent increase in events. Which of the following is the best interpretation?",
    "options": {
      "A": "A type II error is possible because the trial was underpowered to exclude benefit",
      "B": "The trial has shown the therapy is equivalent to control, because no significant difference appeared",
      "C": "The trial has committed a type I error, because the p-value exceeds the significance threshold",
      "D": "The trial demonstrates harm, because the upper confidence limit lies above the null value"
    },
    "answer": "A",
    "explanation": "A wide interval that includes a large benefit signals low power, so a real effect may have been missed, which is a type II error. Absence of significance does not establish equivalence, which requires a narrow interval within a prespecified margin. A type I error is a false positive, rejecting a true null, and this trial did not reject the null. An upper limit above zero reflects uncertainty and is compatible with no effect, so it does not demonstrate harm.",
    "id": 19
  },
  {
    "domain": "biostatistics",
    "chapter": 2,
    "question": "Which of the following study results provides the most valid evidence that a cancer screening program saves lives, free from lead-time and length-time bias?",
    "options": {
      "A": "Higher 5-year survival after diagnosis among screen-detected cancers than among clinically detected cancers",
      "B": "A higher proportion of early-stage cancers at diagnosis in people who choose screening than in those who decline",
      "C": "A greater number of cancers detected in the screened population than in an unscreened population",
      "D": "Lower disease-specific mortality in a randomized trial comparing screened and unscreened participants over long follow-up"
    },
    "answer": "D",
    "explanation": "Comparing mortality between randomized groups starts the clock at randomization for both arms, so neither lead time nor length of the preclinical phase can inflate the result. Higher survival after diagnosis suffers from both biases directly. A stage shift among self-selected participants is confounded by healthy volunteer effects and can reflect overdiagnosis. Detecting more cancers is expected with any sensitive test and may represent overdiagnosis, not benefit.",
    "id": 20
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A 46-year-old woman with no family history of cancer and no prior breast imaging asks about breast cancer screening. She has no breast symptoms, and her clinical breast examination is normal. Which of the following is the most appropriate recommendation?",
    "options": {
      "A": "Offer screening mammography now and repeat it every 2 years through age 74",
      "B": "Defer all screening until age 50 because earlier mammography is not recommended at average risk",
      "C": "Order annual breast magnetic resonance imaging because she has not been screened and is above 45",
      "D": "Teach monthly breast self-examination and perform clinical breast examination annually in place of imaging"
    },
    "answer": "A",
    "explanation": "The Task Force recommends biennial mammography for average-risk women from 40 through 74, so she should be offered it now. Waiting until 50 reflects the older recommendation and delays screening during an age band with measurable benefit. Annual magnetic resonance imaging is reserved for women with high lifetime risk, such as BRCA carriers or those with prior chest irradiation. Self-examination and clinical examination alone have not been shown to reduce mortality and are not substitutes for imaging.",
    "id": 21
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A 62-year-old man has a 30 pack-year smoking history and quit smoking 8 years ago. He has no cough, weight loss, or hemoptysis and has good functional status. He has never been screened for lung cancer. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Obtain a chest radiograph every year because it is the most accessible screening imaging study",
      "B": "Measure sputum cytology on three consecutive mornings to look for early malignant cells",
      "C": "Order annual low-dose computed tomography of the chest and counsel him about the risks of false positives",
      "D": "Defer screening because he is no longer smoking and his risk has returned to baseline"
    },
    "answer": "C",
    "explanation": "He is between 50 and 80, has at least 20 pack-years, and quit within the past 15 years, so he meets criteria for annual low-dose CT with shared counseling about false positives and incidental findings. Chest radiography did not reduce lung cancer mortality in screening trials. Sputum cytology has poor sensitivity and is not a recommended screening test. Risk remains elevated for many years after quitting, and screening continues until 15 years of abstinence.",
    "id": 22
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A 68-year-old woman has had three consecutive normal cervical cytology results, the most recent 3 years ago. She has no history of cervical intraepithelial neoplasia, has an intact cervix, and is not immunocompromised. Which of the following is the most appropriate recommendation about cervical cancer screening?",
    "options": {
      "A": "Continue cytology every year because her risk rises as she ages and the cervix remains in place",
      "B": "Perform colposcopy with cervical biopsy to document the absence of precancerous lesions before she stops",
      "C": "Obtain an annual pelvic ultrasound because it detects cervical disease that cytology can miss",
      "D": "Discontinue cervical screening because she is over 65 and has adequate prior negative screening"
    },
    "answer": "D",
    "explanation": "After age 65, screening can stop when there have been three consecutive negative cytology results, or two negative cotests, within the past 10 years with the most recent in the past 5, and no high-grade lesion history, which she satisfies. Continuing yearly screening increases harm without benefit. Colposcopy and biopsy are invasive and unnecessary in someone with normal results. Pelvic ultrasound is not a screening test for cervical cancer.",
    "id": 23
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A 72-year-old man with chronic obstructive pulmonary disease has never received a pneumococcal vaccine. He is not immunocompromised. According to current guidance, which of the following is the most appropriate vaccination?",
    "options": {
      "A": "A single dose of the 23-valent polysaccharide vaccine now, with no additional doses needed",
      "B": "A single dose of the 20-valent or 21-valent pneumococcal conjugate vaccine",
      "C": "The 13-valent conjugate vaccine now and a second dose of the same vaccine in 5 years",
      "D": "No pneumococcal vaccination, because the vaccine is recommended only for children and young adults"
    },
    "answer": "B",
    "explanation": "A vaccine-naive adult with a risk condition receives one dose of PCV20 or PCV21 and is done, while PCV15 followed by PPSV23 is an acceptable alternative. The polysaccharide vaccine alone is no longer the preferred sole agent and elicits a weaker response. Repeating PCV13 is not part of the schedule, and that product is no longer used in adults in this way. Adults 50 and older, and those with chronic lung disease, are specifically recommended to be vaccinated.",
    "id": 24
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A 48-year-old man who smokes 25 cigarettes per day wants to quit. He has no psychiatric history and no seizure disorder. He has tried nicotine gum once and relapsed within a week. Which of the following is the most appropriate initial pharmacotherapy?",
    "options": {
      "A": "Nicotine lozenges used alone, started on the quit date and continued for 2 weeks",
      "B": "Bupropion alone, started on the quit date at the maximum daily dose",
      "C": "Varenicline for 12 weeks together with behavioral counseling, with a quit date set in week 1",
      "D": "Electronic cigarettes with nicotine, because they are approved by regulators as a cessation aid"
    },
    "answer": "C",
    "explanation": "Varenicline is the most effective single agent, outperforming bupropion and the nicotine patch, and works best with behavioral support. A single short-acting nicotine product used for 2 weeks is too brief and less effective than combination therapy. Bupropion alone is less effective than varenicline and should not be started on the quit date at maximum dose. Electronic cigarettes have not been approved as cessation aids by the regulator and have uncertain long-term safety.",
    "id": 25
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A 68-year-old man with a 30 pack-year smoking history and hypertension asks about screening tests for conditions that could be silently dangerous. He has no abdominal symptoms and has never had abdominal imaging. Which of the following screening tests is recommended for him?",
    "options": {
      "A": "Abdominal computed tomography every 5 years to look for visceral masses and aneurysms",
      "B": "Annual abdominal ultrasound beginning now and continuing until age 85",
      "C": "Carotid duplex ultrasonography to look for asymptomatic stenosis in smokers",
      "D": "One-time abdominal ultrasound to look for abdominal aortic aneurysm"
    },
    "answer": "D",
    "explanation": "Men aged 65 to 75 who have ever smoked should have a single ultrasound to detect an abdominal aortic aneurysm, because identification of large aneurysms and repair reduces rupture deaths. Serial computed tomography is not a screening test and adds radiation. Repeating ultrasound annually is not indicated if the first study is normal. Screening for asymptomatic carotid stenosis in the general adult population is not recommended because the harms of intervention outweigh benefit.",
    "id": 26
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A healthy 36-year-old man with no known risk factors for liver disease, no history of injection drug use, and a normal alanine aminotransferase presents for a routine visit. He has never been tested for hepatitis C. Which of the following is the most appropriate action?",
    "options": {
      "A": "Order a hepatitis C antibody test with reflex RNA testing, once, as universal adult screening",
      "B": "Defer testing because he has no risk factors and a normal alanine aminotransferase level",
      "C": "Order annual hepatitis C RNA testing because the virus can be present with normal enzymes",
      "D": "Order a liver biopsy to document the absence of fibrosis before deciding on testing"
    },
    "answer": "A",
    "explanation": "Universal one-time screening of adults aged 18 to 79 is recommended regardless of risk, because many infections are silent and treatment with direct-acting antivirals is curative. Waiting for risk factors or abnormal enzymes misses a large share of infections. Yearly RNA testing is for people with ongoing exposure and is not routine. A biopsy is invasive and is considered only after infection is confirmed and staging is needed.",
    "id": 27
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A 45-year-old man with moderate alcohol use disorder by DSM-5 criteria wants to reduce his drinking. He takes no regular medications, has normal liver enzymes and creatinine, and is not using opioids. He has no withdrawal symptoms today. Which of the following is the most appropriate pharmacotherapy?",
    "options": {
      "A": "Disulfiram as first-line therapy, taken on an unsupervised basis once daily",
      "B": "Naltrexone, given as a daily oral tablet or a monthly injection",
      "C": "Lorazepam on a scheduled daily basis to reduce craving and maintain abstinence",
      "D": "Buprenorphine and naloxone to block opioid receptors and reduce alcohol craving"
    },
    "answer": "B",
    "explanation": "Naltrexone reduces heavy drinking and is a first-line option when opioids are not in use and liver function is acceptable. Unsupervised disulfiram has weak evidence because adherence is poor and it only deters drinking through an aversive reaction. Benzodiazepines treat withdrawal and carry misuse risk, so they are not used as maintenance therapy. Buprenorphine treats opioid use disorder and does not have a role in alcohol craving.",
    "id": 28
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A healthy 55-year-old woman had chickenpox as a child and has never received a zoster vaccine. She has no immunocompromising condition. Which of the following is the most appropriate recommendation?",
    "options": {
      "A": "Two doses of the recombinant zoster vaccine given 2 to 6 months apart",
      "B": "A single dose of the recombinant zoster vaccine, given now without a second dose",
      "C": "The live attenuated zoster vaccine, because live products produce better immunity at her age",
      "D": "Deferral of zoster vaccination until age 65 when the vaccine is recommended for the first time"
    },
    "answer": "A",
    "explanation": "The recombinant vaccine is recommended in two doses for adults 50 and older, separated by 2 to 6 months, and it is highly effective. A single dose leaves protection incomplete. The live vaccine is no longer marketed in the United States and is less effective and waning over time. The recommended age is 50, so waiting until 65 delays protection during a period of rising shingles incidence.",
    "id": 29
  },
  {
    "domain": "prevention",
    "chapter": 3,
    "question": "A 64-year-old man with hypertension and a 10-year atherosclerotic cardiovascular disease risk of 12 percent has no history of coronary disease, stroke, or gastrointestinal bleeding. He asks whether he should start daily low-dose aspirin. Which of the following is the best response?",
    "options": {
      "A": "Start aspirin 81 mg daily because his risk exceeds the threshold for primary prevention",
      "B": "Do not start aspirin for primary prevention, because bleeding risk offsets benefit at his age",
      "C": "Start aspirin 325 mg daily because a higher dose provides greater protection from events",
      "D": "Start clopidogrel daily as a safer alternative to aspirin for primary prevention at his age"
    },
    "answer": "B",
    "explanation": "For adults 60 and older, the Task Force recommends against initiating aspirin for primary prevention because bleeding offsets the benefit, and a statin and blood pressure control are better uses of the risk estimate. Starting 81 mg ignores that recommendation. A higher dose increases bleeding without added protection. Clopidogrel is not studied or recommended for primary prevention and carries bleeding risk of its own.",
    "id": 30
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 29-year-old woman with anorexia nervosa is admitted with a body mass index of 14 kg/m2 after eating very little for 3 weeks. Heart rate is 48/min. Serum phosphate is 2.1 mg/dL, potassium 3.2 mEq/L, and magnesium 1.5 mg/dL. Which of the following is the most appropriate approach to nutrition?",
    "options": {
      "A": "Start full caloric goal feeding at once, to correct weight loss as quickly as possible",
      "B": "Give thiamine, replace electrolytes, and start low-calorie feeding that is advanced gradually under monitoring",
      "C": "Start an infusion of 10 percent dextrose and delay thiamine until the serum phosphate normalizes",
      "D": "Withhold all nutrition for several days until all of the electrolyte abnormalities have corrected"
    },
    "answer": "B",
    "explanation": "She is at high risk of refeeding syndrome because of a very low body mass index, prolonged poor intake, and low baseline phosphate, potassium, and magnesium. Safe care combines thiamine before feeding, correction of electrolytes, and an initial intake of about 10 to 20 kcal/kg/day with daily monitoring. Immediate full feeding would trigger severe hypophosphatemia and cardiac complications. Dextrose without thiamine can precipitate Wernicke encephalopathy and worsen the shifts. Prolonged withholding prolongs starvation, which is itself dangerous.",
    "id": 31
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 55-year-old man with chronic alcohol use is brought to the emergency department with confusion, an unsteady gait, and horizontal nystagmus. Glucose by fingerstick is 78 mg/dL. Which of the following is the most appropriate next step in management?",
    "options": {
      "A": "Administer high-dose intravenous thiamine before or together with any glucose-containing fluids",
      "B": "Administer intravenous dextrose first, then give thiamine once the mental status has improved",
      "C": "Administer oral folic acid and a multivitamin, and observe for improvement over the next day",
      "D": "Administer intravenous naloxone, because the confusion is most likely caused by occult opioid use"
    },
    "answer": "A",
    "explanation": "Confusion, ataxia, and nystagmus in an alcohol-dependent patient indicate Wernicke encephalopathy, which requires high-dose intravenous thiamine and which glucose alone can precipitate or worsen. Giving dextrose first reverses the proper sequence and risks irreversible Korsakoff syndrome. Oral folate and a multivitamin do not supply enough thiamine to treat an acute emergency. Naloxone treats opioid toxicity, and nothing in the presentation suggests respiratory depression or pinpoint pupils.",
    "id": 32
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 68-year-old woman has fatigue and tingling in both feet for 6 months. She takes metformin and omeprazole. Examination shows loss of vibration and position sense in the toes. Hemoglobin is 9.8 g/dL with a mean corpuscular volume of 112 fL, and methylmalonic acid is elevated. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Folic acid 1 mg daily alone, because folate corrects the macrocytic anemia efficiently",
      "B": "Oral ferrous sulfate daily for 3 months, because iron deficiency commonly causes neuropathy",
      "C": "Subcutaneous epoetin alfa weekly, because the anemia is severe and the neuropathy is unlikely to respond",
      "D": "Cyanocobalamin 1,000 mcg intramuscularly, followed by continued high-dose replacement at regular intervals"
    },
    "answer": "D",
    "explanation": "Macrocytic anemia with dorsal column signs and elevated methylmalonic acid indicates vitamin B12 deficiency, likely related to long-term metformin and acid suppression, and it calls for B12 replacement, either intramuscular or high-dose oral. Folic acid alone can improve the anemia while allowing neurologic damage to progress. Iron deficiency produces microcytosis, not a mean corpuscular volume of 112 fL. Erythropoietin does not address the cause and does not prevent neurologic injury.",
    "id": 33
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 41-year-old woman with a body mass index of 35 kg/m2 and prediabetes is interested in starting once-weekly tirzepatide for weight loss. Which of the following aspects of her history is most important to obtain before prescribing?",
    "options": {
      "A": "Whether she has ever had mild heartburn that responds to over-the-counter antacids",
      "B": "Whether she or a family member has had medullary thyroid carcinoma or multiple endocrine neoplasia type 2",
      "C": "Whether she has a history of mild seasonal allergic rhinitis treated with antihistamines",
      "D": "Whether she has had a prior appendectomy or other uncomplicated abdominal surgery in the past"
    },
    "answer": "B",
    "explanation": "GLP-1 receptor agonists and tirzepatide carry a boxed warning for thyroid C-cell tumors and are contraindicated with a personal or family history of medullary thyroid carcinoma or multiple endocrine neoplasia type 2. Mild reflux and allergic rhinitis are not contraindications, though reflux may be worsened. Uncomplicated abdominal surgery does not preclude therapy, although a history of pancreatitis or gastroparesis would warrant caution.",
    "id": 34
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 55-year-old man with a body mass index of 33 kg/m2 had a myocardial infarction 2 years ago. He does not have diabetes and takes aspirin, a statin, and a beta blocker. He has been unable to sustain weight loss with lifestyle changes. Which of the following is the most appropriate pharmacotherapy?",
    "options": {
      "A": "Phentermine, because it is the most effective short-term appetite suppressant for his body mass index",
      "B": "Orlistat, because it has no systemic effects and avoids all concerns about cardiovascular safety",
      "C": "Naltrexone-bupropion, because it is preferred for patients with a previous myocardial infarction",
      "D": "Semaglutide 2.4 mg weekly, which also reduces the risk of major adverse cardiovascular events"
    },
    "answer": "D",
    "explanation": "In the SELECT trial, semaglutide lowered major cardiovascular events by about 20 percent in adults with obesity and established cardiovascular disease without diabetes, making it the best choice here. Phentermine is a sympathomimetic that is avoided in coronary disease. Orlistat produces only modest weight loss and has no proven cardiovascular benefit, and malabsorption of fat-soluble vitamins is a concern. Naltrexone-bupropion can raise blood pressure and heart rate and has no cardiovascular outcome advantage.",
    "id": 35
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 38-year-old woman had a Roux-en-Y gastric bypass 6 months ago and has lost 30 percent of her body weight. She asks what she needs to do over the long term to stay healthy. Which of the following is the best advice?",
    "options": {
      "A": "Supplements are needed only for the first 3 months, and then a regular diet is sufficient",
      "B": "Take a daily iron supplement alone, because iron is the only micronutrient affected by the bypass",
      "C": "Take a lifelong multivitamin with calcium citrate, vitamin D, vitamin B12, and iron, and have periodic laboratory monitoring",
      "D": "Take large doses of vitamin A and vitamin E daily to prevent deficiencies in fat-soluble vitamins"
    },
    "answer": "C",
    "explanation": "Gastric bypass reduces intake and bypasses the duodenum and proximal jejunum, so deficiencies of iron, B12, calcium, vitamin D, folate, thiamine, copper, and zinc can appear years later; lifelong supplementation and surveillance are therefore standard. Stopping supplements at 3 months allows deficiencies to develop silently. Iron alone ignores B12, calcium, and other nutrients. Megadoses of fat-soluble vitamins risk toxicity and are not the recommended approach.",
    "id": 36
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 45-year-old man who underwent Roux-en-Y gastric bypass 3 months ago reports that about 20 minutes after meals he has palpitations, flushing, sweating, abdominal cramping, and loose stool. Glucose measured during an episode is 92 mg/dL. Which of the following is the most appropriate initial management?",
    "options": {
      "A": "Start intravenous proton pump inhibitor therapy for a suspected marginal ulcer at the anastomosis",
      "B": "Order an urgent upper gastrointestinal series to evaluate for a possible anastomotic leak today",
      "C": "Begin long-term insulin therapy to prevent large swings in glucose after each meal",
      "D": "Counsel on small frequent protein-containing meals, fewer simple carbohydrates, and liquids apart from solids"
    },
    "answer": "D",
    "explanation": "Early dumping syndrome, with symptoms within 30 minutes of eating and a normal glucose, is managed first with dietary changes that slow transit and reduce osmotic load. Marginal ulcer presents with epigastric pain and bleeding rather than postprandial vasomotor symptoms. A leak occurs in the early postoperative days with fever and tachycardia, not months later. Insulin would be inappropriate, since the glucose is normal and the late form of dumping causes low, not high, glucose.",
    "id": 37
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 62-year-old man is intubated and mechanically ventilated for septic shock from pneumonia. He has been resuscitated, and norepinephrine is running at a low, stable dose. The abdomen is soft, and he has no known gastrointestinal disease. He was previously well nourished. Which of the following is the best approach to nutrition?",
    "options": {
      "A": "Start total parenteral nutrition through a central line on the first day of admission",
      "B": "Withhold all nutrition for at least 7 days to avoid complications of early feeding",
      "C": "Start nasogastric enteral feeding within 24 to 48 hours and advance toward targets",
      "D": "Wait until bowel sounds and passage of flatus return before any feeding is attempted"
    },
    "answer": "C",
    "explanation": "Early enteral nutrition within 24 to 48 hours in a hemodynamically stabilized patient with a working gut preserves gut barrier function and lowers infectious complications. Day-one parenteral nutrition in a well-nourished patient increases infections without benefit. A week without feeding is unnecessary in a patient who can be fed. Bowel sounds and flatus do not predict feeding tolerance and are not required before starting.",
    "id": 38
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 74-year-old widower lives alone and eats mostly tea, toast, and canned soup. He presents with bleeding gums, easy bruising, and painful swelling of the left knee. Examination shows perifollicular hemorrhages and corkscrew hairs on the legs. Prothrombin time and platelet count are normal. Which of the following is the most likely cause?",
    "options": {
      "A": "Vitamin C deficiency, a disorder of collagen synthesis that responds quickly to ascorbic acid",
      "B": "Vitamin K deficiency, a disorder of clotting factor carboxylation that prolongs the prothrombin time",
      "C": "Niacin deficiency, causing sun-exposed dermatitis along with diarrhea and cognitive impairment",
      "D": "Thiamine deficiency, causing neuropathy or high-output cardiac failure with peripheral edema"
    },
    "answer": "A",
    "explanation": "Perifollicular hemorrhage, corkscrew hairs, gum bleeding, and hemarthrosis in a person with a restricted diet indicate scurvy, which responds to oral vitamin C within days. Vitamin K deficiency would prolong the prothrombin time, which is normal here. Niacin deficiency produces dermatitis in sun-exposed areas, diarrhea, and dementia. Thiamine deficiency causes neuropathy, cardiac failure, or Wernicke encephalopathy, not mucocutaneous bleeding.",
    "id": 39
  },
  {
    "domain": "nutrition",
    "chapter": 4,
    "question": "A 40-year-old woman takes an over-the-counter supplement containing 500 mg of a vitamin daily for fatigue. She now has numbness in both feet, loss of position sense, and gait ataxia. Nerve conduction studies show a sensory neuronopathy. Which of the following vitamins is most likely responsible?",
    "options": {
      "A": "Vitamin B12, because high doses commonly produce a sensory neuropathy from dorsal column injury",
      "B": "Pyridoxine, because chronic intake above about 100 to 200 mg daily can damage sensory neurons",
      "C": "Vitamin C, because high-dose ascorbic acid is directly toxic to the large sensory nerve fibers",
      "D": "Riboflavin, because large doses accumulate in the dorsal root ganglia and produce sensory loss"
    },
    "answer": "B",
    "explanation": "Chronic high-dose pyridoxine causes a sensory neuronopathy with numbness, ataxia, and loss of proprioception, and the picture improves slowly after the supplement is stopped. Vitamin B12 is not neurotoxic at high doses, and its deficiency, not excess, causes dorsal column disease. Vitamin C in high doses causes kidney stones and diarrhea but not a sensory neuronopathy. Riboflavin is water soluble and excreted, with no recognized neurotoxicity.",
    "id": 40
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A 72-year-old man with moderate Alzheimer dementia is admitted with a hip fracture. Orthopedic surgery recommends repair. He says he wants the operation because \"it hurts and I want to walk again,\" correctly states the surgery will involve anesthesia and a recovery period, and says he understands that without surgery he would remain bedridden. His daughter says he should not decide because of his dementia. What is the most appropriate next step?",
    "options": {
      "A": "Obtain a court-appointed guardian before proceeding with the operation",
      "B": "Request a formal psychiatric evaluation and delay the operation until it is complete",
      "C": "Ask the daughter to sign consent as the surrogate for the surgical procedure",
      "D": "Document his capacity for this decision and obtain his informed consent for surgery"
    },
    "answer": "D",
    "explanation": "Capacity is decision-specific, and this patient communicates a stable choice, understands the procedure and the consequence of forgoing it, and links it to his own goals, so he can consent himself. Dementia alone does not remove the right to decide. Seeking guardianship is a legal remedy for persistent incapacity and would delay time-sensitive care for no reason. A routine psychiatric consultation is helpful only when capacity is truly uncertain, and any treating physician can assess it here. Surrogate consent is reserved for patients who lack capacity, so using the daughter would override a valid decision.",
    "id": 41
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A 58-year-old woman with metastatic pancreatic cancer is admitted unresponsive after a fall at home. She has no health care proxy on file. Her husband of 30 years and her two adult children are at the bedside. The husband says she would not want a feeding tube or prolonged ventilation, and the children disagree and ask that everything be done. Who should make the decision under the usual default hierarchy?",
    "options": {
      "A": "The eldest child, because the children share the same legal standing",
      "B": "The hospital ethics committee, which has authority to decide for the patient",
      "C": "The husband, who applies what he knows of her wishes and values",
      "D": "The attending physician, who should choose the most medically reasonable course"
    },
    "answer": "C",
    "explanation": "When no agent is named, state default statutes place the spouse first, and the spouse uses substituted judgment based on the patient's known values. Children rank below a spouse, and birth order has no legal role. An ethics committee advises and mediates disputes but does not hold decision-making authority and does not replace the legal surrogate. The physician should lead the discussion and recommend a plan, but should not unilaterally decide when a legally recognized surrogate is available and engaged.",
    "id": 42
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A 45-year-old man is admitted for pneumonia and tells his physician in confidence that he is HIV-positive after a new diagnosis last week. His wife, who is also a patient of the same practice, has asked the physician whether her husband has any infections she should know about. He refuses to tell her and says he will not return to the practice if the physician does. What is the most appropriate response?",
    "options": {
      "A": "Encourage him to disclose and offer help, while involving the health department for notification",
      "B": "Tell the wife right away, because she faces a real risk of transmission from him",
      "C": "Document his refusal and take no further action, since confidentiality is an absolute duty",
      "D": "Inform the wife only after the hospital legal department grants permission to disclose his status"
    },
    "answer": "A",
    "explanation": "The best approach is counseling the patient to notify his partner, reinforcing the importance of testing, and using the public health department, which can notify exposed partners without identifying him. Telling the wife directly breaches confidentiality when a less intrusive route exists and is not required of the clinician in most jurisdictions. Treating confidentiality as absolute ignores the public health reporting duty and the effective partner services program. Routing the decision through legal counsel to disclose directly does not make the disclosure appropriate, and it delays protective action for the spouse.",
    "id": 43
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A 66-year-old woman receives a dose of intravenous heparin that is ten times the ordered amount after a decimal point error in transcription. A repeat partial thromboplastin time is markedly elevated, and she is bleeding from her intravenous site, but she is hemodynamically stable. Protamine is administered. Which of the following is the most appropriate next step regarding the error?",
    "options": {
      "A": "Wait until the bleeding resolves and discuss the event only if she asks",
      "B": "Document in the chart that the nurse transcribed the order incorrectly and omit mention to the patient",
      "C": "Disclose to the family only if the patient suffers a lasting complication",
      "D": "Inform the patient promptly about the error, apologize, and file an event report"
    },
    "answer": "D",
    "explanation": "Ethical practice and accreditation standards require prompt, honest disclosure of an error that reached the patient, with an apology, an explanation of the plan, and a report to the safety system. Waiting for her to ask withholds information she is entitled to. Charting blame on an individual belongs neither in the record nor in the disclosure, and omitting the event from the patient conversation is deceptive. Disclosure does not depend on a lasting injury, and the patient, not only the family, is the first person to be told.",
    "id": 44
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A 24-year-old resident is observed by a nurse and a co-resident to have slurred speech, an odor of alcohol, and unsteady gait while preparing to perform a central line placement on a patient. Which of the following is the most appropriate immediate action?",
    "options": {
      "A": "Wait until the end of the shift and speak with the resident privately",
      "B": "Perform the procedure with close supervision since the resident is training",
      "C": "Stop the resident from performing the procedure and notify the program leadership",
      "D": "Call the resident's family to arrange a ride home and handle the matter informally"
    },
    "answer": "C",
    "explanation": "Patient safety comes first, so the resident must be removed from patient care immediately and the concern escalated through the supervisor or program director, who can arrange evaluation and referral to a physician health program. Waiting until later leaves the patient at risk. Supervision does not make it safe for an impaired person to place a line. Handling it informally through family contact avoids the required reporting channel and offers no safeguard or treatment pathway for the resident.",
    "id": 45
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A 79-year-old man with end-stage heart failure and a POLST requesting no intubation and no CPR develops acute pulmonary edema. His blood pressure is 160/90 mm Hg and his oxygen saturation is 84 percent on room air. His wife asks the team to do whatever they can within his goals. Which of the following is the most appropriate management?",
    "options": {
      "A": "Withhold all further treatment because the POLST functions as a do-not-treat order",
      "B": "Provide intravenous diuretics, nitrates, and noninvasive ventilation consistent with his orders",
      "C": "Intubate him now because acute respiratory failure from pulmonary edema is reversible",
      "D": "Transfer him to hospice care immediately and discontinue all disease-directed therapy now"
    },
    "answer": "B",
    "explanation": "Limits on intubation and CPR do not prohibit other effective treatments, and diuretics, vasodilators, and noninvasive positive-pressure ventilation fit within his stated goals unless he has also declined them. Equating the form with \"do not treat\" misreads it and would deprive him of beneficial care. Intubation directly violates a documented refusal made by a capable patient. Hospice enrollment requires patient choice and a discussion of goals, and an acute reversible event is not a reason to stop all therapy.",
    "id": 46
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A 35-year-old man with severe injuries from a motor vehicle collision is unconscious and bleeding, with a hemoglobin of 5.8 g/dL. He has no identification, and no family can be reached. The surgeon recommends emergency transfusion and laparotomy. A wallet card found later states he is a Jehovah's Witness, but it is undated and unsigned. What is the most appropriate management?",
    "options": {
      "A": "Withhold transfusion and proceed with surgery using blood conservation techniques only",
      "B": "Delay surgery until a court order can be obtained for transfusion",
      "C": "Wait for the hospital chaplain to interpret the card",
      "D": "Proceed with lifesaving transfusion and surgery under the emergency exception"
    },
    "answer": "D",
    "explanation": "In an emergency with an incapacitated patient and no valid, verifiable refusal, implied consent allows lifesaving treatment. An undated and unsigned card is not reliable evidence of a current informed refusal, so it does not override the presumption in favor of preserving life. Treating without blood would honor a document that may not reflect his wishes and could cause preventable death. A court order is unnecessary and the delay would be dangerous, and a chaplain cannot validate a refusal.",
    "id": 47
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A hospital reviews a series of wrong-site nerve block events over six months. Which of the following is the most appropriate approach to the analysis?",
    "options": {
      "A": "Identify the anesthesiologists who performed the blocks and discipline each of them",
      "B": "Perform a root cause analysis of process factors such as site marking and time-outs",
      "C": "Limit review to the single event that caused the greatest harm to the patient",
      "D": "Wait for the next event so that a pattern can be established"
    },
    "answer": "B",
    "explanation": "Root cause analysis examines the workflow, communication, equipment, and checklist failures that allow errors to occur, and generates system fixes such as universal site marking and a mandatory time-out. Punishing individuals alone, without distinguishing human error from reckless behavior, discourages reporting and leaves the process unchanged. Reviewing only the worst event ignores the shared causes across the series. A pattern already exists, and waiting for another event places more patients at risk.",
    "id": 48
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A hospital medicine group wants to reduce 30-day readmission after discharge for patients with heart failure. They plan to start a program in which a nurse calls each patient within 48 hours and to measure readmission rates monthly. They are concerned the change might lengthen the initial hospital stay. Which of the following is the best example of a balancing measure for this project?",
    "options": {
      "A": "Average length of stay during the index hospital admission for heart failure patients",
      "B": "Proportion of patients receiving the follow-up telephone call within 48 hours of discharge",
      "C": "Thirty-day readmission rate for heart failure among all discharged patients",
      "D": "Number of nurses trained to deliver the telephone call"
    },
    "answer": "A",
    "explanation": "A balancing measure tracks unintended consequences elsewhere in the system, so length of the index stay is a fitting choice for this concern. The proportion called within 48 hours is a process measure showing whether the intervention is delivered. The readmission rate is the main outcome measure the project hopes to improve. Counting trained nurses is a structure measure of resources and says nothing about effect or harm.",
    "id": 49
  },
  {
    "domain": "ethics_safety",
    "chapter": 5,
    "question": "A 52-year-old woman is being transferred at shift change from the day team to the night team. The outgoing resident gives a long unstructured summary in a noisy hallway, and the oncoming resident takes no notes. Later the night resident does not know that the patient's potassium needs to be rechecked. Which of the following would most likely have prevented this error?",
    "options": {
      "A": "A longer verbal summary of the hospital course with additional historical detail",
      "B": "A structured handoff such as I-PASS with an action list and receiver synthesis",
      "C": "Having the day resident stay in the hospital until midnight to cover problems",
      "D": "Avoiding handoffs altogether by assigning each patient to a single resident"
    },
    "answer": "B",
    "explanation": "Structured handoff tools with an explicit to-do list, severity statement, contingency plan, and receiver read-back have been shown to lower preventable adverse events. A longer narrative increases cognitive load and buries the key action items. Extending shifts causes fatigue, which is itself a safety hazard and conflicts with duty-hour limits. Eliminating handoffs is not feasible in a 24-hour hospital, and continuity cannot be maintained by a single resident.",
    "id": 50
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 56-year-old man with newly diagnosed hypertension has a blood pressure of 164/102 mm Hg on two visits. He has no diabetes, and his creatinine is 0.9 mg/dL with a potassium of 4.2 mEq/L. He takes no medications. Which of the following is the most appropriate initial therapy?",
    "options": {
      "A": "Lifestyle modification alone for six months before any pharmacologic treatment",
      "B": "A single-pill combination of an ACE inhibitor and amlodipine, with lifestyle changes",
      "C": "Metoprolol succinate monotherapy titrated to a heart rate of 60 beats per minute",
      "D": "An ACE inhibitor and an ARB combined to block the renin system fully"
    },
    "answer": "B",
    "explanation": "Stage 2 hypertension, or a pressure more than 20/10 mm Hg above goal, calls for two agents from different first-line classes started together, preferably in one pill to improve adherence. A trial of lifestyle alone is appropriate only for stage 1 disease at lower risk. Beta blockers do not carry outcome benefit as monotherapy in uncomplicated hypertension and are reserved for specific indications. Combining an ACE inhibitor with an ARB raises the rates of hyperkalemia and kidney injury without added benefit.",
    "id": 51
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 34-year-old woman has a blood pressure of 168/104 mm Hg despite lisinopril, amlodipine, and chlorthalidone at maximal doses, taken reliably. Her serum potassium is 3.1 mEq/L, and she has mild muscle weakness. She does not use over-the-counter drugs. What is the best next step in diagnosis?",
    "options": {
      "A": "Measure plasma free metanephrines to look for a catecholamine-secreting tumor",
      "B": "Order duplex ultrasonography of both renal arteries as the first test",
      "C": "Perform an overnight dexamethasone suppression test for Cushing syndrome",
      "D": "Check a morning plasma aldosterone concentration and plasma renin activity"
    },
    "answer": "D",
    "explanation": "Resistant hypertension with spontaneous hypokalemia strongly suggests primary aldosteronism, which is screened by the aldosterone-to-renin ratio, with elevated aldosterone and suppressed renin being typical. Metanephrines are indicated for paroxysms of headache, sweating, and palpitations, which are absent here. Renal artery imaging is considered with abrupt onset, flash pulmonary edema, or a creatinine rise after an ACE inhibitor. Dexamethasone suppression is reserved for features of hypercortisolism such as striae, central obesity, and easy bruising.",
    "id": 52
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 61-year-old man comes to the emergency department with a headache. His blood pressure is 214/124 mm Hg in both arms. He has no chest pain, dyspnea, visual change, or neurologic deficit. Funduscopy shows no papilledema or hemorrhage. His creatinine is 1.0 mg/dL, and the ECG and urinalysis are normal. He ran out of his medications two weeks ago. What is the most appropriate management?",
    "options": {
      "A": "Start an intravenous nicardipine infusion and admit him to the intensive care unit",
      "B": "Give sublingual nifedipine to lower the pressure within the first hour",
      "C": "Restart oral antihypertensive therapy and arrange outpatient follow-up within a few days",
      "D": "Administer intravenous sodium nitroprusside to reach a pressure below 140/90 mm Hg"
    },
    "answer": "C",
    "explanation": "Severe elevation without acute target organ damage is not an emergency, and gradual lowering over days with oral drugs and early follow-up is safest. Intravenous infusion in an intensive care unit is needed only when there is organ injury such as encephalopathy, dissection, or pulmonary edema. Sublingual nifedipine causes unpredictable precipitous drops and has been associated with stroke and myocardial infarction. Sodium nitroprusside to a normal pressure would risk hypoperfusion and cyanide toxicity without any benefit in an asymptomatic patient.",
    "id": 53
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 58-year-old man arrives with severe tearing chest pain radiating to the back. His blood pressure is 196/108 mm Hg in the right arm and 150/84 mm Hg in the left arm, heart rate is 104 beats per minute, and CT angiography confirms a type B aortic dissection with a rising pain score. Which of the following is the best initial drug therapy?",
    "options": {
      "A": "Intravenous hydralazine boluses to lower the blood pressure as quickly as possible",
      "B": "Intravenous nitroglycerin alone to reduce the myocardial oxygen demand and chest pain",
      "C": "Sublingual captopril to begin gradual, outpatient-style blood pressure control over several days",
      "D": "Intravenous esmolol, titrated to a heart rate near 60 beats per minute"
    },
    "answer": "D",
    "explanation": "In aortic dissection the aim is to reduce the force of ventricular ejection and the shear on the aortic wall, so an intravenous beta blocker comes first, lowering the heart rate to about 60 and the systolic pressure below 120 mm Hg. Hydralazine and nitroglycerin used alone cause reflex tachycardia, which raises shear stress and may worsen the dissection. An oral ACE inhibitor acts too slowly for a life-threatening vascular emergency.",
    "id": 54
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 52-year-old woman with type 2 diabetes mellitus has an LDL-C of 128 mg/dL, a blood pressure of 124/76 mm Hg, and no cardiovascular disease. She is not pregnant and takes metformin. Which of the following is the most appropriate lipid therapy?",
    "options": {
      "A": "Dietary change alone for a trial of six months before starting any drug",
      "B": "Fenofibrate to lower the triglyceride level and the non-HDL cholesterol level together",
      "C": "A moderate- or high-intensity statin to lower LDL-C by at least 30 percent",
      "D": "Ezetimibe monotherapy because it is the least likely drug to cause muscle symptoms"
    },
    "answer": "C",
    "explanation": "Adults aged 40 to 75 with diabetes and an LDL-C of 70 to 189 mg/dL are a statin benefit group, and at least moderate-intensity therapy is indicated with the intensity raised when risk enhancers are present. Waiting for lifestyle alone leaves a high-risk patient untreated. Fenofibrate has not shown outcome benefit on top of statins and is aimed at severe hypertriglyceridemia. Ezetimibe lowers LDL-C modestly and lacks first-line outcome data as monotherapy in primary prevention.",
    "id": 55
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 63-year-old man had an acute myocardial infarction six weeks ago and is taking atorvastatin 80 mg daily with good adherence. His LDL-C is 88 mg/dL, and his triglycerides are 140 mg/dL. He has diabetes and chronic kidney disease. Which of the following is the best next step in lipid management?",
    "options": {
      "A": "Add ezetimibe 10 mg daily to the maximally tolerated statin",
      "B": "Substitute niacin extended-release for part of the statin dose",
      "C": "Stop the statin and begin gemfibrozil to reduce triglyceride levels",
      "D": "Continue the current regimen and recheck the LDL-C in one year"
    },
    "answer": "A",
    "explanation": "After an acute coronary syndrome, a patient at very high risk whose LDL-C remains at or above 70 mg/dL on a maximal statin should add ezetimibe, which lowered events in IMPROVE-IT, with a PCSK9 inhibitor as the next step. Niacin adds adverse effects without a benefit beyond statin therapy. Gemfibrozil raises statin levels and does not address his LDL-C. Waiting a year ignores that the highest event risk occurs in the months after infarction.",
    "id": 56
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 27-year-old man has an LDL-C of 312 mg/dL on repeated measurement. His father had a myocardial infarction at age 41. Examination shows thickened Achilles tendons. TSH and urine protein are normal. Which of the following is the most likely diagnosis?",
    "options": {
      "A": "Polygenic hypercholesterolemia from a diet high in saturated fat",
      "B": "Heterozygous familial hypercholesterolemia from an inherited LDL receptor defect",
      "C": "Familial hypertriglyceridemia with elevated very-low-density lipoprotein and chylomicron particles",
      "D": "Cholesterol ester storage disease with hepatic involvement and low HDL"
    },
    "answer": "B",
    "explanation": "An LDL-C of 190 mg/dL or higher, tendon xanthomas, and premature coronary disease in a first-degree relative define familial hypercholesterolemia, usually from LDL receptor mutations with autosomal dominant inheritance. Dietary polygenic disease rarely reaches such levels and does not produce tendon xanthomas. Familial hypertriglyceridemia raises triglycerides and causes eruptive xanthomas rather than a markedly elevated LDL-C. Storage disease is rare and is accompanied by hepatomegaly and abnormal liver tests, which are absent here.",
    "id": 57
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 49-year-old man with obesity and poorly controlled type 2 diabetes mellitus has a triglyceride level of 1,640 mg/dL and a lipase of 40 U/L. He has no abdominal pain. Which of the following is the best initial management?",
    "options": {
      "A": "Fenofibrate with a very low-fat diet and strict glycemic control",
      "B": "High-dose atorvastatin alone to lower triglycerides by 50 percent",
      "C": "Bile acid sequestrant therapy to bind lipids in the intestine",
      "D": "Plasmapheresis as an outpatient to remove the excess chylomicrons"
    },
    "answer": "A",
    "explanation": "A triglyceride level above 500 mg/dL carries a risk of pancreatitis, and the goal is to bring it down with a fibrate, a very low-fat diet, alcohol avoidance, and better glycemic control, which is itself a major lever. Statins lower triglycerides only modestly and are not the main drug in this setting. Bile acid sequestrants can raise triglycerides and are contraindicated when the level is above 300 mg/dL. Plasmapheresis is reserved for pancreatitis with severe hypertriglyceridemia, not an asymptomatic outpatient.",
    "id": 58
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 29-year-old woman at 10 weeks of gestation has chronic hypertension and a blood pressure of 152/98 mm Hg. She currently takes lisinopril for hypertension. Which of the following is the most appropriate change in therapy?",
    "options": {
      "A": "Continue lisinopril and add hydrochlorothiazide to reach a goal below 130/80 mm Hg",
      "B": "Replace lisinopril with extended-release nifedipine or labetalol, and plan low-dose aspirin",
      "C": "Replace lisinopril with losartan since ARBs are safe in pregnancy",
      "D": "Stop all antihypertensive medications until the beginning of the second trimester"
    },
    "answer": "B",
    "explanation": "ACE inhibitors and ARBs are teratogenic, causing fetal renal dysfunction, oligohydramnios, and skull hypoplasia, and must be stopped and replaced with labetalol, extended-release nifedipine, or methyldopa. Adding a diuretic keeps the harmful drug and aims at a target that is not used in pregnancy. Switching to an ARB makes the same mistake. Stopping all treatment risks maternal complications at a pressure that already warrants therapy, and low-dose aspirin is also advised for preeclampsia prevention.",
    "id": 59
  },
  {
    "domain": "hypertension_lipids",
    "chapter": 6,
    "question": "A 66-year-old man with hypertension and gout takes amlodipine and valsartan. His blood pressure is 148/88 mm Hg and his potassium is 4.0 mEq/L. His physician wants to add a diuretic. Which choice is the best addition to the regimen?",
    "options": {
      "A": "Hydrochlorothiazide, because it raises the serum uric acid the least of all diuretics",
      "B": "Furosemide, because loop diuretics are the preferred class for uncomplicated hypertension in adults",
      "C": "Triamterene, because it provides potassium sparing and has no effect on gout",
      "D": "Chlorthalidone, with uric acid monitoring and a plan for gout prophylaxis"
    },
    "answer": "D",
    "explanation": "Chlorthalidone has the strongest outcome evidence among diuretics and adds substantial pressure lowering to this regimen. It does raise uric acid and can precipitate gout, so monitoring and a prophylaxis plan are reasonable. Hydrochlorothiazide also raises uric acid and has less outcome evidence, so it is no safer here. Loop diuretics are not first-line for uncomplicated hypertension and also raise uric acid. Triamterene adds hyperkalemia risk with an ARB and is not a clean choice in gout.",
    "id": 60
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 58-year-old man comes to the emergency department 90 minutes after the onset of crushing substernal chest pain. His blood pressure is 138/84 mm Hg and heart rate is 88 beats per minute. The ECG shows 3 mm ST elevation in leads V2 to V5. The nearest hospital has a catheterization laboratory and can begin PCI within 60 minutes. Which of the following is the most appropriate management?",
    "options": {
      "A": "Give aspirin and a P2Y12 inhibitor and proceed with primary percutaneous coronary intervention",
      "B": "Obtain serial troponin measurements and proceed to angiography only if the level rises",
      "C": "Administer alteplase intravenously and arrange angiography the following morning for risk stratification",
      "D": "Start heparin and a beta blocker and schedule a stress test before discharge"
    },
    "answer": "A",
    "explanation": "Acute STEMI with symptoms under 12 hours and rapid access to a catheterization laboratory is treated with primary PCI, after antiplatelet loading and anticoagulation. Waiting for troponin delays reperfusion and is unnecessary because the ECG establishes the diagnosis. Fibrinolysis is reserved for situations in which PCI cannot be provided within 120 minutes of first medical contact. Anticoagulation and a beta blocker without reperfusion leave the occluded artery closed, and stress testing has no role in the acute setting.",
    "id": 61
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 64-year-old woman has chest tightness with exertion for three months, relieved by rest. She has hypertension and hyperlipidemia. Her resting ECG is normal, and she walks briskly on a treadmill without difficulty. Troponin is undetectable. Which of the following is the best next step in evaluation?",
    "options": {
      "A": "Immediate invasive coronary angiography to define her anatomy",
      "B": "Coronary artery calcium scoring alone to decide whether to continue evaluation",
      "C": "Exercise treadmill testing with ECG monitoring or coronary CT angiography",
      "D": "Reassurance and discharge since her resting ECG shows no abnormality"
    },
    "answer": "C",
    "explanation": "In stable symptoms with an intermediate pretest probability, noninvasive testing is the first step, and she can exercise with a normal baseline ECG, so an exercise treadmill test or CT angiography is appropriate. Direct angiography exposes her to procedural risk without evidence of high-risk features, and ISCHEMIA showed no survival gain from routine invasive strategies. A calcium score does not establish whether her symptoms are caused by obstructive disease. A normal resting ECG does not exclude angina.",
    "id": 62
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 70-year-old man admitted with an inferior wall STEMI has a blood pressure of 78/50 mm Hg, a heart rate of 58 beats per minute, clear lung fields, and distended neck veins. ST elevation is greater in lead III than lead II. What is the most appropriate immediate management in addition to reperfusion?",
    "options": {
      "A": "Intravenous normal saline boluses guided by his blood pressure and neck vein examination",
      "B": "Intravenous furosemide to reduce his elevated central venous pressure and neck vein distension",
      "C": "Sublingual nitroglycerin to relieve the ischemic chest discomfort and lower his blood pressure",
      "D": "Intravenous morphine to reduce preload, anxiety, and the discomfort from his chest pain"
    },
    "answer": "A",
    "explanation": "Hypotension with clear lungs, jugular venous distension, and inferior ST elevation suggests right ventricular infarction, a preload-dependent state that responds to volume. Diuretics lower preload and drop cardiac output further. Nitroglycerin reduces preload and can cause profound hypotension in right ventricular infarction. Morphine is a venodilator with similar effects and is best avoided here.",
    "id": 63
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 61-year-old man develops sudden dyspnea and hypotension four days after an anterior STEMI treated with fibrinolysis. Examination shows a loud holosystolic murmur at the left lower sternal border with a palpable thrill and bilateral crackles. A right heart catheterization is performed. Which finding is most likely?",
    "options": {
      "A": "Equal oxygen saturation in the right atrium and the right ventricle",
      "B": "A step-up in oxygen saturation between the right atrium and the right ventricle",
      "C": "A large V wave on the pulmonary capillary wedge tracing with a normal oxygen saturation sequence",
      "D": "A pulseless electrical activity rhythm with equalization of diastolic pressures"
    },
    "answer": "B",
    "explanation": "A harsh holosystolic murmur with a thrill at the left lower sternal border several days after an anterior infarction indicates ventricular septal rupture, and the left-to-right shunt produces an oxygen saturation step-up at the right ventricle. An unchanged saturation sequence would argue against a shunt. A large V wave occurs in acute mitral regurgitation from papillary muscle rupture, which has a soft apical murmur. Pulseless electrical activity with diastolic equalization indicates tamponade from free wall rupture.",
    "id": 64
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 55-year-old man with a body weight of 90 kg is admitted with a non-ST-elevation myocardial infarction. He has had a transient ischemic attack 8 months ago. Angiography is planned within 24 hours for severe three-vessel disease. In addition to aspirin and heparin, which P2Y12 inhibitor is most appropriate?",
    "options": {
      "A": "Prasugrel 60 mg loading dose before angiography, then 10 mg once daily afterward",
      "B": "Abciximab infusion started in the emergency department as the second antiplatelet drug",
      "C": "Clopidogrel 75 mg daily started without a loading dose before the angiography",
      "D": "Ticagrelor 180 mg loading dose followed by 90 mg twice daily with aspirin"
    },
    "answer": "D",
    "explanation": "Ticagrelor is preferred in acute coronary syndrome and does not carry the contraindication of prior cerebrovascular events. Prasugrel is contraindicated after a stroke or transient ischemic attack because of higher rates of intracranial hemorrhage. Abciximab is a glycoprotein IIb/IIIa inhibitor, not a P2Y12 inhibitor, and is reserved for bailout during PCI. Clopidogrel needs a loading dose to act in time and is less effective than ticagrelor in this setting.",
    "id": 65
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 66-year-old man was discharged three weeks ago after an inferior STEMI treated with a drug-eluting stent. He returns with fever, pleuritic chest pain relieved by sitting forward, and a pericardial friction rub. Troponin is normal, and echocardiography shows a small pericardial effusion. His ECG shows no new Q waves. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Anticoagulation with warfarin to treat the pericardial inflammation and the effusion",
      "B": "Aspirin plus colchicine to treat the pericarditis that follows myocardial infarction",
      "C": "Immediate pericardiocentesis to drain the effusion and relieve pericardial pressure",
      "D": "Repeat coronary angiography to evaluate for early stent thrombosis in the stented artery"
    },
    "answer": "B",
    "explanation": "Pericarditis that begins several weeks after infarction with fever and a friction rub is characteristic of Dressler syndrome, treated with aspirin and colchicine, and avoiding corticosteroids and high-dose NSAIDs where possible. Anticoagulation raises the risk of hemorrhagic effusion. A small effusion without tamponade does not need drainage. Stent thrombosis presents with new ST elevation and troponin rise rather than a rub and normal enzymes.",
    "id": 66
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 72-year-old man with stable angina takes metoprolol and isosorbide mononitrate. Six hours ago he took sildenafil 50 mg for erectile dysfunction. He now has chest pain at rest. His blood pressure is 126/78 mm Hg and his ECG is nondiagnostic. Which of the following should be avoided in his immediate care?",
    "options": {
      "A": "Chewable aspirin 325 mg given immediately after the initial assessment of his pain",
      "B": "A 12-lead electrocardiogram obtained and interpreted within 10 minutes of his arrival",
      "C": "Supplemental oxygen only if his oxygen saturation falls below 90 percent on room air",
      "D": "Sublingual nitroglycerin for his pain, given within 24 hours of his recent sildenafil dose"
    },
    "answer": "D",
    "explanation": "Nitrates combined with phosphodiesterase-5 inhibitors can cause severe, refractory hypotension, and the interval to avoid is 24 hours for sildenafil and vardenafil and 48 hours for tadalafil. Because only six hours have passed, nitroglycerin should be withheld and other anti-ischemic strategies such as a beta blocker used instead. Aspirin, an early ECG, and selective oxygen are appropriate for any suspected acute coronary syndrome and carry no such interaction.",
    "id": 67
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 59-year-old woman with a history of well-controlled hypertension has an anterior STEMI treated with primary PCI. Echocardiography on day 3 shows an ejection fraction of 30 percent with an apical thrombus. She has no heart failure symptoms. Which of the following is most appropriate before discharge?",
    "options": {
      "A": "Aspirin alone because anticoagulation is contraindicated after recent percutaneous coronary intervention with stenting",
      "B": "Implantation of an ICD before discharge to prevent sudden death from arrhythmia",
      "C": "Oral anticoagulation for three to six months added to her antiplatelet therapy",
      "D": "Discontinuation of the beta blocker to improve her cardiac output and fatigue"
    },
    "answer": "C",
    "explanation": "Left ventricular thrombus after anterior infarction with apical akinesis is treated with oral anticoagulation for three to six months, with attention to bleeding risk when combined with antiplatelet therapy. Withholding anticoagulation risks systemic embolism and stroke. A defibrillator is deferred until at least 40 days after infarction (90 days after revascularization) because early function often recovers. Beta blockers improve survival with a reduced ejection fraction and are continued unless there is shock.",
    "id": 68
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 49-year-old man with chronic cocaine use presents with chest pain 2 hours after use. He is anxious and diaphoretic, with a blood pressure of 188/108 mm Hg and a heart rate of 118 beats per minute. The ECG shows sinus tachycardia and 1 mm ST depression in the lateral leads. Which of the following is the best initial medication?",
    "options": {
      "A": "Intravenous metoprolol to control his heart rate and lower his blood pressure",
      "B": "Intravenous lorazepam together with aspirin and sublingual nitroglycerin for the vasospasm",
      "C": "Intravenous adenosine to terminate the presumed supraventricular tachycardia at the bedside",
      "D": "Intravenous alteplase for presumed acute coronary thrombosis and ongoing myocardial ischemia"
    },
    "answer": "B",
    "explanation": "Cocaine toxicity produces catecholamine excess and coronary vasospasm, and the first-line treatment is a benzodiazepine, aspirin, and a vasodilator such as nitroglycerin or a calcium channel blocker. Beta blockers in the acute phase risk unopposed alpha stimulation and worsening vasoconstriction. Adenosine is for a regular narrow-complex reentrant tachycardia, which this is not. Fibrinolysis is indicated only for ST elevation myocardial infarction without access to PCI.",
    "id": 69
  },
  {
    "domain": "ischemic_heart",
    "chapter": 7,
    "question": "A 63-year-old man is 6 weeks past an anterior myocardial infarction. His ejection fraction is 32 percent on echocardiography, and he is in NYHA class II on carvedilol, lisinopril, eplerenone, and an SGLT2 inhibitor at target doses. His potassium is 4.6 mEq/L. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Add amiodarone to prevent sudden death from ventricular arrhythmias in patients after infarction",
      "B": "Repeat the echocardiogram in one year before making any decision about a device",
      "C": "Refer for primary prevention ICD implantation, confirming the ejection fraction on therapy",
      "D": "Replace lisinopril with a calcium channel blocker to improve his exercise tolerance"
    },
    "answer": "C",
    "explanation": "An ejection fraction of 35 percent or less persisting at least 40 days after infarction, despite guideline-directed therapy and with a life expectancy over a year, is an indication for a primary prevention ICD. Amiodarone does not improve survival for primary prevention. Postponing the decision for a year leaves him exposed to sudden death. Swapping an ACE inhibitor for a calcium channel blocker removes a therapy that reduces mortality.",
    "id": 70
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 62-year-old man with ischemic cardiomyopathy and an ejection fraction of 28 percent has NYHA class II symptoms. He takes lisinopril 20 mg, carvedilol 25 mg twice daily, and furosemide 40 mg daily. His blood pressure is 118/72 mm Hg, potassium is 4.4 mEq/L, and eGFR is 62 mL/min/1.73 m2. Which of the following will most likely reduce his risk of death and hospitalization?",
    "options": {
      "A": "Add digoxin to improve exercise tolerance and reduce heart failure admissions",
      "B": "Replace carvedilol with metoprolol tartrate to improve blood pressure",
      "C": "Add amlodipine to lower afterload and improve left ventricular function",
      "D": "Add spironolactone and an SGLT2 inhibitor, and switch lisinopril to sacubitril-valsartan"
    },
    "answer": "D",
    "explanation": "Mortality and hospitalization fall further when an MRA and an SGLT2 inhibitor are added, and when an ACE inhibitor is replaced by an ARNI after a 36-hour washout; he meets criteria for each. Digoxin reduces hospitalization but does not lower mortality and is a later-line option. Metoprolol tartrate lacks outcome evidence in heart failure, unlike carvedilol, metoprolol succinate, and bisoprolol. Amlodipine is neutral in reduced ejection fraction and adds no survival benefit.",
    "id": 71
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 70-year-old woman with hypertension, obesity, and atrial fibrillation presents with exertional dyspnea and leg edema. Her ejection fraction is 60 percent, the left atrium is enlarged, and E/e' is 17. NT-proBNP is 1,350 pg/mL. She takes furosemide and amlodipine. Which of the following medications has been shown to reduce heart failure hospitalization in this condition?",
    "options": {
      "A": "Metoprolol succinate, titrated to a resting heart rate of 60 beats per minute",
      "B": "Dapagliflozin 10 mg daily, in addition to diuretics for congestion",
      "C": "Digoxin, titrated to a serum concentration of 1.0 to 2.0 ng/mL",
      "D": "Lisinopril, titrated to the maximum tolerated dose for remodeling"
    },
    "answer": "B",
    "explanation": "Heart failure with preserved ejection fraction benefits from SGLT2 inhibitors, which lowered the composite of cardiovascular death or hospitalization in EMPEROR-Preserved and DELIVER. Beta blockers have not improved outcomes and may worsen exercise capacity through chronotropic incompetence. Digoxin has no established benefit in preserved ejection fraction. ACE inhibitors did not improve outcomes in trials of preserved ejection fraction and are used only for hypertension or other indications.",
    "id": 72
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 22-year-old college basketball player collapses briefly during practice and recovers. His father died suddenly at 38. Examination reveals a harsh systolic murmur at the left sternal border that increases when he stands from a squat. The ECG shows left ventricular hypertrophy with deep lateral Q waves. Which of the following is the most appropriate initial pharmacologic treatment?",
    "options": {
      "A": "Furosemide to reduce his filling pressure and the systolic gradient across the outflow tract",
      "B": "Amlodipine to dilate his peripheral vessels and lower the outflow gradient during exertion",
      "C": "Digoxin to improve his contractility and exercise tolerance during strenuous play and practice",
      "D": "A beta blocker such as metoprolol, with restriction from competitive sport pending evaluation"
    },
    "answer": "D",
    "explanation": "Hypertrophic obstructive cardiomyopathy is managed first with a beta blocker, which slows the heart rate, lengthens filling, and lowers the dynamic gradient, and participation in strenuous sport is reviewed after risk assessment. Diuretics reduce preload and worsen the obstruction. Vasodilators such as amlodipine lower afterload and also increase the gradient. Digoxin increases contractility, which accentuates outflow obstruction and may provoke arrhythmia.",
    "id": 73
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 74-year-old man with heart failure and a preserved ejection fraction has bilateral carpal tunnel syndrome, lumbar stenosis, and a thickened left ventricle on echocardiography with low-voltage QRS complexes. Serum free light chains and immunofixation of blood and urine are normal. What is the best next step in diagnosis?",
    "options": {
      "A": "Technetium pyrophosphate scintigraphy to evaluate for transthyretin cardiac amyloidosis",
      "B": "Endomyocardial biopsy with Congo red staining before any other testing",
      "C": "Cardiac catheterization with coronary angiography to evaluate for ischemic disease",
      "D": "Genetic testing for sarcomere gene mutations to confirm hypertrophic cardiomyopathy"
    },
    "answer": "A",
    "explanation": "After excluding a monoclonal protein, grade 2 or 3 uptake on a bone-avid tracer scan establishes ATTR cardiac amyloidosis without a biopsy. Endomyocardial biopsy is invasive and reserved for cases in which noninvasive testing is inconclusive or a monoclonal protein is present. Coronary angiography addresses a different question and does not explain the low voltage with thick walls. Sarcomere gene testing applies to hypertrophic disease, which does not typically cause low-voltage complexes.",
    "id": 74
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 58-year-old man with a nonischemic dilated cardiomyopathy has had NYHA class III symptoms for four months despite a beta blocker, an ARNI, an MRA, and an SGLT2 inhibitor at target doses. His ejection fraction is 25 percent, sinus rhythm is present, and the ECG shows a left bundle branch block with QRS duration of 164 ms. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Add ivabradine to reduce his heart rate below 70 beats per minute",
      "B": "Implant a single-chamber ICD alone for primary prevention of sudden death",
      "C": "Implant a cardiac resynchronization therapy device with a defibrillator",
      "D": "Refer for a catheter ablation of the atrioventricular node"
    },
    "answer": "C",
    "explanation": "An ejection fraction of 35 percent or less in sinus rhythm with left bundle branch block and a QRS of 150 ms or more, despite medical therapy, is the strongest indication for cardiac resynchronization, and the defibrillator is added because he also meets ICD criteria. A single-chamber ICD protects from arrhythmia but does not correct dyssynchrony. Ivabradine is for a resting heart rate of 70 or more on a maximal beta blocker, which is not stated. AV node ablation applies to refractory atrial fibrillation.",
    "id": 75
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 66-year-old woman is admitted with acute decompensated heart failure. She has orthopnea, bibasilar crackles, jugular venous distension, and 3+ leg edema. Her extremities are warm, her blood pressure is 134/80 mm Hg, and her creatinine is 1.3 mg/dL. She takes furosemide 40 mg orally daily. Which of the following is the most appropriate initial therapy?",
    "options": {
      "A": "Intravenous dobutamine infusion to improve her cardiac output and her renal perfusion",
      "B": "Intravenous furosemide at 40 to 100 mg, with early assessment of her urine output",
      "C": "Withholding diuretics and giving intravenous fluids to protect her kidney function and blood pressure",
      "D": "Immediate intubation and mechanical ventilation to treat the pulmonary edema and congestion"
    },
    "answer": "B",
    "explanation": "She is warm and wet, so the treatment is intravenous loop diuretic at one to 2.5 times the oral daily dose, with early assessment of response by urine output. Inotropes are for low-output states with hypoperfusion and add arrhythmia risk when used otherwise. Fluids worsen pulmonary edema. Intubation is reserved for respiratory failure that does not respond to noninvasive support.",
    "id": 76
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 55-year-old man with heart failure and a reduced ejection fraction has been taking enalapril and wishes to change to sacubitril-valsartan. His blood pressure is 124/76 mm Hg and his potassium is 4.5 mEq/L. He took his enalapril this morning. When can the first dose of sacubitril-valsartan be given?",
    "options": {
      "A": "Immediately, because the two drugs can be taken together safely",
      "B": "After 12 hours, once the peak enalapril effect has resolved",
      "C": "After 24 hours, which is the usual interval used when stopping an ARB",
      "D": "After 36 hours, to reduce the risk of angioedema"
    },
    "answer": "D",
    "explanation": "Neprilysin inhibition and ACE inhibition together increase bradykinin and the risk of angioedema, so a 36-hour washout separates the last ACE inhibitor dose from the first ARNI dose. Starting at once exposes him to that risk. A shorter interval of 12 or 24 hours does not clear the ACE inhibitor effect. A direct switch from an ARB needs no washout, which is why that comparison does not apply here.",
    "id": 77
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 48-year-old man presents with palpitations and heart failure symptoms. He reports heavy alcohol use for 15 years. Echocardiography shows a dilated left ventricle with an ejection fraction of 25 percent. Coronary angiography shows no obstructive disease, and thyroid tests are normal. Which of the following offers the best chance of improved cardiac function?",
    "options": {
      "A": "Permanent pacemaker placement to improve his heart rate and the palpitations he reports",
      "B": "Heart transplant evaluation as the first-line option for his severely reduced ejection fraction",
      "C": "Complete alcohol abstinence together with standard guideline-directed heart failure therapy",
      "D": "Beginning an antiarrhythmic drug to prevent further palpitations and sudden cardiac death"
    },
    "answer": "C",
    "explanation": "Alcoholic cardiomyopathy is potentially reversible, and abstinence combined with standard heart failure therapy can restore function, often within months. A pacemaker treats bradycardia or dyssynchrony, which are not described. Transplant evaluation is for advanced disease that persists despite treatment, and it is premature in a patient who has not stopped the toxin. Antiarrhythmics do not treat the cause, and several carry a risk in reduced ejection fraction.",
    "id": 78
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 27-year-old woman, three weeks postpartum, develops dyspnea, orthopnea, and ankle swelling. Echocardiography shows an ejection fraction of 30 percent and no valvular disease. She is not breastfeeding. Her blood pressure is 108/68 mm Hg. Which of the following is the most appropriate medication regimen?",
    "options": {
      "A": "Diltiazem, flecainide, and aspirin to improve her ventricular function and control the rhythm",
      "B": "Beta blocker, diuretic, and an ACE inhibitor, with counseling about future pregnancy",
      "C": "Spironolactone alone, since she has recently delivered and is no longer pregnant",
      "D": "Hydroxychloroquine and prednisone for presumed autoimmune myocarditis after her recent delivery"
    },
    "answer": "B",
    "explanation": "Peripartum cardiomyopathy is treated like other forms of reduced ejection fraction heart failure; once delivered and not breastfeeding, an ACE inhibitor, beta blocker, and diuretic are appropriate, with counseling about contraception and the risk with future pregnancy. Diltiazem and flecainide are harmful in reduced ejection fraction. Spironolactone alone ignores the pillars with proven benefit. Immunosuppression is not routine, and no features of myocarditis are given.",
    "id": 79
  },
  {
    "domain": "heart_failure",
    "chapter": 8,
    "question": "A 71-year-old man with ischemic cardiomyopathy has an ejection fraction of 30 percent and NYHA class II symptoms on target doses of sacubitril-valsartan, carvedilol, spironolactone, and dapagliflozin for more than three months. His QRS is 100 ms, with a heart rate of 62 beats per minute. He is otherwise well and has a life expectancy over one year. Which of the following is the most appropriate next intervention?",
    "options": {
      "A": "Implantation of an implantable cardioverter-defibrillator for primary prevention of sudden death",
      "B": "Cardiac resynchronization therapy with a biventricular pacemaker but without a defibrillator",
      "C": "Ivabradine to lower his resting heart rate and reduce heart failure hospitalizations",
      "D": "Referral for left ventricular assist device implantation as destination therapy now"
    },
    "answer": "A",
    "explanation": "An ejection fraction of 35 percent or less persisting after at least three months of optimal therapy, with NYHA class II to III symptoms and good expected survival, qualifies for a primary prevention ICD. Resynchronization needs a wide QRS, and his is narrow. Ivabradine is for a resting heart rate of 70 or more in sinus rhythm. An assist device is for stage D disease with refractory symptoms, which he does not have.",
    "id": 80
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "A 71-year-old man comes to the emergency department with palpitations that began several days ago. His blood pressure is 128/78 mm Hg, heart rate is 134/min and irregularly irregular, and oxygen saturation is 97% on room air. He has no chest pain or dyspnea. An ECG shows atrial fibrillation without ischemic changes. Echocardiography last year showed an ejection fraction of 55%. Which of the following is the most appropriate next step in management?",
    "options": {
      "A": "Intravenous amiodarone loading followed by an oral amiodarone maintenance regimen over several weeks",
      "B": "Intravenous diltiazem bolus followed by transition to an oral rate-controlling agent",
      "C": "Immediate synchronized direct-current cardioversion under procedural sedation in the emergency department",
      "D": "Intravenous digoxin loading as the sole agent for rapid ventricular rate control"
    },
    "answer": "B",
    "explanation": "The patient is stable with preserved ejection fraction and an uncertain duration of more than a day, so the first goal is rate control, and a nondihydropyridine calcium channel blocker or a beta-blocker works within minutes. Amiodarone is reserved for critically ill patients or those with heart failure in whom other agents are unsafe, and it carries a risk of pharmacologic conversion that is dangerous without anticoagulation. Immediate cardioversion is inappropriate because the arrhythmia has lasted more than 48 hours and the patient is not unstable, so thrombus must be excluded or three weeks of anticoagulation completed first. Digoxin acts slowly and controls the resting rate poorly in a high sympathetic state, so it is an adjunct rather than a sole first-line agent.",
    "id": 81
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "A 68-year-old woman is found to have atrial fibrillation on a routine ECG. She has hypertension and type 2 diabetes mellitus, with no prior stroke, heart failure, or vascular disease. Her heart rate is 84/min, weight is 72 kg, and serum creatinine is 0.9 mg/dL. Echocardiography shows normal ventricular function and no significant valve disease. Which of the following is the most appropriate antithrombotic therapy?",
    "options": {
      "A": "Aspirin 81 mg daily alone because her ventricular rate is well controlled",
      "B": "No antithrombotic therapy, with repeat risk assessment at each annual visit",
      "C": "Apixaban 5 mg twice daily, continued long term regardless of rhythm outcome",
      "D": "Warfarin targeting an INR of 2 to 3 as the preferred agent over DOACs"
    },
    "answer": "C",
    "explanation": "Her score is 4, from age 65 to 74, female sex, hypertension, and diabetes, which is well above the threshold for anticoagulation, and a direct oral anticoagulant at full dose is preferred in nonvalvular disease because none of the dose-reduction criteria are met. Aspirin offers little stroke protection in atrial fibrillation while carrying a bleeding risk similar to that of an anticoagulant. Withholding therapy ignores a high annual stroke risk, and a controlled heart rate does not lower it. Warfarin is effective but not preferred for nonvalvular disease, since DOACs have lower intracranial bleeding rates and need no INR monitoring.",
    "id": 82
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "A 59-year-old man has had palpitations and fatigue for 5 days. He has never taken anticoagulants. His blood pressure is 122/76 mm Hg, and an ECG shows atrial fibrillation with a ventricular rate of 98/min. His symptoms persist despite rate control, and he and his cardiologist agree to restore sinus rhythm. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Begin therapeutic anticoagulation, then obtain transesophageal echocardiography to exclude atrial thrombus before cardioversion",
      "B": "Perform immediate electrical cardioversion, then begin anticoagulation only if sinus rhythm fails to hold",
      "C": "Give a single oral dose of flecainide at home and discharge without anticoagulation",
      "D": "Start aspirin and clopidogrel for 4 weeks, then proceed with elective cardioversion"
    },
    "answer": "A",
    "explanation": "After 48 hours of atrial fibrillation, thrombus may be present in the left atrial appendage, so the patient needs either three weeks of therapeutic anticoagulation or a transesophageal study that excludes thrombus, with anticoagulation started first and continued at least four weeks afterward. Immediate cardioversion without these steps risks embolic stroke, and delaying anticoagulation until recurrence misses the period of atrial stunning when emboli are most likely. A flecainide dose without anticoagulation carries the same embolic risk through pharmacologic conversion. Dual antiplatelet therapy does not provide protection equivalent to anticoagulation against cardioembolism.",
    "id": 83
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "A 31-year-old man comes to the emergency department with palpitations and lightheadedness. His blood pressure is 106/68 mm Hg and heart rate is about 220/min. The ECG shows an irregular wide-complex tachycardia with beat-to-beat variation in QRS morphology. A prior ECG from a sports physical showed a short PR interval and a delta wave. He is alert and has no chest pain. Which of the following is the most appropriate pharmacotherapy?",
    "options": {
      "A": "Intravenous adenosine 6 mg by rapid push followed by a saline flush",
      "B": "Intravenous verapamil 5 mg given slowly over two minutes with continuous monitoring",
      "C": "Intravenous procainamide infusion with continuous ECG and blood pressure monitoring",
      "D": "Intravenous metoprolol 5 mg given slowly with continuous ECG monitoring"
    },
    "answer": "C",
    "explanation": "The rhythm is atrial fibrillation conducted over an accessory pathway, and the drug of choice in a stable patient is one that slows conduction through the pathway itself, such as procainamide, with synchronized cardioversion if he becomes unstable. Adenosine, verapamil, and beta-blockers all block the AV node, which removes the competing route and can raise the rate of conduction down the pathway, risking ventricular fibrillation. The wide, irregular, rapid pattern is the clue that distinguishes this problem from ordinary supraventricular tachycardia.",
    "id": 84
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "A 24-year-old woman has a sudden onset of palpitations while studying. Her blood pressure is 118/74 mm Hg, and the ECG shows a regular narrow-complex tachycardia at 180/min without visible P waves. A modified Valsalva maneuver does not terminate the rhythm. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Intravenous amiodarone 150 mg infused over ten minutes with continuous monitoring",
      "B": "Intravenous adenosine 6 mg by rapid push followed by a rapid saline flush",
      "C": "Immediate synchronized cardioversion at 200 joules without any sedation or preparation",
      "D": "Oral digoxin loading with a repeat ECG after four hours of observation"
    },
    "answer": "B",
    "explanation": "This is a stable AV nodal reentrant tachycardia, and after vagal maneuvers fail, a rapid bolus of adenosine terminates the circuit by transiently blocking the AV node, with success in most patients. Amiodarone is not first-line for stable supraventricular tachycardia and has slow onset with toxicity. Cardioversion is reserved for instability and, when used in a conscious patient, requires sedation, so an unsedated shock is wrong in this setting. Oral digoxin is far too slow for a symptomatic sustained tachycardia and is not an effective termination agent.",
    "id": 85
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "A 63-year-old man is seen in clinic 14 months after an anterior myocardial infarction. He is taking sacubitril-valsartan, carvedilol, spironolactone, dapagliflozin, and aspirin at maximally tolerated doses for the past year. He has mild dyspnea with ordinary exertion and no syncope. His QRS duration is 100 milliseconds, and echocardiography shows an ejection fraction of 28%. He has had no documented arrhythmia. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Implantable cardioverter-defibrillator placement for primary prevention of sudden cardiac death",
      "B": "Addition of oral amiodarone as the primary strategy for preventing sudden death",
      "C": "Repeat echocardiography in one year before any device decision is made",
      "D": "Catheter ablation of the ventricular myocardium before considering any device therapy"
    },
    "answer": "A",
    "explanation": "He meets primary-prevention criteria: ischemic cardiomyopathy, ejection fraction of 35% or less, NYHA class II symptoms, more than 40 days after infarction, and at least three months of guideline-directed therapy, so a defibrillator reduces mortality. Amiodarone has not been shown to improve survival as a substitute for a device in this population. Waiting another year leaves him exposed to sudden death without benefit, because the ejection fraction has not improved despite optimal therapy. Ablation is for recurrent ventricular tachycardia and shocks, not for primary prevention in a patient who has never had an arrhythmia.",
    "id": 86
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "A 66-year-old woman is hospitalized with pneumonia. She is treated with azithromycin and given ondansetron for nausea. On day 3 she has two brief episodes of lightheadedness. Telemetry shows runs of polymorphic ventricular tachycardia with a twisting axis. She is awake, with a blood pressure of 112/70 mm Hg. Her QTc is 560 milliseconds, potassium is 3.1 mEq/L, and magnesium is 1.5 mg/dL. Which of the following is the most appropriate immediate management?",
    "options": {
      "A": "Intravenous lidocaine bolus followed by a continuous maintenance infusion over the next day",
      "B": "Intravenous procainamide loading dose to suppress the frequent ventricular ectopy and runs",
      "C": "Intravenous magnesium sulfate, potassium repletion, and discontinuation of the QT-prolonging drugs",
      "D": "Intravenous amiodarone loading dose to suppress the recurrent runs of tachycardia"
    },
    "answer": "C",
    "explanation": "This is torsades de pointes caused by two QT-prolonging drugs plus hypokalemia and hypomagnesemia, and the treatment is magnesium sulfate even though the serum level is only mildly low, correction of potassium, and withdrawal of the offending agents. Lidocaine is generally ineffective for torsades. Procainamide and amiodarone both prolong the QT interval and can worsen the arrhythmia. Defibrillation would be used if she became pulseless or unstable, and overdrive pacing or isoproterenol is reserved for recurrence that magnesium does not control.",
    "id": 87
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "A 72-year-old man has had two episodes of syncope during the past month, both while climbing stairs. He also reports exertional chest tightness. His blood pressure is 134/84 mm Hg. There is a harsh late-peaking systolic ejection murmur at the right upper sternal border radiating to the carotids, with a soft second heart sound. The ECG shows left ventricular hypertrophy. Which of the following is the most appropriate next step in evaluation?",
    "options": {
      "A": "Exercise treadmill stress testing to reproduce the symptoms under supervision",
      "B": "Tilt-table testing to confirm a diagnosis of reflex vasovagal syncope",
      "C": "Outpatient 30-day ambulatory event monitoring before any imaging is obtained",
      "D": "Transthoracic echocardiography to assess aortic valve area and gradients"
    },
    "answer": "D",
    "explanation": "Exertional syncope with a classic murmur and signs of left ventricular strain suggests severe aortic stenosis, and echocardiography confirms the diagnosis and grades severity. Exercise testing is contraindicated in symptomatic severe aortic stenosis because it can provoke hypotension, arrhythmia, and sudden death. Tilt testing addresses reflex syncope, which does not produce exertional symptoms with a fixed obstructive murmur. Ambulatory monitoring may be added later but should not delay imaging when a structural cause is strongly suggested by the examination.",
    "id": 88
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "An 84-year-old woman has severe symptomatic aortic stenosis, with a mean gradient of 52 mm Hg and a valve area of 0.7 cm2. She has exertional dyspnea and two heart failure admissions this year. Her estimated surgical mortality is 6%, she has mild frailty, and CT shows suitable transfemoral access and annulus anatomy. She is otherwise cognitively intact. Which of the following is the most appropriate management?",
    "options": {
      "A": "Open surgical aortic valve replacement with a mechanical prosthesis and lifelong warfarin",
      "B": "Transcatheter aortic valve replacement through a transfemoral approach after heart team review",
      "C": "Balloon aortic valvuloplasty alone as definitive long-term therapy for her disease",
      "D": "Continued medical therapy with beta-blockers, nitrates, and close outpatient surveillance"
    },
    "answer": "B",
    "explanation": "Symptomatic severe aortic stenosis needs valve replacement, and at age 84 with frailty and suitable anatomy, transfemoral transcatheter replacement is favored over open surgery, which carries higher procedural risk and, with a mechanical valve, an unwanted anticoagulation burden in an older adult. Valvuloplasty alone gives only short-lived relief, with restenosis within months. Medical therapy does not change the outcome of symptomatic severe stenosis, and vasodilators and nitrates can cause hypotension across a fixed obstruction.",
    "id": 89
  },
  {
    "domain": "arrhythmia_valve",
    "chapter": 9,
    "question": "A 54-year-old man with a mechanical aortic valve placed 3 years ago is scheduled for a tooth extraction. He has no drug allergies, takes warfarin with a therapeutic INR, and has had no prior endocarditis. Which of the following is the most appropriate prophylactic plan?",
    "options": {
      "A": "No prophylaxis because mechanical valves carry only a low risk of endocarditis",
      "B": "Amoxicillin 500 mg orally three times daily beginning two days before the procedure",
      "C": "Intravenous ceftriaxone 1 g given two hours after the extraction is completed",
      "D": "Amoxicillin 2 g orally as a single dose thirty to sixty minutes before the extraction"
    },
    "answer": "D",
    "explanation": "A prosthetic valve is one of the highest-risk cardiac conditions, and a dental extraction that manipulates gingival tissue qualifies for prophylaxis with a single oral dose of amoxicillin timed to be at peak levels during the procedure. Withholding it because the risk seems low is wrong, since prosthetic material is exactly the category covered. Multi-day regimens are not recommended and add resistance and side effects without benefit. An antibiotic given after the procedure misses the period of transient bacteremia the prophylaxis is intended to cover.",
    "id": 90
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 62-year-old man with a 40-pack-year smoking history and hypertension reports calf pain after walking two blocks that resolves within five minutes of rest. Femoral pulses are palpable, and pedal pulses are diminished bilaterally. The ankle-brachial index is 0.62 on the right and 0.70 on the left. He has no rest pain or ulcers. Which of the following is the most appropriate initial management?",
    "options": {
      "A": "Referral for percutaneous angioplasty of the superficial femoral artery on the right",
      "B": "Supervised exercise therapy with smoking cessation, high-intensity statin, and antiplatelet therapy",
      "C": "Cilostazol as monotherapy, with reassessment of walking distance in one year",
      "D": "Warfarin with a target INR of 2 to 3 to improve limb perfusion"
    },
    "answer": "B",
    "explanation": "He has stable claudication from peripheral artery disease, and the first step is supervised exercise combined with risk reduction, because exercise improves walking distance and the other measures lower his high cardiovascular risk. Angioplasty is reserved for lifestyle-limiting symptoms that persist despite exercise and medical therapy, or for limb-threatening ischemia. Cilostazol alone omits the antiplatelet therapy, statin, and smoking cessation that reduce myocardial infarction and stroke, and it adds only a modest benefit for walking. Warfarin does not improve claudication and adds bleeding risk without reducing limb or cardiovascular events.",
    "id": 91
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 67-year-old man who quit smoking five years ago undergoes screening abdominal ultrasonography and is found to have an infrarenal abdominal aortic aneurysm measuring 4.6 cm. He has no abdominal or back pain, and his blood pressure is 138/84 mm Hg. Which of the following is the most appropriate management?",
    "options": {
      "A": "Surveillance ultrasonography in 12 months with blood pressure control and statin therapy",
      "B": "Elective endovascular repair in the next two months to prevent rupture",
      "C": "CT angiography followed by open surgical repair through a midline laparotomy",
      "D": "Repeat abdominal ultrasonography in three years because the aneurysm is small"
    },
    "answer": "A",
    "explanation": "An asymptomatic aneurysm of 4.0 to 4.9 cm is below the 5.5 cm repair threshold for men and is followed with imaging about every year while risk factors are treated. Repair at this size has not been shown to improve survival and exposes him to procedural risk. Open repair at this diameter has the same flaw, with greater perioperative mortality than endovascular repair. An interval of three years applies to the smallest aneurysms of 3.0 to 3.9 cm, and at 4.6 cm a longer interval could miss rapid growth.",
    "id": 92
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 58-year-old man with long-standing hypertension has sudden tearing chest pain radiating to his back. Blood pressure is 178/98 mm Hg in the right arm and 144/82 mm Hg in the left arm, and heart rate is 104/min. A CT angiogram shows a dissection flap involving the ascending aorta. Cardiothoracic surgery has been notified. Which of the following is the most appropriate immediate pharmacotherapy?",
    "options": {
      "A": "Intravenous nitroprusside alone to lower the systolic pressure as rapidly as possible",
      "B": "Intravenous unfractionated heparin infusion to prevent propagation of the false lumen",
      "C": "Intravenous alteplase to treat possible coronary occlusion from the dissection flap",
      "D": "Intravenous esmolol infusion to reduce heart rate and the force of aortic wall stress"
    },
    "answer": "D",
    "explanation": "Anti-impulse therapy begins with a short-acting beta-blocker that reduces heart rate and the rate of rise of arterial pressure, which limits propagation while he awaits emergency surgery. Nitroprusside given without prior beta-blockade causes reflex tachycardia and increases wall shear stress. Heparin and thrombolytics risk hemorrhage into the pericardium or the false lumen and can be fatal in dissection, even when the ECG suggests ischemia from coronary involvement.",
    "id": 93
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 68-year-old man had 20 minutes of right-hand weakness and difficulty finding words 5 days ago, which resolved fully. He takes aspirin and has diabetes. Neurologic examination is now normal. Carotid duplex ultrasonography shows 80% stenosis of the left internal carotid artery, and brain MRI shows no infarct. He is a good surgical candidate. Which of the following is the most appropriate management?",
    "options": {
      "A": "Medical therapy alone with aspirin and a statin, and repeat duplex in six months",
      "B": "Urgent carotid stenting regardless of surgical risk, because stenting avoids the neck incision",
      "C": "Carotid endarterectomy within two weeks of the event, plus antiplatelet and high-intensity statin therapy",
      "D": "Warfarin with a target INR of 2 to 3 for three months, then repeat imaging"
    },
    "answer": "C",
    "explanation": "Symptomatic stenosis of 70 to 99 percent carries a high short-term risk of recurrent stroke, and early endarterectomy in a surgical candidate gives the greatest benefit, with medical therapy continuing alongside. Medical therapy alone and delayed imaging leave a high-risk lesion untreated during the window of greatest risk. Stenting is not preferred over endarterectomy in a good surgical candidate of this age, since periprocedural stroke is higher. Warfarin has not been shown to prevent stroke from carotid atherosclerosis better than antiplatelet therapy and increases bleeding.",
    "id": 94
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 45-year-old woman has 3 days of left calf pain and swelling. She has no medical history, takes no medications, and has not traveled or had surgery. Compression ultrasonography shows a noncompressible popliteal vein. Creatinine clearance is 95 mL/min, and she has no active bleeding. Which of the following is the most appropriate initial therapy?",
    "options": {
      "A": "Enoxaparin 1 mg/kg once daily as monotherapy for the entire three-month course",
      "B": "Apixaban 10 mg twice daily for 7 days, then 5 mg twice daily",
      "C": "Warfarin 5 mg daily started alone, without any overlapping parenteral anticoagulant",
      "D": "Aspirin 325 mg daily for six weeks with leg elevation and compression"
    },
    "answer": "B",
    "explanation": "Acute proximal deep vein thrombosis in a patient with normal kidney function and no cancer is treated with a direct oral anticoagulant at an initial intensified dose for a week, which avoids injections and INR monitoring. Enoxaparin is dosed twice daily at 1 mg/kg for treatment and is not preferred over a DOAC in this patient. Starting warfarin alone allows a transient prothrombotic state because protein C falls first, so a parenteral overlap is required. Aspirin does not adequately treat acute thrombosis and does not prevent extension or embolization.",
    "id": 95
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 52-year-old man completed three months of apixaban for an unprovoked pulmonary embolism. He has no bleeding history, normal kidney function, and takes no interacting medications. He asks whether he can stop treatment because he feels well. Which of the following is the most appropriate recommendation?",
    "options": {
      "A": "Stop all anticoagulation now and repeat the D-dimer measurement in one month",
      "B": "Stop anticoagulation and send a thrombophilia panel to decide about further treatment",
      "C": "Switch to aspirin 81 mg daily for lifelong prevention of recurrent venous thromboembolism",
      "D": "Continue anticoagulation with extended therapy, considering a reduced dose of apixaban for the long term"
    },
    "answer": "D",
    "explanation": "Unprovoked venous thromboembolism has a substantial recurrence risk after therapy stops, and a patient with low bleeding risk should be offered extended anticoagulation, with reduced-dose apixaban retaining most of the protection with less bleeding. Stopping and relying on a repeat D-dimer is not a validated approach for deciding on treatment in this patient. Thrombophilia testing rarely changes the decision after an unprovoked event. Aspirin offers a smaller reduction in recurrence than anticoagulants and is not a substitute when full anticoagulation is possible.",
    "id": 96
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 60-year-old woman is hospitalized after a hip fracture and receives unfractionated heparin for prophylaxis. On day 7 she develops left leg swelling, and ultrasonography shows an acute femoral vein thrombosis. Her platelet count has fallen from 240,000/mm3 to 85,000/mm3. There is no bleeding, and the 4Ts score is high. Which of the following is the most appropriate management?",
    "options": {
      "A": "Discontinue all heparin products and begin a direct thrombin inhibitor such as argatroban",
      "B": "Continue unfractionated heparin at a reduced dose with daily platelet count monitoring",
      "C": "Switch to enoxaparin therapeutic dosing because low-molecular-weight heparin does not cause the disorder",
      "D": "Transfuse platelets to a count above 150,000/mm3 before continuing the current heparin"
    },
    "answer": "A",
    "explanation": "The timing, the greater than 50 percent platelet fall, and the new thrombosis indicate heparin-induced thrombocytopenia, which is treated by stopping every form of heparin and starting a nonheparin anticoagulant to control the thrombosis. Continuing heparin, even at lower dose, sustains the immune stimulus and risks further clotting. Low-molecular-weight heparin cross-reacts with the antibody and is also contraindicated. Platelet transfusion does not address the prothrombotic mechanism and may add fuel to the process.",
    "id": 97
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 74-year-old woman has had a new right-sided headache for 3 weeks, scalp tenderness when combing her hair, and jaw pain with chewing. Visual acuity and fundoscopy are normal. The ESR is 98 mm/h. Which of the following is the most appropriate next step in management?",
    "options": {
      "A": "Obtain a temporal artery biopsy first and start glucocorticoids only after pathology confirms the diagnosis",
      "B": "Order brain MRI and start a triptan for presumed migraine pending the result",
      "C": "Start prednisone 40 to 60 mg daily now and arrange temporal artery biopsy",
      "D": "Start methotrexate alone and schedule the biopsy within the next two months"
    },
    "answer": "C",
    "explanation": "The picture is giant cell arteritis, and because irreversible vision loss can occur suddenly, high-dose prednisone is started on clinical suspicion, and the biopsy, which stays informative for a week or two after steroids begin, follows. Delaying treatment until pathology returns exposes her to blindness. Migraine does not explain jaw claudication, scalp tenderness, and a very high ESR in this age group, and a triptan is not appropriate. Methotrexate acts too slowly to protect vision and is not a first-line agent for induction.",
    "id": 98
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 28-year-old woman has episodes in which her fingers turn white, then blue, then red when she is exposed to cold. The episodes began 3 years ago. She has no ulcers, joint pain, or skin changes. Examination is normal, nailfold capillaroscopy is normal, and the ANA is negative. She takes an oral contraceptive. Which of the following is the most appropriate initial management?",
    "options": {
      "A": "Cold avoidance plus a long-acting dihydropyridine calcium channel blocker such as nifedipine",
      "B": "Propranolol to reduce sympathetic vasoconstriction in the small digital arteries",
      "C": "Low-dose prednisone with plans for tapering over the next three months",
      "D": "Digital sympathectomy as initial therapy for control of her recurrent attacks"
    },
    "answer": "A",
    "explanation": "This is primary Raynaud phenomenon, suggested by young age, symmetric attacks, normal capillaroscopy, and negative antinuclear antibodies, and it responds to cold avoidance with a dihydropyridine calcium channel blocker when symptoms are troublesome. Beta-blockers can worsen vasospasm by unopposed alpha-mediated vasoconstriction. Glucocorticoids have no role in primary disease and are not an initial therapy even in secondary disease without active inflammation. Sympathectomy is a last resort for refractory ischemic disease, not first-line therapy.",
    "id": 99
  },
  {
    "domain": "vascular_vte",
    "chapter": 10,
    "question": "A 71-year-old man with a 50-pack-year smoking history collapses at home with severe abdominal and back pain. In the emergency department his blood pressure is 76/48 mm Hg, heart rate is 124/min, and there is a tender pulsatile mass in the mid-abdomen. He is pale and diaphoretic. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Abdominal CT angiography before any decision about operative repair is made",
      "B": "Immediate transfer to the operating room for emergency aneurysm repair",
      "C": "Serial troponin measurements and a 12-lead ECG to exclude acute myocardial infarction",
      "D": "Aggressive crystalloid resuscitation until blood pressure is normal, followed by observation in the ICU"
    },
    "answer": "B",
    "explanation": "Hypotension, abdominal and back pain, and a pulsatile mass together are a ruptured aortic aneurysm, and mortality rises with every minute of delay, so he goes straight to repair with blood resuscitation and permissive hypotension. Imaging in an unstable patient wastes time that he does not have. Cardiac testing may be done in parallel but addresses a less likely cause and should not hold up surgery. Large-volume crystalloid to a normal pressure dilutes clotting factors and raises bleeding, and observation without repair is fatal.",
    "id": 100
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 29-year-old woman has had cough and wheeze two or three days a week for the past 6 months, with occasional night awakenings. She uses albuterol and has never taken a controller. Spirometry shows an FEV1 of 85% of predicted, with a 14% increase after bronchodilator. She has no history of exacerbations. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "As-needed low-dose budesonide-formoterol taken for symptom relief, without separate daily maintenance dosing",
      "B": "Albuterol as needed alone, with a new prescription for a spacer device",
      "C": "Daily montelukast with as-needed albuterol for breakthrough symptoms and exercise",
      "D": "Daily high-dose fluticasone-salmeterol with as-needed albuterol for breakthrough symptoms"
    },
    "answer": "A",
    "explanation": "She has mild persistent asthma with reversible obstruction, and current guidance favors an anti-inflammatory reliever, a low-dose inhaled corticosteroid combined with formoterol taken as needed, which treats inflammation whenever symptoms occur and lowers exacerbation risk. A short-acting bronchodilator alone leaves airway inflammation untreated and is no longer recommended for adults with this symptom frequency. Montelukast is less effective than inhaled corticosteroid therapy and carries neuropsychiatric warnings. High-dose combination therapy is excessive for mild disease and exposes her to unneeded steroid and long-acting agent dosing.",
    "id": 101
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 24-year-old man is treated in the emergency department for a severe asthma exacerbation. After three nebulized albuterol-ipratropium treatments and intravenous methylprednisolone, he remains in distress and can speak only two or three words at a time. Which of the following findings most strongly suggests impending respiratory failure?",
    "options": {
      "A": "Loud diffuse expiratory wheezing that is audible across the room without a stethoscope",
      "B": "Prolonged expiratory phase with visible use of accessory neck muscles during breathing",
      "C": "Persistent cough productive of thick mucus after the bronchodilator treatments",
      "D": "Arterial carbon dioxide tension of 44 mm Hg despite a respiratory rate of 34/min"
    },
    "answer": "D",
    "explanation": "A breathless asthmatic who is hyperventilating should have a low carbon dioxide tension, so a normal value means the respiratory muscles are tiring and ventilation is about to fail, which calls for escalation and consideration of intubation. Loud wheezing shows airflow is still moving, and a silent chest would be the more ominous sign. A prolonged expiratory phase and accessory muscle use are expected in severe obstruction and describe severity without predicting collapse. Thick mucus and persistent cough reflect airway inflammation and mucous plugging but are not markers of ventilatory failure.",
    "id": 102
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 34-year-old man with asthma has had four exacerbations requiring oral prednisone in the past year. He uses high-dose budesonide-formoterol as maintenance and reliever, demonstrates correct inhaler technique, and has excellent adherence by pharmacy records. He has no smoking history, and his allergic rhinitis is treated. Blood eosinophil count is 450 per microliter, and FeNO is elevated. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Maintain current therapy and add long-term oral prednisone 10 mg daily",
      "B": "Add daily montelukast and increase the scheduled albuterol use to four times daily",
      "C": "Add a biologic that blocks interleukin-5, such as mepolizumab, for eosinophilic asthma",
      "D": "Replace the inhaled combination with salmeterol monotherapy to improve bronchodilation"
    },
    "answer": "C",
    "explanation": "He has severe eosinophilic asthma with frequent exacerbations despite high-intensity inhaled therapy, confirmed adherence, and good technique, and an interleukin-5 pathway biologic cuts exacerbations and spares oral steroids. Long-term oral prednisone is the outcome biologics are meant to avoid, given cumulative toxicity. Montelukast is a weak add-on that will not match a biologic, and scheduled albuterol worsens control. Long-acting beta agonist monotherapy without an inhaled corticosteroid is dangerous and increases the risk of severe exacerbations.",
    "id": 103
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 67-year-old man with a 45-pack-year smoking history has progressive exertional dyspnea. Pulmonary function testing shows a post-bronchodilator FEV1/FVC of 0.52 and an FEV1 of 48% of predicted. Total lung capacity is 135% of predicted, residual volume is elevated, and DLCO is 38% of predicted. Which of the following is the most likely diagnosis?",
    "options": {
      "A": "Emphysema with severe airflow obstruction, air trapping, and impaired gas transfer",
      "B": "Chronic persistent asthma with fixed obstruction and preserved diffusing capacity",
      "C": "Interstitial pulmonary fibrosis with restriction and a reduced diffusing capacity",
      "D": "Neuromuscular weakness with restrictive physiology and a normal diffusing capacity"
    },
    "answer": "A",
    "explanation": "The reduced ratio shows obstruction, the high total lung capacity and residual volume show hyperinflation and air trapping, and the markedly low diffusing capacity shows loss of alveolar-capillary surface, which together define emphysema in a heavy smoker. Asthma preserves or raises the diffusing capacity, so it does not fit. Interstitial fibrosis would lower the total lung capacity and keep the ratio normal or high. Neuromuscular weakness also shrinks lung volumes, with a normal diffusing capacity, and the ratio is not low.",
    "id": 104
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 66-year-old man with COPD reports dyspnea that forces him to stop after walking about 100 yards (mMRC grade 3). Post-bronchodilator FEV1 is 45% of predicted. He has had one exacerbation treated with oral prednisone in the past year, with no hospitalization. Blood eosinophil count is 150 per microliter. He uses an as-needed albuterol inhaler only. Which of the following is the most appropriate initial maintenance therapy?",
    "options": {
      "A": "Short-acting bronchodilator as needed with no scheduled controller medication",
      "B": "Inhaled corticosteroid monotherapy at a medium daily dose",
      "C": "Oral theophylline at a fixed dose with monitoring of serum levels",
      "D": "A combination of a long-acting beta agonist and a long-acting muscarinic antagonist"
    },
    "answer": "D",
    "explanation": "He has high symptoms and no more than one moderate exacerbation, which places him in group B, where dual long-acting bronchodilation is the preferred start and outperforms a single agent. Relying on a short-acting drug alone undertreats persistent symptoms. Inhaled corticosteroids alone are not appropriate in COPD and carry pneumonia risk, especially with a low eosinophil count. Theophylline has a narrow safety margin and inferior effect, and it is not a first-line choice.",
    "id": 105
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 70-year-old man with COPD is brought to the emergency department with 2 days of worsening dyspnea and increased purulent sputum. He is alert and anxious, with a respiratory rate of 30/min, and uses accessory muscles. Arterial blood gas on 28% oxygen shows pH 7.28, PaCO2 68 mm Hg, and PaO2 62 mm Hg. Nebulized bronchodilators and prednisone are started. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Immediate endotracheal intubation and mechanical ventilation in the intensive care unit",
      "B": "Noninvasive positive-pressure ventilation with continuous monitoring of blood gas values",
      "C": "High-flow oxygen by non-rebreather mask until the oxygen saturation reaches 100%",
      "D": "Intravenous aminophylline infusion as the primary treatment for the respiratory acidosis"
    },
    "answer": "B",
    "explanation": "Acute hypercapnic respiratory acidosis with a pH below 7.35 in an alert, cooperative patient is the main indication for bilevel noninvasive ventilation, which lowers the need for intubation and improves survival. Intubation is held for failure of this approach or for inability to protect the airway. Pushing the saturation to 100 percent with high-flow oxygen worsens carbon dioxide retention, and the target is 88 to 92 percent. Aminophylline adds toxicity without proven benefit and does not correct the acidosis.",
    "id": 106
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 63-year-old man with severe COPD quit smoking 3 years ago and remains dyspneic with minimal exertion despite triple inhaled therapy and pulmonary rehabilitation. At rest on room air, his oxygen saturation is 86%, and PaO2 is 54 mm Hg on two measurements taken 3 weeks apart during stable illness. He has no edema. Which of the following interventions is most likely to prolong his survival?",
    "options": {
      "A": "Scheduled oral theophylline added to the current inhaled regimen",
      "B": "Inhaled corticosteroid monotherapy replacing the current triple inhaler",
      "C": "Chronic prophylactic azithromycin without baseline ECG or hearing testing",
      "D": "Supplemental oxygen used for at least 15 hours each day"
    },
    "answer": "D",
    "explanation": "Resting hypoxemia with a PaO2 of 55 mm Hg or less is an indication for long-term oxygen therapy, and in this group it prolongs life when used for at least 15 hours daily. Theophylline relieves symptoms modestly and has not been shown to extend survival. Stopping triple therapy for an inhaled steroid alone would remove bronchodilators and has no survival benefit. Azithromycin can reduce exacerbations in selected former smokers but has no demonstrated mortality benefit, and it requires prior checks for QT prolongation and hearing loss.",
    "id": 107
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 48-year-old man smokes 25 cigarettes daily and wants to quit. He has hypertension, no psychiatric history, no seizure disorder, and normal kidney function. He has tried to quit twice using willpower alone. Which of the following is the most effective single pharmacologic agent to recommend?",
    "options": {
      "A": "A 21-mg nicotine patch used alone, tapered over ten weeks",
      "B": "Varenicline started one week before the quit date, with behavioral counseling",
      "C": "Bupropion sustained-release started on the planned day of quitting",
      "D": "Nicotine polacrilex gum used only when cravings occur"
    },
    "answer": "B",
    "explanation": "Varenicline, a partial agonist at the nicotinic receptor, has the best quit rates among single agents, and combining it with counseling improves them further. A patch alone is less effective than varenicline and less effective than the patch combined with a short-acting form. Bupropion works better than placebo but not as well as varenicline, and it should be started before the quit date. Gum used only for cravings is the weakest approach, because as-needed use of a single short-acting form produces low nicotine exposure and high relapse.",
    "id": 108
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 38-year-old woman who has never smoked is evaluated for progressive exertional dyspnea. Spirometry shows a post-bronchodilator FEV1/FVC of 0.55 with minimal reversibility. Chest CT shows panlobular emphysema most prominent in the lower lobes. Liver enzymes are mildly elevated. Her mother died of lung disease at age 50. Which of the following is the most appropriate diagnostic test?",
    "options": {
      "A": "Serum alpha-1 antitrypsin level with phenotype testing if the level is low",
      "B": "Sweat chloride measurement with genetic testing for cystic fibrosis mutations",
      "C": "Bronchoscopy with bronchoalveolar lavage and transbronchial lung biopsy",
      "D": "Serum total IgE and Aspergillus-specific antibody testing for allergic aspergillosis"
    },
    "answer": "A",
    "explanation": "Early emphysema in a never-smoker with basal predominance, liver involvement, and a family history is the classic presentation of alpha-1 antitrypsin deficiency, and a serum level followed by phenotyping confirms it. Cystic fibrosis causes bronchiectasis and upper-lobe predominant disease, not panlobular basal emphysema. Bronchoscopy with biopsy is invasive and does not establish the cause of emphysema. Allergic aspergillosis produces central bronchiectasis and eosinophilia in asthma, not basal emphysema with liver disease.",
    "id": 109
  },
  {
    "domain": "airway_disease",
    "chapter": 11,
    "question": "A 41-year-old woman has had adult-onset asthma for 3 years, along with chronic nasal congestion and a history of nasal polyp removal. Yesterday she took ibuprofen for a headache and within an hour had severe wheezing, nasal congestion, and facial flushing. Which of the following is the most likely diagnosis?",
    "options": {
      "A": "Allergic bronchopulmonary aspergillosis with central bronchiectasis and elevated total IgE",
      "B": "Eosinophilic granulomatosis with polyangiitis with peripheral neuropathy and pulmonary infiltrates",
      "C": "Aspirin-exacerbated respiratory disease with eosinophilic nasal polyposis and chronic sinusitis",
      "D": "Vocal cord dysfunction causing episodic inspiratory stridor mistaken for asthma attacks"
    },
    "answer": "C",
    "explanation": "Adult-onset asthma with nasal polyps and bronchospasm after a cyclooxygenase-1 inhibitor is the classic triad of aspirin-exacerbated respiratory disease, and she must avoid NSAIDs. Allergic bronchopulmonary aspergillosis occurs in established asthma with mucus plugging and central bronchiectasis and is not triggered by a single drug dose. Eosinophilic granulomatosis with polyangiitis adds neuropathy, vasculitic rash, and systemic features. Vocal cord dysfunction produces inspiratory noise at the neck and would not follow the polyp history.",
    "id": 110
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 62-year-old man with COPD has had 3 days of fever, productive cough, and right-sided pleuritic chest pain. Temperature is 38.2 C, blood pressure 130/80 mm Hg, heart rate 92/min, respiratory rate 20/min, and oxygen saturation 94% on room air. He is alert and eating. Chest radiography shows a right lower lobe infiltrate. He has not been hospitalized or taken antibiotics in the past year. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Amoxicillin 1 g three times daily as a single agent for five days",
      "B": "Azithromycin monotherapy with a 500 mg loading dose, then 250 mg daily",
      "C": "Oral cefuroxime as a single agent twice daily for five to seven days",
      "D": "Amoxicillin-clavulanate combined with doxycycline for a minimum of five days"
    },
    "answer": "D",
    "explanation": "He is a well-appearing outpatient with a comorbid chronic lung disease, so guidelines call for either a beta-lactam combined with a macrolide or doxycycline, or a respiratory fluoroquinolone, which gives coverage of pneumococcus and atypical organisms together. Amoxicillin alone is the regimen for patients without comorbidities and misses atypical organisms. Macrolide monotherapy is inadequate in the presence of comorbidities because of pneumococcal resistance. A single oral cephalosporin lacks atypical coverage and is not recommended as a lone agent in this group.",
    "id": 111
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 72-year-old man is brought from a nursing home with 2 days of fever and cough. He is confused. Temperature is 38.9 C, blood pressure 84/50 mm Hg, heart rate 118/min, respiratory rate 32/min, and oxygen saturation 87% on 4 L/min of oxygen. BUN is 36 mg/dL. Chest radiography shows multilobar infiltrates. He has not been hospitalized recently. Which of the following is the most appropriate management?",
    "options": {
      "A": "Intensive care admission with intravenous ceftriaxone plus azithromycin and close hemodynamic monitoring",
      "B": "General ward admission with levofloxacin as a single intravenous agent",
      "C": "General ward admission with oral amoxicillin and a repeat chest radiograph tomorrow",
      "D": "Discharge on oral doxycycline with telephone follow-up within forty-eight hours"
    },
    "answer": "A",
    "explanation": "He meets every CURB-65 element, with confusion, uremia, tachypnea, hypotension, and age above 65, and also has multilobar disease and hypoxemia, which defines severe pneumonia requiring ICU care and combination therapy with a beta-lactam and a macrolide. Single-agent fluoroquinolone therapy is acceptable for non-severe ward patients but is insufficient for severe disease. A ward bed and oral amoxicillin undertreat and underestimate his risk, and discharge with doxycycline is unsafe for a hypotensive, hypoxemic patient.",
    "id": 112
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 55-year-old man has had pneumonia for 5 days and remains febrile on ceftriaxone and azithromycin. Chest radiography shows a large right pleural effusion. Thoracentesis yields turbid fluid with a pH of 7.05, glucose of 35 mg/dL, LDH of 1,800 IU/L, and a high neutrophil count. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Repeat thoracentesis in two days while continuing antibiotics alone",
      "B": "Intrapleural talc pleurodesis to prevent later reaccumulation of the pleural effusion",
      "C": "Intravenous furosemide diuresis with repeat chest radiography after forty-eight hours",
      "D": "Tube thoracostomy for drainage of the complicated parapneumonic effusion with continued antibiotics"
    },
    "answer": "D",
    "explanation": "A pH below 7.20, a low glucose, and a high LDH describe a complicated parapneumonic effusion or early empyema, which will not clear with antibiotics alone and needs continuous drainage by chest tube. Repeating needle aspiration and relying on antibiotics risks loculation and a thickened pleural peel. Talc pleurodesis is a treatment for recurrent malignant effusions, not for infected fluid. Diuresis addresses a cardiac transudate and would do nothing for infected pleural fluid.",
    "id": 113
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 74-year-old man with ischemic cardiomyopathy and an ejection fraction of 30% reports 1 week of worsening orthopnea and leg swelling. He is afebrile, and there is no chest pain. Examination shows jugular venous distension, bibasilar crackles, and bilateral pitting edema. Chest radiography shows small to moderate bilateral pleural effusions, larger on the right, with cardiomegaly. BNP is 1,450 pg/mL. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Diagnostic thoracentesis with full pleural fluid analysis before changing therapy",
      "B": "Intensified diuretic therapy and reassessment of the effusions after clinical response",
      "C": "Contrast-enhanced chest CT to search for an underlying malignancy",
      "D": "Tube thoracostomy with placement of an indwelling pleural catheter"
    },
    "answer": "B",
    "explanation": "Bilateral effusions in a patient with decompensated heart failure, cardiomegaly, edema, and a high natriuretic peptide are most likely transudates, and the right approach is to treat the heart failure and sample the fluid only if the effusions persist, are clearly asymmetric, or the patient is febrile or has pleuritic pain. Immediate thoracentesis adds risk without changing management. Chest CT looks for a problem the presentation does not suggest. A chest tube or indwelling catheter is for recurrent malignant or complicated effusions.",
    "id": 114
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 45-year-old woman comes to the emergency department 3 days after a 9-hour flight with pleuritic chest pain and dyspnea. Heart rate is 104/min, respiratory rate 20/min, and oxygen saturation 94% on room air. She has no leg swelling, hemoptysis, malignancy, prior venous thromboembolism, or estrogen use, and her creatinine is 0.8 mg/dL. In the physician's judgment, pulmonary embolism is the most likely diagnosis. Which of the following is the most appropriate next step?",
    "options": {
      "A": "CT pulmonary angiography of the chest now, before any D-dimer testing",
      "B": "Quantitative D-dimer assay, with imaging only if the result is positive",
      "C": "Bilateral lower extremity venous duplex ultrasonography as the sole test",
      "D": "Ventilation-perfusion scanning because it avoids contrast and radiation exposure"
    },
    "answer": "A",
    "explanation": "Her Wells score is 4.5, from tachycardia and clinical judgment that pulmonary embolism is the leading diagnosis, which makes embolism likely, and in this group the next step is imaging, not a screening blood test. A negative D-dimer is not reliable enough to exclude embolism in a likely group, so ordering one first only delays diagnosis. Leg ultrasonography has a low yield without leg symptoms and cannot exclude a pulmonary clot. Ventilation-perfusion scanning is used when contrast is contraindicated, which is not the case here, and it is less often diagnostic.",
    "id": 115
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 56-year-old man collapses at home and is brought to the emergency department. Blood pressure is 78/50 mm Hg despite 1 L of crystalloid, heart rate is 128/min, and oxygen saturation is 86% on a non-rebreather mask. Bedside echocardiography shows a dilated, hypokinetic right ventricle, and CT pulmonary angiography shows bilateral central emboli. He has no history of bleeding, stroke, or recent surgery. Which of the following is the most appropriate management?",
    "options": {
      "A": "Enoxaparin therapeutic dosing and admission to a monitored bed",
      "B": "Placement of an inferior vena cava filter as the initial definitive therapy",
      "C": "Systemic thrombolysis with alteplase together with an unfractionated heparin infusion",
      "D": "Apixaban 10 mg twice daily with supplemental oxygen and observation"
    },
    "answer": "C",
    "explanation": "Sustained hypotension from acute pulmonary embolism is high-risk disease, and systemic thrombolysis is indicated when there is no contraindication, together with unfractionated heparin that can be stopped quickly. Low-molecular-weight heparin or an oral anticoagulant alone does not rapidly relieve right ventricular obstruction in an unstable patient and is not adequate. A filter is for patients who cannot receive anticoagulation and does not treat existing clot. Observation on an oral agent ignores the shock state.",
    "id": 116
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 61-year-old man has pulmonary embolism confirmed on CT. Blood pressure is 124/76 mm Hg, heart rate is 108/min, and oxygen saturation is 92% on 2 L/min of oxygen. The right-to-left ventricular diameter ratio is 1.2, and troponin is elevated. He has no contraindication to thrombolysis. Which of the following is the most appropriate management?",
    "options": {
      "A": "Unfractionated heparin infusion with close monitoring, reserving thrombolysis for hemodynamic decline",
      "B": "Immediate systemic alteplase because right ventricular dysfunction mandates thrombolysis in every patient",
      "C": "Discharge home on apixaban with outpatient follow-up in one week",
      "D": "Inferior vena cava filter placement and aspirin without anticoagulation"
    },
    "answer": "A",
    "explanation": "He has intermediate-high-risk embolism, with preserved blood pressure but both right ventricular strain and a positive troponin, and the best approach is anticoagulation with monitoring in the hospital and rescue treatment if he deteriorates, since upfront thrombolysis reduced decompensation in trials but raised major bleeding and intracranial hemorrhage without improving survival. Right ventricular dysfunction alone does not mandate thrombolysis. Discharge is unsafe with hypoxemia and strain. A filter without anticoagulation does not treat the clot burden and is reserved for those who cannot be anticoagulated.",
    "id": 117
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 32-year-old Black woman has 2 weeks of fever, painful red nodules on both shins, and swollen, tender ankles. Chest radiography shows bilateral hilar lymphadenopathy with clear lung fields. She is otherwise well, and her calcium is normal. Which of the following is the most appropriate management?",
    "options": {
      "A": "Prednisone 40 mg daily for twelve months, started immediately",
      "B": "Nonsteroidal anti-inflammatory drugs for symptoms with observation, given the favorable prognosis",
      "C": "Methotrexate plus infliximab as initial therapy for systemic sarcoidosis",
      "D": "Empiric four-drug antituberculous therapy pending mycobacterial culture results"
    },
    "answer": "B",
    "explanation": "Erythema nodosum, bilateral hilar adenopathy, fever, and ankle arthritis form Löfgren syndrome, an acute self-limited form of sarcoidosis that is diagnosed clinically and resolves spontaneously in most patients, so NSAIDs and observation are enough. Long steroid courses expose her to toxicity for a benign process. Methotrexate and infliximab are for refractory or severe organ disease. Antituberculous therapy is not warranted on this classic picture without evidence of infection.",
    "id": 118
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 68-year-old man who formerly smoked has had a dry cough and progressive exertional dyspnea for 2 years. Examination shows bibasilar fine inspiratory crackles and digital clubbing. Forced vital capacity is 62% of predicted, and DLCO is 45% of predicted. High-resolution CT shows basal-predominant subpleural reticulation, traction bronchiectasis, and honeycombing. He has no exposures or connective tissue disease features. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Long-term prednisone combined with azathioprine and N-acetylcysteine for fibrosis control",
      "B": "Inhaled fluticasone-salmeterol twice daily for presumed airway disease",
      "C": "Video-assisted surgical lung biopsy before any treatment decision is considered",
      "D": "Nintedanib to slow the annual rate of decline in forced vital capacity"
    },
    "answer": "D",
    "explanation": "The clinical picture and the basal honeycombing pattern are diagnostic of idiopathic pulmonary fibrosis without biopsy, and antifibrotic therapy with nintedanib or pirfenidone slows loss of lung function. Prednisone with azathioprine and N-acetylcysteine increased mortality and hospitalization in a randomized trial. Inhaled agents treat airway disease and have no effect on parenchymal fibrosis. Surgical biopsy adds risk, including acute exacerbation, when the imaging pattern is already sufficient.",
    "id": 119
  },
  {
    "domain": "pulmonary",
    "chapter": 12,
    "question": "A 34-year-old woman with limited cutaneous systemic sclerosis has 6 months of progressive exertional dyspnea. Echocardiography shows a right ventricular systolic pressure of 70 mm Hg. Right heart catheterization shows a mean pulmonary artery pressure of 42 mm Hg, a pulmonary artery wedge pressure of 10 mm Hg, and a pulmonary vascular resistance of 7 Wood units. She has no response on vasoreactivity testing. A ventilation-perfusion scan is normal, and pulmonary function testing shows no significant lung disease. Which of the following is the most appropriate initial therapy?",
    "options": {
      "A": "High-dose nifedipine as the initial vasodilator therapy in this patient",
      "B": "Warfarin alone to prevent in situ thrombosis of the small pulmonary arteries",
      "C": "Initial combination of an endothelin receptor antagonist and a phosphodiesterase-5 inhibitor",
      "D": "Loop diuretic and supplemental oxygen only, with repeat catheterization in one year"
    },
    "answer": "C",
    "explanation": "Precapillary pulmonary hypertension with a normal wedge pressure, high resistance, a normal perfusion scan, and an underlying connective tissue disease is pulmonary arterial hypertension, and initial dual oral therapy with an endothelin receptor antagonist and a phosphodiesterase-5 inhibitor improves outcomes more than monotherapy. Calcium channel blockers are only for the minority who respond to vasoreactivity testing and can cause harm in nonresponders. Anticoagulation is not routine in this form. Diuretics and oxygen are supportive and leave the disease untreated.",
    "id": 120
  },
  {
    "domain": "critical_care",
    "chapter": 13,
    "question": "A 68-year-old man is admitted with lobar pneumonia. Temperature is 39.1 C, heart rate 124/min, and blood pressure 82/44 mm Hg. Serum lactate is 4.8 mmol/L. After blood cultures and a dose of ceftriaxone with azithromycin, he receives 30 mL/kg of lactated Ringer solution, but blood pressure remains 80/42 mm Hg (mean 55 mm Hg). Which of the following is the most appropriate next step in management?",
    "options": {
      "A": "Administer a second 30 mL/kg bolus of normal saline over the next hour while reassessing",
      "B": "Start intravenous dopamine and titrate the infusion to a heart rate under 100 per minute",
      "C": "Start intravenous norepinephrine and titrate to a mean arterial pressure of 65 mm Hg",
      "D": "Insert a pulmonary artery catheter and delay any vasopressor therapy until readings are available"
    },
    "answer": "C",
    "explanation": "This patient meets criteria for septic shock because hypotension persists after an adequate crystalloid bolus with lactate above 2 mmol/L. Norepinephrine is the first-line vasopressor, started early and titrated to a mean arterial pressure of 65 mm Hg, and it can be run through a peripheral line while central access is arranged. Another large fixed bolus of saline risks fluid overload and hyperchloremic acidosis, and further fluids should follow dynamic assessment of responsiveness instead. Dopamine causes more arrhythmias than norepinephrine and is no longer recommended as the first agent, and its goal is not a heart rate target. A pulmonary artery catheter is not required before vasopressors, and delaying them worsens organ hypoperfusion.",
    "id": 121
  },
  {
    "domain": "critical_care",
    "chapter": 13,
    "question": "A 42-year-old man who is 178 cm tall and weighs 112 kg is intubated for severe pneumonia and bilateral infiltrates. PaO2/FiO2 is 140 mm Hg on PEEP of 10 cm H2O. Predicted body weight is calculated as 73 kg. Which initial ventilator setting is most appropriate?",
    "options": {
      "A": "Tidal volume 900 mL calculated from actual body weight, with plateau pressure kept below 40 cm H2O",
      "B": "Tidal volume 440 mL from predicted body weight, with plateau pressure at or below 30 cm H2O",
      "C": "Tidal volume 800 mL calculated from ideal weight, with respiratory rate reduced to limit pressure",
      "D": "Tidal volume 600 mL chosen from usual adult defaults, with PEEP lowered to 5 cm H2O"
    },
    "answer": "B",
    "explanation": "This patient has moderate acute respiratory distress syndrome, and lung-protective ventilation uses 6 mL/kg of predicted body weight, which is about 440 mL for 73 kg, with a plateau pressure of 30 cm H2O or less. Using actual body weight overestimates lung size because lung volume tracks height and sex, and tidal volumes of 900 mL expose the lung to overdistension and mortality. A plateau pressure goal of 40 cm H2O is far above the accepted limit. Large tidal volumes near 800 mL are the old high-volume strategy that increased mortality. A default 600 mL is nearly 8 mL/kg and not tailored, and lowering PEEP to 5 would worsen derecruitment in a patient with moderate hypoxemia.",
    "id": 122
  },
  {
    "domain": "critical_care",
    "chapter": 13,
    "question": "A 59-year-old woman is in the cardiac care unit after an anterior ST-elevation myocardial infarction. Blood pressure is 78/50 mm Hg, her extremities are cool, and crackles are present to both apices. Pulmonary artery catheter readings show cardiac index 1.6 L/min/m2, pulmonary capillary wedge pressure 28 mm Hg, central venous pressure 14 mm Hg, and elevated systemic vascular resistance. Which type of shock is present?",
    "options": {
      "A": "Cardiogenic shock caused by left ventricular pump failure after the large anterior infarction",
      "B": "Hypovolemic shock caused by occult retroperitoneal hemorrhage after the recent cardiac catheterization",
      "C": "Distributive shock caused by a systemic inflammatory response from an unrecognized infection",
      "D": "Obstructive shock caused by massive pulmonary embolism complicating the recent hospital admission"
    },
    "answer": "A",
    "explanation": "Low cardiac index with high wedge pressure, high systemic vascular resistance, and pulmonary congestion after a large anterior infarction defines cardiogenic shock. Hemorrhagic or other hypovolemic shock lowers cardiac output but also drops filling pressures, so the wedge pressure would be low and the lungs clear. Distributive shock lowers vascular resistance and typically preserves or raises cardiac output with warm extremities. Obstructive shock from pulmonary embolism produces a high central venous pressure with a low or normal wedge pressure, since the left heart is underfilled, and would not cause pulmonary edema.",
    "id": 123
  },
  {
    "domain": "critical_care",
    "chapter": 13,
    "question": "A 70-year-old man with chronic obstructive pulmonary disease is mechanically ventilated in volume control mode. The ventilator alarms for high pressures. Peak inspiratory pressure is 52 cm H2O and plateau pressure on an inspiratory hold is 19 cm H2O. Breath sounds reveal diffuse wheezing and the tube is patent. Which is the most appropriate next step?",
    "options": {
      "A": "Increase the tidal volume to improve alveolar recruitment",
      "B": "Perform needle decompression of the right hemithorax immediately",
      "C": "Give an inhaled bronchodilator and suction the airway",
      "D": "Change from volume control to continuous positive airway pressure"
    },
    "answer": "C",
    "explanation": "A large gap between peak and plateau pressure with a normal plateau indicates high airway resistance, here from bronchospasm and secretions in obstructive lung disease. Bronchodilators, suctioning, and confirming the tube is unobstructed address that resistance. A normal plateau pressure argues against a compliance problem such as tension pneumothorax, so decompression is unwarranted. Raising tidal volume would increase peak pressure and the risk of air trapping. Switching to a spontaneous mode does not treat the cause and would risk respiratory failure in a patient who still needs full support.",
    "id": 124
  },
  {
    "domain": "critical_care",
    "chapter": 13,
    "question": "A 24-year-old woman with type 1 diabetes presents with abdominal pain and vomiting. Glucose is 540 mg/dL, arterial pH 7.12, bicarbonate 8 mEq/L, and serum ketones are strongly positive. Serum potassium is 2.9 mEq/L. She has received 1 liter of normal saline. Which is the most appropriate next step?",
    "options": {
      "A": "Begin an insulin infusion at 0.1 units/kg per hour while the intravenous fluids continue",
      "B": "Hold insulin, replace potassium intravenously, and start insulin once potassium exceeds 3.3 mEq/L",
      "C": "Give intravenous sodium bicarbonate first to correct the arterial pH to above 7.2",
      "D": "Administer subcutaneous insulin glargine and recheck the glucose level every four hours"
    },
    "answer": "B",
    "explanation": "In diabetic ketoacidosis, insulin shifts potassium into cells, so starting it with a potassium below 3.3 mEq/L can provoke dangerous arrhythmia and respiratory muscle weakness. The correct order is fluids and potassium replacement first, with insulin once potassium has reached at least 3.3 mEq/L. Starting the infusion right away ignores that safety threshold. Bicarbonate is reserved for a pH below 6.9 and does not address the hypokalemia, and in fact can lower potassium further. Subcutaneous long-acting insulin alone is inadequate for severe ketoacidosis, which needs intravenous insulin and a closing of the anion gap.",
    "id": 125
  },
  {
    "domain": "critical_care",
    "chapter": 13,
    "question": "A 61-year-old man is resuscitated from ventricular fibrillation cardiac arrest at a gym, with return of spontaneous circulation after two shocks. He remains comatose with blood pressure 118/70 mm Hg after intubation. The 12-lead ECG shows 3 mm ST elevation in leads V1 to V4. Which is the most appropriate next step?",
    "options": {
      "A": "Targeted hypothermia to 32 C before any other intervention is considered",
      "B": "Brain computed tomography followed by neurologic prognostication at six hours",
      "C": "Intravenous alteplase for presumed massive pulmonary embolism with obstructive shock",
      "D": "Emergent coronary angiography with percutaneous coronary intervention of the culprit vessel"
    },
    "answer": "D",
    "explanation": "Ventricular fibrillation with persistent ST elevation after return of circulation signals an acute coronary occlusion, and emergent angiography is indicated even though the patient is comatose. Temperature control should proceed alongside, but it should not delay reperfusion, and hypothermia has not shown superiority to fever prevention. Neurologic prognostication is deferred until at least 72 hours after return to normothermia, and a six-hour decision would cause premature withdrawal of care. Thrombolysis for a presumed pulmonary embolism has no supporting findings, since the electrocardiogram localizes an anterior infarction.",
    "id": 126
  },
  {
    "domain": "critical_care",
    "chapter": 13,
    "question": "A 35-year-old woman with severe influenza pneumonia has been intubated for two days. She is ventilated with tidal volume 6 mL/kg predicted body weight, PEEP 14 cm H2O, FiO2 0.8, and plateau pressure 27 cm H2O. PaO2 is 68 mm Hg, giving a PaO2/FiO2 ratio of 85. Which intervention is most likely to reduce mortality?",
    "options": {
      "A": "Prone positioning for at least 16 hours per day alongside the current lung-protective settings",
      "B": "Inhaled nitric oxide given as continuous maintenance therapy for the next several days",
      "C": "High-pressure recruitment maneuvers repeated every hour to open collapsed alveolar units",
      "D": "Routine continuous neuromuscular blockade infusion for the next 48 hours in all patients"
    },
    "answer": "A",
    "explanation": "Prone positioning for most of the day improved survival in severe acute respiratory distress syndrome with a PaO2/FiO2 below 150 despite optimized ventilation. Inhaled nitric oxide raises oxygenation briefly but has not improved survival and can injure the kidney. Aggressive recruitment maneuvers increased mortality in a large trial and are not advised routinely. Routine continuous paralysis showed no outcome benefit in the larger confirmatory trial, so it is reserved for dyssynchrony that cannot otherwise be managed. Extracorporeal support would be considered if proning fails in an experienced center.",
    "id": 127
  },
  {
    "domain": "critical_care",
    "chapter": 13,
    "question": "A 66-year-old woman, intubated for pneumonia, is agitated, pulling at her tube, and failing a Confusion Assessment Method for the ICU screen. She is receiving a continuous midazolam infusion and fentanyl. Vital signs are stable and oxygenation is adequate. Which is the best approach?",
    "options": {
      "A": "Increase the midazolam infusion rate and apply wrist restraints to protect the tube",
      "B": "Add scheduled haloperidol and continue the benzodiazepine infusion at the present rate",
      "C": "Order a head computed tomography scan and keep the sedation at the current depth",
      "D": "Stop the benzodiazepine, use dexmedetomidine or propofol, treat pain, and correct precipitating causes"
    },
    "answer": "D",
    "explanation": "Delirium in ventilated adults is worsened by benzodiazepines, so the approach is to lighten sedation, favor dexmedetomidine or propofol after analgesia, treat pain, and look for reversible triggers such as infection, retention, and electrolyte abnormalities. Raising the benzodiazepine dose and restraining the patient deepens delirium and raises the risk of injury. Scheduled haloperidol has not shortened delirium in large trials, and continuing the offending sedative leaves the cause untreated. Imaging is not indicated without focal findings or a clear head injury history.",
    "id": 128
  },
  {
    "domain": "critical_care",
    "chapter": 13,
    "question": "A 74-year-old man has septic shock from a perforated diverticulum. After source control surgery, broad-spectrum antibiotics, and fluids, he still requires norepinephrine at 0.35 mcg/kg/min, now for six hours. Lactate is 3.1 mmol/L. Which addition is most appropriate?",
    "options": {
      "A": "Dexamethasone 20 mg intravenously once daily given for ten days as adjunctive therapy",
      "B": "Prophylactic intravenous immune globulin given to modulate the inflammatory response",
      "C": "Add hydrocortisone 50 mg intravenously every six hours to the current regimen",
      "D": "Start a dobutamine infusion titrated to a supranormal cardiac output target"
    },
    "answer": "C",
    "explanation": "Septic shock with a sustained high vasopressor requirement, norepinephrine at 0.25 mcg/kg/min or more for at least four hours, is the guideline indication for intravenous hydrocortisone, typically 200 mg per day divided every six hours. Dexamethasone at that dose belongs to the acute respiratory distress syndrome literature and is not the sepsis agent. Intravenous immune globulin is not recommended in adults with sepsis. Dobutamine is added only for documented myocardial dysfunction with low cardiac output, and aiming at a supranormal output provides no benefit.",
    "id": 129
  },
  {
    "domain": "kidney",
    "chapter": 14,
    "question": "A 64-year-old man undergoes emergency repair of a ruptured abdominal aortic aneurysm. He is hypotensive for several hours intraoperatively. On postoperative day two, urine output is 15 mL/hour and creatinine has risen from 1.0 to 2.6 mg/dL. Urine microscopy shows many muddy brown granular casts, and fractional excretion of sodium is 3.2%. Which is the most likely diagnosis?",
    "options": {
      "A": "Prerenal azotemia due to ongoing volume depletion after the large operative blood loss",
      "B": "Acute interstitial nephritis due to perioperative exposure to a beta-lactam antibiotic",
      "C": "Postrenal obstruction due to bladder outlet narrowing from prostatic enlargement",
      "D": "Acute tubular necrosis due to prolonged renal ischemia during the operation"
    },
    "answer": "D",
    "explanation": "Prolonged intraoperative hypotension followed by muddy brown granular casts and a fractional sodium excretion above 2% is the classic picture of ischemic tubular necrosis, in which damaged tubules cannot conserve sodium. Prerenal azotemia would show avid sodium retention, a low fractional excretion, concentrated urine, and a bland sediment. Interstitial nephritis produces white cells and white cell casts, often with rash or fever after a new drug. Obstruction is excluded by ultrasound or bladder scan and does not generate granular casts. Management of the diagnosed lesion is supportive, with nephrotoxin avoidance.",
    "id": 130
  },
  {
    "domain": "kidney",
    "chapter": 14,
    "question": "A 5-year-old boy develops periorbital swelling over one week. Blood pressure is normal. Urinalysis shows 4+ protein with no blood. Serum albumin is 1.8 g/dL, cholesterol is elevated, and complement C3 level is normal. Which is the most appropriate next step?",
    "options": {
      "A": "Percutaneous renal biopsy before any treatment is considered, to confirm the histologic lesion",
      "B": "Intravenous cyclophosphamide followed by a series of plasma exchange sessions",
      "C": "Oral prednisone for several weeks with close monitoring of the response",
      "D": "Supportive care with salt restriction and observation, without any immunosuppressive medication"
    },
    "answer": "C",
    "explanation": "A young child with edema, heavy proteinuria, bland urine, normal blood pressure, and normal complement most likely has minimal change disease, which responds to corticosteroids in the large majority. Treating empirically with prednisone is standard, and biopsy is reserved for atypical features or steroid resistance. Cyclophosphamide and plasma exchange belong to crescentic glomerulonephritis and vasculitis, not to this presentation. Observation alone leaves a child with severe hypoalbuminemia exposed to infection and thrombosis, and the disease does not usually remit without steroids.",
    "id": 131
  },
  {
    "domain": "kidney",
    "chapter": 14,
    "question": "A 24-year-old man has recurrent episodes of cola-colored urine. The latest began one day after the onset of a sore throat. Blood pressure is 142/88 mm Hg, creatinine is 1.3 mg/dL, and urine microscopy shows dysmorphic red cells. Serum C3 and C4 levels are normal. Which is the most likely diagnosis?",
    "options": {
      "A": "Poststreptococcal glomerulonephritis presenting after a typical latent period of two weeks",
      "B": "Anti-glomerular basement membrane disease with associated pulmonary hemorrhage and rapid decline",
      "C": "Membranous nephropathy with subepithelial immune complex deposits and nephrotic proteinuria",
      "D": "Immunoglobulin A nephropathy with episodic macroscopic hematuria after mucosal infection"
    },
    "answer": "D",
    "explanation": "Gross hematuria appearing within one to two days of a mucosal infection, recurring episodes, and normal complement levels characterize immunoglobulin A nephropathy. Poststreptococcal disease follows pharyngitis only after a latent period of one to three weeks and lowers C3. Anti-glomerular basement membrane disease causes rapidly progressive decline and often lung hemorrhage, not recurrent mild episodes. Membranous nephropathy is a nephrotic syndrome with heavy proteinuria and generally lacks hematuria or red cell dysmorphism.",
    "id": 132
  },
  {
    "domain": "kidney",
    "chapter": 14,
    "question": "A 58-year-old man with type 2 diabetes has chronic kidney disease with eGFR 38 mL/min/1.73 m2 and urine albumin-to-creatinine ratio of 450 mg/g. Blood pressure is 128/76 mm Hg on maximum-dose lisinopril, potassium is 4.6 mEq/L, and hemoglobin A1c is 7.4%. Which addition most reduces his risk of kidney disease progression?",
    "options": {
      "A": "Add a sodium-glucose cotransporter-2 inhibitor such as empagliflozin to the current regimen",
      "B": "Add a dihydropyridine calcium channel blocker for additional blood pressure lowering",
      "C": "Add a sulfonylurea to bring the hemoglobin A1c below 6.5 percent",
      "D": "Add a loop diuretic to reduce proteinuria through volume contraction"
    },
    "answer": "A",
    "explanation": "Sodium-glucose cotransporter-2 inhibitors reduce progression of kidney disease and cardiovascular events in diabetic kidney disease even at this level of glomerular filtration, with benefit beyond glycemic control. A calcium channel blocker would not address albuminuria and his pressure is already controlled. Tight glycemic control with a sulfonylurea carries hypoglycemia risk in reduced kidney function and does not deliver comparable kidney protection. Loop diuretics help volume overload but have no disease-modifying effect on proteinuric progression.",
    "id": 133
  },
  {
    "domain": "kidney",
    "chapter": 14,
    "question": "A 67-year-old man with stage 5 chronic kidney disease has had nausea and fatigue for two weeks. He is now confused and has chest pain that worsens when lying flat. A pericardial friction rub is heard. Potassium is 4.8 mEq/L and bicarbonate is 20 mEq/L. Which is the most appropriate management?",
    "options": {
      "A": "Begin nonsteroidal anti-inflammatory therapy and arrange outpatient follow-up in one week",
      "B": "Perform immediate pericardiocentesis without any further preparation or imaging",
      "C": "Start urgent hemodialysis for uremic pericarditis with encephalopathy",
      "D": "Increase the dose of the oral phosphate binder and recheck labs"
    },
    "answer": "C",
    "explanation": "Pericarditis with encephalopathy in end-stage kidney disease reflects uremia, a clear indication for urgent dialysis, and these features improve with removal of uremic toxins. Anti-inflammatory therapy alone does not treat the cause, and NSAIDs can worsen residual kidney function and bleeding. Pericardiocentesis is reserved for tamponade physiology, and no such evidence is given. Adjusting the phosphate binder addresses mineral metabolism, not an immediate threat from uremia.",
    "id": 134
  },
  {
    "domain": "kidney",
    "chapter": 14,
    "question": "A 72-year-old woman with eGFR 28 mL/min/1.73 m2 and type 2 diabetes needs a contrast-enhanced CT scan to evaluate a suspected bowel perforation. She is euvolemic and takes metformin and ibuprofen. Which measure best lowers her risk of contrast-associated kidney injury?",
    "options": {
      "A": "Oral N-acetylcysteine given for two days before the scan",
      "B": "Intravenous isotonic crystalloid and holding the ibuprofen and metformin",
      "C": "A prophylactic loop diuretic dose given immediately after the scan",
      "D": "Delaying the study for several days until the kidney function improves"
    },
    "answer": "B",
    "explanation": "Volume expansion with isotonic fluid, avoiding NSAIDs, and holding metformin when eGFR is under 30 are the supported preventive measures. N-acetylcysteine did not reduce kidney injury in a large randomized trial. Giving a loop diuretic causes volume depletion and increases risk. A suspected bowel perforation is a surgical emergency, so postponing the scan to wait for improvement in kidney function is dangerous and unnecessary.",
    "id": 135
  },
  {
    "domain": "kidney",
    "chapter": 14,
    "question": "A 35-year-old woman has left flank pain and hematuria. She is afebrile, and her pain is controlled with oral analgesics. Non-contrast CT shows a 5 mm stone in the distal left ureter with mild hydronephrosis. Creatinine is 0.8 mg/dL and urinalysis shows no infection. Which is the most appropriate management?",
    "options": {
      "A": "Outpatient NSAID analgesia, hydration, and a trial of spontaneous stone passage",
      "B": "Immediate ureteroscopy under general anesthesia on the same day of presentation",
      "C": "Percutaneous nephrostomy tube placement for urgent decompression of the left kidney",
      "D": "Extracorporeal shock wave lithotripsy scheduled within 24 hours of the diagnosis"
    },
    "answer": "A",
    "explanation": "A small distal ureteral stone with controlled pain, normal creatinine, and no infection will usually pass spontaneously, so conservative management with analgesia and observation is appropriate. Same-day ureteroscopy and shock wave lithotripsy are options for stones that fail to pass or are larger. Nephrostomy placement is for obstruction with infection, a solitary kidney, or acute kidney injury, none of which are present here.",
    "id": 136
  },
  {
    "domain": "kidney",
    "chapter": 14,
    "question": "A 40-year-old woman has fever of 39.2 C, rigors, and left flank pain for two days. Blood pressure is 96/58 mm Hg and heart rate is 118/min. Urinalysis shows many white cells. Non-contrast CT shows a 9 mm obstructing proximal ureteral stone with hydronephrosis. Which is the most appropriate next step after cultures and antibiotics?",
    "options": {
      "A": "Oral tamsulosin for medical expulsive therapy at home",
      "B": "Urgent decompression with a ureteral stent or nephrostomy tube",
      "C": "Scheduled lithotripsy in two weeks after the infection is treated",
      "D": "Repeat imaging in 48 hours before any further intervention"
    },
    "answer": "B",
    "explanation": "An obstructing stone with infection and signs of sepsis is a urologic emergency, because antibiotics cannot sterilize an obstructed system. Prompt drainage by stent or percutaneous nephrostomy is required, with definitive stone treatment after recovery. Medical expulsive therapy at home is unsafe in this patient. Waiting two weeks or repeating imaging delays source control and risks septic shock.",
    "id": 137
  },
  {
    "domain": "kidney",
    "chapter": 14,
    "question": "A 63-year-old woman with stage G4 chronic kidney disease has fatigue. Hemoglobin is 9.1 g/dL, mean corpuscular volume is 82 fL, transferrin saturation is 11%, and ferritin is 70 ng/mL. No bleeding source is found. Which is the best next step?",
    "options": {
      "A": "Begin an erythropoiesis-stimulating agent targeting a hemoglobin of 13 g/dL",
      "B": "Transfuse two units of packed red blood cells and recheck in a week",
      "C": "Start vitamin B12 injections for presumed pernicious anemia",
      "D": "Replace iron first and then reassess for an erythropoiesis-stimulating agent"
    },
    "answer": "D",
    "explanation": "Iron deficiency, shown by low transferrin saturation and ferritin, must be corrected before starting an erythropoiesis-stimulating agent, because the agent depends on adequate iron stores. Targeting a normal hemoglobin raises stroke and thrombosis risk, and the usual ceiling is 11.5 g/dL. Transfusion is reserved for severe symptoms and avoided in patients who may be transplant candidates because of sensitization. Vitamin B12 deficiency would produce a raised mean corpuscular volume, which is not seen here.",
    "id": 138
  },
  {
    "domain": "electrolytes",
    "chapter": 15,
    "question": "A 58-year-old woman with small cell lung cancer is brought in after a generalized tonic-clonic seizure. Serum sodium is 111 mEq/L, serum osmolality is 235 mOsm/kg, urine osmolality is 520 mOsm/kg, and urine sodium is 78 mEq/L. She appears euvolemic. The seizure has stopped, but she remains obtunded. Which is the most appropriate immediate treatment?",
    "options": {
      "A": "Fluid restriction to 800 mL per day with oral salt tablets",
      "B": "Intravenous 3% saline given as a 100 to 150 mL bolus over 10 minutes",
      "C": "Oral tolvaptan 15 mg once daily with careful sodium monitoring",
      "D": "Isotonic saline infusion at 150 mL per hour overnight with sodium checks"
    },
    "answer": "B",
    "explanation": "Severe hyponatremia with seizure and persistent obtundation reflects cerebral edema, and a hypertonic saline bolus rapidly raises the sodium by a few mEq/L, which reverses the danger. Fluid restriction and salt tablets are slow and suited to asymptomatic chronic SIADH. Tolvaptan acts over hours and is not appropriate for emergencies. Isotonic saline in SIADH, where urine is more concentrated than the infusion, can paradoxically lower the sodium further because the sodium is excreted and the free water retained.",
    "id": 139
  },
  {
    "domain": "electrolytes",
    "chapter": 15,
    "question": "A 49-year-old man with alcohol use disorder is admitted with a sodium of 106 mEq/L and mild confusion. He is treated with isotonic saline for presumed volume depletion. Over the next 20 hours his urine output rises to 400 mL/hour and his sodium reaches 120 mEq/L. Which is the most appropriate next step?",
    "options": {
      "A": "Continue isotonic saline at the present rate and recheck the sodium in 12 hours",
      "B": "Give a loop diuretic to hasten excretion of the excess free water",
      "C": "Start 3% saline to stabilize the level against further decline",
      "D": "Give desmopressin and infuse 5% dextrose to lower the sodium again"
    },
    "answer": "D",
    "explanation": "This patient is at high risk for osmotic demyelination, with a very low starting sodium, alcohol use disorder, and likely hypokalemia, and the safe ceiling is about 8 mEq/L in 24 hours. Brisk water diuresis after volume repletion has produced a rise of 14 mEq/L, so re-lowering with desmopressin plus D5W is advised. Continuing saline permits further overcorrection. A loop diuretic would increase free water loss and worsen the rise. Hypertonic saline would raise the sodium still more.",
    "id": 140
  },
  {
    "domain": "electrolytes",
    "chapter": 15,
    "question": "A 66-year-old man with diabetic kidney disease reports weakness. Potassium is 7.4 mEq/L, creatinine is 3.1 mg/dL, and the ECG shows peaked T waves and a QRS of 140 ms. Which is the most appropriate first step?",
    "options": {
      "A": "Regular insulin 10 units with 25 grams of dextrose intravenously",
      "B": "Intravenous calcium gluconate to stabilize the cardiac membrane",
      "C": "Oral sodium zirconium cyclosilicate 10 grams as a single dose",
      "D": "Nebulized albuterol 10 to 20 mg as the sole initial therapy"
    },
    "answer": "B",
    "explanation": "A widened QRS and peaked T waves mean the myocardium is at imminent risk, and calcium acts within minutes to antagonize the membrane effect of potassium, though it does not lower the level. Insulin with dextrose and albuterol shift potassium into cells within 15 to 30 minutes and follow calcium. A potassium binder removes potassium over hours and is not a first emergency step. Treating a widened QRS with shifting agents alone risks fatal arrhythmia during the delay.",
    "id": 141
  },
  {
    "domain": "electrolytes",
    "chapter": 15,
    "question": "A 22-year-old man with type 1 diabetes presents with two days of vomiting and polyuria. Labs show sodium 138 mEq/L, chloride 88 mEq/L, bicarbonate 22 mEq/L, glucose 560 mg/dL, and serum ketones strongly positive. Arterial pH is 7.39 and PaCO2 is 38 mm Hg. Which additional acid-base disorder is present?",
    "options": {
      "A": "Concurrent metabolic alkalosis from vomiting of gastric contents",
      "B": "Concurrent non-anion gap metabolic acidosis from prolonged diarrhea and bicarbonate loss",
      "C": "Concurrent respiratory acidosis from hypoventilation and carbon dioxide retention",
      "D": "No additional disorder, since a pure anion gap acidosis explains all findings"
    },
    "answer": "A",
    "explanation": "The anion gap is 138 minus 88 plus 22, or 28, so the gap rose by 16 while bicarbonate fell by only 2. A ratio far above 2 shows that bicarbonate is higher than a pure gap acidosis would allow, which reflects a coexisting metabolic alkalosis from vomiting. A non-gap acidosis would lower bicarbonate further and give a ratio below 1. Respiratory acidosis would raise the PaCO2 above the value Winter formula predicts, but the measured PaCO2 is close to it. A pure gap acidosis would produce a ratio of 1 to 2, not 8.",
    "id": 142
  },
  {
    "domain": "electrolytes",
    "chapter": 15,
    "question": "A 78-year-old man weighing 70 kg is admitted from a nursing home with confusion and poor oral intake for a week. Serum sodium is 160 mEq/L. He is hemodynamically stable and euvolemic on examination. Using total body water as 60% of body weight, which free water replacement plan is most appropriate?",
    "options": {
      "A": "About 2.4 liters of free water, given within the first six hours",
      "B": "About 3.0 liters of free water, given as rapidly as tolerated",
      "C": "About 4.5 liters of free water, aiming to normalize the sodium in 24 hours",
      "D": "About 6 liters of free water, replaced slowly over 48 hours or longer"
    },
    "answer": "D",
    "explanation": "The deficit is total body water multiplied by (160 divided by 140, minus 1), which is 42 liters times 0.143, or about 6 liters. Chronic hypernatremia must be corrected slowly, no faster than 10 mEq/L in 24 hours, so a fall from 160 to 140 mEq/L takes at least 48 hours. Rapid replacement over hours risks cerebral edema and seizures as brain cells swell. Smaller figures underestimate the deficit, and aiming at normal sodium in a day is too fast.",
    "id": 143
  },
  {
    "domain": "electrolytes",
    "chapter": 15,
    "question": "A 62-year-old man with a 50-pack-year smoking history has fatigue, constipation, and polyuria. Calcium is 14.8 mg/dL, albumin is 4.0 g/dL, parathyroid hormone is suppressed, and PTH-related peptide is elevated. Which is the most appropriate initial management?",
    "options": {
      "A": "Dietary calcium restriction combined with a thiazide diuretic for urinary calcium retention",
      "B": "Immediate parathyroidectomy after localization imaging of the parathyroid glands",
      "C": "Large-volume isotonic saline followed by intravenous zoledronic acid",
      "D": "Intravenous furosemide alone to promote urinary calcium excretion"
    },
    "answer": "C",
    "explanation": "Humoral hypercalcemia of malignancy with symptoms and calcium near 15 mg/dL needs aggressive isotonic hydration first, then a bisphosphonate, with calcitonin for a quick transient effect. Parathyroidectomy treats primary hyperparathyroidism, which is excluded by the suppressed hormone. Thiazides raise calcium. Loop diuretics are used only after volume repletion and only when overload develops, since volume depletion worsens hypercalcemia.",
    "id": 144
  },
  {
    "domain": "electrolytes",
    "chapter": 15,
    "question": "A 45-year-old woman with a bowel obstruction and diarrhea has pH 7.18, bicarbonate 12 mEq/L, and PaCO2 40 mm Hg on arterial blood gas. Which is the best interpretation?",
    "options": {
      "A": "Metabolic acidosis with inadequate respiratory response, indicating concurrent respiratory acidosis",
      "B": "Metabolic acidosis with appropriate respiratory compensation by hyperventilation",
      "C": "Metabolic acidosis with a concurrent primary respiratory alkalosis",
      "D": "Pure respiratory acidosis with appropriate renal compensation over several days"
    },
    "answer": "A",
    "explanation": "Winter formula predicts a PaCO2 of 1.5 times 12 plus 8, or 26 plus or minus 2. The measured value of 40 is well above the expected range, so the patient is failing to hyperventilate enough, which is a respiratory acidosis layered on the metabolic one and a warning of impending respiratory fatigue. A PaCO2 inside the predicted range would indicate appropriate compensation. A value below the range would signal respiratory alkalosis. The low bicarbonate excludes a pure respiratory process.",
    "id": 145
  },
  {
    "domain": "electrolytes",
    "chapter": 15,
    "question": "A 55-year-old woman on furosemide has persistent muscle weakness. Potassium is 2.9 mEq/L despite 120 mEq of oral potassium chloride over two days. Magnesium is 1.0 mg/dL (normal 1.7 to 2.2). Which is the most appropriate next step?",
    "options": {
      "A": "Switch to continuous intravenous potassium chloride at 40 mEq per hour",
      "B": "Add spironolactone and discontinue all oral potassium supplementation now",
      "C": "Replace the magnesium deficit and continue potassium repletion alongside it",
      "D": "Send plasma aldosterone and renin levels before any further potassium repletion"
    },
    "answer": "C",
    "explanation": "Magnesium depletion impairs potassium retention in the distal nephron, so hypokalemia stays refractory until magnesium is repleted. An infusion at 40 mEq/hour is unsafe because the maximum is 10 to 20 mEq/hour with monitoring. Spironolactone could help later but does not address the cause and carries hyperkalemia risk with potassium supplementation. Hormonal testing is premature when a loop diuretic and low magnesium readily explain the picture.",
    "id": 146
  },
  {
    "domain": "electrolytes",
    "chapter": 15,
    "question": "A 40-year-old woman with bipolar disorder who takes lithium reports voluminous urination and constant thirst. Urine output is 5 liters daily. After water deprivation, urine osmolality is 280 mOsm/kg and serum sodium is 147 mEq/L. After desmopressin, urine osmolality is 290 mOsm/kg. Which is the best management?",
    "options": {
      "A": "Start intranasal desmopressin as long-term replacement therapy for vasopressin deficiency",
      "B": "Restrict fluid intake to one liter per day to reduce urine output",
      "C": "Give hypertonic saline to correct the elevated serum sodium",
      "D": "Substitute another mood stabilizer if possible and add amiloride"
    },
    "answer": "D",
    "explanation": "Failure to concentrate urine after both water deprivation and desmopressin defines nephrogenic diabetes insipidus, here from lithium. Management removes the cause when feasible, adds amiloride (which blocks lithium entry into collecting duct cells), and may use a thiazide and low-sodium diet. Desmopressin treats central disease and would not help a kidney that cannot respond. Fluid restriction in polyuria of this size causes dangerous hypernatremia. Hypertonic saline would worsen hypernatremia.",
    "id": 147
  },
  {
    "domain": "gi_luminal",
    "chapter": 16,
    "question": "A 58-year-old man has had heartburn for ten years. Over the past three months he has noticed food sticking in his chest when he swallows meat, and he has lost 6 kg unintentionally. Hemoglobin is 10.8 g/dL with a low ferritin. Which is the most appropriate next step?",
    "options": {
      "A": "An eight-week empiric trial of twice-daily proton pump inhibitor",
      "B": "Ambulatory esophageal pH and impedance monitoring off therapy",
      "C": "Upper endoscopy with biopsy of any abnormal mucosa",
      "D": "Barium swallow followed by outpatient follow-up in six months"
    },
    "answer": "C",
    "explanation": "Dysphagia, weight loss, and iron deficiency anemia are alarm features that call for direct visualization and biopsy, because the leading concerns are adenocarcinoma, stricture, and Barrett esophagus. An empiric trial of acid suppression delays diagnosis of a possible cancer. Reflux monitoring is for patients with normal endoscopy and refractory symptoms. A barium study gives no tissue and a six-month delay is unsafe.",
    "id": 148
  },
  {
    "domain": "gi_luminal",
    "chapter": 16,
    "question": "A 55-year-old man with long-standing reflux undergoes surveillance endoscopy. A 4 cm segment of Barrett esophagus is seen, and biopsies from two separate sites confirm intestinal metaplasia with low-grade dysplasia, verified by a second expert pathologist. Which is the most appropriate management?",
    "options": {
      "A": "Continue a daily proton pump inhibitor and repeat endoscopy in five years",
      "B": "Perform laparoscopic Nissen fundoplication to prevent progression to adenocarcinoma",
      "C": "Proceed to esophagectomy because the segment exceeds three centimeters in length",
      "D": "Endoscopic eradication therapy with radiofrequency ablation after resecting visible lesions"
    },
    "answer": "D",
    "explanation": "Confirmed dysplasia in Barrett esophagus carries a meaningful risk of progression to adenocarcinoma, and guidelines favor endoscopic eradication, usually radiofrequency ablation after resection of any visible lesion. Surveillance every five years is for nondysplastic disease. Antireflux surgery treats reflux but has not been shown to prevent cancer. Esophagectomy is excessive for dysplasia and is saved for invasive disease beyond the submucosa.",
    "id": 149
  },
  {
    "domain": "gi_luminal",
    "chapter": 16,
    "question": "A 45-year-old woman with epigastric pain is found to have a duodenal ulcer. A stool antigen test is positive for Helicobacter pylori. She has never taken a macrolide antibiotic but has a penicillin allergy. Which regimen is most appropriate?",
    "options": {
      "A": "Twice-daily proton pump inhibitor with bismuth, tetracycline, and metronidazole for 14 days",
      "B": "Proton pump inhibitor with clarithromycin and amoxicillin given for seven days",
      "C": "Once-daily proton pump inhibitor alone for eight weeks, then retest for infection",
      "D": "Levofloxacin combined with amoxicillin and a proton pump inhibitor for ten days"
    },
    "answer": "A",
    "explanation": "Bismuth quadruple therapy for 14 days is the preferred first-line regimen, in part because it avoids amoxicillin and clarithromycin and overcomes common resistance, and it suits a penicillin-allergic patient. Clarithromycin triple therapy contains amoxicillin, is shorter than recommended, and is unreliable where clarithromycin resistance is common. A proton pump inhibitor alone heals the ulcer but leaves the infection and invites recurrence. Levofloxacin with amoxicillin is a salvage option and also contains the allergen.",
    "id": 150
  },
  {
    "domain": "gi_luminal",
    "chapter": 16,
    "question": "A 60-year-old man with alcohol-related cirrhosis presents with hematemesis. Blood pressure is 96/60 mm Hg, heart rate is 118/min, and hemoglobin is 7.4 g/dL. Two large-bore lines are placed and crystalloid is started. Which combination of measures should be given next, before endoscopy?",
    "options": {
      "A": "Intravenous pantoprazole infusion alone and transfusion to a hemoglobin of 10 g/dL",
      "B": "Octreotide infusion and ceftriaxone, with a restrictive transfusion target",
      "C": "Propranolol by mouth and lactulose, with endoscopy delayed for 48 hours",
      "D": "Vitamin K and fresh frozen plasma to normalize the INR before endoscopy"
    },
    "answer": "B",
    "explanation": "In suspected variceal bleeding, a vasoactive drug lowers portal pressure, antibiotic prophylaxis reduces infection and mortality, and transfusion is restricted to a hemoglobin near 7 g/dL because overtransfusion increases portal pressure and rebleeding. A proton pump inhibitor alone does not treat varices, and a higher transfusion target is harmful. Beta blockers are used for prophylaxis, not for acute hemorrhage, and endoscopy should occur within 12 hours. Correcting the INR with plasma adds volume and does not improve control of variceal bleeding.",
    "id": 151
  },
  {
    "domain": "gi_luminal",
    "chapter": 16,
    "question": "A 72-year-old woman hospitalized with pneumonia receives clindamycin. On day five she develops watery diarrhea with eight stools per day, a temperature of 38.4 C, and a white blood cell count of 18,000/mcL. Stool testing is positive for C. difficile toxin. Creatinine is 1.1 mg/dL. Which is the most appropriate treatment?",
    "options": {
      "A": "Oral metronidazole 500 mg three times daily for 10 days",
      "B": "Loperamide with a probiotic while continuing clindamycin for the pneumonia",
      "C": "Oral fidaxomicin 200 mg twice daily for 10 days",
      "D": "Intravenous vancomycin 1 g every 12 hours for a total of 10 days"
    },
    "answer": "C",
    "explanation": "The initial episode is treated with fidaxomicin or, alternatively, oral vancomycin, and fidaxomicin lowers the risk of recurrence. Metronidazole is no longer a first-line option because of lower cure rates. Antimotility drugs can precipitate megacolon, and continuing the offending antibiotic undermines recovery. Intravenous vancomycin does not reach the colonic lumen in useful concentrations, so it is ineffective for this infection.",
    "id": 152
  },
  {
    "domain": "gi_luminal",
    "chapter": 16,
    "question": "A 54-year-old man undergoes screening colonoscopy, and three tubular adenomas, each 6 to 8 mm, are removed completely. There is no high-grade dysplasia or villous histology. What is the recommended interval for his next colonoscopy?",
    "options": {
      "A": "Repeat in one year because multiple polyps were found",
      "B": "Repeat the colonoscopy in three to five years",
      "C": "Return to colonoscopy in ten years, as after a normal examination",
      "D": "Switch to annual fecal immunochemical testing with no further colonoscopy planned"
    },
    "answer": "B",
    "explanation": "Three to four small tubular adenomas under 10 mm place a patient in the intermediate surveillance group, with repeat colonoscopy in 3 to 5 years. One year is reserved for more than ten adenomas or incomplete removal. Ten years applies to normal examinations and to one or two small adenomas. Stool testing is not a substitute for surveillance after adenomatous polyps.",
    "id": 153
  },
  {
    "domain": "gi_luminal",
    "chapter": 16,
    "question": "A 32-year-old woman has had loose stools, bloating, and fatigue for a year. Hemoglobin is 10.1 g/dL with low ferritin and mean corpuscular volume of 72 fL. Total IgA is normal and tissue transglutaminase IgA is strongly positive while she eats a regular diet. Which is the best next step?",
    "options": {
      "A": "Upper endoscopy with multiple biopsies of the duodenum",
      "B": "Start a strict gluten-free diet and recheck antibodies in three months",
      "C": "Colonoscopy with random biopsies of the terminal ileum",
      "D": "Hydrogen breath testing for small intestinal bacterial overgrowth"
    },
    "answer": "A",
    "explanation": "Positive celiac serology on a gluten-containing diet should be confirmed with duodenal biopsies showing villous atrophy in adults before lifelong dietary restriction begins. Starting the diet first would erase the histologic evidence and make later confirmation difficult. Colonoscopy with ileal biopsies evaluates Crohn disease and does not address a positive celiac antibody test. Breath testing for bacterial overgrowth does not explain iron deficiency with positive serology.",
    "id": 154
  },
  {
    "domain": "gi_luminal",
    "chapter": 16,
    "question": "A 78-year-old woman with atrial fibrillation who stopped her anticoagulant a month ago presents with sudden, severe periumbilical pain and vomiting. Her abdomen is soft with minimal tenderness. Lactate is 3.8 mmol/L and the white count is 17,000/mcL. Which is the best next step?",
    "options": {
      "A": "Observation with serial abdominal examinations over 24 hours",
      "B": "Abdominal ultrasound to evaluate the gallbladder and bile ducts",
      "C": "Upright chest radiograph to look for free air under the diaphragm",
      "D": "CT angiography of the abdomen with intravenous contrast"
    },
    "answer": "D",
    "explanation": "Severe pain out of proportion to a soft examination in a patient with atrial fibrillation off anticoagulation suggests acute mesenteric ischemia from an embolus, and CT angiography confirms it quickly while guiding revascularization. Observation risks bowel infarction, and a normal examination early does not exclude it. Ultrasound would not show the mesenteric vessels adequately. A chest film for free air looks for perforation, which would produce a rigid abdomen.",
    "id": 155
  },
  {
    "domain": "gi_luminal",
    "chapter": 16,
    "question": "A 36-year-old woman has progressive difficulty swallowing both solids and liquids for eight months, with regurgitation of undigested food at night and a 5 kg weight loss. Upper endoscopy shows a dilated esophagus with retained food and no mass. Barium swallow shows a tapered \"bird's beak\" narrowing. Which is the best next step?",
    "options": {
      "A": "Empiric proton pump inhibitor therapy for twelve weeks with symptom review",
      "B": "Botulinum toxin injection of the lower esophageal sphincter as definitive therapy",
      "C": "High-resolution esophageal manometry to confirm the suspected diagnosis",
      "D": "Referral for esophagectomy because of the markedly dilated esophagus"
    },
    "answer": "C",
    "explanation": "The history and barium findings suggest achalasia, and manometry demonstrating incomplete lower sphincter relaxation with absent peristalsis is needed to confirm it and exclude pseudoachalasia and other motility disorders before choosing pneumatic dilation, myotomy, or peroral endoscopic myotomy. Acid suppression does not treat a motility disorder. Botulinum toxin is a temporizing option for poor surgical candidates. Esophagectomy is reserved for end-stage disease after other treatments fail.",
    "id": 156
  },
  {
    "domain": "hepatobiliary",
    "chapter": 17,
    "question": "A 54-year-old man with alcohol-associated cirrhosis is admitted with abdominal distension and low-grade fever. Temperature is 38.1 C, blood pressure is 104/62 mm Hg, and the abdomen is distended with mild diffuse tenderness. Creatinine is 1.6 mg/dL, up from 1.0 mg/dL last month. What is the most appropriate next step in management?",
    "options": {
      "A": "Start intravenous furosemide for the distension and obtain a noncontrast CT scan of the head",
      "B": "Begin large-volume paracentesis for comfort and defer fluid analysis until the culture results return",
      "C": "Perform diagnostic paracentesis and start ceftriaxone with albumin if ascitic neutrophils are elevated",
      "D": "Start lactulose and send a serum ammonia level before considering any invasive procedure"
    },
    "answer": "C",
    "explanation": "A diagnostic paracentesis with cell count is mandatory in any hospitalized cirrhotic patient with ascites and fever or kidney injury, and an ascitic neutrophil count of 250 cells/mm3 or more establishes spontaneous bacterial peritonitis, which is treated with ceftriaxone and albumin to reduce hepatorenal syndrome and death. Giving a loop diuretic in a patient with a rising creatinine can worsen kidney injury, and head imaging has no role without focal findings. Removing large volumes of fluid for comfort without analyzing it misses the infection and risks circulatory dysfunction. Lactulose treats encephalopathy, which is not the problem here, and ammonia levels do not change management.",
    "id": 157
  },
  {
    "domain": "hepatobiliary",
    "chapter": 17,
    "question": "A 47-year-old woman has fatigue and itching for 8 months. Alkaline phosphatase is 420 U/L, ALT is 62 U/L, and bilirubin is 1.1 mg/dL. Antimitochondrial antibodies are positive and ultrasound shows normal bile ducts. What is the most appropriate pharmacotherapy?",
    "options": {
      "A": "Prednisone with azathioprine to suppress the autoimmune hepatic inflammation",
      "B": "Penicillamine to chelate excess copper deposited in the liver",
      "C": "Entecavir to suppress viral replication in chronic hepatitis",
      "D": "Ursodeoxycholic acid at 13 to 15 mg/kg daily with monitoring"
    },
    "answer": "D",
    "explanation": "Positive antimitochondrial antibodies with a cholestatic pattern in a middle-aged woman establish primary biliary cholangitis without biopsy, and ursodeoxycholic acid at 13 to 15 mg/kg daily improves transplant-free survival. Prednisone with azathioprine treats autoimmune hepatitis, which has an aminotransferase-predominant pattern with high IgG. Penicillamine chelates copper in Wilson disease, which presents in younger patients with neuropsychiatric findings and low ceruloplasmin. Entecavir suppresses hepatitis B virus, and there is no evidence of viral infection in this patient.",
    "id": 158
  },
  {
    "domain": "hepatobiliary",
    "chapter": 17,
    "question": "A 62-year-old man with cirrhosis presents with hematemesis and a heart rate of 118/min. Blood pressure is 96/58 mm Hg and hemoglobin is 7.4 g/dL. Large-bore access is established and fluids are started. Which combination is most appropriate before endoscopy?",
    "options": {
      "A": "Intravenous octreotide and ceftriaxone with a restrictive transfusion target",
      "B": "Intravenous pantoprazole alone and transfusion to a hemoglobin of 10 g/dL",
      "C": "Oral propranolol and fresh frozen plasma to correct the INR",
      "D": "Balloon tamponade placement and a vasopressin infusion in the emergency department"
    },
    "answer": "A",
    "explanation": "Variceal bleeding is managed with a vasoactive agent started as soon as it is suspected, antibiotic prophylaxis, and restrictive red cell transfusion to a hemoglobin of 7 to 8 g/dL, followed by endoscopic band ligation within 12 hours. Acid suppression alone does not control variceal bleeding, and transfusing to 10 g/dL raises portal pressure and rebleeding. Oral beta-blockers are for prophylaxis, not for acute hemorrhage, and plasma infusion adds volume without improving hemostasis. Balloon tamponade is a rescue bridge for uncontrolled bleeding and is not first-line.",
    "id": 159
  },
  {
    "domain": "hepatobiliary",
    "chapter": 17,
    "question": "A 38-year-old woman has jaundice, fever, and right upper quadrant pain. Temperature is 39.4 C, blood pressure is 82/48 mm Hg, and she is confused. Bilirubin is 6.8 mg/dL and ultrasound shows a dilated common bile duct with stones. After fluids and broad-spectrum antibiotics, what is the best next step?",
    "options": {
      "A": "Elective laparoscopic cholecystectomy scheduled for next week once the infection has settled",
      "B": "Urgent biliary decompression by endoscopic retrograde cholangiopancreatography after resuscitation",
      "C": "Repeat ultrasound in 48 hours to confirm that the duct stone persists",
      "D": "Oral ursodeoxycholic acid to dissolve the stones over the coming months"
    },
    "answer": "B",
    "explanation": "Fever, jaundice, pain, hypotension, and confusion describe severe acute cholangitis (Reynolds pentad), which requires urgent drainage of the obstructed system because antibiotics alone fail when the duct is blocked. Delayed cholecystectomy does not relieve the obstruction now, and the patient could die in the interval. Waiting 48 hours for repeat imaging wastes time in septic shock, and the diagnosis is already established. Ursodeoxycholic acid dissolves cholesterol stones slowly over months and is irrelevant in acute obstruction.",
    "id": 160
  },
  {
    "domain": "hepatobiliary",
    "chapter": 17,
    "question": "A 29-year-old man has severe epigastric pain radiating to the back for 10 hours. Lipase is five times the upper limit of normal. He has hypotension responsive to fluids, ALT of 210 U/L, and gallstones on ultrasound. Bilirubin is normal and he has no fever. Which management is most appropriate?",
    "options": {
      "A": "Nil per os for five days with empiric imipenem to prevent necrosis infection",
      "B": "Urgent endoscopic retrograde cholangiopancreatography within 24 hours for presumed biliary obstruction",
      "C": "Lactated Ringer solution, early oral feeding as tolerated, and cholecystectomy during the same admission",
      "D": "Total parenteral nutrition started on the first hospital day to rest the pancreas"
    },
    "answer": "C",
    "explanation": "Mild gallstone pancreatitis is treated with early goal-directed fluid resuscitation with lactated Ringer solution, oral feeding as soon as tolerated, and cholecystectomy before discharge to prevent recurrence. Prolonged fasting delays recovery, and prophylactic antibiotics do not prevent infection of necrosis. ERCP is reserved for pancreatitis with cholangitis or persistent biliary obstruction, neither of which is present with normal bilirubin and no fever. Parenteral nutrition carries more infection risk than enteral feeding and is used only when the gut cannot be used.",
    "id": 161
  },
  {
    "domain": "hepatobiliary",
    "chapter": 17,
    "question": "A 52-year-old man with type 2 diabetes and BMI of 36 kg/m2 has incidental hepatic steatosis. AST is 48 U/L, ALT is 62 U/L, and platelets are 190,000/mm3. His FIB-4 index is 1.7. What is the best next step?",
    "options": {
      "A": "Reassure him and repeat the liver tests in five years",
      "B": "Refer for liver transplant evaluation because of the metabolic risk factors",
      "C": "Proceed directly to percutaneous liver biopsy for staging of fibrosis",
      "D": "Transient elastography or another second noninvasive test of liver stiffness"
    },
    "answer": "D",
    "explanation": "An indeterminate FIB-4 (1.3 to 2.67) in a patient at high metabolic risk calls for a second noninvasive test of stiffness, usually transient elastography, to decide who has advanced fibrosis. Reassurance with a long interval ignores the risk of progressive fibrosis in diabetes. Biopsy is reserved for discordant noninvasive results or a competing diagnosis. Transplant evaluation is for decompensated disease or hepatocellular carcinoma within criteria, not for steatosis with indeterminate fibrosis risk.",
    "id": 162
  },
  {
    "domain": "hepatobiliary",
    "chapter": 17,
    "question": "A 31-year-old man has fatigue, arthralgias of the hand joints, and new diabetes. Skin appears bronzed. Ferritin is 1,850 ng/mL and transferrin saturation is 78 percent. HFE testing shows C282Y homozygosity. What is the most appropriate treatment?",
    "options": {
      "A": "Therapeutic phlebotomy until ferritin reaches 50 to 100 ng/mL",
      "B": "Oral deferasirox chelation as first-line therapy for iron overload",
      "C": "Penicillamine to remove the excess metal from the tissues",
      "D": "Referral for liver transplantation because of the elevated ferritin level"
    },
    "answer": "A",
    "explanation": "Hereditary hemochromatosis with iron overload is treated by repeated phlebotomy, which removes iron efficiently and cheaply with a ferritin goal of 50 to 100 ng/mL. Deferasirox is reserved for patients who cannot tolerate phlebotomy, such as those with severe anemia, and is not first-line. Penicillamine removes copper in Wilson disease and has no role in iron overload. Transplantation is considered only for end-stage liver disease, and the ferritin elevation here is treatable.",
    "id": 163
  },
  {
    "domain": "hepatobiliary",
    "chapter": 17,
    "question": "A 45-year-old man with alcohol use disorder has jaundice and fever. Bilirubin is 14 mg/dL, AST is 180 U/L, ALT is 70 U/L, and INR is 2.1. Maddrey discriminant function is 58. There is no infection, gastrointestinal bleeding, or kidney injury. Which therapy is most appropriate?",
    "options": {
      "A": "Pentoxifylline alone as the established first-line therapy for severe disease",
      "B": "Lactulose and rifaximin to treat the presumed hepatic encephalopathy now",
      "C": "Prednisolone 40 mg daily for 28 days with a day 7 Lille score",
      "D": "Empiric N-acetylcysteine infusion for 72 hours as the antidote"
    },
    "answer": "C",
    "explanation": "Severe alcohol-associated hepatitis, defined by a Maddrey score of 32 or greater, is treated with corticosteroids after exclusion of infection and bleeding, and response at day 7 is judged by the Lille score. Pentoxifylline has not shown a survival benefit. Lactulose and rifaximin treat encephalopathy, which is not present. N-acetylcysteine has no established role in this condition, unlike acetaminophen poisoning, where it is the antidote.",
    "id": 164
  },
  {
    "domain": "hepatobiliary",
    "chapter": 17,
    "question": "A 66-year-old woman has painless jaundice, 9 kg weight loss, and new-onset diabetes. Bilirubin is 11 mg/dL. The gallbladder is palpable and nontender. What is the most appropriate next test?",
    "options": {
      "A": "Serum CA 19-9 to establish the diagnosis of pancreatic cancer",
      "B": "Pancreas-protocol contrast CT of the abdomen to define resectability",
      "C": "Hepatobiliary scintigraphy to assess cystic duct patency and emptying",
      "D": "Repeat abdominal ultrasound in three months to watch for interval change"
    },
    "answer": "B",
    "explanation": "Painless jaundice with a palpable nontender gallbladder (Courvoisier sign) suggests a pancreatic head mass, and a dedicated pancreas-protocol CT defines the tumor, vascular involvement, and metastases to determine resectability. CA 19-9 is used to monitor therapy and is neither sensitive nor specific enough to diagnose or screen. Scintigraphy evaluates cystic duct obstruction in cholecystitis and not a mass. Waiting for repeat imaging delays diagnosis in a patient with an alarming presentation.",
    "id": 165
  },
  {
    "domain": "diabetes",
    "chapter": 18,
    "question": "A 24-year-old woman with type 1 diabetes presents with vomiting and abdominal pain after 2 days of missed insulin. Glucose is 540 mg/dL, pH is 7.12, bicarbonate is 8 mEq/L, and beta-hydroxybutyrate is elevated. Potassium is 2.9 mEq/L. What is the most appropriate next step in management?",
    "options": {
      "A": "Start the insulin infusion immediately at 0.1 units per kilogram per hour and recheck potassium later",
      "B": "Give fluids and potassium first, delaying insulin until potassium reaches at least 3.3 mEq/L",
      "C": "Give sodium bicarbonate first to raise the arterial pH above 7.2 before any other therapy",
      "D": "Give subcutaneous basal insulin alone and discharge once the nausea and vomiting resolve"
    },
    "answer": "B",
    "explanation": "Insulin shifts potassium into cells, and in a patient who already has a serum potassium below 3.3 mEq/L it risks life-threatening arrhythmia and respiratory muscle weakness, so fluids and potassium replacement come first. Starting the infusion immediately ignores that danger. Bicarbonate is reserved for a pH below 6.9 and does not treat the ketosis. Subcutaneous basal insulin alone cannot reverse a pH of 7.12 and a patient with active vomiting needs inpatient resuscitation and monitoring.",
    "id": 166
  },
  {
    "domain": "diabetes",
    "chapter": 18,
    "question": "A 61-year-old man with type 2 diabetes and prior myocardial infarction has an A1c of 6.9 percent on metformin alone. eGFR is 72 mL/min/1.73 m2. Which addition is most appropriate?",
    "options": {
      "A": "Add glipizide to push the A1c closer to the 6.0 percent range",
      "B": "Add pioglitazone to improve insulin sensitivity further and lower glucose",
      "C": "Add a GLP-1 receptor agonist or SGLT2 inhibitor with proven cardiovascular benefit",
      "D": "Add basal insulin glargine at bedtime to lower the fasting glucose"
    },
    "answer": "C",
    "explanation": "Established atherosclerotic cardiovascular disease is an indication for an agent with proven cardiovascular benefit, a GLP-1 receptor agonist or SGLT2 inhibitor, independent of the A1c level. Glipizide lowers glucose but causes hypoglycemia and has no proven cardiovascular benefit. Pioglitazone causes fluid retention and carries a heart failure warning, and the glucose is already near goal. Basal insulin is unnecessary at this A1c and adds hypoglycemia without outcome benefit.",
    "id": 167
  },
  {
    "domain": "diabetes",
    "chapter": 18,
    "question": "A 58-year-old woman with type 2 diabetes has a urine albumin-to-creatinine ratio of 180 mg/g on two samples, eGFR of 54 mL/min/1.73 m2, and blood pressure of 148/88 mm Hg on no antihypertensives. Potassium is 4.4 mEq/L. Which therapy provides the greatest renal protection to add first?",
    "options": {
      "A": "Start an ACE inhibitor or ARB and add an SGLT2 inhibitor",
      "B": "Start amlodipine alone to lower the blood pressure to goal",
      "C": "Start a thiazide diuretic alone for blood pressure control",
      "D": "Start a beta-blocker to lower the blood pressure and heart rate"
    },
    "answer": "A",
    "explanation": "Persistent albuminuria with hypertension in diabetes calls for renin-angiotensin blockade, and an SGLT2 inhibitor further slows kidney disease progression and lowers cardiovascular events. Amlodipine lowers blood pressure but does not reduce albuminuria or slow progression to the same degree. A thiazide diuretic offers blood pressure control without proven renoprotection and can worsen glycemia. A beta-blocker lacks kidney benefit and can mask hypoglycemia symptoms.",
    "id": 168
  },
  {
    "domain": "diabetes",
    "chapter": 18,
    "question": "A 67-year-old man has a foot ulcer over the first metatarsal head that is 1 cm deep. A sterile probe reaches bone. Temperature is normal and ESR is 94 mm/hr. Radiographs show no abnormality. What is the best next step?",
    "options": {
      "A": "Topical antibiotic therapy to the wound and recheck in four weeks",
      "B": "Magnetic resonance imaging of the foot with consideration of bone biopsy",
      "C": "Reassurance because the plain radiographs of the foot appeared normal",
      "D": "Compression bandaging to promote healing of the plantar ulcer"
    },
    "answer": "B",
    "explanation": "A positive probe-to-bone test and a markedly raised ESR strongly suggest osteomyelitis, and radiographs lag by 2 to 4 weeks, so MRI is the next imaging step, with bone biopsy for culture as the reference standard. Topical therapy cannot treat bone infection. Normal radiographs do not exclude early osteomyelitis, so reassurance would delay diagnosis. Compression bandaging is contraindicated in arterial disease and does nothing for infected bone.",
    "id": 169
  },
  {
    "domain": "diabetes",
    "chapter": 18,
    "question": "A 45-year-old man is found to have a fasting glucose of 132 mg/dL on a routine health screen and no symptoms. What is the best next step in diagnosis?",
    "options": {
      "A": "Start metformin immediately without any further confirmatory testing today",
      "B": "Obtain a C-peptide and islet autoantibodies to exclude type 1 diabetes",
      "C": "Perform a 100 gram oral glucose tolerance test to confirm diagnosis",
      "D": "Repeat the fasting glucose or obtain an A1c on a separate occasion"
    },
    "answer": "D",
    "explanation": "In an asymptomatic person, a single abnormal result must be confirmed with a repeat test, either the same fasting glucose or a different test such as the A1c, before the diagnosis is made. Starting treatment on a single value skips this requirement. Antibody testing is for suspected type 1 diabetes, and this older, asymptomatic man fits type 2. The 100 gram test is a gestational diabetes confirmatory test, and the standard test for diagnosis outside pregnancy uses 75 grams.",
    "id": 170
  },
  {
    "domain": "diabetes",
    "chapter": 18,
    "question": "A 72-year-old woman with type 2 diabetes on glyburide is brought in confused. Glucose is 38 mg/dL. She improves after intravenous dextrose but glucose falls again 6 hours later. Creatinine is 2.3 mg/dL. What is the most appropriate management?",
    "options": {
      "A": "Discharge home after a meal because the hypoglycemic episode has resolved",
      "B": "Give intramuscular glucagon every four hours until she is ready for discharge",
      "C": "Admit for glucose monitoring, continued dextrose, and consider octreotide for recurrent hypoglycemia",
      "D": "Switch to a short-acting sulfonylurea and discharge her home today"
    },
    "answer": "C",
    "explanation": "Sulfonylurea hypoglycemia can last 24 hours or more, particularly in renal impairment where the drug and its active metabolites accumulate, so observation with dextrose is needed, and octreotide suppresses insulin release when lows recur. Discharge after one meal risks a fatal recurrence. Repeated glucagon is ineffective once glycogen stores are depleted and stimulates further insulin secretion. Another sulfonylurea in a patient with kidney disease repeats the cause.",
    "id": 171
  },
  {
    "domain": "diabetes",
    "chapter": 18,
    "question": "A 33-year-old woman with a body mass index of 31 kg/m2 at 26 weeks of gestation undergoes a 75 gram oral glucose tolerance test. Fasting glucose is 96 mg/dL, 1-hour is 150 mg/dL, and 2-hour is 130 mg/dL. What is the interpretation?",
    "options": {
      "A": "Gestational diabetes, because the fasting value exceeds the 92 mg/dL threshold",
      "B": "A normal result requiring no further testing or intervention",
      "C": "Overt type 2 diabetes requiring immediate initiation of insulin therapy",
      "D": "Impaired glucose tolerance requiring repeat testing at 32 weeks of gestation"
    },
    "answer": "A",
    "explanation": "On the one-step 75 gram test, a single value at or above the thresholds of 92 mg/dL fasting, 180 mg/dL at 1 hour, or 153 mg/dL at 2 hours establishes gestational diabetes, and the fasting value of 96 mg/dL meets the criterion. Calling the result normal ignores the fasting threshold. Overt diabetes requires fasting glucose of 126 mg/dL or higher or an A1c of 6.5 percent or higher. Repeating at 32 weeks delays treatment unnecessarily.",
    "id": 172
  },
  {
    "domain": "diabetes",
    "chapter": 18,
    "question": "A 55-year-old man with type 2 diabetes complains of burning pain in both feet at night. Monofilament sensation is reduced and ankle reflexes are absent. B12 is normal. Which therapy is most appropriate?",
    "options": {
      "A": "Oral opioid therapy as the first-line treatment for neuropathic pain",
      "B": "Intramuscular vitamin B12 injections given monthly for presumed deficiency",
      "C": "Scheduled nonsteroidal antiinflammatory drugs taken around the clock for pain",
      "D": "Duloxetine, pregabalin, or gabapentin along with foot care and glycemic control"
    },
    "answer": "D",
    "explanation": "Painful diabetic peripheral neuropathy responds to serotonin-norepinephrine reuptake inhibitors and gabapentinoids as first-line agents, and glycemic and foot care continue alongside. Opioids offer little benefit and carry dependence risk, so they are avoided. B12 replacement helps only when deficiency is documented, and this level is normal. Scheduled NSAIDs do not treat neuropathic pain and risk kidney injury in a patient prone to diabetic kidney disease.",
    "id": 173
  },
  {
    "domain": "diabetes",
    "chapter": 18,
    "question": "A 40-year-old man with type 2 diabetes on empagliflozin and metformin presents with nausea, vomiting, and malaise after 3 days of poor intake and a low-carbohydrate diet. Glucose is 190 mg/dL, pH is 7.18, bicarbonate is 9 mEq/L, and beta-hydroxybutyrate is 6.2 mmol/L. What is the most likely diagnosis?",
    "options": {
      "A": "Hyperglycemic hyperosmolar state caused by profound volume depletion and hyperglycemia",
      "B": "Euglycemic diabetic ketoacidosis related to the SGLT2 inhibitor therapy",
      "C": "Lactic acidosis caused by metformin accumulation in the setting of illness",
      "D": "Alcoholic ketoacidosis after a recent episode of heavy alcohol intake"
    },
    "answer": "B",
    "explanation": "SGLT2 inhibitors cause ketoacidosis with near-normal glucose, particularly with reduced intake, illness, or low-carbohydrate diets, and the high anion gap with markedly elevated beta-hydroxybutyrate confirms it. The hyperosmolar state has extreme hyperglycemia and minimal ketosis. Metformin-associated lactic acidosis requires kidney failure or hypoperfusion, with a high lactate and little ketosis. Alcoholic ketoacidosis needs a history of heavy drinking, which is absent.",
    "id": 174
  },
  {
    "domain": "endocrine",
    "chapter": 19,
    "question": "A 68-year-old woman is brought in with confusion, temperature of 34.6 C, heart rate of 48/min, and blood pressure of 92/60 mm Hg. Sodium is 122 mEq/L and glucose is 58 mg/dL. She has a history of Hashimoto thyroiditis and missed her medication. TSH is markedly elevated. What is the most appropriate initial therapy?",
    "options": {
      "A": "Oral levothyroxine at her usual dose followed by discharge home",
      "B": "Intravenous levothyroxine alone with active external warming of the patient",
      "C": "Intravenous triiodothyronine alone without any glucocorticoid therapy or supportive care",
      "D": "Intravenous levothyroxine plus hydrocortisone, ventilatory support as needed, and treatment of precipitants"
    },
    "answer": "D",
    "explanation": "Myxedema coma requires intravenous thyroid hormone with glucocorticoid coverage, because coexisting adrenal insufficiency is possible and hormone replacement can accelerate cortisol clearance and precipitate crisis. Oral therapy is poorly absorbed in a hypothermic, hypoperfused gut and the patient is critically ill. Levothyroxine without hydrocortisone risks adrenal crisis, and active external warming can cause vasodilation and collapse, so passive rewarming is used. Triiodothyronine alone carries arrhythmia risk without addressing adrenal reserve.",
    "id": 175
  },
  {
    "domain": "endocrine",
    "chapter": 19,
    "question": "A 34-year-old woman has tremor, weight loss, and heat intolerance. Heart rate is 112/min, TSH is undetectable, free T4 is high, and she has proptosis and diffuse goiter. She is not pregnant. Which is the most appropriate first-line treatment option?",
    "options": {
      "A": "Methimazole titrated to normalize the free T4, with beta-blocker for symptoms",
      "B": "Levothyroxine to suppress the thyroid-stimulating immunoglobulin activity in the gland",
      "C": "Immediate total thyroidectomy without prior preparation with antithyroid medication",
      "D": "Observation until the symptoms resolve spontaneously over several months"
    },
    "answer": "A",
    "explanation": "Graves disease is managed with a thionamide such as methimazole, with beta-blockade for symptoms, as a long-course trial, with radioactive iodine or surgery as definitive alternatives. Levothyroxine would worsen thyrotoxicosis and has no place here. Thyroidectomy without first rendering the patient euthyroid risks thyroid storm. Observation is inappropriate because Graves disease does not remit reliably on its own and causes cardiac and bone complications.",
    "id": 176
  },
  {
    "domain": "endocrine",
    "chapter": 19,
    "question": "A 45-year-old man has a hypertensive crisis of 230/130 mm Hg with headache, palpitations, and sweating after receiving metoprolol for tachycardia. Plasma free metanephrines are markedly elevated and CT shows a 4 cm adrenal mass. What should be started first before surgery?",
    "options": {
      "A": "Additional metoprolol to control the heart rate and blood pressure",
      "B": "Phenoxybenzamine or doxazosin for alpha-adrenergic blockade with volume expansion",
      "C": "Spironolactone to block the effects of excess aldosterone",
      "D": "Hydrochlorothiazide to lower the blood pressure and reduce volume"
    },
    "answer": "B",
    "explanation": "Pheochromocytoma requires alpha-adrenergic blockade for 7 to 14 days with volume expansion before surgery, and beta blockade is added only afterward. More beta-blocker leaves alpha vasoconstriction unopposed and worsens the crisis. Spironolactone treats primary aldosteronism, which does not explain catecholamine symptoms. A thiazide lowers volume and does not control catecholamine-mediated vasoconstriction.",
    "id": 177
  },
  {
    "domain": "endocrine",
    "chapter": 19,
    "question": "A 52-year-old woman has resistant hypertension and a potassium of 3.1 mEq/L. Plasma aldosterone is 24 ng/dL with suppressed renin activity. CT shows bilateral normal-appearing adrenals. What is the best next step?",
    "options": {
      "A": "Confirmatory suppression testing followed by adrenal vein sampling for lateralization",
      "B": "Unilateral right adrenalectomy based on the appearance of the glands",
      "C": "Starting lisinopril and repeating the aldosterone level in two weeks",
      "D": "Reassurance with a low-sodium diet and no further evaluation"
    },
    "answer": "A",
    "explanation": "A positive screen for primary aldosteronism is followed by confirmation and, in surgical candidates, adrenal vein sampling, because imaging cannot reliably tell unilateral adenoma from bilateral hyperplasia, and nonfunctioning adrenal nodules are common. Operating on one gland without lateralization could remove the wrong side. An ACE inhibitor raises renin and would confound the interpretation. Diet alone ignores a curable, organ-damaging cause of hypertension.",
    "id": 178
  },
  {
    "domain": "endocrine",
    "chapter": 19,
    "question": "A 29-year-old woman has galactorrhea and amenorrhea for 6 months. Pregnancy test is negative, TSH is normal, and prolactin is 180 ng/mL. MRI shows a 7 mm pituitary adenoma. What is the most appropriate treatment?",
    "options": {
      "A": "Transsphenoidal surgical resection as first-line therapy for the adenoma",
      "B": "Radiation therapy directed at the sella to shrink the tumor",
      "C": "Cabergoline, a dopamine agonist, with periodic prolactin monitoring",
      "D": "Oral estrogen alone to restore menses without treating the tumor"
    },
    "answer": "C",
    "explanation": "Prolactinomas respond to dopamine agonists, which normalize prolactin, restore menses, and shrink the tumor in most patients, and surgery is reserved for failure or intolerance. Primary surgery exposes the patient to operative risk when medication is highly effective. Radiation is slow and risks hypopituitarism. Estrogen replacement alone would treat the symptom of amenorrhea but leave the tumor and hyperprolactinemia unaddressed.",
    "id": 179
  },
  {
    "domain": "endocrine",
    "chapter": 19,
    "question": "A 66-year-old woman has a DXA T-score of -2.8 at the femoral neck. She has no fractures, normal calcium, vitamin D of 34 ng/mL, and eGFR of 78 mL/min/1.73 m2. She has no esophageal disease. What is the best initial pharmacotherapy?",
    "options": {
      "A": "Alendronate 70 mg weekly taken fasting with a full glass of water",
      "B": "Raloxifene to reduce vertebral fractures and avoid estrogen exposure",
      "C": "Calcitonin nasal spray given daily for bone density preservation",
      "D": "Estrogen therapy to treat osteoporosis and menopausal symptoms together"
    },
    "answer": "A",
    "explanation": "A T-score of -2.5 or lower defines osteoporosis, and an oral bisphosphonate reduces vertebral and hip fractures and is the usual first-line agent in a patient with normal kidney function and no swallowing problem. Raloxifene reduces vertebral fractures but not hip fractures and raises thromboembolism risk. Nasal calcitonin has weak fracture evidence and a possible cancer signal. Estrogen carries cardiovascular and breast cancer risk at this age and is not used for osteoporosis alone.",
    "id": 180
  },
  {
    "domain": "endocrine",
    "chapter": 19,
    "question": "A 60-year-old man with hypertension has a calcium of 11.4 mg/dL, phosphorus of 2.2 mg/dL, PTH of 78 pg/mL, and a calcium-to-creatinine clearance ratio of 0.03. He has had one kidney stone. What is the best next step?",
    "options": {
      "A": "Observation with annual calcium, creatinine, and bone density follow-up",
      "B": "A pamidronate infusion to lower the serum calcium level now",
      "C": "High-dose furosemide to promote calciuresis and reduce the level",
      "D": "Referral for parathyroidectomy because of his kidney stone history"
    },
    "answer": "D",
    "explanation": "Primary hyperparathyroidism with an elevated PTH and low phosphorus, a normal clearance ratio, and nephrolithiasis meets criteria for surgery, which is curative. Observation is suitable only in asymptomatic patients who meet no operative criteria, and a kidney stone is one. A bisphosphonate infusion is for severe or malignant hypercalcemia and does not correct the cause. Loop diuretics are reserved for volume overload after saline and can worsen volume depletion.",
    "id": 181
  },
  {
    "domain": "endocrine",
    "chapter": 19,
    "question": "A 38-year-old woman is evaluated for fatigue. Morning cortisol is 2.1 micrograms per deciliter. Sodium is 128 mEq/L and potassium is 5.6 mEq/L. ACTH is markedly elevated, and she has hyperpigmented palmar creases. She is hemodynamically stable. What is the most likely diagnosis?",
    "options": {
      "A": "Secondary adrenal insufficiency due to suppression of pituitary ACTH release",
      "B": "Primary adrenal insufficiency due to autoimmune destruction of the adrenal cortex",
      "C": "Cushing disease due to an ACTH-secreting pituitary adenoma with hypercortisolism",
      "D": "Primary aldosteronism due to an aldosterone-producing adrenal cortical adenoma"
    },
    "answer": "B",
    "explanation": "A low cortisol with high ACTH, hyperpigmentation, hyponatremia, and hyperkalemia is typical of primary adrenal insufficiency with mineralocorticoid loss. Secondary insufficiency has low ACTH and spares potassium and pigmentation because the renin-angiotensin axis is intact. Cushing disease produces cortisol excess with hypertension, not low cortisol. Primary aldosteronism causes hypokalemia and hypertension rather than hyperkalemia and low blood pressure.",
    "id": 182
  },
  {
    "domain": "endocrine",
    "chapter": 19,
    "question": "A 41-year-old woman is found to have a 2.5 cm thyroid nodule. TSH is 0.9 mIU/L. Ultrasound shows a solid hypoechoic nodule with microcalcifications. Fine-needle aspiration is read as Bethesda category VI, papillary carcinoma. What is the most appropriate next step?",
    "options": {
      "A": "A radioactive iodine scan before any operation is planned",
      "B": "Repeat fine-needle aspiration in six months to confirm the result",
      "C": "Surgery with lobectomy or total thyroidectomy depending on risk features",
      "D": "Levothyroxine suppression therapy alone without any operative treatment"
    },
    "answer": "C",
    "explanation": "Malignant cytology of a 2.5 cm nodule calls for surgery, lobectomy or total thyroidectomy depending on risk, with radioactive iodine considered afterward for higher-risk disease. A scan is not used to evaluate nodules with a normal TSH and would not change management. Repeating the biopsy delays treatment of a confirmed cancer. Levothyroxine suppression alone does not treat papillary carcinoma.",
    "id": 183
  },
  {
    "domain": "hematology",
    "chapter": 20,
    "question": "A 36-year-old woman has headache, confusion, fever, and petechiae. Hemoglobin is 7.9 g/dL, platelets are 14,000/mm3, creatinine is 1.8 mg/dL, and LDH is elevated. The smear shows numerous schistocytes. PT and aPTT are normal and the Coombs test is negative. What is the most appropriate next step?",
    "options": {
      "A": "Start emergent therapeutic plasma exchange together with high-dose corticosteroids",
      "B": "Platelet transfusion to raise the count above 50,000 per cubic millimeter",
      "C": "Prednisone alone with a bone marrow biopsy to exclude leukemia",
      "D": "Fresh frozen plasma infusion followed by outpatient follow-up in clinic"
    },
    "answer": "A",
    "explanation": "Microangiopathic hemolytic anemia, severe thrombocytopenia, fever, neurologic findings, and renal involvement with normal coagulation studies indicate thrombotic thrombocytopenic purpura, which is fatal if untreated and requires plasma exchange with corticosteroids immediately, before ADAMTS13 results. Platelet transfusion adds substrate for microthrombi and is avoided unless bleeding is life-threatening. Steroids alone are insufficient, and a marrow biopsy delays treatment. Plasma infusion without exchange does not remove the autoantibody or large volumes safely, and outpatient care is dangerous.",
    "id": 184
  },
  {
    "domain": "hematology",
    "chapter": 20,
    "question": "A 68-year-old man has fatigue and a hemoglobin of 9.2 g/dL with an MCV of 71 fL. Ferritin is 8 ng/mL. He has no overt bleeding and takes no medications. What is the best next step?",
    "options": {
      "A": "Start oral folic acid and recheck the hemoglobin in three months",
      "B": "Upper and lower gastrointestinal endoscopy to look for a bleeding source",
      "C": "Bone marrow biopsy to evaluate for a primary marrow disorder",
      "D": "Hemoglobin electrophoresis to evaluate for a thalassemia trait disorder"
    },
    "answer": "B",
    "explanation": "Iron deficiency in an older man is caused by occult gastrointestinal blood loss, including colorectal cancer, until proven otherwise, and requires endoscopic evaluation along with iron repletion. Folic acid treats macrocytic anemia and does not address iron loss. Bone marrow biopsy is unnecessary when a ferritin of 8 ng/mL already establishes iron depletion. Hemoglobin electrophoresis evaluates thalassemia, which has normal or high ferritin and does not explain the very low ferritin.",
    "id": 185
  },
  {
    "domain": "hematology",
    "chapter": 20,
    "question": "A 29-year-old woman with sickle cell disease presents with chest pain, fever, and cough. Oxygen saturation is 86 percent on room air and chest radiograph shows a new lobar infiltrate. Hemoglobin is 6.4 g/dL, down from 8.5 g/dL. What is the most appropriate management?",
    "options": {
      "A": "Aggressive intravenous fluids at three times the maintenance rate to reverse sickling",
      "B": "Outpatient oral antibiotics with incentive spirometry and a clinic follow-up in one week",
      "C": "Intravenous furosemide for presumed cardiogenic pulmonary edema and volume overload on admission",
      "D": "Oxygen, antibiotics, analgesia, and transfusion, with exchange if hypoxemia is severe"
    },
    "answer": "D",
    "explanation": "New pulmonary infiltrate with fever and hypoxemia in sickle cell disease is acute chest syndrome, treated with oxygen, antibiotics, pain control, and transfusion, and exchange transfusion for severe or progressing disease. Excess fluid worsens pulmonary edema and acute chest syndrome, so fluids are given only to euvolemia. Outpatient care is unsafe with hypoxemia of this degree. Diuresis would worsen the dehydration that promotes sickling and is not indicated.",
    "id": 186
  },
  {
    "domain": "hematology",
    "chapter": 20,
    "question": "A 52-year-old man develops a platelet count of 62,000/mm3 on day 7 of unfractionated heparin for a pulmonary embolism, down from 240,000/mm3. He has a new deep venous thrombosis in the opposite leg. What is the best next step?",
    "options": {
      "A": "Continue heparin and transfuse platelets to keep the count above 50,000",
      "B": "Stop all heparin and start a nonheparin anticoagulant such as argatroban",
      "C": "Switch to enoxaparin to continue anticoagulation while avoiding unfractionated heparin",
      "D": "Start warfarin with a loading dose and continue heparin until the INR is therapeutic"
    },
    "answer": "B",
    "explanation": "A platelet fall of more than 50 percent in the 5 to 10 day window with new thrombosis gives a high 4Ts score and requires stopping all heparin and starting a nonheparin anticoagulant such as argatroban. Continuing heparin drives the immune reaction, and transfusion increases thrombosis. Low-molecular-weight heparin cross-reacts with the antibody. Warfarin started early reduces protein C and can cause venous limb gangrene, so it is delayed until the platelet count recovers.",
    "id": 187
  },
  {
    "domain": "hematology",
    "chapter": 20,
    "question": "A 24-year-old woman has a platelet count of 18,000/mm3 and petechiae and gum bleeding. She is otherwise healthy, takes no drugs, and the smear shows large platelets without schistocytes. HIV and hepatitis C tests are negative. What is the most appropriate initial treatment?",
    "options": {
      "A": "Platelet transfusion to raise the count above the bleeding threshold",
      "B": "Splenectomy as the initial definitive treatment of the low platelet count",
      "C": "Therapeutic plasma exchange to remove the circulating platelet autoantibody now",
      "D": "Dexamethasone for four days, with immune globulin if rapid response is needed"
    },
    "answer": "D",
    "explanation": "Immune thrombocytopenia with bleeding or a platelet count under 30,000/mm3 is treated first with glucocorticoids, such as dexamethasone for 4 days, with immune globulin added if a rapid rise is needed. Transfusion is reserved for life-threatening hemorrhage because transfused platelets are destroyed quickly. Splenectomy is a later option after failure of medical therapy. Plasma exchange treats thrombotic thrombocytopenic purpura, which would show schistocytes and organ dysfunction.",
    "id": 188
  },
  {
    "domain": "hematology",
    "chapter": 20,
    "question": "A 19-year-old man of Mediterranean descent develops dark urine, jaundice, and fatigue 2 days after starting a sulfonamide antibiotic for a urinary tract infection. Hemoglobin is 7.1 g/dL, and the smear shows bite cells and Heinz bodies. What is the most likely diagnosis?",
    "options": {
      "A": "Glucose-6-phosphate dehydrogenase deficiency with hemolysis triggered by the oxidant antibiotic",
      "B": "Hereditary spherocytosis with episodic hemolysis from splenic sequestration of cells",
      "C": "Warm autoimmune hemolytic anemia caused by an IgG antibody against red cells",
      "D": "Paroxysmal nocturnal hemoglobinuria caused by complement-mediated red cell destruction"
    },
    "answer": "A",
    "explanation": "Acute hemolysis after an oxidant drug exposure, with bite cells and Heinz bodies, is characteristic of G6PD deficiency, which is X-linked and common in people of Mediterranean, African, and Asian ancestry. Hereditary spherocytosis shows spherocytes and is not triggered by drugs. Autoimmune hemolysis shows a positive Coombs test and spherocytes. Paroxysmal nocturnal hemoglobinuria causes thrombosis and pancytopenia and would show absent CD55 and CD59 on flow cytometry.",
    "id": 189
  },
  {
    "domain": "hematology",
    "chapter": 20,
    "question": "A 70-year-old woman has paresthesias in both feet and unsteady gait. Hemoglobin is 9.8 g/dL, MCV is 112 fL, and smear shows hypersegmented neutrophils. Vitamin B12 is low and anti-intrinsic factor antibodies are positive. What is the most appropriate treatment?",
    "options": {
      "A": "Oral folic acid alone at a dose of one milligram daily",
      "B": "Oral iron supplementation with ascorbic acid to improve absorption",
      "C": "Intramuscular cyanocobalamin daily initially, then weekly, then monthly for life",
      "D": "Erythropoietin injections to stimulate red cell production in the marrow"
    },
    "answer": "C",
    "explanation": "Pernicious anemia with neurologic involvement requires vitamin B12 replacement, given initially by intramuscular injection to bypass the absent intrinsic factor, and continued for life. Folic acid alone may correct the anemia while allowing irreversible neurologic damage to progress. Iron treats microcytic anemia, not macrocytosis with hypersegmented neutrophils. Erythropoietin does not address the underlying deficiency and ineffective erythropoiesis.",
    "id": 190
  },
  {
    "domain": "hematology",
    "chapter": 20,
    "question": "A 22-year-old woman has menorrhagia and frequent nosebleeds. Her mother has a similar history. Platelet count and PT are normal and aPTT is mildly prolonged. Ristocetin cofactor activity is reduced. What is the most appropriate therapy before a minor dental procedure?",
    "options": {
      "A": "Desmopressin given before the procedure to release stored von Willebrand factor",
      "B": "Warfarin to maintain a low intensity of anticoagulation",
      "C": "Platelet transfusion to supply functional platelets before the dental procedure",
      "D": "Vitamin K injection to correct the deficiency of clotting factors"
    },
    "answer": "A",
    "explanation": "This family has von Willebrand disease, most likely type 1, and desmopressin releases stored von Willebrand factor and raises factor VIII for minor procedures. Warfarin is an anticoagulant and would worsen bleeding. Platelet transfusion does not supply the missing von Willebrand factor and platelet counts are normal. Vitamin K corrects deficiencies of factors II, VII, IX, and X, which are not reduced in this disorder.",
    "id": 191
  },
  {
    "domain": "hematology",
    "chapter": 20,
    "question": "A 45-year-old man on warfarin for atrial fibrillation has an INR of 11.5 with no bleeding after taking an antibiotic. What is the most appropriate management?",
    "options": {
      "A": "Four-factor prothrombin complex concentrate with intravenous vitamin K immediately",
      "B": "Fresh frozen plasma, four units, infused over the next several hours",
      "C": "Hold warfarin and give low-dose oral vitamin K with close monitoring",
      "D": "Continue warfarin at a reduced dose without any further intervention"
    },
    "answer": "C",
    "explanation": "For an INR above 10 without bleeding, the recommended approach is to hold warfarin and give low-dose oral vitamin K, then monitor closely. Prothrombin complex concentrate is for life-threatening or major bleeding, and the patient has none. Plasma carries volume load and transfusion risks, and acts more slowly than the preferred agents. Continuing warfarin even at a lower dose leaves an unsafe INR and a high bleeding risk.",
    "id": 192
  },
  {
    "domain": "oncology",
    "chapter": 21,
    "question": "A 67-year-old man comes for a routine visit. He smoked 40 pack-years and quit 8 years ago. He has no cough, weight loss, or hemoptysis, and he is in good health and able to undergo surgery if cancer is found. Which of the following is the most appropriate screening strategy for lung cancer?",
    "options": {
      "A": "Annual chest radiograph with a posteroanterior and lateral view each year",
      "B": "Annual low-dose computed tomography of the chest for as long as eligible",
      "C": "Sputum cytology on three morning samples repeated every six months",
      "D": "No screening, because he quit smoking more than five years ago"
    },
    "answer": "B",
    "explanation": "He meets the criteria for annual low-dose CT: age between 50 and 80, at least 20 pack-years, and cessation within the past 15 years. Screening continues until 15 years after quitting, or until health limits life expectancy or the ability to undergo curative surgery. Chest radiography and sputum cytology were studied in randomized trials and did not reduce lung cancer mortality, while they do produce false-positive results. Stopping screening five years after quitting has no basis in the guideline, which uses a 15-year window.",
    "id": 193
  },
  {
    "domain": "oncology",
    "chapter": 21,
    "question": "A 24-year-old man is admitted with a rapidly enlarging abdominal mass. Biopsy shows Burkitt lymphoma. Laboratory values: potassium 4.4 mEq/L, creatinine 0.9 mg/dL, uric acid 9.8 mg/dL, phosphate 5.1 mg/dL, LDH 3,400 U/L. Chemotherapy will start tomorrow. Which of the following is the most appropriate step now?",
    "options": {
      "A": "Aggressive intravenous hydration and a single dose of rasburicase before chemotherapy",
      "B": "Oral allopurinol alone, with intravenous fluids held to avoid volume overload",
      "C": "Prophylactic intravenous calcium gluconate to prevent hypocalcemia during cell lysis",
      "D": "Delay chemotherapy for two weeks until the uric acid has normalized on diet"
    },
    "answer": "A",
    "explanation": "Burkitt lymphoma with high LDH and a baseline uric acid already elevated places him at high risk for tumor lysis syndrome, which calls for vigorous hydration and rasburicase, an enzyme that breaks down existing uric acid. Allopurinol blocks only new uric acid formation, takes days to work, and is reserved for lower-risk patients. Calcium given in the absence of symptomatic hypocalcemia or arrhythmia can precipitate with phosphate in the kidneys. Delaying treatment of a tumor that doubles in a day risks the patient's life, and dietary change does not control uric acid from cell lysis.",
    "id": 194
  },
  {
    "domain": "oncology",
    "chapter": 21,
    "question": "A 71-year-old man with metastatic prostate cancer on androgen deprivation therapy has had 5 days of thoracic back pain that worsens when he lies down. This morning his legs felt heavy. Examination shows 4/5 strength in both legs, brisk patellar reflexes, and decreased pinprick below the umbilicus. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Technetium bone scan within the next two weeks to look for new metastases",
      "B": "Referral to physical therapy and a trial of opioid analgesia at home",
      "C": "Plain radiographs of the thoracic spine and a repeat PSA level",
      "D": "Intravenous dexamethasone and emergent MRI of the entire spine"
    },
    "answer": "D",
    "explanation": "New back pain, leg weakness, and a sensory level in a patient with prostate cancer indicate malignant epidural spinal cord compression. Corticosteroids are started at once, and MRI of the whole spine is obtained urgently because separate compressive lesions are common, followed by radiotherapy or surgery. A bone scan in two weeks would allow irreversible paralysis. Physical therapy and analgesics treat the pain and leave the cord injured. Plain films are insensitive for epidural disease and a PSA value does not change the immediate decision.",
    "id": 195
  },
  {
    "domain": "oncology",
    "chapter": 21,
    "question": "A 46-year-old woman with no symptoms and no family history of cancer asks when she should begin colorectal cancer screening. She has no inflammatory bowel disease and has never had colonoscopy. Which of the following is the best recommendation?",
    "options": {
      "A": "Begin screening now with colonoscopy every ten years or annual stool testing",
      "B": "Wait until age 50 because screening before then offers no mortality benefit",
      "C": "Begin screening only if she develops rectal bleeding or iron deficiency",
      "D": "Obtain a serum CEA level yearly and perform colonoscopy only if it rises"
    },
    "answer": "A",
    "explanation": "Current guidance recommends beginning average-risk screening at age 45, with colonoscopy every ten years, annual fecal immunochemical testing, multitarget stool DNA testing, or CT colonography as options, and this patient is already past that age. Waiting until 50 reflects the older recommendation, and rising incidence in younger adults led to the change. Bleeding and anemia are indications for diagnostic evaluation, not the trigger for screening. CEA is neither sensitive nor specific for early disease and is used to follow patients after resection.",
    "id": 196
  },
  {
    "domain": "oncology",
    "chapter": 21,
    "question": "A 63-year-old man with metastatic melanoma received his third dose of pembrolizumab 6 weeks ago. He now reports 10 watery stools daily, up from a baseline of 2, with abdominal cramping, and he has a low-grade fever. Stool studies exclude Clostridioides difficile and other pathogens. Which of the following is the most appropriate management?",
    "options": {
      "A": "Continue pembrolizumab and prescribe loperamide for symptomatic control",
      "B": "Stop pembrolizumab permanently and start oral vancomycin for presumed infection",
      "C": "Hold pembrolizumab and start intravenous methylprednisolone at 1 to 2 mg/kg daily",
      "D": "Switch to ipilimumab, which causes less gastrointestinal inflammation than anti-PD-1 agents"
    },
    "answer": "C",
    "explanation": "An increase of seven or more stools daily over baseline is grade 3 immune-related colitis, which requires holding checkpoint therapy and giving high-dose intravenous glucocorticoids, with infliximab or vedolizumab if there is no response in a few days. Loperamide is appropriate only for grade 1 diarrhea and risks masking progression. Infection was already excluded, so empiric oral vancomycin has no target. Ipilimumab, an anti-CTLA-4 antibody, actually causes more colitis than anti-PD-1 drugs, so the switch would worsen the problem.",
    "id": 197
  },
  {
    "domain": "oncology",
    "chapter": 21,
    "question": "A 66-year-old man with squamous cell carcinoma of the lung is brought in with confusion, constipation, and polyuria for several days. Corrected serum calcium is 14.2 mg/dL, creatinine 1.6 mg/dL, and parathyroid hormone is suppressed. He appears dehydrated. Which of the following is the most appropriate initial management?",
    "options": {
      "A": "Isotonic saline infusion followed by intravenous zoledronic acid",
      "B": "Furosemide bolus given immediately to promote urinary calcium excretion",
      "C": "Oral calcium restriction and hydrochlorothiazide to lower serum calcium",
      "D": "Emergent parathyroidectomy after localization with a sestamibi scan"
    },
    "answer": "A",
    "explanation": "Hypercalcemia with a suppressed parathyroid hormone in squamous lung cancer is humoral hypercalcemia from parathyroid hormone-related peptide. Volume depletion is corrected first with saline, and an intravenous bisphosphonate then lowers calcium over two to four days; calcitonin can bridge, and denosumab is chosen when the kidney injury is significant. A loop diuretic before volume repletion worsens dehydration and kidney function. Thiazides raise calcium. Parathyroid surgery treats primary hyperparathyroidism, which a suppressed hormone level excludes.",
    "id": 198
  },
  {
    "domain": "oncology",
    "chapter": 21,
    "question": "A 58-year-old woman with breast cancer receiving cycle 2 of chemotherapy arrives with temperature 38.6 C, heart rate 112/min, and blood pressure 108/66 mm Hg. She has a central venous port. The absolute neutrophil count is 300/microliter. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Observation at home with oral acetaminophen and repeat counts in 24 hours",
      "B": "Blood cultures, then intravenous cefepime within one hour of arrival",
      "C": "Chest and abdominal CT scans first, with antibiotics started if results are positive",
      "D": "Granulocyte colony-stimulating factor alone and discharge once the fever resolves"
    },
    "answer": "B",
    "explanation": "Fever with an absolute neutrophil count under 500 is febrile neutropenia, and mortality rises with each hour of delay. Cultures are drawn from the port and a peripheral vein, and an antipseudomonal beta-lactam is given within 60 minutes without waiting for imaging. Sending her home risks fatal sepsis. Waiting for CT results delays antibiotics. Growth factor does not treat infection and does not replace antimicrobial therapy, although it is sometimes added in selected high-risk cases.",
    "id": 199
  },
  {
    "domain": "oncology",
    "chapter": 21,
    "question": "A 62-year-old man who smoked for 45 years has had fatigue and confusion for 2 weeks. Chest imaging shows a central right hilar mass. Serum sodium is 122 mEq/L, serum osmolality 258 mOsm/kg, urine osmolality 480 mOsm/kg, and urine sodium 62 mEq/L. He appears euvolemic. Which of the following is the most likely cause of the hyponatremia?",
    "options": {
      "A": "Hypovolemia from poor oral intake and renal sodium wasting",
      "B": "Primary adrenal insufficiency from metastatic involvement of both glands",
      "C": "Ectopic antidiuretic hormone secretion from a small cell lung carcinoma",
      "D": "Pseudohyponatremia from marked hyperlipidemia or hyperproteinemia affecting the laboratory sodium measurement"
    },
    "answer": "C",
    "explanation": "Low serum osmolality, inappropriately concentrated urine, high urinary sodium, and euvolemia describe the syndrome of inappropriate antidiuresis, and in a heavy smoker with a central hilar mass the source is small cell lung cancer. The condition is treated with fluid restriction and cancer therapy. Hypovolemia would show clinical volume depletion and a low urinary sodium. Adrenal insufficiency usually presents with hypotension and hyperkalemia. Pseudohyponatremia has a normal measured osmolality, which this patient does not have.",
    "id": 200
  },
  {
    "domain": "oncology",
    "chapter": 21,
    "question": "A 68-year-old woman has 3 months of low back pain, fatigue, and recurrent infections. Hemoglobin is 8.9 g/dL, creatinine 2.3 mg/dL, calcium 11.8 mg/dL, and total protein 9.4 g/dL with albumin 3.1 g/dL. A smear shows rouleaux formation. Which of the following is the most appropriate next diagnostic test?",
    "options": {
      "A": "Technetium bone scan to identify areas of increased osteoblastic activity",
      "B": "Serum carcinoembryonic antigen and CA 19-9 levels with abdominal CT",
      "C": "Percutaneous renal biopsy to determine the cause of her kidney injury",
      "D": "Serum protein electrophoresis with immunofixation and serum free light chain assay"
    },
    "answer": "D",
    "explanation": "Anemia, renal insufficiency, hypercalcemia, bone pain, rouleaux, and a wide gap between total protein and albumin point to multiple myeloma. Electrophoresis with immunofixation and free light chains detect the monoclonal protein and confirm the diagnosis, and bone marrow biopsy follows. Myeloma lesions are lytic with little osteoblastic reaction, so a bone scan is often falsely negative. Solid tumor markers do not evaluate a paraproteinemia. Kidney biopsy is premature when a treatable systemic cause is likely and the initial blood tests are noninvasive.",
    "id": 201
  },
  {
    "domain": "infection",
    "chapter": 22,
    "question": "A 22-year-old college student is brought to the emergency department with 10 hours of fever, severe headache, and vomiting. Temperature is 39.8 C, heart rate 128/min, and blood pressure 88/50 mm Hg. He is drowsy but follows commands, with a stiff neck, and has scattered petechiae on the trunk and legs. No focal neurologic findings are present. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Obtain a head CT, then perform lumbar puncture and give antibiotics after the results",
      "B": "Draw blood cultures and give intravenous ceftriaxone, vancomycin, and dexamethasone immediately",
      "C": "Start oral amoxicillin and arrange outpatient lumbar puncture the next morning",
      "D": "Give intravenous acyclovir alone while awaiting herpes simplex virus PCR results"
    },
    "answer": "B",
    "explanation": "Fever, meningismus, shock, and petechiae in a young adult in residence housing indicate meningococcal meningitis with sepsis, and mortality rises with each hour that antibiotics are delayed. Blood cultures are drawn, and empiric ceftriaxone with vancomycin and dexamethasone are given without waiting for the spinal fluid. Delaying treatment for CT is only appropriate when the diagnostic test is necessary, and even then antibiotics come first. Oral amoxicillin is inadequate and unsafe. Acyclovir alone leaves bacterial infection untreated.",
    "id": 202
  },
  {
    "domain": "infection",
    "chapter": 22,
    "question": "A 34-year-old man who injects heroin has had fever and chills for 5 days. Temperature is 39.1 C. A new holosystolic murmur at the left lower sternal border increases with inspiration, and chest radiography shows multiple peripheral nodular opacities, some cavitating. Three sets of blood cultures have been drawn from separate sites. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Start empiric intravenous vancomycin now and obtain transthoracic echocardiography",
      "B": "Wait for culture sensitivities before starting any antimicrobial therapy",
      "C": "Start oral cephalexin and arrange outpatient follow-up in one week",
      "D": "Obtain bronchoscopy with biopsy of one of the pulmonary nodules"
    },
    "answer": "A",
    "explanation": "Fever, a tricuspid regurgitation murmur, and septic pulmonary emboli in a person who injects drugs indicate right-sided endocarditis, most often from Staphylococcus aureus. Cultures have been obtained, so empiric intravenous therapy with MRSA coverage should begin, and echocardiography documents the vegetation. Withholding therapy until sensitivities return risks valve destruction and embolization. Oral cephalexin does not provide reliable bactericidal levels or MRSA coverage. Lung biopsy adds risk and is unnecessary when the source is evident.",
    "id": 203
  },
  {
    "domain": "infection",
    "chapter": 22,
    "question": "A 27-year-old woman has had 2 days of dysuria, urinary frequency, and urgency. She has no fever, flank pain, or vaginal discharge, is not pregnant, and has no drug allergies. Urinalysis shows pyuria. Creatinine is 0.8 mg/dL. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Observation without antibiotics and repeat urinalysis in two weeks",
      "B": "Ciprofloxacin for fourteen days along with renal ultrasonography imaging",
      "C": "Nitrofurantoin twice daily for five days without a urine culture",
      "D": "Intravenous ceftriaxone with hospital admission for overnight observation and monitoring"
    },
    "answer": "C",
    "explanation": "This is uncomplicated cystitis, which is diagnosed clinically and treated empirically with nitrofurantoin for five days, trimethoprim-sulfamethoxazole for three days when local resistance is low, or single-dose fosfomycin. A culture is not needed in a first episode. Withholding treatment leaves her symptomatic and risks progression. A fourteen-day fluoroquinolone course is excessive, carries tendon and nervous system risks, and imaging is unnecessary. She has no features that require admission or intravenous therapy.",
    "id": 204
  },
  {
    "domain": "infection",
    "chapter": 22,
    "question": "A 40-year-old nurse born in India has a positive interferon-gamma release assay on routine employee screening. She had BCG vaccination as a child. She has no cough, fever, weight loss, or night sweats, and the chest radiograph is normal. She takes an oral contraceptive. Which of the following is the most appropriate management?",
    "options": {
      "A": "Treat latent tuberculosis with four months of daily rifampin after counseling about interactions",
      "B": "Start isoniazid, rifampin, pyrazinamide, and ethambutol for a two-month intensive phase",
      "C": "Repeat the interferon-gamma release assay in one year before making a decision",
      "D": "Disregard the result because BCG vaccination commonly causes false-positive results"
    },
    "answer": "A",
    "explanation": "A positive release assay with no symptoms and a normal radiograph indicates latent infection, which is treated to prevent reactivation, and four months of rifampin is an accepted regimen; rifampin lowers oral contraceptive effectiveness, so alternative contraception is advised. Four-drug therapy is for active disease. Waiting a year gives up the chance to prevent reactivation in a healthcare worker from an endemic country. BCG does cause false-positive skin tests, but it does not meaningfully affect the release assay, which is the reason that test is preferred.",
    "id": 205
  },
  {
    "domain": "infection",
    "chapter": 22,
    "question": "A 68-year-old man with COPD has had 3 days of fever, myalgias, dry cough, and fatigue during the winter season. Temperature is 38.7 C and oxygen saturation is 93 percent on room air. A rapid molecular test is positive for influenza A. Chest radiograph shows no infiltrate. Which of the following is the most appropriate management?",
    "options": {
      "A": "Prescribe azithromycin alone and avoid any antiviral therapy for now",
      "B": "Withhold antiviral therapy because symptoms began more than 48 hours ago",
      "C": "Wait for a repeat chest radiograph before choosing any treatment",
      "D": "Start oseltamivir 75 mg twice daily for five days"
    },
    "answer": "D",
    "explanation": "Patients at high risk for complications, such as those with chronic lung disease or age 65 and older, benefit from oseltamivir even when started after the first 48 hours, particularly with hypoxemia or hospitalization. Antibiotics do not treat viral influenza and are added only for suspected bacterial superinfection, which the radiograph does not show. Treating late is better than not treating in a high-risk patient. Waiting for a second radiograph delays therapy with no benefit.",
    "id": 206
  },
  {
    "domain": "infection",
    "chapter": 22,
    "question": "A 29-year-old man has had 4 days of a painful swelling on his thigh. Temperature is 37.4 C and vital signs are normal. Examination shows a 4 cm fluctuant, tender, erythematous mass with a 2 cm rim of surrounding cellulitis. He is otherwise healthy. Which of the following is the most appropriate management?",
    "options": {
      "A": "Incision and drainage with culture of the pus, plus an oral agent active against MRSA",
      "B": "Warm compresses and oral cephalexin alone without any procedure",
      "C": "Admission for intravenous vancomycin for a minimum of seven days",
      "D": "Needle aspiration of the mass and repeat examination in one month"
    },
    "answer": "A",
    "explanation": "A fluctuant abscess is drained; drainage is the primary treatment and is often sufficient alone. Because the abscess is over 2 cm with surrounding cellulitis, an adjunctive oral drug active against community MRSA, such as trimethoprim-sulfamethoxazole or doxycycline, is reasonable. Cephalexin lacks MRSA activity and compresses cannot drain a collection. He has no systemic toxicity requiring admission or prolonged intravenous therapy. Needle aspiration is unreliable for thick pus and a month is too long to wait.",
    "id": 207
  },
  {
    "domain": "infection",
    "chapter": 22,
    "question": "A 19-year-old college student has had 8 days of fever, sore throat, and marked fatigue. Examination shows tonsillar exudates, posterior cervical lymphadenopathy, and a spleen tip palpable below the costal margin. Heterophile antibody testing is positive. He is a member of the university rugby team. Which of the following is the most appropriate counseling?",
    "options": {
      "A": "Begin amoxicillin to shorten the duration of the pharyngitis",
      "B": "Take a tapering course of prednisone to speed recovery in all cases",
      "C": "Avoid contact sports for at least three to four weeks because of splenic rupture risk",
      "D": "Begin acyclovir to reduce viral shedding and the length of illness"
    },
    "answer": "C",
    "explanation": "The presentation and positive heterophile test indicate Epstein-Barr virus mononucleosis, and splenomegaly makes splenic rupture a risk during contact or collision sports, so he should be restricted for at least three to four weeks. Amoxicillin causes a nonallergic rash in this infection and offers no benefit. Corticosteroids are reserved for airway obstruction or autoimmune hemolysis or thrombocytopenia. Acyclovir has no demonstrated clinical benefit in uncomplicated mononucleosis.",
    "id": 208
  },
  {
    "domain": "infection",
    "chapter": 22,
    "question": "A 52-year-old man with type 2 diabetes mellitus and no history of pneumococcal vaccination comes for a health maintenance visit. He is up to date on his other vaccines. Which of the following is the most appropriate recommendation regarding pneumococcal vaccination?",
    "options": {
      "A": "Give the 23-valent polysaccharide vaccine every five years until age 65",
      "B": "Defer vaccination until age 65 because the vaccine is not indicated before then",
      "C": "Give a live attenuated pneumococcal vaccine and repeat it after one year",
      "D": "Give a single dose of a conjugate vaccine, either PCV20 or PCV21"
    },
    "answer": "D",
    "explanation": "Diabetes is an indication for pneumococcal vaccination at any adult age, and he is also over the age threshold of 50 used in current recommendations. A single dose of PCV20 or PCV21 completes the series in an unvaccinated adult. Repeating the polysaccharide vaccine every five years is not the current strategy. Waiting until 65 leaves him unprotected. No live pneumococcal vaccine exists for adults.",
    "id": 209
  },
  {
    "domain": "infection",
    "chapter": 22,
    "question": "A 64-year-old man with hypertension and type 2 diabetes tests positive for SARS-CoV-2 on the third day of cough and sore throat. Oxygen saturation is 97 percent on room air. His medications are amlodipine and metformin, and estimated glomerular filtration rate is 78 mL/min/1.73 m2. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Dexamethasone 6 mg daily for ten days to prevent progression",
      "B": "Nirmatrelvir-ritonavir for five days after reviewing his medication list",
      "C": "Azithromycin and a short course of oral prednisone for symptom relief",
      "D": "No treatment, because antiviral therapy is only for hospitalized patients"
    },
    "answer": "B",
    "explanation": "He has risk factors for severe disease, age and diabetes, and presents within five days of onset with mild illness, which makes him a candidate for outpatient antiviral treatment. Nirmatrelvir-ritonavir reduces hospitalization, and his medications have no important interaction, though ritonavir interactions must always be checked. Dexamethasone benefits patients who need oxygen and can be harmful in mild disease. Azithromycin and prednisone are not recommended. Outpatient antivirals exist and are targeted at exactly this group.",
    "id": 210
  },
  {
    "domain": "hiv_stis",
    "chapter": 23,
    "question": "A 28-year-old man presents with 4 days of fever, sore throat, myalgias, and a diffuse maculopapular rash on the trunk. Three weeks ago he had condomless sex with a new partner. Examination shows tender cervical lymphadenopathy and oral ulcers. A fourth-generation HIV antigen/antibody screening test is negative. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Reassure him that HIV infection is excluded and repeat the test in one year",
      "B": "Order a heterophile antibody test and treat empirically for streptococcal pharyngitis",
      "C": "Order a Western blot to confirm antibody absence and measure the CD4 count",
      "D": "Order an HIV-1 RNA nucleic acid test and begin antiretroviral treatment if positive"
    },
    "answer": "D",
    "explanation": "This is a classic acute retroviral syndrome with a recent exposure, and antibody and even antigen testing can be negative in the first weeks. A nucleic acid test for HIV-1 RNA detects infection before seroconversion, and antiretroviral therapy should begin without delay if it is positive. Reassurance based on a single negative screen would miss a highly infectious stage. A heterophile test addresses mononucleosis and does not address the exposure risk. A Western blot is a late-reacting test and is no longer the confirmatory approach.",
    "id": 211
  },
  {
    "domain": "hiv_stis",
    "chapter": 23,
    "question": "A 36-year-old man with HIV infection was diagnosed 2 weeks ago. CD4 count is 62 cells/microliter and viral load is 410,000 copies/mL. Toxoplasma IgG is positive. He has no symptoms, a normal chest radiograph, and no history of drug allergy. Antiretroviral therapy has been started. Which of the following is the most appropriate prophylaxis?",
    "options": {
      "A": "Weekly azithromycin alone to prevent Mycobacterium avium complex disease",
      "B": "Daily trimethoprim-sulfamethoxazole to prevent Pneumocystis pneumonia and toxoplasmosis",
      "C": "Daily oral fluconazole to prevent cryptococcal and candidal infection",
      "D": "Oral valganciclovir to prevent cytomegalovirus retinitis at this CD4 count"
    },
    "answer": "B",
    "explanation": "With a CD4 count below 200, prophylaxis against Pneumocystis is indicated, and a positive Toxoplasma IgG with CD4 below 100 adds toxoplasmosis; one daily trimethoprim-sulfamethoxazole tablet covers both. Macrolide prophylaxis against Mycobacterium avium complex is no longer recommended when effective ART is started right away. Routine primary fluconazole prophylaxis is not recommended in the United States. Prophylactic valganciclovir is not used for CMV, which is monitored by eye examination.",
    "id": 212
  },
  {
    "domain": "hiv_stis",
    "chapter": 23,
    "question": "A 41-year-old man with HIV infection and a CD4 count of 28 cells/microliter has had 2 weeks of progressive headache, fever, and blurred vision. Opening pressure at lumbar puncture is 38 cm of water. Cerebrospinal fluid shows 22 lymphocytes/microliter, protein 70 mg/dL, glucose 28 mg/dL, and a positive cryptococcal antigen. Which of the following is the most appropriate management?",
    "options": {
      "A": "Liposomal amphotericin B with flucytosine, therapeutic lumbar punctures, and delayed antiretroviral therapy",
      "B": "Oral fluconazole alone, with antiretroviral therapy started the same day",
      "C": "Intravenous acyclovir for presumed herpes encephalitis and a repeat puncture in 48 hours",
      "D": "Pyrimethamine, sulfadiazine, and leucovorin followed by brain biopsy within one week"
    },
    "answer": "A",
    "explanation": "Cryptococcal meningitis is treated with induction using liposomal amphotericin B plus flucytosine for at least two weeks, with serial lumbar punctures to reduce a raised opening pressure, then fluconazole. Antiretroviral therapy is deferred about four to six weeks because earlier initiation increased mortality. Fluconazole alone is inadequate for induction. Acyclovir targets a different pathogen, and the antigen result is diagnostic. Toxoplasmosis therapy treats ring-enhancing parenchymal lesions, which this patient does not have.",
    "id": 213
  },
  {
    "domain": "hiv_stis",
    "chapter": 23,
    "question": "A 31-year-old man who has sex with men requests HIV preexposure prophylaxis. He has had two male partners in the past three months and was treated for rectal gonorrhea last year. HIV antigen/antibody test today is negative. Creatinine clearance is 105 mL/min, and he is immune to hepatitis B. Which of the following is the most appropriate recommendation?",
    "options": {
      "A": "Defer prophylaxis until he has had three consecutive months of consistent condom use",
      "B": "Start daily tenofovir disoproxil with emtricitabine and skip baseline HIV testing to avoid delay",
      "C": "Start daily emtricitabine with tenofovir after the negative test, with quarterly testing and monitoring",
      "D": "Take a four-week antiretroviral course only after each high-risk sexual exposure occurs"
    },
    "answer": "C",
    "explanation": "A recent bacterial STI and multiple partners among men who have sex with men are indications for PrEP. A negative HIV test is confirmed before starting, then follow-up every three months includes HIV and STI testing and monitoring of renal function. Delaying until condom use is documented withholds effective prevention. Starting without baseline testing risks giving a two-drug regimen to a person with undiagnosed HIV, which selects for resistance. A four-week course after exposure describes postexposure prophylaxis, which is a different strategy.",
    "id": 214
  },
  {
    "domain": "hiv_stis",
    "chapter": 23,
    "question": "A 35-year-old man has a 1 cm painless, indurated ulcer on the penile shaft that appeared 10 days ago, with nontender bilateral inguinal lymphadenopathy. Rapid plasma reagin titer is 1:64 and the treponemal antibody test is positive. HIV test is negative. He has no neurologic or visual complaints. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Doxycycline 100 mg orally twice daily for fourteen days",
      "B": "Benzathine penicillin G 2.4 million units intramuscularly in a single dose",
      "C": "Intravenous aqueous penicillin G for ten to fourteen days after lumbar puncture",
      "D": "Azithromycin 1 g orally in a single dose with repeat titers in a week"
    },
    "answer": "B",
    "explanation": "A painless chancre with a positive nontreponemal and treponemal test indicates primary syphilis, and a single intramuscular dose of benzathine penicillin G is the treatment. Doxycycline for two weeks is an alternative only in patients with serious penicillin allergy. Intravenous penicillin is for neurosyphilis, which has no evidence here, as he has no neurologic or ocular symptoms. Azithromycin is not recommended because macrolide resistance in treponemes is widespread and treatment failures have occurred.",
    "id": 215
  },
  {
    "domain": "hiv_stis",
    "chapter": 23,
    "question": "A 45-year-old man returns from a 3-week business trip to Nigeria, during which he took no malaria prophylaxis. He has had 2 days of fever to 40.1 C, rigors, and new confusion. Blood smear shows Plasmodium falciparum with 7 percent parasitemia. Glucose is 52 mg/dL and creatinine 2.4 mg/dL. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Oral chloroquine phosphate given daily for three days at standard doses",
      "B": "Oral atovaquone-proguanil once daily for three days as outpatient therapy",
      "C": "Oral quinine sulfate alone for seven days with glucose monitoring",
      "D": "Intravenous artesunate followed by an oral artemisinin-based regimen"
    },
    "answer": "D",
    "explanation": "Cerebral involvement, hypoglycemia, kidney injury, and parasitemia above 5 percent define severe falciparum malaria, which requires intravenous artesunate, followed by a full oral course once he can swallow. Chloroquine fails because falciparum from West Africa is widely resistant. Atovaquone-proguanil is appropriate for uncomplicated disease in patients who can take oral medicine, and confusion with organ dysfunction rules that out. Oral quinine alone is inadequate in severe disease and is associated with hypoglycemia.",
    "id": 216
  },
  {
    "domain": "hiv_stis",
    "chapter": 23,
    "question": "A 42-year-old man from Connecticut presents in July with a 7 cm expanding, annular erythematous patch with central clearing on his thigh. He recalls removing a tick from that site 6 days ago after a hike. He has mild fatigue and headache. Examination is otherwise normal, including cardiac examination and cranial nerves. Which of the following is the most appropriate management?",
    "options": {
      "A": "Doxycycline 100 mg twice daily for 10 days without serologic testing",
      "B": "Order Lyme enzyme immunoassay and treat only if the result is positive",
      "C": "Intravenous ceftriaxone for 28 days given through a central venous catheter",
      "D": "A single 200 mg dose of doxycycline taken today"
    },
    "answer": "A",
    "explanation": "Erythema migrans of at least 5 cm in an endemic area after a tick bite is diagnosed on clinical grounds, and ten days of oral doxycycline is effective. Serology is often negative in early infection and would not change management. Intravenous therapy is reserved for carditis with high-grade block, meningitis, or refractory arthritis, none of which is present. A single doxycycline dose is prophylaxis after a bite without established infection, and he already has the rash.",
    "id": 217
  },
  {
    "domain": "hiv_stis",
    "chapter": 23,
    "question": "A 22-year-old woman has had 3 days of lower abdominal pain. Temperature is 38.1 C and vital signs are otherwise stable. Examination shows cervical motion tenderness and bilateral adnexal tenderness without mass. Pregnancy test is negative, and she tolerates oral intake. Which of the following is the most appropriate management?",
    "options": {
      "A": "Oral azithromycin 1 g as a single dose and follow-up in two weeks",
      "B": "Ceftriaxone intramuscularly once, with doxycycline and metronidazole orally for fourteen days",
      "C": "Laparoscopy to confirm the diagnosis before any antibiotic is started",
      "D": "Admission for intravenous cefoxitin and doxycycline regardless of examination findings"
    },
    "answer": "B",
    "explanation": "Pelvic inflammatory disease is a clinical diagnosis, and empiric therapy covers gonorrhea, chlamydia, and anaerobes with a single ceftriaxone injection plus 14 days of doxycycline and metronidazole in an outpatient who can take oral medicine and has no abscess. A single azithromycin dose does not treat the polymicrobial infection. Waiting for laparoscopy delays treatment and raises the risk of infertility. Admission is reserved for pregnancy, abscess, severe illness, inability to take oral medicine, or failure to improve at 72 hours.",
    "id": 218
  },
  {
    "domain": "hiv_stis",
    "chapter": 23,
    "question": "A 38-year-old man with HIV infection (CD4 count 40 cells/microliter, not yet on antiretroviral therapy) is diagnosed with pulmonary tuberculosis, and isoniazid, rifampin, pyrazinamide, and ethambutol are started. He has no neurologic symptoms. Which of the following is the best recommendation about antiretroviral therapy?",
    "options": {
      "A": "Delay until tuberculosis therapy is complete to avoid drug interactions and IRIS",
      "B": "Wait until the CD4 count rises above 200 on tuberculosis therapy alone",
      "C": "Start antiretroviral therapy within two weeks of starting tuberculosis treatment",
      "D": "Start only after sputum cultures have been negative for two months"
    },
    "answer": "C",
    "explanation": "In patients with a CD4 count below 50, starting ART within two weeks of tuberculosis therapy reduces death and AIDS progression, even though IRIS risk rises, and the regimen is adjusted for rifampin interactions. Delaying until tuberculosis therapy is complete leaves the immune system failing for six months. Waiting for CD4 recovery without ART is not feasible because the count will not rise untreated. Waiting for culture conversion is unnecessary and prolongs the period of vulnerability.",
    "id": 219
  },
  {
    "domain": "rheumatology",
    "chapter": 24,
    "question": "A 45-year-old woman has had 3 months of pain and swelling in the metacarpophalangeal and proximal interphalangeal joints of both hands, with morning stiffness lasting 90 minutes. Rheumatoid factor and anti-cyclic citrullinated peptide antibodies are positive and CRP is elevated. Hand radiographs show periarticular osteopenia. Hepatitis B and tuberculosis screening are negative. Which of the following is the most appropriate initial disease-modifying therapy?",
    "options": {
      "A": "Nonsteroidal anti-inflammatory drug monotherapy until erosions develop on radiographs",
      "B": "Long-term oral prednisone at 20 mg daily as the only maintenance drug",
      "C": "Adalimumab as monotherapy before trying any conventional synthetic agent",
      "D": "Methotrexate with daily folic acid, with monitoring of blood counts and liver enzymes"
    },
    "answer": "D",
    "explanation": "Early seropositive rheumatoid arthritis should be treated promptly with a conventional disease-modifying drug, and methotrexate is the anchor agent, with folic acid reducing toxicity. Nonsteroidal drugs relieve symptoms but do not slow erosive damage, which begins in the first year. Long-term moderate-dose prednisone brings osteoporosis, infection, and metabolic harm and is used only as a bridge. A TNF inhibitor is added if the target is not reached on methotrexate, and it works best in combination with it.",
    "id": 220
  },
  {
    "domain": "rheumatology",
    "chapter": 24,
    "question": "A 72-year-old woman has had 3 weeks of a new right-sided headache, scalp tenderness, and pain in the jaw when chewing. This morning she noticed a curtain-like loss of vision in her right eye lasting several minutes. ESR is 96 mm/hour. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Defer steroids until a temporal artery biopsy is completed to preserve diagnostic yield",
      "B": "Obtain MRI of the brain and begin treatment only if it shows a lesion",
      "C": "Begin high-dose prednisone now and arrange temporal artery biopsy within days",
      "D": "Prescribe a nonsteroidal drug and see an ophthalmologist next week"
    },
    "answer": "C",
    "explanation": "New headache, jaw claudication, transient visual loss, and a markedly raised ESR indicate giant cell arteritis with impending permanent blindness, which is prevented by starting glucocorticoids at once. Biopsy remains interpretable for weeks after steroids begin, so treatment should not wait. A brain MRI does not diagnose the condition and delays therapy. Nonsteroidal drugs do not prevent ischemic optic neuropathy, and a week of waiting can cost her the vision in the second eye.",
    "id": 221
  },
  {
    "domain": "rheumatology",
    "chapter": 24,
    "question": "A 28-year-old woman with systemic lupus erythematosus on hydroxychloroquine has had 2 weeks of leg edema and foamy urine. Blood pressure is 148/92 mm Hg. Creatinine is 1.4 mg/dL (baseline 0.8), urine protein-to-creatinine ratio is 2.8 g/g, and urinalysis shows red blood cell casts. C3 is low and anti-double-stranded DNA is elevated. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Renal biopsy to determine the histologic class of nephritis before choosing immunosuppression",
      "B": "Increase hydroxychloroquine to 800 mg daily and recheck urine in three months",
      "C": "Begin lisinopril and recheck the urine protein level in one year",
      "D": "Observe, because proteinuria in lupus rarely reflects glomerular disease"
    },
    "answer": "A",
    "explanation": "New proteinuria above 0.5 g/day with an active sediment, a rising creatinine, falling complement, and rising anti-dsDNA suggests lupus nephritis, and renal biopsy establishes the class and degree of chronicity that guide induction therapy with glucocorticoids and mycophenolate or cyclophosphamide. Higher hydroxychloroquine doses add retinal toxicity without controlling nephritis. An ACE inhibitor lowers proteinuria but does not treat the inflammation. Waiting a year risks permanent scarring.",
    "id": 222
  },
  {
    "domain": "rheumatology",
    "chapter": 24,
    "question": "A 52-year-old woman with diffuse cutaneous systemic sclerosis diagnosed 8 months ago develops severe headache and blurred vision. Blood pressure is 192/112 mm Hg. Creatinine is 2.2 mg/dL, up from 0.9 two weeks ago. Hemoglobin is 9.4 g/dL, platelets 88,000/microliter, and the smear shows schistocytes. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "High-dose intravenous methylprednisolone to treat the underlying inflammation",
      "B": "Captopril, with the dose increased as needed to control blood pressure",
      "C": "Plasma exchange as the sole therapy for suspected thrombotic thrombocytopenic purpura",
      "D": "Intravenous furosemide and discontinuation of all antihypertensive therapy"
    },
    "answer": "B",
    "explanation": "Severe hypertension with rapidly rising creatinine and microangiopathic hemolysis in early diffuse systemic sclerosis is scleroderma renal crisis, treated with an ACE inhibitor started at once and titrated even if creatinine rises. High-dose glucocorticoids are associated with precipitating the crisis and should be avoided. Plasma exchange is not first-line here, although a thrombotic microangiopathy may look similar. Withholding blood pressure control would allow encephalopathy and irreversible kidney failure.",
    "id": 223
  },
  {
    "domain": "rheumatology",
    "chapter": 24,
    "question": "A 58-year-old man has had a hot, swollen, intensely painful first metatarsophalangeal joint since last night. He has a history of bleeding peptic ulcer, chronic kidney disease with eGFR 38 mL/min/1.73 m2, and takes hydrochlorothiazide. Aspirated fluid shows needle-shaped, negatively birefringent crystals and a negative Gram stain. Which of the following is the most appropriate treatment for this attack?",
    "options": {
      "A": "Indomethacin 50 mg three times daily for five days",
      "B": "Colchicine 0.6 mg every hour until pain relief or diarrhea occurs",
      "C": "Prednisone 30 to 40 mg daily for five days",
      "D": "Allopurinol 300 mg daily started immediately and thiazide continued"
    },
    "answer": "C",
    "explanation": "This is acute gout, and oral glucocorticoids are the safest effective option in a patient with kidney disease and past ulcer bleeding. An NSAID is contraindicated in both conditions. High-dose repeated colchicine causes toxicity, especially with reduced renal function, and only low-dose regimens are acceptable. Starting a full dose of allopurinol in the middle of an attack can prolong the flare, and 300 mg is too high a starting dose in chronic kidney disease.",
    "id": 224
  },
  {
    "domain": "rheumatology",
    "chapter": 24,
    "question": "A 55-year-old man has had 6 weeks of nasal crusting, sinus pain, cough with intermittent hemoptysis, and dark urine. Chest CT shows multiple cavitary nodules. Creatinine is 3.1 mg/dL, and urinalysis shows red blood cells and red cell casts. Serum c-ANCA with anti-proteinase 3 antibodies are strongly positive. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Oral amoxicillin-clavulanate for chronic bacterial sinusitis, then repeat imaging in four weeks",
      "B": "High-dose glucocorticoids alone, tapered to zero over the following two weeks",
      "C": "Oral azathioprine monotherapy to avoid the toxicity of stronger immunosuppression",
      "D": "High-dose glucocorticoids combined with rituximab or cyclophosphamide for induction therapy"
    },
    "answer": "D",
    "explanation": "Upper airway disease, cavitary lung nodules, glomerulonephritis, and proteinase 3 antibodies establish granulomatosis with polyangiitis with organ-threatening disease. Induction requires glucocorticoids plus rituximab or cyclophosphamide, followed by maintenance therapy. Antibiotics do not treat vasculitis. Steroids alone have a high relapse rate and are tapered over months. Azathioprine is a maintenance agent and is too weak for induction in severe kidney and lung disease.",
    "id": 225
  },
  {
    "domain": "rheumatology",
    "chapter": 24,
    "question": "A 24-year-old man has had 8 months of low back and buttock pain that is worst in the early morning, lasts about 90 minutes, and improves with exercise but not with rest. Lumbar flexion is reduced. MRI of the sacroiliac joints shows bone marrow edema. Which of the following is the most appropriate initial treatment?",
    "options": {
      "A": "Daily oral opioid therapy with a bowel regimen",
      "B": "Scheduled NSAID therapy combined with a structured exercise program",
      "C": "Oral prednisone 20 mg daily for six months",
      "D": "Weekly methotrexate with daily folic acid supplementation for six months"
    },
    "answer": "B",
    "explanation": "Inflammatory back pain with improvement on exercise, morning stiffness, and sacroiliitis on MRI indicates axial spondyloarthritis. NSAIDs at full anti-inflammatory dose and exercise are first-line, with TNF or IL-17 inhibitors if two NSAIDs fail. Opioids do not treat the inflammation and carry dependence risk. Oral glucocorticoids and conventional disease-modifying drugs like methotrexate are not effective for axial disease.",
    "id": 226
  },
  {
    "domain": "rheumatology",
    "chapter": 24,
    "question": "A 33-year-old woman has her first unprovoked deep venous thrombosis of the left leg. She has had three unexplained pregnancy losses at 7 to 9 weeks. Lupus anticoagulant is positive on two tests 12 weeks apart, with positive anticardiolipin and anti-beta-2 glycoprotein I IgG antibodies. Which of the following is the most appropriate long-term treatment?",
    "options": {
      "A": "Warfarin with a target INR of 2.0 to 3.0, continued indefinitely",
      "B": "Apixaban 5 mg twice daily because it is preferred in all thrombophilias",
      "C": "Daily aspirin alone, which is sufficient after any venous thrombosis",
      "D": "Three months of anticoagulation followed by discontinuation if she has no recurrence"
    },
    "answer": "A",
    "explanation": "She has antiphospholipid syndrome with triple positivity, thrombosis, and pregnancy morbidity. Long-term vitamin K antagonist therapy is the standard because direct oral anticoagulants showed higher rates of recurrent thrombosis in high-risk patients. Aspirin alone does not protect against venous thromboembolism of this kind. Stopping anticoagulation after three months is appropriate for provoked events and exposes her to a high risk of recurrent, possibly arterial, thrombosis.",
    "id": 227
  },
  {
    "domain": "rheumatology",
    "chapter": 24,
    "question": "A 76-year-old woman with osteoarthritis has had 2 days of a swollen, warm right knee. Temperature is 38.4 C. She cannot bear weight. Aspirated fluid is turbid with a white cell count of 62,000/microliter, 94 percent neutrophils, and rhomboid-shaped, weakly positively birefringent crystals. Gram stain is pending. Which of the following is the most appropriate management?",
    "options": {
      "A": "Intra-articular injection of triamcinolone and discharge with oral NSAIDs",
      "B": "Oral colchicine and reassurance because crystals explain the findings",
      "C": "Oral prednisone for acute pseudogout and follow-up the next week",
      "D": "Send fluid for culture, start empiric intravenous antibiotics, and arrange joint drainage"
    },
    "answer": "D",
    "explanation": "Crystals indicate calcium pyrophosphate disease, but fever and a white cell count above 50,000 raise strong concern for septic arthritis, which can coexist with crystals. Cultures are sent, antibiotics covering Staphylococcus aureus are begun, and the joint is drained. Injecting a steroid into a possibly infected joint can be disastrous. Colchicine or prednisone alone would treat the crystal disease and leave the infection untreated. Following up in a week allows cartilage destruction.",
    "id": 228
  },
  {
    "domain": "allergy_derm",
    "chapter": 25,
    "question": "A 34-year-old man is brought to the emergency department 10 minutes after being stung by a wasp at a picnic. He has diffuse hives, lip swelling, and wheezing. Blood pressure is 82/48 mm Hg, heart rate is 124/min, and oxygen saturation is 90% on room air. Which of the following is the most appropriate immediate treatment?",
    "options": {
      "A": "Intramuscular epinephrine 0.5 mg of the 1 mg/mL solution into the anterolateral thigh",
      "B": "Intravenous diphenhydramine 50 mg followed by intravenous methylprednisolone 125 mg",
      "C": "Nebulized albuterol with a rapid intravenous bolus of two liters of normal saline",
      "D": "Subcutaneous epinephrine 0.3 mg into the upper arm followed by observation for one hour"
    },
    "answer": "A",
    "explanation": "Intramuscular epinephrine into the thigh is the only first-line drug for anaphylaxis, and it reverses airway edema, bronchospasm, and vasodilation within minutes. Antihistamines and glucocorticoids relieve cutaneous symptoms or prevent late effects but do not treat airway obstruction or shock, so giving them first delays life-saving therapy. Albuterol and fluids are useful supportive measures, yet they do not replace the vasoconstrictor and mast cell stabilizing effects of epinephrine. Subcutaneous injection in the arm absorbs more slowly and unpredictably than the intramuscular thigh route, and a single dose with only brief observation is inadequate for a hypotensive patient.",
    "id": 229
  },
  {
    "domain": "allergy_derm",
    "chapter": 25,
    "question": "A 27-year-old woman has had four episodes of facial and hand swelling over two years, plus three severe episodes of colicky abdominal pain with vomiting that resolved in two days without treatment. There was no itching or hives, and antihistamines gave no relief. Her mother had similar episodes and died of airway swelling. She takes an estrogen-containing contraceptive. Which of the following is the best initial laboratory test?",
    "options": {
      "A": "Serum tryptase level drawn during an episode, with a repeat level after resolution",
      "B": "Serum C4 level together with C1 esterase inhibitor antigen and functional activity",
      "C": "Total serum IgE concentration with a panel of food-specific IgE antibodies",
      "D": "Antinuclear antibody titer with anti-double-stranded DNA and complement CH50 measurement"
    },
    "answer": "B",
    "explanation": "Recurrent swelling without hives, abdominal attacks from bowel wall edema, a positive family history, and an estrogen trigger point to hereditary angioedema from C1 inhibitor deficiency. The screening test is a low C4, confirmed by low C1 inhibitor level or function. Tryptase is useful for mast cell mediated events such as anaphylaxis, which would accompany hives and respond to antihistamines. Food-specific IgE testing addresses histamine-mediated allergic disease and would not explain painless swelling with a family history. Lupus serologies can show low complement in autoimmune disease, but they do not identify the bradykinin-mediated syndrome described here and would not guide therapy.",
    "id": 230
  },
  {
    "domain": "allergy_derm",
    "chapter": 25,
    "question": "A 41-year-old woman has had daily itchy wheals for 4 months, each lasting several hours and clearing without bruising. Physical examination between outbreaks is normal. CBC, ESR, and TSH are normal. She takes cetirizine 10 mg daily with little relief. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Prescribe a 3-week course of oral prednisone 40 mg daily with a slow taper",
      "B": "Replace cetirizine with diphenhydramine at bedtime and add a leukotriene receptor antagonist",
      "C": "Increase the second-generation antihistamine dose to as much as four times standard",
      "D": "Order a skin biopsy and complement studies to look for urticarial vasculitis"
    },
    "answer": "C",
    "explanation": "Chronic spontaneous urticaria is treated stepwise, and guidelines call for escalating a nonsedating antihistamine to up to four times the standard dose before moving to omalizumab. Long prednisone courses carry serious toxicity and produce relapse when stopped, so they are reserved for short flares. A sedating first-generation antihistamine adds anticholinergic effects and a leukotriene antagonist has limited benefit as an add-on. Biopsy is warranted when individual lesions last longer than a day, burn, or leave bruising, which this patient does not describe, so it is not the next step.",
    "id": 231
  },
  {
    "domain": "allergy_derm",
    "chapter": 25,
    "question": "A 52-year-old man needs perioperative antibiotic prophylaxis for a hernia repair. Forty years ago he developed an itchy rash on his trunk 4 days after starting amoxicillin as a child, with no swelling, breathing symptoms, or need for treatment, and he has avoided penicillins since. Which of the following best resolves his penicillin allergy label for his future care?",
    "options": {
      "A": "Avoid all beta-lactam antibiotics permanently and use vancomycin for the surgical prophylaxis",
      "B": "Perform penicillin desensitization in the intensive care unit before the operation",
      "C": "Administer a first dose of cefazolin in the operating room without any assessment",
      "D": "Delabel him after a supervised oral amoxicillin challenge in a monitored setting"
    },
    "answer": "D",
    "explanation": "A remote, benign, delayed rash with no systemic features places this man in a very low-risk category on the PEN-FAST rule, and direct oral amoxicillin challenge safely confirms tolerance and removes the label. Lifelong avoidance with vancomycin exposes him to worse surgical site outcomes and drug toxicity without reason. Desensitization is for patients with a true IgE-mediated allergy who need the drug and is unnecessary here. Giving cefazolin blindly is not unreasonable pharmacologically, but without assessment the unverified label persists and future prescribing remains distorted.",
    "id": 232
  },
  {
    "domain": "allergy_derm",
    "chapter": 25,
    "question": "A 36-year-old woman has had six episodes of sinusitis and two of pneumonia in the last three years. She has had immune thrombocytopenia treated with prednisone. Serum IgG is 280 mg/dL, IgA is undetectable, and IgM is 20 mg/dL. Antibody titers to 1 of 14 pneumococcal serotypes rose after vaccination. HIV testing is negative and she takes no immunosuppressive medications. Which of the following is the most appropriate long-term management?",
    "options": {
      "A": "Daily prophylactic trimethoprim-sulfamethoxazole as the only intervention, without any immunoglobulin replacement",
      "B": "Repeated courses of oral prednisone to raise serum immunoglobulin levels and prevent infections",
      "C": "Regular infusions of immune globulin every few weeks, with prompt antibiotics for breakthrough infections",
      "D": "Live attenuated vaccines to stimulate production of protective antibodies against encapsulated bacteria"
    },
    "answer": "C",
    "explanation": "Low IgG with low IgA and IgM, a poor polysaccharide vaccine response, recurrent sinopulmonary infection, and autoimmune cytopenia in an adult without secondary causes define common variable immunodeficiency. Replacement of IgG every 3 to 4 weeks, intravenous or subcutaneous, prevents serious infections, and acute infections are treated promptly with antibiotics. Prophylactic antibiotics alone do not address the underlying antibody deficit. Steroids suppress rather than raise immunoglobulin production and increase infection risk. Live vaccines can cause disease in patients with significant antibody or combined deficiency and would not work.",
    "id": 233
  },
  {
    "domain": "allergy_derm",
    "chapter": 25,
    "question": "A 29-year-old woman started lamotrigine for bipolar disorder 16 days ago, titrated rapidly. She now has fever of 39.0 C, painful oral and conjunctival erosions, and a dusky rash spreading over the trunk, with several flaccid bullae. Gentle lateral pressure causes the epidermis to shear. About 20 percent of her body surface area is involved. Which of the following is the best next step in management?",
    "options": {
      "A": "Start oral prednisone 60 mg daily and observe in the outpatient clinic",
      "B": "Apply high-potency topical corticosteroid and give an oral antihistamine",
      "C": "Continue lamotrigine at a reduced dose and add intravenous diphenhydramine",
      "D": "Stop lamotrigine and transfer her to a burn unit or intensive care"
    },
    "answer": "D",
    "explanation": "Fever, mucosal erosions, a rash with bullae and positive Nikolsky sign 2 weeks after a high-risk drug define Stevens-Johnson and toxic epidermal necrolysis overlap. Mortality falls with immediate withdrawal of the drug and care in a burn or intensive unit with fluid, wound, and eye management. Outpatient treatment with oral steroids is unsafe and of unproven benefit. Topical steroids and antihistamines do not address the life-threatening process. Continuing the culprit drug at any dose perpetuates the T cell mediated reaction and risks progression.",
    "id": 234
  },
  {
    "domain": "allergy_derm",
    "chapter": 25,
    "question": "A 78-year-old man has 3 weeks of intensely itchy skin, followed by large tense blisters on his abdomen, groin, and inner thighs. His mouth is spared. He takes sitagliptin and furosemide. Direct immunofluorescence of perilesional skin shows linear IgG and C3 along the basement membrane zone. Which of the following is the most appropriate initial treatment?",
    "options": {
      "A": "Intravenous rituximab with high-dose oral prednisone given for six months, as for pemphigus vulgaris",
      "B": "Topical clobetasol propionate to the whole body, and review of the likely offending drug",
      "C": "Oral dapsone together with a strict lifelong gluten-free diet, as for dermatitis herpetiformis",
      "D": "Oral cyclophosphamide combined with plasmapheresis for severe widespread blistering disease in elderly patients"
    },
    "answer": "B",
    "explanation": "Tense bullae on an urticarial base in an older adult with sparing of the mouth and linear IgG and C3 at the basement membrane zone establish bullous pemphigoid. Superpotent topical corticosteroids are as effective as oral prednisone with less mortality in the frail elderly, and DPP-4 inhibitors are a recognized trigger worth reconsidering. Rituximab with prolonged prednisone is the regimen for pemphigus vulgaris, which has flaccid blisters and oral erosions. Dapsone and a gluten-free diet treat dermatitis herpetiformis, which shows granular IgA. Cyclophosphamide with plasmapheresis is excessive for first-line therapy.",
    "id": 235
  },
  {
    "domain": "allergy_derm",
    "chapter": 25,
    "question": "A 55-year-old woman has a 7-mm asymmetric pigmented lesion on her calf that has darkened over 6 months. Excisional biopsy with a 2-mm margin shows melanoma with a Breslow thickness of 1.5 mm, no ulceration, and negative margins. There are no palpable nodes. Which of the following is the most appropriate next step in management?",
    "options": {
      "A": "Wide local excision with 1 to 2 cm margins and sentinel lymph node biopsy",
      "B": "Observation with skin examinations every 6 months and no further surgery",
      "C": "Wide local excision with 5 mm margins only, since nodes are not palpable",
      "D": "Whole-body PET-CT followed by adjuvant pembrolizumab for stage I disease"
    },
    "answer": "A",
    "explanation": "Melanoma between 1.01 and 2 mm thick needs wide local excision with 1 to 2 cm margins, and sentinel node biopsy is recommended for tumors thicker than 0.8 mm because nodal status guides staging and adjuvant therapy. Observation alone leaves residual disease risk after a narrow biopsy margin. A 5 mm margin is adequate only for in situ disease. Systemic imaging is not routine for clinically localized early-stage disease with no symptoms, and adjuvant checkpoint therapy is reserved for higher stages, with stage III as the main indication.",
    "id": 236
  },
  {
    "domain": "allergy_derm",
    "chapter": 25,
    "question": "A 31-year-old teacher has sneezing, clear rhinorrhea, nasal congestion, and itchy eyes every spring for 5 years that disrupt her sleep. Examination shows pale, boggy turbinates and clear mucus. She has tried loratadine with partial relief. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Oxymetazoline nasal spray used twice daily for the entire pollen season",
      "B": "Montelukast 10 mg daily as the single preferred agent for symptom control",
      "C": "A daily intranasal glucocorticoid spray started now and used throughout the season",
      "D": "Diphenhydramine 50 mg at bedtime together with pseudoephedrine in the morning"
    },
    "answer": "C",
    "explanation": "Moderate to severe seasonal allergic rhinitis with congestion and sleep disruption responds best to a daily intranasal glucocorticoid, which outperforms oral antihistamines and leukotriene blockers. Prolonged oxymetazoline causes rebound congestion after 3 to 5 days. Montelukast is less effective than nasal steroids and carries a boxed warning for neuropsychiatric events, so it is not a preferred single agent. Sedating antihistamines and oral decongestants add next-day drowsiness, cardiovascular stimulation, and sleep disturbance without addressing inflammation as well.",
    "id": 237
  },
  {
    "domain": "neurology_acute",
    "chapter": 26,
    "question": "A 68-year-old man develops sudden right arm weakness and slurred speech while eating dinner at 6:00 PM. He arrives at 7:15 PM. Blood pressure is 168/92 mm Hg, glucose is 112 mg/dL, and NIHSS is 12. Noncontrast head CT shows no hemorrhage. He takes metformin and lisinopril and has no recent surgery. Which of the following is the best next step in management?",
    "options": {
      "A": "Aspirin 325 mg orally and MRI of the brain before deciding on further therapy",
      "B": "Intravenous labetalol to lower the blood pressure below 140/90 mm Hg over one hour",
      "C": "Intravenous thrombolysis now, with CT angiography to look for large vessel occlusion",
      "D": "Observation for 24 hours with repeated neurologic examinations before any reperfusion therapy"
    },
    "answer": "C",
    "explanation": "He is within 4.5 hours of last known well, has a disabling deficit, a normal glucose, no hemorrhage on CT, and no contraindication, so intravenous thrombolysis should start immediately, with vessel imaging in parallel to identify an occlusion for thrombectomy. Aspirin with an MRI first would waste time and aspirin is withheld for 24 hours after lysis. His pressure is below the 185/110 threshold, and lowering it aggressively could extend the infarct. Observation alone forfeits the time-dependent benefit of reperfusion.",
    "id": 238
  },
  {
    "domain": "neurology_acute",
    "chapter": 26,
    "question": "A 74-year-old woman is found with left hemiparesis and gaze deviation at 8:00 AM after going to bed well at 6:00 PM the night before. She arrives at 8:30 AM with NIHSS of 16. She was independent at baseline. Head CT shows no hemorrhage. CT angiography shows a right middle cerebral artery M1 occlusion, and CT perfusion shows a small core with a large region of salvageable tissue. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Intravenous alteplase because she is within 24 hours of arrival",
      "B": "Dual antiplatelet therapy with aspirin and clopidogrel for 21 days",
      "C": "Intravenous heparin infusion titrated to twice the baseline aPTT",
      "D": "Endovascular mechanical thrombectomy based on the perfusion imaging findings"
    },
    "answer": "D",
    "explanation": "Thrombectomy is indicated for an anterior circulation large vessel occlusion up to 24 hours from last known well when perfusion imaging shows a small core and substantial salvageable penumbra. Her last known well time was 14.5 hours earlier, which is outside the intravenous thrombolysis window, and the clock does not restart on arrival. Dual antiplatelet therapy is for minor stroke or high-risk transient ischemic attack, not a disabling large vessel occlusion. Heparin has no demonstrated benefit in acute ischemic stroke and raises the risk of hemorrhagic transformation.",
    "id": 239
  },
  {
    "domain": "neurology_acute",
    "chapter": 26,
    "question": "A 79-year-old man with atrial fibrillation taking warfarin is brought in after sudden headache, vomiting, and left-sided weakness. He is drowsy. Blood pressure is 196/104 mm Hg and INR is 4.2. CT shows a 40-mL right basal ganglia hemorrhage. Which of the following is the most appropriate immediate treatment?",
    "options": {
      "A": "Four-factor prothrombin complex concentrate with intravenous vitamin K, and blood pressure lowered toward 140 mm Hg",
      "B": "Fresh frozen plasma alone with oral vitamin K, and no lowering of the elevated blood pressure",
      "C": "Platelet transfusion plus intravenous desmopressin, followed by urgent surgical evacuation of the hematoma",
      "D": "Intravenous heparin to prevent clot extension, with the elevated blood pressure left untreated for now"
    },
    "answer": "A",
    "explanation": "Warfarin-associated intracerebral hemorrhage requires rapid reversal, and four-factor prothrombin complex concentrate corrects the INR within minutes, while intravenous vitamin K sustains the correction as the factor activity wanes. Systolic pressure in the 150 to 220 range is lowered to about 140 mm Hg to limit hematoma expansion. Fresh frozen plasma corrects more slowly and adds volume, and oral vitamin K acts too late. Platelet transfusion is for antiplatelet effect and increased harm in a trial, and evacuation of a deep hematoma has no proven benefit. Heparin would worsen bleeding.",
    "id": 240
  },
  {
    "domain": "neurology_acute",
    "chapter": 26,
    "question": "A 46-year-old woman develops a sudden, severe headache while lifting weights, with vomiting and neck stiffness. Noncontrast head CT shows diffuse blood in the basal cisterns, and CT angiography reveals a 6-mm anterior communicating artery aneurysm. Besides securing the aneurysm, which of the following drugs has been shown to improve neurologic outcomes?",
    "options": {
      "A": "Intravenous levetiracetam for seven days as routine prophylaxis against seizures",
      "B": "Oral nimodipine for 21 days, started promptly after diagnosis",
      "C": "Prolonged strict fluid restriction to reduce cerebral edema and vasospasm risk",
      "D": "High-dose dexamethasone to reduce meningeal inflammation and vasospasm"
    },
    "answer": "B",
    "explanation": "Nimodipine given for 21 days after aneurysmal subarachnoid hemorrhage improves outcome and is a standard of care, probably through neuroprotective effects. Routine prophylactic antiseizure treatment has not shown benefit and levetiracetam is given only if seizures occur. Fluid restriction lowers blood volume and raises the risk of delayed cerebral ischemia, and hyponatremia is treated with saline instead. Glucocorticoids have not improved outcomes in subarachnoid hemorrhage and carry hyperglycemia and infection risks.",
    "id": 241
  },
  {
    "domain": "neurology_acute",
    "chapter": 26,
    "question": "A 31-year-old man with epilepsy has a generalized tonic-clonic seizure that has continued for 12 minutes despite two intravenous doses of lorazepam 4 mg given 5 minutes apart. He weighs 80 kg, is hypoxic, and is being bag-mask ventilated. Glucose is 98 mg/dL. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Give a third dose of lorazepam and wait 10 minutes before the next step",
      "B": "Order a head CT before administering any additional medications",
      "C": "Start propofol infusion and intubate without first giving other antiseizure drugs",
      "D": "Load intravenous levetiracetam or fosphenytoin while preparing for airway protection and EEG"
    },
    "answer": "D",
    "explanation": "After adequate benzodiazepine dosing fails, a second-line antiseizure drug is loaded without delay, and levetiracetam, fosphenytoin, and valproate are comparably effective. Airway support and EEG are prepared in parallel since refractory status needs intubation and continuous monitoring. Further benzodiazepine doses at this point add respiratory depression with a low chance of success. Imaging can wait until the seizure is controlled. Going directly to an anesthetic infusion is reserved for seizures that persist after second-line treatment.",
    "id": 242
  },
  {
    "domain": "neurology_acute",
    "chapter": 26,
    "question": "A 58-year-old man has had fever and headache for 12 hours and now is confused. Temperature is 39.4 C, blood pressure is 104/60 mm Hg, and he has marked neck stiffness. There is no papilledema or focal deficit but he is disoriented. Which of the following is the best next step in management?",
    "options": {
      "A": "Perform a lumbar puncture immediately and begin antibiotics only after the results return",
      "B": "Draw blood cultures, then give dexamethasone, vancomycin, ceftriaxone, and ampicillin before imaging or lumbar puncture",
      "C": "Obtain head CT, then lumbar puncture, then start antibiotics once cultures are confirmed positive",
      "D": "Give ceftriaxone alone and arrange a lumbar puncture the following morning when stable"
    },
    "answer": "B",
    "explanation": "Bacterial meningitis is lethal when treatment is delayed, so after blood cultures the patient should receive empiric antibiotics and dexamethasone at once, and the addition of ampicillin covers Listeria in someone over 50. Altered mentation also calls for CT before lumbar puncture, which can occur after antibiotics begin, since CSF findings remain useful. Waiting for imaging or CSF before treatment increases mortality. Ceftriaxone alone leaves resistant pneumococci and Listeria uncovered. Delaying the lumbar puncture until morning loses diagnostic information and a chance to stop unneeded therapy.",
    "id": 243
  },
  {
    "domain": "neurology_acute",
    "chapter": 26,
    "question": "A 32-year-old man has had progressive leg and then arm weakness over 4 days, beginning 2 weeks after a diarrheal illness. Examination shows symmetric weakness and absent deep tendon reflexes. His weight is 80 kg and forced vital capacity is 1.4 L. Which of the following is the best next step?",
    "options": {
      "A": "Admit to intensive care for respiratory monitoring and start intravenous immune globulin",
      "B": "Start high-dose intravenous methylprednisolone and discharge home with close outpatient neurology follow-up",
      "C": "Perform lumbar puncture and discharge home if the cerebrospinal fluid protein level is normal",
      "D": "Give intravenous edrophonium to differentiate cholinergic crisis from myasthenic weakness in this patient"
    },
    "answer": "A",
    "explanation": "The picture is Guillain-Barre syndrome with a vital capacity of 17.5 mL/kg, below the 20 mL/kg threshold that predicts respiratory failure. He needs intensive monitoring for ventilatory and autonomic compromise, plus intravenous immune globulin or plasma exchange. Corticosteroids do not help this disorder. A normal CSF protein in the first week does not rule it out and discharge is unsafe. Edrophonium is a test for myasthenia gravis, which does not present with areflexia after diarrhea.",
    "id": 244
  },
  {
    "domain": "neurology_acute",
    "chapter": 26,
    "question": "A 45-year-old woman with myasthenia gravis, taking pyridostigmine and prednisone, develops worsening dysarthria and dyspnea 3 days after starting ciprofloxacin for a urinary infection. Her forced vital capacity is 15 mL/kg and negative inspiratory force is weaker than minus 20 cm H2O. Which of the following is the most appropriate management?",
    "options": {
      "A": "Increase pyridostigmine to 120 mg every 3 hours and observe her closely at home",
      "B": "Switch to a different fluoroquinolone and add a macrolide antibiotic for coverage",
      "C": "Give intravenous edrophonium and discharge her home if strength improves briefly",
      "D": "Admit to the ICU, stop ciprofloxacin, and start plasma exchange or immune globulin"
    },
    "answer": "D",
    "explanation": "This is myasthenic crisis precipitated by a fluoroquinolone, with impending respiratory failure based on the vital capacity and inspiratory force. Management is ICU care, withdrawal of the offending drug, airway support as needed, and rapid immunotherapy with plasma exchange or intravenous immune globulin. Higher pyridostigmine doses at home are unsafe and increase secretions. Other fluoroquinolones and macrolides also worsen neuromuscular transmission. Edrophonium is a diagnostic test with little role in a known case and short-lived effects.",
    "id": 245
  },
  {
    "domain": "neurology_acute",
    "chapter": 26,
    "question": "A 63-year-old man with metastatic prostate cancer reports 3 weeks of thoracic back pain, now worse when lying flat. He has had difficulty climbing stairs for 2 days. Examination shows leg weakness of 4/5, hyperreflexia, and a sensory level at T10. Which of the following is the best next step?",
    "options": {
      "A": "Outpatient bone scan next week and acetaminophen for pain control meanwhile",
      "B": "Lumbar puncture to evaluate for leptomeningeal disease before any imaging study",
      "C": "Intravenous dexamethasone and emergent MRI of the entire spine",
      "D": "Oral NSAIDs and physical therapy with a repeat visit in two weeks"
    },
    "answer": "C",
    "explanation": "Back pain, leg weakness, hyperreflexia, and a sensory level in a patient with cancer indicate metastatic epidural spinal cord compression, in which neurologic outcome depends on function at treatment onset. High-dose dexamethasone is started and emergent MRI of the whole spine is obtained to plan radiation or decompression. Delay for an outpatient bone scan costs function that rarely returns. Lumbar puncture below a compressive lesion can worsen deficits. Symptomatic therapy with NSAIDs and physical therapy would permit irreversible paralysis.",
    "id": 246
  },
  {
    "domain": "neuro_psych",
    "chapter": 27,
    "question": "A 38-year-old man comes to the emergency department with severe right-sided periorbital pain for 40 minutes, with tearing of the right eye, nasal congestion, and ptosis. He paces the room. He has had similar attacks every night for the past 2 weeks at about 2 AM. Neurologic examination is otherwise normal. Which of the following is the most appropriate initial treatment?",
    "options": {
      "A": "Oral acetaminophen 1,000 mg with an oral antiemetic, then observation in the waiting room",
      "B": "Intravenous morphine 4 mg repeated every 15 minutes as needed",
      "C": "High-flow 100 percent oxygen at 12 to 15 L/min by non-rebreather mask",
      "D": "Oral ibuprofen 800 mg and rest in a quiet darkened room"
    },
    "answer": "C",
    "explanation": "Severe unilateral orbital pain with ipsilateral autonomic features, restlessness, and a circadian pattern define cluster headache, for which 100 percent oxygen by non-rebreather mask, or subcutaneous sumatriptan, aborts the attack. Oral acetaminophen and ibuprofen act too slowly for attacks that peak within minutes. Opioids are poorly effective in cluster headache and risk dependence. A quiet darkened room helps migraine, whereas patients with cluster headache are restless and pace.",
    "id": 247
  },
  {
    "domain": "neuro_psych",
    "chapter": 27,
    "question": "A 19-year-old woman has had jerking of both arms upon waking in the morning for 6 months, and had a generalized tonic-clonic seizure after a night of studying. EEG shows 4 to 6 Hz generalized polyspike-and-wave discharges, and MRI is normal. She uses an oral contraceptive and wants to become pregnant in the next few years. Which of the following is the most appropriate antiseizure medication?",
    "options": {
      "A": "Levetiracetam, which controls generalized seizures without raising teratogenic risk or weakening hormonal contraception",
      "B": "Valproate, which is the most broadly effective drug for generalized epilepsy and is safe in young women",
      "C": "Carbamazepine, which is the first-line drug for generalized seizures with morning myoclonic jerks",
      "D": "Phenytoin, which suppresses myoclonus and has no interaction with hormonal contraceptives"
    },
    "answer": "A",
    "explanation": "The picture is juvenile myoclonic epilepsy, which responds to broad-spectrum drugs, and levetiracetam is effective without major teratogenic risk or reduction of contraceptive efficacy. Valproate is highly effective but causes neural tube defects and neurodevelopmental impairment, so it is avoided in women who may conceive. Carbamazepine and phenytoin can aggravate myoclonic and absence seizures and are enzyme inducers that lower the effect of hormonal contraception.",
    "id": 248
  },
  {
    "domain": "neuro_psych",
    "chapter": 27,
    "question": "A 76-year-old man has had 18 months of progressive forgetfulness, with variable alertness over the day, well-formed visual hallucinations of children in the house, and acting out his dreams at night. Examination shows mild bradykinesia and rigidity. After a hospital admission, haloperidol given for agitation was followed by severe rigidity and unresponsiveness. Which of the following is the most appropriate long-term pharmacologic treatment for his cognitive and psychiatric symptoms?",
    "options": {
      "A": "Low-dose haloperidol taken at bedtime to control the hallucinations and agitation",
      "B": "Lorazepam scheduled three times daily to settle his nighttime behavior and anxiety",
      "C": "Amitriptyline at bedtime to improve sleep and treat his low mood",
      "D": "A cholinesterase inhibitor such as rivastigmine to improve cognition and hallucinations"
    },
    "answer": "D",
    "explanation": "Fluctuating cognition, visual hallucinations, parkinsonism, REM sleep behavior disorder, and a severe reaction to a neuroleptic define dementia with Lewy bodies. Cholinesterase inhibitors improve cognition, hallucinations, and attention in this disease. Haloperidol and other typical antipsychotics can cause life-threatening sensitivity reactions. Benzodiazepines worsen confusion and falls. Amitriptyline has strong anticholinergic effects that worsen cognition and hallucinations.",
    "id": 249
  },
  {
    "domain": "neuro_psych",
    "chapter": 27,
    "question": "A 72-year-old woman has had a shuffling gait with her feet appearing stuck to the floor for 8 months, with urinary urgency and incontinence and mild forgetfulness. Examination shows a wide-based, slow gait. MRI shows enlarged lateral ventricles out of proportion to sulcal enlargement. Which of the following is the best next step?",
    "options": {
      "A": "Start donepezil for presumed Alzheimer disease and arrange physical therapy for gait training",
      "B": "Begin levodopa-carbidopa for suspected Parkinson disease and recheck gait in one month",
      "C": "Perform a large-volume lumbar puncture and compare gait before and after",
      "D": "Order amyloid PET imaging to confirm Alzheimer disease before choosing any treatment"
    },
    "answer": "C",
    "explanation": "Gait disturbance, urinary incontinence, and cognitive decline with ventriculomegaly out of proportion to atrophy indicate normal pressure hydrocephalus. Removal of 30 to 50 mL of CSF with a measured improvement in gait predicts response to shunting. Donepezil does not treat the underlying problem and delays definitive care. Levodopa is ineffective for the gait of this syndrome. Amyloid PET addresses a diagnosis that does not explain the gait and urinary findings or the imaging.",
    "id": 250
  },
  {
    "domain": "neuro_psych",
    "chapter": 27,
    "question": "A 29-year-old woman has had 4 days of painful loss of vision in her left eye that worsens with eye movement. She has a left relative afferent pupillary defect. MRI shows optic nerve enhancement and several ovoid periventricular white matter lesions, and CSF has oligoclonal bands. Which of the following is the most appropriate treatment for her acute symptoms?",
    "options": {
      "A": "Oral prednisone 20 mg daily continued for one full year of therapy",
      "B": "Intravenous immune globulin 0.4 g/kg daily for 5 consecutive days",
      "C": "Subcutaneous interferon beta injections alone, started within the week",
      "D": "Intravenous methylprednisolone 1 g daily for 3 to 5 days"
    },
    "answer": "D",
    "explanation": "Optic neuritis with periventricular lesions and CSF-restricted oligoclonal bands indicates multiple sclerosis, and a functionally significant relapse is treated with high-dose intravenous methylprednisolone, which speeds recovery. Low-dose prolonged oral prednisone does not help and has toxicity. Immune globulin has no established role in acute demyelination. A disease-modifying agent alone does not treat the current relapse, though one will be chosen for long-term prevention.",
    "id": 251
  },
  {
    "domain": "neuro_psych",
    "chapter": 27,
    "question": "A 44-year-old woman has 2 months of low mood, anhedonia, poor sleep, fatigue, and impaired concentration. PHQ-9 is 17. She has never had periods of elevated mood or decreased need for sleep. TSH and hemoglobin are normal, and she denies suicidal ideation. Which of the following is the most appropriate management?",
    "options": {
      "A": "Start sertraline and refer for cognitive behavioral therapy",
      "B": "Start amitriptyline 150 mg daily and recheck in 6 months",
      "C": "Prescribe alprazolam three times daily and reassess in a year",
      "D": "Begin lithium monotherapy and monitor serum levels weekly"
    },
    "answer": "A",
    "explanation": "Moderate to severe major depression without features of bipolar disorder or a medical cause is treated with an SSRI plus psychotherapy, a combination superior to either alone. A tricyclic at a high starting dose is more dangerous in overdose and less tolerated, and waiting 6 months is too long to reassess. Benzodiazepines do not treat depression and cause dependence. Lithium monotherapy is not first-line for unipolar depression, and it is used mainly as an augmenting agent or for bipolar disease.",
    "id": 252
  },
  {
    "domain": "neuro_psych",
    "chapter": 27,
    "question": "A 36-year-old man with schizophrenia was started on haloperidol 10 mg twice daily 5 days ago. He now has temperature of 39.8 C, heart rate of 128/min, blood pressure of 170/105 mm Hg, marked generalized rigidity, and confusion. Creatine kinase is 14,000 U/L and creatinine is 1.9 mg/dL. Which of the following is the best next step in management?",
    "options": {
      "A": "Reduce haloperidol by half and give intravenous diphenhydramine for the stiffness",
      "B": "Stop haloperidol, begin intravenous fluids and cooling, and admit to an intensive care setting",
      "C": "Give intramuscular haloperidol for agitation and add oral lithium for mood stabilization",
      "D": "Start intravenous acyclovir and obtain lumbar puncture before other therapy is given"
    },
    "answer": "B",
    "explanation": "Fever, severe rigidity, confusion, autonomic instability, and a markedly elevated creatine kinase within days of starting a high-potency antipsychotic define neuroleptic malignant syndrome. The drug must be stopped and supportive care with fluids, cooling, and monitoring for rhabdomyolysis and renal failure begun in an intensive care setting. Reducing the dose still leaves the causative agent in place, and diphenhydramine addresses dystonia, not this syndrome. Further haloperidol or lithium would worsen the condition. Empiric acyclovir does not fit a clear drug-related syndrome.",
    "id": 253
  },
  {
    "domain": "neuro_psych",
    "chapter": 27,
    "question": "A 52-year-old man with cirrhosis and heavy daily alcohol use is hospitalized for cellulitis. On hospital day 3 he is tremulous, diaphoretic, and agitated and sees insects on the wall. Heart rate is 118/min, temperature is 38.1 C, and blood pressure is 156/94 mm Hg. Which of the following is the most appropriate management?",
    "options": {
      "A": "Intravenous haloperidol as monotherapy to control the hallucinations and agitation",
      "B": "Oral naltrexone started immediately to reduce craving for alcohol during admission",
      "C": "Fluid restriction with observation and no sedative medication until symptoms worsen",
      "D": "Symptom-triggered lorazepam with thiamine given before any glucose"
    },
    "answer": "D",
    "explanation": "Tremor, autonomic hyperactivity, and hallucinations 2 to 3 days after admission indicate alcohol withdrawal progressing toward delirium tremens. Benzodiazepines guided by a symptom scale prevent seizures and death, lorazepam is preferred in cirrhosis because it avoids hepatic oxidation, and thiamine prevents Wernicke encephalopathy. Haloperidol alone lowers the seizure threshold and does not prevent withdrawal complications. Naltrexone treats craving later and is avoided in advanced liver disease. Withholding sedation risks seizures and fatal delirium tremens.",
    "id": 254
  },
  {
    "domain": "neuro_psych",
    "chapter": 27,
    "question": "A 22-year-old man is brought to the clinic by his roommate after telling a friend he wants to die. He states he has bought a gun, has written notes, and plans to use it tonight. He declines to promise to stay safe. He has had low mood for 3 months. Which of the following is the best next step?",
    "options": {
      "A": "Prescribe an SSRI and schedule a follow-up visit in 4 weeks",
      "B": "Arrange emergent psychiatric evaluation with continuous observation, and plan hospitalization",
      "C": "Ask him to sign a no-suicide contract and discharge him with his roommate",
      "D": "Give a benzodiazepine and send him home with a crisis hotline number"
    },
    "answer": "B",
    "explanation": "A specific plan, access to a lethal means, preparation, intent for tonight, and refusal to commit to safety place him at imminent high risk, requiring emergent evaluation, constant observation, and usually involuntary hospitalization if he will not agree. An outpatient SSRI takes weeks to work and leaves him at risk now. Contracts have no proven protective effect and cannot substitute for assessment. A benzodiazepine with a hotline number gives him access to a means of overdose and does not provide the supervision he needs.",
    "id": 255
  },
  {
    "domain": "geriatrics",
    "chapter": 28,
    "question": "An 82-year-old woman has fallen twice in 6 months. She takes zolpidem, amitriptyline, tamsulosin, and lisinopril. Her Timed Up and Go time is 16 seconds, and her systolic blood pressure falls 28 mm Hg on standing with lightheadedness. Vision and cognition are normal. Which of the following is the most appropriate next step in management?",
    "options": {
      "A": "Start vitamin D 50,000 IU weekly and discharge her to routine follow-up in the clinic",
      "B": "Prescribe a hip protector and recommend she restrict walking to avoid further falls",
      "C": "Order brain MRI and carotid duplex imaging before any other intervention",
      "D": "Taper the sedating drugs and tamsulosin, and refer her to supervised balance training"
    },
    "answer": "D",
    "explanation": "Her falls have several modifiable contributors, including a hypnotic and a tricyclic antidepressant that impair balance, an alpha-blocker that causes orthostasis, and weakness reflected in the slow gait test. The interventions with the best evidence are medication reduction and exercise targeting balance and strength. High-dose vitamin D in a person who is not shown to be deficient does not prevent falls. Restricting activity worsens deconditioning and raises future risk. Imaging has low yield without focal neurologic signs or syncope.",
    "id": 256
  },
  {
    "domain": "geriatrics",
    "chapter": 28,
    "question": "An 84-year-old man is on postoperative day 2 after hip fracture repair. He is drowsy and withdrawn, unable to name the months backward, and not oriented to place. His family says he was sharp yesterday. Temperature is 37.2 C, oxygen saturation is 95 percent, and he received oxycodone and diphenhydramine overnight. Bladder scan shows 650 mL. Which of the following is the best next step?",
    "options": {
      "A": "Give haloperidol 5 mg intramuscularly and schedule it every 8 hours",
      "B": "Start lorazepam 1 mg intravenously to reduce confusion at night",
      "C": "Relieve the retention, stop deliriogenic drugs, and apply nonpharmacologic measures",
      "D": "Start donepezil now to improve his attention and orientation after surgery"
    },
    "answer": "C",
    "explanation": "Acute inattention with fluctuation after surgery is hypoactive delirium, and the treatment is to correct precipitants, which here include urinary retention and anticholinergic and opioid exposure, along with reorientation, mobilization, and sleep protection. Antipsychotics do not shorten delirium and are reserved for dangerous agitation. Benzodiazepines can worsen delirium except in withdrawal states. Cholinesterase inhibitors have no proven role in treating acute delirium and add adverse effects.",
    "id": 257
  },
  {
    "domain": "geriatrics",
    "chapter": 28,
    "question": "A 78-year-old man with benign prostatic hyperplasia reports difficulty sleeping and takes diphenhydramine 50 mg nightly. He has had increasing urinary hesitancy, constipation, and mild forgetfulness. Which of the following is the best recommendation?",
    "options": {
      "A": "Stop diphenhydramine and begin sleep hygiene counseling or cognitive behavioral therapy",
      "B": "Switch to a higher dose of hydroxyzine at bedtime to improve his sleep",
      "C": "Add a nightly benzodiazepine for sleep and reduce his tamsulosin dose to ease dizziness",
      "D": "Continue diphenhydramine and add an anticholinergic bladder drug to control his urinary urgency"
    },
    "answer": "A",
    "explanation": "Diphenhydramine is a strongly anticholinergic first-generation antihistamine on the Beers list, and in this man it contributes to urinary retention, constipation, and cognitive change. Stopping it and using behavioral treatment for insomnia is safest. Hydroxyzine is another first-generation antihistamine with similar harms. Benzodiazepines increase falls and cognitive impairment. Adding an antimuscarinic to treat urinary symptoms would layer another anticholinergic on top, a classic prescribing cascade.",
    "id": 258
  },
  {
    "domain": "geriatrics",
    "chapter": 28,
    "question": "A 79-year-old bedbound woman has a 4-cm sacral wound with loss of full-thickness skin. Subcutaneous fat is visible, and yellow slough is present in part of the wound bed. No bone, tendon, or muscle is visible. Which of the following is the correct stage of this pressure injury?",
    "options": {
      "A": "Stage 2 partial-thickness injury with exposed dermis and a shallow open wound bed",
      "B": "Stage 4 full-thickness injury with exposed muscle, tendon, ligament, or bone visible",
      "C": "Stage 3 full-thickness injury with visible subcutaneous fat and no deeper structures",
      "D": "Unstageable injury because slough covers part of the wound base"
    },
    "answer": "C",
    "explanation": "Full-thickness skin loss with visible subcutaneous fat and no exposed fascia, muscle, tendon, ligament, cartilage, or bone defines the third stage, and slough that does not hide the depth does not change the stage. Partial-thickness injury with a shallow wound and exposed dermis would be the second stage and cannot show fat. Exposed muscle, tendon, or bone would make the fourth stage. An injury is unstageable only when slough or eschar covers the base so the depth cannot be determined.",
    "id": 259
  },
  {
    "domain": "geriatrics",
    "chapter": 28,
    "question": "A 68-year-old woman reports leakage of small amounts of urine when she coughs, laughs, or lifts her grandchildren, with no urgency or nocturia. Pelvic examination shows mild anterior vaginal wall descent. Urinalysis is normal and post-void residual is 30 mL. Which of the following is the most appropriate initial management?",
    "options": {
      "A": "Oxybutynin 5 mg three times daily to relax the overactive bladder muscle",
      "B": "Pelvic floor muscle training, with counseling about weight loss if applicable",
      "C": "Intermittent self-catheterization four times daily to prevent overdistension of the bladder",
      "D": "Tamsulosin 0.4 mg daily to relax the bladder outlet and improve flow"
    },
    "answer": "B",
    "explanation": "Leakage with increased abdominal pressure and no urgency indicates stress incontinence, and the first-line treatment is pelvic floor muscle training with attention to weight, with a sling procedure for those who fail. Oxybutynin treats urge incontinence and is anticholinergic. Catheterization is for overflow due to high residual volumes, which she does not have. Alpha-blockers relax the outlet and would worsen stress leakage.",
    "id": 260
  },
  {
    "domain": "geriatrics",
    "chapter": 28,
    "question": "A 79-year-old woman with mild dementia is brought to the clinic by her daughter, who answers most questions for her. The patient has multiple bruises of different ages on both inner upper arms and a small sacral pressure injury, and she appears underweight. The daughter says she bruises easily. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Reassure the daughter that easy bruising is normal and prescribe a nutritional supplement",
      "B": "Order a platelet count and coagulation studies and defer any report until the results return",
      "C": "Obtain consent from the daughter before taking any further action",
      "D": "Interview the patient privately, document findings, and report suspected abuse to adult protective services"
    },
    "answer": "D",
    "explanation": "Bruises of different ages on the inner arms, a pressure injury, weight loss, and a caregiver who dominates the history raise concern for elder abuse or neglect. The physician interviews the patient alone, documents carefully, and makes a report under state law, which in most states is mandatory and requires only reasonable suspicion. Reassurance without evaluation leaves the patient at risk. Laboratory testing can be done in parallel but should not delay the report. The suspected perpetrator's consent is neither required nor appropriate.",
    "id": 261
  },
  {
    "domain": "geriatrics",
    "chapter": 28,
    "question": "An 86-year-old woman with advanced dementia is bedbound, incontinent, and speaks only a few words. She has had two admissions for aspiration pneumonia this year and has lost 12 percent of her body weight. Her son, who is her health care proxy, asks whether a feeding tube would help. Which of the following is the best recommendation?",
    "options": {
      "A": "Careful hand feeding for comfort, with a hospice evaluation, rather than a feeding tube",
      "B": "Percutaneous gastrostomy tube placement now to prevent further aspiration and ongoing weight loss",
      "C": "Nasogastric tube feeding for 6 weeks to restore her weight before further decisions",
      "D": "Total parenteral nutrition through a central line to reverse her weight loss quickly"
    },
    "answer": "A",
    "explanation": "In advanced dementia, feeding tubes do not prolong survival, prevent aspiration pneumonia, or improve comfort, and they bring restraint use, infection, and complications. Careful hand feeding and comfort-focused care are recommended, and her functional stage and recurrent pneumonia support hospice eligibility. Gastrostomy and nasogastric tubes fail to deliver the claimed benefit, and parenteral nutrition adds line infection and thrombosis risks without improving outcomes at this stage.",
    "id": 262
  },
  {
    "domain": "geriatrics",
    "chapter": 28,
    "question": "A 68-year-old man with metastatic prostate cancer and an estimated glomerular filtration rate of 20 mL/min/1.73 m2 takes oral morphine 60 mg every 4 hours for bone pain. He now has myoclonic jerks, hallucinations, and sedation, though his pain is controlled. Which of the following is the best management?",
    "options": {
      "A": "Add a benzodiazepine for the myoclonus and continue the current morphine dose",
      "B": "Rotate to hydromorphone or fentanyl at a reduced equianalgesic dose, and hydrate",
      "C": "Stop all opioids abruptly and treat the pain with acetaminophen only for now",
      "D": "Double the morphine dose and add haloperidol for the hallucinations and agitation"
    },
    "answer": "B",
    "explanation": "Myoclonus, hallucinations, and sedation in a patient with reduced renal clearance indicate accumulation of active morphine metabolites, an opioid neurotoxicity syndrome. Switching to hydromorphone or fentanyl, which have less renally dependent toxic metabolites, at a dose reduced by 25 to 50 percent to account for incomplete cross-tolerance, maintains pain control while resolving toxicity. Continuing morphine with a benzodiazepine treats the symptom and not the cause. Abrupt cessation causes withdrawal and uncontrolled cancer pain. Raising the dose worsens neurotoxicity.",
    "id": 263
  },
  {
    "domain": "geriatrics",
    "chapter": 28,
    "question": "A 72-year-old man with metastatic lung cancer progressing on second-line chemotherapy asks, \"What are my chances, doctor?\" His performance status has declined to 50 percent. His wife looks anxious. Which of the following is the best initial response?",
    "options": {
      "A": "State that median survival is 4 months and move on to chemotherapy options",
      "B": "Tell him it is too early to know and suggest the next scan will answer his question",
      "C": "Ask what he understands about his illness and how much he wants to know first",
      "D": "Defer the discussion to his oncologist and avoid commenting on prognosis until the next scan"
    },
    "answer": "C",
    "explanation": "The ask-tell-ask approach first explores the patient's understanding and information preferences, then shares prognosis in a way he can take in, with attention to emotion and to what matters most to him. Quoting a single median number can be inaccurate for the individual and delivered without preparation. False reassurance that it is too early to know withholds information he is seeking. Avoiding the question leaves him without the information needed for decisions about treatment and time.",
    "id": 264
  },
  {
    "domain": "womens_health",
    "chapter": 29,
    "question": "A 28-year-old woman with a body mass index of 24 comes to establish care and asks about contraception. She has severe migraines that begin with a shimmering visual disturbance lasting 20 minutes. Her blood pressure is 112/70 mm Hg and she does not smoke. She wants a method that does not require daily attention. Which of the following is the most appropriate method?",
    "options": {
      "A": "Combined oral contraceptive containing 20 micrograms of ethinyl estradiol with a standard progestin",
      "B": "Weekly transdermal patch delivering both an estrogen and a progestin for three consecutive weeks",
      "C": "Intrauterine device that releases a progestin directly into the uterine cavity over several years",
      "D": "Vaginal ring that releases ethinyl estradiol and etonogestrel for three weeks of each cycle"
    },
    "answer": "C",
    "explanation": "A woman with migraine that includes aura has an increased baseline risk of ischemic stroke, and exogenous estrogen adds to that risk, so every estrogen-containing method is considered unacceptable regardless of the estrogen dose. That excludes the low-dose pill, the patch, and the vaginal ring, all of which deliver ethinyl estradiol or an equivalent. The progestin-releasing intrauterine device has minimal systemic hormone exposure, is highly effective, requires no daily action, and carries no stroke restriction, so it fits both her risk profile and her stated preference.",
    "id": 265
  },
  {
    "domain": "womens_health",
    "chapter": 29,
    "question": "A 52-year-old woman reports daily hot flashes and night sweats that disrupt sleep for the past six months. Her last menstrual period was 14 months ago. She has an intact uterus, a body mass index of 31, normal blood pressure, and a normal mammogram obtained last month. She has no history of thrombosis, liver disease, or cancer. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Transdermal estradiol combined with oral micronized progesterone to protect the endometrium",
      "B": "Daily oral conjugated estrogen alone, without a progestogen, because mammography is normal",
      "C": "Vaginal estradiol tablets used twice weekly, which relieve systemic vasomotor symptoms completely",
      "D": "Low-dose paroxetine as the only treatment because she is within a year of menopause"
    },
    "answer": "A",
    "explanation": "She is healthy, symptomatic, and within ten years of menopause, which is the setting where systemic hormone therapy has the most favorable balance, and a transdermal route is a sensible choice with obesity. Because her uterus is intact, a progestogen must accompany the estrogen to prevent hyperplasia and carcinoma, so estrogen alone is inappropriate. Vaginal estrogen treats genitourinary symptoms with minimal systemic absorption and does not control hot flashes. Paroxetine is a reasonable option when estrogen is contraindicated, but nothing here makes her ineligible for the more effective hormonal treatment.",
    "id": 266
  },
  {
    "domain": "womens_health",
    "chapter": 29,
    "question": "A 49-year-old woman with a body mass index of 38 has had irregular, heavy vaginal bleeding for eight months. A urine pregnancy test is negative, hemoglobin is 10.2 g/dL, and thyrotropin is normal. Pelvic examination shows no cervical lesion and a normal-sized uterus. Which of the following is the most appropriate next step in management?",
    "options": {
      "A": "Repeat the pelvic ultrasound in six months and observe if the bleeding resolves",
      "B": "Prescribe cyclic medroxyprogesterone for ten days each month and reassess",
      "C": "Perform endometrial biopsy to evaluate for hyperplasia or carcinoma",
      "D": "Refer for hysterectomy without further evaluation because medical therapy will not work"
    },
    "answer": "C",
    "explanation": "She is older than 45 and has obesity, which means chronic unopposed estrogen exposure, so her abnormal bleeding must be sampled to exclude endometrial hyperplasia or cancer before any treatment is chosen. Waiting six months delays a diagnosis that may be malignant. Starting cyclic progestin without tissue could mask an unrecognized neoplasm and is not the first step. Surgery before a tissue diagnosis, and before medical options have been tried, is premature and might be the wrong operation.",
    "id": 267
  },
  {
    "domain": "womens_health",
    "chapter": 29,
    "question": "A 26-year-old primigravid woman at 35 weeks of gestation presents with a severe frontal headache and blurred vision. Blood pressure is 168/112 mm Hg on two measurements 15 minutes apart. Platelet count is 82,000 per microliter, creatinine is 0.8 mg/dL, and aspartate aminotransferase is three times the upper limit of normal. Which of the following is the most appropriate management?",
    "options": {
      "A": "Prescribe oral labetalol and arrange outpatient laboratory testing and follow-up within one week",
      "B": "Admit for bed rest with expectant management until she reaches 37 weeks of gestation",
      "C": "Start an oral ACE inhibitor and schedule induction of labor at 40 weeks",
      "D": "Give intravenous magnesium sulfate, control severe-range pressure, and plan delivery after stabilization"
    },
    "answer": "D",
    "explanation": "She has preeclampsia with several severe features: severe-range pressure, thrombocytopenia, elevated transaminases, and neurologic symptoms, and she is beyond 34 weeks, so delivery after maternal stabilization is indicated. Magnesium sulfate prevents eclamptic seizures and rapid antihypertensive treatment reduces stroke risk. Outpatient therapy is unsafe with these findings. Expectant management to 37 weeks is reserved for earlier gestation or for disease without severe features. ACE inhibitors damage the fetal kidney and are contraindicated, and waiting until 40 weeks exposes her to eclampsia and hemorrhage.",
    "id": 268
  },
  {
    "domain": "womens_health",
    "chapter": 29,
    "question": "A 58-year-old postmenopausal woman has a screening DXA scan showing a T-score of -2.8 at the femoral neck. She has no fractures, takes no medications, has no esophageal disease, and her estimated glomerular filtration rate is 78 mL/min/1.73 m2. Serum calcium and 25-hydroxyvitamin D are normal. Which of the following is the most appropriate pharmacotherapy?",
    "options": {
      "A": "Raloxifene daily, selected primarily because it also lowers the risk of thrombosis",
      "B": "Oral alendronate weekly with adequate calcium intake and vitamin D supplementation",
      "C": "Teriparatide daily injections for two years as the first agent for any osteoporosis",
      "D": "Calcitonin nasal spray daily, chosen for its strong reduction in hip fracture risk"
    },
    "answer": "B",
    "explanation": "A T-score of -2.5 or lower establishes osteoporosis, and an oral bisphosphonate is first-line for women without contraindications because it reduces vertebral and hip fractures and is inexpensive, particularly alongside calcium and vitamin D. Raloxifene increases the risk of thromboembolism rather than lowering it, and does not reduce hip fractures. Anabolic injections are reserved for very high fracture risk, such as recent vertebral fractures. Calcitonin has weak fracture-reduction evidence and is not recommended as a primary agent.",
    "id": 269
  },
  {
    "domain": "womens_health",
    "chapter": 29,
    "question": "A 33-year-old woman visits the clinic for recurrent headaches and abdominal pain. She has bruises on both upper arms. She quietly says her husband controls her money, monitors her phone, and \"gets rough when he drinks.\" Yesterday he grabbed her by the throat. She has two children at home and says she is afraid to leave. Which of the following is the most appropriate response?",
    "options": {
      "A": "Advise her to leave immediately and arrange transport to a shelter before she goes home",
      "B": "Invite her husband to the next visit to discuss alcohol use and conflict resolution",
      "C": "Validate her experience, assess immediate danger, document findings, and develop a safety plan with resources",
      "D": "Reassure her that mild episodes of aggression are common and recommend couples counseling first"
    },
    "answer": "C",
    "explanation": "Strangulation is a strong predictor of later lethal violence, so she needs a nonjudgmental response, assessment of immediate danger, careful documentation, and a safety plan tied to local advocacy services, with the decision about leaving remaining hers. Pressuring her to leave abruptly can raise the danger, since separation is a high-risk period. Bringing the abuser to a joint visit exposes her to retaliation, and couples counseling is not recommended while violence is ongoing. Minimizing the abuse as common ignores the danger signs.",
    "id": 270
  },
  {
    "domain": "womens_health",
    "chapter": 29,
    "question": "A 57-year-old man with stable exertional angina takes aspirin, metoprolol, atorvastatin, and isosorbide mononitrate 60 mg every morning. He reports erectile dysfunction for one year, and a morning total testosterone is 520 ng/dL. He asks for a pill that his friend uses. Which of the following is the most appropriate recommendation?",
    "options": {
      "A": "Sildenafil taken on an empty stomach at least four hours after his morning nitrate",
      "B": "Tadalafil daily at low dose, which is safe in combination with long-acting nitrates",
      "C": "Testosterone gel applied daily to treat erectile dysfunction despite his normal level",
      "D": "A vacuum erection device, avoiding phosphodiesterase-5 inhibitors while he takes daily nitrates"
    },
    "answer": "D",
    "explanation": "Phosphodiesterase-5 inhibitors potentiate nitrate-induced vasodilation and can produce profound, life-threatening hypotension, so they are contraindicated in patients using nitrates daily; timing the doses apart does not make the combination safe with a once-daily long-acting nitrate. Daily tadalafil carries the same interaction. His testosterone is normal, and replacement would not improve erectile function and would pose unnecessary risks. A vacuum device or alprostadil is a nitrate-compatible option, and his cardiology team can review whether the nitrate is still needed.",
    "id": 271
  },
  {
    "domain": "womens_health",
    "chapter": 29,
    "question": "A 28-year-old woman at 7 weeks of gestation has been taking methimazole 20 mg daily for Graves disease for two years. Free thyroxine is mildly elevated and she has no symptoms of thyroid storm. She wishes to continue the pregnancy. Which of the following is the most appropriate change in management?",
    "options": {
      "A": "Stop all antithyroid medication because it is unsafe throughout pregnancy and restart postpartum",
      "B": "Switch to propylthiouracil for the first trimester and reconsider methimazole afterward",
      "C": "Continue methimazole unchanged through delivery because it has no known fetal risk at any dose",
      "D": "Perform immediate radioactive iodine ablation to prevent exposure to antithyroid drugs"
    },
    "answer": "B",
    "explanation": "Methimazole has been linked to a rare embryopathy (aplasia cutis, choanal atresia) during organogenesis, so propylthiouracil is preferred in the first trimester, with a switch back to methimazole later to limit hepatotoxicity from propylthiouracil. Stopping all treatment risks maternal thyrotoxicosis and fetal harm. Continuing methimazole unchanged ignores the early malformation risk. Radioactive iodine is absolutely contraindicated in pregnancy because it destroys the fetal thyroid.",
    "id": 272
  },
  {
    "domain": "womens_health",
    "chapter": 29,
    "question": "A 36-year-old transgender man has taken testosterone for four years and has not had a hysterectomy. He has never been screened for cervical cancer. He has no symptoms and no history of abnormal results. He asks whether screening is necessary now that he lives as a man. Which of the following is the most appropriate advice?",
    "options": {
      "A": "Recommend cervical cancer screening with cytology or HPV testing, using the standard schedule for his age",
      "B": "Explain that testosterone therapy protects the cervix, so screening can be omitted",
      "C": "Defer screening until he develops abnormal vaginal bleeding or pelvic pain",
      "D": "Offer screening only after he stops testosterone and undergoes a full year of observation"
    },
    "answer": "A",
    "explanation": "Screening follows the organs present rather than gender identity, so a transgender man with a cervix needs cervical screening on the same schedule as other patients of his age. Testosterone offers no protection against human papillomavirus-related disease, and it can cause atrophy that makes samples harder to interpret, which is a reason to use a sensitive approach such as self-collected HPV testing if available. Waiting for symptoms defeats the purpose of screening, and stopping therapy first is unnecessary.",
    "id": 273
  },
  {
    "domain": "perioperative",
    "chapter": 30,
    "question": "A 74-year-old man with atrial fibrillation (CHA2DS2-VASc score 3, no prior stroke) takes warfarin and is scheduled for elective open inguinal hernia repair in one week. His INR is 2.4. He has no mechanical valve and no venous thromboembolism history. Which of the following is the most appropriate perioperative anticoagulation plan?",
    "options": {
      "A": "Continue warfarin at the usual dose through the operation and check the INR the day after surgery",
      "B": "Stop warfarin five days before surgery, omit heparin bridging, and restart afterward when hemostasis is secure",
      "C": "Stop warfarin three days before surgery and give therapeutic enoxaparin until the day before",
      "D": "Replace warfarin with aspirin 325 mg daily for three weeks around the operation, then resume it afterward"
    },
    "answer": "B",
    "explanation": "Warfarin is stopped about five days before an operation with meaningful bleeding risk so the INR reaches the target for surgery. In atrial fibrillation without a recent stroke or mechanical valve, trial evidence showed that heparin bridging produced more major bleeding without lowering thromboembolism, so bridging is omitted. Continuing full anticoagulation risks surgical bleeding in a hernia repair of this size. Bridging with therapeutic enoxaparin adds bleeding risk without benefit. Aspirin is not an effective stroke preventive substitute for anticoagulation in atrial fibrillation.",
    "id": 274
  },
  {
    "domain": "perioperative",
    "chapter": 30,
    "question": "A 62-year-old man with a previous myocardial infarction has taken metoprolol succinate 100 mg daily and atorvastatin for six years. He is scheduled for elective total knee arthroplasty tomorrow. Heart rate is 64/min, blood pressure is 126/78 mm Hg, and he has had no angina. Which of the following is the most appropriate management of his beta-blocker?",
    "options": {
      "A": "Hold the metoprolol for 48 hours before surgery to prevent intraoperative bradycardia",
      "B": "Double the metoprolol dose tonight to maximize protection against perioperative ischemia",
      "C": "Replace metoprolol with a calcium channel blocker for the duration of the hospital stay",
      "D": "Continue the metoprolol at the usual dose, including the morning of surgery"
    },
    "answer": "D",
    "explanation": "Patients who already take a beta-blocker should continue it through the perioperative period, because abrupt withdrawal can trigger rebound tachycardia and ischemia, and this patient has a prior infarction. Holding the drug removes protection and risks withdrawal. Raising the dose abruptly just before an operation resembles the high-dose strategy that increased stroke, hypotension, and death in a large trial. Switching to a different class has no supporting evidence and discards a drug with a clear indication.",
    "id": 275
  },
  {
    "domain": "perioperative",
    "chapter": 30,
    "question": "A 59-year-old man had a drug-eluting stent placed in the left anterior descending artery two months ago for stable angina. He takes aspirin and clopidogrel. He now has symptomatic knee osteoarthritis and wishes to schedule an elective total knee arthroplasty next month. Which of the following is the most appropriate recommendation?",
    "options": {
      "A": "Delay the elective operation until at least six months after the stent, continuing dual antiplatelet therapy",
      "B": "Proceed next month after stopping both aspirin and clopidogrel seven days before the planned surgery date",
      "C": "Proceed next month and add heparin bridging to cover the interval after stopping both antiplatelet agents",
      "D": "Perform a pharmacologic stress test now, since a negative result removes any stent-related concern about surgery"
    },
    "answer": "A",
    "explanation": "Early interruption of dual antiplatelet therapy after a drug-eluting stent causes stent thrombosis, which has high mortality, and an elective knee replacement can wait. Postponing until at least six months after placement lowers that risk. Stopping both antiplatelet drugs removes stent protection. Heparin does not substitute for antiplatelet therapy in an intracoronary stent. A stress test cannot reduce stent thrombosis risk, and the problem here is the timing of surgery rather than ischemia.",
    "id": 276
  },
  {
    "domain": "perioperative",
    "chapter": 30,
    "question": "A 66-year-old woman has a temperature of 38.4 C on the first day after an open sigmoid colectomy. She is taking oral fluids and using patient-controlled analgesia. Heart rate is 92/min and oxygen saturation is 95 percent on room air. The wound is clean, calves are soft, her lungs show mild bibasilar crackles, and a urinary catheter was removed this morning. Which of the following is the most appropriate management?",
    "options": {
      "A": "Begin broad-spectrum intravenous antibiotics and obtain blood cultures from two peripheral sites",
      "B": "Order a CT scan of the abdomen with intravenous contrast to look for anastomotic leak",
      "C": "Start therapeutic heparin and obtain a CT pulmonary angiogram",
      "D": "Encourage incentive spirometry and ambulation, and observe without antibiotics"
    },
    "answer": "D",
    "explanation": "Fever within the first day or two after major surgery is most often inflammatory or related to atelectasis, and her examination shows a clean wound, no calf findings, and only mild crackles. Lung expansion and mobilization are the appropriate steps, with a re-examination if the fever persists or new findings appear. Reflex antibiotics and cultures add little this early. Imaging for a leak is premature, as leaks present later with ileus, pain, and instability. Empiric anticoagulation and angiography are unsupported without a clinical suggestion of embolism.",
    "id": 277
  },
  {
    "domain": "perioperative",
    "chapter": 30,
    "question": "A 79-year-old man is admitted with pneumonia and is bedbound. He has heart failure and a history of deep venous thrombosis. His creatinine clearance is estimated at 22 mL/min, and platelets are 210,000 per microliter. He has no active bleeding. Which of the following is the most appropriate venous thromboembolism prophylaxis?",
    "options": {
      "A": "Enoxaparin 40 mg subcutaneously twice daily to account for his high risk",
      "B": "Graduated compression stockings alone, since he is at risk of bleeding from renal failure",
      "C": "Unfractionated heparin 5,000 units subcutaneously every 8 to 12 hours",
      "D": "Oral rivaroxaban 20 mg daily with the evening meal for the hospital stay"
    },
    "answer": "C",
    "explanation": "He scores high on the Padua assessment and has no contraindication to pharmacologic prophylaxis, and unfractionated heparin does not accumulate in severe renal impairment, making it a good choice at his clearance. Full-dose twice-daily enoxaparin is excessive for prophylaxis, and the drug accumulates at this clearance. Stockings alone are inadequate in a high-risk patient. The rivaroxaban dose given is a treatment dose for atrial fibrillation, not a prophylactic regimen, and it is not appropriate here.",
    "id": 278
  },
  {
    "domain": "perioperative",
    "chapter": 30,
    "question": "A 66-year-old woman with type 2 diabetes is admitted for cellulitis. Her A1c is 9.1 percent. She eats full meals. Her glucose values on a sliding-scale insulin regimen alone have ranged from 240 to 310 mg/dL for two days. Which of the following is the most appropriate change?",
    "options": {
      "A": "Start scheduled basal and prandial insulin with a correction scale, targeting 140 to 180 mg/dL",
      "B": "Continue the sliding scale alone and add more correction units at each reading above 200 mg/dL",
      "C": "Begin an intravenous insulin infusion with hourly glucose checks, targeting a tight range of 80 to 110 mg/dL",
      "D": "Restart her home metformin and stop all insulin until her glucose values are below 200 mg/dL"
    },
    "answer": "A",
    "explanation": "Correction-only insulin reacts to high values after the fact and does not provide the steady background insulin that a patient with this A1c needs. A scheduled basal-bolus regimen with a correction scale improves control, and 140 to 180 mg/dL is the recommended inpatient target. An infusion is reserved for critical illness and is not needed in a patient eating on a ward. A target of 80 to 110 raises hypoglycemia risk and harmed patients in intensive care trials. Stopping insulin ignores severe hyperglycemia.",
    "id": 279
  },
  {
    "domain": "perioperative",
    "chapter": 30,
    "question": "A 72-year-old man who lives alone is being discharged after a heart failure exacerbation. Five of his eight medications were changed during the stay, and he reports difficulty reading labels. His daughter lives two hours away. Which of the following discharge strategies is most likely to reduce his risk of 30-day readmission?",
    "options": {
      "A": "A detailed written discharge summary mailed to his primary care clinician within one month",
      "B": "A reconciled medication list with teach-back and a clinic visit scheduled within seven days",
      "C": "A prescription for as-needed furosemide with instructions to call the clinic if his symptoms worsen",
      "D": "A recommendation to resume his prior medication schedule at home once his symptoms improve"
    },
    "answer": "B",
    "explanation": "Early follow-up, a single reconciled list, and teach-back address the actual hazards of this transition: many changes, impaired health literacy, and little support. A summary arriving after a month cannot guide care when the risk is highest. Sending him home with as-needed diuretic and no structure leaves recognition of decompensation to him. Resuming the old schedule would reintroduce drugs that were stopped or doses that were changed for good reasons.",
    "id": 280
  },
  {
    "domain": "perioperative",
    "chapter": 30,
    "question": "A 68-year-old woman with giant cell arteritis has taken prednisone 40 mg daily for six months and now takes 20 mg daily. She is scheduled for an elective open cholecystectomy under general anesthesia. Her blood pressure is 128/76 mm Hg and her potassium is normal. Which of the following is the most appropriate perioperative steroid management?",
    "options": {
      "A": "Hold prednisone on the day of surgery to reduce the risk of impaired wound healing",
      "B": "Continue the usual prednisone dose only, since laparoscopic surgery does not need extra steroid",
      "C": "Give stress-dose hydrocortisone around the time of surgery, then taper to her usual dose",
      "D": "Check a morning cortisol and give steroids only if it is below normal"
    },
    "answer": "C",
    "explanation": "Prolonged use of prednisone at 20 mg or more suppresses the adrenal axis, so she cannot mount a stress response, and an operation under general anesthesia can precipitate adrenal crisis with refractory hypotension. Hydrocortisone at stress doses covers the procedure and is then tapered. Holding prednisone invites crisis. Continuing the usual dose alone is inadequate for major surgery. A cortisol level drawn while she takes prednisone is uninterpretable and would delay needed treatment.",
    "id": 281
  },
  {
    "domain": "perioperative",
    "chapter": 30,
    "question": "A 54-year-old man with type 2 diabetes takes metformin and empagliflozin. He is scheduled for elective hernia repair under general anesthesia in four days and will be fasting the night before. Which of the following is the most appropriate instruction regarding his empagliflozin?",
    "options": {
      "A": "Continue empagliflozin through the morning of surgery to avoid hyperglycemia while he is fasting",
      "B": "Stop empagliflozin three days before the operation and resume when he is eating normally",
      "C": "Stop empagliflozin only on the night before surgery and replace it with a sulfonylurea",
      "D": "Stop empagliflozin for two weeks before surgery to allow glucosuria to resolve fully"
    },
    "answer": "B",
    "explanation": "Sodium-glucose cotransporter 2 inhibitors can cause euglycemic diabetic ketoacidosis in the fasting, stressed perioperative state, and the drugs should be stopped about three days before surgery (four for ertugliflozin) and restarted when oral intake resumes. Continuing the drug through the morning of surgery carries the ketoacidosis risk. Stopping the night before is too late for the effect to wear off, and adding a sulfonylurea creates fasting hypoglycemia. Two weeks off is unnecessarily long and worsens control.",
    "id": 282
  },
  {
    "domain": "toxicology",
    "chapter": 31,
    "question": "A 24-year-old woman is brought to the emergency department six hours after reportedly swallowing about 15 g of acetaminophen tablets during an argument. She has nausea only. Vital signs are normal. The serum acetaminophen concentration, drawn at six hours, is 190 micrograms/mL. Aspartate aminotransferase is normal. Which of the following is the most appropriate next step in management?",
    "options": {
      "A": "Give activated charcoal and repeat the acetaminophen level in 24 hours before deciding on therapy",
      "B": "Observe for 24 hours and begin treatment only if transaminases become elevated",
      "C": "Start intravenous N-acetylcysteine now, using the standard 21-hour protocol",
      "D": "Arrange urgent hemodialysis because the level is above 150 micrograms/mL at this time"
    },
    "answer": "C",
    "explanation": "At six hours after a single ingestion of known timing, a concentration of 190 micrograms/mL lies well above the treatment line on the nomogram, so N-acetylcysteine is indicated whether or not the transaminases are normal, because enzymes do not rise until a day or more later. Charcoal this late adds little and delaying the antidote risks hepatic necrosis. Waiting for enzyme elevation misses the window in which the antidote is most effective. Dialysis is not used for acetaminophen when an effective antidote exists.",
    "id": 283
  },
  {
    "domain": "toxicology",
    "chapter": 31,
    "question": "A 32-year-old man presents with tinnitus, vomiting, and rapid breathing after taking a large number of aspirin tablets for a headache. He is alert and oriented. Temperature is 38.1 C and respiratory rate is 30/min. Arterial blood gas on room air shows pH 7.43, PaCO2 21 mm Hg, and bicarbonate 13 mEq/L. The serum salicylate concentration is 68 mg/dL and creatinine is normal. Which of the following is the most appropriate management?",
    "options": {
      "A": "Intravenous sodium bicarbonate with potassium repletion and frequent repeat salicylate levels",
      "B": "Endotracheal intubation with sedation and a conventional minute ventilation setting",
      "C": "Acetazolamide to enhance urinary bicarbonate loss and correct the alkalemia",
      "D": "Immediate hemodialysis because any salicylate level above 50 mg/dL requires extracorporeal removal"
    },
    "answer": "A",
    "explanation": "This is moderate salicylate toxicity with a mixed respiratory alkalosis and anion-gap acidosis; bicarbonate alkalinizes the blood and urine, trapping salicylate outside the brain and enhancing excretion, and potassium must be replaced for it to work. Levels are repeated because absorption can continue. Intubation with ordinary ventilator settings removes the patient's compensatory hyperventilation and can precipitate fatal acidemia. Acetazolamide worsens systemic acidemia. Dialysis is reserved for altered mental status, pulmonary edema, kidney failure, severe acidemia, or very high levels, none of which are present.",
    "id": 284
  },
  {
    "domain": "toxicology",
    "chapter": 31,
    "question": "A 29-year-old woman is brought in after ingesting a large quantity of her amitriptyline an hour ago. She had one brief seizure in the ambulance. Blood pressure is 84/50 mm Hg and heart rate is 124/min. Pupils are dilated and skin is dry. The electrocardiogram shows sinus tachycardia with a QRS duration of 148 ms. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Physostigmine given slowly intravenously to reverse the anticholinergic delirium and the tachycardia",
      "B": "Flumazenil intravenously to reverse the sedation and terminate the seizure activity she has had",
      "C": "Procainamide infused intravenously to suppress the wide-complex rhythm and prevent ventricular tachycardia",
      "D": "Sodium bicarbonate 1 to 2 mEq/kg intravenous bolus, repeated until the QRS narrows"
    },
    "answer": "D",
    "explanation": "A QRS wider than 100 ms with hypotension and seizure after tricyclic antidepressant ingestion reflects fast sodium channel blockade, which sodium bicarbonate reverses by sodium loading and alkalinization. Physostigmine can provoke asystole and seizures in this setting. Flumazenil lowers the seizure threshold, and the drug does not act on this mechanism. Procainamide is a class IA sodium channel blocker that would further slow conduction and could cause ventricular arrhythmia.",
    "id": 285
  },
  {
    "domain": "toxicology",
    "chapter": 31,
    "question": "A 46-year-old man with alcohol use disorder is brought in with confusion and blurred vision. He appears intoxicated but his breath ethanol is negative. Arterial pH is 7.17, bicarbonate is 9 mEq/L, and the anion gap is 26. Measured serum osmolality is 345 mOsm/kg and calculated osmolality is 301 mOsm/kg. Which of the following is the most appropriate management?",
    "options": {
      "A": "Sodium bicarbonate alone with repeat blood gas analysis in six hours",
      "B": "Fomepizole and folate, with arrangements for urgent hemodialysis given the severe acidosis",
      "C": "Activated charcoal and lactulose to remove ingested alcohol from the gut",
      "D": "Naloxone and thiamine followed by observation for improvement of mental status"
    },
    "answer": "B",
    "explanation": "A large anion gap acidosis with an osmolar gap of 44 and visual symptoms points to methanol poisoning. Fomepizole blocks alcohol dehydrogenase from producing formic acid, folate speeds formate metabolism, and hemodialysis is indicated by the severe acidosis and visual signs. Bicarbonate alone does not stop toxic metabolite formation. Charcoal does not adsorb small alcohols. Naloxone and thiamine address opioids and Wernicke encephalopathy, and neither explains this acid-base disorder.",
    "id": 286
  },
  {
    "domain": "toxicology",
    "chapter": 31,
    "question": "A 41-year-old woman is found confused in her house after a winter storm knocked out power and she used a gas generator indoors. She has a headache and nausea. Pulse oximetry reads 99 percent on room air. Blood pressure is 118/74 mm Hg. Her husband has similar mild symptoms. Which of the following is the most appropriate initial treatment?",
    "options": {
      "A": "High-flow 100 percent oxygen by tight-fitting mask, with consideration of hyperbaric therapy",
      "B": "Room air with observation for several hours, because pulse oximetry shows normal oxygen saturation",
      "C": "Intravenous methylene blue to restore the oxygen-carrying capacity of her circulating hemoglobin",
      "D": "Intravenous sodium nitrite and sodium thiosulfate given from a standard cyanide antidote kit"
    },
    "answer": "A",
    "explanation": "The history and symptoms suggest carbon monoxide poisoning, and standard pulse oximetry misreads carboxyhemoglobin as oxyhemoglobin, so a normal reading does not exclude it. Treatment is 100 percent oxygen immediately, pending co-oximetry, with hyperbaric oxygen considered for her altered mental status. Room air prolongs the carboxyhemoglobin half-life several-fold. Methylene blue treats methemoglobinemia, not carboxyhemoglobinemia. Nitrites form methemoglobin and would further reduce oxygen delivery in this patient.",
    "id": 287
  },
  {
    "domain": "toxicology",
    "chapter": 31,
    "question": "A 38-year-old farmworker is brought in after spraying an insecticide without protective clothing. He is drooling and has diffuse wheezing, profuse watery diarrhea, and muscle twitching. Pupils are 2 mm, heart rate is 48/min, and oxygen saturation is 88 percent. Clothing has been removed. Which of the following is the most appropriate pharmacotherapy?",
    "options": {
      "A": "Neostigmine to improve neuromuscular transmission and reverse the muscle weakness",
      "B": "A single 0.5 mg dose of atropine followed by observation for improvement",
      "C": "Atropine titrated to drying of bronchial secretions, plus pralidoxime",
      "D": "Physostigmine to counteract the central cholinergic effects of the insecticide"
    },
    "answer": "C",
    "explanation": "This is a cholinergic crisis from organophosphate poisoning. Atropine blocks muscarinic effects and is titrated to clearing of bronchial secretions and oxygenation, often in repeated large doses, while pralidoxime reactivates the enzyme and treats nicotinic weakness before aging occurs. Neostigmine and physostigmine are cholinesterase inhibitors that would worsen the toxicity. A single small atropine dose is inadequate for the volume of secretions and bradycardia.",
    "id": 288
  },
  {
    "domain": "toxicology",
    "chapter": 31,
    "question": "A 78-year-old woman with chronic kidney disease takes digoxin, amiodarone, and furosemide. She reports nausea, anorexia, and yellow-tinted vision for four days. Heart rate is 38/min, with an electrocardiogram showing a junctional rhythm and frequent ventricular ectopy. Potassium is 6.3 mEq/L and creatinine is 2.4 mg/dL. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Intravenous calcium gluconate as the first-line treatment for the hyperkalemia and the junctional rhythm",
      "B": "Digoxin-specific antibody fragments given intravenously to bind the drug and restore rhythm",
      "C": "Intravenous amiodarone loading dose to suppress the frequent ventricular ectopy seen on the tracing",
      "D": "Urgent hemodialysis to remove the circulating digoxin and the excess potassium"
    },
    "answer": "B",
    "explanation": "Symptomatic digoxin toxicity with hyperkalemia and a life-threatening bradyarrhythmia is the indication for antibody fragments, which bind digoxin and rapidly correct both the rhythm and the potassium. Further antiarrhythmic therapy such as amiodarone adds negative effects on conduction and, by interacting with digoxin, contributed to this problem. Dialysis does not remove digoxin effectively because of its large volume of distribution. Calcium is traditionally avoided and does not treat the underlying cause.",
    "id": 289
  },
  {
    "domain": "toxicology",
    "chapter": 31,
    "question": "A 20-year-old football player collapses during preseason practice on a hot, humid day. He is combative and confused. Rectal temperature is 41.6 C, heart rate is 150/min, and blood pressure is 96/54 mm Hg. Which of the following is the most appropriate immediate treatment?",
    "options": {
      "A": "Oral acetaminophen and a rapid intravenous bolus of room-temperature saline over thirty minutes",
      "B": "Intravenous dantrolene given as is done for malignant hyperthermia during anesthesia",
      "C": "Lorazepam and haloperidol for agitation, followed by a careful evaluation for central nervous system infection",
      "D": "Immediate whole-body cold water immersion with continuous temperature monitoring"
    },
    "answer": "D",
    "explanation": "Exertional heat stroke is a medical emergency in which survival depends on the speed of cooling, and cold water immersion lowers core temperature faster than any other method; cooling is stopped near 39 C. Antipyretics do not work because the hypothalamic set point is normal. Dantrolene has not been shown to help in heat stroke. Sedating and searching for infection delays cooling, and haloperidol may impair heat loss.",
    "id": 290
  },
  {
    "domain": "toxicology",
    "chapter": 31,
    "question": "A 66-year-old man with bipolar disorder takes lithium. Two weeks ago his primary care physician added lisinopril and hydrochlorothiazide for hypertension. He now has a coarse tremor, nausea, and unsteady gait but is alert and oriented. Serum lithium is 2.6 mEq/L and creatinine has risen from 1.1 to 1.8 mg/dL. Which of the following is the most appropriate management?",
    "options": {
      "A": "Stop lithium and the interacting drugs, then give isotonic saline with serial lithium levels",
      "B": "Give activated charcoal and repeat the dose every four hours to bind the lithium",
      "C": "Give a loop diuretic to force diuresis and thereby increase urinary lithium excretion",
      "D": "Proceed to hemodialysis now because any lithium level above 2.5 mEq/L always requires it"
    },
    "answer": "A",
    "explanation": "This is chronic lithium toxicity precipitated by an ACE inhibitor and a thiazide, which reduce lithium clearance. With preserved consciousness and modest renal impairment, treatment is to stop the drugs, restore volume with isotonic saline, and follow levels, with dialysis reserved for higher levels, impaired kidney function with significant levels, or neurologic deterioration. Charcoal does not bind lithium. Loop diuretics worsen volume depletion and lithium retention, and there is no fixed threshold of 2.5 that mandates dialysis.",
    "id": 291
  },
  {
    "domain": "capstone",
    "chapter": 32,
    "question": "A 58-year-old man with alcohol-associated cirrhosis has tense ascites and presents with fever and diffuse abdominal tenderness. Temperature is 38.4 C, heart rate 108/min, and blood pressure 98/60 mm Hg. Diagnostic paracentesis returns cloudy fluid with an absolute neutrophil count of 520 cells per microliter. Creatinine is 1.9 mg/dL, up from 1.0. Which of the following is the most appropriate management?",
    "options": {
      "A": "Intravenous ceftriaxone plus intravenous albumin on the first and third days of treatment",
      "B": "Large-volume paracentesis with furosemide and continued observation for two days off antibiotics",
      "C": "Oral norfloxacin alone with discharge home and a repeat paracentesis in one week",
      "D": "Intravenous vancomycin and meropenem with immediate placement of a peritoneovenous shunt"
    },
    "answer": "A",
    "explanation": "An ascitic neutrophil count of 250 cells per microliter or more establishes spontaneous bacterial peritonitis, which requires an intravenous third-generation cephalosporin. Albumin lowers the risk of hepatorenal syndrome and death, and the rising creatinine makes it especially important. Diuretics and large-volume drainage without treatment leave the infection untreated and may worsen kidney function. Oral prophylactic therapy alone is inadequate for active infection in a febrile patient. Broad intravenous coverage and a shunt are unnecessary and the shunt is not part of management.",
    "id": 292
  },
  {
    "domain": "capstone",
    "chapter": 32,
    "question": "A 47-year-old man with rheumatoid arthritis stopped taking prednisone 10 mg daily abruptly after eight months of use because he ran out of tablets. He now has vomiting, abdominal pain, and dizziness. Blood pressure is 78/44 mm Hg, sodium is 127 mEq/L, potassium is 4.4 mEq/L, and glucose is 58 mg/dL. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Perform a cosyntropin stimulation test and wait for the result before treatment",
      "B": "Give oral fludrocortisone and recheck electrolytes in the morning",
      "C": "Begin a norepinephrine infusion and avoid corticosteroids until cultures return",
      "D": "Administer intravenous hydrocortisone with isotonic saline and dextrose without delay"
    },
    "answer": "D",
    "explanation": "Abrupt cessation of long-term glucocorticoid use causes adrenal crisis, with hypotension, hyponatremia, and hypoglycemia (hyperkalemia is typical of primary rather than glucocorticoid-withdrawal adrenal insufficiency), and the treatment is immediate intravenous hydrocortisone plus fluids and dextrose, because delay is fatal. Testing can follow later and should never postpone therapy in an unstable patient. Fludrocortisone is not an adequate initial treatment, and oral medication is unreliable with vomiting. Vasopressors alone do not correct the missing cortisol and withholding steroids would prolong shock.",
    "id": 293
  },
  {
    "domain": "capstone",
    "chapter": 32,
    "question": "A 66-year-old woman has two months of low back pain and fatigue. Hemoglobin is 8.9 g/dL with normocytic indices, calcium is 12.4 mg/dL, creatinine is 2.6 mg/dL, total protein is 9.2 g/dL, and albumin is 3.1 g/dL. Erythrocyte sedimentation rate is 112 mm/hour. Spine radiographs show multiple lytic lesions. Which of the following is the most appropriate next test?",
    "options": {
      "A": "Technetium bone scan to identify the full extent of her skeletal metastases",
      "B": "Parathyroid hormone level to evaluate for primary hyperparathyroidism as the cause of hypercalcemia",
      "C": "Serum protein electrophoresis with immunofixation and serum free light chain assay",
      "D": "Percutaneous renal biopsy first, to determine the exact cause of the kidney injury"
    },
    "answer": "C",
    "explanation": "The combination of anemia, hypercalcemia, renal insufficiency, lytic bone lesions, and a protein gap (total protein exceeding albumin by more than 4 g/dL) strongly suggests multiple myeloma, and the next test is serum protein electrophoresis with immunofixation plus free light chains, followed by bone marrow biopsy. A bone scan misses lytic myeloma lesions because uptake is low. Hyperparathyroidism does not explain lytic lesions and anemia. A renal biopsy is premature before identifying the plasma cell disorder, and the chance of finding myeloma cast nephropathy is addressed through the light chain results.",
    "id": 294
  },
  {
    "domain": "capstone",
    "chapter": 32,
    "question": "A 39-year-old man with HIV infection and a CD4 count of 38 cells per microliter, who has not taken antiretroviral therapy for two years, has a two-week history of progressive headache and low-grade fever. Neck stiffness is mild. He has no focal deficits or papilledema, and a noncontrast head CT is normal. Which of the following is the most appropriate next step?",
    "options": {
      "A": "Empiric pyrimethamine and sulfadiazine started today for presumed cerebral toxoplasmosis in this patient",
      "B": "Lumbar puncture with opening pressure, cryptococcal antigen, and cerebrospinal fluid culture",
      "C": "Start antiretroviral therapy today and reassess the headache in two weeks",
      "D": "Stereotactic brain biopsy to distinguish between lymphoma and opportunistic infection"
    },
    "answer": "B",
    "explanation": "Subacute headache and fever in a patient with a CD4 count under 100 raises concern for cryptococcal meningitis, and lumbar puncture with measurement of opening pressure and cryptococcal antigen is the diagnostic step, since elevated pressure needs therapeutic drainage. A normal imaging study with no mass lesion argues against toxoplasmosis, and empiric treatment would delay diagnosis. Antiretroviral therapy started early in cryptococcal infection raises mortality, so it is deferred for several weeks. Biopsy is invasive and unnecessary.",
    "id": 295
  },
  {
    "domain": "capstone",
    "chapter": 32,
    "question": "A 45-year-old woman collapses at the end of a 14-hour flight. Blood pressure is 78/50 mm Hg, heart rate is 128/min, and oxygen saturation is 86 percent on 4 L/min of oxygen. She has a distended jugular venous pulse. Bedside echocardiography shows a dilated, hypokinetic right ventricle and a small, underfilled left ventricle. She has no bleeding history. Which of the following is the most appropriate treatment?",
    "options": {
      "A": "Systemic thrombolytic therapy with alteplase, along with intravenous unfractionated heparin",
      "B": "Low-molecular-weight heparin alone, with a CT angiogram once she is stable",
      "C": "Placement of an inferior vena cava filter without any anticoagulant therapy",
      "D": "Large intravenous fluid boluses to raise right ventricular preload and blood pressure"
    },
    "answer": "A",
    "explanation": "Hypotension with right ventricular failure and a compatible setting defines high-risk pulmonary embolism, and in the absence of contraindications systemic thrombolysis is lifesaving, with heparin given concurrently. Low-molecular-weight heparin alone is the treatment for stable patients and is too slow here, and her instability should not wait for further imaging. A filter without anticoagulation addresses recurrence but not the clot burden. Large fluid boluses overdistend the failing right ventricle and impair left ventricular filling.",
    "id": 296
  },
  {
    "domain": "capstone",
    "chapter": 32,
    "question": "A 27-year-old woman has foot swelling, a malar rash, and joint pain. Urinalysis shows 3+ blood and protein, with red cell casts, and the urine protein to creatinine ratio is 3.4 g/g. Creatinine is 1.4 mg/dL, C3 and C4 are low, and anti-double-stranded DNA antibodies are strongly positive. Which of the following is the most appropriate next step in management?",
    "options": {
      "A": "Start cyclophosphamide immediately, without any further evaluation of the kidney tissue",
      "B": "Treat with prednisone alone and repeat the urinalysis and creatinine in three months",
      "C": "Prescribe hydroxychloroquine as monotherapy and monitor serum creatinine every month",
      "D": "Perform a kidney biopsy to determine the class of lupus nephritis"
    },
    "answer": "D",
    "explanation": "Proteinuria, hematuria with casts, and rising creatinine in lupus suggest glomerulonephritis, and kidney biopsy establishes the histologic class and the degree of activity and chronicity, which determine the intensity of immunosuppression. Starting cytotoxic treatment without classification may over- or undertreat. Steroid monotherapy is inadequate for proliferative disease. Hydroxychloroquine is recommended for all patients with lupus as a background drug but does not treat active nephritis on its own.",
    "id": 297
  },
  {
    "domain": "capstone",
    "chapter": 32,
    "question": "An 84-year-old woman becomes agitated and tries to pull out her intravenous line on the evening after hip fracture repair. Vital signs are stable, oxygen saturation is 96 percent, pain is controlled, and bladder scan shows no retention. She takes no sedatives or anticholinergic drugs at home. She is disoriented to place and fluctuates in attention. Which of the following is the most appropriate management?",
    "options": {
      "A": "Haloperidol 5 mg intramuscularly every hour until she is calm and sleeping through the night",
      "B": "Reorientation, glasses and hearing aids, sleep protection, early mobilization, and avoidance of restraints",
      "C": "Physical restraints and a scheduled benzodiazepine to prevent injury to herself and staff",
      "D": "Discharge her home with family supervision because delirium resolves spontaneously within days"
    },
    "answer": "B",
    "explanation": "This is postoperative delirium, with acute onset, fluctuating attention, and disorientation. Treatment is to correct contributors and provide supportive measures: orientation, sensory aids, sleep hygiene, mobilization, and removing lines and catheters, with restraints avoided. Repeated antipsychotic doses can cause oversedation, QT prolongation, and falls, and are reserved for dangerous agitation. Benzodiazepines and restraints worsen delirium. She is not ready for discharge, since delirium signals acute illness and needs monitoring.",
    "id": 298
  },
  {
    "domain": "capstone",
    "chapter": 32,
    "question": "A 71-year-old man with end-stage kidney disease is told that his kidney function has fallen enough to require dialysis. He is alert, understands that without dialysis he will likely die within weeks, and says he is tired of hospitals and does not want treatment. His daughter insists that he must start dialysis and asks the physician to ignore his refusal. Which of the following is the most appropriate response?",
    "options": {
      "A": "Confirm his decision-making capacity, explore his reasons, and respect his informed refusal while offering palliative care",
      "B": "Begin dialysis because the daughter, as the closest relative, holds the final authority over his care",
      "C": "Arrange an emergency court order for dialysis since refusal of life-sustaining therapy is unethical",
      "D": "Request psychiatric commitment because wanting to forgo treatment shows a lack of decision-making capacity"
    },
    "answer": "A",
    "explanation": "A patient with decision-making capacity has the right to refuse any treatment, including life-sustaining treatment, and the physician's task is to make sure that the decision is informed, voluntary, and consistent with his values, and to offer palliative and hospice support. A family member has no authority over a capable adult. Court intervention and psychiatric commitment are not appropriate responses to a capable, informed choice, and disagreement with a refusal does not demonstrate incapacity.",
    "id": 299
  },
  {
    "domain": "capstone",
    "chapter": 32,
    "question": "A 38-year-old man with long limbs and a pectus deformity reports sudden severe tearing chest pain radiating to the back. Blood pressure is 182/104 mm Hg in the right arm and 128/70 mm Hg in the left arm, and heart rate is 104/min. CT angiography shows a dissection of the ascending aorta. Which of the following is the most appropriate management?",
    "options": {
      "A": "Intravenous unfractionated heparin and urgent transfer to the catheterization laboratory for coronary angiography",
      "B": "Intravenous alteplase for presumed myocardial infarction, followed by repeat imaging in six hours",
      "C": "Intravenous esmolol to lower heart rate and blood pressure, with emergency surgical repair",
      "D": "Oral amlodipine with discharge, outpatient follow-up, and repeat imaging in about one week"
    },
    "answer": "C",
    "explanation": "Ascending (type A) aortic dissection is a surgical emergency, and while the patient is prepared for the operating room, impulse control with an intravenous beta-blocker lowers shear stress; a vasodilator is added only after the heart rate is controlled, to avoid reflex tachycardia. Heparin and thrombolytic therapy risk catastrophic bleeding and rupture. Delaying repair or sending the patient home risks death from tamponade or rupture. The marfanoid features suggest a heritable connective tissue disorder as the underlying cause.",
    "id": 300
  }
];
