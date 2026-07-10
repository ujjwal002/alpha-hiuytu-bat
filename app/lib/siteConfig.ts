/**
 * Site-wide feature configuration.
 *
 * This is the ONLY file you need to edit when your financing and booking
 * accounts go live. Both features ship disabled/empty so nothing appears
 * on the site until the real accounts exist.
 */

export const FINANCING = {
  /**
   * ⚠️ Flip to true ONLY after your lender agreement is approved.
   * Advertising financing terms you don't yet offer is a legal problem,
   * not just a marketing one.
   */
  enabled: false,

  /** e.g. "GreenSky", "Hearth", "Acorn Finance" — whichever approves you */
  lenderName: "our financing partner",

  /**
   * Your personalized application link from the lender dashboard,
   * e.g. "https://www.greensky.com/apply/XXXXX".
   * Leave "" to send visitors to the quote form instead.
   */
  applyUrl: "",

  /**
   * Representative example used by the payment estimator.
   * ⚠️ Set these to match a REAL plan from your signed lender agreement,
   * and replace `disclosure` below with the lender-provided disclosure
   * language (they will give you exact required wording).
   */
  representativeApr: 9.99, // percent
  termMonths: 120,
  minProject: 8000,
  maxProject: 40000,
  defaultProject: 18000,

  disclosure:
    "Monthly payment shown is an estimate for illustration only, based on a representative APR and term. Financing is subject to credit approval; your actual rate, term, and payment may differ. This is not a commitment to lend.",
};

export const BOOKING = {
  /**
   * Your scheduling link (Calendly, Cal.com, or your CRM's booking page),
   * e.g. "https://calendly.com/stoneworksremodeling/free-consultation".
   * Leave "" to hide all booking buttons.
   */
  url: "",

  /** Button label shown next to the quote form */
  label: "Book your free consultation",
};