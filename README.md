# DealPool — Smart Group-Buying & Local Services Pool Platform

**Buyers aggregate demand. Merchants compete to win.**

DealPool is a responsive, zero-dependency Single-Page Web Application (SPA) built for group buying across **physical products** and **local neighborhood services** (apartment cleaning, appliance repair, salon appointment slots, and more).

---

## ✨ Key Features

- **Dynamic Tier Pricing Engine:** Real-time price drops across **Tier 1 → Tier 2 → Tier 3** as more participants join a pool.
- **100% Safe Refundable Deadline:** Every deal displays a clear **Refundable Deadline** badge and live countdown timer. Buyers can cancel anytime before the deadline or get an automatic 100% refund if the seller's minimum quantity isn't reached.
- **Products + Local Services:** Supports bulk product deals (electronics, kitchenware, fitness, hostel essentials) as well as time-slot service bookings (salon slots, home deep cleaning, AC servicing).
- **Multi-Photo Product Gallery & Specs Modal:** Click any product or service card to view studio image galleries, full specifications, tier milestones, and interactive quantity/slot selection.
- **Minimal Seller Dashboard:** Merchants can launch a new deal pool in 30 seconds by adding product photos, MRP, Tier 1/2/3 pricing, and a Refundable Deadline—eliminating up to 40% Customer Acquisition Cost (CAC) spent on digital ads.
- **Interactive Payment & Cancellation Animations:** Smooth visual feedback when joining a pool or claiming an instant refund in **My Joined Pools**.

---

## 🛠️ Tech Stack

- **Frontend Structure:** `HTML5` ([`index.html`](index.html))
- **Styling & Responsive UI:** `CSS3` Custom Properties, Flexbox/Grid, Outfit & DM Sans typography ([`styles.css`](styles.css))
- **Application Logic:** `Vanilla JavaScript (ES6+)` Dynamic Tier Calculator & State Engine ([`app.js`](app.js))
- **Persistence:** Browser `localStorage` (JSON state persistence for pools, orders, and custom seller listings)

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/dealpool.git
   cd dealpool
   ```
2. Open [`index.html`](index.html) directly in any modern web browser (Chrome, Edge, Firefox, Safari) — **no build step or server required!**
3. *(Optional)* To serve over a local static server:
   ```bash
   npx serve .
   ```

---

## 📂 Project Structure

```text
dealpool/
├── index.html       # Main Single-Page Application layout & modals
├── styles.css       # Clean light-theme UI styles & micro-animations
├── app.js           # Dynamic tier pricing, countdowns, localStorage & Seller logic
├── airfryer.jpg     # Custom product studio asset
├── slides/          # 1080p Hackathon presentation slides
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```
