from pathlib import Path

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


OUTPUT_DIR = Path(__file__).resolve().parent


def p(text: str, style: ParagraphStyle):
    return Paragraph(text.replace("\n", "<br/>"), style)


def build_pdf(filename: str, title: str, subtitle: str, sections: list[tuple[str, str]]):
    doc = SimpleDocTemplate(
        str(OUTPUT_DIR / filename),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title=title,
    )
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle("DocTitle", parent=styles["Heading1"], fontSize=16, leading=20, spaceAfter=10)
    subtitle_style = ParagraphStyle("Subtitle", parent=styles["Normal"], fontSize=10, leading=14, textColor="#334155", spaceAfter=12)
    h_style = ParagraphStyle("Heading", parent=styles["Heading2"], fontSize=12, leading=16, spaceBefore=8, spaceAfter=5)
    body_style = ParagraphStyle("Body", parent=styles["Normal"], fontSize=10, leading=14, spaceAfter=7)

    story = [p(title, title_style), p(subtitle, subtitle_style)]
    for heading, body in sections:
        story.append(p(heading, h_style))
        for block in body.split("\n\n"):
            story.append(p(block, body_style))
        story.append(Spacer(1, 2))
    doc.build(story)


JURISDICTION_COMMON = [
    (
        "1. Purpose and Use",
        "This template is a drafting baseline for master agreements and statements of work. It is intended for enterprise procurement, cross-border service delivery, and compliance-sensitive engagements. Replace bracketed fields before signature.",
    ),
    (
        "2. Governing Law and Jurisdiction Clause",
        "Governing Law and Jurisdiction. This Agreement is governed by the laws of [Jurisdiction], excluding conflict-of-law principles. Subject to the dispute mechanism selected below, courts located in [Venue] have exclusive jurisdiction over disputes arising out of or in connection with this Agreement.",
    ),
    (
        "3. Arbitration Option",
        "Any dispute, controversy, or claim arising out of or in connection with this Agreement will be finally resolved by arbitration under [Arbitration Rules]. The seat of arbitration is [Seat], the language is English, and the tribunal will consist of [one/three] arbitrator(s).",
    ),
    (
        "4. Interim and Injunctive Relief",
        "Nothing in this clause prevents either party from seeking urgent interim, injunctive, or protective relief from a court of competent jurisdiction to prevent unauthorized disclosure, misuse of confidential information, or irreparable harm to intellectual property rights.",
    ),
    (
        "5. Service of Process and Notices",
        "Each party appoints an authorized notice address in writing. Formal legal notices, including service of process where permitted, will be sent to those addresses and deemed received under the notice mechanics set out in the Agreement.",
    ),
    (
        "6. Mandatory Law Savings",
        "If mandatory law in any applicable jurisdiction overrides part of this clause, only the non-compliant portion will be adjusted to the minimum extent required, and the remainder of this clause will continue in full force.",
    ),
    (
        "7. Drafting Checklist",
        "- Confirm enforceability with local counsel.\n- Align with liability, indemnity, and data transfer clauses.\n- Confirm whether arbitration, court venue, or hybrid model is preferred.\n- Ensure consistency with parent-company and affiliate contracting structure.",
    ),
]


PRIVACY_COMMON = [
    (
        "1. Purpose and Request Scope",
        "Use this form to submit formal data-subject or consumer privacy requests. Requests can include access, correction, deletion/erasure, restriction, portability, objection, consent withdrawal, or other rights available under applicable law.",
    ),
    (
        "2. Requester Identity and Authority",
        "Requester must provide full legal name, contact details, jurisdiction of residence, relationship to the data subject, and proof of authority where acting as an authorized agent or representative.",
    ),
    (
        "3. Verification Requirements",
        "The organization may request reasonable verification evidence before processing a request. Processing timelines begin after sufficient verification is completed. Incomplete or unverifiable requests may be rejected or paused where permitted by law.",
    ),
    (
        "4. Request Detail Requirements",
        "Provide clear request type, relevant systems/services, date ranges, known identifiers, and expected outcome. Broad or unclear requests may require clarification before action is taken.",
    ),
    (
        "5. Lawful Exceptions and Limitations",
        "Requests may be denied, limited, or deferred where permitted by law, including legal privilege, security concerns, disproportionate burden, conflicting rights of others, fraud prevention obligations, or record-retention duties.",
    ),
    (
        "6. Response Handling",
        "Responses are issued within legal timelines applicable to the requester jurisdiction. Complex requests may require extensions where law permits. Final responses may include fulfillment, partial fulfillment, rejection basis, or appeal/escalation path.",
    ),
    (
        "7. Request Template Block",
        "To: Data Protection Officer / Privacy Team\nSubject: Privacy Rights Request\nRequest Type: [Specify]\nRequest Details: [Specify]\nIdentity and Contact Information: [Specify]\nVerification Attachments: [Specify]\nDeclaration: I confirm that this request is accurate and submitted in good faith.\nSignature and Date: [Specify]",
    ),
]


JURISDICTION_ADDENDA = {
    "india": "India Addendum: Consider arbitration seat and enforceability under Indian arbitration framework. Verify stamp duty, venue practicality, and governing law compatibility with procurement requirements.",
    "uk": "UK Addendum: Confirm whether England and Wales courts or arbitration is preferred. Review non-contractual obligations language and consistency with UK data protection commitments.",
    "eu": "EU Addendum: Select specific member-state law and venue. Validate compatibility with mandatory local procedural rules and cross-border data transfer obligations.",
    "us-delaware": "US (Delaware) Addendum: Confirm federal/state court venue preference, jury trial waiver strategy, and class-action language alignment where legally appropriate.",
    "singapore": "Singapore Addendum: Confirm SIAC framework, seat language, and emergency relief options. Validate consistency with regional enforcement strategy.",
    "uae-difc": "UAE (DIFC) Addendum: Confirm DIFC court/arbitration preference and enforceability route for onshore and offshore counterparties.",
}


PRIVACY_ADDENDA = {
    "india": "India Addendum: Map requests to Digital Personal Data Protection Act obligations where applicable, including consent withdrawal and grievance handling mechanics.",
    "uk": "UK Addendum: Include UK GDPR rights framing and UK-specific response/complaint escalation to supervisory authority where relevant.",
    "eu": "EU Addendum: Include GDPR article mapping and reference to supervisory authority complaint right in the relevant member state.",
    "us": "US Addendum: Support state-specific rights (for example CCPA/CPRA), including access, deletion, correction, and opt-out/limitation rights where applicable.",
    "singapore": "Singapore Addendum: Align request handling with PDPA access/correction obligations and lawful refusal conditions.",
    "uae": "UAE Addendum: Align request handling to applicable UAE personal data frameworks and sector-specific requirements where relevant.",
}


def main():
    jurisdiction_files = [
        ("jurisdiction-template-india.pdf", "Jurisdiction Selection Clause Template - India", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "india"),
        ("jurisdiction-template-uk.pdf", "Jurisdiction Selection Clause Template - United Kingdom", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "uk"),
        ("jurisdiction-template-eu.pdf", "Jurisdiction Selection Clause Template - European Union", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "eu"),
        ("jurisdiction-template-us-delaware.pdf", "Jurisdiction Selection Clause Template - United States (Delaware)", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "us-delaware"),
        ("jurisdiction-template-singapore.pdf", "Jurisdiction Selection Clause Template - Singapore", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "singapore"),
        ("jurisdiction-template-uae-difc.pdf", "Jurisdiction Selection Clause Template - UAE (DIFC)", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "uae-difc"),
    ]

    for filename, title, subtitle, key in jurisdiction_files:
        build_pdf(
            filename,
            title,
            subtitle,
            JURISDICTION_COMMON + [("8. Jurisdiction-Specific Guidance", JURISDICTION_ADDENDA[key]), ("9. Legal Validation", "This template is not legal advice. Final language must be validated by qualified legal counsel before execution.")],
        )

    privacy_files = [
        ("privacy-request-template-india.pdf", "Privacy Rights Request Template - India", "Comprehensive intake template for rights requests and verification workflows.", "india"),
        ("privacy-request-template-uk.pdf", "Privacy Rights Request Template - United Kingdom", "Comprehensive intake template for rights requests and verification workflows.", "uk"),
        ("privacy-request-template-eu.pdf", "Privacy Rights Request Template - European Union / EEA", "Comprehensive intake template for rights requests and verification workflows.", "eu"),
        ("privacy-request-template-us.pdf", "Privacy Rights Request Template - United States", "Comprehensive intake template for rights requests and verification workflows.", "us"),
        ("privacy-request-template-singapore.pdf", "Privacy Rights Request Template - Singapore", "Comprehensive intake template for rights requests and verification workflows.", "singapore"),
        ("privacy-request-template-uae.pdf", "Privacy Rights Request Template - UAE", "Comprehensive intake template for rights requests and verification workflows.", "uae"),
    ]

    for filename, title, subtitle, key in privacy_files:
        build_pdf(
            filename,
            title,
            subtitle,
            PRIVACY_COMMON + [("8. Jurisdiction-Specific Guidance", PRIVACY_ADDENDA[key]), ("9. Legal Validation", "This template is not legal advice. Final handling and response determinations must follow applicable law and qualified legal counsel direction.")],
        )

    build_pdf(
        "legal-risk-dashboard.pdf",
        "Legal Risk Dashboard (Board Summary)",
        "Governance summary for legal, compliance, and executive oversight.",
        [
            ("1. Executive Summary", "Current legal framework establishes a strong company-protective posture across operational, financial, compliance, IP, and dispute domains."),
            ("2. RAG Snapshot", "Operational: Green\nFinancial: Green\nRegulatory/Compliance: Amber\nIntellectual Property: Green\nDispute/Litigation: Amber"),
            ("3. Control Highlights", "Liability cap fallback, IP retention, verification-gated rights handling, suspension rights for payment and security events, and jurisdiction framework controls."),
            ("4. Residual Risk", "Residual exposure remains jurisdiction-specific and contract-specific, requiring annual legal mapping and counsel validation for high-risk markets."),
            ("5. Next 90-Day Actions", "Finalize jurisdiction annexes, align MSA/SOW controls, maintain policy revision logs, and implement legal redline escalation workflow."),
            ("6. Legal Notice", "This dashboard is internal governance material and does not constitute legal advice."),
        ],
    )


if __name__ == "__main__":
    main()
