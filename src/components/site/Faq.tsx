import Reveal from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./Navbar";

const faqs = [
  {
    q: "Who is Dr. Jayesh Sharma?",
    a: "Dr. Jayesh Sharma is a Cancer Surgeon and Surgical Oncologist based at ITSA Hospital, Vidhan Sabha Road, opposite Ambuja Mall, Raipur, Chhattisgarh. He has over 25 years of experience in cancer surgery, with special expertise in breast, oral and head-and-neck, and abdominal cancers, including complex cases. He treats patients across Chhattisgarh and consults with patients across India and abroad via remote second opinions on WhatsApp at +91 626 1100 991.",
  },
  {
    q: "What types of cancer does Dr. Sharma treat?",
    a: "Dr. Sharma performs surgery for a wide range of cancers, including breast cancer, oral and head-and-neck cancers, stomach and colorectal cancers, hepato-pancreato-biliary cancers (liver, pancreas, bile duct), thoracic cancers (lung and chest), and soft tissue sarcomas. He also handles complex and advanced cases referred from other hospitals, including patients who have been told elsewhere that surgery is not possible.",
  },
  {
    q: "Where is the clinic located and how do I book an appointment?",
    a: "Dr. Sharma sees patients at ITSA Hospital, Vidhan Sabha Road, opposite Ambuja Mall, Raipur. The fastest way to book an appointment is to send a WhatsApp message to +91 626 1100 991 — the clinic team will confirm a time, usually the same day. Patients can also use the contact form on this website if they prefer not to use WhatsApp.",
  },
  {
    q: "Can I get a cancer second opinion from Dr. Sharma without traveling to Raipur?",
    a: "Yes. Dr. Sharma offers remote second opinions on WhatsApp for patients across India and abroad. Send your biopsy reports, scan images (CT, MRI, PET-CT), blood tests, and a brief summary of the patient's history to +91 626 1100 991. Most second opinions are reviewed within 24 hours. While Dr. Sharma is happy to provide guidance so you can receive treatment close to home, many patients do choose to travel to Raipur for complex surgeries after their initial online consultation.",
  },
  {
    q: "What should I bring to my first consultation?",
    a: "Please bring all original reports and scan films — biopsy report, CT or MRI or PET-CT scans (films and CD), blood tests, and any prescriptions or discharge summaries from previous hospitals. Send everything you have on WhatsApp before the appointment and we will guide you on what is essential. The patient should ideally be accompanied by at least one close family member for the consultation.",
  },
  {
    q: "How quickly can cancer surgery be scheduled if it's needed?",
    a: "In most cases surgery can be scheduled within 1 week of the decision to operate, depending on the type of cancer and the patient's fitness for surgery. Some cancers require chemotherapy or other treatment before surgery — Dr. Sharma will explain the right sequence for your specific case. Urgent cases are prioritised and can be operated on sooner when clinically appropriate.",
  },
  {
    q: "We have been told the cancer is inoperable or that surgery isn't an option. Should we still consult Dr. Sharma?",
    a: "Yes — please come for a second opinion before accepting that surgery is not possible. In many cases, a fresh review of imaging and an updated assessment reveals a surgical option that was not considered earlier. Dr. Sharma regularly operates on complex and advanced cases that other centres have declined. Even when surgery truly is not the right answer, you will leave with clarity on what the best next step is.",
  },
  {
    q: "In breast cancer, can the breast be saved?",
    a: "In most early and many advanced breast cancers, the breast can be saved through breast-conservation surgery (lumpectomy) combined with radiation. Dr. Sharma's approach is to preserve the breast wherever it is safely possible, and to use oncoplastic techniques so that the cosmetic result is good. Where mastectomy is unavoidable, reconstruction options are discussed openly with the patient so that no woman has to choose between her health and her sense of self.",
  },
  {
    q: "Will cancer surgery affect my appearance, speech, or quality of life?",
    a: "This is one of the most important questions a patient can ask, and it deserves an honest answer for each specific case. Modern surgical techniques — including oncoplastic surgery for breast cancer, voice and speech-preserving surgery for head-and-neck cancers, and minimal-access (laparoscopic) surgery for abdominal cancers — are designed to remove cancer while preserving function and appearance as much as possible. During the consultation, Dr. Sharma will explain exactly what to expect in your case, including what will be preserved and what cannot be.",
  },
  {
    q: "What kind of diet should a cancer patient follow during and after treatment?",
    a: "There is no single 'cancer diet,' but the principles are clear: eat real, freshly cooked Indian food with plenty of vegetables, dals, and adequate protein; avoid ultra-processed and packaged foods; and stay well hydrated. During chemotherapy, soft and easy-to-digest meals are usually better tolerated. After treatment, a sustainable Indian diet — focused on whole grains, seasonal vegetables, dals, dairy, and home-cooked food — supports recovery and reduces the risk of recurrence. Everyone receives personalised advice regarding their diet plan.",
  },
  {
    q: "Are there any foods or supplements that should be avoided during cancer treatment?",
    a: "Yes — please avoid unproven 'miracle' supplements, very-high-dose antioxidant tablets, and herbal mixtures from unknown sources, as some of these can interfere with chemotherapy or radiation. Avoid raw or undercooked foods during chemotherapy because immunity is lower. There is no need to give up turmeric, ginger, or normal Indian spices used in cooking. Before starting any supplement, immunity booster, or 'cancer cure' product that a relative or social media has recommended, please check with Dr. Sharma first.",
  },
  {
    q: "How is the cost of cancer treatment estimated, and does insurance cover it?",
    a: "The cost of cancer treatment depends on the type of cancer, the stage, and the treatment plan — which is why we provide a clear written estimate after the first consultation, not before. Most cancer surgeries and treatments are covered by health insurance and by Ayushman Bharat at ITSA Hospital. The clinic team will help patients understand their insurance entitlement and assist with the paperwork. Cost should never be the reason a patient avoids a consultation — please come and discuss, and we will find the right path for your situation.",
  },
  {
    q: "Should we tell the patient that they have cancer, or keep it from them?",
    a: "This is one of the hardest questions families face, and there is no single right answer. In Dr. Sharma's experience, patients almost always sense the truth even when families try to protect them, and the silence often causes more anxiety than the diagnosis itself. Where the patient is mentally and emotionally capable of understanding, gently sharing the truth — at the right pace, with the family present — usually leads to better treatment cooperation and a calmer recovery. Dr. Sharma is happy to be part of that conversation with the family and patient together, and to help frame it in a way that gives hope without dishonesty.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="container max-w-4xl">
        <Reveal>
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Questions, <em className="text-[#7B509A]">answered.</em></h2>
            <div className="gold-divider my-7" />
          </div>
        </Reveal>

        <div className="mt-12 space-y-8">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 30}>
              <article className="border-b border-border/60 pb-7">
                <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug">
                  {f.q}
                </h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{f.a}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-center text-foreground/75">
            Have a question we haven't answered?{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#7B509A] font-medium hover:underline">
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp Dr. Sharma at +91 626 1100 991
            </a>{" "}
            — most messages get a same-day reply.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
