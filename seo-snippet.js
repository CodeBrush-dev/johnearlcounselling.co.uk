// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.johnearlcounselling.co.uk",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.johnearlcounselling.co.uk/","title_tag":"Counselling Eastbourne & online counselling UK | John Earl","meta_description":"Adult counselling in Eastbourne and online counselling UK for anxiety, depression, low self-esteem, stress and trauma in a safe, non-judgemental space."},{"page_url":"https://www.johnearlcounselling.co.uk/cost-fees","title_tag":"Therapist Eastbourne & online counselling UK | John Earl","meta_description":"Qualified therapist in Eastbourne offering adult counselling, online counselling UK and low-cost options. Transparent fees for supportive, confidential therapy."}],"keywords":["counselling eastbourne","therapist eastbourne","anxiety therapy east sussex","online counselling uk","depression support eastbourne","relationship counselling east sussex","trauma therapy eastbourne","low self-esteem counselling","adult counselling eastbourne","stress management east sussex"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.johnearlcounselling.co.uk/#localbusiness",
  "name": "John Earl Counselling",
  "url": "https://www.johnearlcounselling.co.uk/",
  "description": "Adult counselling with John Earl BSc.(Hons) Dip.Couns. MNCPS (Accred.) in Eastbourne, East Sussex. Offering confidential, non-judgemental therapy for adults 18+ both face to face and online across the UK.",
  "image": [
    "https://static.wixstatic.com/media/86e566_bb6363a247654dd5ba90b9604a39d7bf~mv2.jpg/v1/crop/x_0,y_358,w_3718,h_4570/fill/w_384,h_472,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/OB%20-%2019.jpg",
    "https://static.wixstatic.com/media/86e566_b190b777739140f486b1cb2f061f322c~mv2.jpg/v1/crop/x_201,y_738,w_2818,h_4073/fill/w_462,h_722,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sylwia-bartyzel-e0VnBbc1mFk-unsplash.jpg",
    "https://static.wixstatic.com/media/86e566_f5ea1941e6374988b1be060beca87163~mv2.jpg/v1/fill/w_468,h_391,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Therapy%20Room%202.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/86e566_e4abb4ff9edb47bea8afa79ea6a73e4d%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/86e566_e4abb4ff9edb47bea8afa79ea6a73e4d%7Emv2.jpg",
  "email": "mailto:johnearlcounselling@gmail.com",
  "telephone": "+447765660765",
  "priceRange": "£50 per 50 minute session",
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Eastbourne, East Sussex"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "John Earl",
    "jobTitle": "Counsellor",
    "description": "BSc.(Hons) Psychology, Diploma in Counselling, Accredited Registrant of the National Counselling & Psychotherapy Society (NCPS). Provides adult counselling for a wide range of psychological and emotional issues.",
    "image": "https://static.wixstatic.com/media/86e566_bb6363a247654dd5ba90b9604a39d7bf~mv2.jpg/v1/crop/x_0,y_358,w_3718,h_4570/fill/w_384,h_472,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/OB%20-%2019.jpg",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "BSc.(Hons) Psychology"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "National Counselling & Psychotherapy Society (NCPS)"
    }
  },
  "sameAs": [],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Eastbourne",
    "addressRegion": "East Sussex",
    "addressCountry": "GB"
  },
  "knowsAbout": [
    "Adult counselling",
    "Anxiety",
    "Depression",
    "Low self-esteem",
    "Relationship difficulties",
    "Workplace issues",
    "Stress",
    "Anger",
    "Domestic violence",
    "Adult survivors of non-recent child abuse",
    "Trauma",
    "PTSD",
    "Chronic pain conditions",
    "Situational anxiety",
    "Transactional Analysis",
    "Person Centred Counselling",
    "Inner Child work"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Face to face counselling session",
      "description": "Weekly 50 minute adult counselling session held face to face in Eastbourne town centre.",
      "price": "50",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "eligibleCustomerType": "https://schema.org/Individual"
    },
    {
      "@type": "Offer",
      "name": "Online counselling session",
      "description": "Weekly 50 minute online adult counselling session available to clients across the UK.",
      "price": "50",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "eligibleCustomerType": "https://schema.org/Individual"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Counselling services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Adult counselling (18+)",
          "description": "Short and long term counselling for adults 18+ covering a wide range of psychological and emotional issues, offered in person in Eastbourne or online across the UK."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Low-cost counselling",
          "description": "Limited number of low-cost counselling spaces available for carers, people in receipt of government benefits, and students (subject to current evidence)."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
