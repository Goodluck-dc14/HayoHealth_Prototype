# SRS Implementation Matrix (detailed)

This file maps the SRS functional and non-functional requirements to the current implementation in this repository. Use this as an appendix for your Google Doc and in your video to explain which items are implemented, mocked, or planned.

## Summary

- Repository type: Frontend prototype (React + Vite)
- Data: UI uses dummy/mock data (no live backend; see README note)

## Functional Requirements (FR)

- FR1 — User Management

  - Status: UI implemented (login UI with role selection, patient forms and Add Patient).
  - Backend auth, persistence, and registration endpoints: NOT IMPLEMENTED (planned).

- FR2 — Card Write/Read (NFC)

  - Status: NOT IMPLEMENTED. The UI contains prompts and placeholders (e.g., `FrontDesk` text) but there is no WebNFC/NDEF or native NFC integration.

- FR3 — Central Database / Sync

  - Status: NOT IMPLEMENTED. No API clients, fetch/axios calls, or backend endpoints are present in this repo.

- FR4 — Coverage Display

  - Status: IMPLEMENTED (UI only). Coverage and contract screens exist in `components/hospital/FrontDesk.tsx`, `components/insurance/Contracts.tsx`, and `components/insurance/ClaimReview.tsx`.

- FR5 — AI Analysis

  - Status: PARTIAL / MOCKED. FraudConsole and billing UI show example alerts. No ML models or analytics backend implemented.

- FR6 — Audit Trail

  - Status: PARTIAL / UI ONLY. `components/insurance/Reports.tsx` contains an Audit Log UI built from mock entries; persistent logging is not implemented.

- FR7 — Lost Card Replacement
  - Status: NOT IMPLEMENTED. Workflow is planned but requires backend endpoints and card lifecycle management.

## Non-Functional Requirements (NFR)

- NFR1 — Security (encryption, RBAC): Not implemented (backend concern).
- NFR2 — Performance: Not applicable for frontend-only prototype; target SLAs are documented in SRS.
- NFR3 — Usability: UI is designed for usability (multilingual placeholders can be added); this is implemented as design work only.
- NFR4 — Scalability: Backend/infrastructure work required; not implemented here.
- NFR5 — Auditability: UI exists; persistence not implemented.
- NFR6 — Regulatory Compliance: Architecture notes in SRS; enforcement requires backend and legal review.
- NFR7 — Reliability: Sync/offline behaviors are not implemented.

## Where mock/dummy data is used (examples)

- `components/insurance/Reports.tsx` — `auditLogs` array used to populate the Audit Log UI.
- `components/hospital/Dashboard.tsx` — sample claims data used in charts.
- `components/hospital/Billing.tsx` and `components/insurance/FraudConsole.tsx` — example alerts and billing entries are mocked for display.
- Many other components use placeholder arrays or hard-coded objects to illustrate UI states.

If you want, I can extract these mocks into a single `mocks/` folder or create `mock-data.ts` to centralize them for clarity.

## Recommended wording to include in SRS / Google Doc

Add a short paragraph in SRS or the submission Google Doc stating: "This repository is a frontend prototype that demonstrates UI flows. Data shown are mock/dummy data for demonstration. Backend and hardware integrations are planned and described in the SRS but are not included in this submission."
