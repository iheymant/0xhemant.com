export const tracekeepPrivacyContent = {
  title: "Privacy Policy",

  description: `
    This Privacy Policy explains how TraceKeep
    handles Instagram profile information,
    relationship data, synchronization data,
    local history, and other information
    processed while using the extension.
  `,

  updatedAt: "2026-08-17",

  effectiveDate: "2026-08-17",

  sections: [
    {
      title: "Overview",

      content: `
    TraceKeep is a Chrome extension that helps
    users track changes to Instagram profiles,
    followers, following relationships, and
    supported profile information over time.

    TraceKeep is designed around local processing
    and local storage. The extension does not
    operate a separate TraceKeep user account or
    require users to create an account with TraceKeep.

    The information processed by TraceKeep is used
    to provide the extension's tracking, comparison,
    synchronization, and history features.
    `,
    },

    {
      title: "Information TraceKeep Processes",

      content: `
    Depending on the features you use, TraceKeep
    may process information that is available
    through your Instagram session, including:

    • Instagram profile identifiers
    • Usernames and profile names
    • Profile picture URLs
    • Follower and following counts
    • Follower and following relationship information
    • Profile information changes
    • Snapshot and synchronization results
    • Detected additions and removals
    • Sync status, timestamps, and related local
      application state

    TraceKeep processes this information only to
    provide the tracking and history features of
    the extension.
    `,
    },

    {
      title: "How Instagram Access Works",

      content: `
    TraceKeep uses the Instagram account that is
    already logged into your browser.

    You do not need to log into the account you
    choose to track.

    TraceKeep performs supported checks using the
    access available through your existing Instagram
    session and the information made available by
    Instagram to that session.

    Access may depend on Instagram's current website
    behavior, privacy settings, account relationships,
    and other access restrictions.
    `,
    },

    {
      title: "Local Processing",

      content: `
    TraceKeep performs its profile comparison,
    relationship snapshot processing, change
    detection, synchronization state management,
    and history handling within the browser.

    Relationship snapshots and detected changes are
    processed locally so TraceKeep can compare
    information across synchronization sessions.

    TraceKeep does not require a TraceKeep backend
    account or a remote database to provide its core
    tracking and history features.
    `,
    },

    {
      title: "Local Storage",

      content: `
    TraceKeep uses Chrome's local extension storage
    to keep information needed for its features.

    Depending on your use of the extension, locally
    stored information may include tracked profile
    records, tracking preferences, synchronization
    state, relationship snapshots, detected changes,
    profile change history, onboarding state, and
    cached avatar URLs.

    This information is stored in your browser's
    extension storage and is not intentionally
    transmitted by TraceKeep to a TraceKeep server.

    Local storage may grow as more profiles and
    historical changes are recorded. TraceKeep
    applies configured history and storage limits
    where applicable.
    `,
    },

    {
      title: "Profile Pictures and Avatar URLs",

      content: `
    TraceKeep may receive profile picture URLs as part
    of Instagram profile or relationship information.

    Fresh profile picture URLs may be kept in local
    extension storage for avatar caching.

    When a relationship snapshot contains an avatar
    URL, TraceKeep may temporarily fetch the image
    into browser memory so it can be displayed in the
    extension interface.

    The fetched image is not intentionally stored as
    a permanent image file by TraceKeep.
    `,
    },

    {
      title: "Synchronization",

      content: `
    TraceKeep uses synchronization to collect
    relationship information and compare it with
    previously stored snapshots.

    Synchronization may include follower and following
    requests, pagination, count checks, request delays,
    cooldown periods, and safety limits.

    TraceKeep is designed to avoid unnecessary
    synchronization by using count checks,
    synchronization intervals, and stored snapshot
    information when deciding whether a deeper
    synchronization is needed.
    `,
    },

    {
      title: "Sync Tab",

      content: `
    TraceKeep may reserve an Instagram browser tab
    as its synchronization tab.

    This tab is used by TraceKeep when relationship
    synchronization or automatic background checks
    need to interact with Instagram.

    TraceKeep does not require a separate login for
    this tab. It uses the Instagram session already
    available in the browser.

    The reserved tab may be identified in the browser
    as "TraceKeep · Sync" while it is being used as
    the synchronization tab.
    `,
    },

    {
      title: "Automatic Checks",

      content: `
    When a profile is being tracked, TraceKeep may
    perform periodic policy and count checks to
    determine whether a deeper synchronization is
    necessary.

    These checks are part of the extension's tracking
    functionality and are controlled by configured
    synchronization intervals and request limits.

    Automatic checks do not mean that TraceKeep
    continuously downloads the complete follower or
    following list at all times.
    `,
    },

    {
      title: "What TraceKeep Does Not Collect",

      content: `
    TraceKeep does not ask users to provide their
    Instagram password to the extension.

    TraceKeep does not intentionally store your
    Instagram password, session cookies, or other
    authentication credentials in its own storage.

    TraceKeep does not provide a separate TraceKeep
    account or require users to upload their tracking
    history to a TraceKeep server.

    TraceKeep does not intentionally collect unrelated
    browsing activity outside the Instagram access
    required to provide its disclosed features.
    `,
    },

    {
      title: "Data Sharing",

      content: `
    TraceKeep does not sell, rent, or share the
    tracking history stored by the extension with
    advertisers, data brokers, or other third parties.

    The extension's core local data is not intentionally
    transmitted to a TraceKeep backend or third-party
    analytics service.

    TraceKeep does communicate with Instagram and
    Instagram-operated resources when necessary to
    provide its profile, relationship, synchronization,
    and avatar-related functionality.

    No transfer is intended for advertising,
    profiling, or unrelated purposes.
    `,
    },

    {
      title: "Third-Party Services and Resources",

      content: `
    TraceKeep relies on Instagram's website and
    Instagram-operated resources to provide its
    functionality.

    The availability, format, ordering, privacy
    controls, and behavior of Instagram data may
    change independently of TraceKeep.

    TraceKeep does not control Instagram's own
    collection or processing practices. Information
    handled by Instagram is subject to Instagram's
    own terms and privacy policies.
    `,
    },

    {
      title: "Private Accounts and Access Restrictions",

      content: `
    TraceKeep respects the access available through
    the user's existing Instagram session.

    Private accounts and other access restrictions may
    prevent follower or following information from
    being retrieved.

    TraceKeep does not intentionally bypass Instagram
    privacy settings, authentication requirements,
    security controls, or access restrictions.

    When information cannot be retrieved reliably,
    TraceKeep may show an access warning or avoid
    treating an incomplete result as a valid full
    snapshot.
    `,
    },

    {
      title: "Responsible Use",

      content: `
    TraceKeep is intended to help users understand
    changes over time in profiles they choose to
    track.

    TraceKeep is not intended to facilitate harassment,
    stalking, threats, or invasion of another person's
    personal life or privacy.

    Users are solely responsible for how they use
    TraceKeep and the information made available by
    the extension.

    Users should respect applicable laws, platform
    rules, and the privacy and boundaries of other
    people.
    `,
    },

    {
      title: "Account Safety",

      content: `
    TraceKeep is currently provided as a beta release.

    We recommend considering a separate Instagram
    account for beta testing if you are concerned
    about risking access to your primary account.

    This recommendation does not mean that the
    separate account is the account being tracked.
    It is simply the Instagram account already logged
    into the browser that TraceKeep uses to perform
    its supported checks.

    Never provide your Instagram password, session
    cookies,
    authentication codes, or other authentication
    information to anyone claiming to be TraceKeep
    support.
    `,
    },

    {
      title: "Security",

      content: `
    TraceKeep is designed to keep its application
    data within Chrome's local extension storage and
    to avoid unnecessary external transmission.

    Users are responsible for maintaining the security
    of the browser profile and device where TraceKeep
    is installed.

    If the browser profile or device is compromised,
    locally stored TraceKeep information may also be
    accessible to whoever has access to that browser
    environment.
    `,
    },

    {
      title: "Data Retention and Deletion",

      content: `
    TraceKeep keeps local data for as long as it is
    needed to provide tracking and history features,
    subject to the extension's configured storage
    limits.

    Users can remove tracked profiles and associated
    local tracking information through the extension's
    available controls.

    Uninstalling TraceKeep removes the extension from
    the browser, but Chrome's handling of extension
    storage during and after uninstall may depend on
    the browser and its storage behavior.
    `,
    },

    {
      title: "Permissions",

      content: `
    TraceKeep requests permissions that are required
    for its current functionality.

    The storage permission is used for local extension
    data.

    The sidePanel permission is used to provide the
    TraceKeep interface through Chrome's Side Panel.

    Instagram host access is required for the extension's
    Instagram profile detection, relationship
    synchronization, and related features.

    Access to Instagram-operated image resources may
    also be required to display profile pictures
    received from Instagram.

    TraceKeep does not request permissions merely for
    future features that are not currently implemented.
    `,
    },

    {
      title: "Chrome Web Store Limited Use",

      content: `
    TraceKeep uses information obtained through its
    browser and Instagram access only to provide and
    improve the extension's disclosed single purpose:
    helping users track and review Instagram profile
    and relationship changes over time.

    TraceKeep does not sell this information or use it
    for personalized advertising, advertising profiles,
    or unrelated data brokerage purposes.

    User data is not intentionally transferred to
    third parties except where necessary to provide
    the extension's disclosed functionality or as
    otherwise required by applicable law or to protect
    the security of the service and its users.

    TraceKeep's handling of user data is intended to
    comply with the Chrome Web Store User Data Policy,
    including the Limited Use requirements.
    `,
    },

    {
      title: "User Control",

      content: `
    Users control which Instagram profiles they choose
    to track and can stop tracking profiles through the
    extension.

    Users can also clear or remove locally stored
    tracking information using the extension's
    available controls or by removing the extension
    from their browser.

    Users remain responsible for the Instagram account
    used with TraceKeep and for the way they use
    information obtained through the extension.
    `,
    },

    {
      title: "Beta Status and Changes",

      content: `
    TraceKeep is an early beta release.

    Instagram may change its website, endpoints,
    privacy controls, access behavior, or technical
    requirements at any time. These changes may affect
    what TraceKeep can access or how certain features
    behave.

    TraceKeep may also change as new features are
    developed, bugs are fixed, and the project evolves.

    If a future change materially affects how TraceKeep
    collects, uses, stores, or shares user data, this
    Privacy Policy and the relevant product disclosures
    will be updated accordingly.
    `,
    },

    {
      title: "Contact",

      content: `
    Questions, bug reports, feature suggestions, or
    privacy concerns can be sent to:

    <a href="mailto:TraceKeep@0xhemant.com">
      TraceKeep@0xhemant.com
    </a>

    For bug reports, including a screenshot and a
    description of what happened can help us reproduce
    and investigate the issue more efficiently.
    `,
    },

    {
      title: "Policy Updates",

      content: `
    This Privacy Policy may be updated as TraceKeep's
    functionality, supported platforms, storage
    behavior, or data practices change.

    The latest version will be published on the
    TraceKeep website.

    The updated date at the top of this policy indicates
    when the current version was last revised.
    `,
    },
  ],
};
