export const voicekeepPrivacyContent = {

  title: 'Privacy Policy',

  description:
    `
    This Privacy Policy explains how
    VoiceKeep handles meeting-related
    information, session processing,
    and user privacy across supported
    browser environments.
    `,

  updatedAt: '2026-05-22',

  effectiveDate: '2026-05-20',

  version: '0.1.0 [Beta]',

  sections: [

    {
      title: 'Overview',

      content:
        `
        VoiceKeep is designed as a
        privacy-focused realtime meeting
        memory system that processes
        conversational information
        directly during active sessions.Later the data stays locally on user's device.
        `
    },



    {
      title: 'Data Collection',

      content:
        `
        At current beta stage , VoiceKeep only processes data
        required for realtime caption
        capture, speaker continuity,
        and session-based transcript flow and is totatlly dependent of captions recognised and processed by Google Meet.
        `
    },



    {
      title: 'Local Processing',

      content:
        `
        Transcript processing
        is handled locally within the
        browser environment to reduce
        unnecessary external exposure
        of meeting information.Every processing including caption correction, saving and accessing the transcript are done within user's einvironment thanks to Google chrome api.
        `
    },



    {
      title: 'Storage',

      content:
        `
        During the Online-Meeting while captions are saving automatically every 10 seconds or after the meeting got ended, the transcript remains accessible to download or view,  are totally remains under the Local storage of user's device using Chrome api.
        `
    },



    {
      title: 'Third-Party Services',

      content:
        `
        Only the Meeting getting accessed by VoiceKeep such as Google meet get includes under Third-party.Inluding 'Chrome Blob' feature to download files and 'Chrome Local Storage' to save the transcripts. 
        `
    },



    {
      title: 'User Control',

      content:
        `
        Users remain responsible for
        managing stored session history,
        extension permissions,
        and optional synchronization features.
        `
    },



    {
      title: 'Policy Updates',

      content:
        `
        This Privacy Policy may evolve
        as VoiceKeep expands its
        capabilities, infrastructure,
        or supported platforms.
        `
    }

  ]

};