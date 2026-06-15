export const voicekeepPrivacyContent = {
  title: "Privacy Policy",

  description: `
    This Privacy Policy explains how
    VoiceKeep handles meeting-related
    information, session processing,
    and user privacy across supported
    browser environments.
    `,

  updatedAt: "2026-06-14",

  effectiveDate: "2026-06-14",

  version: "0.1.0 [Beta]",

  sections: [
    {
      title: "Overview",

      content: `
    VoiceKeep is a browser extension
    that helps users capture, save,
    and export live caption transcripts.

    VoiceKeep is designed with a
    local-first approach, meaning
    transcript data remains on the
    user's device unless the user
    chooses to export it.
    `,
    },

    {
      title: "Data Collection",

      content: `
    VoiceKeep processes visible
    caption text, speaker names,
    timestamps, and session metadata
    required to build transcript
    history during active meetings.

    VoiceKeep does not collect
    personal information beyond
    what is already visible within
    the caption stream.
    `,
    },

    {
      title: "Local Processing",

      content: `
    Transcript generation, speaker
    tracking, session management,
    and transcript exports are
    processed locally within the
    browser environment.

    VoiceKeep does not send
    transcript content to external
    servers for processing.
    `,
    },

    {
      title: "Storage",

      content: `
    Transcript sessions are stored
    locally using Chrome Storage.

    VoiceKeep automatically manages
    stored sessions and may remove
    older transcript history to
    maintain storage limits.

    Exported files are stored only
    when explicitly downloaded by
    the user.
    `,
    },

    {
      title: "Permissions",

      content: `
    VoiceKeep requires access to
    supported meeting pages in
    order to read visible captions.

    The extension also uses Chrome
    Storage to save transcript
    history and Chrome Downloads
    to export transcript files.
    `,
    },

    {
      title: "What VoiceKeep Does Not Do",

      content: `
    VoiceKeep does not record audio,
    access microphones, upload
    transcripts to external servers,
    track browsing activity, or
    require user accounts.
    `,
    },

    {
      title: "Third-Party Services",

      content: `
    VoiceKeep operates within the
    browser environment and relies
    on browser-provided APIs such
    as Chrome Storage and Chrome
    Downloads.

    Transcript quality depends on
    the availability and accuracy
    of captions provided by the
    meeting platform.
    `,
    },

    ,
    {
      title: "User Control",

      content: `
        Users remain responsible for
        managing stored session history,
        extension permissions,
        and optional synchronization features.
        `,
    },

    {
      title: "Contact",

      content: `
    Questions, feedback, or privacy
    concerns may be directed through
    official VoiceKeep's email:<a href="mailto:voicekeep@0xhemant.com?subject=%5BChoose%20Category%5D%20%7C%20VoiceKeep&body=Please%20replace%20%5BChoose%20Category%5D%20in%20the%20subject%20line%20with%20the%20option%20that%20best%20matches%20your%20inquiry%3A%0A%0A%E2%80%A2%20Feature%20Suggestion%0A%E2%80%A2%20Bug%20Report%0A%E2%80%A2%20Privacy%20Query%0A%E2%80%A2%20Important%20Query%0A%0ASelecting%20the%20correct%20category%20helps%20us%20review%20and%20respond%20to%20your%20message%20as%20quickly%20as%20possible.%0A%0ADescribe%20your%20request%20below%3A%0A%0A">
    Contact VoiceKeep
</a>.
    `,
    },

    {
      title: "Policy Updates",

      content: `
        This Privacy Policy may evolve
        as VoiceKeep expands its
        capabilities, infrastructure,
        or supported platforms.
        `,
    },
  ],
};
