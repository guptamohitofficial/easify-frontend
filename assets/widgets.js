!(function (e, i, s) {
  const t = [
      "ReferrerWidget",
      "ReferrerSearchBar",
      "ReferrerLatestJobs",
      "ReferrerMeetTheTeam",
      "ReferrerFloatingLink",
      "ReferrerYourRatings",
      "ReferrerTestimonials",
      "ReferrerTestimonialsGrid",
      "ReferrerCandidateRegistration",
      "ReferrerReferral",
    ],
    r = {
      ReferrerWidget: {
        script: "https://widget.refari.co/static/widget.1d6fac23.js",
        style: "https://widget.refari.co/static/widget.ec33076f.css",
      },
      ReferrerSearchBar: {
        script: "https://widget.refari.co/static/searchBar.37787c36.js",
        style: "https://widget.refari.co/static/searchBar.34a67c35.css",
      },
      ReferrerLatestJobs: {
        script: "https://widget.refari.co/static/latestJobs.56ea3a61.js",
        style: "https://widget.refari.co/static/latestJobs.14befdd8.css",
      },
      ReferrerTestimonials: {
        script: "https://widget.refari.co/static/testimonials.d74cc291.js",
        style: "https://widget.refari.co/static/testimonials.df78d45d.css",
      },
      ReferrerTestimonialsGrid: {
        script: "https://widget.refari.co/static/testimonialsGrid.ec4f8bc8.js",
        style: "https://widget.refari.co/static/testimonialsGrid.b0fe57e3.css",
      },
      ReferrerMeetTheTeam: {
        script: "https://widget.refari.co/static/meetTheTeam.7f20fd7a.js",
        style: "https://widget.refari.co/static/meetTheTeam.b31c1ef2.css",
      },
      ReferrerFloatingLink: {
        script: "https://widget.refari.co/static/floatingLink.83f4d2e7.js",
        style: "https://widget.refari.co/static/floatingLink.5b717d08.css",
      },
      ReferrerYourRatings: {
        script: "https://widget.refari.co/static/yourRatings.bc477953.js",
        style: "https://widget.refari.co/static/yourRatings.1b8143e2.css",
      },
      ReferrerCandidateRegistration: {
        script:
          "https://widget.refari.co/static/candidateRegistration.8a59e33b.js",
        style:
          "https://widget.refari.co/static/candidateRegistration.3eccfadb.css",
      },
      ReferrerReferral: {
        script: "https://widget.refari.co/static/referral.f94dd156.js",
        style: "https://widget.refari.co/static/referral.b31c1ef2.css",
      },
    };
  let a = [];
  function n(i) {
    const t = e[s].widgets[i];
    return t.isScriptReady && t.isLinkReady;
  }
  function d(i) {
    a.forEach(function (t) {
      t.name === i &&
        (t.cb &&
          t.cb(e[i], {
            name: e[s].widgets[i].name,
            type: e[s].widgets[i].isSingleton ? "singleton" : "constructor",
          }),
        (t.cb = null));
    });
  }
  let R = i.querySelector("head");
  e[s] = e[s] || {
    widgets: {
      ReferrerWidget: {
        name: "ReferrerWidget",
        isSingleton: !0,
        isScriptReady: !1,
        isLinkReady: !1,
        assetsAppended: !1,
      },
      ReferrerSearchBar: {
        name: "ReferrerSearchBar",
        instances: [],
        isSingleton: !1,
        isScriptReady: !1,
        isLinkReady: !1,
        assetsAppended: !1,
      },
      ReferrerLatestJobs: {
        name: "ReferrerLatestJobs",
        instances: [],
        isSingleton: !1,
        isScriptReady: !1,
        isLinkReady: !1,
        assetsAppended: !1,
      },
      ReferrerTestimonials: {
        name: "ReferrerTestimonials",
        isSingleton: !1,
        isScriptReady: !1,
        isLinkReady: !1,
        assetsAppended: !1,
      },
      ReferrerTestimonialsGrid: {
        name: "ReferrerTestimonialsGrid",
        isSingleton: !1,
        isScriptReady: !1,
        isLinkReady: !1,
        assetsAppended: !1,
      },
      ReferrerMeetTheTeam: {
        name: "ReferrerMeetTheTeam",
        isSingleton: !1,
        isScriptReady: !1,
        isLinkReady: !1,
        assetsAppended: !1,
      },
      ReferrerFloatingLink: {
        name: "ReferrerFloatingLink",
        instances: [],
        isSingleton: !1,
        isScriptReady: !1,
        isLinkReady: !1,
      },
      ReferrerYourRatings: {
        name: "ReferrerYourRatings",
        instances: [],
        isSingleton: !1,
        isScriptReady: !1,
        isLinkReady: !1,
      },
      ReferrerCandidateRegistration: {
        name: "ReferrerCandidateRegistration",
        instances: [],
        isSingleton: !1,
        isScriptReady: !1,
        isLinkReady: !1,
      },
      ReferrerReferral: {
        name: "ReferrerReferral",
        instances: [],
        isSingleton: !1,
        isScriptReady: !1,
        isLinkReady: !1,
      },
    },
    load: function (o, c) {
      e[s].widgets[o].assetsAppended ||
        (function (a) {
          if (-1 !== t.indexOf(a)) {
            let t = i.createElement("link"),
              o = i.createElement("script");
            (t.rel = "stylesheet"),
              (t.href = r[a].style),
              (t.onload = function () {
                (e[s].widgets[a].isLinkReady = !0), n(a) && d(a);
              }),
              (o.type = "text/javascript"),
              (o.src = r[a].script),
              (o.onload = function () {
                (e[s].widgets[a].isScriptReady = !0), n(a) && d(a);
              }),
              R.appendChild(t),
              R.appendChild(o),
              (e[s].widgets[a].assetsAppended = !0);
          }
        })(o),
        a.push({ name: o, cb: c }),
        n(o) && d(o);
    },
  };
})(window, document, "referrerio"),
  (function (e, i, s) {
    const t = [
        "RefariWidget",
        "RefariSearchBar",
        "RefariLatestJobs",
        "RefariMeetTheTeam",
        "RefariFloatingLink",
        "RefariYourRatings",
        "RefariTestimonials",
        "RefariTestimonialsGrid",
        "RefariCandidateRegistration",
        "RefariReferral",
        "RefariTalentBoard",
      ],
      r = {
        RefariWidget: {
          script: "https://widget.refari.co/static/widget.1d6fac23.js",
          style: "https://widget.refari.co/static/widget.ec33076f.css",
        },
        RefariSearchBar: {
          script: "https://widget.refari.co/static/searchBar.37787c36.js",
          style: "https://widget.refari.co/static/searchBar.34a67c35.css",
        },
        RefariLatestJobs: {
          script: "https://widget.refari.co/static/latestJobs.56ea3a61.js",
          style: "https://widget.refari.co/static/latestJobs.14befdd8.css",
        },
        RefariTestimonials: {
          script: "https://widget.refari.co/static/testimonials.d74cc291.js",
          style: "https://widget.refari.co/static/testimonials.df78d45d.css",
        },
        RefariTestimonialsGrid: {
          script:
            "https://widget.refari.co/static/testimonialsGrid.ec4f8bc8.js",
          style:
            "https://widget.refari.co/static/testimonialsGrid.b0fe57e3.css",
        },
        RefariMeetTheTeam: {
          script: "https://widget.refari.co/static/meetTheTeam.7f20fd7a.js",
          style: "https://widget.refari.co/static/meetTheTeam.b31c1ef2.css",
        },
        RefariFloatingLink: {
          script: "https://widget.refari.co/static/floatingLink.83f4d2e7.js",
          style: "https://widget.refari.co/static/floatingLink.5b717d08.css",
        },
        RefariYourRatings: {
          script: "https://widget.refari.co/static/yourRatings.bc477953.js",
          style: "https://widget.refari.co/static/yourRatings.1b8143e2.css",
        },
        RefariCandidateRegistration: {
          script:
            "https://widget.refari.co/static/candidateRegistration.8a59e33b.js",
          style:
            "https://widget.refari.co/static/candidateRegistration.3eccfadb.css",
        },
        RefariReferral: {
          script: "https://widget.refari.co/static/referral.f94dd156.js",
          style: "https://widget.refari.co/static/referral.b31c1ef2.css",
        },
        RefariTalentBoard: {
          script: "https://widget.refari.co/static/talentBoard.55d91f8f.js",
          style: "https://widget.refari.co/static/talentBoard.1d26ae34.css",
        },
      };
    let a = [];
    function n(i) {
      const t = e[s].widgets[i];
      return t.isScriptReady && t.isLinkReady;
    }
    function d(i, t) {
      a.forEach(function (t) {
        t.name === i &&
          (console.log("widgetLoader:: listener data", {
            listenerName: t.name,
            widgetName: i,
            hasWidgetInWindow: e[i],
          }),
          t.cb &&
            t.cb(e[i], {
              name: e[s].widgets[i].name,
              type: e[s].widgets[i].isSingleton ? "singleton" : "constructor",
            }),
          (t.cb = null));
      });
    }
    let R = i.querySelector("head");
    e[s] = e[s] || {
      widgets: {
        RefariWidget: {
          name: "RefariWidget",
          isSingleton: !0,
          isScriptReady: !1,
          isLinkReady: !1,
          assetsAppended: !1,
        },
        RefariSearchBar: {
          name: "RefariSearchBar",
          instances: [],
          isSingleton: !1,
          isScriptReady: !1,
          isLinkReady: !1,
          assetsAppended: !1,
        },
        RefariLatestJobs: {
          name: "RefariLatestJobs",
          instances: [],
          isSingleton: !1,
          isScriptReady: 1,
          isLinkReady: !1,
          assetsAppended: !1,
        },
        RefariTestimonials: {
          name: "RefariTestimonials",
          isSingleton: !1,
          isScriptReady: !1,
          isLinkReady: !1,
          assetsAppended: !1,
        },
        RefariTestimonialsGrid: {
          name: "RefariTestimonialsGrid",
          isSingleton: !1,
          isScriptReady: !1,
          isLinkReady: !1,
          assetsAppended: !1,
        },
        RefariMeetTheTeam: {
          name: "RefariMeetTheTeam",
          isSingleton: !1,
          isScriptReady: !1,
          isLinkReady: !1,
          assetsAppended: !1,
        },
        RefariFloatingLink: {
          name: "RefariFloatingLink",
          instances: [],
          isSingleton: !1,
          isScriptReady: !1,
          isLinkReady: !1,
        },
        RefariYourRatings: {
          name: "RefariYourRatings",
          instances: [],
          isSingleton: !1,
          isScriptReady: !1,
          isLinkReady: !1,
        },
        RefariCandidateRegistration: {
          name: "RefariCandidateRegistration",
          instances: [],
          isSingleton: !1,
          isScriptReady: !1,
          isLinkReady: !1,
        },
        RefariReferral: {
          name: "RefariReferral",
          instances: [],
          isSingleton: !1,
          isScriptReady: !1,
          isLinkReady: !1,
        },
        RefariTalentBoard: {
          name: "RefariTalentBoard",
          instances: [],
          isSingleton: !1,
          isScriptReady: !1,
          isLinkReady: !1,
        },
      },
      load: function (o, c) {
          a.push({ name: o, cb: c }),
          (function (a) {
            if (-1 !== t.indexOf(a)) {
              let t = i.createElement("link"),
                o = i.createElement("script");
              (t.rel = "stylesheet"),
                (t.href = r[a].style),
                (t.onload = function () {
                  (e[s].widgets[a].isLinkReady = !0), n(a) && d(a);
                }),
                (o.type = "text/javascript"),
                (o.src = r[a].script),
                (o.onload = function () {
                  (e[s].widgets[a].isScriptReady = !0), n(a) && d(a);
                }),
                R.appendChild(t),
                R.appendChild(o),
                (e[s].widgets[a].assetsAppended = !0);
            }
          })(o);
      },
    };
  })(window, document, "refari");
