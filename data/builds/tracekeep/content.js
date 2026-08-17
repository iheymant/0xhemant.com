export const tracekeepContents = {
  tracekeep: {
    sections: [
      {
        title: "What is TraceKeep?",

        paragraphs: [
          `
          TraceKeep is a Chrome extension that helps
          you keep track of changes to Instagram
          profiles over time.
          `,

          `
          It can record changes to followers,
          following, and supported profile information,
          then keep those changes available as local
          history.
          `,
        ],
      },

      {
        title: "Why was it created?",

        paragraphs: [
          `
          Small changes on a profile are easy to miss.
          A follower can appear or disappear, profile
          information can change, and there may be no
          simple way to look back at what happened.
          `,

          `
          TraceKeep was created as a lightweight way
          to keep that history organized instead of
          relying on memory or repeatedly checking
          profiles manually.
          `,
        ],
      },

      {
        title: "How it works",

        paragraphs: [
          `
          TraceKeep uses the Instagram account you are
          already logged into to perform its checks.
          You do not need to log into the account you
          are tracking.
          `,

          `
          TraceKeep checks available profile and
          relationship information, creates snapshots,
          and compares later snapshots to identify
          changes.
          `,
        ],
      },

      {
        title: "Tracking changes",

        paragraphs: [
          `
          For supported relationships, TraceKeep can
          compare follower and following snapshots and
          identify accounts that were added or removed
          between checks.
          `,

          `
          Profile information such as username, name,
          and profile picture can also be monitored when
          TraceKeep receives updated information.
          `,
        ],
      },

      {
        title: "Local history",

        paragraphs: [
          `
          TraceKeep keeps its tracking history locally
          in your browser so you can review previously
          detected changes from the extension.
          `,

          `
          The project is designed around keeping the
          tracking history close to the browser rather
          than building a separate remote account or
          cloud dashboard for it.
          `,
        ],
      },

      {
        title: "Responsible use",

        paragraphs: [
          `
          TraceKeep is intended to help you understand
          changes over time. It is not intended to
          harass, stalk, threaten, or invade another
          person's personal life or privacy.
          `,

          `
          You are solely responsible for how you use
          TraceKeep and the information it makes
          available. Please use the extension
          thoughtfully and respect other people's
          boundaries.
          `,
        ],
      },

      {
        title: "Access and privacy limitations",

        paragraphs: [
          `
          TraceKeep works with the access available
          through your existing Instagram session.
          Private accounts, privacy settings, website
          changes, or other access restrictions can
          prevent some information from being collected.
          `,

          `
          TraceKeep does not attempt to bypass those
          restrictions. When information cannot be
          retrieved reliably, the extension may show
          an access warning or keep the snapshot
          incomplete.
          `,
        ],
      },

      {
        title: "Sync and request control",

        paragraphs: [
          `
          Relationship synchronization is performed
          at a controlled pace rather than continuously
          sending requests as quickly as possible.
          `,

          `
          TraceKeep can use count checks, sync
          intervals, request delays, and safety limits
          to decide when a deeper synchronization is
          actually needed.
          `,
        ],
      },

      {
        title: "Beta status",

        paragraphs: [
          `
          TraceKeep is currently an early beta release.
          Some features may behave unexpectedly,
          especially when Instagram changes its website
          or access behavior.
          `,

          `
          Feedback and bug reports are important during
          this stage. When reporting a problem, a clear
          description, screenshot, and relevant error
          message can make it much easier to reproduce.
          `,
        ],
      },

      {
        title: "Who is it for?",

        paragraphs: [
          `
          TraceKeep is for people who want a simple way
          to keep track of changes on Instagram profiles
          they choose to monitor.
          `,

          `
          It is meant to be a practical personal tool:
          check what changed, keep a local history, and
          understand the timeline without turning the
          process into a complicated dashboard.
          `,
        ],
      },
    ],
  },
};
