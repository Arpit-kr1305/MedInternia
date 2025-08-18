import React from 'react';

export default function WebinarJoin({ meetingLink }: { meetingLink: string }) {
  return (
    <iframe
      src={meetingLink}
      style={{ width: '100%', height: '600px', border: 0 }}
      allow="camera; microphone; fullscreen; display-capture"
      title="Live Webinar"
    />
  );
}
